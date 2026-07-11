"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { BuyButton } from "@/components/buy-button"

const PRICE = "R$ 19,90"
const PRICE_REF = "R$ 47,00"

/* ---------------------------------------------------------------- */
/* Hero                                                              */
/* ---------------------------------------------------------------- */
const heroBullets = [
  "100 receitas explicadas",
  "Ingredientes fáceis de achar",
  "Opções econômicas e premium",
  "Ideal para iniciantes",
  "Acesso digital imediato",
]

export function Pv3Hero() {
  return (
    <section className="relative overflow-hidden px-5 pt-3 pb-8 sm:pt-5">
      <div className="mx-auto flex max-w-md flex-col items-center text-center">
        <h1 className="w-full font-display text-2xl font-extrabold leading-tight text-chocolate text-balance sm:text-3xl">
          Alguém na sua vizinhança… vai começar a vender picolés gourmet.{" "}
          <span className="text-primary">Você será o primeiro… ou só vai assistir?</span>
        </h1>

        <p className="mt-2 text-base leading-relaxed text-foreground text-pretty sm:text-lg">
          Você cria suas primeiras receitas… e de repente… tem filas de clientes querendo comprar mais todos os dias.
        </p>

        <div className="relative mt-4 w-full">
          <div className="overflow-hidden rounded-3xl shadow-xl shadow-primary/10">
            <Image
              src="/images/pv1-antes-despues.png"
              alt="Comparação antes e depois: uma mulher preocupada com contas a pagar e a mesma mulher sorrindo mostrando vendas e uma bandeja de picolés recheados."
              width={800}
              height={800}
              className="h-auto w-full object-cover"
              priority
            />
          </div>
        </div>

        <div className="mt-4 flex w-full flex-col items-center gap-1">
          <p className="text-sm font-semibold text-muted-foreground">
            De <span className="line-through">{PRICE_REF}</span> por só hoje
          </p>
          <p className="font-display text-5xl font-extrabold text-primary">{PRICE}</p>
        </div>

        <div className="mt-4 w-full">
          <BuyButton subLabel="Pagamento único · Sem mensalidades · Acesso imediato">QUERO AS 100 RECEITAS</BuyButton>
        </div>

        <p className="mt-2 text-sm font-medium text-muted-foreground">
          Compra 100% segura · 7 dias de garantia · Download na hora
        </p>

        <div className="mt-4 w-full text-center">
          <p className="text-base leading-relaxed text-foreground text-pretty sm:text-lg">
            Com 100 receitas prontas para vender, você começa hoje mesmo a receber pedidos e a gerar renda da sua
            cozinha, mesmo que nunca tenha feito um picolé antes.
          </p>
          <p className="mt-1.5 font-display text-xl font-extrabold leading-snug text-primary text-balance sm:text-2xl">
            E o dinheiro começa a entrar toda semana.
          </p>
        </div>

        <div className="mt-6 w-full">
          <Pv3Benefits />
        </div>

        <p className="mt-5 text-base leading-relaxed text-foreground text-pretty sm:text-lg">
          Pare de desperdiçar ingredientes inventando receitas do zero. Com o passo a passo pronto você prepara sabores
          de chocolate, frutas, doce de leite, leite condensado e sobremesas famosas, e monta um cardápio que pode
          vender desde o primeiro dia.
        </p>

        <ul className="mt-5 grid w-full grid-cols-2 gap-3 text-left">
          {heroBullets.map((bullet) => (
            <li key={bullet} className="flex items-start gap-2 rounded-2xl bg-card p-3 shadow-sm">
              <CheckIcon />
              <span className="text-sm font-semibold leading-snug text-chocolate">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Galeria de receitas (marquee)                                     */
/* ---------------------------------------------------------------- */
type Recipe = {
  src: string
  numero: string
  nombre: string
  descripcion: string
  categoria: string
}

const gallery: Recipe[] = [
  { src: "/images/pv2/paleta-1.png", numero: "RECEITA 33", nombre: "Picolé de Chocolate", descripcion: "com biscoito recheado", categoria: "Com Biscoito" },
  { src: "/images/pv2/paleta-2.png", numero: "RECEITA 32", nombre: "Picolé de Morango", descripcion: "com biscoito de baunilha", categoria: "Com Biscoito" },
  { src: "/images/pv2/paleta-3.png", numero: "RECEITA 39", nombre: "Picolé de Doce de Leite", descripcion: "recheado de brigadeiro", categoria: "Recheados" },
  { src: "/images/pv2/paleta-4.png", numero: "RECEITA 28", nombre: "Picolé de Manga", descripcion: "recheado de maracujá", categoria: "Recheados" },
  { src: "/images/pv2/paleta-5.png", numero: "RECEITA 31", nombre: "Picolé de Baunilha", descripcion: "com biscoito de chocolate", categoria: "Com Biscoito" },
  { src: "/images/pv2/paleta-6.png", numero: "RECEITA 35", nombre: "Picolé de Coco", descripcion: "com biscoito doce", categoria: "Com Biscoito" },
  { src: "/images/pv2/paleta-7.png", numero: "RECEITA 29", nombre: "Picolé de Pistache", descripcion: "recheado de creme", categoria: "Recheados" },
  { src: "/images/pv2/paleta-8.png", numero: "RECEITA 30", nombre: "Picolé de Cheesecake", descripcion: "recheado de frutas vermelhas", categoria: "Recheados" },
  { src: "/images/pv2/paleta-9.png", numero: "RECEITA 36", nombre: "Picolé de Café", descripcion: "com biscoito de chocolate", categoria: "Com Biscoito" },
]

function RecipeCard({ recipe }: { recipe: Recipe }) {
  return (
    <div className="w-56 shrink-0 overflow-hidden rounded-2xl bg-card shadow-md">
      <div className="relative aspect-[4/3]">
        <Image src={recipe.src || "/placeholder.svg"} alt={recipe.nombre} fill className="object-cover" sizes="224px" />
        <span className="absolute left-2 top-2 rounded-full bg-chocolate/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-white">
          {recipe.numero}
        </span>
        <span className="absolute right-2 top-2 rounded-full bg-primary px-2.5 py-1 text-[10px] font-bold text-primary-foreground">
          {recipe.categoria}
        </span>
      </div>
      <div className="p-4 text-left">
        <h3 className="font-display text-base font-extrabold text-chocolate">{recipe.nombre}</h3>
        <p className="mt-0.5 text-sm italic text-primary">{recipe.descripcion}</p>
        <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-muted-foreground">
          Ver receita <span aria-hidden="true">&rsaquo;</span>
        </p>
      </div>
    </div>
  )
}

function GalleryRow({ items, reverse }: { items: Recipe[]; reverse?: boolean }) {
  const loop = [...items, ...items]
  return (
    <div className="relative w-full overflow-hidden">
      <div className={`flex w-max gap-3 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {loop.map((item, index) => (
          <RecipeCard key={`${item.src}-${index}`} recipe={item} />
        ))}
      </div>
    </div>
  )
}

export function Pv3Benefits() {
  const firstRow = gallery.slice(0, 5)
  const secondRow = gallery.slice(4, 9)

  return (
    <section className="py-8">
      <div className="mx-auto mb-4 max-w-md px-5 text-center">
        <h2 className="font-display text-2xl font-extrabold uppercase text-chocolate text-balance sm:text-3xl">
          Sim! São mais de <span className="text-verde-cta">100 receitas…</span>
        </h2>
        <p className="mt-1.5 text-sm font-medium leading-relaxed text-muted-foreground text-pretty">
          Cremosos, recheados e com o sabor que todo mundo adora, prontos para preparar e vender.
        </p>
      </div>

      <div className="flex flex-col gap-3">
        <GalleryRow items={firstRow} />
        <GalleryRow items={secondRow} reverse />
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Prática                                                           */
/* ---------------------------------------------------------------- */
const products = [
  { src: "/images/product-1.png", alt: "Picolé de chocolate recheado com amendoim" },
  { src: "/images/product-2.png", alt: "Picolé de doce de leite com nozes" },
  { src: "/images/product-3.png", alt: "Picolé premium de pistache" },
]

export function Pv3Practice() {
  return (
    <section className="bg-secondary px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Veja como ficam na prática
        </h2>

        <div className="mt-5 overflow-hidden rounded-3xl shadow-lg shadow-chocolate/10">
          <Image
            src="/images/tutorial-mujer.png"
            alt="Mulher despejando mistura cremosa de morango em fôrmas de picolé ao lado de picolés já prontos"
            width={800}
            height={600}
            className="h-auto w-full object-cover"
          />
        </div>

        <div className="mt-4 grid grid-cols-3 gap-3">
          {products.map((product) => (
            <div key={product.src} className="overflow-hidden rounded-2xl bg-card shadow-md">
              <Image
                src={product.src || "/placeholder.svg"}
                alt={product.alt}
                width={400}
                height={400}
                className="h-auto w-full object-cover"
              />
            </div>
          ))}
        </div>

        <p className="mt-4 text-center text-base leading-relaxed text-foreground text-pretty">
          Cada receita reúne os ingredientes e as quantidades, o preparo passo a passo, as dicas de textura e as ideias
          de apresentação para você saber exatamente como o seu picolé vai ficar em casa.
        </p>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Ideal para você                                                   */
/* ---------------------------------------------------------------- */
const idealItems = [
  {
    title: "Criar um cardápio variado",
    text: "Tenha opções cremosas, de frutas, econômicas e premium para diferentes clientes.",
  },
  {
    title: "Melhorar a textura",
    text: "Siga quantidades e recomendações que ajudam a reduzir erros comuns.",
  },
  {
    title: "Evitar testes desnecessários",
    text: "Não desperdice tempo nem ingredientes inventando cada combinação do zero.",
  },
  {
    title: "Começar como iniciante",
    text: "Consulte instruções claras e organizadas, mesmo que nunca tenha feito picolés recheados.",
  },
]

export function Pv3Ideal() {
  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Este livro de receitas foi criado para você que…
        </h2>

        <ul className="mt-5 flex flex-col gap-3">
          {idealItems.map((item, index) => (
            <li key={item.title} className="flex gap-4 rounded-2xl bg-card p-4 shadow-sm">
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary font-display text-base font-extrabold text-primary-foreground">
                {index + 1}
              </span>
              <div>
                <h3 className="font-display text-lg font-bold leading-tight text-chocolate">{item.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Escassez (contador)                                               */
/* ---------------------------------------------------------------- */
const START_SECONDS = 15 * 60

export function Pv3Scarcity() {
  const [secondsLeft, setSecondsLeft] = useState(START_SECONDS)

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft((prev) => (prev <= 0 ? 0 : prev - 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  const minutes = Math.floor(secondsLeft / 60)
  const seconds = secondsLeft % 60

  return (
    <section className="bg-chocolate px-5 py-8 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-2xl font-extrabold text-creme text-balance sm:text-3xl">
          Oferta por tempo limitado
        </h2>

        <div className="mt-5 flex items-center justify-center gap-3">
          <TimeBox value={minutes} label="MIN" />
          <span className="font-display text-3xl font-extrabold text-primary">:</span>
          <TimeBox value={seconds} label="SEG" />
        </div>

        <p className="mt-4 text-base leading-relaxed text-creme/90 text-pretty">
          O preço de {PRICE} é só por hoje. Quando o cronômetro chegar a zero, o valor volta a subir. Pagamento único,
          sem mensalidades e com acesso digital. Garanta seu acesso agora mesmo.
        </p>

        <div className="mt-5">
          <BuyButton subLabel={`Só hoje por ${PRICE} em vez de ${PRICE_REF}`} />
        </div>
      </div>
    </section>
  )
}

function TimeBox({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-creme font-display text-4xl font-extrabold tabular-nums text-chocolate shadow-lg">
        {String(value).padStart(2, "0")}
      </span>
      <span className="mt-2 text-xs font-bold tracking-widest text-creme/70">{label}</span>
    </div>
  )
}

/* ---------------------------------------------------------------- */
/* Prova social (marquee)                                            */
/* ---------------------------------------------------------------- */
const slides = [
  {
    src: "/images/social-1.png",
    alt: "Variedade de picolés cremosos coloridos",
    text: "Receitas organizadas e fáceis de consultar.",
  },
  {
    src: "/images/social-2.png",
    alt: "Mão segurando um picolé de morango cremoso",
    text: "Ingredientes e quantidades em um só lugar.",
  },
  {
    src: "/images/social-3.png",
    alt: "Mini picolés servidos em uma festa",
    text: "Preparo explicado passo a passo.",
  },
  {
    src: "/images/social-4.png",
    alt: "Picolé estilo cheesecake aberto",
    text: "Opções econômicas e premium para criar um cardápio mais variado.",
  },
]

export function Pv3SocialProof() {
  const loop = [...slides, ...slides]

  return (
    <section className="overflow-hidden py-8">
      <div className="mx-auto mb-4 max-w-md px-5">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Veja como é o livro de receitas por dentro
        </h2>
      </div>

      <div className="relative w-full">
        <div className="flex w-max animate-marquee gap-4 px-5">
          {loop.map((slide, index) => (
            <figure
              key={`${slide.src}-${index}`}
              className="w-64 shrink-0 overflow-hidden rounded-3xl bg-card shadow-lg"
            >
              <Image
                src={slide.src || "/placeholder.svg"}
                alt={slide.alt}
                width={400}
                height={400}
                className="h-48 w-full object-cover"
              />
              <figcaption className="p-4">
                <p className="font-display text-sm font-bold leading-relaxed text-chocolate">{slide.text}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Oferta                                                            */
/* ---------------------------------------------------------------- */
const includes = [
  "100 receitas organizadas",
  "Ingredientes e quantidades",
  "Preparo passo a passo",
  "Bases cremosas e de frutas",
  "Recheios e combinações",
  "Sabores econômicos",
  "Sabores premium",
  "Picolés inspirados em sobremesas",
  "Mini picolés para festas e eventos",
  "Dicas de textura",
  "Ideias de apresentação",
  "Acesso digital imediato",
]

const bonuses = [
  "Bônus: Preço Justo para Cada Picolé",
  "Bônus: 12 Cardápios Prontos de Picolés",
  "Bônus: 50 Mensagens Prontas para Vender",
  "Bônus: 30 Combos Lucrativos de Picolés",
]

export function Pv3OfferCard() {
  return (
    <section id="oferta" className="scroll-mt-4 px-5 py-8">
      <div className="mx-auto max-w-md overflow-hidden rounded-3xl bg-card shadow-xl shadow-chocolate/10">
        <div className="flex items-center justify-center bg-primary px-4 py-3">
          <span className="font-display text-sm font-extrabold uppercase tracking-wide text-primary-foreground">
            Promoção de lançamento
          </span>
        </div>

        <div className="p-6">
          <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance">
            Tudo o que você vai receber
          </h2>
          <p className="mt-1.5 text-center font-display text-base font-bold text-primary">
            100 Receitas de Picolés Recheados
          </p>

          <div className="mx-auto mt-4 max-w-xs overflow-hidden rounded-2xl">
            <Image
              src="/images/ebook-mockup.png"
              alt="Livro de receitas digital de picolés exibido em celular e tablet"
              width={600}
              height={600}
              className="h-auto w-full object-contain"
            />
          </div>

          <ul className="mt-4 flex flex-col gap-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckIcon />
                <span className="text-sm font-medium leading-snug text-foreground">{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-4 rounded-2xl bg-secondary p-4">
            <p className="mb-2 text-center font-display text-sm font-extrabold uppercase tracking-wide text-primary">
              Bônus incluídos grátis
            </p>
            <ul className="flex flex-col gap-2">
              {bonuses.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <GiftIcon />
                  <span className="text-sm font-semibold leading-snug text-chocolate">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 text-center">
            <p className="text-base text-muted-foreground">
              Valor de referência: <span className="font-semibold text-muted-foreground line-through">{PRICE_REF}</span>
            </p>
            <p className="mt-1 font-display text-5xl font-extrabold text-primary">{PRICE}</p>
            <p className="mt-1 text-sm font-semibold text-pistache">
              Pagamento único · Sem mensalidades · Produto digital
            </p>
          </div>

          <div className="mt-5">
            <BuyButton subLabel="Compra 100% segura">SIM, QUERO AS 100 RECEITAS</BuyButton>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Garantia                                                          */
/* ---------------------------------------------------------------- */
export function Pv3Guarantee() {
  return (
    <section className="px-5 py-8">
      <div className="mx-auto flex max-w-md flex-col items-center gap-4 rounded-3xl bg-secondary p-7 text-center">
        <Image
          src="/images/guarantee.png"
          alt="Selo de garantia de 7 dias"
          width={200}
          height={200}
          className="h-32 w-32 object-contain"
        />
        <h2 className="font-display text-2xl font-extrabold text-chocolate text-balance">
          Teste o livro de receitas por 7 dias
        </h2>
        <p className="text-base leading-relaxed text-foreground text-pretty">
          Após a compra, você terá sete dias corridos para revisar o conteúdo. Se durante esse prazo considerar que o
          material não corresponde ao apresentado nesta página, poderá solicitar o reembolso de acordo com as condições
          da plataforma de pagamento utilizada. Assim você pode acessar o material e conferir o conteúdo com
          tranquilidade.
        </p>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* FAQ                                                               */
/* ---------------------------------------------------------------- */
const faqs = [
  {
    q: "O produto é físico ou digital?",
    a: "É um produto totalmente digital. Você não recebe nenhum material físico em casa.",
  },
  {
    q: "Como vou receber o acesso?",
    a: "Após a confirmação do pagamento, você recebe as instruções para acessar o livro de receitas digital.",
  },
  {
    q: "Preciso de experiência?",
    a: "Não. O conteúdo foi organizado para iniciantes, com ingredientes, quantidades e preparo passo a passo.",
  },
  {
    q: "Posso ver pelo meu celular?",
    a: "Sim. Você pode consultar o material pelo celular, computador ou tablet.",
  },
  {
    q: "Os ingredientes são fáceis de encontrar?",
    a: "As receitas priorizam ingredientes comuns e fáceis de encontrar. Algumas opções premium podem usar ingredientes específicos.",
  },
  {
    q: "Preciso de uma máquina profissional?",
    a: "Não. Você pode começar com utensílios básicos de cozinha e fôrmas para picolé. Os materiais necessários podem variar conforme a receita.",
  },
  {
    q: "Preciso pagar todo mês?",
    a: `Não. O preço de ${PRICE} corresponde a um pagamento único.`,
  },
  {
    q: "Posso imprimir o material?",
    a: "Sim. Você pode imprimir as páginas que preferir usar durante o preparo.",
  },
  {
    q: "As receitas servem para vender?",
    a: "Sim. O livro contém opções econômicas, premium, recheadas e mini picolés que podem ser usados para montar um cardápio. Os resultados dependem de fatores como execução, qualidade, custos, preços, divulgação e demanda local. O produto não garante ganhos.",
  },
]

export function Pv3Faq() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section className="px-5 py-8">
      <div className="mx-auto max-w-md">
        <h2 className="text-center font-display text-2xl font-extrabold text-chocolate text-balance sm:text-3xl">
          Perguntas frequentes
        </h2>

        <ul className="mt-5 flex flex-col gap-2.5">
          {faqs.map((faq, index) => {
            const isOpen = open === index
            return (
              <li key={faq.q} className="overflow-hidden rounded-2xl bg-card shadow-sm">
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-3 p-4 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base font-bold text-chocolate">{faq.q}</span>
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 24 24" fill="none" className="h-3.5 w-3.5">
                      <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                {isOpen ? <p className="px-4 pb-4 text-sm leading-relaxed text-muted-foreground">{faq.a}</p> : null}
              </li>
            )
          })}
        </ul>

        <div className="mt-5">
          <BuyButton subLabel={`Acesso imediato por apenas ${PRICE}`} />
        </div>
      </div>
    </section>
  )
}

/* ---------------------------------------------------------------- */
/* Ícones                                                            */
/* ---------------------------------------------------------------- */
function CheckIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-pistache text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  )
}

function GiftIcon() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary text-white">
      <svg viewBox="0 0 24 24" fill="none" className="h-3 w-3" aria-hidden="true">
        <path
          d="M20 12v9H4v-9M2 7h20v5H2zM12 21V7M12 7S9 2 6.5 4.5 12 7 12 7zm0 0s3-5 5.5-2.5S12 7 12 7z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  )
}
