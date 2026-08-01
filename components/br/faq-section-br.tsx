"use client"

import { useState } from "react"
import { BuyButton } from "../buy-button"

const buildFaqs = (price: string) => [
  {
    q: "O produto é físico ou digital?",
    a: "É um produto totalmente digital. Você não vai receber nenhum material físico em casa.",
  },
  {
    q: "Como vou receber o acesso?",
    a: "Depois da confirmação do pagamento, você recebe as instruções para acessar o livro de receitas digital.",
  },
  {
    q: "Preciso ter experiência?",
    a: "Não. O conteúdo foi organizado para iniciantes, com ingredientes, quantidades e preparo passo a passo.",
  },
  {
    q: "Consigo ver pelo celular?",
    a: "Sim. Você pode consultar o material pelo celular, computador ou tablet.",
  },
  {
    q: "Os ingredientes são fáceis de achar?",
    a: "Sim. As receitas priorizam ingredientes acessíveis e fáceis de encontrar em supermercados e lojas de confeitaria do Brasil. Algumas opções premium podem usar ingredientes específicos, mas você também encontra alternativas mais econômicas.",
  },
  {
    q: "Preciso de uma máquina profissional?",
    a: "Não. Você pode começar com utensílios básicos de cozinha e formas para paletas. Os materiais necessários podem variar conforme a receita.",
  },
  {
    q: "Tenho que pagar todo mês?",
    a: `Não. O preço de ${price} é um pagamento único.`,
  },
  {
    q: "Posso imprimir o material?",
    a: "Sim. Você pode imprimir as páginas que preferir usar durante o preparo.",
  },
  {
    q: "As receitas servem para vender?",
    a: "Sim. O material tem opções econômicas, premium, recheadas e mini paletas que podem ser usadas para montar um cardápio. Os resultados dependem de fatores como execução, qualidade, custos, preços, divulgação e demanda local. O produto não garante ganhos.",
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
  const faqs = buildFaqs(price)

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
          <BuyButton href={checkoutUrl} subLabel={`Acesso imediato por só ${price}`} />
        </div>
      </div>
    </section>
  )
}
