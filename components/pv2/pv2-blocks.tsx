"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { BuyButton } from "@/components/buy-button"

/* ---------------------------------------------------------------- */
/* Barra de urgência fija arriba + barra de progreso                 */
/* ---------------------------------------------------------------- */
export function UrgencyBar() {
  const [dateLabel, setDateLabel] = useState("")

  useEffect(() => {
    const d = new Date()
    const dd = String(d.getDate()).padStart(2, "0")
    const mm = String(d.getMonth() + 1).padStart(2, "0")
    const yyyy = d.getFullYear()
    setDateLabel(`${dd}/${mm}/${yyyy}`)
  }, [])

  return (
    <div className="sticky top-0 z-50">
      <div className="flex items-center justify-center gap-2 bg-primary px-4 py-2.5 text-center">
        <ClockIcon />
        <span className="font-display text-xs font-extrabold uppercase tracking-wide text-primary-foreground sm:text-sm">
          La oferta expira hoy {dateLabel ? `· ${dateLabel}` : ""}
        </span>
      </div>
      <div className="h-1.5 w-full bg-muted">
        <div className="h-full w-[88%] rounded-r-full bg-verde-cta" />
      </div>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Hero                                                              */
/* ---------------------------------------------------------------- */
export function Pv2Hero() {
  return (
    <section className="px-5 pt-6 pb-10">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <p className="font-display text-sm font-bold uppercase tracking-wide text-primary">¡Últimas oportunidades!</p>

        <h1 className="mt-3 font-display text-3xl font-extrabold uppercase leading-tight text-verde-cta text-balance sm:text-4xl">
          Ahora puedes preparar paletas cremosas para vender todos los días
        </h1>

        <p className="mt-3 font-display text-xl font-extrabold text-chocolate text-balance sm:text-2xl">
          + de 100 Recetas de Paletas Rellenas, Cremosas y Fáciles de Vender.
        </p>

        <p className="mt-4 text-base leading-relaxed text-muted-foreground text-pretty">
          Para quien quiere ganar dinero desde casa sin necesitar ingredientes caros ni pasar horas inventando recetas.
        </p>

        <div className="mx-auto mt-6 max-w-xs overflow-hidden rounded-2xl">
          <Image
            src="/images/ebook-mockup.png"
            alt="Recetario digital de 100 paletas rellenas mostrado en celular y tablet"
            width={600}
            height={600}
            className="h-auto w-full object-contain"
            priority
          />
        </div>

        <div className="mt-6 w-full">
          <BuyButton subLabel="Acceso inmediato · Pago único de $3,90">QUIERO MIS RECETAS</BuyButton>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Bloque de refuerzo                                                */
/* ---------------------------------------------------------------- */
export function Pv2Reinforcement() {
  return (
    <section className="bg-verde-cta px-5 py-10 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-2xl font-extrabold uppercase text-white text-balance sm:text-3xl">
          ¡Sí! Son más de 100 recetas…
        </h2>
        <p className="mt-3 text-base font-semibold leading-relaxed text-white/90 text-pretty">
          Rellenas, cremosas y con el sabor que a todos les encanta, listas para preparar y vender desde el primer día.
        </p>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Galería de recetas                                                */
/* ---------------------------------------------------------------- */
type Recipe = {
  src: string
  numero: string
  nombre: string
  descripcion: string
  categoria: string
}

const gallery: Recipe[] = [
  { src: "/images/pv2/paleta-1.png", numero: "RECETA 33", nombre: "Paleta de Chocolate", descripcion: "con galleta rellena", categoria: "Con Galletas" },
  { src: "/images/pv2/paleta-2.png", numero: "RECETA 32", nombre: "Paleta de Fresa", descripcion: "con galletas de vainilla", categoria: "Con Galletas" },
  { src: "/images/pv2/paleta-3.png", numero: "RECETA 39", nombre: "Paleta de Dulce de Leche", descripcion: "rellena de cajeta", categoria: "Rellenas" },
  { src: "/images/pv2/paleta-4.png", numero: "RECETA 28", nombre: "Paleta de Mango", descripcion: "rellena de maracuyá", categoria: "Rellenas" },
  { src: "/images/pv2/paleta-5.png", numero: "RECETA 31", nombre: "Paleta de Vainilla", descripcion: "con galletas de chocolate", categoria: "Con Galletas" },
  { src: "/images/pv2/paleta-6.png", numero: "RECETA 35", nombre: "Paleta de Coco", descripcion: "con galletas dulces", categoria: "Con Galletas" },
  { src: "/images/pv2/paleta-7.png", numero: "RECETA 29", nombre: "Paleta de Pistacho", descripcion: "rellena de crema", categoria: "Rellenas" },
  { src: "/images/pv2/paleta-8.png", numero: "RECETA 30", nombre: "Paleta de Cheesecake", descripcion: "rellena de frutos rojos", categoria: "Rellenas" },
  { src: "/images/pv2/paleta-9.png", numero: "RECETA 36", nombre: "Paleta de Café", descripcion: "con galleta de chocolate", categoria: "Con Galletas" },
]

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="w-56 shrink-0 overflow-hidden rounded-2xl bg-card shadow-md">
      <div className="relative aspect-[4/3]">
        <Image src={recipe.src || "/placeholder.svg"} alt={recipe.nombre} fill className="object-cover" sizes="224px" />
        <span className="absolute left-2 top-2 rounded-full bg-chocolate/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {recipe.numero}
        </span>
        <span className="absolute right-2 top-2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground">
          {recipe.categoria}
        </span>
      </div>
      <div className="p-4 text-left">
        <h3 className="font-display text-base font-extrabold text-chocolate">{recipe.nombre}</h3>
        <p className="mt-0.5 text-sm italic text-primary">{recipe.descripcion}</p>
        <p className="mt-3 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
          Ver receta <span aria-hidden="true">&rsaquo;</span>
        </p>
      </div>
    </div>
  )
}

function GalleryRow({ items, reverse }: { items: Recipe[]; reverse?: boolean }) {
  const loop = [...items, ...items]
  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {loop.map((item, index) => (
          <RecipeCard key={`${item.src}-${index}`} recipe={item} />
        ))}
      </div>
    </div>
  )
}

export function Pv2Benefits() {
  const firstRow = gallery.slice(0, 5)
  const secondRow = gallery.slice(4, 9)

  return (
    <section className="py-12">
      <div className="mx-auto mb-6 max-w-md px-5 text-center">
        <h2 className="font-display text-2xl font-extrabold uppercase text-chocolate text-balance sm:text-3xl">
          ¡Sí! Son más de <span className="text-verde-cta">100 recetas…</span>
        </h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-muted-foreground text-pretty">
          Cremosas, rellenas y con el sabor que a todos les encanta, listas para preparar y vender.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <GalleryRow items={firstRow} />
        <GalleryRow items={secondRow} reverse />
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Bloque de beneficios (dos columnas)                               */
/* ---------------------------------------------------------------- */
const gains = [
  "Lograr una textura cremosa y acertar desde la primera vez.",
  "Crear un menú variado con sabores económicos y premium.",
  "Empezar a vender desde casa aunque nunca hayas hecho una paleta.",
  "Dejar de desperdiciar ingredientes inventando recetas desde cero.",
  "Cobrar el precio justo por cada paleta con los bonos incluidos.",
  "Consultar las recetas desde tu celular, tablet o computadora.",
  "Tener sabores nuevos para ofrecer durante todo el año.",
  "Preparar recetas fáciles con ingredientes que todos tienen en casa.",
]

export function Pv2Pain() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto mb-8 max-w-3xl text-center">
        <h2 className="font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Al descargar ahora las 100 recetas, <span className="text-verde-cta">vas a poder:</span>
        </h2>
        <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-verde-cta" />
      </div>

      <div className="mx-auto grid max-w-3xl items-center gap-8 md:grid-cols-2">
        <div>
          <h3 className="font-display text-xl font-extrabold uppercase text-verde-cta text-balance">
            ¡Deja de inventar recetas desde cero!
          </h3>
          <ul className="mt-5 flex flex-col gap-3.5">
            {gains.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CircleCheckIcon />
                <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
              </li>
            ))}
          </ul>
          <blockquote className="mt-6 border-l-4 border-verde-cta pl-4 text-sm italic leading-relaxed text-muted-foreground text-pretty">
            {'"'}Organicé este recetario para resolver un problema real: preparar paletas ricas y venderlas sin
            complicación, incluso empezando de cero.{'"'}
          </blockquote>
        </div>

        <div className="overflow-hidden rounded-3xl shadow-lg">
          <div className="relative aspect-[3/4] w-full">
            <Image
              src="/images/pv2/resultados-card.png"
              alt="Variedad de paletas cremosas y rellenas listas para vender"
              fill
              className="object-cover"
              sizes="(min-width: 768px) 400px, 90vw"
            />
            <div className="absolute inset-x-0 top-0 p-5">
              <p className="font-display text-3xl font-extrabold uppercase leading-none text-white drop-shadow-md">
                Resultados
                <br />
                rápidos
              </p>
              <p className="mt-2 max-w-[70%] text-xs font-semibold text-white drop-shadow-md">
                Prepara, sirve y empieza a vender sin complicarte.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Íconos                                                            */
/* ---------------------------------------------------------------- */
function ClockIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-primary-foreground" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
      <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function CircleCheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border-2 border-verde-cta text-verde-cta">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
