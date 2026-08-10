import Image from "next/image"
import { CtaButtonBrpv1 } from "./cta-button-brpv1"

const gallery = [
  "/images/brpv1/sabor-pistache.png",
  "/images/brpv1/sabor-chocolate.png",
  "/images/brpv1/sabor-frutas.png",
  "/images/brpv1/sabor-branco.png",
  "/images/brpv1/corte-frutas.png",
]

export function FinalCtaBrpv1({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
          100 receitas. Dezenas de possibilidades para o seu cardápio.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-muted-foreground text-pretty">
          Escolha seus sabores favoritos, prepare e comece a criar seus próprios Picolés Recheados.
        </p>

        <div className="mt-10 overflow-hidden rounded-[2rem] shadow-2xl shadow-chocolate/15">
          <Image
            src="/images/br-hero-mockup.png"
            alt="Material digital Picolés Recheados Lucrativos com picolés gourmet"
            width={1000}
            height={1000}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-6 grid grid-cols-5 gap-3">
          {gallery.map((src, i) => (
            <div key={src} className="overflow-hidden rounded-xl shadow-sm">
              <Image
                src={src || "/placeholder.svg"}
                alt={`Picolé gourmet recheado ${i + 1}`}
                width={300}
                height={300}
                className="aspect-square h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md rounded-3xl border border-border bg-card p-6 shadow-sm">
          <p className="text-sm font-semibold text-muted-foreground">
            De <span className="line-through">R$ 49,90</span>
          </p>
          <p className="mt-1 font-display text-xs font-bold uppercase tracking-widest text-muted-foreground">
            Por apenas
          </p>
          <p className="font-display text-6xl font-extrabold leading-none text-chocolate">R$ 19,90</p>
          <div className="mt-5">
            <CtaButtonBrpv1 href={checkoutUrl} location="cta-final">
              Quero receber as 100 receitas
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
    </section>
  )
}
