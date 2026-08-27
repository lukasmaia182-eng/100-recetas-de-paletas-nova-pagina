import Image from "next/image"

const steps = [
  ["01", "Escolha o sabor", "Encontre uma receita que combine com o seu momento ou com o cardápio que você quer montar."],
  ["02", "Prepare o recheio", "Separe os ingredientes e siga as quantidades indicadas no passo a passo."],
  ["03", "Monte e congele", "Aprenda a preencher, fechar e levar os picolés ao congelador com mais segurança."],
  ["04", "Finalize e apresente", "Use as ideias de acabamento e apresentação para servir em casa ou oferecer aos clientes."],
]

const details = ["Ingredientes e quantidades", "Utensílios necessários", "Modo de preparo", "Dica de textura", "Variações de sabor"]
const flavors = [
  ["/images/arte/sabor-morango.png", "Morango"],
  ["/images/arte/sabor-chocolate.png", "Chocolate"],
  ["/images/arte/sabor-pistache.png", "Pistache"],
  ["/images/arte/sabor-frutas-vermelhas.png", "Frutas vermelhas"],
  ["/images/arte/sabor-cookies.png", "Cookies com creme"],
  ["/images/arte/sabor-maracuja.png", "Maracujá"],
]

export function ValueSectionsBr() {
  return (
    <div className="flex flex-col gap-8 px-5 pb-8">
      <section className="mx-auto w-full max-w-md rounded-3xl bg-card p-5 shadow-lg shadow-chocolate/5 sm:p-7">
        <p className="text-center font-display text-sm font-extrabold uppercase tracking-widest text-primary">Por dentro do material</p>
        <h2 className="mt-2 text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Receitas para consultar, preparar e repetir</h2>
        <div className="mt-5 grid grid-cols-2 gap-3">
          {details.map((item) => <div key={item} className="rounded-2xl bg-secondary p-3 text-center text-sm font-bold leading-snug text-chocolate">{item}</div>)}
        </div>
      </section>

      <section className="mx-auto w-full max-w-md">
        <p className="text-center font-display text-sm font-extrabold uppercase tracking-widest text-pistache">Um método simples</p>
        <h2 className="mt-2 text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Do preparo à apresentação, sem improviso</h2>
        <div className="mt-5 flex flex-col gap-3">
          {steps.map(([number, title, text]) => (
            <article key={number} className="flex gap-3 rounded-2xl bg-card p-4 shadow-sm">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">{number}</span>
              <div><h3 className="font-display text-base font-extrabold text-chocolate">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-chocolate p-5 sm:p-7">
        <div className="flex items-center gap-4">
          <div className="w-1/4 max-w-24 shrink-0 overflow-hidden rounded-2xl sm:max-w-28"><Image src="/images/arte/praticidade-portugues.png" alt="Comparação visual de uma receita organizada para consulta" width={500} height={500} className="aspect-square h-auto w-full object-cover" /></div>
          <div><p className="font-display text-sm font-extrabold uppercase tracking-widest text-creme/70">Mais praticidade</p><h2 className="mt-2 font-display text-2xl font-extrabold text-creme text-balance">Abra, consulte e prepare</h2><p className="mt-2 text-sm leading-relaxed text-creme/80">Em vez de juntar anotações soltas, você encontra o preparo organizado em um só lugar.</p></div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-md">
        <div className="overflow-hidden rounded-3xl bg-card shadow-md">
          <Image src="/images/arte/paletas-portugues.png" alt="Composição visual com diferentes picolés gourmet" width={1080} height={1350} className="h-auto max-h-72 w-full object-cover object-center sm:max-h-80" />
        </div>
        <h2 className="mt-6 text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Alguns dos sabores para explorar</h2>
        <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">Uma seleção visual para ajudar você a imaginar seu próximo cardápio.</p>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {flavors.map(([src, name]) => <figure key={name} className="min-w-0 overflow-hidden rounded-2xl bg-card shadow-sm"><Image src={src} alt={`Arte do sabor ${name}`} width={360} height={450} loading="eager" className="aspect-[4/5] h-auto w-full object-cover" /><figcaption className="truncate p-2 text-center text-sm font-bold text-chocolate">{name}</figcaption></figure>)}
        </div>
        <div className="mt-4 overflow-hidden rounded-3xl bg-card shadow-md">
          <Image src="/images/arte/paletas-portugues.png" alt="Seleção de picolés gourmet de vários sabores" width={1080} height={1350} className="h-auto max-h-72 w-full object-cover object-center sm:max-h-80" />
        </div>
      </section>
    </div>
  )
}

export function ContentsBr() {
  return <section className="mx-auto mb-8 max-w-md px-5"><div className="rounded-3xl bg-secondary p-5 text-center"><h2 className="font-display text-2xl font-extrabold text-chocolate">Veja tudo o que você recebe</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">Um recetário digital para acessar pelo celular, tablet ou computador, com opção de imprimir as páginas que quiser usar no preparo.</p></div></section>
}

export function BrFooter() { return <footer className="bg-chocolate px-5 py-8 text-center"><p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">Este é um produto digital. Os resultados dependem da aplicação das receitas, dos custos, da divulgação e da demanda local. Todos os direitos reservados.</p></footer> }

export const brValueSections = { ValueSectionsBr, ContentsBr, BrFooter }

export default ValueSectionsBr

// The named export keeps the page composition explicit while the default export preserves import flexibility.
void brValueSections
