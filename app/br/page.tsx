import type { Metadata } from "next"
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

export const metadata: Metadata = {
  title: "Receitas Ilustradas de Picolés Recheados Cremosos | +100 Receitas para Fazer e Vender",
  description: "Receitas Ilustradas de Picolés Recheados Cremosos | +100 Receitas para Fazer e Vender",
}

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSectionBr
        headline={
          <span className="text-verde-cta">
            Acesse as +100 Receitas Ilustradas de Picolés Recheados Cremosos que já ajudaram mais de 3 mil pessoas a
            vender todos os dias
          </span>
        }
        subheadline={
          <span className="mt-2 block">
            Torne o seu começo na venda de picolés mais fácil e rápido, mesmo sem experiência, com receitas ilustradas
            passo a passo, testadas e aprovadas por mais de 3 mil pessoas.
          </span>
        }
        imageSrc="/images/br-hero-mockup.png"
        imageAlt="Mockup da oferta de +100 Receitas Ilustradas de Picolés Recheados Cremosos, com livro, picolés de vários sabores e materiais bônus."
        checkoutUrl={CHECKOUT_URL_BASIC_BR}
        plansHref="#planos"
        priceLabel="por tempo limitado"
        belowImageText="Com um cardápio pronto e o passo a passo ilustrado, você começa a oferecer seus picolés recheados já na primeira semana."
        secondaryBelowImageText={null}
        bodyText="Pare de desperdiçar ingredientes inventando receitas do zero. Com o passo a passo pronto você faz sabores de chocolate, frutas, doce de leite, leite condensado e sobremesas famosas em picolés recheados e cremosos, e monta um cardápio que dá para vender desde o primeiro dia."
        bulletItems={[
          "+100 Receitas Ilustradas de Picolés Recheados Cremosos",
          "Ingredientes e medidas exatas",
          "Opções econômicas e premium de picolés recheados e cremosos",
          "Passo a passo ilustrado para iniciantes",
          "Acesso digital imediato",
        ]}
      />
      <PracticeSectionBr
        mainImageAlt="Mulher com avental decorando um picolé de pistache, ao lado do livro de +100 Receitas Ilustradas de Picolés Recheados Cremosos."
        products={[
          {
            src: "/images/br-practica-2.png",
            alt: "Caixa de presente kraft com um picolé de chocolate e avelãs ao lado do livro de Receitas Ilustradas de Picolés Recheados Cremosos.",
          },
          {
            src: "/images/br-practica-3.png",
            alt: "Caixa de presente aberta com um picolé de chocolate e avelãs e outros picolés gourmet.",
          },
          {
            src: "/images/br-practica-4.png",
            alt: "Caixas de presente e um picolé de pistache, com outros picolés gourmet ao redor.",
          },
        ]}
      />
      <IdealSectionBr />
      <ScarcitySectionBr checkoutUrl={CHECKOUT_URL_BASIC_BR} plansHref="#planos" />
      <SocialProofBr />
      <OfferCardBr
        sectionId="planos"
        checkoutUrl={CHECKOUT_URL_BASIC_BR}
        planName="Livro de Receitas Ilustradas de Picolés Recheados"
        productLabel="+100 Receitas Ilustradas de Picolés Recheados Cremosos"
        imageAlt="Livro de Receitas Ilustradas de Picolés Recheados Cremosos, com uma variedade de picolés ao redor."
        description="Receitas ilustradas para preparar picolés recheados e cremosos."
        includedItems={[
          "+100 Receitas de Picolés Recheados Cremosos",
          "Ingredientes e medidas exatas",
          "Passo a passo ilustrado",
          "Material digital (PDF)",
          "Acesso pelo celular",
        ]}
        showBonuses={false}
      />
      <OfferCardBr
        sectionId="oferta-completa"
        planName="Kit Picolé Recheado Pronto para Vender"
        productLabel="+100 Receitas Ilustradas de Picolés Recheados Cremosos"
        imageAlt="Kit Picolé Recheado Pronto para Vender, com livro, picolés e materiais bônus."
        price="R$ 29,90"
        refPrice="R$ 97,00"
        checkoutUrl={CHECKOUT_URL_COMPLETE_BR}
        badgeText="Plano completo · Melhor escolha"
        includedItems={[
          "+100 Receitas Ilustradas de Picolés Recheados Cremosos",
          "Sabores Tradicionais, Gourmet e Premium",
          "Recheios e Coberturas Exclusivas",
          "Sugestões de Cardápio",
          "Ideias para aumentar seu ticket médio",
          "Acesso Vitalício",
          "Entrega Imediata por E-mail",
        ]}
        bonusItems={[
          "Lista de Compras Inteligente para Picolés Recheados",
          "Cardápio Pronto de Picolés Recheados para Vender",
          "Guia de Conservação e Armazenamento dos Picolés",
          "50 Coberturas e Recheios Premium",
          "Guia de Preço do Picolé Recheado (para vender com lucro)",
          "Guia de Vendas pelo WhatsApp",
        ]}
        showBonuses={true}
        highlightText="Um kit com receitas, recheios, coberturas e ideias de cardápio para vender."
      />
      <GuaranteeSectionBr />
      <FaqSectionBr checkoutUrl={CHECKOUT_URL_BASIC_BR} />

      <footer className="bg-chocolate px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
          Este é um produto digital. O resultado depende da aplicação das receitas.
        </p>
      </footer>
    </main>
  )
}
