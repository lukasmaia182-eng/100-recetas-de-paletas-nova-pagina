"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { Check, X } from "lucide-react"
import { PageHeader, DemoBanner, MMCard, Badge, type Tom } from "@/components/metricas/ui"
import { criativos, formatUSD, formatNum, formatPct, type Criativo } from "@/lib/metricas/data"

type Ranking =
  | "vendas"
  | "cpa"
  | "roas"
  | "ctr"
  | "lucro"
  | "fadiga"
  | "semVenda"
  | "promissor"

const rankings: { v: Ranking; label: string }[] = [
  { v: "lucro", label: "Mais lucrativos" },
  { v: "vendas", label: "Mais vendas" },
  { v: "cpa", label: "Menor CPA" },
  { v: "roas", label: "Maior ROAS" },
  { v: "ctr", label: "Maior CTR" },
  { v: "fadiga", label: "Em fadiga" },
  { v: "semVenda", label: "Gastaram sem vender" },
  { v: "promissor", label: "Promissores (poucos dados)" },
]

function fadigaBadge(f: Criativo["fadiga"]): { tom: Tom; label: string } {
  if (f === "saudavel") return { tom: "green", label: "Saudável" }
  if (f === "atencao") return { tom: "yellow", label: "Atenção" }
  return { tom: "red", label: "Fadiga" }
}

function corQualidade(n: number) {
  if (n >= 75) return "#22c55e"
  if (n >= 50) return "#eab308"
  return "#ef4444"
}

export default function CriativosPage() {
  const [ranking, setRanking] = useState<Ranking>("lucro")
  const [sel, setSel] = useState<string[]>([])

  const lista = useMemo(() => {
    const l = criativos.slice()
    switch (ranking) {
      case "vendas":
        return l.sort((a, b) => b.vendas - a.vendas)
      case "cpa":
        return l.filter((c) => c.vendas > 0).sort((a, b) => a.cpa - b.cpa)
      case "roas":
        return l.sort((a, b) => b.roas - a.roas)
      case "ctr":
        return l.sort((a, b) => b.ctr - a.ctr)
      case "lucro":
        return l.sort((a, b) => b.lucro - a.lucro)
      case "fadiga":
        return l.filter((c) => c.fadiga !== "saudavel").sort((a, b) => b.frequencia - a.frequencia)
      case "semVenda":
        return l.filter((c) => c.vendas <= 20 && c.investimento > 150).sort((a, b) => b.investimento - a.investimento)
      case "promissor":
        return l.filter((c) => c.indiceQualidade >= 55 && c.investimento < 220).sort((a, b) => b.indiceQualidade - a.indiceQualidade)
    }
  }, [ranking])

  function toggle(id: string) {
    setSel((s) => (s.includes(id) ? s.filter((x) => x !== id) : s.length < 4 ? [...s, id] : s))
  }

  const comparados = criativos.filter((c) => sel.includes(c.id))
  const linhasComp: { label: string; get: (c: Criativo) => string }[] = [
    { label: "Investimento", get: (c) => formatUSD(c.investimento) },
    { label: "Vendas", get: (c) => formatNum(c.vendas) },
    { label: "CPA", get: (c) => formatUSD(c.cpa) },
    { label: "ROAS", get: (c) => `${c.roas.toFixed(2)}x` },
    { label: "CTR", get: (c) => formatPct(c.ctr) },
    { label: "CPC", get: (c) => formatUSD(c.cpc) },
    { label: "Frequência", get: (c) => c.frequencia.toFixed(2) },
    { label: "Conversão", get: (c) => formatPct(c.taxaConversao) },
    { label: "Lucro", get: (c) => formatUSD(c.lucro) },
    { label: "Índice de qualidade", get: (c) => `${c.indiceQualidade}/100` },
  ]

  return (
    <div>
      <PageHeader title="Criativos" desc="Galeria, rankings, Índice de Qualidade do Criativo e comparação lado a lado." />
      <DemoBanner />

      <div className="mb-5 flex flex-wrap gap-2">
        {rankings.map((r) => (
          <button
            key={r.v}
            onClick={() => setRanking(r.v)}
            className={
              ranking === r.v
                ? "rounded-full border border-[var(--mm-blue)]/40 bg-[var(--mm-blue)]/15 px-3 py-1.5 text-sm font-semibold text-[#60a5fa]"
                : "rounded-full border border-[var(--mm-border)] bg-[var(--mm-card)] px-3 py-1.5 text-sm text-[var(--mm-muted)] hover:text-[var(--mm-text)]"
            }
          >
            {r.label}
          </button>
        ))}
      </div>

      {comparados.length >= 2 && (
        <MMCard className="mb-6">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="font-bold text-[var(--mm-text)]">Comparação ({comparados.length})</h3>
            <button onClick={() => setSel([])} className="text-sm text-[var(--mm-muted)] hover:text-[var(--mm-text)]">
              Limpar
            </button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[520px] text-sm">
              <thead>
                <tr>
                  <th className="px-2 py-2 text-left text-xs font-semibold text-[var(--mm-muted)]">Métrica</th>
                  {comparados.map((c) => (
                    <th key={c.id} className="px-2 py-2 text-left font-semibold text-[var(--mm-text)]">
                      {c.codigo}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {linhasComp.map((l) => (
                  <tr key={l.label} className="border-t border-[var(--mm-border)]">
                    <td className="px-2 py-2 text-[var(--mm-muted)]">{l.label}</td>
                    {comparados.map((c) => (
                      <td key={c.id} className="px-2 py-2 text-[var(--mm-text)]">
                        {l.get(c)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </MMCard>
      )}

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {lista.map((c) => {
          const fb = fadigaBadge(c.fadiga)
          const selecionado = sel.includes(c.id)
          return (
            <MMCard key={c.id} className="overflow-hidden p-0">
              <div className="relative aspect-square bg-[var(--mm-card-2)]">
                <Image src={c.imagem || "/placeholder.svg"} alt={`Criativo ${c.codigo} — ${c.nome}`} fill className="object-cover" sizes="(max-width:768px) 100vw, 33vw" />
                <div className="absolute left-2 top-2 flex gap-2">
                  <Badge tom="blue">{c.codigo}</Badge>
                  <Badge tom={fb.tom}>{fb.label}</Badge>
                </div>
                <button
                  onClick={() => toggle(c.id)}
                  aria-label={selecionado ? "Remover da comparação" : "Adicionar à comparação"}
                  className={
                    selecionado
                      ? "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--mm-blue)] text-white"
                      : "absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-lg border border-white/20 bg-black/40 text-white backdrop-blur"
                  }
                >
                  {selecionado ? <Check className="h-4 w-4" /> : <span className="text-xs font-bold">+</span>}
                </button>
              </div>
              <div className="p-4">
                <p className="font-semibold text-[var(--mm-text)]">{c.nome}</p>
                <p className="mb-3 text-xs text-[var(--mm-muted)]">
                  {c.formato} • {c.angulo} • início {new Date(c.dataInicio).toLocaleDateString("pt-BR")}
                </p>

                <div className="mb-3">
                  <div className="mb-1 flex items-center justify-between text-xs">
                    <span className="text-[var(--mm-muted)]">Índice de Qualidade</span>
                    <span className="font-bold" style={{ color: corQualidade(c.indiceQualidade) }}>
                      {c.indiceQualidade}/100
                    </span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div className="h-full rounded-full" style={{ width: `${c.indiceQualidade}%`, background: corQualidade(c.indiceQualidade) }} />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-2 text-center">
                  <div className="rounded-lg bg-white/[0.03] py-2">
                    <p className="text-[10px] text-[var(--mm-muted)]">Vendas</p>
                    <p className="text-sm font-bold text-[var(--mm-text)]">{formatNum(c.vendas)}</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] py-2">
                    <p className="text-[10px] text-[var(--mm-muted)]">CPA</p>
                    <p className="text-sm font-bold text-[var(--mm-text)]">{formatUSD(c.cpa)}</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] py-2">
                    <p className="text-[10px] text-[var(--mm-muted)]">ROAS</p>
                    <p className="text-sm font-bold text-[var(--mm-text)]">{c.roas.toFixed(1)}x</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] py-2">
                    <p className="text-[10px] text-[var(--mm-muted)]">CTR</p>
                    <p className="text-sm font-bold text-[var(--mm-text)]">{formatPct(c.ctr)}</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] py-2">
                    <p className="text-[10px] text-[var(--mm-muted)]">Freq.</p>
                    <p className="text-sm font-bold text-[var(--mm-text)]">{c.frequencia.toFixed(1)}</p>
                  </div>
                  <div className="rounded-lg bg-white/[0.03] py-2">
                    <p className="text-[10px] text-[var(--mm-muted)]">Lucro</p>
                    <p className={c.lucro >= 0 ? "text-sm font-bold text-[#4ade80]" : "text-sm font-bold text-[#f87171]"}>
                      {formatUSD(c.lucro)}
                    </p>
                  </div>
                </div>

                <p className="mt-3 rounded-lg border border-[var(--mm-blue)]/20 bg-[var(--mm-blue)]/5 p-2 text-xs text-[var(--mm-muted)]">
                  <span className="font-semibold text-[#60a5fa]">Nota da IA: </span>
                  {c.notaIA}
                </p>
              </div>
            </MMCard>
          )
        })}
      </div>

      {sel.length > 0 && comparados.length < 2 && (
        <div className="fixed bottom-4 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-full border border-[var(--mm-border)] bg-[var(--mm-panel)] px-4 py-2 text-sm text-[var(--mm-text)] shadow-lg">
          Selecione ao menos 2 criativos para comparar
          <button onClick={() => setSel([])} aria-label="Limpar seleção">
            <X className="h-4 w-4 text-[var(--mm-muted)]" />
          </button>
        </div>
      )}
    </div>
  )
}
