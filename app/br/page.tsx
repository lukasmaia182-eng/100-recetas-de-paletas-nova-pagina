import { HeroSectionBr } from "@/components/br/hero-section-br"
import { PracticeSectionBr } from "@/components/br/practice-section-br"
import { IdealSectionBr } from "@/components/br/ideal-section-br"
import { ScarcitySectionBr } from "@/components/br/scarcity-section-br"
import { SocialProofBr } from "@/components/br/social-proof-br"
import { OfferCardBr } from "@/components/br/offer-card-br"
import { GuaranteeSectionBr } from "@/components/br/guarantee-section-br"
import { FaqSectionBr } from "@/components/br/faq-section-br"

const CHECKOUT_URL_BR = "https://pay.cakto.com.br/waoe895"

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
        imageSrc="/images/br-hero-mockup.png"
        imageAlt="Mockup da oferta 'Picolés Recheados Lucrativos' com o livro de 100 receitas, caixa de presente com picolés gourmet de vários sabores e cards de bônus como mensagens prontas para vender, calcule seu preço certo e dicas para vender mais."
        checkoutUrl={CHECKOUT_URL_BR}
      />
      <PracticeSectionBr />
      <IdealSectionBr />
      <ScarcitySectionBr checkoutUrl={CHECKOUT_URL_BR} />
      <SocialProofBr />
      <OfferCardBr
        checkoutUrl={CHECKOUT_URL_BR}
        planName="Plano Básico"
        description="Comece com as receitas. Ideal para quem quer apenas a coletânea de receitas em mãos."
        includedItems={[
          "100 Receitas de Picolés Recheados",
          "Ingredientes e medidas",
          "Passo a passo detalhado",
          "Material digital (PDF)",
          "Acesso pelo celular",
        ]}
        showBonuses={false}
      />
      <OfferCardBr
        sectionId="oferta-completa"
        planName="Plano Completo"
        price="R$ 29,90"
        refPrice="R$ 97,00"
        checkoutUrl={CHECKOUT_URL_BR}
        badgeText="Plano completo · Melhor escolha"
        includedItems={[
          "100 Receitas de Picolés Recheados Lucrativos",
          "Bônus 1: Calculadora do Picolé Lucrativo",
          "Bônus 2: Guia de Recheios Cremosos",
          "Bônus 3: Cardápio Personalizável no Canva",
          "Bônus 4: Checklist da Primeira Produção",
          "Bônus 5: Guia de Embalagens e Apresentação",
          "Bônus 6: 30 Frases para Divulgar no WhatsApp",
          "Material digital com acesso pelo celular",
        ]}
        showBonuses={false}
        highlightText="O pacote completo para aprender, precificar e vender desde o primeiro dia."
      />
      <GuaranteeSectionBr />
      <FaqSectionBr checkoutUrl={CHECKOUT_URL_BR} />

      <footer className="bg-chocolate px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
          Este é um produto digital. O resultado depende da aplicação das receitas. 100 Picolés Gourmet Recheados e
          Cremosos. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
