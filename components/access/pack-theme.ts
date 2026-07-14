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

export const PACK_THEMES: Record<string, PackTheme> = {
  azul: {
    solid: "bg-azul",
    onSolid: "text-creme",
    text: "text-azul",
    soft: "bg-azul/10",
    border: "border-azul/40",
    bullet: "bg-azul",
    ring: "ring-azul/30",
    image: "/images/packs/paleta-coco.png",
    bgFrom: "#fdf6ec",
    bgTo: "#eef1f8",
  },
  chocolate: {
    solid: "bg-chocolate",
    onSolid: "text-creme",
    text: "text-chocolate",
    soft: "bg-chocolate/10",
    border: "border-chocolate/40",
    bullet: "bg-chocolate",
    ring: "ring-chocolate/30",
    image: "/images/packs/paleta-chocolate.png",
    bgFrom: "#fdf3ea",
    bgTo: "#f3e4d6",
  },
  morango: {
    solid: "bg-morango",
    onSolid: "text-creme",
    text: "text-morango",
    soft: "bg-morango/10",
    border: "border-morango/40",
    bullet: "bg-morango",
    ring: "ring-morango/30",
    image: "/images/packs/paleta-morango.png",
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
    image: "/images/packs/paleta-mango.png",
    bgFrom: "#fef6ec",
    bgTo: "#fdeed7",
  },
  pistache: {
    solid: "bg-pistache",
    onSolid: "text-white",
    text: "text-pistache",
    soft: "bg-pistache/15",
    border: "border-pistache/40",
    bullet: "bg-pistache",
    ring: "ring-pistache/30",
    image: "/images/packs/paleta-pistacho.png",
    bgFrom: "#fbf6ea",
    bgTo: "#eef3e4",
  },
}

export function getPackTheme(theme: string): PackTheme {
  return PACK_THEMES[theme] ?? PACK_THEMES.morango
}
