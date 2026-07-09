import {
  UrgencyBar,
  Pv2Hero,
  Pv2Benefits,
  Pv2Pain,
} from "@/components/pv2/pv2-blocks"
import { Pv2Chats } from "@/components/pv2/pv2-chats"
import { OfferCard } from "@/components/offer-card"
import { GuaranteeSection } from "@/components/guarantee-section"
import { FaqSection } from "@/components/faq-section"
import { TrackCheckoutProvider } from "@/components/checkout-tracking"

export default function Pv2Page() {
  return (
    <TrackCheckoutProvider>
      <main className="min-h-screen bg-background">
        <UrgencyBar />
        <Pv2Hero />
        <Pv2Benefits />
        <Pv2Pain />
        <Pv2Chats />
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
