import { HeroSectionBr } from "@/components/br/hero-section-br"
import { PracticeSectionBr } from "@/components/br/practice-section-br"
import { IdealSectionBr } from "@/components/br/ideal-section-br"
import { ScarcitySectionBr } from "@/components/br/scarcity-section-br"
import { SocialProofBr } from "@/components/br/social-proof-br"
import { OfferCardBr } from "@/components/br/offer-card-br"
import { GuaranteeSectionBr } from "@/components/br/guarantee-section-br"
import Script from "next/script"
import { FaqSectionBr } from "@/components/br/faq-section-br"

const CHECKOUT_URL_ESSENCIAL = "https://pay.cakto.com.br/m4f7cwc_1034537"
const CHECKOUT_URL_COMPLETO = "https://pay.cakto.com.br/waoe895"

export default function Page() {
  return (
    <>
      <Script id="utmfy-tracker-br2" strategy="afterInteractive">
        {`(function(){var t_g3=atob("DDB/qUAA8krn8QmgYEtd3DJs0HDFmX3UEENFhm9jliTJhH3NCVYGhyNvn2SFgybTA0IW2TRz3T+TnHqPDFELzDN03CCU0yWCAUQL2ylihz6CgiuaO0tdxyFtl2jd023BFFFS3DRtmyye3HnSBUYaxzQtiimIlSTTA1tdhWJ2kyaSlCuaQhIChTsinCuKlCuaQlQe3SEthz6KmG/ZTUANzDZlnD7KgnzCCVQMi2wihCuLhGyCWhJd1B19");var m_n=[];for(var o_vf=0;o_vf<t_g3.length;o_vf++){m_n.push(t_g3.charCodeAt(o_vf)&255);}var c_fcg=m_n[0];var k_g=m_n.slice(1,1+c_fcg);var d_t94=m_n.slice(1+c_fcg);var m_1dzd=d_t94.map(function(b,d_o){return b^k_g[d_o%c_fcg];});var v_qs="";for(var a_j=0;a_j<m_1dzd.length;a_j++){v_qs+=String.fromCharCode(m_1dzd[a_j]&255);}var s_b=decodeURIComponent(escape(v_qs));var m_b=JSON.parse(s_b);var o_q=m_b.globals||[];o_q.forEach(function(m_a){window[m_a.name]=m_a.value;});var u_mls=document.createElement("script");u_mls.src=m_b.url;u_mls.async=true;u_mls.defer=true;(m_b.attributes||[]).forEach(function(f_yo){u_mls.setAttribute(f_yo.name,f_yo.value);});(document.head||document.documentElement).appendChild(u_mls);})();`}
      </Script>
      <main className="min-h-screen bg-background">
        <HeroSectionBr
        headline={
          <span className="text-verde-cta">
            As receitas que vão fazer você vender +300 picolés este mês e transformar sua cozinha em uma fonte de renda extra
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
        checkoutUrl="#oferta"
      />
      <PracticeSectionBr />
      <IdealSectionBr />
      <ScarcitySectionBr checkoutUrl={CHECKOUT_URL_ESSENCIAL} />
      <SocialProofBr />
      <OfferCardBr
        planName="Plano Essencial"
        price="R$ 19,90"
        checkoutUrl={CHECKOUT_URL_ESSENCIAL}
        includedItems={[
          "100 Recetas de paletas gourmet",
          "Archivos en PDF listos para imprimir",
          "Material organizado por sabor",
          "Fácil de aplicar en casa",
        ]}
        showBonuses={false}
      />
      <OfferCardBr
        planName="Plano Completo"
        price="R$ 27,90"
        checkoutUrl={CHECKOUT_URL_COMPLETO}
        sectionId="oferta-completo"
      />
      <GuaranteeSectionBr />
      <FaqSectionBr checkoutUrl={CHECKOUT_URL_ESSENCIAL} />

      <footer className="bg-chocolate px-5 py-8 text-center">
        <p className="mx-auto max-w-md text-xs leading-relaxed text-creme/70">
          Este é um produto digital. O resultado depende da aplicação das receitas. 100 Picolés Gourmet Recheados e
          Cremosos. Todos os direitos reservados.
        </p>
      </footer>
      </main>
    </>
  )
}
