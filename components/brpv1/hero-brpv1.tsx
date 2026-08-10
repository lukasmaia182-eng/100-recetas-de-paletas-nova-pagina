import Image from "next/image"
import { CtaButtonBrpv1 } from "./cta-button-brpv1"

const bullets = [
  "100 receitas completas",
  "Recheios supercremosos",
  "Sabores econômicos e premium",
  "Coberturas e decorações",
  "Passo a passo simples",
  "Ideias para preparar e vender",
]

export function HeroBrpv1({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="px-5 pb-12 pt-8 sm:pt-12">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2 lg:gap-14">
        {/* Texto */}
        <div className="order-2 lg:order-1">
          <span className="inline-flex items-center rounded-full bg-dourado/15 px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-dourado-dark">
            100 receitas passo a passo
          </span>

          <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] text-chocolate text-balance sm:text-5xl lg:text-6xl">
            Aprenda a preparar <span className="text-dourado">Picolés Recheados</span> irresistíveis para vender e
            encantar
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted-foreground text-pretty sm:text-lg">
            Receitas cremosas, recheios deliciosos e acabamentos premium para você preparar na sua cozinha e transformar
            em um cardápio muito mais atrativo.
          </p>

          <ul className="mt-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <CheckDot />
                <span className="text-sm font-semibold leading-snug text-chocolate">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 rounded-3xl border border-border bg-card p-6 shadow-sm">
            <p className="text-center text-sm font-semibold text-muted-foreground">
              De <span className="line-through">R$ 49,90</span>
            </p>
            <p className="mt-1 text-center font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Por apenas
            </p>
            <p className="text-center font-display text-6xl font-extrabold leading-none text-chocolate">R$ 19,90</p>
            <div className="mt-5">
              <CtaButtonBrpv1 href={checkoutUrl} location="hero">
                Quero acessar as 100 receitas
              </CtaButtonBrpv1>
            </div>
            <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs font-semibold text-muted-foreground">
              <li>Compra segura</li>
              <li aria-hidden="true">·</li>
              <li>Produto digital</li>
              <li aria-hidden="true">·</li>
              <li>Acesso após confirmação</li>
            </ul>
          </div>
        </div>

        {/* Imagem */}
        <div className="order-1 lg:order-2">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-chocolate/15">
            <Image
              src="/images/brpv1/hero-picoles.png"
              alt="Composição de picolés gourmet recheados de pistache, chocolate belga, frutas vermelhas e chocolate branco sobre bancada de mármore"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckDot() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pistache text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
