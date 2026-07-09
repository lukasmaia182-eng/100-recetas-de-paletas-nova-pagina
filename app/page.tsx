import { HeroSection } from "@/components/hero-section"
import { PracticeSection } from "@/components/practice-section"
import { IdealSection } from "@/components/ideal-section"
import { ScarcitySection } from "@/components/scarcity-section"
import { SocialProof } from "@/components/social-proof"
import { OfferCard } from "@/components/offer-card"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PracticeSection />
      <IdealSection />
      <ScarcitySection />
      <SocialProof />
      <OfferCard />
      <GuaranteeSection />
      <FaqSection />

      <footer className="bg-chocolate px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
          Este es un producto digital. El resultado depende de la aplicación de las recetas. 100 Paletas Rellenas y
          Cremosas. Todos los derechos reservados.
        </p>
      </footer>
    </main>
  )
}
