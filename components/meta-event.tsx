"use client"

import { useEffect } from "react"
import { useSearchParams } from "next/navigation"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

interface MetaEventProps {
  eventName: string
  params?: Record<string, unknown>
}

// Parâmetros de URL suportados automaticamente
const URL_PARAMS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "ad_id",
  "adset_id",
  "campaign_id",
  "fbclid",
  "src",
  "ref",
]

export function MetaEvent({ eventName, params }: MetaEventProps) {
  const searchParams = useSearchParams()

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.fbq !== "function") return

    // Coleta todos os parâmetros de URL presentes
    const urlParams: Record<string, string> = {}
    URL_PARAMS.forEach((key) => {
      const value = searchParams.get(key)
      if (value) urlParams[key] = value
    })

    const finalParams = { ...params, ...urlParams }

    window.fbq("trackCustom", eventName, finalParams)
  }, [eventName, params, searchParams])

  return null
}
