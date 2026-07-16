"use client"

import { useActionState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { adminLogin } from "@/app/actions/admin-users"
import { ShieldCheck } from "lucide-react"

export function AdminLoginForm() {
  const router = useRouter()
  const [state, action, pending] = useActionState(adminLogin, null)

  useEffect(() => {
    if (state?.ok) router.refresh()
  }, [state, router])

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-sm rounded-3xl border border-border bg-card p-6 shadow-lg">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="mb-3 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <ShieldCheck className="h-6 w-6" aria-hidden="true" />
          </span>
          <h1 className="font-display text-xl font-extrabold text-foreground">Panel de administración</h1>
          <p className="mt-1 text-sm text-muted-foreground">Ingresa la contraseña de administrador</p>
        </div>
        <form action={action} className="flex flex-col gap-3">
          <input
            name="password"
            type="password"
            required
            autoFocus
            placeholder="Contraseña de administrador"
            className="rounded-xl border border-border bg-background px-3 py-2.5 text-sm text-foreground outline-none focus:border-primary"
          />
          <button
            type="submit"
            disabled={pending}
            className="rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {pending ? "Entrando..." : "Entrar"}
          </button>
          {state?.error && (
            <p className="rounded-xl bg-destructive/10 px-3 py-2 text-center text-sm font-medium text-destructive">
              {state.error}
            </p>
          )}
        </form>
      </div>
    </div>
  )
}
