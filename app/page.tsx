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
      <HeroSection
        headline={
          <>
            Alguien de tu barrio va a empezar a{" "}
            <span className="text-amarillo">vender paletas gourmet y a ganar mucho dinero.</span>{" "}
            <span className="text-verde-cta">¿Serás tú el primero en empezar?...</span>{" "}
            <span className="text-primary">¿o simplemente te quedarás mirando cómo se forra?</span>
          </>
        }
        subheadline=""
        imageSrc="/images/pv1-antes-despues.png"
        imageAlt="Comparación antes y después: una mujer preocupada con cuentas por pagar frente a la misma mujer sonriente mostrando ventas de $12,680 MXN y una bandeja de paletas rellenas. Texto: ¿En cuál de estas situaciones te encontrarás la semana que viene?"
      />
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
