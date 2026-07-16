import type React from "react"
import type { Metadata } from "next"
import { DashboardShell } from "@/components/metricas/shell"

export const metadata: Metadata = {
  title: "Meta Master — Dashboard de Performance",
  description: "Dashboard para acompanhar, analisar e otimizar campanhas de tráfego pago com Analista de IA.",
}

export default function LucasMetricasLayout({ children }: { children: React.ReactNode }) {
  return <DashboardShell>{children}</DashboardShell>
}
