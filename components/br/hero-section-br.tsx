import Image from "next/image"
import { BuyButton } from "../buy-button"

const bullets = [
  "100 receitas explicadas",
  "Ingredientes fáceis de achar",
  "Opções econômicas e premium",
  "Ideal para iniciantes",
  "Acesso digital imediato",
]

export function HeroSectionBr({
  headline,
  subheadline,
  belowImageText,
  imageSrc,
  imageAlt,
  afterCta,
  flushHeadline = false,
  price = "R$ 19,90",
  refPrice = "R$ 47,00",
  checkoutUrl,
}: {
  headline?: React.ReactNode
  subheadline?: React.ReactNode
  belowImageText?: React.ReactNode
  imageSrc?: string
  imageAlt?: string
  afterCta?: React.ReactNode
  flushHeadline?: boolean
  price?: string
  refPrice?: string
  checkoutUrl?: string
}) {
  return (
    <section className="relative overflow-hidden px-5 pt-3 pb-8 sm:pt-5">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="w-full font-display text-2xl font-extrabold leading-tight text-chocolate text-balance sm:text-3xl">
          {headline ?? (
            <>
              Aprenda a preparar <span className="text-primary">picolés gourmet recheados</span> com receitas organizadas e fáceis de consultar
            </>
          )}
        </h1>

        {subheadline === undefined ? (
          <p className="mt-2 text-base leading-relaxed text-foreground text-pretty sm:text-lg">
            100 receitas recheadas com medidas exatas e passo a passo, mesmo que você nunca tenha feito uma.
          </p>
        ) : subheadline ? (
          <p className="mt-2 text-base leading-relaxed text-foreground text-pretty sm:text-lg">{subheadline}</p>
        ) : null}

        <div className={`relative w-full ${flushHeadline ? "mt-0" : "mt-4"}`}>
          <div
            className={`overflow-hidden shadow-xl shadow-primary/10 ${flushHeadline ? "rounded-b-3xl" : "rounded-3xl"}`}
          >
            <Image
              src={imageSrc ?? "/images/br-hero.png"}
              alt={
                imageAlt ??
                "Caixas de presente com picolés gourmet recheados de vários sabores ao lado do livro 'Picolés Gourmet Recheados Lucrativos'"
              }
              width={800}
              height={800}
              className="h-auto w-full object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 100vw, 448px"
            />
          </div>
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-1">
          <p className="text-sm font-semibold text-muted-foreground">
            De <span className="line-through">{refPrice}</span> por só hoje
          </p>
          <p className="font-display text-5xl font-extrabold text-primary">{price}</p>
        </div>

        <div className="mt-4 w-full">
          <BuyButton href={checkoutUrl} subLabel="Pagamento único · Sem mensalidades · Acesso imediato">
            QUERO AS 100 RECEITAS
          </BuyButton>
        </div>

        <p className="mt-2 text-sm font-medium text-muted-foreground">
          Compra 100% segura · 7 dias de garantia · Baixe na hora
        </p>

        <div className="mt-4 w-full text-center">
          <p className="text-base leading-relaxed text-foreground text-pretty sm:text-lg">
            {belowImageText ??
              "Tenha um ponto de partida mais organizado para preparar seus sabores em casa ou montar um cardápio."}
          </p>
          <p className="mt-1.5 font-display text-xl font-extrabold leading-snug text-primary text-balance sm:text-2xl">
            Prepare com mais clareza e adapte as receitas à sua rotina.
          </p>
        </div>

        {afterCta ? <div className="mt-6 w-full">{afterCta}</div> : null}

        <p className="mt-5 text-base leading-relaxed text-foreground text-pretty sm:text-lg">
          Pare de desperdiçar ingredientes inventando receitas do zero. Com o passo a passo pronto você faz sabores de
          chocolate, frutas, doce de leite, leite condensado e sobremesas famosas, e monta um cardápio que dá para
          vender desde o primeiro dia.
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
