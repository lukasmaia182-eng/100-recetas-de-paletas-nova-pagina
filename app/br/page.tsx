import { HeroSectionBr } from "@/components/br/hero-section-br"
import { PracticeSectionBr } from "@/components/br/practice-section-br"
import { IdealSectionBr } from "@/components/br/ideal-section-br"
import { ScarcitySectionBr } from "@/components/br/scarcity-section-br"
import { SocialProofBr } from "@/components/br/social-proof-br"
import { OfferCardBr } from "@/components/br/offer-card-br"
import { GuaranteeSectionBr } from "@/components/br/guarantee-section-br"
import { FaqSectionBr } from "@/components/br/faq-section-br"

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSectionBr
        headline={
          <span className="text-verde-cta">
            Agora você pode fazer picolés gourmet recheados para vender todos os dias
          </span>
        }
        subheadline={
          <>
            <span className="block font-display text-xl font-extrabold text-chocolate sm:text-2xl">
              + de 100 Receitas de Picolés Gourmet Recheados, Cremosos e Fáceis de Vender.
            </span>
            <span className="mt-2 block">
              Para quem quer ganhar dinheiro em casa sem precisar de ingredientes caros nem passar horas inventando
              receitas.
            </span>
          </>
        }
        imageSrc="/images/br-hero.png"
        imageAlt="Caixas de presente com picolés gourmet recheados de vários sabores ao lado do livro 'Picolés Gourmet Recheados Lucrativos', com mãos segurando um picolé de chocolate com uma etiqueta escrita 'Feito com amor para você'."
      />
      <PracticeSectionBr />
      <IdealSectionBr />
      <ScarcitySectionBr />
      <SocialProofBr />
      <OfferCardBr />
      <GuaranteeSectionBr />
      <FaqSectionBr />

      <footer className="bg-chocolate px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
          Este é um produto digital. O resultado depende da aplicação das receitas. 100 Picolés Gourmet Recheados e
          Cremosos. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
