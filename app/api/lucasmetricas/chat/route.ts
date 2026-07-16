import {
  convertToModelMessages,
  createUIMessageStreamResponse,
  streamText,
  toUIMessageStream,
  type UIMessage,
} from "ai"
import { construirContextoIA } from "@/lib/metricas/data"

// Permite streaming de até 30s
export const maxDuration = 30

const SYSTEM = `Você é o META MASTER AI, um analista sênior de tráfego pago (Meta Ads) e vendas de infoprodutos na Hotmart.

Seu papel é ajudar um gestor de tráfego a tomar decisões práticas e rápidas: escalar, manter, otimizar ou pausar campanhas e criativos.

Regras de resposta:
- Responda SEMPRE em português do Brasil, de forma direta, objetiva e acionável.
- Use os DADOS fornecidos abaixo como base. A moeda é o dólar (USD). Nunca invente números que não estejam nos dados.
- Quando recomendar algo, justifique com as métricas (ROAS, CPA, CTR, frequência, lucro, margem).
- Prefira listas curtas e recomendações claras ("Escalar", "Manter", "Otimizar", "Pausar").
- Considere sinais de fadiga de criativo (frequência alta + CTR em queda) e CPA acima do teto.
- Seja honesto sobre incertezas quando o volume de dados for baixo.
- Estes são dados de DEMONSTRAÇÃO; deixe isso claro se o usuário perguntar sobre a origem dos números.

DADOS ATUAIS DA CONTA (JSON):
`

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json()

  const result = streamText({
    model: "openai/gpt-5-mini",
    instructions: SYSTEM + construirContextoIA(),
    messages: await convertToModelMessages(messages),
  })

  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  })
}
