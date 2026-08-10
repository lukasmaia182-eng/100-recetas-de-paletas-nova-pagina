"use client"

import { useState } from "react"

const faqs = [
  {
    q: "Como recebo o material?",
    a: "O acesso é 100% digital. Após a confirmação do pagamento, você recebe o material para acessar de onde quiser.",
  },
  {
    q: "Preciso saber fazer picolés?",
    a: "Não. As receitas são explicadas em passo a passo simples, ideais para quem está começando agora.",
  },
  {
    q: "Quantas receitas estão incluídas?",
    a: "São 100 receitas de picolés recheados, com sabores clássicos e premium, além dos bônus.",
  },
  {
    q: "Posso preparar os picolés para vender?",
    a: "Sim. O material foi pensado para você ampliar seu cardápio, preparar em casa e oferecer aos seus clientes.",
  },
  {
    q: "Os picolés são gourmet e recheados?",
    a: "Sim. As receitas trazem recheios cremosos, coberturas e finalizações premium para um resultado gourmet.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Você tem 7 dias para avaliar o material. Se não for para você, pode solicitar o reembolso dentro do prazo.",
  },
]

export function FaqBrpv1() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="bg-secondary/40 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-3xl">
        <h2 className="text-center font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
          Ficou com alguma dúvida?
        </h2>

        <div className="mt-10 space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i
            return (
              <div key={faq.q} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                >
                  <span className="font-display text-base font-extrabold text-chocolate">{faq.q}</span>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className={`h-5 w-5 shrink-0 text-dourado-dark transition-transform ${isOpen ? "rotate-45" : ""}`}
                    aria-hidden="true"
                  >
                    <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  </svg>
                </button>
                {isOpen ? (
                  <p className="px-5 pb-5 text-sm leading-relaxed text-muted-foreground text-pretty">{faq.a}</p>
                ) : null}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
