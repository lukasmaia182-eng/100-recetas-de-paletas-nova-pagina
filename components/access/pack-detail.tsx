import type { Pack } from "@/lib/packs"
import { getPackTheme } from "./pack-theme"
import { FeedMock, StoryMock } from "./pack-mock"
import {
  Target,
  ClipboardList,
  CheckCircle2,
  ListChecks,
  ImageIcon,
  Pencil,
  Sparkles,
  Send,
  Eye,
  Lightbulb,
  RefreshCw,
  Heart,
  Crown,
  PenLine,
  IceCream,
  Megaphone,
} from "lucide-react"

const STEP_ICONS = [ImageIcon, Pencil, Sparkles, Send, ImageIcon, Pencil]

const CALLOUTS = [
  "Título atractivo que resalta el sabor y la textura.",
  "Muestra el relleno cremoso para abrir el apetito.",
  "Llamado a la acción claro y directo.",
]

const HABILIDADES = [
  { label: "Branding visual", icon: Crown },
  { label: "Copy breve", icon: PenLine },
  { label: "Venta por sabor", icon: IceCream },
  { label: "Llamado a la acción", icon: Send },
  { label: "Contenido para redes", icon: Megaphone },
]

export function PackDetail({ pack }: { pack: Pack }) {
  const theme = getPackTheme(pack.theme)

  return (
    <article className="overflow-hidden rounded-[28px] border border-border bg-secondary shadow-xl shadow-chocolate/10">
      {/* ===== Header ===== */}
      <header className="px-5 pb-8 pt-8 text-center sm:px-10">
        <span
          className={`inline-block rounded-full border-2 ${theme.border} bg-card px-5 py-1.5 font-display text-xs font-extrabold uppercase tracking-[0.25em] ${theme.text}`}
        >
          {pack.numero}
        </span>
        <h2 className="mt-4 font-serif text-4xl font-extrabold leading-[0.95] text-chocolate text-balance sm:text-5xl">
          {pack.titulo}
        </h2>
        <Divider theme={theme} />
        <p className="mx-auto max-w-md text-sm font-medium leading-relaxed text-foreground text-pretty">
          {pack.explicacion}
        </p>
      </header>

      <div className="space-y-6 px-5 pb-8 sm:px-10">
        {/* ===== 3 tarjetas ===== */}
        <div className="grid gap-4 lg:grid-cols-3">
          {/* Objetivo */}
          <Card>
            <CardTitle theme={theme} icon={<Target className="h-4 w-4" aria-hidden="true" />} number="1">
              Objetivo
            </CardTitle>
            <p className="mt-3 text-sm leading-relaxed text-foreground text-pretty">{pack.objetivo}</p>
          </Card>

          {/* Materiales */}
          <Card>
            <CardTitle theme={theme} icon={<ClipboardList className="h-4 w-4" aria-hidden="true" />} number="2">
              Materiales necesarios
            </CardTitle>
            <ul className="mt-3 flex flex-col gap-2">
              {pack.materiales.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium leading-snug text-foreground">
                  <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${theme.text}`} aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </Card>

          {/* Instrucciones */}
          <Card>
            <CardTitle theme={theme} icon={<ListChecks className="h-4 w-4" aria-hidden="true" />} number="3">
              Instrucciones en etapas
            </CardTitle>
            <ol className="mt-3 flex flex-col gap-3">
              {pack.instrucciones.map((paso, index) => {
                const Icon = STEP_ICONS[index % STEP_ICONS.length]
                return (
                  <li key={index} className="flex items-start gap-2.5">
                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${theme.solid} font-display text-[10px] font-extrabold ${theme.onSolid}`}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <Icon className={`mt-0.5 h-4 w-4 shrink-0 ${theme.text}`} aria-hidden="true" />
                    <p className="text-xs leading-snug text-foreground">{paso}</p>
                  </li>
                )
              })}
            </ol>
          </Card>
        </div>

        {/* ===== 4. Actividad visual práctica ===== */}
        <section className={`rounded-3xl border ${theme.border} bg-card p-5 sm:p-7`}>
          <CardTitle theme={theme} icon={<Eye className="h-4 w-4" aria-hidden="true" />} number="4">
            Actividad visual práctica
          </CardTitle>
          <p className="mt-2 text-sm text-muted-foreground">
            Vista previa del contenido que crearás con este pack (listo para personalizar).
          </p>

          <div className="mt-5 grid items-start gap-6 lg:grid-cols-[1fr_1.15fr_0.9fr]">
            {/* Anotaciones */}
            <ul className="flex flex-col gap-3 lg:order-1">
              {CALLOUTS.map((c) => (
                <li key={c} className={`flex items-start gap-2 rounded-2xl ${theme.soft} p-3`}>
                  <Heart className={`mt-0.5 h-4 w-4 shrink-0 ${theme.text}`} aria-hidden="true" />
                  <span className="text-xs font-medium leading-snug text-chocolate">{c}</span>
                </li>
              ))}
            </ul>

            {/* Feed */}
            <div className="lg:order-2">
              <Badge theme={theme}>Post para Feed</Badge>
              <div className="mt-2">
                <FeedMock pack={pack} />
              </div>
            </div>

            {/* Story */}
            <div className="lg:order-3">
              <Badge theme={theme}>Story para Instagram</Badge>
              <div className="mt-2">
                <StoryMock pack={pack} />
              </div>
            </div>
          </div>
        </section>

        {/* ===== 5 y 6 ===== */}
        <div className="grid gap-4 md:grid-cols-2">
          <Card>
            <CardTitle theme={theme} icon={<Lightbulb className="h-4 w-4" aria-hidden="true" />} number="5">
              Dica profesional
            </CardTitle>
            <p className="mt-3 text-sm leading-relaxed text-foreground text-pretty">{pack.consejo}</p>
          </Card>
          <Card>
            <CardTitle theme={theme} icon={<RefreshCw className="h-4 w-4" aria-hidden="true" />} number="6">
              Variación o adaptación
            </CardTitle>
            <p className="mt-3 text-sm leading-relaxed text-foreground text-pretty">{pack.variacion}</p>
          </Card>
        </div>

        {/* ===== 7. Habilidades trabajadas ===== */}
        <section className={`rounded-3xl border-2 border-dashed ${theme.border} bg-card p-5 sm:p-6`}>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:gap-6">
            <h3 className="font-display text-lg font-extrabold uppercase tracking-wide text-chocolate">
              <span className={theme.text}>7.</span> Habilidades trabajadas
            </h3>
            <div className="flex flex-1 flex-wrap justify-center gap-4 sm:justify-end">
              {HABILIDADES.map(({ label, icon: Icon }) => (
                <div key={label} className="flex w-20 flex-col items-center gap-1.5 text-center">
                  <span className={`flex h-10 w-10 items-center justify-center rounded-full ${theme.soft}`}>
                    <Icon className={`h-5 w-5 ${theme.text}`} aria-hidden="true" />
                  </span>
                  <span className="text-[10px] font-bold uppercase leading-tight tracking-wide text-chocolate">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </article>
  )
}

/* ---------- Subcomponentes ---------- */

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-border bg-card p-5 shadow-sm">{children}</div>
}

function CardTitle({
  theme,
  icon,
  number,
  children,
}: {
  theme: ReturnType<typeof getPackTheme>
  icon: React.ReactNode
  number: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-center gap-2.5">
      <span className={`flex h-8 w-8 items-center justify-center rounded-xl ${theme.soft} ${theme.text}`}>{icon}</span>
      <h3 className="font-display text-sm font-extrabold uppercase tracking-wide text-chocolate">
        <span className={theme.text}>{number}.</span> {children}
      </h3>
    </div>
  )
}

function Badge({ theme, children }: { theme: ReturnType<typeof getPackTheme>; children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <span
        className={`inline-block rounded-full ${theme.solid} px-4 py-1 font-display text-[11px] font-extrabold uppercase tracking-wide ${theme.onSolid}`}
      >
        {children}
      </span>
    </div>
  )
}

function Divider({ theme }: { theme: ReturnType<typeof getPackTheme> }) {
  return (
    <div className="my-3 flex items-center justify-center gap-2" aria-hidden="true">
      <span className={`h-px w-10 ${theme.bullet} opacity-40`} />
      <Heart className={`h-3.5 w-3.5 ${theme.text}`} />
      <span className={`h-px w-10 ${theme.bullet} opacity-40`} />
    </div>
  )
}
