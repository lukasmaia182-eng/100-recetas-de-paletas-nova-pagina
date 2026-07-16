import type React from "react"
import { cn } from "@/lib/utils"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

export type Tom = "green" | "red" | "yellow" | "blue" | "muted"

const tomBg: Record<Tom, string> = {
  green: "bg-[#22c55e]/15 text-[#4ade80] border-[#22c55e]/30",
  red: "bg-[#ef4444]/15 text-[#f87171] border-[#ef4444]/30",
  yellow: "bg-[#eab308]/15 text-[#facc15] border-[#eab308]/30",
  blue: "bg-[#3b82f6]/15 text-[#60a5fa] border-[#3b82f6]/30",
  muted: "bg-white/5 text-[#93a1c0] border-white/10",
}

export function MMCard({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-[var(--mm-border)] bg-[var(--mm-card)] p-5 shadow-sm",
        className,
      )}
    >
      {children}
    </div>
  )
}

export function Badge({ tom = "muted", children, className }: { tom?: Tom; children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-semibold", tomBg[tom], className)}>
      {children}
    </span>
  )
}

export function TrendIcon({ t, className }: { t: "up" | "down" | "flat"; className?: string }) {
  if (t === "up") return <TrendingUp className={cn("h-4 w-4 text-[#4ade80]", className)} />
  if (t === "down") return <TrendingDown className={cn("h-4 w-4 text-[#f87171]", className)} />
  return <Minus className={cn("h-4 w-4 text-[#93a1c0]", className)} />
}

export function KpiCard({
  label,
  value,
  delta,
  trend = "flat",
  tone,
  hint,
}: {
  label: string
  value: string
  delta?: string
  trend?: "up" | "down" | "flat"
  tone?: Tom
  hint?: string
}) {
  const valueColor = tone === "green" ? "text-[#4ade80]" : tone === "red" ? "text-[#f87171]" : "text-[var(--mm-text)]"
  return (
    <div className="rounded-2xl border border-[var(--mm-border)] bg-[var(--mm-card)] p-4">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium text-[var(--mm-muted)]">{label}</p>
        {delta ? (
          <span className="flex items-center gap-1 text-xs font-semibold text-[var(--mm-muted)]">
            <TrendIcon t={trend} />
            {delta}
          </span>
        ) : null}
      </div>
      <p className={cn("mt-2 text-2xl font-bold tracking-tight", valueColor)}>{value}</p>
      {hint ? <p className="mt-1 text-xs text-[var(--mm-muted)]">{hint}</p> : null}
    </div>
  )
}

export function DemoBanner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "mb-5 flex items-center gap-2 rounded-xl border border-[#eab308]/30 bg-[#eab308]/10 px-3 py-2 text-xs font-medium text-[#facc15]",
        className,
      )}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-[#eab308]" />
      Dados de demonstração — conecte o Meta Ads e a Hotmart em Integrações para exibir dados reais.
    </div>
  )
}

export function SectionTitle({ title, desc, action }: { title: string; desc?: string; action?: React.ReactNode }) {
  return (
    <div className="mb-4 flex items-end justify-between gap-4">
      <div>
        <h2 className="text-lg font-bold text-[var(--mm-text)]">{title}</h2>
        {desc ? <p className="mt-0.5 text-sm text-[var(--mm-muted)]">{desc}</p> : null}
      </div>
      {action}
    </div>
  )
}

export function PageHeader({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="mb-6">
      <h1 className="text-2xl font-bold tracking-tight text-[var(--mm-text)]">{title}</h1>
      <p className="mt-1 text-sm text-[var(--mm-muted)]">{desc}</p>
    </div>
  )
}

/** Classes utilitárias para tabelas do dashboard */
export const tableWrap = "overflow-x-auto rounded-2xl border border-[var(--mm-border)] bg-[var(--mm-card)]"
export const tableCls = "w-full min-w-[720px] border-collapse text-sm"
export const thCls =
  "sticky top-0 whitespace-nowrap bg-[var(--mm-card-2)] px-3 py-2.5 text-left text-xs font-semibold text-[var(--mm-muted)]"
export const tdCls = "whitespace-nowrap border-t border-[var(--mm-border)] px-3 py-2.5 text-[var(--mm-text)]"

export function tomPorSaude(saude: string): Tom {
  if (saude === "lucrativa") return "green"
  if (saude === "prejuizo") return "red"
  if (saude === "observacao") return "yellow"
  return "blue"
}

export function rotuloSaude(saude: string): string {
  if (saude === "lucrativa") return "Lucrativa"
  if (saude === "prejuizo") return "Prejuízo"
  if (saude === "observacao") return "Observação"
  return "Aprendizado"
}
