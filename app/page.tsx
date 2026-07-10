import Image from "next/image"
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
          <Image
            src="/images/home-headline-banner.png"
            alt="Alguien de tu barrio va a empezar a vender paletas gourmet y a ganar mucho dinero. ¿Serás tú el primero en empezar?... ¿o simplemente te quedarás mirando cómo se forra?"
            width={1536}
            height={1024}
            className="h-auto w-full rounded-2xl"
            priority
          />
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
