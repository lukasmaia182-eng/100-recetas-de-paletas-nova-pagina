import type { Metadata } from "next"
import { MembersArea } from "@/components/access/members-area"

export const metadata: Metadata = {
  title: "Seu Acesso · 100 Paletas Recheadas e Cremosas",
  description:
    "Área de membros com as 100 receitas ilustradas passo a passo e todos os bônus exclusivos para preparar e vender paletas cremosas.",
}

export default function SeuAcessoPage() {
  return <MembersArea />
}
