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
  /** Arte completa pronta (1:1) para publicar no feed */
  feedArt: string
  /** Arte completa pronta (vertical) para publicar nos stories */
  storyArt: string
  /** Cor de fundo suave (hex) para o degradê dos mockups */
  bgFrom: string
  bgTo: string
}

type ColorFamily = "morango" | "naranja" | "chocolate" | "pistache" | "azul"

const COLOR_FAMILIES: Record<ColorFamily, Omit<PackTheme, "image" | "feedArt" | "storyArt">> = {
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

const IMG = "/images/packs"
const ARTE = "/images/arte"

function makeTheme(family: ColorFamily, image: string, artKey: string): PackTheme {
  return {
    ...COLOR_FAMILIES[family],
    image,
    feedArt: `${ARTE}/${artKey}-feed.png`,
    storyArt: `${ARTE}/${artKey}-story.png`,
  }
}

export const PACK_THEMES: Record<string, PackTheme> = {
  // Sabores específicos
  morango: makeTheme("morango", `${IMG}/paleta-morango.png`, "morango"),
  frutos_rojos: makeTheme("morango", `${IMG}/paleta-frutos-rojos.png`, "frutos_rojos"),
  guayaba: makeTheme("morango", `${IMG}/paleta-guayaba.png`, "guayaba"),
  mango: makeTheme("naranja", `${IMG}/paleta-mango.png`, "mango"),
  maracuya: makeTheme("naranja", `${IMG}/paleta-maracuya.png`, "maracuya"),
  pina: makeTheme("naranja", `${IMG}/paleta-pina.png`, "pina"),
  banana: makeTheme("naranja", `${IMG}/paleta-banana.png`, "banana"),
  vainilla: makeTheme("naranja", `${IMG}/paleta-vainilla.png`, "vainilla"),
  dulce_leche: makeTheme("naranja", `${IMG}/paleta-dulce-leche.png`, "dulce_leche"),
  chocolate: makeTheme("chocolate", `${IMG}/paleta-chocolate.png`, "chocolate"),
  cafe: makeTheme("chocolate", `${IMG}/paleta-cafe.png`, "cafe"),
  cookies_cream: makeTheme("chocolate", `${IMG}/paleta-cookies-cream.png`, "cookies_cream"),
  chocolate_blanco: makeTheme("chocolate", `${IMG}/paleta-chocolate-blanco.png`, "chocolate_blanco"),
  pistacho: makeTheme("pistache", `${IMG}/paleta-pistacho.png`, "pistacho"),
  coco: makeTheme("azul", `${IMG}/paleta-coco.png`, "coco"),
  // Genéricos (varios sabores)
  surtido: makeTheme("morango", `${IMG}/paletas-surtido.png`, "surtido"),
  caja: makeTheme("naranja", `${IMG}/paletas-caja.png`, "caja"),
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
