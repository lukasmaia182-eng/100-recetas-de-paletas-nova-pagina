import type { Metadata } from "next"
import { Suspense } from "react"
import { OrderBumpCombo } from "@/components/order-bump-combo"
import { MetaEvent } from "@/components/meta-event"

export const metadata: Metadata = {
  title: "Oferta Especial · Combo Completo para Multiplicar tus Ventas de Paletas",
  description:
    "Solo por hoy: llévate el combo completo con coberturas premium, packs para Instagram, precios rentables y las recetas más virales.",
}

export default function OrderBumpComboPage() {
  return (
    <>
      <Suspense fallback={null}>
        <MetaEvent
          eventName="CompraAprovada"
          params={{ content_name: "100 Recetas de Paletas", currency: "BRL", status: "aprovada" }}
        />
      </Suspense>
      <OrderBumpCombo />
    </>
  )
}
