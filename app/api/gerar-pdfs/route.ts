import { NextResponse } from "next/server"
import { PDFDocument, rgb, StandardFonts } from "pdf-lib"
import JSZip from "jszip"
import { recipes } from "@/lib/recipes"
import fs from "fs"
import path from "path"

// ── Cores por tema ───────────────────────────────────────────────────────────
const THEME_COLORS: Record<string, [number, number, number]> = {
  chocolate: [0.31, 0.18, 0.08],
  morango:   [0.82, 0.17, 0.27],
  naranja:   [0.93, 0.43, 0.08],
  azul:      [0.08, 0.38, 0.62],
  pistache:  [0.25, 0.52, 0.28],
}

function themeRgb(theme: string) {
  const c = THEME_COLORS[theme] ?? [0.20, 0.20, 0.20]
  return rgb(c[0], c[1], c[2])
}

function themeSoftRgb(theme: string) {
  const c = THEME_COLORS[theme] ?? [0.20, 0.20, 0.20]
  return rgb(c[0] + (1 - c[0]) * 0.88, c[1] + (1 - c[1]) * 0.88, c[2] + (1 - c[2]) * 0.88)
}

// ── Utilitário de quebra de texto ────────────────────────────────────────────
function wrapText(text: string, font: Awaited<ReturnType<PDFDocument["embedFont"]>>, size: number, maxWidth: number): string[] {
  const words = text.split(" ")
  const lines: string[] = []
  let current = ""

  for (const word of words) {
    const test = current ? `${current} ${word}` : word
    if (font.widthOfTextAtSize(test, size) <= maxWidth) {
      current = test
    } else {
      if (current) lines.push(current)
      current = word
    }
  }
  if (current) lines.push(current)
  return lines.length ? lines : [""]
}

// ── Ler imagem do disco ──────────────────────────────────────────────────────
function readImageBytes(imagePath: string): Uint8Array | null {
  try {
    const abs = path.join(process.cwd(), "public", imagePath.replace(/^\//, ""))
    if (fs.existsSync(abs)) return new Uint8Array(fs.readFileSync(abs))
    return null
  } catch {
    return null
  }
}

// ── Construtor do PDF ────────────────────────────────────────────────────────
async function buildPdf(recipe: (typeof recipes)[number]): Promise<Uint8Array> {
  const doc = await PDFDocument.create()

  const bold    = await doc.embedFont(StandardFonts.HelveticaBold)
  const regular = await doc.embedFont(StandardFonts.Helvetica)

  const W = 595
  const MARGIN = 32
  const CONTENT_W = W - MARGIN * 2

  // Calcular altura necessária dinamicamente
  // Vamos usar duas páginas A4 se necessário
  const pages: ReturnType<typeof doc.addPage>[] = []
  const addPage = () => {
    const p = doc.addPage([W, 842])
    pages.push(p)
    return p
  }

  const accent      = themeRgb(recipe.theme)
  const accentSoft  = themeSoftRgb(recipe.theme)
  const white       = rgb(1, 1, 1)
  const dark        = rgb(0.10, 0.10, 0.10)
  const gray        = rgb(0.42, 0.42, 0.42)
  const lightGray   = rgb(0.95, 0.95, 0.95)
  const borderGray  = rgb(0.88, 0.88, 0.88)
  const cardBg      = rgb(1, 1, 1)

  let page = addPage()
  let y = 842 // cursor Y (vai decrementando)

  // ─────────────────────────────────────────────────────────────────────────
  // CABEÇALHO COLORIDO
  // ─────────────────────────────────────────────────────────────────────────
  const HEADER_H = 120
  page.drawRectangle({ x: 0, y: 842 - HEADER_H, width: W, height: HEADER_H, color: accent })

  // Numero da receita (top-left) e Categoria (top-right)
  page.drawText(recipe.numero, { x: MARGIN, y: 842 - 22, size: 9, font: bold, color: white, opacity: 0.8 })
  const catText = recipe.categoria.toUpperCase()
  page.drawText(catText, {
    x: W - MARGIN - bold.widthOfTextAtSize(catText, 9),
    y: 842 - 22,
    size: 9, font: bold, color: white, opacity: 0.8,
  })

  // Rinde (círculo top-right)
  const CIRCLE_R = 34
  const CX = W - MARGIN - CIRCLE_R
  const CY = 842 - HEADER_H + CIRCLE_R + 10
  page.drawCircle({ x: CX, y: CY, size: CIRCLE_R, color: rgb(0, 0, 0), opacity: 0.15 })
  page.drawCircle({ x: CX, y: CY, size: CIRCLE_R - 2, color: white, opacity: 0.15 })

  page.drawText("Rinde", {
    x: CX - bold.widthOfTextAtSize("Rinde", 6) / 2,
    y: CY + 12, size: 6, font: bold, color: white, opacity: 0.9,
  })
  const rindeStr = String(recipe.rinde)
  page.drawText(rindeStr, {
    x: CX - bold.widthOfTextAtSize(rindeStr, 20) / 2,
    y: CY - 6, size: 20, font: bold, color: white,
  })
  page.drawText("Paletas", {
    x: CX - bold.widthOfTextAtSize("Paletas", 6) / 2,
    y: CY - 17, size: 6, font: bold, color: white, opacity: 0.9,
  })

  // Título e subtítulo
  const titleLines = wrapText(recipe.titulo.toUpperCase(), bold, 20, CONTENT_W - CIRCLE_R * 2 - 20)
  let ty = 842 - 44
  for (const line of titleLines) {
    page.drawText(line, { x: MARGIN, y: ty, size: 20, font: bold, color: white })
    ty -= 24
  }
  page.drawText(recipe.subtitulo, { x: MARGIN, y: ty + 4, size: 11, font: regular, color: white, opacity: 0.88 })

  y = 842 - HEADER_H - 16

  // ─────────────────────────────────────────────────────────────────────────
  // FOTO DA PALETA
  // ─────────────────────────────────────────────────────────────────────────
  const IMG_H = 200
  const imgBytes = readImageBytes(recipe.image)
  if (imgBytes) {
    try {
      let img
      const lower = recipe.image.toLowerCase()
      if (lower.endsWith(".png")) {
        img = await doc.embedPng(imgBytes)
      } else {
        img = await doc.embedJpg(imgBytes)
      }
      page.drawRectangle({ x: MARGIN, y: y - IMG_H, width: CONTENT_W, height: IMG_H, color: lightGray })
      page.drawImage(img, {
        x: MARGIN, y: y - IMG_H,
        width: CONTENT_W, height: IMG_H,
      })
    } catch {
      // fallback: retângulo colorido com texto
      page.drawRectangle({ x: MARGIN, y: y - IMG_H, width: CONTENT_W, height: IMG_H, color: accentSoft })
      const imgLabel = recipe.titulo
      page.drawText(imgLabel, {
        x: MARGIN + CONTENT_W / 2 - bold.widthOfTextAtSize(imgLabel, 14) / 2,
        y: y - IMG_H / 2 - 7,
        size: 14, font: bold, color: accent,
      })
    }
  } else {
    page.drawRectangle({ x: MARGIN, y: y - IMG_H, width: CONTENT_W, height: IMG_H, color: accentSoft })
  }
  // Borda arredondada simulada (bordas nos cantos)
  page.drawRectangle({ x: MARGIN, y: y - IMG_H, width: CONTENT_W, height: IMG_H, borderColor: borderGray, borderWidth: 1, color: undefined })
  y -= IMG_H + 12

  // ─────────────────────────────────────────────────────────────────────────
  // DESCRIÇÃO (coração + texto)
  // ─────────────────────────────────────────────────────────────────────────
  const descLines = wrapText(recipe.descripcion, regular, 9, CONTENT_W - 24)
  const DESC_H = 16 + descLines.length * 13 + 12
  page.drawRectangle({ x: MARGIN, y: y - DESC_H, width: CONTENT_W, height: DESC_H, color: cardBg, borderColor: borderGray, borderWidth: 1 })
  // Coração (simulado com ♥)
  page.drawText("♥", { x: MARGIN + 10, y: y - 16, size: 11, font: bold, color: accent })
  let dy = y - 16
  for (const line of descLines) {
    page.drawText(line, { x: MARGIN + 24, y: dy, size: 9, font: regular, color: dark })
    dy -= 13
  }
  y -= DESC_H + 14

  // ─────────────────────────────────────────────────────────────────────────
  // INGREDIENTES
  // ─────────────────────────────────────────────────────────────────────────
  // Pill de seção
  const ING_PILL_W = bold.widthOfTextAtSize("INGREDIENTES", 10) + 32
  page.drawRectangle({ x: MARGIN, y: y - 22, width: ING_PILL_W, height: 22, color: accent })
  page.drawText("INGREDIENTES", { x: MARGIN + 16, y: y - 15, size: 10, font: bold, color: white })
  y -= 30

  const allIng = recipe.ingredientesExtra
    ? [...recipe.ingredientes, ...(recipe.ingredientesExtra?.items ?? [])]
    : recipe.ingredientes

  const ingLinesList = allIng.map((ing) => wrapText(ing, regular, 9, CONTENT_W - 24))
  const ingTotalLines = ingLinesList.reduce((a, b) => a + b.length, 0)
  const ING_H = 16 + ingTotalLines * 13 + (allIng.length - 1) * 3 + 12
  page.drawRectangle({ x: MARGIN, y: y - ING_H, width: CONTENT_W, height: ING_H, color: cardBg, borderColor: borderGray, borderWidth: 1 })

  let iy = y - 14
  for (const lines of ingLinesList) {
    page.drawCircle({ x: MARGIN + 14, y: iy + 3, size: 3, color: accent })
    for (const line of lines) {
      page.drawText(line, { x: MARGIN + 22, y: iy, size: 9, font: regular, color: dark })
      iy -= 13
    }
    iy -= 3
  }
  y -= ING_H + 12

  // ─────────────────────────────────────────────────────────────────────────
  // DICA
  // ─────────────────────────────────────────────────────────────────────────
  const dicaLines = wrapText(`DICA: ${recipe.dica}`, regular, 9, CONTENT_W - 30)
  const DICA_H = 16 + dicaLines.length * 13 + 8
  page.drawRectangle({ x: MARGIN, y: y - DICA_H, width: CONTENT_W, height: DICA_H, color: accentSoft })
  // Ícone de lâmpada simulado com "!"
  page.drawText("!", { x: MARGIN + 10, y: y - 16, size: 13, font: bold, color: accent })
  let dicaY = y - 16
  for (let i = 0; i < dicaLines.length; i++) {
    const line = dicaLines[i]
    if (i === 0) {
      // Primeira linha: "DICA:" em negrito
      const dicaPrefix = "DICA: "
      const prefixW = bold.widthOfTextAtSize(dicaPrefix, 9)
      page.drawText(dicaPrefix, { x: MARGIN + 24, y: dicaY, size: 9, font: bold, color: accent })
      const rest = line.startsWith("DICA: ") ? line.slice(6) : line
      page.drawText(rest, { x: MARGIN + 24 + prefixW, y: dicaY, size: 9, font: regular, color: dark })
    } else {
      page.drawText(line, { x: MARGIN + 24, y: dicaY, size: 9, font: regular, color: dark })
    }
    dicaY -= 13
  }
  y -= DICA_H + 10

  // ─────────────────────────────────────────────────────────────────────────
  // IDEAL PARA (faixa colorida)
  // ─────────────────────────────────────────────────────────────────────────
  const idealText = `IDEAL PARA: ${recipe.idealPara}`
  const idealLines = wrapText(idealText, regular, 9, CONTENT_W - 30)
  const IDEAL_H = 14 + idealLines.length * 13 + 6
  page.drawRectangle({ x: MARGIN, y: y - IDEAL_H, width: CONTENT_W, height: IDEAL_H, color: accent })
  page.drawText("★", { x: MARGIN + 10, y: y - 14, size: 10, font: bold, color: white })
  let idealY = y - 14
  for (let i = 0; i < idealLines.length; i++) {
    const line = idealLines[i]
    if (i === 0) {
      const prefix = "IDEAL PARA: "
      const prefixW = bold.widthOfTextAtSize(prefix, 9)
      page.drawText(prefix, { x: MARGIN + 24, y: idealY, size: 9, font: bold, color: white })
      const rest = line.startsWith("IDEAL PARA: ") ? line.slice(12) : line
      page.drawText(rest, { x: MARGIN + 24 + prefixW, y: idealY, size: 9, font: regular, color: white })
    } else {
      page.drawText(line, { x: MARGIN + 24, y: idealY, size: 9, font: regular, color: white })
    }
    idealY -= 13
  }
  y -= IDEAL_H + 16

  // ─────────────────────────────────────────────────────────────────────────
  // PREPARACIÓN PASO A PASO — pode precisar de nova página
  // ─────────────────────────────────────────────────────────────────────────
  // Verificar se precisa de nova página para a seção de preparo
  const PREP_PILL_H = 30
  const STEP_W = (CONTENT_W - 8) / 2
  const stepsHeights = recipe.pasos.map((paso) => {
    const lines = wrapText(paso, regular, 9, STEP_W - 46)
    return 14 + lines.length * 13 + 14
  })
  // Estima altura total da seção de preparo em 2 colunas
  let col0H = 0, col1H = 0
  stepsHeights.forEach((h, i) => {
    if (i % 2 === 0) col0H += h + 8
    else col1H += h + 8
  })
  const PREP_TOTAL_H = PREP_PILL_H + Math.max(col0H, col1H) + 20

  if (y - PREP_TOTAL_H < 80) {
    // Rodapé na página 1
    drawFooter(page, recipe, bold, regular, white, accent, W, MARGIN)
    page = addPage()
    y = 842 - 30
  }

  // Pill "Preparación paso a paso"
  const PREP_PILL_W = bold.widthOfTextAtSize("PREPARACION PASO A PASO", 10) + 32
  page.drawRectangle({ x: MARGIN, y: y - 22, width: PREP_PILL_W, height: 22, color: accent })
  page.drawText("PREPARACION PASO A PASO", { x: MARGIN + 16, y: y - 15, size: 10, font: bold, color: white })
  y -= 30

  // Grade 2 colunas
  let colY = [y, y]
  const COL_X = [MARGIN, MARGIN + STEP_W + 8]

  recipe.pasos.forEach((paso, i) => {
    const col = i % 2
    const cx = COL_X[col]
    const cy = colY[col]
    const lines = wrapText(paso, regular, 9, STEP_W - 46)
    const STEP_H = 14 + lines.length * 13 + 14

    // Verificar se precisa de nova página no meio dos passos
    if (cy - STEP_H < 80) {
      drawFooter(page, recipe, bold, regular, white, accent, W, MARGIN)
      page = addPage()
      y = 842 - 30
      colY = [y, y]
    }

    page.drawRectangle({
      x: cx, y: colY[col] - STEP_H,
      width: STEP_W, height: STEP_H,
      color: cardBg, borderColor: borderGray, borderWidth: 1,
    })

    // Número do passo (círculo)
    const numStr = String(i + 1)
    page.drawCircle({ x: cx + 16, y: colY[col] - 14, size: 10, color: accent })
    page.drawText(numStr, {
      x: cx + 16 - bold.widthOfTextAtSize(numStr, 8) / 2,
      y: colY[col] - 18, size: 8, font: bold, color: white,
    })

    let stepTextY = colY[col] - 14
    for (const line of lines) {
      page.drawText(line, { x: cx + 32, y: stepTextY, size: 9, font: regular, color: dark })
      stepTextY -= 13
    }

    colY[col] -= STEP_H + 8
  })

  y = Math.min(colY[0], colY[1]) - 12

  // ─────────────────────────────────────────────────────────────────────────
  // LISTO!
  // ─────────────────────────────────────────────────────────────────────────
  const listoLines = wrapText(recipe.listo, regular, 9, CONTENT_W - 110)
  const LISTO_H = Math.max(80, 24 + listoLines.length * 13 + 16)

  if (y - LISTO_H < 180) {
    drawFooter(page, recipe, bold, regular, white, accent, W, MARGIN)
    page = addPage()
    y = 842 - 30
  }

  page.drawRectangle({ x: MARGIN, y: y - LISTO_H, width: CONTENT_W, height: LISTO_H, color: accentSoft, borderColor: accent, borderWidth: 1 })

  // Thumb da imagem à esquerda
  const THUMB_SIZE = LISTO_H - 16
  const thumbBytes = readImageBytes(recipe.image)
  if (thumbBytes) {
    try {
      let img
      if (recipe.image.toLowerCase().endsWith(".png")) {
        img = await doc.embedPng(thumbBytes)
      } else {
        img = await doc.embedJpg(thumbBytes)
      }
      page.drawImage(img, { x: MARGIN + 8, y: y - LISTO_H + 8, width: THUMB_SIZE, height: THUMB_SIZE })
    } catch {
      page.drawRectangle({ x: MARGIN + 8, y: y - LISTO_H + 8, width: THUMB_SIZE, height: THUMB_SIZE, color: accent, opacity: 0.2 })
    }
  } else {
    page.drawRectangle({ x: MARGIN + 8, y: y - LISTO_H + 8, width: THUMB_SIZE, height: THUMB_SIZE, color: accent, opacity: 0.2 })
  }

  const listoTextX = MARGIN + THUMB_SIZE + 18
  page.drawText("¡Listo!", { x: listoTextX, y: y - 20, size: 13, font: bold, color: accent })
  let listoY = y - 34
  for (const line of listoLines) {
    page.drawText(line, { x: listoTextX, y: listoY, size: 9, font: regular, color: dark })
    listoY -= 13
  }

  y -= LISTO_H + 14

  // ─────────────────────────────────────────────────────────────────────────
  // RODAPÉ: Consejos | Conservación | Costo (3 colunas)
  // ─────────────────────────────────────────────────────────────────────────
  const COL3_W = (CONTENT_W - 16) / 3
  const consejosLines = recipe.consejos.map((c) => wrapText(c, regular, 8, COL3_W - 18))
  const conservLines  = wrapText(recipe.conservacion, regular, 8, COL3_W - 18)
  const costoLines    = [
    `Por paleta: ${recipe.costoPaleta}`,
    `Precio sugerido:`,
    recipe.precioVenta,
  ]

  const consejosH = consejosLines.reduce((a, b) => a + b.length * 12 + 4, 0) + 14
  const conservH  = conservLines.length * 12 + 14
  const costoH    = costoLines.length * 14 + 14 + 20 // extra para pill de preço

  const FOOTER_CARD_H = Math.max(consejosH, conservH, costoH) + 16

  if (y - FOOTER_CARD_H < 40) {
    drawFooter(page, recipe, bold, regular, white, accent, W, MARGIN)
    page = addPage()
    y = 842 - 30
  }

  const col3Xs = [MARGIN, MARGIN + COL3_W + 8, MARGIN + (COL3_W + 8) * 2]

  // Consejos
  page.drawRectangle({ x: col3Xs[0], y: y - FOOTER_CARD_H, width: COL3_W, height: FOOTER_CARD_H, color: cardBg, borderColor: borderGray, borderWidth: 1 })
  page.drawText("★", { x: col3Xs[0] + 8, y: y - 15, size: 9, font: bold, color: accent })
  page.drawText("CONSEJOS", { x: col3Xs[0] + 20, y: y - 15, size: 9, font: bold, color: dark })
  let cy0 = y - 28
  for (const lines of consejosLines) {
    page.drawText("•", { x: col3Xs[0] + 8, y: cy0, size: 8, font: bold, color: accent })
    for (const line of lines) {
      page.drawText(line, { x: col3Xs[0] + 16, y: cy0, size: 8, font: regular, color: gray })
      cy0 -= 12
    }
    cy0 -= 4
  }

  // Conservación
  page.drawRectangle({ x: col3Xs[1], y: y - FOOTER_CARD_H, width: COL3_W, height: FOOTER_CARD_H, color: cardBg, borderColor: borderGray, borderWidth: 1 })
  page.drawText("*", { x: col3Xs[1] + 8, y: y - 14, size: 11, font: bold, color: accent })
  page.drawText("CONSERVACION", { x: col3Xs[1] + 20, y: y - 15, size: 9, font: bold, color: dark })
  let cy1 = y - 28
  for (const line of conservLines) {
    page.drawText(line, { x: col3Xs[1] + 8, y: cy1, size: 8, font: regular, color: gray })
    cy1 -= 12
  }

  // Costo
  page.drawRectangle({ x: col3Xs[2], y: y - FOOTER_CARD_H, width: COL3_W, height: FOOTER_CARD_H, color: cardBg, borderColor: borderGray, borderWidth: 1 })
  page.drawText("$", { x: col3Xs[2] + 8, y: y - 14, size: 11, font: bold, color: accent })
  page.drawText("COSTO APROXIMADO", { x: col3Xs[2] + 20, y: y - 15, size: 9, font: bold, color: dark })
  page.drawText(`Costo por paleta: ${recipe.costoPaleta}`, { x: col3Xs[2] + 8, y: y - 30, size: 8, font: regular, color: gray })
  page.drawText("Precio sugerido de venta:", { x: col3Xs[2] + 8, y: y - 43, size: 8, font: bold, color: dark })
  // Pill de precio de venta
  const precioW = bold.widthOfTextAtSize(recipe.precioVenta, 10) + 20
  page.drawRectangle({ x: col3Xs[2] + 8, y: y - 62, width: precioW, height: 18, color: accent })
  page.drawText(recipe.precioVenta, { x: col3Xs[2] + 18, y: y - 58, size: 10, font: bold, color: white })

  y -= FOOTER_CARD_H + 10

  // ─────────────────────────────────────────────────────────────────────────
  // BARRA DE RODAPÉ final
  // ─────────────────────────────────────────────────────────────────────────
  drawFooter(page, recipe, bold, regular, white, accent, W, MARGIN)

  return doc.save()
}

function drawFooter(
  page: ReturnType<PDFDocument["addPage"]>,
  recipe: (typeof recipes)[number],
  bold: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  regular: Awaited<ReturnType<PDFDocument["embedFont"]>>,
  white: ReturnType<typeof rgb>,
  accent: ReturnType<typeof rgb>,
  W: number,
  MARGIN: number,
) {
  page.drawRectangle({ x: 0, y: 0, width: W, height: 26, color: accent })
  page.drawText("100 Recetas de Paletas Cremosas y Rellenas", {
    x: MARGIN, y: 8, size: 8, font: regular, color: white, opacity: 0.85,
  })
  const right = `Receta ${recipe.id} de 100`
  page.drawText(right, {
    x: W - MARGIN - bold.widthOfTextAtSize(right, 8),
    y: 8, size: 8, font: bold, color: white, opacity: 0.85,
  })
}

// ── Handler HTTP ─────────────────────────────────────────────────────────────
export async function GET() {
  try {
    const zip = new JSZip()
    const folder = zip.folder("100-Recetas-de-Paletas")!

    for (const recipe of recipes) {
      const pdfBytes = await buildPdf(recipe)
      const safeName = `${String(recipe.id).padStart(3, "0")}-${recipe.titulo
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .replace(/[^a-z0-9\s-]/g, "")
        .trim()
        .replace(/\s+/g, "-")}.pdf`
      folder.file(safeName, pdfBytes)
    }

    const zipBytes = await zip.generateAsync({
      type: "uint8array",
      compression: "DEFLATE",
      compressionOptions: { level: 5 },
    })

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
