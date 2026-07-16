"use client"

import { PageHeader, DemoBanner, MMCard, KpiCard, SectionTitle, tableWrap, tableCls, thCls, tdCls } from "@/components/metricas/ui"
import { BarrasComparativas, Rosca } from "@/components/metricas/charts"
import { produtos, formatUSD, formatNum, formatPct } from "@/lib/metricas/data"

export default function ProdutosPage() {
  const receitaTotal = produtos.reduce((s, p) => s + p.receitaBruta, 0)
  const vendasTotal = produtos.reduce((s, p) => s + p.vendas, 0)
  const investTotal = produtos.reduce((s, p) => s + p.investimento, 0)
  const ticketMedio = receitaTotal / vendasTotal

  const receitaPorProduto = produtos.map((p) => ({ nome: p.nome.split("—")[0].trim(), valor: p.receitaBruta }))
  const lucroPorProduto = produtos.map((p) => ({
    nome: p.nome.split("—")[0].trim(),
    lucro: Math.round(p.receitaLiquida - p.investimento - p.reembolsos),
  }))

  return (
    <div>
      <PageHeader title="Produtos" desc="Desempenho de cada produto vendido na Hotmart." />
      <DemoBanner />

      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <KpiCard label="Receita bruta" value={formatUSD(receitaTotal)} tone="green" />
        <KpiCard label="Vendas" value={formatNum(vendasTotal)} />
        <KpiCard label="Ticket médio" value={formatUSD(ticketMedio)} />
        <KpiCard label="Investido" value={formatUSD(investTotal)} tone="red" />
      </div>

      <div className="mb-5 grid grid-cols-1 gap-4 xl:grid-cols-2">
        <MMCard>
          <SectionTitle title="Receita por produto" />
          <Rosca data={receitaPorProduto} />
        </MMCard>
        <MMCard>
          <SectionTitle title="Lucro por produto" desc="Receita líquida menos investimento e reembolsos." />
          <BarrasComparativas data={lucroPorProduto} />
        </MMCard>
      </div>

      <div className={tableWrap}>
        <table className={tableCls}>
          <thead>
            <tr>
              <th className={thCls}>Produto</th>
              <th className={thCls}>Preço</th>
              <th className={thCls}>Vendas</th>
              <th className={thCls}>Receita bruta</th>
              <th className={thCls}>Receita líquida</th>
              <th className={thCls}>Investido</th>
              <th className={thCls}>Order bumps</th>
              <th className={thCls}>Upsells</th>
              <th className={thCls}>Ticket médio</th>
              <th className={thCls}>Conv. checkout</th>
              <th className={thCls}>Reembolso</th>
            </tr>
          </thead>
          <tbody>
            {produtos.map((p) => (
              <tr key={p.id} className="hover:bg-white/[0.03]">
                <td className={tdCls}>
                  <p className="font-medium">{p.nome}</p>
                </td>
                <td className={tdCls}>{formatUSD(p.preco)}</td>
                <td className={tdCls}>{formatNum(p.vendas)}</td>
                <td className={tdCls}>{formatUSD(p.receitaBruta)}</td>
                <td className={tdCls}>
                  <span className="font-semibold text-[#4ade80]">{formatUSD(p.receitaLiquida)}</span>
                </td>
                <td className={tdCls}>{formatUSD(p.investimento)}</td>
                <td className={tdCls}>{formatUSD(p.receitaOrderBumps)}</td>
                <td className={tdCls}>{formatUSD(p.receitaUpsells)}</td>
                <td className={tdCls}>{formatUSD(p.ticketMedio)}</td>
                <td className={tdCls}>{formatPct(p.conversaoCheckout)}</td>
                <td className={tdCls}>{formatPct(p.taxaReembolso)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
