import { betterAuth } from "better-auth"
import { admin } from "better-auth/plugins"
import { Pool } from "pg"

function getBaseURL() {
  if (process.env.BETTER_AUTH_URL) return process.env.BETTER_AUTH_URL
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`
  if (process.env.V0_RUNTIME_URL) return process.env.V0_RUNTIME_URL
  return "http://localhost:3000"
}

const trustedOrigins = [
  process.env.V0_RUNTIME_URL,
  process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : undefined,
  process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : undefined,
  process.env.BETTER_AUTH_URL,
  process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined,
].filter(Boolean) as string[]

export const auth = betterAuth({
  baseURL: getBaseURL(),
  trustedOrigins,
  database: new Pool({ connectionString: process.env.DATABASE_URL }),
  emailAndPassword: {
    enabled: true,
    // Cadastro público desligado: somente o admin cria logins pelo painel.
    disableSignUp: true,
  },
  plugins: [admin()],
  advanced:
    process.env.NODE_ENV === "development"
      ? { defaultCookieAttributes: { sameSite: "none", secure: true } }
      : undefined,
})
