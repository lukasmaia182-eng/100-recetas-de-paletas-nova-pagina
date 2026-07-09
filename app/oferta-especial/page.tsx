import type { Metadata } from "next"
import { UpsellOffer } from "@/components/upsell/upsell-offer"

export const metadata: Metadata = {
  title: "Oferta Especial · 150 Recetas de Dulces Brasileños Virales",
  description:
    "Suma 150 recetas de dulces brasileños virales por un valor especial y único. Amplía tu menú y gana todavía más desde tu cocina.",
}

export default function OfertaEspecialPage() {
  return <UpsellOffer />
}
