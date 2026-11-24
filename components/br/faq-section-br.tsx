"use client"

import { useState } from "react"
import { BuyButton } from "../buy-button"

const buildFaqs = () => [
  {
    q: "Como vou receber o acesso?",
    a: "Logo após a confirmação do pagamento, você recebe o acesso por e-mail.",
  },
  {
    q: "Preciso ter experiência?",
    a: "Não. O passo a passo é ilustrado e feito para iniciantes.",
  },
  {
    q: "Consigo ver pelo celular?",
    a: "Sim, o material é digital e abre no celular, tablet ou computador.",
  },
  {
    q: "Os ingredientes são fáceis de achar?",
    a: "Sim, as receitas usam ingredientes encontrados em mercados comuns.",
  },
  {
    q: "Preciso de uma máquina profissional?",
    a: "Não. É possível preparar as receitas com utensílios básicos de cozinha e formas para picolés.",
  },
  {
    q: "Tenho que pagar todo mês?",
    a: "Não. O pagamento é único, sem mensalidades.",
  },
  {
    q: "Posso imprimir o material?",
    a: "Sim, o PDF pode ser impresso.",
  },
  {
    q: "As receitas servem para vender?",
    a: "Sim. As receitas e o cardápio foram pensados para você produzir e vender.",
  },
]

export function FaqSectionBr({
  price = "R$ 19,90",
  checkoutUrl,
}: {
  price?: string
  checkoutUrl?: string
} = {}) {
  const [open, setOpen] = useState<number | null>(0)
  const faqs = buildFaqs()

  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Perguntas frequentes
        </h2>

        <ul className="mt-5 flex flex-col gap-2.5">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <li key={faq.q} className="overflow-hidden rounded-2xl bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-chocolate">{faq.q}</span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen ? (
                  <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p>
                ) : null}
              </li>
            )
          })}
        </ul>

        <div className="mt-5">
          <BuyButton href={checkoutUrl} subLabel={`Acesso imediato por só ${price}`}>
            QUERO AS 100 RECEITAS
          </BuyButton>
        </div>
      </div>
    </section>
  )
}
