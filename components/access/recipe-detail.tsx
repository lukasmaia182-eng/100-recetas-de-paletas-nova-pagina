import Image from "next/image"
import type { Recipe } from "@/lib/recipes"
import { Heart, Lightbulb, Star, Snowflake, ChefHat, UtensilsCrossed, DollarSign, IceCream } from "lucide-react"

type Theme = {
  solid: string
  onSolid: string
  text: string
  soft: string
  border: string
  fill: string
  bullet: string
}

const THEMES: Record<string, Theme> = {
  azul: {
    solid: "bg-azul",
    onSolid: "text-creme",
    text: "text-azul",
    soft: "bg-azul/10",
    border: "border-azul/40",
    fill: "fill-azul text-azul",
    bullet: "bg-azul",
  },
  chocolate: {
    solid: "bg-chocolate",
    onSolid: "text-creme",
    text: "text-chocolate",
    soft: "bg-chocolate/10",
    border: "border-chocolate/40",
    fill: "fill-chocolate text-chocolate",
    bullet: "bg-chocolate",
  },
  morango: {
    solid: "bg-morango",
    onSolid: "text-creme",
    text: "text-morango",
    soft: "bg-morango/10",
    border: "border-morango/40",
    fill: "fill-morango text-morango",
    bullet: "bg-morango",
  },
  naranja: {
    solid: "bg-naranja",
    onSolid: "text-creme",
    text: "text-naranja",
    soft: "bg-naranja/10",
    border: "border-naranja/40",
    fill: "fill-naranja text-naranja",
    bullet: "bg-naranja",
  },
  pistache: {
    solid: "bg-pistache",
    onSolid: "text-white",
    text: "text-pistache",
    soft: "bg-pistache/15",
    border: "border-pistache/40",
    fill: "fill-pistache text-pistache",
    bullet: "bg-pistache",
  },
}

const ACCENT_BY_SLUG: Record<string, keyof typeof THEMES | undefined> = {
  "fresa-con-crema": "morango",
  "chocolate-caramelo-salado": "chocolate",
  "cookies-and-cream": "azul",
  "dulce-de-leche-con-nuez": "naranja",
  pistacho: "pistache",
  "mango-con-chamoy": "naranja",
  "coco-cremosa": "pistache",
  "cheesecake-frutos-rojos": "morango",
  "cafe-capuchino": "chocolate",
  "limon-cremosa": "pistache",
  "maracuya-cremosa": "naranja",
  "vainilla-con-chispas": "chocolate",
}

export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  const theme = THEMES[ACCENT_BY_SLUG[recipe.slug] ?? "morango"]

  return (
    <article className="overflow-hidden rounded-[28px] border border-border bg-secondary shadow-xl shadow-chocolate/10">
      {/* Header */}
      <div className="px-5 pb-6 pt-6 sm:px-8">
        <div className="flex items-start justify-between gap-4">
          <span
            className={`inline-block -rotate-1 rounded-lg ${theme.solid} px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.15em] ${theme.onSolid} shadow-sm`}
          >
            {recipe.numero}
          </span>
          <div
            className={`flex h-[74px] w-[74px] shrink-0 flex-col items-center justify-center rounded-full ${theme.solid} text-center ${theme.onSolid} shadow-md`}
          >
            <span className="text-[9px] font-bold uppercase leading-none tracking-wider">Rinde</span>
            <span className="font-display text-3xl font-extrabold leading-none">{recipe.rinde}</span>
            <span className="text-[8px] font-bold uppercase leading-none tracking-wider">Paletas</span>
          </div>
        </div>

        <h2 className={`mt-3 font-display text-3xl font-extrabold uppercase leading-[0.95] ${theme.text} text-balance sm:text-4xl`}>
          {recipe.titulo}
        </h2>
        <p className={`mt-1 font-display text-xl font-semibold italic ${theme.text} opacity-90`}>{recipe.subtitulo}</p>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-card">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={`${recipe.titulo} ${recipe.subtitulo}`}
            width={800}
            height={800}
            className="h-60 w-full object-cover sm:h-80"
          />
        </div>

        <div className={`mt-4 flex items-start gap-3 rounded-2xl border-2 border-dashed ${theme.border} bg-card p-4`}>
          <Heart className={`mt-0.5 h-5 w-5 shrink-0 ${theme.fill}`} aria-hidden="true" />
          <p className="text-sm font-medium leading-relaxed text-foreground text-pretty">{recipe.descripcion}</p>
        </div>
      </div>

      <div className="px-5 pb-8 sm:px-8">
        {/* Ingredientes */}
        <SectionPill theme={theme} icon={<UtensilsCrossed className="h-4 w-4" aria-hidden="true" />}>
          Ingredientes
        </SectionPill>
        <div className={`mt-3 rounded-2xl border ${theme.border} bg-card p-5`}>
          <ul className="flex flex-col gap-2">
            {recipe.ingredientes.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-foreground">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bullet}`} />
                {item}
              </li>
            ))}
          </ul>

          {recipe.ingredientesExtra && (
            <div className="mt-4">
              <p className={`text-sm font-extrabold ${theme.text}`}>{recipe.ingredientesExtra.titulo}</p>
              <ul className="mt-2 flex flex-col gap-2">
                {recipe.ingredientesExtra.items.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-foreground">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bullet}`} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Dica */}
        <div className={`mt-4 flex items-start gap-3 rounded-2xl ${theme.soft} p-4`}>
          <Lightbulb className={`mt-0.5 h-5 w-5 shrink-0 ${theme.text}`} aria-hidden="true" />
          <p className="text-sm leading-relaxed text-chocolate">
            <span className={`font-extrabold uppercase ${theme.text}`}>Dica: </span>
            {recipe.dica}
          </p>
        </div>

        {/* Ideal para */}
        <div className={`mt-4 flex items-center gap-3 rounded-2xl ${theme.solid} p-4 ${theme.onSolid}`}>
          <Star className="h-5 w-5 shrink-0 fill-current" aria-hidden="true" />
          <p className="text-sm font-semibold leading-snug">
            <span className="font-extrabold uppercase">Ideal para: </span>
            {recipe.idealPara}
          </p>
        </div>

        {/* Preparación */}
        <div className="mt-6">
          <SectionPill theme={theme} icon={<ChefHat className="h-4 w-4" aria-hidden="true" />}>
            Preparación paso a paso
          </SectionPill>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {recipe.pasos.map((paso, index) => (
              <li key={index} className={`flex gap-3 rounded-2xl border ${theme.border} bg-card p-4`}>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${theme.solid} font-display text-sm font-extrabold ${theme.onSolid}`}
                >
                  {index + 1}
                </span>
                <p className="text-sm leading-snug text-foreground">{paso}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Listo */}
        <div className={`mt-6 flex flex-col items-center gap-4 rounded-2xl border-2 border-dashed ${theme.border} ${theme.soft} p-5 text-center sm:flex-row sm:text-left`}>
          <div className="h-24 w-24 shrink-0 overflow-hidden rounded-2xl border border-border bg-card">
            <Image
              src={recipe.image || "/placeholder.svg"}
              alt=""
              width={200}
              height={200}
              className="h-full w-full object-cover"
            />
          </div>
          <div>
            <p className={`inline-flex items-center gap-1.5 font-display text-lg font-extrabold uppercase tracking-wide ${theme.text}`}>
              <IceCream className="h-5 w-5" aria-hidden="true" />
              ¡Listo!
            </p>
            <p className="mt-1 text-sm leading-relaxed text-chocolate text-pretty">{recipe.listo}</p>
          </div>
        </div>

        {/* Footer info */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={`flex items-center gap-2 ${theme.text}`}>
              <Star className="h-4 w-4 fill-current" aria-hidden="true" />
              <p className="font-display text-sm font-extrabold uppercase text-chocolate">Consejos</p>
            </div>
            <ul className="mt-2 flex flex-col gap-1.5">
              {recipe.consejos.map((c) => (
                <li key={c} className="text-xs leading-snug text-foreground">
                  • {c}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={`flex items-center gap-2 ${theme.text}`}>
              <Snowflake className="h-4 w-4" aria-hidden="true" />
              <p className="font-display text-sm font-extrabold uppercase text-chocolate">Conservación</p>
            </div>
            <p className="mt-2 text-xs leading-snug text-foreground">{recipe.conservacion}</p>
          </div>

          <div className="rounded-2xl border border-border bg-card p-4">
            <div className={`flex items-center gap-2 ${theme.text}`}>
              <DollarSign className="h-4 w-4" aria-hidden="true" />
              <p className="font-display text-sm font-extrabold uppercase text-chocolate">Costo aproximado</p>
            </div>
            <p className="mt-2 text-xs leading-snug text-foreground">
              Costo por paleta: <span className="font-semibold">{recipe.costoPaleta}</span>
            </p>
            <p className="mt-1 text-xs font-semibold text-chocolate">Precio sugerido de venta:</p>
            <p className={`mt-1 inline-block rounded-lg ${theme.solid} px-2.5 py-1 font-display text-sm font-extrabold ${theme.onSolid}`}>
              {recipe.precioVenta}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div className={`${theme.solid} px-5 py-3 text-center`}>
        <p className={`font-display text-sm font-bold italic ${theme.onSolid}`}>
          Fácil de preparar, deliciosa y perfecta para emprender con éxito.
        </p>
      </div>
    </article>
  )
}

function SectionPill({
  theme,
  icon,
  children,
}: {
  theme: Theme
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg ${theme.solid} px-3 py-2 ${theme.onSolid}`}>
      {icon}
      <span className="font-display text-sm font-extrabold uppercase tracking-wide">{children}</span>
    </div>
  )
}
