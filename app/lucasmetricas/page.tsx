import Link from "next/link"
import { Bot, ArrowUpRight } from "lucide-react"
import { KpiCard, MMCard, DemoBanner, PageHeader, SectionTitle, Badge } from "@/components/metricas/ui"
import { InvestimentoReceitaChart, LinhaSimples, BarrasSimples, BarrasComparativas, Rosca } from "@/components/metricas/charts"
import { resumo, serieDiaria, campanhas, produtos, paises, formatUSD, formatNum, formatPct, funil } from "@/lib/metricas/data"

export default function VisaoGeralPage() {
  const vendasPorPais = paises
    .slice()
    .sort((a, b) => b.vendas - a.vendas)
    .map((p) => ({ nome: p.codigo, vendas: p.vendas }))

  const receitaPorProduto = produtos.map((p) => ({ nome: p.nome.split("—")[0].trim(), valor: p.receitaBruta }))
  const dispositivos = [
    { nome: "Mobile (Android)", valor: 58 },
    { nome: "Mobile (iPhone)", valor: 31 },
    { nome: "Desktop", valor: 11 },
  ]
  const compCampanhas = campanhas.map((c) => ({ nome: c.nome.replace(/\[.*?\]\s*/, "").slice(0, 16), lucro: c.lucro }))

  return (
    <div>
      <PageHeader title="Visão Geral" desc="Panorama de performance e lucro das campanhas de tráfego pago." />
      <DemoBanner />

      {/* Resumo do Analista */}
      <MMCard className="mb-6 border-[var(--mm-blue)]/30 bg-gradient-to-br from-[var(--mm-blue)]/10 to-transparent">
        <div className="flex items-start gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--mm-blue)]/20 text-[var(--mm-blue)]">
            <Bot className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <h3 className="font-bold text-[var(--mm-text)]">Resumo do Analista</h3>
              <Badge tom="blue">META MASTER AI</Badge>
            </div>
            <p className="text-sm leading-relaxed text-[var(--mm-muted)]">
              Nas últimas 24 horas o investimento subiu <strong className="text-[var(--mm-text)]">18%</strong>, enquanto as
              vendas ficaram estáveis. O CPA médio subiu de <strong className="text-[var(--mm-text)]">US$ 2,10</strong> para{" "}
              <strong className="text-[var(--mm-text)]">US$ 2,75</strong>, puxado pela queda de CTR do criativo{" "}
              <strong className="text-[#f87171]">AD03</strong> (fadiga). Recomendo reduzir a verba do AD03 e realocar para o{" "}
              <strong className="text-[#4ade80]">AD07</strong>, que tem o melhor ROAS (5,39) e menor CPA (US$ 2,05).
            </p>
            <Link
              href="/lucasmetricas/analista"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-[var(--mm-blue)] hover:underline"
            >
              Abrir Analista de IA <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </MMCard>

      {/* KPIs principais */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-3 xl:grid-cols-6">
        <KpiCard label="Investimento" value={formatUSD(resumo.investimento)} delta="+18%" trend="up" />
        <KpiCard label="Receita bruta" value={formatUSD(resumo.receitaBruta)} delta="+12%" trend="up" />
        <KpiCard label="Lucro" value={formatUSD(resumo.lucro)} tone="green" delta="+9%" trend="up" />
        <KpiCard label="Margem" value={formatPct(resumo.margem)} tone="green" />
        <KpiCard label="ROAS" value={`${resumo.roas.toFixed(2)}x`} delta="+0,3" trend="up" />
        <KpiCard label="ROI" value={formatPct(resumo.roi)} tone="green" />
        <KpiCard label="Vendas" value={formatNum(resumo.vendas)} delta="+6%" trend="up" />
        <KpiCard label="CPA" value={formatUSD(resumo.cpa)} tone="red" delta="+0,65" trend="down" />
        <KpiCard label="Ticket médio" value={formatUSD(resumo.ticketMedio)} />
        <KpiCard label="Conversão" value={formatPct(resumo.taxaConversao)} />
        <KpiCard label="CTR" value={formatPct(resumo.ctr)} delta="-4%" trend="down" />
        <KpiCard label="CPC" value={formatUSD(resumo.cpc)} />
      </div>

      {/* Métricas secundárias */}
      <div className="mb-6 grid grid-cols-2 gap-3 md:grid-cols-4 xl:grid-cols-6">
        <KpiCard label="CPM" value={formatUSD(resumo.cpm)} />
        <KpiCard label="Frequência" value={resumo.frequencia.toFixed(2)} />
        <KpiCard label="Impressões" value={formatNum(resumo.impressoes)} />
        <KpiCard label="Alcance" value={formatNum(resumo.alcance)} />
        <KpiCard label="Checkouts" value={formatNum(resumo.checkouts)} />
        <KpiCard label="Abandono checkout" value={formatPct(resumo.abandonoCheckout)} tone="yellow" />
        <KpiCard label="Reembolsos" value={formatUSD(resumo.reembolsos)} tone="red" />
        <KpiCard label="Taxa reembolso" value={formatPct(resumo.taxaReembolso)} />
        <KpiCard label="Receita líquida" value={formatUSD(resumo.receitaLiquida)} />
        <KpiCard label="Taxas (plataforma)" value={formatUSD(resumo.taxas)} tone="red" />
      </div>

      {/* Gráficos principais */}
      <div className="mb-6 grid gap-4 xl:grid-cols-2">
        <MMCard>
          <SectionTitle title="Investimento vs. Receita" desc="Últimos 30 dias" />
          <InvestimentoReceitaChart data={serieDiaria} />
        </MMCard>
        <MMCard>
          <SectionTitle title="Lucro diário" desc="Últimos 30 dias" />
          <LinhaSimples data={serieDiaria} dataKey="lucro" cor="green" />
        </MMCard>
        <MMCard>
          <SectionTitle title="Vendas por dia" />
          <BarrasSimples data={serieDiaria} dataKey="vendas" xKey="dia" cor="blue" />
        </MMCard>
        <MMCard>
          <SectionTitle title="CPA por dia" />
          <LinhaSimples data={serieDiaria} dataKey="cpa" cor="yellow" />
        </MMCard>
        <MMCard>
          <SectionTitle title="ROAS por dia" />
          <LinhaSimples data={serieDiaria} dataKey="roas" cor="green" />
        </MMCard>
        <MMCard>
          <SectionTitle title="CTR por dia" />
          <LinhaSimples data={serieDiaria} dataKey="ctr" cor="blue" />
        </MMCard>
      </div>

      {/* Distribuições */}
      <div className="grid gap-4 lg:grid-cols-3">
        <MMCard>
          <SectionTitle title="Comparação entre campanhas" desc="Lucro (US$)" />
          <BarrasComparativas data={compCampanhas} />
        </MMCard>
        <MMCard>
          <SectionTitle title="Vendas por país" />
          <BarrasSimples data={vendasPorPais} dataKey="vendas" xKey="nome" cor="blue" />
        </MMCard>
        <MMCard>
          <SectionTitle title="Distribuição por dispositivo" />
          <Rosca data={dispositivos} />
          <div className="mt-2 flex flex-wrap justify-center gap-3 text-xs text-[var(--mm-muted)]">
            {dispositivos.map((d) => (
              <span key={d.nome}>
                {d.nome}: <strong className="text-[var(--mm-text)]">{d.valor}%</strong>
              </span>
            ))}
          </div>
        </MMCard>
      </div>

      {/* Funil + receita por produto */}
      <div className="mt-4 grid gap-4 lg:grid-cols-2">
        <MMCard>
          <SectionTitle title="Funil de conversão" />
          <div className="space-y-2">
            {funil.map((e, i) => {
              const pct = (e.valor / funil[0].valor) * 100
              return (
                <div key={e.etapa}>
                  <div className="mb-1 flex justify-between text-xs">
                    <span className="text-[var(--mm-muted)]">{e.etapa}</span>
                    <span className="font-semibold text-[var(--mm-text)]">{formatNum(e.valor)}</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/5">
                    <div
                      className="h-full rounded-full bg-[var(--mm-blue)]"
                      style={{ width: `${Math.max(pct, 1.5)}%`, opacity: 1 - i * 0.09 }}
                    />
                  </div>
                </div>
              )
            })}
          </div>
        </MMCard>
        <MMCard>
          <SectionTitle title="Receita por produto" />
          <Rosca data={receitaPorProduto} />
          <div className="mt-2 space-y-1 text-sm">
            {produtos.map((p) => (
              <div key={p.id} className="flex justify-between">
                <span className="text-[var(--mm-muted)]">{p.nome.split("—")[0].trim()}</span>
                <span className="font-semibold text-[var(--mm-text)]">{formatUSD(p.receitaBruta)}</span>
              </div>
            ))}
          </div>
        </MMCard>
      </div>
    </div>
  )
}
