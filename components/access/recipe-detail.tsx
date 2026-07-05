import Image from "next/image"
import type { Recipe } from "@/lib/recipes"
import { Heart, Lightbulb, Star, Snowflake, ChefHat, UtensilsCrossed, DollarSign } from "lucide-react"

export function RecipeDetail({ recipe }: { recipe: Recipe }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-chocolate/10">
      {/* Header */}
      <div className="relative bg-secondary px-5 pb-5 pt-6 sm:px-7">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0 flex-1">
            <span className="inline-block rounded-lg bg-chocolate px-3 py-1 font-display text-xs font-extrabold uppercase tracking-widest text-creme">
              {recipe.numero}
            </span>
            <h2 className="mt-3 font-display text-3xl font-extrabold uppercase leading-none text-chocolate text-balance sm:text-4xl">
              {recipe.titulo}
            </h2>
            <p className="mt-1 font-display text-lg font-semibold italic text-primary">{recipe.subtitulo}</p>
          </div>

          <div className="flex shrink-0 items-center gap-4">
            <div className="flex h-20 w-20 flex-col items-center justify-center rounded-full bg-primary text-center text-primary-foreground">
              <span className="text-[10px] font-bold uppercase leading-none">Rinde</span>
              <span className="font-display text-2xl font-extrabold leading-none">{recipe.rinde}</span>
              <span className="text-[9px] font-bold uppercase leading-none">Paletas</span>
            </div>
          </div>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl">
          <Image
            src={recipe.image || "/placeholder.svg"}
            alt={`${recipe.titulo} ${recipe.subtitulo}`}
            width={800}
            height={800}
            className="h-56 w-full object-cover sm:h-72"
          />
        </div>

        <div className="mt-4 flex items-start gap-3 rounded-2xl border border-dashed border-primary/40 bg-card p-4">
          <Heart className="mt-0.5 h-5 w-5 shrink-0 fill-primary text-primary" aria-hidden="true" />
          <p className="text-sm font-medium leading-relaxed text-foreground text-pretty">{recipe.descripcion}</p>
        </div>
      </div>

      <div className="px-5 py-6 sm:px-7">
        {/* Ingredientes */}
        <SectionTitle icon={<UtensilsCrossed className="h-4 w-4" aria-hidden="true" />}>Ingredientes</SectionTitle>
        <ul className="mt-3 flex flex-col gap-2">
          {recipe.ingredientes.map((item) => (
            <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-foreground">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              {item}
            </li>
          ))}
        </ul>

        {recipe.ingredientesExtra && (
          <div className="mt-4">
            <p className="text-sm font-bold text-primary">{recipe.ingredientesExtra.titulo}</p>
            <ul className="mt-2 flex flex-col gap-2">
              {recipe.ingredientesExtra.items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm leading-snug text-foreground">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Dica */}
        <div className="mt-5 flex items-start gap-3 rounded-2xl bg-secondary p-4">
          <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
          <p className="text-sm leading-relaxed text-chocolate">
            <span className="font-extrabold uppercase">Tip: </span>
            {recipe.dica}
          </p>
        </div>

        {/* Ideal para */}
        <div className="mt-4 flex items-center gap-3 rounded-2xl bg-primary p-4 text-primary-foreground">
          <Star className="h-5 w-5 shrink-0 fill-current" aria-hidden="true" />
          <p className="text-sm font-semibold leading-snug">
            <span className="font-extrabold uppercase">Ideal para: </span>
            {recipe.idealPara}
          </p>
        </div>

        {/* Preparación */}
        <div className="mt-6">
          <SectionTitle icon={<ChefHat className="h-4 w-4" aria-hidden="true" />}>Preparación paso a paso</SectionTitle>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {recipe.pasos.map((paso, index) => (
              <li key={index} className="flex gap-3 rounded-2xl border border-border bg-background p-4">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">
                  {index + 1}
                </span>
                <p className="text-sm leading-snug text-foreground">{paso}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Listo */}
        <div className="mt-6 rounded-2xl border-2 border-dashed border-pistache bg-pistache/10 p-5 text-center">
          <p className="font-display text-lg font-extrabold uppercase tracking-wide text-pistache">¡Listo!</p>
          <p className="mt-2 text-sm leading-relaxed text-chocolate text-pretty">{recipe.listo}</p>
        </div>

        {/* Footer info */}
        <div className="mt-6 grid gap-4 sm:grid-cols-3">
          <div className="rounded-2xl bg-secondary p-4">
            <div className="flex items-center gap-2 text-primary">
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

          <div className="rounded-2xl bg-secondary p-4">
            <div className="flex items-center gap-2 text-primary">
              <Snowflake className="h-4 w-4" aria-hidden="true" />
              <p className="font-display text-sm font-extrabold uppercase text-chocolate">Conservación</p>
            </div>
            <p className="mt-2 text-xs leading-snug text-foreground">{recipe.conservacion}</p>
          </div>

          <div className="rounded-2xl bg-secondary p-4">
            <div className="flex items-center gap-2 text-primary">
              <DollarSign className="h-4 w-4" aria-hidden="true" />
              <p className="font-display text-sm font-extrabold uppercase text-chocolate">Costo aproximado</p>
            </div>
            <p className="mt-2 text-xs leading-snug text-foreground">
              Costo por paleta: <span className="font-semibold">{recipe.costoPaleta}</span>
            </p>
            <p className="mt-1 text-xs font-semibold text-chocolate">Precio de venta:</p>
            <p className="mt-1 inline-block rounded-lg bg-primary px-2.5 py-1 font-display text-sm font-extrabold text-primary-foreground">
              {recipe.precioVenta}
            </p>
          </div>
        </div>

        <p className="mt-6 text-center font-display text-sm font-bold italic text-primary">
          Fácil de preparar, deliciosa y perfecta para emprender con éxito.
        </p>
      </div>
    </article>
  )
}

function SectionTitle({ icon, children }: { icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-lg bg-chocolate px-3 py-2 text-creme">
      {icon}
      <span className="font-display text-sm font-extrabold uppercase tracking-wide">{children}</span>
    </div>
  )
}
