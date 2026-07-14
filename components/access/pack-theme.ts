export type PackTheme = {
  solid: string
  onSolid: string
  text: string
  soft: string
  border: string
  bullet: string
  ring: string
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
  },
  chocolate: {
    solid: "bg-chocolate",
    onSolid: "text-creme",
    text: "text-chocolate",
    soft: "bg-chocolate/10",
    border: "border-chocolate/40",
    bullet: "bg-chocolate",
    ring: "ring-chocolate/30",
  },
  morango: {
    solid: "bg-morango",
    onSolid: "text-creme",
    text: "text-morango",
    soft: "bg-morango/10",
    border: "border-morango/40",
    bullet: "bg-morango",
    ring: "ring-morango/30",
  },
  naranja: {
    solid: "bg-naranja",
    onSolid: "text-creme",
    text: "text-naranja",
    soft: "bg-naranja/10",
    border: "border-naranja/40",
    bullet: "bg-naranja",
    ring: "ring-naranja/30",
  },
  pistache: {
    solid: "bg-pistache",
    onSolid: "text-white",
    text: "text-pistache",
    soft: "bg-pistache/15",
    border: "border-pistache/40",
    bullet: "bg-pistache",
    ring: "ring-pistache/30",
  },
}

export function getPackTheme(theme: string): PackTheme {
  return PACK_THEMES[theme] ?? PACK_THEMES.morango
}
