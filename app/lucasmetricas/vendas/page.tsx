"use client"

import { useMemo, useState } from "react"
import { PageHeader, DemoBanner, MMCard, KpiCard, SectionTitle, Badge, tableWrap, tableCls, thCls, tdCls, type Tom } from "@/components/metricas/ui"
import { InvestimentoReceitaChart } from "@/components/metricas/charts"
import { vendas, serieDiaria, formatUSD, formatNum, formatData, type Venda } from "@/lib/metricas/data"

type FiltroStatus = "todas" | "aprovada" | "reembolsada" | "pendente"

function statusBadge(s: Venda["status"]): { tom: Tom; label: string } {
  if (s === "aprovada") return { tom: "green", label: "Aprovada" }
  if (s === "reembolsada") return { tom: "red", label: "Reembolsada" }
  return { tom: "yellow", label: "Pendente" }
}

export default function VendasPage() {
  const [filtro, setFiltro] = useState<FiltroStatus>("todas")

  const aprovadas = vendas.filter((v) => v.status === "aprovada")
  const receita = aprovadas.reduce((s, v) => s + v.valor, 0)
  const comissao = aprovadas.reduce((s, v) => s + v.comissaoLiquida, 0)
  const orderBumps = aprovadas.filter((v) => v.orderBump).length

  const lista = useMemo(() => {
    const l = filtro === "todas" ? vendas : vendas.filter((v) => v.status === filtro)
    return l.slice().sort((a, b) => new Date(b.data).getTime() - new Date(a.data).getTime())
  }, [filtro])

  const chips: { v: FiltroStatus; label: string }[] = [
    { v: "todas", label: "Todas" },
    { v: "aprovada", label: "Aprovadas" },
    { v: "reembolsada", label: "Reembolsadas" },
    { v: "pendente", label: "Pendentes" },
  ]

  return (
    <div>
      <PageHeader title="Vendas" desc="Todas as transações da Hotmart com origem, UTMs e atribuição ao anúncio." />
      <DemoBanner />

      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <KpiCard label="Receita (aprovadas)" value={formatUSD(receita)} tone="green" />
        <KpiCard label="Comissão líquida" value={formatUSD(comissao)} tone="green" />
        <KpiCard label="Vendas aprovadas" value={formatNum(aprovadas.length)} />
        <KpiCard label="Com order bump" value={formatNum(orderBumps)} />
      </div>

      <MMCard className="mb-5">
        <SectionTitle title="Investimento x Receita" desc="Últimos 30 dias" />
        <InvestimentoReceitaChart data={serieDiaria} />
      </MMCard>

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
      </div>

      <div className={tableWrap}>
        <table className={tableCls}>
          <thead>
            <tr>
              <th className={thCls}>Data</th>
              <th className={thCls}>Produto / Oferta</th>
              <th className={thCls}>Valor</th>
              <th className={thCls}>País</th>
              <th className={thCls}>Campanha</th>
              <th className={thCls}>Criativo</th>
              <th className={thCls}>UTM</th>
              <th className={thCls}>Status</th>
            </tr>
          </thead>
          <tbody>
            {lista.map((v) => {
              const sb = statusBadge(v.status)
              return (
                <tr key={v.id} className="hover:bg-white/[0.03]">
                  <td className={tdCls}>{formatData(v.data)}</td>
                  <td className={tdCls}>
                    <p className="font-medium">{v.produto}</p>
                    <p className="text-xs text-[var(--mm-muted)]">{v.oferta}</p>
                  </td>
                  <td className={tdCls}>
                    <span className="font-semibold text-[#4ade80]">{formatUSD(v.valor)}</span>
                  </td>
                  <td className={tdCls}>{v.pais}</td>
                  <td className={`${tdCls} max-w-[180px] truncate`}>{v.campanha}</td>
                  <td className={tdCls}>{v.criativo}</td>
                  <td className={`${tdCls} text-xs text-[var(--mm-muted)]`}>
                    {v.utmSource}/{v.utmMedium}
                  </td>
                  <td className={tdCls}>
                    <Badge tom={sb.tom}>{sb.label}</Badge>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
      <p className="mt-3 text-xs text-[var(--mm-muted)]">{lista.length} transação(ões) exibida(s).</p>
    </div>
  )
}
