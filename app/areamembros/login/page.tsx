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
  const session = await auth.api.getSession({ headers: await headers() })
  if (session?.user) redirect("/areamembros")
  return <LoginForm />
}
