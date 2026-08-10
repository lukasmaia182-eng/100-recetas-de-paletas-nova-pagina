const blocks = [
  { title: "Ingredientes", desc: "Quantidades organizadas para o preparo." },
  { title: "Utensílios", desc: "O que será necessário utilizar." },
  { title: "Preparação", desc: "Modo de preparo passo a passo." },
  { title: "Montagem", desc: "Como montar e rechear." },
  { title: "Finalização", desc: "Cobertura e decoração." },
  { title: "Dica profissional", desc: "Detalhes que ajudam no resultado." },
  { title: "Variação", desc: "Outras formas de preparar." },
  { title: "Conservação", desc: "Orientações para armazenamento." },
]

export function AnatomyBrpv1() {
  return (
    <section className="bg-secondary/40 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
            Não é apenas uma lista de ingredientes
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground text-pretty">
            Cada receita é organizada para facilitar seu preparo.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {blocks.map((b) => (
            <div key={b.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h3 className="font-display text-base font-extrabold text-chocolate">{b.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
