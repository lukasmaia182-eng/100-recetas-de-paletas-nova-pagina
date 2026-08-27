import dynamic from "next/dynamic"
import { HeroSectionBr } from "@/components/br/hero-section-br"
import { PracticeSectionBr } from "@/components/br/practice-section-br"
import { IdealSectionBr } from "@/components/br/ideal-section-br"
import { SocialProofBr } from "@/components/br/social-proof-br"
import { OfferCardBr } from "@/components/br/offer-card-br"
import { GuaranteeSectionBr } from "@/components/br/guarantee-section-br"
import { ValueSectionsBr, ContentsBr, BrFooter } from "@/components/br/value-sections-br"

const ScarcitySectionBr = dynamic(() => import("@/components/br/scarcity-section-br").then((mod) => mod.ScarcitySectionBr))
const FaqSectionBr = dynamic(() => import("@/components/br/faq-section-br").then((mod) => mod.FaqSectionBr))

const CHECKOUT_URL_BR = "https://pay.hotmart.com/L102630763K?off=6wfgbtwd&checkoutMode=10"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSectionBr
        headline={
          <>
            Aprenda a preparar <span className="text-verde-cta">+100 receitas de picolés gourmet</span> recheados, cremosos e fáceis de consultar.
          </>
        }
        subheadline="Ingredientes, quantidades e passo a passo para você preparar sabores variados em casa e organizar seu próprio cardápio."
        imageSrc="/images/arte/material-portugues.png"
        imageAlt="Mockup da oferta 'Picolés Recheados Lucrativos' com o livro de 100 receitas, caixa de presente com picolés gourmet de vários sabores e cards de bônus como mensagens prontas para vender, calcule seu preço certo e dicas para vender mais."
        checkoutUrl={CHECKOUT_URL_BR}
      />
      <ValueSectionsBr />
      <PracticeSectionBr />
      <IdealSectionBr />
      <ScarcitySectionBr checkoutUrl={CHECKOUT_URL_BR} />
      <SocialProofBr />
      <OfferCardBr checkoutUrl={CHECKOUT_URL_BR} />
      <ContentsBr />
      <GuaranteeSectionBr />
      <FaqSectionBr checkoutUrl={CHECKOUT_URL_BR} />
      <BrFooter />
    </main>
  )
}
