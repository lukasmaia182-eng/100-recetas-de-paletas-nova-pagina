"use client"

import { useState, useTransition, useActionState, useEffect } from "react"
import { createMember, deleteMember, adminLogout } from "@/app/actions/admin-users"
import { UserPlus, Trash2, LogOut, Copy, Check, Users, KeyRound } from "lucide-react"

type Member = {
  id: string
  name: string
  email: string
  createdAt: Date | string
}

export function AdminPanel({ initialMembers }: { initialMembers: Member[] }) {
  const [members, setMembers] = useState<Member[]>(initialMembers)
  const [createState, createAction, creating] = useActionState(createMember, null)
  const [isPending, startTransition] = useTransition()
  const [copied, setCopied] = useState<string | null>(null)

  useEffect(() => {
    setMembers(initialMembers)
  }, [initialMembers])

  function handleDelete(id: string, email: string) {
    if (!confirm(`¿Eliminar el acceso de ${email}? Esta acción no se puede deshacer.`)) return
    startTransition(async () => {
      const res = await deleteMember(id)
      if (res?.ok) setMembers((prev) => prev.filter((m) => m.id !== id))
      else alert(res?.error ?? "Error al eliminar.")
    })
  }

  function copyEmail(email: string) {
    navigator.clipboard.writeText(email)
    setCopied(email)
    setTimeout(() => setCopied(null), 1500)
  }

  return (
    <div className="mx-auto w-full max-w-4xl px-4 py-8">
      <header className="mb-8 flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-primary text-primary-foreground">
            <Users className="h-5 w-5" aria-hidden="true" />
          </span>
          <div>
            <h1 className="font-display text-xl font-extrabold text-foreground">Panel de accesos</h1>
            <p className="text-sm text-muted-foreground">Crea y administra los logins de tus clientes</p>
          </div>
        </div>
        <form action={adminLogout}>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-xl border border-border bg-card px-3 py-2 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" />
            Salir
          </button>
        </form>
      </header>

      {/* Criar novo login */}
      <section className="mb-8 rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <UserPlus className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="font-display text-lg font-bold text-foreground">Crear nuevo acceso</h2>
        </div>
        <form action={createAction} className="grid gap-3 sm:grid-cols-3">
          <div className="flex flex-col gap-1">
            <label htmlFor="name" className="text-xs font-semibold text-muted-foreground">
              Nombre
            </label>
            <input
              id="name"
              name="name"
              required
              placeholder="Nombre del cliente"
              className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-xs font-semibold text-muted-foreground">
              Correo (usuario)
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder="cliente@correo.com"
              className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-xs font-semibold text-muted-foreground">
              Contraseña
            </label>
            <input
              id="password"
              name="password"
              required
              minLength={6}
              placeholder="Mínimo 6 caracteres"
              className="rounded-xl border border-border bg-background px-3 py-2 text-sm text-foreground outline-none focus:border-primary"
            />
          </div>
          <div className="sm:col-span-3">
            <button
              type="submit"
              disabled={creating}
              className="flex items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
            >
              <UserPlus className="h-4 w-4" aria-hidden="true" />
              {creating ? "Creando..." : "Crear acceso"}
            </button>
          </div>
        </form>
        {createState?.error && (
          <p className="mt-3 rounded-xl bg-destructive/10 px-3 py-2 text-sm font-medium text-destructive">
            {createState.error}
          </p>
        )}
        {createState?.ok && (
          <p className="mt-3 rounded-xl bg-primary/10 px-3 py-2 text-sm font-medium text-primary">
            {createState.message}
          </p>
        )}
      </section>

      {/* Lista de logins */}
      <section className="rounded-3xl border border-border bg-card p-5 shadow-sm">
        <div className="mb-4 flex items-center gap-2">
          <KeyRound className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="font-display text-lg font-bold text-foreground">
            Accesos activos <span className="text-muted-foreground">({members.length})</span>
          </h2>
        </div>
        {members.length === 0 ? (
          <p className="py-8 text-center text-sm text-muted-foreground">
            Aún no hay accesos creados. Crea el primero arriba.
          </p>
        ) : (
          <ul className="flex flex-col divide-y divide-border">
            {members.map((m) => (
              <li key={m.id} className="flex items-center justify-between gap-3 py-3">
                <div className="min-w-0">
                  <p className="truncate font-semibold text-foreground">{m.name}</p>
                  <button
                    type="button"
                    onClick={() => copyEmail(m.email)}
                    className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-primary"
                  >
                    <span className="truncate">{m.email}</span>
                    {copied === m.email ? (
                      <Check className="h-3.5 w-3.5 shrink-0 text-primary" aria-hidden="true" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                    )}
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => handleDelete(m.id, m.email)}
                  disabled={isPending}
                  className="flex shrink-0 items-center gap-1.5 rounded-xl border border-destructive/30 px-3 py-1.5 text-sm font-semibold text-destructive transition-colors hover:bg-destructive/10 disabled:opacity-60"
                >
                  <Trash2 className="h-4 w-4" aria-hidden="true" />
                  <span className="hidden sm:inline">Eliminar</span>
                </button>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  )
}
