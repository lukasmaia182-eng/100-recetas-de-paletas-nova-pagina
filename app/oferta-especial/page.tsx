import type { Metadata } from "next"
import { UpsellOffer } from "@/components/upsell-offer"

export const metadata: Metadata = {
  title: "Oferta Especial · 150 Recetas de Dulces Brasileños Virales",
  description:
    "Solo por hoy: suma a tu compra las 150 recetas de dulces brasileños virales y multiplica tus ganancias desde tu cocina.",
}

export default function OfertaEspecialPage() {
  return <UpsellOffer />
}
