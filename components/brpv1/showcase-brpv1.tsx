import Image from "next/image"

const showcaseImages = [
  { src: "/images/brpv1/sabor-pistache.png", alt: "Picolé gourmet de pistache com cobertura e decoração premium" },
  { src: "/images/brpv1/sabor-chocolate.png", alt: "Picolé gourmet de chocolate belga com acabamento premium" },
  { src: "/images/brpv1/sabor-frutas.png", alt: "Picolé gourmet de frutas vermelhas com visual marcante" },
  { src: "/images/brpv1/sabor-branco.png", alt: "Picolé gourmet de chocolate branco com decoração delicada" },
  { src: "/images/brpv1/sabor-caramelo.png", alt: "Picolé gourmet de chocolate com recheio de caramelo" },
  { src: "/images/brpv1/corte-pistache.png", alt: "Picolé de pistache cortado mostrando o recheio cremoso" },
]

const features = [
  { title: "Visual que chama atenção", desc: "Picolés com aparência de vitrine de confeitaria." },
  { title: "Recheios supercremosos", desc: "Centro cremoso que aparece na primeira mordida." },
  { title: "Sabores variados", desc: "Do clássico ao premium, sempre com acabamento caprichado." },
  { title: "Apresentação premium", desc: "Coberturas, drizzles e finalizações bem feitas." },
]

export function ShowcaseBrpv1() {
  return (
    <section className="bg-secondary/40 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Vitrine gourmet</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
            Imagine ter sabores assim no seu cardápio
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
            Picolés que chamam atenção pelo visual e conquistam pelo recheio.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">
          {showcaseImages.map((img) => (
            <div key={img.src} className="overflow-hidden rounded-2xl shadow-md shadow-chocolate/10">
              <Image
                src={img.src || "/placeholder.svg"}
                alt={img.alt}
                width={500}
                height={500}
                className="aspect-square h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-base leading-relaxed text-muted-foreground text-pretty">
          Você terá acesso a receitas que unem sabor, aparência e apresentação para montar um cardápio muito mais
          variado.
        </p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-display text-lg font-extrabold text-chocolate">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-dourado/15 px-4 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.15em] text-dourado-dark">
      {children}
    </span>
  )
}
