import type { Metadata } from "next"
import { PacksArea } from "@/components/access/packs-area"

export const metadata: Metadata = {
  title: "Tu Acceso · 150 Packs para Vender Paletas en Instagram",
  description:
    "Área de miembros con los 150 packs de contenido listos para publicar: presentación, sabores, combos, engagement, prueba social y venta directa para vender paletas en Instagram.",
}

export default function SeuAcessoPackPage() {
  return <PacksArea />
}
