"use client"

import { useMemo, useState } from "react"
import { Download, ChevronsUpDown } from "lucide-react"
import { PageHeader, DemoBanner, Badge, tableWrap, tableCls, thCls, tdCls, tomPorSaude, rotuloSaude, TrendIcon } from "@/components/metricas/ui"
import { campanhas, formatUSD, formatNum, formatPct, type Campanha } from "@/lib/metricas/data"

type Ordenavel = keyof Pick<
  Campanha,
  "nome" | "investimento" | "vendas" | "cpa" | "roas" | "lucro" | "margem" | "ctr" | "cpc" | "cpm"
>
type Filtro = "todas" | "lucrativas" | "prejuizo"

const cols: { key: Ordenavel; label: string }[] = [
  { key: "nome", label: "Campanha" },
  { key: "investimento", label: "Gasto" },
  { key: "vendas", label: "Vendas" },
  { key: "cpa", label: "CPA" },
  { key: "roas", label: "ROAS" },
  { key: "lucro", label: "Lucro" },
  { key: "margem", label: "Margem" },
  { key: "ctr", label: "CTR" },
]

export default function CampanhasPage() {
  const [ordem, setOrdem] = useState<{ key: Ordenavel; dir: 1 | -1 }>({ key: "lucro", dir: -1 })
  const [filtro, setFiltro] = useState<Filtro>("todas")

  const lista = useMemo(() => {
    let l = campanhas.slice()
    if (filtro === "lucrativas") l = l.filter((c) => c.lucro > 0)
    if (filtro === "prejuizo") l = l.filter((c) => c.lucro <= 0)
    l.sort((a, b) => {
      const va = a[ordem.key]
      const vb = b[ordem.key]
      if (typeof va === "number" && typeof vb === "number") return (va - vb) * ordem.dir
      return String(va).localeCompare(String(vb)) * ordem.dir
    })
    return l
  }, [ordem, filtro])

  function ordenar(key: Ordenavel) {
    setOrdem((o) => (o.key === key ? { key, dir: o.dir === 1 ? -1 : 1 } : { key, dir: -1 }))
  }

  function exportarCSV() {
    const headers = ["Campanha", "Status", "País", "Orçamento", "Gasto", "Vendas", "CPA", "ROAS", "Lucro", "Margem", "CTR"]
    const linhas = lista.map((c) =>
      [c.nome, c.status, c.pais, c.orcamentoDiario, c.investimento, c.vendas, c.cpa, c.roas, c.lucro, c.margem, c.ctr].join(","),
    )
    const csv = [headers.join(","), ...linhas].join("\n")
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "campanhas-meta-master.csv"
    a.click()
    URL.revokeObjectURL(url)
  }

  const chips: { v: Filtro; label: string }[] = [
    { v: "todas", label: "Todas" },
    { v: "lucrativas", label: "Lucrativas" },
    { v: "prejuizo", label: "Com prejuízo" },
  ]

  return (
    <div>
      <PageHeader title="Campanhas" desc="Todas as campanhas com métricas completas, ordenação e exportação." />
      <DemoBanner />

      <div className="mb-4 flex flex-wrap items-center gap-2">
        {chips.map((c) => (
          <button
            key={c.v}
            onClick={() => setFiltro(c.v)}
            className={
              filtro === c.v
                ? "rounded-full border border-[var(--mm-blue)]/40 bg-[var(--mm-blue)]/15 px-3 py-1.5 text-sm font-semibold text-[#60a5fa]"
                : "rounded-full border border-[var(--mm-border)] bg-[var(--mm-card)] px-3 py-1.5 text-sm text-[var(--mm-muted)] hover:text-[var(--mm-text)]"
            }
          >
            {c.label}
          </button>
        ))}
        <button
          onClick={exportarCSV}
          className="ml-auto inline-flex items-center gap-2 rounded-xl border border-[var(--mm-border)] bg-[var(--mm-card)] px-3 py-1.5 text-sm font-semibold text-[var(--mm-text)] hover:bg-white/5"
        >
          <Download className="h-4 w-4" /> Exportar CSV
        </button>
      </div>

      <div className={tableWrap}>
        <table className={tableCls}>
          <thead>
            <tr>
              {cols.map((c) => (
                <th key={c.key} className={thCls}>
                  <button onClick={() => ordenar(c.key)} className="inline-flex items-center gap-1 hover:text-[var(--mm-text)]">
                    {c.label}
                    <ChevronsUpDown className="h-3 w-3 opacity-60" />
                  </button>
                </th>
              ))}
              <th className={thCls}>Saúde</th>
              <th className={thCls}>Recomendação da IA</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((c) => (
              <tr key={c.id} className="hover:bg-white/[0.03]">
                <td className={tdCls}>
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 shrink-0 rounded-full"
                      style={{
                        background:
                          c.saude === "lucrativa"
                            ? "#22c55e"
                            : c.saude === "prejuizo"
                              ? "#ef4444"
                              : c.saude === "observacao"
                                ? "#eab308"
                                : "#3b82f6",
                      }}
                    />
                    <div>
                      <p className="font-medium">{c.nome}</p>
                      <p className="text-xs text-[var(--mm-muted)]">
                        {c.pais} • {c.status === "ativa" ? "Ativa" : "Pausada"}
                      </p>
                    </div>
                  </div>
                </td>
                <td className={tdCls}>{formatUSD(c.investimento)}</td>
                <td className={tdCls}>{formatNum(c.vendas)}</td>
                <td className={tdCls}>{formatUSD(c.cpa)}</td>
                <td className={tdCls}>{c.roas.toFixed(2)}x</td>
                <td className={tdCls}>
                  <span className={c.lucro >= 0 ? "font-semibold text-[#4ade80]" : "font-semibold text-[#f87171]"}>
                    {formatUSD(c.lucro)}
                  </span>
                </td>
                <td className={tdCls}>{formatPct(c.margem)}</td>
                <td className={tdCls}>
                  <span className="inline-flex items-center gap-1">
                    {formatPct(c.ctr)} <TrendIcon t={c.tendencia} />
                  </span>
                </td>
                <td className={tdCls}>
                  <Badge tom={tomPorSaude(c.saude)}>{rotuloSaude(c.saude)}</Badge>
                </td>
                <td className={`${tdCls} max-w-[280px] whitespace-normal text-xs text-[var(--mm-muted)]`}>{c.recomendacaoIA}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-[var(--mm-muted)]">
        {lista.length} campanha(s). Clique nos cabeçalhos para ordenar. Cores: verde = lucrativa, amarelo = observação, vermelho
        = prejuízo, azul = aprendizado.
      </p>
    </div>
  )
}
