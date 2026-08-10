import { HeroBrpv1 } from "@/components/brpv1/hero-brpv1"
import { ShowcaseBrpv1 } from "@/components/brpv1/showcase-brpv1"
import { MaterialBrpv1 } from "@/components/brpv1/material-brpv1"
import { StepsBrpv1 } from "@/components/brpv1/steps-brpv1"
import { GalleryBrpv1 } from "@/components/brpv1/gallery-brpv1"
import { AnatomyBrpv1 } from "@/components/brpv1/anatomy-brpv1"
import { BonusesBrpv1 } from "@/components/brpv1/bonuses-brpv1"
import { OfferBrpv1, GuaranteeBrpv1 } from "@/components/brpv1/offer-brpv1"
import { FaqBrpv1 } from "@/components/brpv1/faq-brpv1"
import { FinalCtaBrpv1 } from "@/components/brpv1/final-cta-brpv1"

const CHECKOUT_URL_BR = "https://pay.hotmart.com/Q106988016O?off=lhp0ja0w&checkoutMode=10"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroBrpv1 checkoutUrl={CHECKOUT_URL_BR} />
      <ShowcaseBrpv1 />
      <MaterialBrpv1 checkoutUrl={CHECKOUT_URL_BR} />
      <StepsBrpv1 />
      <GalleryBrpv1 checkoutUrl={CHECKOUT_URL_BR} />
      <AnatomyBrpv1 />
      <BonusesBrpv1 />
      <OfferBrpv1 checkoutUrl={CHECKOUT_URL_BR} />
      <GuaranteeBrpv1 />
      <FaqBrpv1 />
      <FinalCtaBrpv1 checkoutUrl={CHECKOUT_URL_BR} />

      <footer className="bg-chocolate px-5 py-10 text-center">
        <p className="font-display text-lg font-extrabold text-creme">Picolés Recheados Lucrativos</p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm font-semibold text-creme/80">
          <li>Termos de Uso</li>
          <li>Política de Privacidade</li>
          <li>Contato</li>
        </ul>
        <p className="mx-auto mt-6 max-w-md text-xs leading-relaxed text-creme/60">
          Este é um produto digital. O resultado depende da aplicação das receitas. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
