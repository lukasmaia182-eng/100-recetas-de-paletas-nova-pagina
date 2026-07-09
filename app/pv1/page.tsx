import { HeroSection } from "@/components/hero-section"
import { PracticeSection } from "@/components/practice-section"
import { IdealSection } from "@/components/ideal-section"
import { ScarcitySection } from "@/components/scarcity-section"
import { SocialProof } from "@/components/social-proof"
import { OfferCard } from "@/components/offer-card"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { TrackCheckoutProvider } from "@/components/checkout-tracking"

export default function Pv1Page() {
  return (
    <TrackCheckoutProvider>
    <main className="min-h-screen bg-background">
      <HeroSection
        headline={
          <>
            Alguien en tu vecindario… va a empezar a vender paletas heladas.{" "}
            <span className="text-primary">¿Serás el primero… o solo mirarás?</span>
          </>
        }
        subheadline="Creas tus primeras recetas… y de repente… tendrás filas de clientes que querrán comprar más todos los días."
        belowImageText="Con 100 recetas listas para vender, empiezas hoy mismo a recibir pedidos y a generar ingresos desde tu cocina, aunque nunca antes hayas hecho una paleta."
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
    </TrackCheckoutProvider>
  )
}
