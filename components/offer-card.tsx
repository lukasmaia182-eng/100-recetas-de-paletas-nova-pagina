import Image from "next/image"
import { BuyButton } from "./buy-button"

const includes = [
  "100 recetas organizadas",
  "Ingredientes y cantidades",
  "Preparación paso a paso",
  "Bases cremosas y frutales",
  "Rellenos y combinaciones",
  "Sabores económicos",
  "Sabores premium",
  "Paletas inspiradas en postres",
  "Mini paletas para reuniones y eventos",
  "Consejos de textura",
  "Ideas de presentación",
  "Acceso digital inmediato",
]

const bonuses = [
  "Bono: Precio Justo para Cada Paleta",
  "Bono: 12 Menús Listos para Paletas",
  "Bono: 50 Mensajes Listos para Vender",
  "Bono: 30 Combos Rentables de Paletas",
]

export function OfferCard() {
  return (
    <section id="oferta" className="scroll-mt-4 px-5 py-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-card shadow-xl shadow-chocolate/10">
        <div className="flex items-center justify-center bg-primary px-4 py-3">
          <span className="font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground">
            Promoción de lanzamiento
          </span>
        </div>

        <div className="p-6">
          <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance">
            Todo lo que recibirás
          </h2>
          <p className="mt-1.5 text-center font-display text-base font-bold text-primary">
            100 Recetas de Paletas Rellenas
          </p>

          <div className="mx-auto mt-4 max-w-xs overflow-hidden rounded-2xl">
            <Image
              src="/images/ebook-mockup.png"
              alt="Recetario digital de paletas mostrado en celular y tablet"
              width={600}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>

          <ul className="mt-4 flex flex-col gap-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckIcon />
                <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-2xl bg-secondary p-4">
            <p className="mb-2 text-center font-display text-sm font-extrabold uppercase tracking-wide text-primary">
              Bonos incluidos gratis
            </p>
            <ul className="flex flex-col gap-2">
              {bonuses.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <GiftIcon />
                  <span className="text-sm font-semibold leading-snug text-chocolate">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 text-center">
            <p className="text-base text-muted-foreground">
              Valor de referencia:{" "}
              <span className="font-semibold text-muted-foreground line-through">$19,90</span>
            </p>
            <p className="mt-1 font-display text-5xl font-extrabold text-primary">$3,90</p>
            <p className="mt-1 text-sm font-semibold text-pistache">Pago único · Sin mensualidades · Producto digital</p>
          </div>

          <div className="mt-5">
            <BuyButton subLabel="Compra 100% segura">SÍ, QUIERO LAS 100 RECETAS</BuyButton>
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


