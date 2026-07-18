import Image from "next/image"

// Link real del checkout de Hotmart de este combo (downsell) — actualízalo con el link correcto
const DOWNSELL_CHECKOUT_URL = "https://pay.hotmart.com/J102656950K?off=2z6jarki&checkoutMode=10&bid=1784058527948"
// Página de acceso a la que va el cliente si rechaza el combo
const DECLINE_URL = "/seuacesso"

const benefits = [
  "150 recetas de dulces brasileños virales para vender",
  "150 packs de artes listas para publicar en Instagram",
  "Plantillas para feed, stories y reels editables",
  "Recetas fáciles, rentables y con alta demanda",
  "Diseños llamativos para mostrar y vender más",
  "Acceso digital inmediato a los 2 productos",
]

export function DownsellOffer() {
  return (
    <main className="min-h-dvh bg-background px-5 py-8">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl bg-secondary p-4 text-center">
          <p className="font-display text-sm font-extrabold uppercase tracking-wide text-primary">
            ¡Espera! Tenemos una última oferta para ti
          </p>
          <p className="mt-1 text-sm font-semibold text-chocolate text-pretty">
            No te quedes solo con una idea: llévate el combo completo con un descuento que no volverás a ver.
          </p>
        </div>

        <div className="mt-6 overflow-hidden rounded-3xl bg-card shadow-xl shadow-chocolate/10">
          <div className="flex items-center justify-center bg-primary px-4 py-3">
            <span className="font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground">
              Combo especial · Solo por hoy
            </span>
          </div>

          <div className="p-6">
            <h1 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance">
              Llévate los 2 productos en un solo combo
            </h1>
            <p className="mt-2 text-center text-sm font-medium leading-relaxed text-muted-foreground text-pretty">
              150 Recetas de Dulces Brasileños Virales + 150 Packs para Vender Paletas en Instagram. Todo lo que
              necesitas para producir y vender más, en una sola compra.
            </p>

            <div className="mx-auto mt-5 overflow-hidden rounded-2xl">
              <Image
                src="/images/pv2/combo-dulces-packs.png"
                alt="Combo de 150 recetas de dulces brasileños virales y 150 packs para vender paletas en Instagram"
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
                Valor normal: <span className="font-semibold text-muted-foreground line-through">$22,80</span>
              </p>
              <p className="mt-1 font-display text-5xl font-extrabold text-primary">$3,49</p>
              <p className="mt-1 text-sm font-semibold text-pistache">
                Pago único · Solo en esta página · 2 productos digitales
              </p>
            </div>

            <div className="mt-6">
              <a
                href={DOWNSELL_CHECKOUT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex w-full flex-col items-center justify-center rounded-full bg-verde-cta px-6 py-4 text-center font-display text-lg font-extrabold text-white shadow-lg shadow-verde-cta/30 transition-transform hover:bg-verde-cta-dark active:scale-95 animate-cta-pulse sm:text-xl"
              >
                <span className="leading-tight">SÍ, QUIERO EL COMBO COMPLETO</span>
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
