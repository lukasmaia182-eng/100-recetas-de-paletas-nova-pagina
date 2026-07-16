"use client"

import { PageHeader, DemoBanner, MMCard, KpiCard, SectionTitle } from "@/components/metricas/ui"
import { funil, formatNum, formatPct } from "@/lib/metricas/data"

export default function FunilPage() {
  // As 5 primeiras etapas formam o funil linear principal.
  const principais = funil.slice(0, 5)
  const maxValor = principais[0].valor
  const conversaoGeral = (principais[principais.length - 1].valor / principais[0].valor) * 100
  const checkoutParaCompra = (funil[4].valor / funil[3].valor) * 100
  const cliqueParaPagina = (funil[2].valor / funil[1].valor) * 100

  return (
    <div>
      <PageHeader title="Funil de conversão" desc="Da impressão à compra — onde estão os gargalos da sua operação." />
      <DemoBanner />

      <div className="mb-5 grid grid-cols-2 gap-3 lg:grid-cols-4">
        <KpiCard label="Conversão geral" value={conversaoGeral.toFixed(3) + "%"} hint="Impressão → compra" />
        <KpiCard label="Checkout → compra" value={formatPct(checkoutParaCompra)} tone="green" />
        <KpiCard label="Clique → página" value={formatPct(cliqueParaPagina)} tone="yellow" />
        <KpiCard label="Compras aprovadas" value={formatNum(funil[4].valor)} />
      </div>

      <MMCard className="mb-5">
        <SectionTitle title="Jornada do cliente" desc="Volume em cada etapa e taxa de passagem." />
        <div className="flex flex-col gap-3">
          {principais.map((etapa, i) => {
            const largura = (etapa.valor / maxValor) * 100
            const anterior = i > 0 ? principais[i - 1] : null
            const taxa = anterior ? (etapa.valor / anterior.valor) * 100 : 100
            return (
              <div key={etapa.etapa}>
                <div className="mb-1 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[var(--mm-text)]">{etapa.etapa}</span>
                  <span className="text-[var(--mm-muted)]">
                    {formatNum(etapa.valor)}
                    {anterior && (
                      <span
                        className={`ml-2 ${taxa >= 40 ? "text-[#4ade80]" : taxa >= 15 ? "text-[#facc15]" : "text-[#f87171]"}`}
                      >
                        ({taxa.toFixed(1)}% do passo anterior)
                      </span>
                    )}
                  </span>
                </div>
                <div className="h-8 w-full overflow-hidden rounded-lg bg-[var(--mm-card-2)]">
                  <div
                    className="flex h-full items-center rounded-lg bg-gradient-to-r from-[var(--mm-blue)] to-[#60a5fa] px-3 text-xs font-semibold text-white"
                    style={{ width: `${Math.max(largura, 8)}%` }}
                  >
                    {largura.toFixed(1)}%
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </MMCard>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
        <MMCard>
          <h3 className="mb-1 text-sm font-bold text-[var(--mm-text)]">Maior gargalo</h3>
          <p className="text-sm leading-relaxed text-[var(--mm-muted)]">
            A maior queda acontece entre <strong className="text-[var(--mm-text)]">Cliques</strong> e{" "}
            <strong className="text-[var(--mm-text)]">Checkouts iniciados</strong>. Otimize o tempo de carregamento e a
            promessa da headline da página de vendas para reduzir a perda.
          </p>
        </MMCard>
        <MMCard>
          <h3 className="mb-1 text-sm font-bold text-[var(--mm-text)]">Order bumps & upsells</h3>
          <p className="text-sm leading-relaxed text-[var(--mm-muted)]">
            <strong className="text-[#4ade80]">{formatNum(funil[5].valor)}</strong> order bumps e{" "}
            <strong className="text-[#4ade80]">{formatNum(funil[6].valor)}</strong> upsells aceitos aumentam o ticket médio
            sem custo extra de tráfego.
          </p>
        </MMCard>
        <MMCard>
          <h3 className="mb-1 text-sm font-bold text-[var(--mm-text)]">Reembolsos</h3>
          <p className="text-sm leading-relaxed text-[var(--mm-muted)]">
            <strong className="text-[#f87171]">{formatNum(funil[7].valor)}</strong> reembolsos no período. Monitorar a
            promessa dos criativos ajuda a manter essa taxa baixa.
          </p>
        </MMCard>
      </div>
    </div>
  )
}
