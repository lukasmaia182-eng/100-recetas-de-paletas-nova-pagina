import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { MembersArea } from "@/components/access/members-area"
import { LogoutBar } from "@/components/access/logout-bar"

export const metadata: Metadata = {
  title: "Área de Miembros · 100 Paletas Rellenas y Cremosas",
  description:
    "Área privada con las 100 recetas ilustradas paso a paso y todos los bonos exclusivos para preparar y vender paletas cremosas.",
}

export default async function AreaMembrosPage() {
  let session = null
  try {
    session = await auth.api.getSession({ headers: await headers() })
  } catch (err) {
    console.warn("[AI Studio] Auth getSession failed (database may be offline):", err)
  }
  if (!session?.user) redirect("/areamembros/login")

  return (
    <>
      <LogoutBar name={session.user.name} />
      <MembersArea />
    </>
  )
}
