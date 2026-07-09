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
const gallery = [
  { src: "/images/pv2/paleta-1.png", alt: "Paleta cremosa de chocolate con cobertura crujiente" },
  { src: "/images/pv2/paleta-2.png", alt: "Paleta de fresa con trozos de fruta real" },
  { src: "/images/pv2/paleta-3.png", alt: "Paleta de cajeta con caramelo" },
  { src: "/images/pv2/paleta-4.png", alt: "Paleta tropical de mango y maracuyá" },
  { src: "/images/pv2/paleta-5.png", alt: "Paleta de galletas y crema" },
  { src: "/images/pv2/paleta-6.png", alt: "Paleta de coco con ralladura" },
  { src: "/images/pv2/paleta-7.png", alt: "Paleta de pistacho con nueces" },
  { src: "/images/pv2/paleta-8.png", alt: "Paleta estilo cheesecake con frutos rojos" },
]

export function Pv2Benefits() {
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

      <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
        {gallery.map((item) => (
          <div key={item.src} className="relative aspect-square overflow-hidden">
            <Image
              src={item.src || "/placeholder.svg"}
              alt={item.alt}
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Bloque emocional (dolor)                                          */
/* ---------------------------------------------------------------- */
const pains = [
  "Comprar ingredientes y ver la paleta salir dura o sin sabor.",
  "Perder tardes enteras probando recetas que no funcionan.",
  "Vender mucho y, al final del mes, casi no ver ganancia.",
  "Tener siempre los mismos sabores y que el cliente no vuelva.",
]

export function Pv2Pain() {
  return (
    <section className="bg-secondary px-5 py-12">
      <div className="mx-auto max-w-md text-center">
        <h2 className="font-display text-2xl font-extrabold uppercase text-primary text-balance sm:text-3xl">
          ¡Deja de inventar recetas desde cero!
        </h2>
        <ul className="mt-6 flex flex-col gap-3 text-left">
          {pains.map((item) => (
            <li key={item} className="flex items-start gap-3 rounded-2xl bg-card p-4 shadow-sm">
              <XIcon />
              <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <p className="mt-6 text-base font-semibold leading-relaxed text-chocolate text-pretty">
          Con el paso a paso ya listo, sigues las cantidades exactas y aciertas la textura desde la primera vez.
        </p>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Cita del autor                                                    */
/* ---------------------------------------------------------------- */
export function Pv2Quote() {
  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-md rounded-3xl bg-chocolate p-7 text-center">
        <p className="font-display text-lg font-bold leading-relaxed text-creme text-pretty">
          {'"'}Organicé este recetario para resolver un problema real: preparar paletas ricas y venderlas sin complicación,
          incluso empezando de cero.{'"'}
        </p>
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

function XIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </span>
  )
}
