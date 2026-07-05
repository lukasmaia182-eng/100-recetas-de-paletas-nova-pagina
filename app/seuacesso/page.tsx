import type { Metadata } from "next"
import { MembersArea } from "@/components/access/members-area"

export const metadata: Metadata = {
  title: "Tu Acceso · 100 Paletas Rellenas y Cremosas",
  description:
    "Área de miembros con las 100 recetas ilustradas paso a paso y todos los bonos exclusivos para preparar y vender paletas cremosas.",
}

export default function SeuAcessoPage() {
  return <MembersArea />
}
