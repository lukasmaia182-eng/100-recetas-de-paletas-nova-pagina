"use server"

import { cookies } from "next/headers"
import { revalidatePath } from "next/cache"
import { auth } from "@/lib/auth"
import { db } from "@/lib/db"
import { user } from "@/lib/db/schema"
import { desc } from "drizzle-orm"

const ADMIN_COOKIE = "pm_admin"

function getAdminPassword() {
  return process.env.ADMIN_PANEL_PASSWORD ?? ""
}

export async function isAdminAuthed() {
  const store = await cookies()
  const token = store.get(ADMIN_COOKIE)?.value
  const password = getAdminPassword()
  return Boolean(password) && token === password
}

export async function adminLogin(_prev: unknown, formData: FormData) {
  const password = String(formData.get("password") ?? "")
  const expected = getAdminPassword()

  if (!expected) {
    return { error: "El acceso de administrador no está configurado (falta ADMIN_PANEL_PASSWORD)." }
  }
  if (password !== expected) {
    return { error: "Contraseña de administrador incorrecta." }
  }

  const store = await cookies()
  store.set(ADMIN_COOKIE, password, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 8,
  })
  revalidatePath("/areamembros/admin")
  return { ok: true }
}

export async function adminLogout() {
  const store = await cookies()
  store.delete(ADMIN_COOKIE)
  revalidatePath("/areamembros/admin")
}

export async function listMembers() {
  if (!(await isAdminAuthed())) throw new Error("Unauthorized")
  return db
    .select({
      id: user.id,
      name: user.name,
      email: user.email,
      createdAt: user.createdAt,
    })
    .from(user)
    .orderBy(desc(user.createdAt))
}

export async function createMember(_prev: unknown, formData: FormData) {
  if (!(await isAdminAuthed())) return { error: "No autorizado." }

  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim().toLowerCase()
  const password = String(formData.get("password") ?? "")

  if (!name || !email || !password) {
    return { error: "Completa nombre, correo y contraseña." }
  }
  if (password.length < 6) {
    return { error: "La contraseña debe tener al menos 6 caracteres." }
  }

  try {
    await auth.api.createUser({
      body: { name, email, password, role: "user" },
    })
    revalidatePath("/areamembros/admin")
    return { ok: true, message: `Usuario ${email} creado con éxito.` }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error al crear el usuario."
    if (/exist/i.test(message)) {
      return { error: "Ya existe un usuario con ese correo." }
    }
    return { error: message }
  }
}

export async function deleteMember(userId: string) {
  if (!(await isAdminAuthed())) return { error: "No autorizado." }
  try {
    await auth.api.removeUser({ body: { userId } })
    revalidatePath("/areamembros/admin")
    return { ok: true }
  } catch (err) {
    const message = err instanceof Error ? err.message : "Error al eliminar el usuario."
    return { error: message }
  }
}
