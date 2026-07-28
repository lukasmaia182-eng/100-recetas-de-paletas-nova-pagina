import type { Metadata } from "next"
import { UpsellOffer } from "@/components/upsell-offer"

export const metadata: Metadata = {
  title: "Oferta Especial · 150 Packs para Vender Paletas en Instagram",
  description:
    "Solo por hoy: suma a tu compra los 150 packs de artes para vender paletas en Instagram y atrae más clientes cada día.",
}

export default function OfertaEspecialPV1Page() {
  return <UpsellOffer />
}
