import Image from "next/image"
import { CtaButtonBrpv1 } from "./cta-button-brpv1"
import { Eyebrow } from "./showcase-brpv1"

const flavors = [
  { src: "/images/brpv1/sabor-pistache.png", name: "Pistache Premium", desc: "Picolé cremoso de pistache com cobertura e pistaches triturados." },
  { src: "/images/brpv1/sabor-chocolate.png", name: "Chocolate Belga", desc: "Picolé intenso de chocolate com acabamento premium." },
  { src: "/images/brpv1/sabor-frutas.png", name: "Frutos Vermelhos", desc: "Picolé cremoso com frutas vermelhas e visual marcante." },
  { src: "/images/brpv1/sabor-branco.png", name: "Chocolate Branco", desc: "Cobertura clara com detalhes delicados e decoração premium." },
  { src: "/images/brpv1/sabor-caramelo.png", name: "Chocolate com Caramelo", desc: "Cobertura de chocolate com recheio cremoso de caramelo." },
  { src: "/images/brpv1/sabor-cookies.png", name: "Cookies & Cream", desc: "Creme branco com biscoitos de chocolate." },
  { src: "/images/brpv1/sabor-morango.png", name: "Leite em Pó com Morango", desc: "Base clara e cremosa com recheio de morango." },
  { src: "/images/brpv1/sabor-amendoim.png", name: "Chocolate com Amendoim", desc: "Chocolate, crocância e recheio abundante." },
]

const cortes = [
  { src: "/images/brpv1/corte-pistache.png", name: "Pistache", desc: "Creme de pistache abundante do começo ao fim do picolé." },
  { src: "/images/brpv1/corte-chocolate.png", name: "Chocolate", desc: "Recheio de brigadeiro cremoso escorrendo." },
  { src: "/images/brpv1/corte-frutas.png", name: "Frutas Vermelhas", desc: "Creme claro com recheio marcante de frutas vermelhas." },
]

export function GalleryBrpv1({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Galeria de sabores</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
            Picolés que vendem pelo visual e conquistam pelo recheio
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {flavors.map((f) => (
            <div key={f.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src={f.src || "/placeholder.svg"}
                alt={`Picolé gourmet sabor ${f.name}`}
                width={500}
                height={500}
                className="aspect-square h-auto w-full object-cover"
              />
              <div className="p-4">
                <h3 className="font-display text-base font-extrabold text-chocolate">{f.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Recheio por dentro */}
        <div className="mt-20 mx-auto max-w-2xl text-center">
          <Eyebrow>Recheio por dentro</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
            O diferencial aparece já na primeira mordida
          </h2>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-3">
          {cortes.map((c) => (
            <div key={c.name} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src={c.src || "/placeholder.svg"}
                alt={`Picolé de ${c.name} cortado ao meio mostrando o recheio cremoso`}
                width={500}
                height={500}
                className="aspect-square h-auto w-full object-cover"
              />
              <div className="p-5">
                <h3 className="font-display text-lg font-extrabold text-chocolate">{c.name}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-10 max-w-md">
          <CtaButtonBrpv1 href={checkoutUrl} location="galeria">
            Quero acessar as 100 receitas
          </CtaButtonBrpv1>
        </div>
      </div>
    </section>
  )
}
