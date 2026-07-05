import Image from "next/image"
import { BuyButton } from "./buy-button"

const includes = [
  "Recetario digital ilustrado con 100 recetas",
  "Lista completa de ingredientes y cantidades",
  "Base y relleno explicados paso a paso",
  "Consejos para lograr más cremosidad",
  "Guía de congelado, montaje y desmoldado",
  "Sustituciones y variaciones de sabores",
  "Ideas de presentación más atractivas",
  "Recetas económicas para empezar",
  "Recetas premium de mayor valor",
  "Mini paletas para fiestas y encargos",
]

const bonuses = [
  "Bono: Precio Justo para Cada Paleta",
  "Bono: 12 Menús Listos para Paletas",
  "Bono: 50 Mensajes Listos para Vender",
  "Bono: 30 Combos Rentables de Paletas",
]

export function OfferCard() {
  return (
    <section id="oferta" className="scroll-mt-4 px-5 py-12">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-card shadow-xl shadow-chocolate/10">
        <div className="flex items-center justify-center bg-primary px-4 py-3">
          <span className="font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground">
            Promoción de lanzamiento
          </span>
        </div>

        <div className="p-6">
          <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance">
            Todo lo que vas a recibir hoy
          </h2>

          <div className="mx-auto mt-5 max-w-xs overflow-hidden rounded-2xl">
            <Image
              src="/images/ebook-mockup.png"
              alt="Recetario digital de paletas mostrado en celular y tablet"
              width={600}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>

          <ul className="mt-6 flex flex-col gap-2.5">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckIcon />
                <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-5 rounded-2xl bg-secondary p-4">
            <p className="mb-3 text-center font-display text-sm font-extrabold uppercase tracking-wide text-primary">
              Bonos incluidos gratis
            </p>
            <ul className="flex flex-col gap-2.5">
              {bonuses.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <GiftIcon />
                  <span className="text-sm font-semibold leading-snug text-chocolate">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-6 text-center">
            <p className="text-base text-muted-foreground">
              De <span className="font-semibold text-muted-foreground line-through">$97,00</span> por solo
            </p>
            <p className="mt-1 font-display text-5xl font-extrabold text-primary">$3,90</p>
            <p className="mt-1 text-sm font-semibold text-pistache">Pago único con acceso inmediato</p>
          </div>

          <div className="mt-6">
            <BuyButton subLabel="Compra 100% segura" />
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pistache text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function GiftIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path
          d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7S9 2 6.5 4.5 12 7 12 7zm0 0s3-5 5.5-2.5S12 7 12 7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
