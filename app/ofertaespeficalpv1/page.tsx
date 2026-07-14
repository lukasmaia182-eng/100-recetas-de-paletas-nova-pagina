import type { Metadata } from "next"
import { Suspense } from "react"
import { UpsellOffer } from "@/components/upsell-offer"
import { MetaEvent } from "@/components/meta-event"

export const metadata: Metadata = {
  title: "Oferta Especial · 150 Packs para Vender Paletas en Instagram",
  description:
    "Solo por hoy: suma a tu compra los 150 packs de artes para vender paletas en Instagram y atrae más clientes cada día.",
}

export default function OfertaEspecialPV1Page() {
  return (
    <>
      <Suspense fallback={null}>
        <MetaEvent
          eventName="CompraAprovada"
          params={{ content_name: "100 Recetas de Paletas", currency: "BRL", status: "aprovada" }}
        />
      </Suspense>
      <UpsellOffer />
    </>
  )
}
