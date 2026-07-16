"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { navItens, BASE } from "./nav"
import { Menu, X, ChevronDown, Calendar, Sparkles } from "lucide-react"

const periodos = [
  "Hoje",
  "Ontem",
  "Últimos 3 dias",
  "Últimos 7 dias",
  "Últimos 14 dias",
  "Últimos 30 dias",
  "Este mês",
  "Mês anterior",
  "Período personalizado",
]

const filtrosSelect: { label: string; opcoes: string[] }[] = [
  { label: "Conta de anúncios", opcoes: ["Todas", "Conta principal", "Conta LATAM"] },
  { label: "Produto", opcoes: ["Todos", "Paletas Rellenas", "Lancheira Mágica"] },
  { label: "País", opcoes: ["Todos", "Estados Unidos", "México", "Colômbia", "Peru", "Chile", "Argentina"] },
  { label: "Plataforma", opcoes: ["Todas", "Facebook", "Instagram"] },
  { label: "Posicionamento", opcoes: ["Todos", "Feed", "Stories", "Reels"] },
  { label: "Sexo", opcoes: ["Todos", "Feminino", "Masculino"] },
]

function Sidebar({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname()
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center gap-2 px-5 py-5">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[var(--mm-blue)]/20 text-[var(--mm-blue)]">
          <Sparkles className="h-5 w-5" />
        </div>
        <div>
          <p className="text-sm font-bold leading-tight text-[var(--mm-text)]">META MASTER</p>
          <p className="text-[10px] font-medium uppercase tracking-wider text-[var(--mm-muted)]">Performance & IA</p>
        </div>
      </div>
      <nav className="flex-1 space-y-1 overflow-y-auto px-3 pb-6">
        {navItens.map((item) => {
          const ativo = item.href === BASE ? pathname === BASE : pathname.startsWith(item.href)
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onNavigate}
              className={cn(
                "flex items-center gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-colors",
                ativo
                  ? "bg-[var(--mm-blue)]/15 text-[var(--mm-text)]"
                  : "text-[var(--mm-muted)] hover:bg-white/5 hover:text-[var(--mm-text)]",
              )}
            >
              <Icon className={cn("h-[18px] w-[18px]", ativo && "text-[var(--mm-blue)]")} />
              {item.label}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}

export function DashboardShell({ children }: { children: React.ReactNode }) {
  const [aberto, setAberto] = useState(false)
  const [periodo, setPeriodo] = useState("Últimos 30 dias")

  return (
    <div className="mm-scope min-h-screen">
      {/* Sidebar desktop */}
      <aside className="fixed inset-y-0 left-0 z-40 hidden w-64 border-r border-[var(--mm-border)] bg-[var(--mm-panel)] lg:block">
        <Sidebar />
      </aside>

      {/* Sidebar mobile */}
      {aberto && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/60" onClick={() => setAberto(false)} />
          <aside className="absolute inset-y-0 left-0 w-64 border-r border-[var(--mm-border)] bg-[var(--mm-panel)]">
            <button
              onClick={() => setAberto(false)}
              className="absolute right-3 top-4 text-[var(--mm-muted)] hover:text-[var(--mm-text)]"
              aria-label="Fechar menu"
            >
              <X className="h-5 w-5" />
            </button>
            <Sidebar onNavigate={() => setAberto(false)} />
          </aside>
        </div>
      )}

      <div className="lg:pl-64">
        {/* Topbar / filtros */}
        <header className="sticky top-0 z-30 border-b border-[var(--mm-border)] bg-[var(--mm-bg)]/90 backdrop-blur">
          <div className="flex items-center gap-3 px-4 py-3">
            <button
              onClick={() => setAberto(true)}
              className="rounded-lg p-2 text-[var(--mm-muted)] hover:bg-white/5 lg:hidden"
              aria-label="Abrir menu"
            >
              <Menu className="h-5 w-5" />
            </button>

            <div className="relative">
              <label className="sr-only" htmlFor="mm-periodo">
                Período
              </label>
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-[var(--mm-muted)]">
                <Calendar className="h-4 w-4" />
              </span>
              <select
                id="mm-periodo"
                value={periodo}
                onChange={(e) => setPeriodo(e.target.value)}
                className="appearance-none rounded-xl border border-[var(--mm-border)] bg-[var(--mm-card)] py-2 pl-9 pr-8 text-sm font-medium text-[var(--mm-text)] outline-none focus:border-[var(--mm-blue)]"
              >
                {periodos.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
              <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--mm-muted)]" />
            </div>

            <div className="hidden flex-1 items-center gap-2 overflow-x-auto md:flex">
              {filtrosSelect.map((f) => (
                <div key={f.label} className="relative shrink-0">
                  <label className="sr-only" htmlFor={`mm-${f.label}`}>
                    {f.label}
                  </label>
                  <select
                    id={`mm-${f.label}`}
                    className="appearance-none rounded-xl border border-[var(--mm-border)] bg-[var(--mm-card)] py-2 pl-3 pr-8 text-sm text-[var(--mm-muted)] outline-none focus:border-[var(--mm-blue)]"
                    defaultValue={f.opcoes[0]}
                    aria-label={f.label}
                  >
                    {f.opcoes.map((o) => (
                      <option key={o} value={o}>
                        {o === f.opcoes[0] ? `${f.label}: ${o}` : o}
                      </option>
                    ))}
                  </select>
                  <ChevronDown className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--mm-muted)]" />
                </div>
              ))}
            </div>

            <label className="ml-auto flex shrink-0 cursor-pointer items-center gap-2 text-xs font-medium text-[var(--mm-muted)]">
              <input type="checkbox" className="peer sr-only" defaultChecked />
              <span className="relative h-5 w-9 rounded-full bg-white/10 transition peer-checked:bg-[var(--mm-blue)]/60 after:absolute after:left-0.5 after:top-0.5 after:h-4 after:w-4 after:rounded-full after:bg-white after:transition peer-checked:after:translate-x-4" />
              Comparar período
            </label>
          </div>
        </header>

        <main className="px-4 py-6 lg:px-8">
          <div className="mx-auto max-w-[1400px]">{children}</div>
        </main>
      </div>
    </div>
  )
}
