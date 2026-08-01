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
        imageSrc="/images/pv10-hero.png"
        imageAlt="Cajas de regalo con paletas rellenas gourmet de varios sabores junto al libro 'Paletas Rellenas Rentables', con unas manos sosteniendo una paleta de chocolate con una etiqueta que dice 'Hecho con amor para ti'."
      />
      <PracticeSection
        mainImageSrc="/images/pv10-practica-1.png"
        mainImageAlt="Mujer con delantal decorando una paleta de pistacho con topping, sobre una mesa de mármol con el libro 'Paletas Rellenas Rentables', variedad de paletas rellenas gourmet, bowls de pistachos, fresas y frutos rojos, y cajas de regalo con paletas empacadas."
        products={[
          {
            src: "/images/pv10-practica-2.png",
            alt: "Caja de regalo kraft con lazo dorado y etiqueta 'Hecho con amor para ti', con una paleta de chocolate y avellanas envuelta en papel decorado, junto al libro 'Paletas Rellenas Rentables' y variedad de paletas gourmet.",
          },
          {
            src: "/images/pv10-practica-3.png",
            alt: "Caja de regalo kraft abierta con una paleta de chocolate y avellanas, junto a un cajón de madera con paletas gourmet de varios sabores sobre una mesa rústica.",
          },
          {
            src: "/images/pv10-practica-4.png",
            alt: "Dos cajas de regalo kraft con lazos dorados y una paleta de pistacho, rodeadas de bowls con toppings y una tabla de mármol con paletas gourmet terminadas.",
          },
        ]}
      />
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
