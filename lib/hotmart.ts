// Lógica pura de interpretação do webhook da Hotmart (sem acesso a banco).

export type HotmartDecision = "grant" | "revoke" | "ignore"

// Eventos/status que LIBERAM acesso
const GRANT_EVENTS = new Set(["PURCHASE_APPROVED", "PURCHASE_COMPLETE"])
const GRANT_STATUS = new Set(["APPROVED", "COMPLETE", "COMPLETED"])

// Eventos/status que REVOGAM acesso (reembolso, chargeback, cancelamento)
const REVOKE_EVENTS = new Set([
  "PURCHASE_REFUNDED",
  "PURCHASE_CHARGEBACK",
  "PURCHASE_CANCELED",
  "PURCHASE_CANCELLED",
  "PURCHASE_EXPIRED",
  "SUBSCRIPTION_CANCELLATION",
])
const REVOKE_STATUS = new Set([
  "REFUNDED",
  "CHARGEBACK",
  "CANCELED",
  "CANCELLED",
  "EXPIRED",
  "DISPUTE",
])

export type ParsedHotmart = {
  event: string
  status: string
  transaction: string
  email: string
  buyerName: string
  productId: string
  productName: string
  price: string
  decision: HotmartDecision
}

function pick<T = unknown>(obj: unknown, path: string[]): T | undefined {
  let cur: unknown = obj
  for (const key of path) {
    if (cur && typeof cur === "object" && key in (cur as Record<string, unknown>)) {
      cur = (cur as Record<string, unknown>)[key]
    } else {
      return undefined
    }
  }
  return cur as T
}

/** Extrai os campos relevantes do payload da Hotmart (formato v2, com fallbacks). */
export function parseHotmartPayload(body: unknown): ParsedHotmart {
  const event = String(pick<string>(body, ["event"]) ?? "").toUpperCase()

  const data = pick<Record<string, unknown>>(body, ["data"]) ?? (body as Record<string, unknown>)

  const email =
    pick<string>(data, ["buyer", "email"]) ??
    pick<string>(body, ["buyer", "email"]) ??
    pick<string>(body, ["email"]) ??
    ""

  const buyerName =
    pick<string>(data, ["buyer", "name"]) ??
    pick<string>(body, ["buyer", "name"]) ??
    pick<string>(body, ["name"]) ??
    ""

  const productId = String(
    pick<string | number>(data, ["product", "id"]) ??
      pick<string | number>(body, ["prod"]) ??
      pick<string | number>(body, ["product", "id"]) ??
      "",
  )

  const productName =
    pick<string>(data, ["product", "name"]) ?? pick<string>(body, ["product_name"]) ?? ""

  const transaction =
    pick<string>(data, ["purchase", "transaction"]) ??
    pick<string>(body, ["transaction"]) ??
    pick<string>(data, ["subscription", "subscriber", "code"]) ??
    ""

  const status = String(
    pick<string>(data, ["purchase", "status"]) ?? pick<string>(body, ["status"]) ?? "",
  ).toUpperCase()

  const priceVal =
    pick<number | string>(data, ["purchase", "price", "value"]) ??
    pick<number | string>(body, ["price"]) ??
    ""

  const decision: HotmartDecision =
    GRANT_EVENTS.has(event) || GRANT_STATUS.has(status)
      ? "grant"
      : REVOKE_EVENTS.has(event) || REVOKE_STATUS.has(status)
        ? "revoke"
        : "ignore"

  return {
    event,
    status,
    transaction: String(transaction),
    email: String(email).trim().toLowerCase(),
    buyerName: String(buyerName).trim(),
    productId,
    productName: String(productName),
    price: String(priceVal),
    decision,
  }
}

/** Confere se o token do webhook (HOTTOK) bate com o configurado. */
export function isValidHottok(received: string | null | undefined): boolean {
  const expected = process.env.HOTMART_HOTTOK
  if (!expected) return false
  return Boolean(received) && received === expected
}

/** Confere se o produto é o esperado. Se HOTMART_PRODUCT_ID não estiver setado, aceita qualquer um. */
export function isExpectedProduct(productId: string): boolean {
  const expected = process.env.HOTMART_PRODUCT_ID
  if (!expected) return true
  return String(productId) === String(expected)
}
