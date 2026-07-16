"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { signIn } from "@/lib/auth-client"
import { IceCream, Loader2, Lock } from "lucide-react"

export function LoginForm() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    setLoading(true)
    try {
      const { error } = await signIn.email({ email: email.trim(), password })
      if (error) {
        setError("Correo o contraseña incorrectos. Verifica tus datos e intenta de nuevo.")
        return
      }
      router.push("/areamembros")
      router.refresh()
    } catch {
      setError("Ocurrió un error al iniciar sesión. Intenta nuevamente.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-5 py-10">
      <div className="w-full max-w-md">
        <div className="mb-6 flex flex-col items-center text-center">
          <span className="mb-3 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <IceCream className="h-7 w-7" aria-hidden="true" />
          </span>
          <h1 className="text-balance font-display text-2xl font-extrabold text-foreground">
            Área de Miembros
          </h1>
          <p className="mt-1 text-pretty text-sm leading-relaxed text-muted-foreground">
            Ingresa con tu correo y contraseña para acceder a tus 100 recetas y bonos.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 shadow-sm"
        >
          <div className="flex flex-col gap-1.5">
            <label htmlFor="email" className="text-sm font-semibold text-foreground">
              Correo electrónico
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-primary/30 focus:ring-2"
              placeholder="tucorreo@ejemplo.com"
            />
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="password" className="text-sm font-semibold text-foreground">
              Contraseña
            </label>
            <input
              id="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded-xl border border-border bg-background px-4 py-2.5 text-sm text-foreground outline-none ring-primary/30 focus:ring-2"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <p className="rounded-xl bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive" role="alert">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="mt-1 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
          >
            {loading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" />
                Entrando...
              </>
            ) : (
              <>
                <Lock className="h-4 w-4" aria-hidden="true" />
                Entrar
              </>
            )}
          </button>

          <p className="text-center text-xs leading-relaxed text-muted-foreground">
            ¿No tienes acceso? Escríbenos por WhatsApp y te crearemos tu usuario.
          </p>
        </form>
      </div>
    </div>
  )
}
