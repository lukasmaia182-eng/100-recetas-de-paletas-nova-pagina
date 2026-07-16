"use client"

import { useState, useRef, useEffect } from "react"
import { useChat } from "@ai-sdk/react"
import { DefaultChatTransport } from "ai"
import { Sparkles, Send, Bot, User, Loader2 } from "lucide-react"
import { PageHeader, DemoBanner, MMCard, Badge } from "@/components/metricas/ui"

const SUGESTOES = [
  "Quais campanhas devo escalar hoje e por quê?",
  "Quais criativos estão em fadiga e o que fazer?",
  "Onde estou desperdiçando verba agora?",
  "Monte meu plano de ação para as próximas 24h.",
  "Qual país tem o melhor retorno para investir mais?",
  "Meu CPA está saudável? Como reduzir?",
]

export default function AnalistaPage() {
  const { messages, sendMessage, status, error } = useChat({
    transport: new DefaultChatTransport({ api: "/api/lucasmetricas/chat" }),
  })
  const [input, setInput] = useState("")
  const scrollRef = useRef<HTMLDivElement>(null)

  const ocupado = status === "submitted" || status === "streaming"

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" })
  }, [messages, status])

  function enviar(texto: string) {
    const t = texto.trim()
    if (!t || ocupado) return
    sendMessage({ text: t })
    setInput("")
  }

  return (
    <div>
      <PageHeader title="Meta Master AI" desc="Seu analista de tráfego e vendas com inteligência artificial de verdade." />
      <DemoBanner />

      <div className="grid grid-cols-1 gap-4 xl:grid-cols-[1fr_280px]">
        <MMCard className="flex h-[calc(100vh-260px)] min-h-[480px] flex-col p-0">
          <div className="flex items-center gap-2 border-b border-[var(--mm-border)] px-4 py-3">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--mm-blue)]/20 text-[var(--mm-blue)]">
              <Bot className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-bold text-[var(--mm-text)]">META MASTER AI</p>
              <p className="text-xs text-[var(--mm-muted)]">Analisa os dados da sua conta em tempo real</p>
            </div>
            <Badge tom="green" className="ml-auto">
              Online
            </Badge>
          </div>

          <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
            {messages.length === 0 && (
              <div className="flex h-full flex-col items-center justify-center text-center">
                <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-[var(--mm-blue)]/15 text-[var(--mm-blue)]">
                  <Sparkles className="h-6 w-6" />
                </div>
                <h3 className="text-base font-bold text-[var(--mm-text)]">Como posso ajudar hoje?</h3>
                <p className="mt-1 max-w-sm text-sm text-[var(--mm-muted)]">
                  Pergunte sobre campanhas, criativos, verba ou peça um plano de ação. Eu analiso os números da conta e
                  respondo com recomendações práticas.
                </p>
              </div>
            )}

            {messages.map((m) => {
              const texto = m.parts
                .filter((p) => p.type === "text")
                .map((p) => (p as { text: string }).text)
                .join("")
              const ehUser = m.role === "user"
              return (
                <div key={m.id} className={`flex gap-3 ${ehUser ? "flex-row-reverse" : ""}`}>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${
                      ehUser ? "bg-[var(--mm-card-2)] text-[var(--mm-muted)]" : "bg-[var(--mm-blue)]/20 text-[var(--mm-blue)]"
                    }`}
                  >
                    {ehUser ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                  </div>
                  <div
                    className={`max-w-[80%] whitespace-pre-wrap rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                      ehUser
                        ? "bg-[var(--mm-blue)] text-white"
                        : "border border-[var(--mm-border)] bg-[var(--mm-card-2)]/50 text-[var(--mm-text)]"
                    }`}
                  >
                    {texto || (ehUser ? "" : "…")}
                  </div>
                </div>
              )
            })}

            {status === "submitted" && (
              <div className="flex gap-3">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[var(--mm-blue)]/20 text-[var(--mm-blue)]">
                  <Bot className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2 rounded-2xl border border-[var(--mm-border)] bg-[var(--mm-card-2)]/50 px-4 py-2.5 text-sm text-[var(--mm-muted)]">
                  <Loader2 className="h-4 w-4 animate-spin" /> Analisando os dados...
                </div>
              </div>
            )}

            {error && (
              <div className="rounded-xl border border-[#ef4444]/30 bg-[#ef4444]/10 px-4 py-3 text-sm text-[#f87171]">
                Não foi possível falar com o analista. Verifique se a chave de IA (AI_GATEWAY_API_KEY) está configurada e
                tente novamente.
              </div>
            )}
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault()
              enviar(input)
            }}
            className="border-t border-[var(--mm-border)] p-3"
          >
            <div className="flex items-center gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey && !e.nativeEvent.isComposing && e.keyCode !== 229) {
                    e.preventDefault()
                    enviar(input)
                  }
                }}
                placeholder="Pergunte ao Meta Master AI..."
                className="flex-1 rounded-xl border border-[var(--mm-border)] bg-[var(--mm-card-2)]/50 px-4 py-2.5 text-sm text-[var(--mm-text)] outline-none placeholder:text-[var(--mm-muted)] focus:border-[var(--mm-blue)]"
              />
              <button
                type="submit"
                disabled={ocupado || !input.trim()}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--mm-blue)] text-white transition-colors hover:bg-[#2f6fe0] disabled:opacity-40"
                aria-label="Enviar mensagem"
              >
                {ocupado ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
              </button>
            </div>
          </form>
        </MMCard>

        <div className="flex flex-col gap-4">
          <MMCard>
            <h3 className="mb-3 flex items-center gap-2 text-sm font-bold text-[var(--mm-text)]">
              <Sparkles className="h-4 w-4 text-[var(--mm-blue)]" /> Perguntas rápidas
            </h3>
            <div className="flex flex-col gap-2">
              {SUGESTOES.map((s) => (
                <button
                  key={s}
                  onClick={() => enviar(s)}
                  disabled={ocupado}
                  className="rounded-xl border border-[var(--mm-border)] bg-[var(--mm-card-2)]/40 px-3 py-2 text-left text-xs text-[var(--mm-muted)] transition-colors hover:border-[var(--mm-blue)]/40 hover:text-[var(--mm-text)] disabled:opacity-40"
                >
                  {s}
                </button>
              ))}
            </div>
          </MMCard>

          <MMCard className="border-[var(--mm-blue)]/30 bg-gradient-to-br from-[var(--mm-blue)]/10 to-transparent">
            <h3 className="mb-1 text-sm font-bold text-[var(--mm-text)]">Plano diário</h3>
            <p className="mb-3 text-xs leading-relaxed text-[var(--mm-muted)]">
              Receba um plano de ação priorizado para as próximas 24 horas com base nas métricas atuais.
            </p>
            <button
              onClick={() =>
                enviar(
                  "Gere meu plano de ação para as próximas 24 horas. Liste no máximo 5 ações priorizadas (o que escalar, otimizar ou pausar), cada uma com a métrica que justifica a decisão.",
                )
              }
              disabled={ocupado}
              className="inline-flex w-full items-center justify-center gap-1.5 rounded-lg bg-[var(--mm-blue)] px-3 py-2 text-xs font-semibold text-white hover:bg-[#2f6fe0] disabled:opacity-40"
            >
              <Sparkles className="h-3.5 w-3.5" /> Gerar plano diário
            </button>
          </MMCard>
        </div>
      </div>
    </div>
  )
}
