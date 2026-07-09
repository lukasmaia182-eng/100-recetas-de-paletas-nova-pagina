import Image from "next/image"
import Link from "next/link"
import { BuyButton } from "@/components/buy-button"

const UPSELL_CHECKOUT_URL = "https://pay.hotmart.com/A102621817B"

const includes = [
  "150 recetas de dulces brasileños que se volvieron virales",
  "Brigadeiros gourmet, besitos y trufas cremosas",
  "Ingredientes y cantidades exactas paso a paso",
  "Versiones económicas y versiones premium para vender",
  "Ideas de presentación y empaque para cobrar más",
  "Acceso digital inmediato, incluso para principiantes",
]

export function UpsellOffer() {
  return (
    <main className="min-h-dvh px-5 py-10">
      <div className="mx-auto max-w-md">
        <div className="text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            Oferta exclusiva solo por hoy
          </span>
          <h1 className="mt-4 font-display text-2xl font-extrabold leading-tight text-chocolate text-balance sm:text-3xl">
            ¡Espera! Tu compra aún no termina
          </h1>
          <p className="mt-3 text-base leading-relaxed text-foreground text-pretty">
            Antes de acceder a tus paletas, aprovecha esta oferta única que no volverás a ver.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl bg-card shadow-xl shadow-chocolate/10">
          <div className="flex items-center justify-center bg-primary px-4 py-3">
            <span className="font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground">
              Oferta única en esta página
            </span>
          </div>

          <div className="p-6">
            <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance">
              Suma 150 Recetas de Dulces Brasileños Virales
            </h2>
            <p className="mt-3 text-center text-base leading-relaxed text-foreground text-pretty">
              Los mismos dulces que arrasan en las redes y se venden solos. Perfectos para ampliar tu menú y ganar
              todavía más desde tu cocina.
            </p>

            <div className="mx-auto mt-5 max-w-xs overflow-hidden rounded-2xl">
              <Image
                src="/images/dulces-brasilenos-mockup.png"
                alt="Recetario digital de dulces brasileños mostrado en celular y tablet"
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

            <div className="mt-6 text-center">
              <p className="text-base text-muted-foreground">
                Valor normal:{" "}
                <span className="font-semibold text-muted-foreground line-through">$17,90</span>
              </p>
              <p className="mt-1 font-display text-5xl font-extrabold text-primary">$4,90</p>
              <p className="mt-1 text-sm font-semibold text-pistache">
                Pago único · Solo en esta página · Producto digital
              </p>
            </div>

            <div className="mt-6">
              <BuyButton href={UPSELL_CHECKOUT_URL} subLabel="Compra 100% segura">
                SÍ, QUIERO AGREGAR ESTAS RECETAS
              </BuyButton>
            </div>

            <div className="mt-4 text-center">
              <Link
                href="/seuacesso"
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                No, gracias. Prefiero seguir sin esta oferta
              </Link>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground text-pretty">
          Esta oferta solo está disponible en esta página y no se repetirá. Al continuar, aceptas recibir el acceso
          digital de forma inmediata.
        </p>
      </div>
    </main>
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
