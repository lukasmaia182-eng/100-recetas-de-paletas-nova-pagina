import { TrackCheckoutProvider } from "@/components/checkout-tracking"
import {
  Pv3Hero,
  Pv3Practice,
  Pv3Ideal,
  Pv3Scarcity,
  Pv3SocialProof,
  Pv3OfferCard,
  Pv3Guarantee,
  Pv3Faq,
} from "@/components/pv3/pv3-sections"

export default function Pv3Page() {
  return (
    <TrackCheckoutProvider>
      <main className="min-h-screen bg-background">
        <Pv3Hero />
        <Pv3Practice />
        <Pv3Ideal />
        <Pv3Scarcity />
        <Pv3SocialProof />
        <Pv3OfferCard />
        <Pv3Guarantee />
        <Pv3Faq />

        <footer className="bg-chocolate px-5 py-8 text-center">
          <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
            Este é um produto digital. O resultado depende da aplicação das receitas. 100 Picolés Recheados e Cremosos.
            Todos os direitos reservados.
          </p>
        </footer>
      </main>
    </TrackCheckoutProvider>
  )
}
