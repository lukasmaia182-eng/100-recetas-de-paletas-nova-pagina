"use client"

import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts"

const COR = {
  blue: "#3b82f6",
  green: "#22c55e",
  red: "#ef4444",
  yellow: "#eab308",
  muted: "#93a1c0",
}

const eixo = { stroke: "#93a1c0", fontSize: 11 }
const grid = "#26314f"

function tooltipStyle() {
  return {
    contentStyle: {
      background: "#111b30",
      border: "1px solid #26314f",
      borderRadius: 12,
      color: "#eaf0fb",
      fontSize: 12,
    },
    labelStyle: { color: "#93a1c0" },
  }
}

function fmtDiaBR(iso: string) {
  const d = new Date(iso + "T00:00:00Z")
  return d.toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", timeZone: "UTC" })
}

export function InvestimentoReceitaChart({ data }: { data: { dia: string; investimento: number; receita: number }[] }) {
  return (
    <ResponsiveContainer width="100%" height={260}>
      <AreaChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <defs>
          <linearGradient id="gReceita" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COR.green} stopOpacity={0.4} />
            <stop offset="100%" stopColor={COR.green} stopOpacity={0} />
          </linearGradient>
          <linearGradient id="gInvest" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={COR.blue} stopOpacity={0.35} />
            <stop offset="100%" stopColor={COR.blue} stopOpacity={0} />
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey="dia" tickFormatter={fmtDiaBR} tick={eixo} axisLine={false} tickLine={false} minTickGap={24} />
        <YAxis tick={eixo} axisLine={false} tickLine={false} width={48} />
        <Tooltip {...tooltipStyle()} labelFormatter={(l) => fmtDiaBR(String(l))} />
        <Area type="monotone" dataKey="receita" name="Receita" stroke={COR.green} strokeWidth={2} fill="url(#gReceita)" />
        <Area type="monotone" dataKey="investimento" name="Investimento" stroke={COR.blue} strokeWidth={2} fill="url(#gInvest)" />
      </AreaChart>
    </ResponsiveContainer>
  )
}

export function LinhaSimples({
  data,
  dataKey,
  cor = "blue",
  altura = 220,
}: {
  data: any[]
  dataKey: string
  cor?: keyof typeof COR
  altura?: number
}) {
  return (
    <ResponsiveContainer width="100%" height={altura}>
      <LineChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey="dia" tickFormatter={fmtDiaBR} tick={eixo} axisLine={false} tickLine={false} minTickGap={24} />
        <YAxis tick={eixo} axisLine={false} tickLine={false} width={44} />
        <Tooltip {...tooltipStyle()} labelFormatter={(l) => fmtDiaBR(String(l))} />
        <Line type="monotone" dataKey={dataKey} stroke={COR[cor]} strokeWidth={2} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  )
}

export function BarrasSimples({
  data,
  dataKey,
  xKey,
  cor = "blue",
  altura = 220,
}: {
  data: any[]
  dataKey: string
  xKey: string
  cor?: keyof typeof COR
  altura?: number
}) {
  return (
    <ResponsiveContainer width="100%" height={altura}>
      <BarChart data={data} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} vertical={false} />
        <XAxis dataKey={xKey} tick={eixo} axisLine={false} tickLine={false} minTickGap={8} />
        <YAxis tick={eixo} axisLine={false} tickLine={false} width={44} />
        <Tooltip {...tooltipStyle()} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
        <Bar dataKey={dataKey} fill={COR[cor]} radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  )
}

export function BarrasComparativas({
  data,
  altura = 260,
}: {
  data: { nome: string; lucro: number }[]
  altura?: number
}) {
  return (
    <ResponsiveContainer width="100%" height={altura}>
      <BarChart data={data} layout="vertical" margin={{ top: 4, right: 16, left: 8, bottom: 0 }}>
        <CartesianGrid strokeDasharray="3 3" stroke={grid} horizontal={false} />
        <XAxis type="number" tick={eixo} axisLine={false} tickLine={false} />
        <YAxis type="category" dataKey="nome" tick={eixo} axisLine={false} tickLine={false} width={120} />
        <Tooltip {...tooltipStyle()} cursor={{ fill: "rgba(255,255,255,0.04)" }} />
        <Bar dataKey="lucro" radius={[0, 6, 6, 0]}>
          {data.map((d, i) => (
            <Cell key={i} fill={d.lucro >= 0 ? COR.green : COR.red} />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export function Rosca({ data, altura = 240 }: { data: { nome: string; valor: number }[]; altura?: number }) {
  const cores = [COR.blue, COR.green, COR.yellow, COR.red, COR.muted]
  return (
    <ResponsiveContainer width="100%" height={altura}>
      <PieChart>
        <Pie data={data} dataKey="valor" nameKey="nome" innerRadius={54} outerRadius={90} paddingAngle={3} stroke="none">
          {data.map((_, i) => (
            <Cell key={i} fill={cores[i % cores.length]} />
          ))}
        </Pie>
        <Tooltip {...tooltipStyle()} />
      </PieChart>
    </ResponsiveContainer>
  )
}
