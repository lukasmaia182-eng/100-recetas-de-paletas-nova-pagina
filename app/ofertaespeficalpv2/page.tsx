import type { Metadata } from "next"
import { DownsellOffer } from "@/components/downsell-offer"

export const metadata: Metadata = {
  title: "Oferta Especial · Combo Dulces Brasileños + Packs para Instagram",
  description:
    "Solo por hoy: llévate el combo con 150 Recetas de Dulces Brasileños Virales y 150 Packs para Vender Paletas en Instagram por un precio único.",
}

export default function OfertaEspecialPV2Page() {
  return <DownsellOffer />
}
