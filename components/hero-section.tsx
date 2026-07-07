import Image from "next/image"
import { BuyButton } from "./buy-button"

const bullets = [
  "100 recetas explicadas",
  "Ingredientes fáciles de conseguir",
  "Opciones económicas y premium",
  "Ideal para principiantes",
  "Acceso digital inmediato",
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden px-5 pt-10 pb-12">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-bold text-secondary-foreground">
          <span className="h-2 w-2 rounded-full bg-primary" />
          Recetario digital ilustrado
        </span>

        <h1 className="font-display text-3xl font-extrabold leading-tight text-chocolate text-balance sm:text-4xl">
          100 Recetas de Paletas Rellenas para crear un menú irresistible y{" "}
          <span className="text-primary">empezar a vender desde casa</span>
        </h1>

        <div className="relative mt-6 w-full">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
            <Image
              src="/images/hero-mujer-app.png"
              alt="Mujer sonriente sosteniendo una paleta de chocolate y su celular con el recetario digital, junto a una bandeja de paletas de varios sabores"
              width={800}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-6 w-full">
          <BuyButton subLabel="Producto 100% digital · Pago único · Sin mensualidades">QUIERO LAS 100 RECETAS</BuyButton>
        </div>

        <p className="mt-6 text-base leading-relaxed text-foreground text-pretty sm:text-lg">
          Prepara paletas cremosas, rellenas y visualmente atractivas siguiendo cantidades e instrucciones paso a paso,
          aunque nunca antes hayas preparado una. Descubre sabores de chocolate, frutas, cajeta, leche condensada y
          postres famosos sin desperdiciar ingredientes inventando recetas desde cero.
        </p>

        <p className="mt-4 font-display text-lg font-extrabold text-chocolate">
          Accede hoy por solo <span className="text-primary">$3,90</span>
        </p>

        <ul className="mt-6 grid w-full grid-cols-2 gap-3 text-left">
          {bullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 rounded-2xl bg-card p-3 shadow-sm">
              <CheckIcon />
              <span className="text-sm font-semibold leading-snug text-chocolate">{bullet}</span>
            </li>
          ))}
        </ul>
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
