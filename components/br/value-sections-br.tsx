import Image from "next/image"
import { BuyButton } from "../buy-button"

const previews = [
  ["/images/brpv1/sabor-frutas.png", "Frutas vermelhas"],
  ["/images/brpv1/sabor-cookies.png", "Cookies com creme"],
  ["/images/brpv1/sabor-morango.png", "Morango cremoso"],
  ["/images/brpv1/sabor-pistache.png", "Pistache"],
  ["/images/brpv1/sabor-chocolate.png", "Chocolate"],
  ["/images/brpv1/sabor-caramelo.png", "Caramelo"],
]

const features = [
  ["Ingredientes", "Lista organizada com quantidades para separar antes de começar."],
  ["Utensílios", "Saiba o que deixar à mão para preparar cada sabor."],
  ["Modo de preparo", "Passo a passo simples para acompanhar durante a receita."],
  ["Dica profissional", "Detalhes que ajudam na textura e no acabamento."],
  ["Variações", "Novas possibilidades para adaptar sabores e combinações."],
  ["Foto do resultado", "Veja a referência visual do picolé pronto."],
]

const ideal = [
  "Aprender receitas de picolés gourmet recheados",
  "Ter sabores diferentes organizados em um único lugar",
  "Preparar picolés com maior percepção de valor",
  "Conhecer combinações de recheios e coberturas",
  "Começar mesmo sem experiência profissional",
  "Consultar receitas durante o preparo pelo celular",
]

function PreviewImage({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return <Image src={src} alt={alt} width={520} height={680} className={`h-auto w-full object-cover ${className}`} loading="lazy" sizes="(max-width: 640px) 42vw, 180px" />
}

export function UrgencyBarBr() {
  return <div className="bg-primary px-4 py-2 text-center text-xs font-extrabold uppercase tracking-wide text-primary-foreground">Oferta especial por tempo limitado <span className="ml-2 font-medium normal-case tracking-normal opacity-90">Compra segura · Acesso digital imediato</span></div>
}

export function ValueSectionsBr({ checkoutUrl }: { checkoutUrl?: string }) {
  return (
    <div className="flex flex-col gap-10 px-5 pb-10">
      <section className="mx-auto w-full max-w-md text-center">
        <p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Entrega imediata</p>
        <h2 className="mt-2 font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Tudo organizado para consultar onde você estiver</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">Você recebe o material digital e pode acessar pelo celular, tablet ou computador.</p>
        <div className="mt-5 grid grid-cols-3 gap-2 text-xs font-bold text-chocolate"><div className="rounded-2xl bg-card p-3 shadow-sm">Celular</div><div className="rounded-2xl bg-card p-3 shadow-sm">Tablet</div><div className="rounded-2xl bg-card p-3 shadow-sm">Computador</div></div>
      </section>

      <section className="mx-auto w-full max-w-md">
        <p className="text-center font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Veja por dentro</p>
        <h2 className="mt-2 text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Veja as receitas que você vai receber na prática</h2>
        <p className="mt-2 text-center text-sm leading-relaxed text-muted-foreground">Não é uma promessa abstrata: estas são algumas das receitas que fazem parte do material.</p>
        <div className="mt-5 flex snap-x gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible">{previews.map(([src, name]) => <figure key={name} className="w-40 shrink-0 snap-start overflow-hidden rounded-2xl bg-card shadow-md sm:w-auto"><PreviewImage src={src} alt={`Preview da receita ${name}`} /><figcaption className="p-3 text-center text-sm font-bold text-chocolate">{name}</figcaption></figure>)}</div>
        <div className="mt-5"><BuyButton href={checkoutUrl} subLabel="Acesso digital imediato">QUERO ACESSAR AS RECEITAS</BuyButton></div>
      </section>

      <section className="mx-auto w-full max-w-md rounded-3xl bg-card p-5 shadow-lg sm:p-7">
        <p className="text-center font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary">É simples começar</p>
        <h2 className="mt-2 text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Escolha, prepare e finalize</h2>
        <div className="mt-5 flex flex-col gap-3">{[["01", "Escolha a receita", "Encontre o sabor que deseja preparar."], ["02", "Siga o passo a passo", "Veja ingredientes, quantidades, utensílios e preparo."], ["03", "Prepare seu picolé", "Finalize com recheios e coberturas e tenha seu sabor pronto."]].map(([num, title, text]) => <article key={num} className="flex gap-3 rounded-2xl bg-secondary p-4"><span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-sm font-extrabold text-primary-foreground">{num}</span><div><h3 className="font-display font-extrabold text-chocolate">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></div></article>)}</div>
        <div className="mt-5"><BuyButton href={checkoutUrl} subLabel="Pagamento único">QUERO MINHAS RECEITAS</BuyButton></div>
      </section>

      <section className="mx-auto w-full max-w-md"><h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">E isso é apenas uma pequena parte...</h2><div className="mt-5 grid grid-cols-3 gap-2">{previews.map(([src, name]) => <div key={`mini-${name}`} className="overflow-hidden rounded-xl shadow-sm"><PreviewImage src={src} alt={`Miniatura ${name}`} /></div>)}</div></section>

      <section className="mx-auto w-full max-w-md"><p className="text-center font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Biblioteca visual</p><h2 className="mt-2 text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Cada receita já vem organizada para você</h2><div className="mt-5 grid grid-cols-2 gap-3">{features.map(([title, text]) => <article key={title} className="rounded-2xl bg-card p-4 shadow-sm"><h3 className="font-display text-base font-extrabold text-chocolate">{title}</h3><p className="mt-1 text-sm leading-relaxed text-muted-foreground">{text}</p></article>)}</div></section>

      <section className="mx-auto w-full max-w-md rounded-3xl bg-secondary p-5 sm:p-7"><p className="text-center font-display text-xs font-extrabold uppercase tracking-[0.2em] text-primary">Método Picolé Recheado Lucrativo</p><h2 className="mt-2 text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Um caminho simples da escolha do sabor até o produto pronto</h2><div className="mt-5 grid grid-cols-2 gap-3">{["Escolha", "Prepare", "Recheie e congele", "Finalize"].map((item, index) => <div key={item} className="rounded-2xl bg-card p-4 text-center shadow-sm"><span className="font-display text-xs font-extrabold text-primary">0{index + 1}</span><p className="mt-1 font-display font-extrabold text-chocolate">{item}</p></div>)}</div></section>

      <section className="mx-auto w-full max-w-md"><h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">Este material é ideal para você que deseja:</h2><ul className="mt-5 flex flex-col gap-2">{ideal.map((item) => <li key={item} className="flex gap-3 rounded-2xl bg-card p-3 text-sm font-semibold leading-relaxed text-chocolate shadow-sm"><span className="text-primary">✓</span>{item}</li>)}</ul></section>

      <section className="mx-auto w-full max-w-md overflow-hidden rounded-3xl bg-chocolate p-5 text-center sm:p-7"><p className="font-display text-xs font-extrabold uppercase tracking-[0.2em] text-creme/70">Aproveite a condição especial</p><h2 className="mt-2 font-display text-2xl font-extrabold text-creme text-balance sm:text-3xl">Tenha acesso à coleção completa e escolha sua primeira receita.</h2><div className="mt-5"><BuyButton href={checkoutUrl} subLabel="Oferta por tempo limitado">QUERO GARANTIR MINHAS RECEITAS</BuyButton></div></section>
    </div>
  )
}

export function ContentsBr() { return <section className="mx-auto mb-8 max-w-md px-5"><div className="rounded-3xl bg-secondary p-5 text-center"><h2 className="font-display text-2xl font-extrabold text-chocolate">Tudo o que você vai receber</h2><p className="mt-2 text-sm leading-relaxed text-muted-foreground">+100 receitas visuais, ingredientes, utensílios, modo de preparo, dicas, variações, recheios e coberturas para consultar pelo celular, tablet ou computador.</p></div></section> }
export function BrFooter() { return <footer className="bg-chocolate px-5 py-8 text-center"><p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">Este é um produto digital. Os resultados dependem da aplicação das receitas, dos custos, da divulgação e da demanda local. Todos os direitos reservados.</p></footer> }
export const brValueSections = { ValueSectionsBr, ContentsBr, BrFooter, UrgencyBarBr }
export default ValueSectionsBr
void brValueSections
