"use client"

import { useEffect, useState } from "react"
import { BuyButton } from "../buy-button"

const TOTAL_VAGAS = 50
const VAGAS_INICIAIS = 17

export function ScarcitySectionBr({
  price = "R$ 19,90",
  refPrice = "R$ 47,00",
  checkoutUrl,
}: {
  price?: string
  refPrice?: string
  checkoutUrl?: string
} = {}) {
  const [vagas, setVagas] = useState(VAGAS_INICIAIS)

  useEffect(() => {
    const interval = setInterval(
      () => {
        setVagas((prev) => (prev <= 5 ? prev : prev - 1))
      },
      // Diminui uma vaga a cada 25-45s, de forma irregular, para parecer real
      Math.floor(Math.random() * 20000) + 25000,
    )
    return () => clearInterval(interval)
  }, [])

  const preenchidas = TOTAL_VAGAS - vagas
  const porcentagem = Math.min(100, Math.round((preenchidas / TOTAL_VAGAS) * 100))

  return (
    <section className="bg-chocolate px-5 py-8 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-2xl font-extrabold text-creme text-balance sm:text-3xl">
          Vagas limitadas com esse preço
        </h2>

        <div className="mt-6 rounded-2xl bg-creme p-5 shadow-lg">
          <div className="flex items-end justify-center gap-2">
            <span className="font-display text-5xl font-extrabold tabular-nums text-primary">{vagas}</span>
            <span className="mb-1 font-display text-lg font-bold text-chocolate">
              {vagas === 1 ? "vaga restante" : "vagas restantes"}
            </span>
          </div>

          <div className="mt-4">
            <div
              className="h-3 w-full overflow-hidden rounded-full bg-chocolate/15"
              role="progressbar"
              aria-valuenow={porcentagem}
              aria-valuemin={0}
              aria-valuemax={100}
              aria-label={`${porcentagem}% das vagas já foram preenchidas`}
            >
              <div
                className="h-full rounded-full bg-primary transition-all duration-700 ease-out"
                style={{ width: `${porcentagem}%` }}
              />
            </div>
            <p className="mt-2 text-xs font-bold tracking-wide text-chocolate/70">
              {porcentagem}% das vagas com desconto já foram preenchidas
            </p>
          </div>
        </div>

        <p className="mt-4 text-base leading-relaxed text-creme/90 text-pretty">
          Liberamos um lote limitado de acessos por {price}. Quando as vagas acabarem, o valor volta para {refPrice}.
          Pagamento único, sem mensalidades e com acesso digital imediato.
        </p>

        <div className="mt-5">
          <BuyButton href={checkoutUrl} subLabel={`Garanta uma das últimas vagas por ${price}`}>
            QUERO AS 100 RECEITAS
          </BuyButton>
        </div>
      </div>
    </section>
  )
}
