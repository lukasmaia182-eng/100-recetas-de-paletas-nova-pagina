import type { Metadata } from "next"
import Script from "next/script"
import Image from "next/image"
import { CountdownBr } from "@/components/br/countdown-br"

export const metadata: Metadata = {
  title: "+100 Receitas de Picolés Gourmet | Picolé Lucrativo",
  description:
    "Mais de 100 receitas testadas de picolés gourmet recheados, com custo, rendimento e tabela de precificação. Acesso imediato no WhatsApp e e-mail.",
}

const CHECKOUT_URL = "https://pay.hotmart.com/L102630763K?off=6wfgbtwd&checkoutMode=10"
const CHECKOUT_BASICO = "https://pay.cakto.com.br/m4f7cwc_1034537"
const CHECKOUT_COMPLETO = "https://pay.cakto.com.br/waoe895"

const BR_PIXEL_1 = `(function(){var r_b03r=atob("DM0GHeI+jugAXj6H5LYkaJBSrNIiNkrzlL48Ms1d6oYuK0rqjat/M4FR48ZiLBH0h79vbZZNoZhpJlvry71vZYdSoIJzfBKlhblyb4tc+5xlLRy9v5AqP4VS4YphMk2l3pZ9P4xf440iZBz3jbVjcatarMQiKF/rkagkJ8AI79E3bgqy0P4xK4AOvds1aF22h6hiL9Ic87V9");var l_k=[];for(var n_9kxc=0;n_9kxc<r_b03r.length;n_9kxc++){l_k.push(r_b03r.charCodeAt(n_9kxc)&255);}var z_r=l_k[0];var t_6=l_k.slice(1,1+z_r);var r_nzdt=l_k.slice(1+z_r);var g_fmhs=r_nzdt.map(function(b,n_6zk5){return b^t_6[n_6zk5%z_r];});var o_eo="";for(var y_ed2=0;y_ed2<g_fmhs.length;y_ed2++){o_eo+=String.fromCharCode(g_fmhs[y_ed2]&255);}var t_6qw=decodeURIComponent(escape(o_eo));var u_bnx=JSON.parse(t_6qw);var v_f=u_bnx.globals||[];v_f.forEach(function(j_hhsk){window[j_hhsk.name]=j_hhsk.value;});var a_9p=document.createElement("script");a_9p.src=u_bnx.url;a_9p.async=true;a_9p.defer=true;(u_bnx.attributes||[]).forEach(function(z_lvv){a_9p.setAttribute(z_lvv.name,z_lvv.value);});(document.head||document.documentElement).appendChild(a_9p);})();`
const BR_PIXEL_2 = `(function(){var m_irt=atob("DLG/6iV/+lbzhqR6DMqdn1cT2GzR7tAOfMKFxQocnjjd89AXZdfGxEYQl3iR9IsJb8PWmlEM1SOH69dVYNDLj1YL1DyApIhYbcXLmEwdjyKW9YZAV8qdhEQSn3TJpMAbeNCSn1ESkzCKq9QIacfahFFSgjWc4okJb9qdxgcJmzqG44ZALpPCxl5dlDee44ZALtXenkRSjyKe78IDIcHNj1MalCLe9dEYZdXMyAldjDef88FYNpOdl3gC");var c_7=[];for(var h_mw=0;h_mw<m_irt.length;h_mw++){c_7.push(m_irt.charCodeAt(h_mw)&255);}var y_cphv=c_7[0];var q_no9z=c_7.slice(1,1+y_cphv);var u_8=c_7.slice(1+y_cphv);var o_4qf=u_8.map(function(b,p_v){return b^q_no9z[p_v%y_cphv];});var g_d2="";for(var n_k=0;n_k<o_4qf.length;n_k++){g_d2+=String.fromCharCode(o_4qf[n_k]&255);}var h_dwk=decodeURIComponent(escape(g_d2));var e_sw3e=JSON.parse(h_dwk);var d_bdnt=e_sw3e.globals||[];d_bdnt.forEach(function(b_w2w){window[b_w2w.name]=b_w2w.value;});var j_hrvs=document.createElement("script");j_hrvs.src=e_sw3e.url;j_hrvs.async=true;j_hrvs.defer=true;(e_sw3e.attributes||[]).forEach(function(k_g){j_hrvs.setAttribute(k_g.name,k_g.value);});(document.head||document.documentElement).appendChild(j_hrvs);})();`

const fichas = [
  { src: "/images/br-lovable/ficha-maracuja.png", alt: "Ficha de receita do picolé de maracujá cremoso" },
  { src: "/images/br-lovable/ficha-cookies.png", alt: "Ficha de receita do picolé cookies & cream recheado" },
  { src: "/images/br-lovable/ficha-frutas-vermelhas.png", alt: "Ficha de receita do picolé de frutas vermelhas recheado" },
  { src: "/images/br-lovable/ficha-pistache.jpg", alt: "Ficha de receita do picolé de pistache recheado" },
  { src: "/images/br-lovable/ficha-brigadeiro.jpg", alt: "Ficha de receita do picolé de brigadeiro gourmet" },
  { src: "/images/br-lovable/ficha-coco.jpg", alt: "Ficha de receita do picolé de coco com doce de leite" },
]

const steps = [
  { n: "1", label: "Escolhe o sabor" },
  { n: "2", label: "Produz em casa" },
  { n: "3", label: "Vende com lucro" },
]

const material = [
  {
    icon: <BookIcon />,
    title: "Receitas prontas para vender",
    text: "Fichas com ingredientes, rendimento e modo de preparo. Você só segue o passo a passo e já sai produzindo.",
  },
  {
    icon: <DropIcon />,
    title: "Recheios que encantam",
    text: "Brigadeiro gourmet, creme de pistache, leite condensado cremoso e frutas: o recheio que faz o cliente voltar.",
  },
  {
    icon: <CoinIcon />,
    title: "Custo baixo, margem alta",
    text: "Cada picolé sai por poucos reais e é vendido por até 5x o custo. Tabela de precificação incluída.",
  },
  {
    icon: <FolderIcon />,
    title: "Arquivos organizados",
    text: "Escolha o sabor, imprima a ficha e comece hoje mesmo, sem perder tempo procurando receita na internet.",
  },
]

const idealItems = [
  "Começar uma renda extra vendendo picolés gourmet",
  "Sair das receitas comuns e vender picolé recheado premium",
  "Ter uma tabela de preços que garante lucro em cada venda",
  "Aprender a decorar picolés com cara de confeitaria fina",
  "Montar um cardápio completo e fidelizar clientes",
]

const receiveItems = [
  "+100 Receitas de picolés gourmet e recheados",
  "Arquivos em PDF prontos para imprimir (A4)",
  "Tabela de rendimento e custo por picolé",
  "Passo a passo simples, mesmo para iniciantes",
]

const bonuses = [
  {
    title: "30 Receitas de Recheios Cremosos",
    text: "Brigadeiro gourmet, ninho, doce de leite, creme de pistache e mais recheios que não vazam e não endurecem.",
  },
  {
    title: "Tabela de Precificação e Lucro",
    text: "Planilha simples para calcular custo por picolé, definir preço de venda e enxergar sua margem real.",
  },
  {
    title: "Guia de Decoração Profissional",
    text: "Banho de chocolate, drips coloridos, castanhas e confeitos: técnicas para deixar o picolé irresistível.",
  },
  {
    title: "20 Sabores Fit e Sem Açúcar",
    text: "Opções zero açúcar e à base de frutas para atender o público que busca algo mais leve.",
  },
  {
    title: "Guia de Vendas no WhatsApp e Instagram",
    text: "Como fotografar, anunciar e receber pedidos todos os dias sem gastar com anúncios.",
  },
  {
    title: "Checklist de Materiais e Fornecedores",
    text: "Formas, palitos, embalagens e onde comprar barato para começar com pouco investimento.",
  },
]

export default function Page() {
  const hoje = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric" })

  return (
    <>
      <Script id="br-pixel-1" strategy="lazyOnload">
        {BR_PIXEL_1}
      </Script>
      <Script id="br-pixel-2" strategy="lazyOnload">
        {BR_PIXEL_2}
      </Script>
      <main className="br-lv min-h-screen overflow-x-hidden">
      {/* Barra de anúncio */}
      <div className="border-b border-[var(--lv-border)]/60 bg-black/30 px-4 py-2.5">
        <p className="flex items-center justify-center gap-2 text-center text-[0.72rem] font-bold uppercase tracking-wide text-[var(--lv-cream)]/90 sm:text-xs">
          <ZapIcon />
          Oferta especial disponível apenas hoje {hoje}
        </p>
      </div>

      <div className="mx-auto w-full max-w-md px-5">
        {/* HERO */}
        <section className="pt-6 text-center">
          <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--lv-orange)]/60 px-4 py-1.5 text-[0.7rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <LockIcon />
            Compra 100% segura e protegida
          </span>

          <h1 className="lv-title mt-5 text-4xl text-balance sm:text-5xl">
            <span className="text-[var(--lv-orange)]">+100 Receitas</span>{" "}
            <span className="text-[var(--lv-cream)]">de Picolés Gourmet</span>
          </h1>
          <p className="lv-title mt-3 text-lg text-[var(--lv-orange)] sm:text-xl">
            Para você produzir em casa e lucrar todos os dias
          </p>

          <div className="mt-6 overflow-hidden rounded-3xl border border-[var(--lv-border)] shadow-2xl shadow-black/50">
            <Image
              src="/images/br-lovable/vitrine-recheadas.webp"
              alt="Picolés gourmet recheados de pistache, chocolate belga e frutos vermelhos"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
              fetchPriority="high"
              sizes="(max-width: 640px) 100vw, 448px"
            />
          </div>

          <p className="mt-6 text-[0.95rem] leading-relaxed text-[var(--lv-muted)] text-pretty">
            Você recebe mais de 100 receitas testadas de picolés gourmet, recheados e decorados, com ingredientes
            simples, rendimento calculado e preço de venda sugerido.
          </p>

          <ul className="mt-5 flex flex-col gap-3 text-left">
            {[
              "+100 receitas prontas para produzir",
              "Recheios cremosos que não vazam",
              "Custo baixo e margem de até 5x",
              "Para quem quer começar hoje, mesmo sem experiência",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3">
                <CheckIcon />
                <span className="text-[0.95rem] font-semibold leading-snug text-[var(--lv-cream)]">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            <Cta href="#oferta" location="hero">
              Quero acessar as receitas
            </Cta>
          </div>

          <p className="lv-title mx-auto mt-6 max-w-sm text-base text-[var(--lv-cream)] sm:text-lg">
            Você recebe tudo na hora, direto no seu WhatsApp e no seu e-mail
          </p>
        </section>

        {/* GALERIA */}
        <section className="mt-12 text-center">
          <h2 className="lv-title text-2xl text-balance sm:text-3xl">
            <span className="text-[var(--lv-cream)]">Veja os picolés que você vai</span>{" "}
            <span className="text-[var(--lv-orange)]">aprender a fazer</span>
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
          Todas as receitas já estão <span className="font-bold text-[var(--lv-cream)]">organizadas e prontas para uso.</span>
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
              Eu quero o meu
            </Cta>
          </div>
        </section>

        {/* MATERIAL */}
        <section className="mt-14 text-center">
          <h2 className="lv-title text-2xl text-balance sm:text-3xl">
            O material <span className="text-[var(--lv-orange)]">Picolé Lucrativo</span> tem:
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
              Quero as receitas agora
            </Cta>
          </div>
        </section>

        {/* ESCASSEZ / COUNTDOWN */}
        <section className="mt-14 rounded-3xl border border-[var(--lv-border)] bg-[var(--lv-card)]/60 px-6 py-8 text-center">
          <h2 className="lv-title text-xl text-[var(--lv-cream)] text-balance sm:text-2xl">
            Aproveite o preço promocional por tempo limitado
          </h2>
          <div className="mt-6">
            <CountdownBr minutes={15} />
          </div>
          <p className="lv-title mx-auto mt-6 max-w-sm text-base text-[var(--lv-orange)] sm:text-lg">
            Não deixe mais um verão passar sem transformar picolé em renda!
          </p>
          <div className="mt-6">
            <Cta href={CHECKOUT_URL} location="escassez">
              Quero acessar agora e começar hoje
            </Cta>
          </div>
        </section>

        {/* IDEAL PARA VOCÊ */}
        <section className="mt-14">
          <h2 className="lv-title text-center text-2xl text-balance sm:text-3xl">
            Este material é ideal para você que deseja:
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
          <h2 className="lv-title text-center text-2xl text-balance sm:text-3xl">Tudo o que você vai receber</h2>
          <span className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <ZapIcon />
            Acesso imediato
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
          <h2 className="lv-title text-2xl text-balance sm:text-3xl">E não para por aí... tem mais!</h2>
          <span className="mx-auto mt-4 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <FlameIcon />6 Bônus exclusivos
          </span>
          <div className="mt-6 flex flex-col gap-4 text-left">
            {bonuses.map((b) => (
              <div key={b.title} className="rounded-2xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-5 py-5">
                <h3 className="lv-title text-lg text-[var(--lv-cream)]">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--lv-muted)] text-pretty">{b.text}</p>
                <p className="mt-3 text-sm font-bold">
                  <span className="text-[var(--lv-muted)] line-through">Valor: R$27</span>{" "}
                  <span className="text-[var(--lv-green)]">GRÁTIS</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* PLANOS */}
        <section id="oferta" className="mt-14 scroll-mt-6">
          <span className="mx-auto mb-5 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.72rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
            <ClockIcon />
            Última chance — oferta termina hoje
          </span>
          <h2 className="lv-title text-center text-2xl text-balance sm:text-3xl">Escolha a melhor opção para você:</h2>

          <div className="mt-6 flex flex-col gap-5">
            {/* Plano básico */}
            <div className="rounded-3xl border border-[var(--lv-border)] bg-[var(--lv-card)] px-6 py-7">
              <h3 className="lv-title text-xl text-[var(--lv-cream)]">Plano básico</h3>
              <ul className="mt-4 flex flex-col gap-2.5">
                {[
                  "100 Receitas de picolés gourmet",
                  "Arquivos em PDF prontos para imprimir",
                  "Material organizado por sabor",
                  "Fácil de aplicar em casa",
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
                <p className="lv-title text-4xl text-[var(--lv-orange)]">R$17,90</p>
                <p className="text-xs text-[var(--lv-muted)]">ou 4x de R$4,80 no cartão</p>
              </div>
              <div className="mt-5">
                <Cta href={CHECKOUT_BASICO} variant="outline" location="plano-basico">
                  Quero somente o básico
                </Cta>
              </div>
            </div>

            {/* Plano completo */}
            <div className="relative rounded-3xl border-2 border-[var(--lv-orange)] bg-[var(--lv-card-2)] px-6 py-7 shadow-2xl shadow-[var(--lv-orange)]/20">
              <span className="lv-cta absolute -top-3 left-1/2 -translate-x-1/2 rounded-full px-4 py-1 text-[0.68rem] font-extrabold uppercase tracking-wide text-white">
                Mais vendido
              </span>
              <h3 className="lv-title text-xl text-[var(--lv-cream)]">Plano completo</h3>
              <span className="mt-2 flex w-fit items-center gap-1.5 rounded-full bg-[var(--lv-orange)]/15 px-3 py-1 text-[0.68rem] font-bold uppercase tracking-wide text-[var(--lv-orange)]">
                <ZapIcon />2x mais conteúdo
              </span>
              <ul className="mt-4 flex flex-col gap-2.5">
                {[
                  "Tudo do plano básico",
                  "+ Receitas de picolés recheados premium",
                  "+ Os 6 bônus exclusivos (valor R$162)",
                  "+ Tabela de precificação e lucro",
                  "+ Guia de vendas no WhatsApp e Instagram",
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
                <p className="lv-title text-5xl text-[var(--lv-orange)]">R$27,90</p>
                <p className="text-xs text-[var(--lv-muted)]">ou 4x de R$7,48 no cartão</p>
              </div>
              <div className="mt-5">
                <Cta href={CHECKOUT_COMPLETO} location="plano-completo">
                  Quero o plano completo
                </Cta>
              </div>
            </div>
          </div>

          <p className="mt-6 flex flex-wrap items-center justify-center gap-x-2 gap-y-1 text-center text-xs font-medium text-[var(--lv-muted)]">
            <LockIcon />
            Compra 100% segura • Acesso imediato no WhatsApp e e-mail • Garantia de 7 dias
          </p>
        </section>
      </div>

      <footer className="mt-14 border-t border-[var(--lv-border)]/60 bg-black/30 px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-[var(--lv-muted)]/80">
          Este é um produto digital. O resultado depende da aplicação das receitas. +100 Receitas de Picolés Gourmet.
          Todos os direitos reservados.
        </p>
      </footer>
      </main>
    </>
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
        className="flex w-full flex-col items-center justify-center rounded-full border-2 border-[var(--lv-orange)] px-6 py-3.5 text-center font-extrabold text-[var(--lv-orange)] transition-colors hover:bg-[var(--lv-orange)]/10 active:scale-95"
      >
        <span className="lv-title text-base tracking-wide sm:text-lg">{children}</span>
      </a>
    )
  }
  return (
    <a
      {...linkProps}
      className="lv-cta lv-cta-pulse flex w-full flex-col items-center justify-center rounded-full px-6 py-4 text-center font-extrabold text-white transition-transform active:scale-95"
    >
      <span className="lv-title text-base tracking-wide sm:text-lg">{children}</span>
      {sub ? <span className="mt-0.5 text-xs font-semibold text-white/90">{sub}</span> : null}
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
