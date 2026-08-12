import { HeroSectionBr } from "@/components/br/hero-section-br"
import { PracticeSectionBr } from "@/components/br/practice-section-br"
import { IdealSectionBr } from "@/components/br/ideal-section-br"
import { ScarcitySectionBr } from "@/components/br/scarcity-section-br"
import { SocialProofBr } from "@/components/br/social-proof-br"
import { OfferCardBr } from "@/components/br/offer-card-br"
import { GuaranteeSectionBr } from "@/components/br/guarantee-section-br"
import { FaqSectionBr } from "@/components/br/faq-section-br"

const CHECKOUT_URL_BR = "https://pay.hotmart.com/Q106988016O?off=lhp0ja0w&checkoutMode=10"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSectionBr
        headline={
          <span className="text-verde-cta">
            As receitas que vão fazer você vender +300 picolés este mês e transformar sua cozinha em uma fonte de renda extra
          </span>
        }
        subheadline={
          <span className="block font-display text-xl font-extrabold text-chocolate sm:text-2xl">
            + de 100 Receitas de Picolés Gourmet Recheados, Cremosos e Fáceis de Vender.
          </span>
        }
        imageSrc="/images/br-hero-mockup.png"
        imageAlt="Mockup da oferta 'Picolés Recheados Lucrativos' com o livro de 100 receitas, caixa de presente com picolés gourmet de vários sabores e cards de bônus como mensagens prontas para vender, calcule seu preço certo e dicas para vender mais."
        checkoutUrl={CHECKOUT_URL_BR}
      />
      <PracticeSectionBr />
      <IdealSectionBr />
      <ScarcitySectionBr checkoutUrl={CHECKOUT_URL_BR} />
      <SocialProofBr />
      <OfferCardBr checkoutUrl={CHECKOUT_URL_BR} />
      <GuaranteeSectionBr />
      <FaqSectionBr checkoutUrl={CHECKOUT_URL_BR} />

      <footer className="bg-chocolate px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
          Este é um produto digital. O resultado depende da aplicação das receitas. 100 Picolés Gourmet Recheados e
          Cremosos. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
