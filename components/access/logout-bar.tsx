"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signOut } from "@/lib/auth-client"
import { LogOut, Loader2 } from "lucide-react"

export function LogoutBar({ name }: { name?: string | null }) {
  const router = useRouter()
  const [loading, setLoading] = useState(false)

  async function handleLogout() {
    setLoading(true)
    await signOut()
    router.push("/areamembros/login")
    router.refresh()
  }

  return (
    <div className="border-b border-border bg-primary/5">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-5 py-2">
        <p className="truncate text-xs font-medium text-muted-foreground">
          {name ? `Conectado como ${name}` : "Área de miembros"}
        </p>
        <button
          type="button"
          onClick={handleLogout}
          disabled={loading}
          className="flex shrink-0 items-center gap-1.5 rounded-lg border border-border bg-card px-3 py-1.5 text-xs font-semibold text-foreground transition-colors hover:bg-muted disabled:opacity-60"
        >
          {loading ? (
            <Loader2 className="h-3.5 w-3.5 animate-spin" aria-hidden="true" />
          ) : (
            <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
          )}
          Salir
        </button>
      </div>
    </div>
  )
}
