import PDFDocument from "pdfkit"
import fs from "node:fs"
import path from "node:path"

// ---- Configuración ----
const ACCESO_URL = "https://v0-paletas-rellenas-rentables.vercel.app/seuacesso"
const OUT_PATH = path.join(process.cwd(), "public", "acceso-100-paletas.pdf")
const COVER_CANDIDATES = [
  path.join(process.cwd(), "public", "images", "hero-recetario-paletas.png"),
  path.join(process.cwd(), "public", "images", "dulces-brasilenos-mockup.png"),
  path.join(process.cwd(), "public", "images", "dulces-brasilenos-arte.png"),
]
const COVER_IMG = COVER_CANDIDATES.find((p) => fs.existsSync(p))

// ---- Paleta de cores da marca ----
const CREAM = "#FBF3E9"
const CHOCOLATE = "#4A2C1A"
const CHOCO_SOFT = "#7A5C48"
const PINK = "#E14E7C"
const WHATS = "#1FA855"
const WHATS_SOFT = "#E4F6EC"

const PAGE_W = 595.28
const MARGIN = 48
const CONTENT_W = PAGE_W - MARGIN * 2

const doc = new PDFDocument({ size: "A4", margin: 0 })
doc.pipe(fs.createWriteStream(OUT_PATH))

// Fundo creme
doc.rect(0, 0, doc.page.width, doc.page.height).fill(CREAM)

let y = 40

// ---- Etiqueta topo ----
const tag = "ACCESO EXCLUSIVO"
doc.font("Helvetica-Bold").fontSize(10)
const tagW = doc.widthOfString(tag) + 28
const tagX = (PAGE_W - tagW) / 2
doc.roundedRect(tagX, y, tagW, 22, 11).fill(PINK)
doc.fillColor("#FFFFFF").text(tag, tagX, y + 6, { width: tagW, align: "center", characterSpacing: 1.5 })
y += 40

// ---- Capa do produto ----
if (COVER_IMG) {
  const boxW = 240
  const boxH = 240
  const img = doc.openImage(COVER_IMG)
  const scale = Math.min(boxW / img.width, boxH / img.height)
  const drawW = img.width * scale
  const drawH = img.height * scale
  const imgX = (PAGE_W - drawW) / 2
  doc.image(COVER_IMG, imgX, y, { width: drawW, height: drawH })
  y += drawH + 18
}

// ---- Título ----
doc.fillColor(CHOCOLATE).font("Helvetica-Bold").fontSize(26)
doc.text("¡Tu compra está lista!", MARGIN, y, { width: CONTENT_W, align: "center" })
y += 36

doc.fillColor(PINK).font("Helvetica-Bold").fontSize(15)
doc.text("100 Paletas Rellenas y Cremosas", MARGIN, y, { width: CONTENT_W, align: "center" })
y += 30

// ---- Instrução ----
doc.fillColor(CHOCO_SOFT).font("Helvetica").fontSize(12)
doc.text(
  "Da clic en el botón de abajo para entrar a tu área de acceso y ver todas tus recetas ilustradas paso a paso.",
  MARGIN + 20,
  y,
  { width: CONTENT_W - 40, align: "center", lineGap: 3 },
)
y += 52

// ---- Botão CTA (clicável) ----
const btnW = 340
const btnH = 54
const btnX = (PAGE_W - btnW) / 2
doc.roundedRect(btnX, y, btnW, btnH, 27).fill(PINK)
doc.fillColor("#FFFFFF").font("Helvetica-Bold").fontSize(15)
doc.text("ACCEDER A MIS RECETAS AHORA", btnX, y + 19, { width: btnW, align: "center" })
doc.link(btnX, y, btnW, btnH, ACCESO_URL)
y += btnH + 12

// Link de respaldo em texto
doc.fillColor(CHOCO_SOFT).font("Helvetica").fontSize(9)
doc.text("O copia este enlace en tu navegador:", MARGIN, y, { width: CONTENT_W, align: "center" })
y += 13
doc.fillColor(PINK).font("Helvetica-Bold").fontSize(9)
doc.text(ACCESO_URL, MARGIN, y, { width: CONTENT_W, align: "center", link: ACCESO_URL, underline: true })
y += 34

// ---- Destaque WhatsApp ----
const boxX = MARGIN
const boxW = CONTENT_W
const boxH = 150
doc.roundedRect(boxX, y, boxW, boxH, 16).fill(WHATS_SOFT)
doc.roundedRect(boxX, y, boxW, boxH, 16).lineWidth(1.5).stroke(WHATS)

let by = y + 18
doc.fillColor(WHATS).font("Helvetica-Bold").fontSize(13)
doc.text("IMPORTANTE: guarda tu acceso para no perderlo", boxX + 20, by, { width: boxW - 40, align: "center" })
by += 26

doc.fillColor(CHOCOLATE).font("Helvetica").fontSize(11)
const tips = [
  "1. Envía este enlace a tu propio WhatsApp (mensaje a ti misma) o guárdalo en Mensajes destacados.",
  "2. O crea un grupo de WhatsApp solo tuyo y fija el enlace para tenerlo siempre a mano.",
  "3. Así podrás volver a entrar y ver tus recetas cuando quieras, desde cualquier dispositivo.",
]
for (const t of tips) {
  const h = doc.heightOfString(t, { width: boxW - 44, lineGap: 2 })
  doc.text(t, boxX + 22, by, { width: boxW - 44, lineGap: 2 })
  by += h + 8
}
y += boxH + 24

// ---- Rodapé ----
doc.fillColor(CHOCO_SOFT).font("Helvetica").fontSize(9)
doc.text("Contenido digital de uso personal. Gracias por tu compra y mucho éxito con tus ventas.", MARGIN, y, {
  width: CONTENT_W,
  align: "center",
})

doc.end()
console.log("[v0] PDF gerado em:", OUT_PATH)
