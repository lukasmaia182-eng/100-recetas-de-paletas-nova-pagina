import dynamic from "next/dynamic"
import { HeroSectionBr } from "@/components/br/hero-section-br"
import { PracticeSectionBr } from "@/components/br/practice-section-br"
import { IdealSectionBr } from "@/components/br/ideal-section-br"
import { SocialProofBr } from "@/components/br/social-proof-br"
import { OfferCardBr } from "@/components/br/offer-card-br"
import { GuaranteeSectionBr } from "@/components/br/guarantee-section-br"

const ScarcitySectionBr = dynamic(() => import("@/components/br/scarcity-section-br").then((mod) => mod.ScarcitySectionBr))
const FaqSectionBr = dynamic(() => import("@/components/br/faq-section-br").then((mod) => mod.FaqSectionBr))

const CHECKOUT_URL_BR = "https://pay.hotmart.com/L102630763K?off=6wfgbtwd&checkoutMode=10"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSectionBr
        headline={
          <span className="text-verde-cta">
            Agora você pode fazer picolés gourmet recheados para vender todos os dias
+ de 100 Receitas de Picolés Gourmet Recheados, Cremosos e Fáceis de Vender.
          </span>
        }
        subheadline={
          <>
            <span className="block font-display text-xl font-extrabold text-chocolate sm:text-2xl">
            
            </span>
            <span className="mt-2 block">
            </span>
          </>
        }
        imageSrc="/images/ChatGPT Image 27 de ago. de 2026, 10_53_41.png"
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
