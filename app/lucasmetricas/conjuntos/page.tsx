import { PageHeader, DemoBanner, MMCard, SectionTitle, tableWrap, tableCls, thCls, tdCls } from "@/components/metricas/ui"
import { conjuntos, campanhas, formatUSD, formatNum, formatPct } from "@/lib/metricas/data"

const breakdownDispositivo = [
  { seg: "Android", invest: 2280, vendas: 512, cpa: 4.45, roas: 3.1 },
  { seg: "iPhone", invest: 1120, vendas: 348, cpa: 3.22, roas: 3.6 },
  { seg: "Desktop", invest: 420, vendas: 70, cpa: 6.0, roas: 1.9 },
]
const breakdownPosicionamento = [
  { seg: "Feed (Instagram)", invest: 1480, vendas: 402, cpa: 3.68, roas: 3.4 },
  { seg: "Reels", invest: 1320, vendas: 356, cpa: 3.71, roas: 3.5 },
  { seg: "Stories", invest: 620, vendas: 118, cpa: 5.25, roas: 2.3 },
  { seg: "Feed (Facebook)", invest: 400, vendas: 54, cpa: 7.41, roas: 1.7 },
]
const breakdownIdadeSexo = [
  { seg: "25-34 • Feminino", invest: 1640, vendas: 468, cpa: 3.5, roas: 3.6 },
  { seg: "35-44 • Feminino", invest: 1180, vendas: 322, cpa: 3.66, roas: 3.4 },
  { seg: "25-34 • Masculino", invest: 640, vendas: 96, cpa: 6.67, roas: 1.9 },
  { seg: "45-54 • Feminino", invest: 360, vendas: 44, cpa: 8.18, roas: 1.6 },
]

function BreakdownCard({ titulo, dados }: { titulo: string; dados: { seg: string; invest: number; vendas: number; cpa: number; roas: number }[] }) {
  return (
    <MMCard>
      <SectionTitle title={titulo} />
      <div className="space-y-3">
        {dados.map((d) => (
          <div key={d.seg}>
            <div className="mb-1 flex items-center justify-between text-sm">
              <span className="text-[var(--mm-text)]">{d.seg}</span>
              <span className="text-[var(--mm-muted)]">
                {formatNum(d.vendas)} vendas • ROAS {d.roas.toFixed(1)}x • CPA {formatUSD(d.cpa)}
              </span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.min((d.roas / 4) * 100, 100)}%`,
                  background: d.roas >= 2.5 ? "#22c55e" : d.roas >= 1.5 ? "#eab308" : "#ef4444",
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </MMCard>
  )
}

export default function ConjuntosPage() {
  return (
    <div>
      <PageHeader title="Conjuntos de Anúncios" desc="Desempenho por público, país, posicionamento, idade e dispositivo." />
      <DemoBanner />

      <div className={`${tableWrap} mb-6`}>
        <table className={tableCls}>
          <thead>
            <tr>
              {["Conjunto", "Campanha", "Público", "País", "Idade / Sexo", "Posicion.", "Gasto", "CTR", "CPC", "CPM", "Freq.", "Vendas", "CPA", "ROAS", "Lucro"].map(
                (h) => (
                  <th key={h} className={thCls}>
                    {h}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {conjuntos.map((a) => {
              const cmp = campanhas.find((c) => c.id === a.campanhaId)
              return (
                <tr key={a.id} className="hover:bg-white/[0.03]">
                  <td className={`${tdCls} font-medium`}>{a.nome}</td>
                  <td className={`${tdCls} text-xs text-[var(--mm-muted)]`}>{cmp?.nome.replace(/\[.*?\]\s*/, "")}</td>
                  <td className={tdCls}>{a.publico}</td>
                  <td className={tdCls}>{a.pais}</td>
                  <td className={tdCls}>
                    {a.idade} • {a.sexo}
                  </td>
                  <td className={tdCls}>{a.posicionamento}</td>
                  <td className={tdCls}>{formatUSD(a.investimento)}</td>
                  <td className={tdCls}>{formatPct(a.ctr)}</td>
                  <td className={tdCls}>{formatUSD(a.cpc)}</td>
                  <td className={tdCls}>{formatUSD(a.cpm)}</td>
                  <td className={tdCls}>{a.frequencia.toFixed(2)}</td>
                  <td className={tdCls}>{formatNum(a.vendas)}</td>
                  <td className={tdCls}>{formatUSD(a.cpa)}</td>
                  <td className={tdCls}>{a.roas.toFixed(2)}x</td>
                  <td className={tdCls}>
                    <span className={a.lucro >= 0 ? "font-semibold text-[#4ade80]" : "font-semibold text-[#f87171]"}>
                      {formatUSD(a.lucro)}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <div className="grid gap-4 lg:grid-cols-3">
        <BreakdownCard titulo="Por dispositivo" dados={breakdownDispositivo} />
        <BreakdownCard titulo="Por posicionamento" dados={breakdownPosicionamento} />
        <BreakdownCard titulo="Por idade e sexo" dados={breakdownIdadeSexo} />
      </div>
    </div>
  )
}
