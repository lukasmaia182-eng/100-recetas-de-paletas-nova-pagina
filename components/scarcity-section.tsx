"use client"

import { useEffect, useState } from "react"
import { BuyButton } from "./buy-button"

const START_SECONDS = 15 * 60

export function ScarcitySection() {
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 0 ? 0 : prev - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  return (
    <section className="bg-chocolate px-5 py-12 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-2xl font-extrabold text-creme text-balance sm:text-3xl">
          Oferta por tiempo limitado
        </h2>

        <div className="mt-6 flex items-center justify-center gap-3">
          <TimeBox value={minutes} label="MIN" />
          <span className="font-display text-3xl font-extrabold text-primary">:</span>
          <TimeBox value={seconds} label="SEG" />
        </div>

        <p className="mt-6 text-base leading-relaxed text-creme/90 text-pretty">
          El precio de $3,90 es solo por hoy. Cuando el cronómetro llegue a cero, el valor vuelve a subir. Pago único,
          sin mensualidades y con acceso digital. Asegura tu acceso ahora mismo.
        </p>

        <div className="mt-7">
          <BuyButton subLabel="Solo hoy por $3,90 en lugar de $19,90" />
        </div>
      </div>
    </section>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-creme font-display text-4xl font-extrabold tabular-nums text-chocolate shadow-lg">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-xs font-bold tracking-widest text-creme/70">{label}</span>
    </div>
  )
}
