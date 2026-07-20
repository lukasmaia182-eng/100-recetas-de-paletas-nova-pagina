"use client"

import { cn } from "@/lib/utils"
import { useTrackCheckout } from "@/components/checkout-tracking"

const CHECKOUT_URL = "https://pay.hotmart.com/L102630763K?off=ywlkzsnc&checkoutMode=10"

type BuyButtonProps = {
  children?: React.ReactNode
  className?: string
  subLabel?: string
  href?: string
  /** ID usado para criar o gatilho de evento avançado no GTM. Padrão: "botao-compra". */
  id?: string
  /** Rótulo de contexto (ex.: "hero", "oferta-final") enviado ao GTM via data-gtm-location. */
  location?: string
}

export function BuyButton({
  children,
  className,
  subLabel,
  href = CHECKOUT_URL,
  id = "botao-compra",
  location,
}: BuyButtonProps) {
  const trackCheckout = useTrackCheckout()

  const handleClick = () => {
    if (trackCheckout && typeof window !== "undefined" && typeof (window as any).fbq === "function") {
      ;(window as any).fbq("track", "InitiateCheckout")
    }
  }

  return (
    <a
      id={id}
      data-gtm="buy-button"
      data-gtm-location={location}
      href={href}
      onClick={handleClick}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex w-full flex-col items-center justify-center rounded-full bg-verde-cta px-6 py-4 text-center font-display text-lg font-extrabold text-white shadow-lg shadow-verde-cta/30 transition-transform hover:bg-verde-cta-dark active:scale-95 sm:text-xl",
        "animate-cta-pulse",
        className,
      )}
    >
      <span className="leading-tight">{children ?? "QUIERO MIS 100 RECETAS"}</span>
      {subLabel ? (
        <span className="text-xs font-semibold text-white/85 sm:text-sm">{subLabel}</span>
      ) : null}
    </a>
  )
}
