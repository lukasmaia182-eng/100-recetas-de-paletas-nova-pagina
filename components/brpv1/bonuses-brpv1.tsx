import Image from "next/image"

const bonuses = [
  {
    src: "/images/brpv1/bonus-1.png",
    tag: "Bônus 01",
    title: "Guia de Apresentação para Valorizar seus Picolés",
    desc: "Dicas simples para deixar seus produtos mais bonitos e atrativos.",
    from: "R$ 19,90",
  },
  {
    src: "/images/brpv1/bonus-2.png",
    tag: "Bônus 02",
    title: "Guia de Combinações de Sabores",
    desc: "Use diferentes bases, recheios e coberturas para criar novas combinações.",
    from: "R$ 17,90",
  },
  {
    src: "/images/brpv1/bonus-3.png",
    tag: "Bônus 03",
    title: "Checklist para Começar sua Produção",
    desc: "Organize ingredientes, utensílios e seus primeiros sabores.",
    from: "R$ 9,90",
  },
]

export function BonusesBrpv1() {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.15em] text-dourado-dark">
            Comprando agora
          </p>
          <h2 className="mt-3 font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
            você também recebe estes bônus
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {bonuses.map((b) => (
            <div key={b.tag} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
              <Image
                src={b.src || "/placeholder.svg"}
                alt={`Capa do ${b.tag}: ${b.title}`}
                width={600}
                height={600}
                className="aspect-square h-auto w-full object-cover"
              />
              <div className="p-6">
                <span className="inline-flex items-center rounded-full bg-dourado/15 px-3 py-1 font-display text-xs font-extrabold uppercase tracking-wide text-dourado-dark">
                  {b.tag}
                </span>
                <h3 className="mt-3 font-display text-lg font-extrabold text-chocolate text-balance">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{b.desc}</p>
                <p className="mt-4 text-sm font-semibold text-muted-foreground">
                  De <span className="line-through">{b.from}</span>{" "}
                  <span className="ml-1 font-display font-extrabold text-verde-cta">GRÁTIS</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
