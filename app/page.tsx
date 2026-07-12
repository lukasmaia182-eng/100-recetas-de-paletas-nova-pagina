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
        headline="Ahora puedes preparar paletas cremosas para vender todos los días"
        subheadline={
          <>
            <span className="block font-display text-xl font-extrabold text-chocolate sm:text-2xl">
              + de 100 Recetas de Paletas Rellenas, Cremosas y Fáciles de Vender.
            </span>
            <span className="mt-2 block">
              Para quien quiere ganar dinero desde casa sin necesitar ingredientes caros ni pasar horas inventando
              recetas.
            </span>
          </>
        }
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
