import type { Pack } from "@/lib/packs"
import { getPackTheme } from "./pack-theme"
import { PackMock } from "./pack-mock"
import { Target, ClipboardList, ListChecks, Lightbulb, Repeat, Sparkles, Camera } from "lucide-react"

export function PackDetail({ pack }: { pack: Pack }) {
  const theme = getPackTheme(pack.theme)

  return (
    <article className="overflow-hidden rounded-[28px] border border-border bg-secondary shadow-xl shadow-chocolate/10">
      {/* Header */}
      <div className="px-5 pb-6 pt-6 sm:px-8">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-block -rotate-1 rounded-lg ${theme.solid} px-3 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.15em] ${theme.onSolid} shadow-sm`}
          >
            {pack.numero}
          </span>
          <span className={`rounded-full ${theme.soft} px-3 py-1.5 text-xs font-bold ${theme.text}`}>
            {pack.categoria}
          </span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-card px-3 py-1.5 text-xs font-semibold text-muted-foreground">
            <Camera className="h-3.5 w-3.5" aria-hidden="true" />
            {pack.formato}
          </span>
        </div>

        <h2
          className={`mt-3 font-display text-3xl font-extrabold leading-[0.98] ${theme.text} text-balance sm:text-4xl`}
        >
          {pack.titulo}
        </h2>
        <p className="mt-2 text-sm font-medium leading-relaxed text-foreground text-pretty">{pack.explicacion}</p>

        {/* Vista previa del arte */}
        <div className="mt-4">
          <SectionPill theme={theme} icon={<Sparkles className="h-4 w-4" aria-hidden="true" />}>
            Vista previa del arte
          </SectionPill>
          <div className="mt-3 overflow-hidden rounded-2xl border border-border bg-card">
            <div className="mx-auto max-w-sm">
              <PackMock pack={pack} size="full" />
            </div>
          </div>
        </div>

        {/* Objetivo */}
        <div className={`mt-4 flex items-start gap-3 rounded-2xl ${theme.solid} p-4 ${theme.onSolid}`}>
          <Target className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
          <p className="text-sm font-semibold leading-snug">
            <span className="font-extrabold uppercase">Objetivo: </span>
            {pack.objetivo}
          </p>
        </div>
      </div>

      <div className="px-5 pb-8 sm:px-8">
        {/* Materiales necesarios */}
        <SectionPill theme={theme} icon={<ClipboardList className="h-4 w-4" aria-hidden="true" />}>
          Materiales necesarios
        </SectionPill>
        <div className={`mt-3 rounded-2xl border ${theme.border} bg-card p-5`}>
          <ul className="flex flex-col gap-2">
            {pack.materiales.map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm font-medium leading-snug text-foreground">
                <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${theme.bullet}`} />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Instrucciones paso a paso */}
        <div className="mt-6">
          <SectionPill theme={theme} icon={<ListChecks className="h-4 w-4" aria-hidden="true" />}>
            Instrucciones paso a paso
          </SectionPill>
          <ol className="mt-4 grid gap-3 sm:grid-cols-2">
            {pack.instrucciones.map((paso, index) => (
              <li key={index} className={`flex gap-3 rounded-2xl border ${theme.border} bg-card p-4`}>
                <span
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${theme.solid} font-display text-sm font-extrabold ${theme.onSolid}`}
                >
                  {index + 1}
                </span>
                <p className="text-sm leading-snug text-foreground">{paso}</p>
              </li>
            ))}
          </ol>
        </div>

        {/* Consejo profesional */}
        <div className={`mt-6 flex items-start gap-3 rounded-2xl ${theme.soft} p-4`}>
          <Lightbulb className={`mt-0.5 h-5 w-5 shrink-0 ${theme.text}`} aria-hidden="true" />
          <p className="text-sm leading-relaxed text-chocolate">
            <span className={`font-extrabold uppercase ${theme.text}`}>Consejo profesional: </span>
            {pack.consejo}
          </p>
        </div>

        {/* Variación / adaptación */}
        <div className={`mt-4 flex items-start gap-3 rounded-2xl border-2 border-dashed ${theme.border} bg-card p-4`}>
          <Repeat className={`mt-0.5 h-5 w-5 shrink-0 ${theme.text}`} aria-hidden="true" />
          <p className="text-sm leading-relaxed text-foreground">
            <span className={`font-extrabold uppercase ${theme.text}`}>Variación: </span>
            {pack.variacion}
          </p>
        </div>

        {/* Etiquetas / objetivos de marketing */}
        <div className="mt-6">
          <p className="text-xs font-extrabold uppercase tracking-wide text-muted-foreground">
            Objetivos de marketing
          </p>
          <div className="mt-2 flex flex-wrap gap-2">
            {pack.etiquetas.map((tag) => (
              <span
                key={tag}
                className={`rounded-full ${theme.soft} px-3 py-1 text-xs font-semibold ${theme.text}`}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom banner */}
      <div className={`${theme.solid} px-5 py-3 text-center`}>
        <p className={`font-display text-sm font-bold italic ${theme.onSolid}`}>
          Listo para publicar, atraer clientes y vender más paletas en Instagram.
        </p>
      </div>
    </article>
  )
}

function SectionPill({
  theme,
  icon,
  children,
}: {
  theme: ReturnType<typeof getPackTheme>
  icon: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <div className={`inline-flex items-center gap-2 rounded-lg ${theme.solid} px-3 py-2 ${theme.onSolid}`}>
      {icon}
      <span className="font-display text-sm font-extrabold uppercase tracking-wide">{children}</span>
    </div>
  )
}
