import type { Metadata } from "next"
import { Suspense } from "react"
import { OrderBump1 } from "@/components/order-bump-1"
import { MetaEvent } from "@/components/meta-event"

export const metadata: Metadata = {
  title: "Oferta Especial · 50 Coberturas y Toppings Premium para tus Paletas",
  description:
    "Solo por hoy: suma a tu compra 50 coberturas y toppings premium para multiplicar el valor de tus paletas y vender más caro.",
}

export default function OrderBump1Page() {
  return (
    <>
      <Suspense fallback={null}>
        <MetaEvent
          eventName="CompraAprovada"
          params={{ content_name: "100 Recetas de Paletas", currency: "BRL", status: "aprovada" }}
        />
      </Suspense>
      <OrderBump1 />
    </>
  )
}
