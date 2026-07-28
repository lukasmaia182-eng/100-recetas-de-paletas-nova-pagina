import type { Metadata } from "next"
import { OrderBumpCombo } from "@/components/order-bump-combo"

export const metadata: Metadata = {
  title: "Oferta Especial · Combo Completo para Multiplicar tus Ventas de Paletas",
  description:
    "Solo por hoy: llévate el combo completo con coberturas premium, packs para Instagram, precios rentables y las recetas más virales.",
}

export default function OrderBumpComboPage() {
  return <OrderBumpCombo />
}
