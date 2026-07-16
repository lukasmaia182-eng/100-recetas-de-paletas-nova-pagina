"use client"

import { PageHeader, DemoBanner, MMCard, KpiCard, SectionTitle } from "@/components/metricas/ui"
import { Download, FileText } from "lucide-react"
import { campanhas, criativos, paises, resumo, formatUSD, formatPct, formatNum } from "@/lib/metricas/data"

function baixarCSV(nome: string, headers: string[], linhas: (string | number)[][]) {
  const csv = [headers.join(","), ...linhas.map((l) => l.join(","))].join("\n")
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = nome
  a.click()
  URL.revokeObjectURL(url)
}

export default function RelatoriosPage() {
  const relatorios = [
    {
      titulo: "Relatório de campanhas",
      desc: "Todas as campanhas com gasto, ROAS, CPA, lucro e margem.",
      acao: () =>
        baixarCSV(
          "relatorio-campanhas.csv",
          ["Campanha", "Pais", "Gasto", "Vendas", "CPA", "ROAS", "Lucro", "Margem"],
          campanhas.map((c) => [c.nome, c.pais, c.investimento, c.vendas, c.cpa, c.roas, c.lucro, c.margem]),
        ),
    },
    {
      titulo: "Relatório de criativos",
      desc: "Desempenho de cada criativo com índice de qualidade e fadiga.",
      acao: () =>
        baixarCSV(
          "relatorio-criativos.csv",
          ["Codigo", "Nome", "Gasto", "Vendas", "CPA", "ROAS", "CTR", "Qualidade", "Fadiga"],
          criativos.map((c) => [c.codigo, c.nome, c.investimento, c.vendas, c.cpa, c.roas, c.ctr, c.indiceQualidade, c.fadiga]),
        ),
    },
    {
      titulo: "Relatório por país",
      desc: "Investimento, receita e retorno por mercado.",
      acao: () =>
        baixarCSV(
          "relatorio-paises.csv",
          ["Pais", "Investido", "Vendas", "Receita", "ROAS", "Lucro"],
          paises.map((p) => [p.pais, p.investimento, p.vendas, p.receita, p.roas, p.lucro]),
        ),
    },
  ]

  return (
    <div>
      <PageHeader title="Relatórios" desc="Exporte os dados da sua operação para análise e prestação de contas." />
      <DemoBanner />

      <MMCard className="mb-5">
        <SectionTitle title="Resumo do período" desc="Últimos 30 dias (dados de demonstração)." />
        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          <KpiCard label="Investimento" value={formatUSD(resumo.investimento)} />
          <KpiCard label="Receita líquida" value={formatUSD(resumo.receitaLiquida)} tone="green" />
          <KpiCard label="Lucro" value={formatUSD(resumo.lucro)} tone="green" />
          <KpiCard label="ROAS" value={`${resumo.roas.toFixed(2)}x`} />
          <KpiCard label="Vendas" value={formatNum(resumo.vendas)} />
          <KpiCard label="CPA médio" value={formatUSD(resumo.cpa)} />
          <KpiCard label="Ticket médio" value={formatUSD(resumo.ticketMedio)} />
          <KpiCard label="Margem" value={formatPct(resumo.margem)} tone="green" />
        </div>
      </MMCard>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {relatorios.map((r) => (
          <MMCard key={r.titulo} className="flex flex-col">
            <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--mm-blue)]/15 text-[var(--mm-blue)]">
              <FileText className="h-5 w-5" />
            </div>
            <h3 className="text-sm font-bold text-[var(--mm-text)]">{r.titulo}</h3>
            <p className="mb-3 mt-1 flex-1 text-sm text-[var(--mm-muted)]">{r.desc}</p>
            <button
              onClick={r.acao}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-[var(--mm-border)] bg-[var(--mm-card-2)]/50 px-3 py-2 text-sm font-semibold text-[var(--mm-text)] hover:bg-white/5"
            >
              <Download className="h-4 w-4" /> Baixar CSV
            </button>
          </MMCard>
        ))}
      </div>
    </div>
  )
}
