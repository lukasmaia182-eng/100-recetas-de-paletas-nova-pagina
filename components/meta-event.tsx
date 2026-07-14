"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    fbq?: (...args: unknown[]) => void
  }
}

interface MetaEventProps {
  eventName: string
  params?: Record<string, unknown>
}

export function MetaEvent({ eventName, params }: MetaEventProps) {
  useEffect(() => {
    if (typeof window !== "undefined" && typeof window.fbq === "function") {
      window.fbq("trackCustom", eventName, params ?? {})
    }
  }, [eventName, params])

  return null
}
