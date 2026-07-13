import { NextResponse } from "next/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import JSZip from "jszip"
import { recipes } from "@/lib/recipes"

const THEME_COLORS: Record<string, [number, number, number]> = {
  chocolate: [0.31, 0.18, 0.08],
  morango:   [0.85, 0.15, 0.25],
  naranja:   [0.95, 0.45, 0.10],
  azul:      [0.08, 0.38, 0.62],
  pistache:  [0.25, 0.52, 0.28],
}

function hex(theme: string): [number, number, number] {
  return THEME_COLORS[theme] ?? [0.20, 0.20, 0.20]
}

function wrapText(text: string, maxChars: number): string[] {
  const words = text.split(" ")
  const lines: string[] = []
  let current = ""

  for (const word of words) {
    if ((current + " " + word).trim().length <= maxChars) {
      current = (current + " " + word).trim()
    } else {
      if (current) lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)
  return lines
}

async function buildPdf(recipe: typeof recipes[number]): Promise<Uint8Array> {
  const doc = await PDFDocument.create()
  const page = doc.addPage([595, 842]) // A4

  const bold = await doc.embedFont(StandardFonts.HelveticaBold)
  const regular = await doc.embedFont(StandardFonts.Helvetica)

  const { width, height } = page.getSize()
  const accent = hex(recipe.theme)
  const accentRgb = rgb(accent[0], accent[1], accent[2])
  const white = rgb(1, 1, 1)
  const dark = rgb(0.1, 0.1, 0.1)
  const gray = rgb(0.45, 0.45, 0.45)
  const light = rgb(0.95, 0.95, 0.95)

  // ── Cabeçalho colorido ──
  page.drawRectangle({ x: 0, y: height - 110, width, height: 110, color: accentRgb })

  // Numero da receita
  page.drawText(recipe.numero, {
    x: 30,
    y: height - 32,
    size: 10,
    font: bold,
    color: rgb(1, 1, 1, ),
    opacity: 0.75,
  })

  // Categoria
  page.drawText(recipe.categoria.toUpperCase(), {
    x: width - 30 - bold.widthOfTextAtSize(recipe.categoria.toUpperCase(), 10),
    y: height - 32,
    size: 10,
    font: bold,
    color: white,
    opacity: 0.75,
  })

  // Título
  const titleLines = wrapText(recipe.titulo, 38)
  titleLines.forEach((line, i) => {
    page.drawText(line, {
      x: 30,
      y: height - 62 - i * 22,
      size: 20,
      font: bold,
      color: white,
    })
  })

  // Subtítulo
  const subtitulo = recipe.subtitulo.charAt(0).toUpperCase() + recipe.subtitulo.slice(1)
  page.drawText(subtitulo, {
    x: 30,
    y: height - 62 - titleLines.length * 22,
    size: 12,
    font: regular,
    color: white,
    opacity: 0.85,
  })

  let y = height - 130

  // ── Rende / Custo / Preço ──
  page.drawRectangle({ x: 0, y: y - 30, width, height: 30, color: light })

  const infos = [
    `Rende: ${recipe.rinde} paletas`,
    `Custo: ${recipe.costoPaleta}`,
    `Preco de venda: ${recipe.precioVenta}`,
  ]
  const colW = width / 3
  infos.forEach((info, i) => {
    const textW = regular.widthOfTextAtSize(info, 9)
    page.drawText(info, {
      x: i * colW + (colW - textW) / 2,
      y: y - 21,
      size: 9,
      font: regular,
      color: gray,
    })
  })

  y -= 46

  // ── INGREDIENTES ──
  page.drawText("INGREDIENTES", { x: 30, y, size: 11, font: bold, color: accentRgb })
  page.drawLine({ start: { x: 30, y: y - 4 }, end: { x: 565, y: y - 4 }, thickness: 1, color: accentRgb, opacity: 0.3 })
  y -= 18

  const allIng = recipe.ingredientesExtra
    ? [...recipe.ingredientes, ...recipe.ingredientesExtra.items]
    : recipe.ingredientes

  allIng.forEach((ing) => {
    page.drawText("•", { x: 30, y, size: 9, font: bold, color: accentRgb })
    const lines = wrapText(ing, 72)
    lines.forEach((line, li) => {
      page.drawText(line, { x: 42, y: y - li * 12, size: 9, font: regular, color: dark })
    })
    y -= Math.max(lines.length * 12, 14)
  })

  y -= 8

  // ── MODO DE PREPARO ──
  page.drawText("MODO DE PREPARO", { x: 30, y, size: 11, font: bold, color: accentRgb })
  page.drawLine({ start: { x: 30, y: y - 4 }, end: { x: 565, y: y - 4 }, thickness: 1, color: accentRgb, opacity: 0.3 })
  y -= 18

  recipe.pasos.forEach((paso, i) => {
    // Numero do passo
    page.drawCircle({ x: 38, y: y + 4, size: 7, color: accentRgb })
    page.drawText(String(i + 1), {
      x: 38 - bold.widthOfTextAtSize(String(i + 1), 7) / 2,
      y: y,
      size: 7,
      font: bold,
      color: white,
    })

    const lines = wrapText(paso, 68)
    lines.forEach((line, li) => {
      page.drawText(line, { x: 52, y: y - li * 12, size: 9, font: regular, color: dark })
    })
    y -= Math.max(lines.length * 12, 16) + 4
  })

  y -= 8

  // ── DICAS E CONSELHOS ──
  if (y > 80) {
    page.drawText("DICAS", { x: 30, y, size: 11, font: bold, color: accentRgb })
    page.drawLine({ start: { x: 30, y: y - 4 }, end: { x: 565, y: y - 4 }, thickness: 1, color: accentRgb, opacity: 0.3 })
    y -= 16

    recipe.consejos.forEach((dica) => {
      if (y < 60) return
      page.drawText("•", { x: 30, y, size: 9, font: bold, color: accentRgb })
      const lines = wrapText(dica, 72)
      lines.forEach((line, li) => {
        page.drawText(line, { x: 42, y: y - li * 12, size: 9, font: regular, color: dark })
      })
      y -= Math.max(lines.length * 12, 14)
    })
  }

  // ── Rodapé ──
  page.drawRectangle({ x: 0, y: 0, width, height: 28, color: accentRgb })
  page.drawText("100 Recetas de Paletas Cremosas y Rellenas", {
    x: 30,
    y: 9,
    size: 8,
    font: regular,
    color: white,
    opacity: 0.8,
  })
  page.drawText(`Receta ${recipe.id} de 100`, {
    x: width - 30 - regular.widthOfTextAtSize(`Receta ${recipe.id} de 100`, 8),
    y: 9,
    size: 8,
    font: regular,
    color: white,
    opacity: 0.8,
  })

  return doc.save()
}

export async function GET() {
  try {
    const zip = new JSZip()
    const folder = zip.folder("100-Recetas-de-Paletas")!

    for (const recipe of recipes) {
      const pdfBytes = await buildPdf(recipe)
      const fileName = `${String(recipe.id).padStart(3, "0")}-${recipe.titulo.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}-${recipe.subtitulo.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}.pdf`
      folder.file(fileName, pdfBytes)
    }

    const zipBytes = await zip.generateAsync({ type: "uint8array", compression: "DEFLATE", compressionOptions: { level: 6 } })

    return new NextResponse(zipBytes, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": 'attachment; filename="100-Recetas-de-Paletas.zip"',
        "Content-Length": String(zipBytes.byteLength),
      },
    })
  } catch (err) {
    console.error("[v0] Erro ao gerar PDFs:", err)
    return NextResponse.json({ error: "Erro ao gerar os PDFs" }, { status: 500 })
  }
}
