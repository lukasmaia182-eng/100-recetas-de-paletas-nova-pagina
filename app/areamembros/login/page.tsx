import type { Metadata } from "next"
import { redirect } from "next/navigation"
import { headers } from "next/headers"
import { auth } from "@/lib/auth"
import { LoginForm } from "@/components/access/login-form"

export const metadata: Metadata = {
  title: "Entrar · Área de Miembros",
  description: "Inicia sesión para acceder a tus 100 recetas de paletas y bonos exclusivos.",
}

export default async function LoginPage() {
  let session = null
  try {
    session = await auth.api.getSession({ headers: await headers() })
  } catch (err) {
    console.warn("[AI Studio] Auth getSession failed (database may be offline):", err)
  }
  if (session?.user) redirect("/areamembros")
  return <LoginForm />
}
