"use client"

import { useState } from "react"
import { BuyButton } from "./buy-button"

const faqs = [
  {
    q: "¿Sirve si nunca hice paletas?",
    a: "Sí. Cada receta está ilustrada y explicada paso a paso, con ingredientes y cantidades exactas, para que aciertes la textura desde la primera vez.",
  },
  {
    q: "¿Cómo recibo el recetario?",
    a: "Es 100% digital. Apenas confirmes tu compra recibes el acceso inmediato para ver las recetas en el celular, la tablet o la computadora.",
  },
  {
    q: "¿Necesito ingredientes caros o difíciles?",
    a: "No. Hay recetas económicas con ingredientes simples para empezar y también opciones premium para quien quiere ampliar su menú.",
  },
  {
    q: "¿Puedo vender las paletas que preparo?",
    a: "Claro. El recetario incluye recetas pensadas para vender, además de bonos con precios, menús, combos y mensajes listos para atender a tus clientes.",
  },
  {
    q: "¿Por qué el precio es tan bajo?",
    a: "Es una promoción de lanzamiento por tiempo limitado. Por eso hoy pagas solo $3,90 en lugar de $97,00, con acceso completo.",
  },
  {
    q: "¿Y si no me gusta?",
    a: "Tienes 7 días de garantía total. Si no te convence, te devolvemos todo tu dinero sin complicaciones.",
  },
]

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="px-5 py-12">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Preguntas frecuentes
        </h2>

        <ul className="mt-7 flex flex-col gap-3">
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

        <div className="mt-8">
          <BuyButton subLabel="Acceso inmediato por solo $3,90" />
        </div>
      </div>
    </section>
  )
}
