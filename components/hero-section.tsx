import Image from "next/image"
import { BuyButton } from "./buy-button"

const bullets = [
  "100 recetas explicadas",
  "Ingredientes fáciles de conseguir",
  "Opciones económicas y premium",
  "Ideal para principiantes",
  "Acceso digital inmediato",
]

export function HeroSection({
  headline,
  subheadline,
  belowImageText,
  imageSrc,
  imageAlt,
  afterCta,
}: {
  headline?: React.ReactNode
  subheadline?: React.ReactNode
  belowImageText?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  afterCta?: React.ReactNode
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-3 pb-8 sm:pt-5">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="font-display text-3xl font-extrabold leading-tight text-chocolate text-balance sm:text-4xl">
          {headline ?? (
            <>
              Prepara paletas cremosas que <span className="text-primary">todos quieren comprar</span> y gana dinero
              desde tu cocina
            </>
          )}
        </h1>

        <p className="mt-2 text-base leading-relaxed text-foreground text-pretty sm:text-lg">
          {subheadline ?? "100 recetas rellenas con medidas exactas y paso a paso, aunque nunca hayas hecho una."}
        </p>

        <div className="relative mt-4 w-full">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
            <Image
              src={imageSrc ?? "/images/hero-mujer-app.png"}
              alt={
                imageAlt ??
                "Mujer sonriente sosteniendo una paleta de chocolate y su celular con el recetario digital, junto a una bandeja de paletas de varios sabores"
              }
              width={800}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-1">
          <p className="text-sm font-semibold text-muted-foreground">
            De <span className="line-through">$19,90</span> por solo hoy
          </p>
          <p className="font-display text-5xl font-extrabold text-primary">$3,90</p>
        </div>

        <div className="mt-4 w-full">
          <BuyButton subLabel="Pago único · Sin mensualidades · Acceso inmediato">QUIERO LAS 100 RECETAS</BuyButton>
        </div>

        <p className="mt-2 text-sm font-medium text-muted-foreground">
          Compra 100% segura · 7 días de garantía · Descarga al instante
        </p>

        <div className="mt-4 w-full text-center">
          <p className="text-base leading-relaxed text-foreground text-pretty sm:text-lg">
            {belowImageText ?? "Sin anunciar y sin hacer promoción, empiezas… y de repente hay gente esperando."}
          </p>
          <p className="mt-1.5 font-display text-xl font-extrabold leading-snug text-primary text-balance sm:text-2xl">
            Y el dinero empieza a entrar cada semana.
          </p>
        </div>

        {afterCta ? <div className="mt-6 w-full">{afterCta}</div> : null}

        <p className="mt-5 text-base leading-relaxed text-foreground text-pretty sm:text-lg">
          Deja de desperdiciar ingredientes inventando recetas desde cero. Con el paso a paso ya listo preparas sabores
          de chocolate, frutas, cajeta, leche condensada y postres famosos, y armas un menú que puedes vender desde el
          primer día.
        </p>

        <ul className="mt-5 grid w-full grid-cols-2 gap-3 text-left">
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
