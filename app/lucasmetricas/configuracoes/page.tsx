import type { Metadata } from "next"
import { PageHeader, MMCard, SectionTitle, Badge } from "@/components/metricas/ui"

export const metadata: Metadata = {
  title: "Configurações — Meta Master",
}

function Toggle({ label, desc, on = false }: { label: string; desc: string; on?: boolean }) {
  return (
    <div className="flex items-center justify-between gap-4 border-t border-[var(--mm-border)] py-3 first:border-t-0 first:pt-0">
      <div>
        <p className="text-sm font-medium text-[var(--mm-text)]">{label}</p>
        <p className="mt-0.5 text-xs text-[var(--mm-muted)]">{desc}</p>
      </div>
      <span
        className={`relative inline-flex h-6 w-11 shrink-0 items-center rounded-full transition-colors ${
          on ? "bg-[var(--mm-green)]" : "bg-white/10"
        }`}
        aria-hidden
      >
        <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${on ? "translate-x-6" : "translate-x-1"}`} />
      </span>
    </div>
  )
}

export default function ConfiguracoesPage() {
  return (
    <div>
      <PageHeader title="Configurações" desc="Preferências da conta, metas e notificações do painel." />

      <div className="grid gap-5 lg:grid-cols-2">
        <MMCard>
          <SectionTitle title="Perfil da conta" desc="Identificação do gestor de tráfego." />
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-[var(--mm-muted)]">Nome</label>
              <input
                defaultValue="Lucas"
                className="w-full rounded-lg border border-[var(--mm-border)] bg-[var(--mm-bg)] px-3 py-2 text-sm text-[var(--mm-text)] outline-none focus:border-[var(--mm-blue)]"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-[var(--mm-muted)]">Moeda de exibição</label>
              <select className="w-full rounded-lg border border-[var(--mm-border)] bg-[var(--mm-bg)] px-3 py-2 text-sm text-[var(--mm-text)] outline-none focus:border-[var(--mm-blue)]">
                <option>USD (US$)</option>
                <option>BRL (R$)</option>
                <option>EUR (€)</option>
              </select>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-[var(--mm-muted)]">Fuso horário</label>
              <select className="w-full rounded-lg border border-[var(--mm-border)] bg-[var(--mm-bg)] px-3 py-2 text-sm text-[var(--mm-text)] outline-none focus:border-[var(--mm-blue)]">
                <option>América/São Paulo (GMT-3)</option>
                <option>América/Cidade do México (GMT-6)</option>
                <option>Europa/Lisboa (GMT+0)</option>
              </select>
            </div>
          </div>
        </MMCard>

        <MMCard>
          <SectionTitle title="Metas" desc="Limiares usados para classificar campanhas e gerar alertas." />
          <div className="space-y-3">
            <div>
              <label className="mb-1 block text-xs font-medium text-[var(--mm-muted)]">ROAS mínimo aceitável</label>
              <input
                defaultValue="1.5"
                className="w-full rounded-lg border border-[var(--mm-border)] bg-[var(--mm-bg)] px-3 py-2 text-sm text-[var(--mm-text)] outline-none focus:border-[var(--mm-blue)]"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-[var(--mm-muted)]">CPA máximo (US$)</label>
              <input
                defaultValue="12.00"
                className="w-full rounded-lg border border-[var(--mm-border)] bg-[var(--mm-bg)] px-3 py-2 text-sm text-[var(--mm-text)] outline-none focus:border-[var(--mm-blue)]"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-[var(--mm-muted)]">Meta de faturamento mensal (US$)</label>
              <input
                defaultValue="30000"
                className="w-full rounded-lg border border-[var(--mm-border)] bg-[var(--mm-bg)] px-3 py-2 text-sm text-[var(--mm-text)] outline-none focus:border-[var(--mm-blue)]"
              />
            </div>
          </div>
        </MMCard>

        <MMCard>
          <SectionTitle title="Notificações" desc="Quando o Meta Master deve te avisar." />
          <Toggle label="Alertas de prejuízo" desc="Avisar quando uma campanha ficar com ROAS abaixo da meta." on />
          <Toggle label="Resumo diário por e-mail" desc="Receber o balanço do dia todas as manhãs." on />
          <Toggle label="Fadiga de criativo" desc="Avisar quando a frequência passar de 3." on />
          <Toggle label="Novidades do produto" desc="Comunicados e novas funcionalidades." />
        </MMCard>

        <MMCard>
          <SectionTitle title="Plano" desc="Sua assinatura atual." />
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-[var(--mm-text)]">Meta Master Pro</p>
              <p className="mt-0.5 text-xs text-[var(--mm-muted)]">Contas ilimitadas • Analista de IA • Relatórios</p>
            </div>
            <Badge tom="green">Ativo</Badge>
          </div>
          <button className="mt-4 w-full rounded-lg border border-[var(--mm-border)] bg-[var(--mm-bg)] px-3 py-2 text-sm font-medium text-[var(--mm-text)] transition-colors hover:border-[var(--mm-blue)]">
            Gerenciar assinatura
          </button>
        </MMCard>
      </div>

      <p className="mt-5 text-xs text-[var(--mm-muted)]">
        Observação: esta é uma tela de demonstração — as preferências ainda não são salvas.
      </p>
    </div>
  )
}
