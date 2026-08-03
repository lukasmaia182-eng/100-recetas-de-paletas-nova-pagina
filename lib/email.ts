import { Resend } from "resend"

const FROM = process.env.EMAIL_FROM || "Manual da Lancheira <no-reply@example.com>"
const BRAND = "100 Paletas Rellenas y Cremosas"

function getClient() {
  const key = process.env.RESEND_API_KEY
  if (!key) return null
  return new Resend(key)
}

type SendArgs = {
  to: string
  subject: string
  html: string
}

/**
 * Envia um e-mail via Resend. Se RESEND_API_KEY não estiver configurada,
 * apenas registra no log e não quebra o fluxo (útil enquanto o Resend não está pronto).
 */
export async function sendEmail({ to, subject, html }: SendArgs) {
  const client = getClient()
  if (!client) {
    console.log("[v0] Resend não configurado (RESEND_API_KEY ausente). E-mail não enviado para:", to, "| assunto:", subject)
    return { skipped: true as const }
  }
  try {
    const res = await client.emails.send({ from: FROM, to, subject, html })
    if (res.error) {
      console.log("[v0] Erro ao enviar e-mail via Resend:", res.error)
      return { error: res.error }
    }
    return { id: res.data?.id }
  } catch (err) {
    console.log("[v0] Exceção ao enviar e-mail:", err instanceof Error ? err.message : err)
    return { error: err }
  }
}

function shell(title: string, body: string) {
  return `
  <div style="background:#fff7ed;padding:32px 16px;font-family:system-ui,-apple-system,Segoe UI,Roboto,sans-serif;color:#431407">
    <div style="max-width:520px;margin:0 auto;background:#ffffff;border-radius:20px;overflow:hidden;border:1px solid #fed7aa">
      <div style="background:#ea580c;padding:24px 28px">
        <h1 style="margin:0;color:#ffffff;font-size:18px;font-weight:800">${BRAND}</h1>
      </div>
      <div style="padding:28px">
        <h2 style="margin:0 0 12px;font-size:20px;color:#9a3412">${title}</h2>
        ${body}
      </div>
      <div style="padding:16px 28px;border-top:1px solid #fed7aa;color:#9a3412;font-size:12px">
        Este é um e-mail automático. Se você não fez esta compra, ignore esta mensagem.
      </div>
    </div>
  </div>`
}

function button(href: string, label: string) {
  return `<a href="${href}" style="display:inline-block;background:#ea580c;color:#ffffff;text-decoration:none;font-weight:700;padding:12px 22px;border-radius:12px;margin:12px 0">${label}</a>`
}

export function accessGrantedEmail(name: string, setPasswordUrl: string, loginUrl: string) {
  return shell(
    "¡Tu acceso está liberado!",
    `<p style="line-height:1.6;font-size:15px">Hola ${name || "🙂"}, ¡gracias por tu compra!</p>
     <p style="line-height:1.6;font-size:15px">Tu acceso a las <strong>100 Paletas Rellenas y Cremosas</strong> ya está activo. Define tu contraseña para entrar:</p>
     <p>${button(setPasswordUrl, "Definir mi contraseña")}</p>
     <p style="line-height:1.6;font-size:13px;color:#9a3412">O accede directamente en: <a href="${loginUrl}" style="color:#ea580c">${loginUrl}</a></p>`,
  )
}

export function accessRevokedEmail(name: string) {
  return shell(
    "Tu acceso fue suspendido",
    `<p style="line-height:1.6;font-size:15px">Hola ${name || "🙂"}, tu acceso a las <strong>100 Paletas Rellenas y Cremosas</strong> fue suspendido debido a un reembolso o cancelación de la compra.</p>
     <p style="line-height:1.6;font-size:15px">Si crees que esto es un error, responde a este correo y lo revisaremos.</p>`,
  )
}
