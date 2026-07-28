import type { Metadata } from "next"
import { OrderBump1 } from "@/components/order-bump-1"

export const metadata: Metadata = {
  title: "Oferta Especial · 50 Coberturas y Toppings Premium para tus Paletas",
  description:
    "Solo por hoy: suma a tu compra 50 coberturas y toppings premium para multiplicar el valor de tus paletas y vender más caro.",
}

export default function OrderBump1Page() {
  return <OrderBump1 />
}
