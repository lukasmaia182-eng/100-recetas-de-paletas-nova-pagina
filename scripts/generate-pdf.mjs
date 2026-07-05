import { PDFDocument, StandardFonts, rgb, PDFName } from "pdf-lib"
import { readFileSync, writeFileSync, mkdirSync } from "node:fs"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, "..")

const ACCESS_URL = "https://v0-paletas-rellenas-rentables.vercel.app/seuacesso"

// Brand colors
const cream = rgb(0.98, 0.96, 0.92)
const chocolate = rgb(0.29, 0.16, 0.09)
const chocolateSoft = rgb(0.4, 0.26, 0.16)
const orange = rgb(0.83, 0.42, 0.13)
const red = rgb(0.79, 0.16, 0.15)
const white = rgb(1, 1, 1)
const gray = rgb(0.45, 0.4, 0.36)

async function main() {
  const pdf = await PDFDocument.create()
  // A4 portrait: 595.28 x 841.89 pt
  const page = pdf.addPage([595.28, 841.89])
  const { width, height } = page.getSize()

  const fontBold = await pdf.embedFont(StandardFonts.HelveticaBold)
  const fontReg = await pdf.embedFont(StandardFonts.Helvetica)
  const fontObl = await pdf.embedFont(StandardFonts.HelveticaOblique)

  // Background
  page.drawRectangle({ x: 0, y: 0, width, height, color: cream })

  // Top ribbon bar
  page.drawRectangle({ x: 0, y: height - 14, width, height: 14, color: orange })
  page.drawRectangle({ x: 0, y: 0, width, height: 14, color: orange })

  // Cover image
  const imgBytes = readFileSync(join(root, "public/pdf/cover-paletas.png"))
  const img = await pdf.embedPng(imgBytes)
  const imgW = width - 100
  const imgH = imgW * (img.height / img.width)
  const maxImgH = 240
  const drawH = Math.min(imgH, maxImgH)
  const drawW = drawH * (img.width / img.height)
  const imgX = (width - drawW) / 2
  const imgY = height - 60 - drawH
  // rounded-ish frame
  page.drawRectangle({
    x: imgX - 8,
    y: imgY - 8,
    width: drawW + 16,
    height: drawH + 16,
    color: white,
    borderColor: rgb(0.9, 0.86, 0.8),
    borderWidth: 1,
  })
  page.drawImage(img, { x: imgX, y: imgY, width: drawW, height: drawH })

  // Small red badge "ACCESO EXCLUSIVO"
  const badge = "ACCESO EXCLUSIVO"
  const badgeSize = 11
  const badgeW = fontBold.widthOfTextAtSize(badge, badgeSize) + 28
  const badgeX = (width - badgeW) / 2
  const badgeY = imgY - 46
  page.drawRectangle({ x: badgeX, y: badgeY, width: badgeW, height: 24, color: red })
  page.drawText(badge, {
    x: badgeX + 14,
    y: badgeY + 7,
    size: badgeSize,
    font: fontBold,
    color: white,
  })

  // Title
  const drawCentered = (text, y, size, font, color) => {
    const w = font.widthOfTextAtSize(text, size)
    page.drawText(text, { x: (width - w) / 2, y, size, font, color })
  }

  drawCentered("100 RECETAS DE", badgeY - 40, 26, fontBold, chocolate)
  drawCentered("PALETAS RENTABLES", badgeY - 74, 34, fontBold, chocolate)
  drawCentered("Cremosas, rellenas y listas para vender", badgeY - 100, 14, fontObl, orange)

  // Divider
  const divY = badgeY - 120
  page.drawRectangle({ x: (width - 120) / 2, y: divY, width: 120, height: 3, color: orange })

  // Description
  const desc = [
    "Gracias por tu compra. Ya tienes acceso a tu recetario digital",
    "con 100 recetas completas, paso a paso, con costos y precios",
    "de venta sugeridos. Todo lo que necesitas para emprender.",
  ]
  let dy = divY - 30
  for (const line of desc) {
    drawCentered(line, dy, 12.5, fontReg, chocolateSoft)
    dy -= 20
  }

  // BUTTON (clickable link)
  const btnW = 340
  const btnH = 58
  const btnX = (width - btnW) / 2
  const btnY = dy - 60
  const btnLabel = "ACCEDER A MIS RECETAS"
  // shadow
  page.drawRectangle({ x: btnX + 3, y: btnY - 4, width: btnW, height: btnH, color: rgb(0.85, 0.5, 0.2) })
  // main button
  page.drawRectangle({ x: btnX, y: btnY, width: btnW, height: btnH, color: orange })
  const lblSize = 17
  const lblW = fontBold.widthOfTextAtSize(btnLabel, lblSize)
  page.drawText(btnLabel, {
    x: (width - lblW) / 2,
    y: btnY + btnH / 2 - lblSize / 2 + 2,
    size: lblSize,
    font: fontBold,
    color: white,
  })

  // Clickable link annotation over the button
  const linkAnnotation = pdf.context.obj({
    Type: "Annot",
    Subtype: "Link",
    Rect: [btnX, btnY, btnX + btnW, btnY + btnH],
    Border: [0, 0, 0],
    A: {
      Type: "Action",
      S: "URI",
      URI: ACCESS_URL,
    },
  })
  const linkRef = pdf.context.register(linkAnnotation)
  page.node.set(PDFName.of("Annots"), pdf.context.obj([linkRef]))

  // Fallback URL text (also clickable)
  const fallback = "O ingresa a:  v0-paletas-rellenas-rentables.vercel.app/seuacesso"
  drawCentered(fallback, btnY - 30, 10.5, fontReg, gray)

  // Instruction line
  drawCentered("Toca el boton naranja para abrir tu area de acceso.", btnY - 52, 10.5, fontObl, gray)

  // Footer
  drawCentered("Guarda este documento. Tu acceso es permanente.", 40, 10, fontReg, gray)

  const bytes = await pdf.save()
  const outDir = join(root, "public/pdf")
  mkdirSync(outDir, { recursive: true })
  const outPath = join(outDir, "acceso-100-recetas.pdf")
  writeFileSync(outPath, bytes)
  console.log("PDF generado en:", outPath, "(", bytes.length, "bytes )")
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
