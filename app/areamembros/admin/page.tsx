import { isAdminAuthed, listMembers } from "@/app/actions/admin-users"
import { AdminLoginForm } from "@/components/access/admin-login-form"
import { AdminPanel } from "@/components/access/admin-panel"

export const metadata = {
  title: "Panel de administración",
  robots: { index: false, follow: false },
}

export const dynamic = "force-dynamic"

export default async function AdminPage() {
  const authed = await isAdminAuthed()

  if (!authed) {
    return <AdminLoginForm />
  }

  const members = await listMembers()

  return (
    <main className="min-h-screen bg-background">
      <AdminPanel initialMembers={members} />
    </main>
  )
}
