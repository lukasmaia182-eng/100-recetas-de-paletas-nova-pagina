"use client"

import { PageHeader, DemoBanner, MMCard, KpiCard, SectionTitle, Badge, tableWrap, tableCls, thCls, tdCls, type Tom } from "@/components/metricas/ui"
import { BarrasSimples } from "@/components/metricas/charts"
import { paises, formatUSD, formatNum, formatPct } from "@/lib/metricas/data"

const META_ROAS = 2.5

function recomendacao(roas: number): { tom: Tom; label: string } {
  if (roas >= META_ROAS) return { tom: "green", label: "Escalar" }
  if (roas >= 1) return { tom: "yellow", label: "Manter" }
  return { tom: "red", label: "Reduzir" }
}

export default function PaisesPage() {
  const rows = [...paises].sort((a, b) => b.receita - a.receita)
  const receitaTotal = paises.reduce((s, p) => s + p.receita, 0)
  const lucroTotal = paises.reduce((s, p) => s + p.lucro, 0)
  const melhor = rows[0]

  const receitaPorPais = rows.map((p) => ({ nome: p.codigo, receita: p.receita }))

  return (
    <div>
      <PageHeader title="Países" desc="Onde suas vendas acontecem e qual mercado dá mais retorno." />
      <DemoBanner />

      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <KpiCard label="Países ativos" value={String(paises.length)} />
        <KpiCard label="Melhor mercado" value={melhor.pais} tone="green" />
        <KpiCard label="Receita total" value={formatUSD(receitaTotal)} tone="green" />
        <KpiCard label="Lucro total" value={formatUSD(lucroTotal)} tone={lucroTotal >= 0 ? "green" : "red"} />
      </div>

      <MMCard className="mb-5">
        <SectionTitle title="Receita por país" desc="Em dólares (USD)." />
        <BarrasSimples data={receitaPorPais} dataKey="receita" xKey="nome" cor="blue" />
      </MMCard>

      <div className={tableWrap}>
        <table className={tableCls}>
          <thead>
            <tr>
              <th className={thCls}>País</th>
              <th className={thCls}>Investido</th>
              <th className={thCls}>Vendas</th>
              <th className={thCls}>CPA</th>
              <th className={thCls}>Receita</th>
              <th className={thCls}>ROAS</th>
              <th className={thCls}>Lucro</th>
              <th className={thCls}>Conversão</th>
              <th className={thCls}>Ticket médio</th>
              <th className={thCls}>Recomendação</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((p) => {
              const rec = recomendacao(p.roas)
              return (
                <tr key={p.codigo} className="hover:bg-white/[0.03]">
                  <td className={tdCls}>
                    <span className="font-medium">{p.pais}</span>
                    <span className="ml-2 text-xs text-[var(--mm-muted)]">{p.codigo}</span>
                  </td>
                  <td className={tdCls}>{formatUSD(p.investimento)}</td>
                  <td className={tdCls}>{formatNum(p.vendas)}</td>
                  <td className={tdCls}>{formatUSD(p.cpa)}</td>
                  <td className={tdCls}>
                    <span className="font-semibold text-[#4ade80]">{formatUSD(p.receita)}</span>
                  </td>
                  <td className={tdCls}>{p.roas.toFixed(2)}x</td>
                  <td className={tdCls}>
                    <span className={p.lucro >= 0 ? "font-semibold text-[#4ade80]" : "font-semibold text-[#f87171]"}>
                      {formatUSD(p.lucro)}
                    </span>
                  </td>
                  <td className={tdCls}>{formatPct(p.conversao)}</td>
                  <td className={tdCls}>{formatUSD(p.ticketMedio)}</td>
                  <td className={tdCls}>
                    <Badge tom={rec.tom}>{rec.label}</Badge>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
