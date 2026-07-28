"use client"

import Script from "next/script"
import { usePathname } from "next/navigation"

/**
 * Único tracking global do site: o pixel/UTMs da UTMify.
 * NÃO é renderizado na rota /pv01, que usa apenas seu próprio pixel dedicado.
 */
export function SiteTracking() {
  const pathname = usePathname()

  if (pathname?.startsWith("/pv01")) return null

  return (
    <Script
      id="utmify-utms"
      src="https://cdn.utmify.com.br/scripts/utms/latest.js"
      data-utmify-prevent-subids
      strategy="afterInteractive"
      async
      defer
    />
  )
}
