"use client"

import { useState } from "react"
import { PageHeader, DemoBanner, MMCard, Badge, type Tom } from "@/components/metricas/ui"
import { CircleAlert, CircleCheck, TrendingDown, Flame, DollarSign } from "lucide-react"
import { campanhas, criativos, formatUSD } from "@/lib/metricas/data"

interface Alerta {
  id: string
  nivel: "critico" | "atencao" | "ok"
  titulo: string
  descricao: string
  icone: typeof CircleAlert
}

function nivelBadge(n: Alerta["nivel"]): { tom: Tom; label: string } {
  if (n === "critico") return { tom: "red", label: "Crítico" }
  if (n === "atencao") return { tom: "yellow", label: "Atenção" }
  return { tom: "green", label: "OK" }
}

function gerarAlertas(): Alerta[] {
  const lista: Alerta[] = []
  campanhas.forEach((c) => {
    if (c.roas < 1) {
      lista.push({
        id: `cmp-roas-${c.id}`,
        nivel: "critico",
        titulo: `ROAS abaixo de 1 em "${c.nome}"`,
        descricao: `ROAS de ${c.roas.toFixed(2)}x com lucro de ${formatUSD(c.lucro)}. Recomendo pausar e realocar a verba.`,
        icone: DollarSign,
      })
    } else if (c.tendencia === "down") {
      lista.push({
        id: `cmp-trend-${c.id}`,
        nivel: "atencao",
        titulo: `Queda de desempenho em "${c.nome}"`,
        descricao: `CTR e vendas em tendência de queda. Avaliar novos criativos antes de escalar.`,
        icone: TrendingDown,
      })
    }
  })
  criativos.forEach((cr) => {
    if (cr.fadiga === "fadiga") {
      lista.push({
        id: `cr-fadiga-${cr.id}`,
        nivel: "atencao",
        titulo: `Criativo ${cr.codigo} em fadiga`,
        descricao: `Frequência ${cr.frequencia.toFixed(2)} e CTR ${cr.ctr.toFixed(2)}%. Substituir ou reduzir verba.`,
        icone: Flame,
      })
    }
  })
  return lista
}

export default function AlertasPage() {
  const [alertas] = useState<Alerta[]>(gerarAlertas)
  const criticos = alertas.filter((a) => a.nivel === "critico").length
  const atencoes = alertas.filter((a) => a.nivel === "atencao").length

  return (
    <div>
      <PageHeader title="Alertas" desc="Avisos automáticos sobre desperdício de verba, fadiga de criativos e quedas de desempenho." />
      <DemoBanner />

      <div className="mb-5 grid grid-cols-3 gap-3">
        <MMCard className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ef4444]/15 text-[#f87171]">
            <CircleAlert className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--mm-text)]">{criticos}</p>
            <p className="text-xs text-[var(--mm-muted)]">Críticos</p>
          </div>
        </MMCard>
        <MMCard className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#eab308]/15 text-[#facc15]">
            <Flame className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--mm-text)]">{atencoes}</p>
            <p className="text-xs text-[var(--mm-muted)]">Atenção</p>
          </div>
        </MMCard>
        <MMCard className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#22c55e]/15 text-[#4ade80]">
            <CircleCheck className="h-5 w-5" />
          </div>
          <div>
            <p className="text-2xl font-bold text-[var(--mm-text)]">{campanhas.length - criticos}</p>
            <p className="text-xs text-[var(--mm-muted)]">Saudáveis</p>
          </div>
        </MMCard>
      </div>

      <div className="flex flex-col gap-3">
        {alertas.map((a) => {
          const nb = nivelBadge(a.nivel)
          const Icone = a.icone
          return (
            <MMCard key={a.id} className="flex items-start gap-3">
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg ${
                  a.nivel === "critico" ? "bg-[#ef4444]/15 text-[#f87171]" : "bg-[#eab308]/15 text-[#facc15]"
                }`}
              >
                <Icone className="h-4 w-4" />
              </div>
              <div className="flex-1">
                <div className="mb-0.5 flex items-center gap-2">
                  <p className="text-sm font-semibold text-[var(--mm-text)]">{a.titulo}</p>
                  <Badge tom={nb.tom}>{nb.label}</Badge>
                </div>
                <p className="text-sm text-[var(--mm-muted)]">{a.descricao}</p>
              </div>
            </MMCard>
          )
        })}
        {alertas.length === 0 && (
          <MMCard className="text-center text-sm text-[var(--mm-muted)]">Nenhum alerta no momento. Tudo saudável!</MMCard>
        )}
      </div>
    </div>
  )
}
