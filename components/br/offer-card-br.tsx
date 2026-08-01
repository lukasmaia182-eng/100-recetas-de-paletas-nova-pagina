import Image from "next/image"
import { BuyButton } from "../buy-button"

const includes = [
  "100 receitas organizadas",
  "Ingredientes e quantidades",
  "Preparo passo a passo",
  "Bases cremosas e com frutas",
  "Recheios e combinações",
  "Sabores econômicos",
  "Sabores premium",
  "Paletas inspiradas em sobremesas",
  "Mini paletas para festas e eventos",
  "Dicas de textura",
  "Ideias de apresentação",
  "Acesso digital imediato",
]

const bonuses = [
  "Bônus: Preço Certo para Cada Paleta",
  "Bônus: 12 Cardápios Prontos de Paletas",
  "Bônus: 50 Mensagens Prontas para Vender",
  "Bônus: 30 Combos Lucrativos de Paletas",
]

export function OfferCardBr({
  price = "R$ 19,90",
  refPrice = "R$ 47,00",
  checkoutUrl,
  imageSrc = "/images/br-oferta.png",
  imageAlt = "Mulher segurando o livro 'Paletas Recheadas Lucrativas - 100 receitas para fazer e vender' com uma variedade de paletas recheadas gourmet à frente.",
}: {
  price?: string
  refPrice?: string
  checkoutUrl?: string
  imageSrc?: string
  imageAlt?: string
} = {}) {
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
            100 Receitas de Paletas Recheadas
          </p>

          <div className="mx-auto mt-4 max-w-xs overflow-hidden rounded-2xl">
            <Image
              src={imageSrc || "/placeholder.svg"}
              alt={imageAlt}
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
              Bônus inclusos grátis
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
              Valor de referência:{" "}
              <span className="font-semibold text-muted-foreground line-through">{refPrice}</span>
            </p>
            <p className="mt-1 font-display text-5xl font-extrabold text-primary">{price}</p>
            <p className="mt-1 text-sm font-semibold text-pistache">
              Pagamento único · Sem mensalidades · Produto digital
            </p>
          </div>

          <div className="mt-5">
            <BuyButton href={checkoutUrl} subLabel="Compra 100% segura">
              SIM, QUERO AS 100 RECEITAS
            </BuyButton>
          </div>
        </div>
      </div>
    </section>
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
