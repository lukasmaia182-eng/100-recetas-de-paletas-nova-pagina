export type PackTheme = {
  solid: string
  onSolid: string
  text: string
  soft: string
  border: string
  bullet: string
  ring: string
  /** Caminho da imagem realista da paleta usada nos mockups */
  image: string
  /** Cor de fundo suave (hex) para o degradê dos mockups */
  bgFrom: string
  bgTo: string
}

type ColorFamily = "morango" | "naranja" | "chocolate" | "pistache" | "azul"

const COLOR_FAMILIES: Record<ColorFamily, Omit<PackTheme, "image">> = {
  morango: {
    solid: "bg-morango",
    onSolid: "text-creme",
    text: "text-morango",
    soft: "bg-morango/10",
    border: "border-morango/40",
    bullet: "bg-morango",
    ring: "ring-morango/30",
    bgFrom: "#fef3f0",
    bgTo: "#fbe4e6",
  },
  naranja: {
    solid: "bg-naranja",
    onSolid: "text-creme",
    text: "text-naranja",
    soft: "bg-naranja/10",
    border: "border-naranja/40",
    bullet: "bg-naranja",
    ring: "ring-naranja/30",
    bgFrom: "#fef6ec",
    bgTo: "#fdeed7",
  },
  chocolate: {
    solid: "bg-chocolate",
    onSolid: "text-creme",
    text: "text-chocolate",
    soft: "bg-chocolate/10",
    border: "border-chocolate/40",
    bullet: "bg-chocolate",
    ring: "ring-chocolate/30",
    bgFrom: "#fdf3ea",
    bgTo: "#f3e4d6",
  },
  pistache: {
    solid: "bg-pistache",
    onSolid: "text-white",
    text: "text-pistache",
    soft: "bg-pistache/15",
    border: "border-pistache/40",
    bullet: "bg-pistache",
    ring: "ring-pistache/30",
    bgFrom: "#fbf6ea",
    bgTo: "#eef3e4",
  },
  azul: {
    solid: "bg-azul",
    onSolid: "text-creme",
    text: "text-azul",
    soft: "bg-azul/10",
    border: "border-azul/40",
    bullet: "bg-azul",
    ring: "ring-azul/30",
    bgFrom: "#fdf6ec",
    bgTo: "#eef1f8",
  },
}

function makeTheme(family: ColorFamily, image: string): PackTheme {
  return { ...COLOR_FAMILIES[family], image }
}

const IMG = "/images/packs"

export const PACK_THEMES: Record<string, PackTheme> = {
  // Sabores específicos
  morango: makeTheme("morango", `${IMG}/paleta-morango.png`),
  frutos_rojos: makeTheme("morango", `${IMG}/paleta-frutos-rojos.png`),
  guayaba: makeTheme("morango", `${IMG}/paleta-guayaba.png`),
  mango: makeTheme("naranja", `${IMG}/paleta-mango.png`),
  maracuya: makeTheme("naranja", `${IMG}/paleta-maracuya.png`),
  pina: makeTheme("naranja", `${IMG}/paleta-pina.png`),
  banana: makeTheme("naranja", `${IMG}/paleta-banana.png`),
  vainilla: makeTheme("naranja", `${IMG}/paleta-vainilla.png`),
  dulce_leche: makeTheme("naranja", `${IMG}/paleta-dulce-leche.png`),
  chocolate: makeTheme("chocolate", `${IMG}/paleta-chocolate.png`),
  cafe: makeTheme("chocolate", `${IMG}/paleta-cafe.png`),
  cookies_cream: makeTheme("chocolate", `${IMG}/paleta-cookies-cream.png`),
  chocolate_blanco: makeTheme("chocolate", `${IMG}/paleta-chocolate-blanco.png`),
  pistacho: makeTheme("pistache", `${IMG}/paleta-pistacho.png`),
  coco: makeTheme("azul", `${IMG}/paleta-coco.png`),
  // Genéricos (varios sabores)
  surtido: makeTheme("morango", `${IMG}/paletas-surtido.png`),
  caja: makeTheme("naranja", `${IMG}/paletas-caja.png`),
}

export function getPackTheme(theme: string): PackTheme {
  return PACK_THEMES[theme] ?? PACK_THEMES.surtido
}

/**
 * Detecta o sabor a partir do texto do título e devolve a chave de tema
 * correspondente. Se nenhum sabor for reconhecido, devolve `fallback`.
 * A ordem importa: verificamos primeiro os termos mais específicos.
 */
export function detectThemeFromTitle(titulo: string, fallback = "surtido"): string {
  const t = titulo
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")

  const rules: Array<[RegExp, string]> = [
    [/chocolate blanco/, "chocolate_blanco"],
    [/cookies|cream/, "cookies_cream"],
    [/avellana/, "chocolate"],
    [/chocolate/, "chocolate"],
    [/cafe/, "cafe"],
    [/dulce de leche|leche condensada|caramelo/, "dulce_leche"],
    [/pistacho/, "pistacho"],
    [/maracuya/, "maracuya"],
    [/mango/, "mango"],
    [/coco/, "coco"],
    [/pina|pina|anana/, "pina"],
    [/banana|platano/, "banana"],
    [/vainilla/, "vainilla"],
    [/guayaba/, "guayaba"],
    [/frutos rojos|frambuesa|zarzamora|berries|mora/, "frutos_rojos"],
    [/fresa|frutilla/, "morango"],
  ]

  for (const [re, theme] of rules) {
    if (re.test(t)) return theme
  }
  return fallback
}
