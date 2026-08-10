import Image from "next/image"
import { CtaButtonBrpv1 } from "./cta-button-brpv1"

const included = [
  "100 receitas completas",
  "Recheios supercremosos",
  "Sabores clássicos",
  "Sabores premium",
  "Coberturas e decorações",
  "Passo a passo",
  "Bônus especiais",
  "Acesso digital",
]

export function OfferBrpv1({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section id="checkout" className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl overflow-hidden rounded-[2rem] bg-chocolate text-creme shadow-2xl shadow-chocolate/30">
        <div className="border-b border-creme/15 bg-dourado/15 px-6 py-3 text-center">
          <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-dourado">Acesso completo</p>
        </div>

        <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-extrabold text-creme text-balance sm:text-4xl">
              Picolés Recheados Lucrativos
            </h2>
            <div className="mt-6 overflow-hidden rounded-2xl">
              <Image
                src="/images/br-hero-mockup.png"
                alt="Material Picolés Recheados Lucrativos: capa, páginas internas, tablet, celular e picolés premium"
                width={800}
                height={800}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>

          <div>
            <ul className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {included.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-dourado text-chocolate">
                    <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
                      <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-sm font-semibold leading-snug text-creme">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-2xl bg-creme/10 p-6 text-center">
              <p className="text-sm font-semibold text-creme/70">
                De <span className="line-through">R$ 49,90</span>
              </p>
              <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-creme/70">Por apenas</p>
              <p className="font-display text-6xl font-extrabold leading-none text-dourado">R$ 19,90</p>
            </div>

            <div className="mt-6">
              <CtaButtonBrpv1
                href={checkoutUrl}
                location="oferta-final"
                className="bg-verde-cta text-white shadow-verde-cta/30 hover:bg-verde-cta-dark"
              >
                Quero acessar agora
              </CtaButtonBrpv1>
            </div>
            <p className="mt-4 text-center text-sm font-semibold text-creme/70">
              Pagamento seguro · 7 dias de garantia
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export function GuaranteeBrpv1() {
  return (
    <section className="px-5 pb-16 sm:pb-20">
      <div className="mx-auto max-w-3xl rounded-[2rem] border border-border bg-card p-8 text-center shadow-sm sm:p-10">
        <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-dourado/15 font-display text-lg font-extrabold text-dourado-dark">
          7 dias
        </span>
        <h2 className="mt-5 font-display text-2xl font-extrabold text-chocolate sm:text-3xl">7 dias de garantia</h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          Você terá 7 dias para acessar e conhecer o material. Caso decida que ele não é para você, poderá solicitar o
          reembolso dentro do prazo de garantia, conforme as condições da plataforma de pagamento.
        </p>
        <p className="mt-4 text-sm font-semibold text-chocolate">
          Conheça o material com tranquilidade. Você tem 7 dias para avaliar seu acesso.
        </p>
      </div>
    </section>
  )
}
