import { HeroSection } from "@/components/hero-section"
import { PracticeSection } from "@/components/practice-section"
import { IdealSection } from "@/components/ideal-section"
import { ScarcitySection } from "@/components/scarcity-section"
import { SocialProof } from "@/components/social-proof"
import { OfferCard } from "@/components/offer-card"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { TrackCheckoutProvider } from "@/components/checkout-tracking"
import { Pv01Pixel } from "@/components/pv01-pixel"

const PRICE = "$7,90"
const REF_PRICE = "$19,90"
const CHECKOUT_URL = "https://pay.hotmart.com/T106842867W?off=zkp7gvsk&checkoutMode=10"

export default function Page() {
  return (
    <TrackCheckoutProvider>
      <Pv01Pixel />
      <main className="min-h-screen bg-background">
        <HeroSection
          price={PRICE}
          refPrice={REF_PRICE}
          checkoutUrl={CHECKOUT_URL}
          headline={
            <span className="text-verde-cta">Ahora puedes preparar paletas cremosas para vender todos los días</span>
          }
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
          imageSrc="/images/hero-recetario-paletas.png"
          imageAlt="Recetario premium '100 Paletas Rellenas y Cremosas' rodeado de fichas de recetas de paletas cremosas de fresa, coco, maracuyá y cookies & cream, con paletas de varios sabores en la portada."
        />
        <PracticeSection />
        <IdealSection />
        <ScarcitySection price={PRICE} refPrice={REF_PRICE} checkoutUrl={CHECKOUT_URL} />
        <SocialProof />
        <OfferCard price={PRICE} refPrice={REF_PRICE} checkoutUrl={CHECKOUT_URL} />
        <GuaranteeSection />
        <FaqSection price={PRICE} checkoutUrl={CHECKOUT_URL} />

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
