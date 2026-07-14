import type { Metadata } from "next"
import { Suspense } from "react"
import { UpsellOffer } from "@/components/upsell-offer"
import { MetaEvent } from "@/components/meta-event"

export const metadata: Metadata = {
  title: "Oferta Especial · 150 Recetas de Dulces Brasileños Virales",
  description:
    "Solo por hoy: suma a tu compra las 150 recetas de dulces brasileños virales y multiplica tus ganancias desde tu cocina.",
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
