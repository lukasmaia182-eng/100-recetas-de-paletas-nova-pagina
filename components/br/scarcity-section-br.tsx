import { BuyButton } from "../buy-button"

export function ScarcitySectionBr({
  price = "R$ 19,90",
  refPrice = "R$ 47,00",
  checkoutUrl,
  plansHref,
}: {
  price?: string
  refPrice?: string
  checkoutUrl?: string
  plansHref?: string
} = {}) {
  return (
    <section className="bg-chocolate px-5 py-8 text-center">
      <div className="mx-auto max-w-md">
        <h2 className="font-display text-2xl font-extrabold text-creme text-balance sm:text-3xl">
          Promoção de lançamento
        </h2>

        <div className="mt-6 rounded-2xl bg-creme p-5 shadow-lg">
          <p className="font-display text-xl font-extrabold leading-snug text-chocolate text-balance sm:text-2xl">
            Promoção de lançamento por tempo limitado: {price}. Depois, o valor volta para {refPrice}.
          </p>
        </div>

        <p className="mt-4 text-base leading-relaxed text-creme/90 text-pretty">
          Pagamento único, sem mensalidades e com acesso digital imediato.
        </p>

        <div className="mt-5">
          <BuyButton href={plansHref ?? checkoutUrl} subLabel={`Acesso digital imediato por ${price}`}>
            QUERO AS 100 RECEITAS
          </BuyButton>
        </div>
      </div>
    </section>
  )
}
