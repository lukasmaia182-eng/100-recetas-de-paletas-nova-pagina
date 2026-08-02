"use client"

import { useEffect, useState } from "react"
import { BuyButton } from "../buy-button"

const START_SECONDS = 15 * 60

export function ScarcitySectionBr({
  price = "R$ 19,90",
  refPrice = "R$ 47,00",
  checkoutUrl,
}: {
  price?: string
  refPrice?: string
  checkoutUrl?: string
} = {}) {
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
    <section className="bg-chocolate px-5 py-8 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-2xl font-extrabold text-creme text-balance sm:text-3xl">
          Oferta por tempo limitado
        </h2>

        <div className="mt-5 flex items-center justify-center gap-3">
          <TimeBox value={minutes} label="MIN" />
          <span className="font-display text-3xl font-extrabold text-primary">:</span>
          <TimeBox value={seconds} label="SEG" />
        </div>

        <p className="mt-4 text-base leading-relaxed text-creme/90 text-pretty">
          O preço de {price} é só por hoje. Quando o cronômetro chegar a zero, o valor volta a subir. Pagamento único,
          sem mensalidades e com acesso digital. Garanta o seu acesso agora mesmo.
        </p>

        <div className="mt-5">
          <BuyButton href={checkoutUrl} subLabel={`Só hoje por ${price} em vez de ${refPrice}`}>
            QUERO AS 100 RECEITAS
          </BuyButton>
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
