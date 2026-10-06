import { HeroSectionBr } from "@/components/br/hero-section-br"
import { PracticeSectionBr } from "@/components/br/practice-section-br"
import { IdealSectionBr } from "@/components/br/ideal-section-br"
import { ScarcitySectionBr } from "@/components/br/scarcity-section-br"
import { SocialProofBr } from "@/components/br/social-proof-br"
import { OfferCardBr } from "@/components/br/offer-card-br"
import { GuaranteeSectionBr } from "@/components/br/guarantee-section-br"
import { FaqSectionBr } from "@/components/br/faq-section-br"

const CHECKOUT_URL_BASIC_BR = "https://app.zuptos.com.br/checkout/32a5e18b1b1fa1be"
const CHECKOUT_URL_COMPLETE_BR = "https://app.zuptos.com.br/checkout/3b9cfd8e67fd8249"

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
        checkoutUrl={CHECKOUT_URL_BASIC_BR}
        plansHref="#planos"
      />
      <PracticeSectionBr />
      <IdealSectionBr />
      <ScarcitySectionBr checkoutUrl={CHECKOUT_URL_BASIC_BR} plansHref="#planos" />
      <SocialProofBr />
      <OfferCardBr
        sectionId="planos"
        checkoutUrl={CHECKOUT_URL_BASIC_BR}
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
        checkoutUrl={CHECKOUT_URL_COMPLETE_BR}
        badgeText="Plano completo · Melhor escolha"
        includedItems={[
          "+100 Receitas Premium de Picolés Recheados",
          "100 Receitas de Picolés Recheados",
          "Sabores Tradicionais, Gourmet e Premium",
          "Recheios e Coberturas Exclusivas",
          "Sugestões de Cardápio",
          "Receitas fáceis de preparar",
          "Ideias para aumentar seu ticket médio",
          "Acesso Vitalício",
          "Entrega Imediata por E-mail",
        ]}
        bonusItems={[
          "Lista de Compras Inteligente",
          "Cardápio Pronto com Sabores para Vender",
          "Guia de Conservação e Armazenamento",
          "50 Coberturas e Recheios Premium",
          "Guia de Precificação para Vender com Lucro",
          "Guia de Vendas pelo WhatsApp",
        ]}
        showBonuses={true}
        highlightText="O pacote completo para aprender, precificar e vender desde o primeiro dia."
      />
      <GuaranteeSectionBr />
      <FaqSectionBr checkoutUrl={CHECKOUT_URL_BASIC_BR} />

      <footer className="bg-chocolate px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
          Este é um produto digital. O resultado depende da aplicação das receitas. 100 Picolés Gourmet Recheados e
          Cremosos. Todos os direitos reservados.
        </p>
      </footer>
    </main>
  )
}
