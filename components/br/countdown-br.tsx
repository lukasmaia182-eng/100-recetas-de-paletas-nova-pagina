"use client"

import { useEffect, useState } from "react"

/** Contagem regressiva simples (minutos:segundos) usada na seção de escassez do /br. */
export function CountdownBr({ minutes = 15 }: { minutes?: number }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60)

  useEffect(() => {
    const id = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 0 ? 0 : prev - 1))
    }, 1000)
    return () => clearInterval(id)
  }, [])

  const mm = Math.floor(secondsLeft / 60)
  const ss = secondsLeft % 60

  return (
    <div className="flex items-stretch justify-center gap-3">
      <TimeBox value={mm} label="Minutos" />
      <span className="lv-title self-center text-4xl text-[var(--lv-orange)]">:</span>
      <TimeBox value={ss} label="Segundos" />
    </div>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex min-w-[84px] flex-col items-center rounded-2xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-4 py-3">
      <span className="lv-title text-4xl text-[var(--lv-orange)] tabular-nums sm:text-5xl">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-1 text-[0.7rem] font-bold uppercase tracking-wide text-[var(--lv-muted)]">{label}</span>
    </div>
  )
}
