import { Eyebrow } from "./showcase-brpv1"

const steps = [
  { n: "01", title: "Escolha sua receita", desc: "Selecione um dos sabores disponíveis no material." },
  { n: "02", title: "Prepare a base", desc: "Siga os ingredientes, quantidades e modo de preparo." },
  { n: "03", title: "Recheie e finalize", desc: "Monte seu picolé, adicione o recheio e faça a cobertura." },
  { n: "04", title: "Apresente e venda", desc: "Capriche no visual, fotografe e ofereça aos seus clientes." },
]

export function StepsBrpv1() {
  return (
    <section className="bg-secondary/40 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Comece em 4 passos</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
            Como funciona
          </h2>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <span className="font-display text-4xl font-extrabold text-dourado/60">{s.n}</span>
              <h3 className="mt-3 font-display text-lg font-extrabold text-chocolate">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
