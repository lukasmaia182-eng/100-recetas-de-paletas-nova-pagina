import Image from "next/image"
import { CtaButtonBrpv1 } from "./cta-button-brpv1"
import { Eyebrow } from "./showcase-brpv1"

const items = [
  "100 receitas de picolés recheados",
  "Sabores clássicos",
  "Sabores premium",
  "Receitas com chocolate",
  "Receitas com frutas",
  "Receitas com pistache",
  "Recheios cremosos",
  "Coberturas e finalizações",
  "Ingredientes e quantidades",
  "Passo a passo",
  "Rendimento",
  "Conservação",
]

const audience = [
  { title: "Está começando agora", desc: "Quer aprender receitas mesmo sem experiência profissional." },
  { title: "Quer criar uma renda extra", desc: "Busca um produto diferente para preparar e oferecer aos clientes." },
  { title: "Quer praticidade", desc: "Prefere encontrar várias receitas organizadas em um único material." },
  { title: "Quer chamar atenção nas redes", desc: "Busca produtos bonitos para fotografar, postar e divulgar." },
  { title: "Quer ampliar seu cardápio", desc: "Deseja oferecer sabores clássicos, modernos e premium." },
]

export function MaterialBrpv1({ checkoutUrl }: { checkoutUrl: string }) {
  return (
    <section className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <Eyebrow>Material completo</Eyebrow>
          <h2 className="mt-4 font-display text-3xl font-extrabold text-chocolate text-balance sm:text-4xl">
            Tenha 100 receitas organizadas em um único material
          </h2>
        </div>

        <div className="mt-10 grid items-center gap-10 lg:grid-cols-2">
          <div className="overflow-hidden rounded-[2rem] shadow-2xl shadow-chocolate/15">
            <Image
              src="/images/br-hero-mockup.png"
              alt="Material 'Picolés Recheados Lucrativos' com páginas internas exibidas em tablet e celular ao lado de picolés gourmet"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
            />
          </div>

          <div>
            <ul className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-2.5 rounded-xl bg-card p-3 shadow-sm">
                  <CheckDot />
                  <span className="text-sm font-semibold leading-snug text-chocolate">{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <CtaButtonBrpv1 href={checkoutUrl} location="material">
                Quero acessar as 100 receitas
              </CtaButtonBrpv1>
            </div>
          </div>
        </div>

        {/* É pra você que */}
        <div className="mt-16 text-center">
          <Eyebrow>É pra você que</Eyebrow>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {audience.map((a) => (
            <div key={a.title} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
              <h3 className="font-display text-lg font-extrabold text-chocolate text-balance">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground text-pretty">{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CheckDot() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pistache text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}
