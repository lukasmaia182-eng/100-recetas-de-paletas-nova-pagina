"use client"

import { PageHeader, DemoBanner, MMCard, Badge, SectionTitle } from "@/components/metricas/ui"
import { criativos, formatUSD, formatPct } from "@/lib/metricas/data"
import { Trophy } from "lucide-react"

interface Teste {
  id: string
  nome: string
  hipotese: string
  status: "rodando" | "concluido"
  aId: string
  bId: string
}

const testes: Teste[] = [
  { id: "t1", nome: "Gancho: Renda extra vs. UGC autêntico", hipotese: "O criativo UGC gera mais confiança e converte melhor.", status: "concluido", aId: "cr-01", bId: "cr-07" },
  { id: "t2", nome: "Formato: Reels vs. Carrossel", hipotese: "Reels tem CPC menor e mais alcance.", status: "rodando", aId: "cr-02", bId: "cr-04" },
  { id: "t3", nome: "Ângulo: Preço/oferta vs. Curiosidade", hipotese: "Mostrar o preço baixo aumenta a conversão.", status: "rodando", aId: "cr-06", bId: "cr-08" },
]

export default function TestesPage() {
  return (
    <div>
      <PageHeader title="Testes A/B" desc="Compare hipóteses de criativos e descubra o vencedor com base em dados." />
      <DemoBanner />

      <div className="flex flex-col gap-4">
        {testes.map((t) => {
          const a = criativos.find((c) => c.id === t.aId)!
          const b = criativos.find((c) => c.id === t.bId)!
          const vencedor = a.roas >= b.roas ? a : b
          const metrica = (c: typeof a, label: string, valor: string, melhor: boolean) => (
            <div className="flex items-center justify-between text-sm">
              <span className="text-[var(--mm-muted)]">{label}</span>
              <span className={melhor ? "font-semibold text-[#4ade80]" : "text-[var(--mm-text)]"}>{valor}</span>
            </div>
          )
          return (
            <MMCard key={t.id}>
              <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
                <div>
                  <SectionTitle title={t.nome} desc={t.hipotese} />
                </div>
                <Badge tom={t.status === "concluido" ? "green" : "blue"}>
                  {t.status === "concluido" ? "Concluído" : "Em andamento"}
                </Badge>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {[a, b].map((c) => {
                  const isWin = c.id === vencedor.id && t.status === "concluido"
                  return (
                    <div
                      key={c.id}
                      className={`rounded-xl border p-3 ${
                        isWin ? "border-[#22c55e]/40 bg-[#22c55e]/5" : "border-[var(--mm-border)] bg-[var(--mm-card-2)]/40"
                      }`}
                    >
                      <div className="mb-2 flex items-center justify-between">
                        <span className="font-semibold text-[var(--mm-text)]">
                          {c.codigo} — {c.nome}
                        </span>
                        {isWin && (
                          <span className="flex items-center gap-1 text-xs font-semibold text-[#4ade80]">
                            <Trophy className="h-3.5 w-3.5" /> Vencedor
                          </span>
                        )}
                      </div>
                      <div className="flex flex-col gap-1">
                        {metrica(c, "ROAS", `${c.roas.toFixed(2)}x`, c.roas >= vencedor.roas)}
                        {metrica(c, "CPA", formatUSD(c.cpa), c.cpa <= Math.min(a.cpa, b.cpa))}
                        {metrica(c, "CTR", formatPct(c.ctr), c.ctr >= Math.max(a.ctr, b.ctr))}
                        {metrica(c, "Conversão", formatPct(c.taxaConversao), c.taxaConversao >= Math.max(a.taxaConversao, b.taxaConversao))}
                      </div>
                    </div>
                  )
                })}
              </div>

              {t.status === "concluido" && (
                <p className="mt-3 rounded-lg border border-[var(--mm-blue)]/20 bg-[var(--mm-blue)]/5 p-2 text-xs text-[var(--mm-muted)]">
                  <span className="font-semibold text-[#60a5fa]">Conclusão: </span>
                  {vencedor.codigo} venceu com ROAS {vencedor.roas.toFixed(2)}x. Escalar o vencedor e pausar o perdedor.
                </p>
              )}
            </MMCard>
          )
        })}
      </div>
    </div>
  )
}
