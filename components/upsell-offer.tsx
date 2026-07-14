import Image from "next/image"

// Link real del checkout de Hotmart de este producto (upsell)
const UPSELL_CHECKOUT_URL = "https://pay.hotmart.com/J102656950K?off=2z6jarki&checkoutMode=10&bid=1784058527948"
// Página de acceso a la que va el cliente si rechaza la oferta
const DECLINE_URL = "/seuacesso"

const benefits = [
  "150 packs de artes listas para publicar y vender en Instagram",
  "Plantillas para feed, stories y reels editables",
  "Diseños llamativos para mostrar tus paletas rellenas",
  "Frases y llamados a la acción que atraen clientes",
  "Fáciles de personalizar con tu marca y precios",
  "Acceso digital inmediato, incluso para principiantes",
]

export function UpsellOffer() {
  return (
    <main className="min-h-dvh bg-background px-5 py-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-secondary p-4 text-center">
          <p className="font-display text-sm font-extrabold uppercase tracking-wide text-primary">
            ¡Espera! Tu compra aún no termina
          </p>
          <p className="mt-1 text-sm font-semibold text-chocolate text-pretty">
            Antes de acceder a tus paletas, aprovecha esta oferta única que no volverás a ver.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl bg-card shadow-xl shadow-chocolate/10">
          <div className="flex items-center justify-center bg-primary px-4 py-3">
            <span className="font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground">
              Oferta exclusiva solo por hoy
            </span>
          </div>

          <div className="p-6">
            <h1 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance">
              Suma 150 Packs para Vender Paletas en Instagram
            </h1>
            <p className="mt-2 text-center text-sm font-medium leading-relaxed text-muted-foreground text-pretty">
              Artes profesionales listas para publicar y atraer clientes. Perfectas para mostrar tus paletas y vender
              más todos los días desde tu Instagram.
            </p>

            <div className="mx-auto mt-5 overflow-hidden rounded-2xl">
              <Image
                src="/images/150-packs-instagram-paletas.png"
                alt="150 packs de artes para redes sociales listas para vender paletas rellenas en Instagram"
                width={1024}
                height={1024}
                className="h-auto w-full object-contain"
              />
            </div>

            <ul className="mt-6 flex flex-col gap-2.5">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <CheckIcon />
                  <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-6 text-center">
              <p className="text-base text-muted-foreground">
                Valor normal: <span className="font-semibold text-muted-foreground line-through">$17,90</span>
              </p>
              <p className="mt-1 font-display text-5xl font-extrabold text-primary">$4,90</p>
              <p className="mt-1 text-sm font-semibold text-pistache">
                Pago único · Solo en esta página · Producto digital
              </p>
            </div>

            <div className="mt-6">
              <a
                href={UPSELL_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full flex-col items-center justify-center rounded-full bg-verde-cta px-6 py-4 text-center font-display text-lg font-extrabold text-white shadow-lg shadow-verde-cta/30 transition-transform hover:bg-verde-cta-dark active:scale-95 animate-cta-pulse sm:text-xl"
              >
                <span className="leading-tight">SÍ, QUIERO AGREGAR ESTOS PACKS</span>
                <span className="text-xs font-semibold text-white/85 sm:text-sm">Compra 100% segura</span>
              </a>
            </div>

            <div className="mt-4 text-center">
              <a
                href={DECLINE_URL}
                className="text-sm font-medium text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground"
              >
                No, gracias. Prefiero seguir sin esta oferta
              </a>
            </div>
          </div>
        </div>

        <p className="mt-6 text-center text-xs leading-relaxed text-muted-foreground text-pretty">
          Esta oferta solo está disponible en esta página y no se repetirá. Al continuar, aceptas recibir el acceso
          digital de forma inmediata.
        </p>
      </div>
    </main>
  )
}

function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pistache text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
