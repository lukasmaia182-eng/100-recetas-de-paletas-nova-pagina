import type { Bonus } from "@/lib/bonuses"
import { Gift, Lightbulb, ListChecks, Table2, Sparkles } from "lucide-react"

export function BonusDetail({ bonus }: { bonus: Bonus }) {
  return (
    <article className="overflow-hidden rounded-[28px] border border-border bg-card shadow-xl shadow-chocolate/10">
      {/* Header */}
      <header className="relative bg-chocolate px-6 py-7 sm:px-8 sm:py-8">
        <div className="flex items-center justify-between gap-3">
          <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1 font-display text-xs font-extrabold uppercase tracking-widest text-primary-foreground">
            <Gift className="h-3.5 w-3.5" aria-hidden="true" />
            Bono incluido
          </span>
          <span className="rounded-lg bg-creme/15 px-2.5 py-1 font-display text-[11px] font-extrabold uppercase tracking-widest text-creme">
            {bonus.numero}
          </span>
        </div>
        <h2 className="mt-4 font-display text-2xl font-extrabold leading-tight text-creme text-balance sm:text-3xl">
          {bonus.titulo}
        </h2>
        <p className="mt-2 max-w-2xl text-sm leading-relaxed text-creme/85 text-pretty">{bonus.descripcion}</p>
      </header>

      {/* Content */}
      <div className="flex flex-col gap-7 px-5 py-7 sm:px-8">
        {bonus.contenido.map((section) => (
          <section key={section.subtitulo}>
            <h3 className="flex items-center gap-2 font-display text-base font-extrabold uppercase tracking-wide text-primary">
              <SectionIcon tipo={section.tipo} />
              {section.subtitulo}
            </h3>

            {section.tipo === "texto" && (
              <div className="mt-3 flex items-start gap-3 rounded-2xl border border-primary/20 bg-secondary p-4">
                <Lightbulb className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
                <p className="text-sm leading-relaxed text-chocolate">{section.texto}</p>
              </div>
            )}

            {section.tipo === "lista" && (
              <ol className="mt-3 flex flex-col gap-2.5">
                {section.items?.map((item, i) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 rounded-2xl border border-border bg-background p-3.5 text-sm leading-snug text-foreground"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 font-display text-xs font-extrabold text-primary">
                      {i + 1}
                    </span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ol>
            )}

            {section.tipo === "tabla" && (
              <div className="mt-3 overflow-x-auto rounded-2xl border border-border">
                <table className="w-full border-collapse text-left text-sm">
                  <thead>
                    <tr className="bg-chocolate text-creme">
                      {section.encabezados?.map((h) => (
                        <th key={h} className="px-3 py-2.5 font-display text-xs font-extrabold uppercase tracking-wide">
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {section.filas?.map((fila, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-card" : "bg-secondary"}>
                        {fila.columnas.map((col, j) => (
                          <td
                            key={j}
                            className={`px-3 py-2.5 leading-snug text-foreground ${j === 0 ? "font-semibold text-chocolate" : ""}`}
                          >
                            {col}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        {/* Footer note */}
        <div className="flex items-center justify-center gap-2 rounded-2xl bg-secondary px-4 py-3 text-center">
          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
          <p className="font-display text-sm font-bold text-chocolate">
            Aplica este bono desde hoy y aumenta tus ventas.
          </p>
        </div>
      </div>
    </article>
  )
}

function SectionIcon({ tipo }: { tipo: Bonus["contenido"][number]["tipo"] }) {
  if (tipo === "tabla") return <Table2 className="h-4 w-4" aria-hidden="true" />
  if (tipo === "lista") return <ListChecks className="h-4 w-4" aria-hidden="true" />
  return <Lightbulb className="h-4 w-4" aria-hidden="true" />
}
