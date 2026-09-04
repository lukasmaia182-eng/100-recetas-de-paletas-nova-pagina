import type { Metadata } from "next"
import Image from "next/image"
import { CountdownBr } from "@/components/br/countdown-br"

export const metadata: Metadata = {
  title: "+100 Recetas de Paletas Gourmet | Paletas Rentables",
  description:
    "Más de 100 recetas probadas de paletas gourmet rellenas, con costos, rendimiento y tabla de precios. Acceso inmediato por WhatsApp y correo electrónico.",
}

const CHECKOUT_URL = "https://pay.hotmart.com/L102630763K?off=6wfgbtwd&checkoutMode=10"
const CHECKOUT_BASICO = "https://pay.hotmart.com/J102656950K?off=ihzzfsq0&checkoutMode=10"
const CHECKOUT_COMPLETO = "https://pay.hotmart.com/J102656950K?off=exzgh213&checkoutMode=10"

const fichas = [
  { src: "/images/br-lovable/ficha-maracuja.png", alt: "Ficha de receta de la paleta de maracuyá cremosa" },
  { src: "/images/br-lovable/ficha-cookies.png", alt: "Ficha de receta de la paleta cookies & cream rellena" },
  { src: "/images/br-lovable/ficha-frutas-vermelhas.png", alt: "Ficha de receta de la paleta de frutos rojos rellena" },
  { src: "/images/br-lovable/ficha-pistache.png", alt: "Ficha de receta de la paleta de pistache rellena" },
  { src: "/images/br-lovable/ficha-brigadeiro.png", alt: "Ficha de receta de la paleta de brigadeiro gourmet" },
  { src: "/images/br-lovable/ficha-coco.png", alt: "Ficha de receta de la paleta de coco con dulce de leche" },
]

const steps = [
  { n: "1", label: "Elige el sabor" },
  { n: "2", label: "Prepara en casa" },
  { n: "3", label: "Vende con ganancias" },
]

const material = [
  {
    icon: <BookIcon />,
    title: "Recetas listas para vender",
    text: "Fichas con ingredientes, rendimiento y modo de preparación. Solo sigue el paso a paso y empieza a producir.",
  },
  {
    icon: <DropIcon />,
    title: "Rellenos que encantan",
    text: "Brigadeiro gourmet, crema de pistacho, leche condensada cremosa y frutas: el relleno que hace que el cliente vuelva.",
  },
  {
    icon: <CoinIcon />,
    title: "Custo baixo, margem alta",
    text: "Cada paleta cuesta pocos reales y se vende hasta por 5 veces su costo. Tabla de precios incluida.",
  },
  {
    icon: <FolderIcon />,
    title: "Archivos organizados",
    text: "Elige el sabor, imprime la ficha y comienza hoy mismo, sin perder tiempo buscando recetas en internet.",
  },
]

const idealItems = [
  "Comenzar un ingreso extra vendiendo paletas gourmet",
  "Dejar las recetas comunes y vender paletas rellenas premium",
  "Tener una tabla de precios que garantice ganancias en cada venta",
  "Aprender a decorar paletas con acabado de pastelería fina",
  "Crear un menú completo y fidelizar clientes",
]

const receiveItems = [
  "+100 Recetas de paletas gourmet e rellenas",
  "Archivos en PDF listos para imprimir (A4)",
  "Tabla de rendimiento y costo por paleta",
  "Paso a paso sencillo, incluso para principiantes",
]

const bonuses = [
  {
    title: "30 Recetas de Rellenos Cremosos",
    text: "Brigadeiro gourmet, ninho, dulce de leche, creme de pistache y más rellenos que no se derraman ni se endurecen.",
  },
  {
    title: "Tabla de Precios y Ganancias",
    text: "Hoja simple para calcular el costo por paleta, definir el precio de venta y conocer tu margen real.",
  },
  {
    title: "Guía de Decoración Profesional",
    text: "Baño de chocolate, drips de colores, frutos secos y confites: técnicas para hacer que la paleta sea irresistible.",
  },
  {
    title: "20 Sabores Fit y Sin Azúcar",
    text: "Opciones sin azúcar y a base de frutas para quienes buscan algo más ligero.",
  },
  {
    title: "Guía de Ventas en WhatsApp e Instagram",
    text: "Cómo fotografiar, anunciar y recibir pedidos todos los días sin gastar en anuncios.",
  },
  {
    title: "Checklist de Materiales y Proveedores",
    text: "Moldes, palitos, empaques y dónde comprar barato para comenzar con poca inversión.",
  },
]

export default function Page() {
  const hoje = new Date().toLocaleDateString("es-ES", { day: "2-digit", month: "2-digit", year: "numeric" })

  return (
    <main className="br-lv min-h-screen overflow-x-hidden">
      {/* Barra de anúncio */}
      <div className="border-b border-[var(--lv-border)]/60 bg-black/30 px-4 py-2.5">
        <p className="flex items-center justify-center gap-2 text-center text-[0.72rem] font-bold uppercase tracking-wide text-[var(--lv-cream)]/90 sm:text-xs">
          <ZapIcon />
          Oferta especial disponible solo hoy {hoje}
        </p>
      </div>

      <div className="mx-auto w-full max-w-md px-5">
        {/* HERO */}
        <section className="pt-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lv-orange)]/60 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <LockIcon />
            Compra 100% segura y protegida
          </span>

          <h1 className="lv-title mt-5 text-4xl text-balance sm:text-5xl">
            <span className="text-[var(--lv-orange)]">Más de 100 Recetas</span>{" "}
            <span className="text-[var(--lv-cream)]">de Paletas Gourmet</span>
          </h1>
          <p className="lv-title mt-3 text-lg text-[var(--lv-orange)] sm:text-xl">
            Para que produzcas en casa y ganes dinero todos los días
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--lv-border)] shadow-2xl shadow-black/50">
            <Image
              src="/images/br-lovable/vitrine-recheadas.webp"
              alt="Paletas gourmet rellenas de pistacho, chocolate belga y frutos rojos"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 100vw, 448px"
            />
          </div>

          <p className="mt-6 text-[0.95rem] leading-relaxed text-[var(--lv-muted)] text-pretty">
            Recibes más de 100 recetas probadas de paletas gourmet, rellenas y decoradas, con ingredientes
            simples, rendimiento calculado y precio de venta sugerido.
          </p>

          <ul className="mt-5 flex flex-col gap-3 text-left">
            {[
              "Más de 100 recetas listas para preparar",
              "Rellenos cremosos que no se derraman",
              "Bajo costo y margen de hasta 5x",
              "Para quienes quieren comenzar hoy, incluso sin experiencia",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[0.95rem] font-semibold leading-snug text-[var(--lv-cream)]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Cta href="#oferta" location="hero">
              Quiero acceder a las recetas
            </Cta>
          </div>

          <p className="lv-title mx-auto mt-6 max-w-sm text-base text-[var(--lv-cream)] sm:text-lg">
            Recibes todo al instante, directamente en tu WhatsApp y correo electrónico
          </p>
        </section>

        {/* GALERIA */}
        <section className="mt-12 text-center">
          <h2 className="lv-title text-2xl text-balance sm:text-3xl">
            <span className="text-[var(--lv-cream)]">Mira las paletas que vas a</span>{" "}
            <span className="text-[var(--lv-orange)]">aprender a preparar</span>
          </h2>
        </section>
      </div>

      {/* Carrossel em largura total */}
      <div className="mt-6 overflow-hidden py-2">
        <div className="lv-marquee flex w-max gap-4">
          {[...fichas, ...fichas].map((f, i) => (
            <div
              key={`${f.src}-${i}`}
              className="relative aspect-[3/4] w-52 shrink-0 overflow-hidden rounded-2xl border border-[var(--lv-border)] bg-[var(--lv-card)] shadow-xl shadow-black/40"
            >
              <Image src={f.src} alt={f.alt} fill className="object-cover" sizes="208px" />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto w-full max-w-md px-5">
        <p className="mt-6 text-center text-[0.95rem] leading-relaxed text-[var(--lv-muted)]">
          Todas las recetas ya están <span className="font-bold text-[var(--lv-cream)]">organizadas y listas para usar.</span>
        </p>

        {/* PASSOS */}
        <section className="mt-8 flex flex-col gap-3">
          {steps.map((s) => (
            <div
              key={s.n}
              className="flex items-center gap-4 rounded-2xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-5 py-4"
            >
              <span className="lv-title flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[var(--lv-orange)] text-xl text-white">
                {s.n}
              </span>
              <span className="text-base font-bold text-[var(--lv-cream)]">{s.label}</span>
            </div>
          ))}
          <div className="mt-3">
            <Cta href={CHECKOUT_URL} location="passos">
              Quiero el mío
            </Cta>
          </div>
        </section>

        {/* MATERIAL */}
        <section className="mt-14 text-center">
          <h2 className="lv-title text-2xl text-balance sm:text-3xl">
            El material <span className="text-[var(--lv-orange)]">Paletas Rentables</span> incluye:
          </h2>
          <div className="mt-6 flex flex-col gap-4">
            {material.map((m) => (
              <div
                key={m.title}
                className="flex flex-col items-center rounded-2xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-5 py-6 text-center"
              >
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--lv-orange)]/15 text-[var(--lv-orange)]">
                  {m.icon}
                </span>
                <h3 className="lv-title mt-4 text-lg text-[var(--lv-cream)]">{m.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--lv-muted)] text-pretty">{m.text}</p>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <Cta href={CHECKOUT_URL} location="material">
              Quiero las recetas ahora
            </Cta>
          </div>
        </section>

        {/* ESCASSEZ / COUNTDOWN */}
        <section className="mt-14 rounded-3xl border border-[var(--lv-border)] bg-[var(--lv-card)]/60 px-6 py-8 text-center">
          <h2 className="lv-title text-xl text-[var(--lv-cream)] text-balance sm:text-2xl">
            Aprovecha el precio promocional por tiempo limitado
          </h2>
          <div className="mt-6">
            <CountdownBr minutes={15} />
          </div>
          <p className="lv-title mx-auto mt-6 max-w-sm text-base text-[var(--lv-orange)] sm:text-lg">
            ¡No dejes pasar otro verano sin convertir las paletas en ingresos!
          </p>
          <div className="mt-6">
            <Cta href={CHECKOUT_URL} location="escassez">
              Quiero acceder ahora y comenzar hoy
            </Cta>
          </div>
        </section>

        {/* IDEAL PARA VOCÊ */}
        <section className="mt-14">
          <h2 className="lv-title text-center text-2xl text-balance sm:text-3xl">
            Este material es ideal para ti si deseas:
          </h2>
          <ul className="mt-6 flex flex-col gap-3">
            {idealItems.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 rounded-2xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-4 py-3.5"
              >
                <CheckIcon />
                <span className="text-[0.95rem] font-semibold leading-snug text-[var(--lv-cream)]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* TUDO O QUE VAI RECEBER */}
        <section className="mt-14 rounded-3xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-6 py-8">
          <h2 className="lv-title text-center text-2xl text-balance sm:text-3xl">Todo lo que vas a recibir</h2>
          <span className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <ZapIcon />
            Acceso inmediato
          </span>
          <ul className="mt-5 flex flex-col gap-3">
            {receiveItems.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[0.95rem] leading-snug text-[var(--lv-cream)]">{item}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* BÔNUS */}
        <section className="mt-14 text-center">
          <h2 className="lv-title text-2xl text-balance sm:text-3xl">Y eso no es todo... ¡hay más!</h2>
          <span className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <FlameIcon />6 bonos exclusivos
          </span>
          <div className="mt-6 flex flex-col gap-4 text-left">
            {bonuses.map((b) => (
              <div key={b.title} className="rounded-2xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-5 py-5">
                <h3 className="lv-title text-lg text-[var(--lv-cream)]">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--lv-muted)] text-pretty">{b.text}</p>
                <p className="mt-3 text-sm font-bold">
                  <span className="text-[var(--lv-muted)] line-through">Valor: R$27</span>{" "}
                  <span className="text-[var(--lv-green)]">GRATIS</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANOS */}
        <section id="oferta" className="mt-14 scroll-mt-6">
          <span className="mx-auto mb-5 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <ClockIcon />
            Última oportunidad — la oferta termina hoy
          </span>
          <h2 className="lv-title text-center text-2xl text-balance sm:text-3xl">Elige la mejor opción para ti:</h2>

          <div className="mt-6 flex flex-col gap-5">
            {/* Plan básico */}
            <div className="rounded-3xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-6 py-7">
              <h3 className="lv-title text-xl text-[var(--lv-cream)]">Plan básico</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {[
                  "100 Recetas de paletas gourmet",
                  "Archivos en PDF listos para imprimir",
                  "Material organizado por sabor",
                  "Fácil de aplicar en casa",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--lv-cream)]">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <p className="text-sm text-[var(--lv-muted)]">
                  de <span className="line-through">R$27,90</span> por:
                </p>
                <p className="lv-title text-4xl text-[var(--lv-orange)]">US$3.90</p>
                <p className="text-xs text-[var(--lv-muted)]">Pago único con tarjeta</p>
              </div>
              <div className="mt-5">
                <Cta href={CHECKOUT_BASICO} variant="outline" location="plano-basico">
                  Quiero solo el básico
                </Cta>
              </div>
            </div>

            {/* Plan completo */}
            <div className="relative rounded-3xl border-2 border-[var(--lv-orange)] bg-[var(--lv-card-2)] px-6 py-7 shadow-2xl shadow-[var(--lv-orange)]/20">
              <span className="lv-cta absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-white">
                Más vendido
              </span>
              <h3 className="lv-title text-xl text-[var(--lv-cream)]">Plan completo</h3>
              <span className="mt-2 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
                <ZapIcon />2x más contenido
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {[
                  "Todo lo del plan básico",
                  "+ Recetas de paletas rellenas premium",
                  "+ Los 6 bonos exclusivos (valor R$162)",
                  "+ Tabla de precios y ganancias",
                  "+ Guía de ventas en WhatsApp e Instagram",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-[var(--lv-cream)]">
                    <CheckIcon />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-5">
                <p className="text-sm text-[var(--lv-muted)]">
                  de <span className="line-through">R$97,00</span> por:
                </p>
                <p className="lv-title text-5xl text-[var(--lv-orange)]">US$9.90</p>
                <p className="text-xs text-[var(--lv-muted)]">Pago único con tarjeta</p>
              </div>
              <div className="mt-5">
                <Cta href={CHECKOUT_COMPLETO} location="plano-completo">
                  Quiero el plan completo
                </Cta>
              </div>
            </div>
          </div>

          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs font-medium text-[var(--lv-muted)]">
            <LockIcon />
            Compra 100% segura • Acceso inmediato por WhatsApp y correo electrónico • Garantía de 7 días
          </p>
        </section>
      </div>

      <footer className="mt-14 border-t border-[var(--lv-border)]/60 bg-black/30 px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-[var(--lv-muted)]/80">
          Este es un producto digital. El resultado depende de la aplicación de las recetas. Más de 100 Recetas de Paletas Gourmet.
          Todos los derechos reservados.
        </p>
      </footer>
    </main>
  )
}

/* ---------- CTA ---------- */
function Cta({
  href,
  children,
  sub,
  location,
  variant = "solid",
}: {
  href: string
  children: React.ReactNode
  sub?: string
  location?: string
  variant?: "solid" | "outline"
}) {
  const isAnchor = href.startsWith("#")
  const linkProps = isAnchor
    ? { href }
    : { href, target: "_blank", rel: "noopener noreferrer", "data-gtm": "buy-button", "data-gtm-location": location }

  if (variant === "outline") {
    return (
      <a
        {...linkProps}
        className="flex w-full flex-col items-center justify-center rounded-full border-2 border-[var(--lv-orange)] bg-[var(--lv-orange)] px-6 py-3.5 text-center font-extrabold text-[#180d08] shadow-lg shadow-[var(--lv-orange)]/25 transition-colors hover:bg-[var(--lv-orange-2)] hover:text-[#fff7ed] active:scale-95"
      >
        <span className="lv-title text-base tracking-wide sm:text-lg">{children}</span>
      </a>
    )
  }
  return (
    <a
      {...linkProps}
      className="lv-cta lv-cta-pulse flex w-full flex-col items-center justify-center rounded-full px-6 py-4 text-center font-extrabold text-[#180d08] transition-transform active:scale-95"
    >
      <span className="lv-title text-base tracking-wide sm:text-lg">{children}</span>
      {sub ? <span className="mt-0.5 text-xs font-semibold text-[#180d08]/75">{sub}</span> : null}
    </a>
  )
}

/* ---------- Ícones ---------- */
function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--lv-green)] text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function iconProps(size = 18) {
  return {
    viewBox: "0 0 24 24",
    fill: "none" as const,
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    width: size,
    height: size,
    "aria-hidden": true,
  }
}

function ZapIcon() {
  return (
    <svg {...iconProps(14)}>
      <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
    </svg>
  )
}

function LockIcon() {
  return (
    <svg {...iconProps(14)}>
      <rect x="3" y="11" width="18" height="11" rx="2" />
      <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
  )
}

function FlameIcon() {
  return (
    <svg {...iconProps(14)}>
      <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg {...iconProps(14)}>
      <circle cx="12" cy="12" r="10" />
      <path d="M12 6v6l4 2" />
    </svg>
  )
}

function BookIcon() {
  return (
    <svg {...iconProps(26)}>
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
    </svg>
  )
}

function DropIcon() {
  return (
    <svg {...iconProps(26)}>
      <path d="M12 2.5S6 9 6 14a6 6 0 0 0 12 0c0-5-6-11.5-6-11.5z" />
    </svg>
  )
}

function CoinIcon() {
  return (
    <svg {...iconProps(26)}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5A2.5 2.5 0 0 0 12 8c-1.5 0-2.5.8-2.5 2s1 1.7 2.5 2 2.5.8 2.5 2-1 2-2.5 2a2.5 2.5 0 0 1-2.5-1.5" />
      <path d="M12 6.5v11" />
    </svg>
  )
}

function FolderIcon() {
  return (
    <svg {...iconProps(26)}>
      <path d="M4 20a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2z" />
    </svg>
  )
}
