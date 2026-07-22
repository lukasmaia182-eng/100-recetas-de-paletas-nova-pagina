"use client"

import { useState } from "react"
import { BuyButton } from "./buy-button"

const buildFaqs = (price: string) => [
  {
    q: "¿El producto es físico o digital?",
    a: "Es un producto completamente digital. No recibirás ningún material físico en tu domicilio.",
  },
  {
    q: "¿Cómo recibiré el acceso?",
    a: "Después de la confirmación del pago, recibirás las instrucciones para acceder al recetario digital.",
  },
  {
    q: "¿Necesito experiencia?",
    a: "No. El contenido fue organizado para principiantes, con ingredientes, cantidades y preparación paso a paso.",
  },
  {
    q: "¿Puedo verlo desde mi celular?",
    a: "Sí. Puedes consultar el material desde tu celular, computadora o tablet.",
  },
  {
    q: "¿Los ingredientes se consiguen en México?",
    a: "Las recetas priorizan ingredientes comunes y fáciles de encontrar en México. Algunas opciones premium pueden utilizar ingredientes específicos.",
  },
  {
    q: "¿Necesito una máquina profesional?",
    a: "No. Puedes comenzar con utensilios básicos de cocina y moldes para paletas. Los materiales necesarios pueden variar según la receta.",
  },
  {
    q: "¿Tengo que pagar cada mes?",
    a: `No. El precio de ${price} corresponde a un pago único.`,
  },
  {
    q: "¿Puedo imprimir el material?",
    a: "Sí. Puedes imprimir las páginas que prefieras utilizar durante la preparación.",
  },
  {
    q: "¿Las recetas sirven para vender?",
    a: "Sí. El recetario contiene opciones económicas, premium, rellenas y mini paletas que pueden utilizarse para crear un menú. Los resultados dependen de factores como ejecución, calidad, costos, precios, divulgación y demanda local. El producto no garantiza ingresos.",
  },
]

export function FaqSection({
  price = "$3,90",
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
          Preguntas frecuentes
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
          <BuyButton href={checkoutUrl} subLabel={`Acceso inmediato por solo ${price}`} />
        </div>
      </div>
    </section>
  )
}
