import type { Bonus } from "@/lib/bonuses"
import { Gift } from "lucide-react"

export function BonusDetail({ bonus }: { bonus: Bonus }) {
  return (
    <article className="overflow-hidden rounded-3xl border border-border bg-card shadow-lg shadow-chocolate/10">
      <div className="bg-secondary px-5 py-6 sm:px-7">
        <span className="inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-1 font-display text-xs font-extrabold uppercase tracking-widest text-primary-foreground">
          <Gift className="h-3.5 w-3.5" aria-hidden="true" />
          Bono incluido
        </span>
        <h2 className="mt-3 font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          {bonus.titulo}
        </h2>
        <p className="mt-2 text-sm leading-relaxed text-foreground text-pretty">{bonus.descripcion}</p>
      </div>

      <div className="flex flex-col gap-6 px-5 py-6 sm:px-7">
        {bonus.contenido.map((section) => (
          <div key={section.subtitulo}>
            <h3 className="font-display text-base font-extrabold uppercase tracking-wide text-primary">
              {section.subtitulo}
            </h3>

            {section.tipo === "texto" && (
              <p className="mt-2 rounded-2xl bg-secondary p-4 text-sm leading-relaxed text-chocolate">
                {section.texto}
              </p>
            )}

            {section.tipo === "lista" && (
              <ul className="mt-3 flex flex-col gap-2.5">
                {section.items?.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 rounded-2xl border border-border bg-background p-3 text-sm leading-snug text-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    {item}
                  </li>
                ))}
              </ul>
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
          </div>
        ))}
      </div>
    </article>
  )
}
