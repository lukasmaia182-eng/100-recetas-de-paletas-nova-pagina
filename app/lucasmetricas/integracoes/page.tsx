"use client"

import { PageHeader, DemoBanner, MMCard, Badge } from "@/components/metricas/ui"
import { CircleCheck, Plug } from "lucide-react"

interface Integracao {
  nome: string
  desc: string
  status: "conectar" | "demo"
}

const integracoes: Integracao[] = [
  { nome: "Meta Ads", desc: "Importe campanhas, conjuntos, criativos e métricas de anúncios em tempo real.", status: "demo" },
  { nome: "Hotmart", desc: "Sincronize vendas, reembolsos, order bumps e comissões automaticamente.", status: "demo" },
  { nome: "Google Ads", desc: "Traga campanhas de search e performance max para o mesmo painel.", status: "conectar" },
  { nome: "TikTok Ads", desc: "Acompanhe o desempenho dos anúncios do TikTok junto com o Meta.", status: "conectar" },
  { nome: "Kiwify", desc: "Integre vendas de infoprodutos hospedados na Kiwify.", status: "conectar" },
  { nome: "Google Sheets", desc: "Exporte os dados automaticamente para planilhas.", status: "conectar" },
]

export default function IntegracoesPage() {
  return (
    <div>
      <PageHeader title="Integrações" desc="Conecte suas fontes de dados para substituir os dados de demonstração por dados reais." />
      <DemoBanner />

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        {integracoes.map((i) => (
          <MMCard key={i.nome} className="flex flex-col">
            <div className="mb-3 flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--mm-card-2)] text-[var(--mm-text)]">
                <Plug className="h-5 w-5" />
              </div>
              {i.status === "demo" ? (
                <Badge tom="yellow">Modo demo</Badge>
              ) : (
                <Badge tom="muted">Não conectado</Badge>
              )}
            </div>
            <h3 className="text-sm font-bold text-[var(--mm-text)]">{i.nome}</h3>
            <p className="mb-3 mt-1 flex-1 text-sm text-[var(--mm-muted)]">{i.desc}</p>
            <button
              className={
                i.status === "demo"
                  ? "inline-flex items-center justify-center gap-2 rounded-xl border border-[#22c55e]/30 bg-[#22c55e]/10 px-3 py-2 text-sm font-semibold text-[#4ade80]"
                  : "inline-flex items-center justify-center gap-2 rounded-xl bg-[var(--mm-blue)] px-3 py-2 text-sm font-semibold text-white hover:bg-[#2f6fe0]"
              }
            >
              {i.status === "demo" ? (
                <>
                  <CircleCheck className="h-4 w-4" /> Exibindo dados demo
                </>
              ) : (
                "Conectar"
              )}
            </button>
          </MMCard>
        ))}
      </div>

      <MMCard className="mt-5 border-[var(--mm-blue)]/30 bg-gradient-to-br from-[var(--mm-blue)]/10 to-transparent">
        <h3 className="mb-1 text-sm font-bold text-[var(--mm-text)]">Como funcionam os dados reais?</h3>
        <p className="text-sm leading-relaxed text-[var(--mm-muted)]">
          Enquanto nenhuma fonte está conectada, o Meta Master exibe dados de demonstração para você explorar todas as
          telas. Ao conectar o Meta Ads e a Hotmart, os números do dashboard passam a refletir sua conta real
          automaticamente, sem precisar reconfigurar nada.
        </p>
      </MMCard>
    </div>
  )
}
