'use client'

import Image from 'next/image'
import { useMemo, useState } from 'react'

const checkout = 'https://pay.cakto.com.br/waoe895'
const flavors = [
  ['Leite Ninho com creme de avelã', '/images/receta-coco.png'],
  ['Chocolate com brigadeiro', '/images/receta-cafe.png'],
  ['Morango cremoso', '/images/receta-mango.png'],
  ['Maracujá', '/images/receta-maracuya.png'],
  ['Prestígio', '/images/receta-coco.png'],
  ['Paçoca', '/images/receta-mango.png'],
  ['Oreo', '/images/receta-cookies.png'],
  ['Doce de leite', '/images/receta-limon.png'],
]
const faqs = [
  ['Como recebo o material?', 'Após a confirmação do pagamento, você recebe o acesso digital no seu e-mail.'],
  ['Preciso ter experiência?', 'Não. As receitas foram organizadas com ingredientes, quantidades e preparo passo a passo.'],
  ['Posso vender os picolés?', 'Sim. O material foi pensado para quem quer produzir em casa e começar a vender.'],
  ['O pagamento é seguro?', 'Sim. O checkout é processado por uma plataforma segura e você ainda conta com 7 dias de garantia.'],
]

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)
  const [base, setBase] = useState(18.5)
  const [filling, setFilling] = useState(9)
  const [yieldCount, setYieldCount] = useState(20)
  const [salePrice, setSalePrice] = useState(6)
  const result = useMemo(() => {
    const cost = (base + filling) / Math.max(yieldCount, 1)
    const profit = salePrice - cost
    return { cost, profit, batch: profit * yieldCount, margin: salePrice ? (profit / salePrice) * 100 : 0 }
  }, [base, filling, yieldCount, salePrice])

  return (
    <main className="nova-page">
      <div className="nova-topbar">🎁 Oferta especial: 100 Receitas de Picolés Recheados + 6 bônus exclusivos</div>
      <section className="nova-hero nova-container">
        <span className="nova-kicker">✧ FAÇA · RECHEIE · VENDA ✧</span>
        <h1>100 Receitas de Picolés Recheados Lucrativos <em>para Fazer em Casa e Começar a Vender</em></h1>
        <p className="nova-lead">Tenha em mãos <strong>100 receitas de picolés recheados</strong>, com ingredientes, medidas, recheios e preparo passo a passo para montar um cardápio variado sem precisar ficar procurando receitas espalhadas pela internet.</p>
        <div className="nova-hero-image"><span>🍦 100 Receitas Passo a Passo + 6 Bônus</span><Image src="/images/br-hero-mockup.png" alt="Mockup do material 100 Receitas de Picolés Recheados Lucrativos" width={900} height={900} priority /></div>
        <a className="nova-button" href={checkout}>QUERO AS 100 RECEITAS AGORA <small>ACESSO IMEDIATO E SEGURO</small></a>
        <a className="nova-text-link" href="#material">VER O QUE VEM NO MATERIAL</a>
      </section>

      <section id="material" className="nova-section nova-light">
        <div className="nova-container"><span className="nova-label">O MATERIAL COMPLETO</span><h2>O que você encontra dentro do material</h2><div className="nova-check-grid">{['100 receitas de picolés recheados','Sabores variados para montar seu cardápio','Ingredientes e medidas organizados','Preparo explicado passo a passo','Material digital para consultar pelo celular','6 bônus para ajudar você a produzir e começar a vender'].map(item => <div key={item}>✓ <span>{item}</span></div>)}</div></div>
      </section>

      <section className="nova-section nova-cream"><div className="nova-container"><span className="nova-label">AMOSTRA DO CARDÁPIO</span><h2>Veja alguns dos picolés que você vai aprender</h2><p>São 100 receitas para você variar sabores, recheios e combinações.</p><div className="nova-flavors">{flavors.map(([name, src]) => <article key={name}><Image src={src} alt={`Receita de picolé de ${name}`} width={300} height={300} /><h3>{name}</h3><p>Base cremosa, recheio generoso e preparo simples.</p></article>)}</div><a className="nova-button" href={checkout}>QUERO RECEBER AS 100 RECEITAS</a></div></section>

      <section className="nova-section nova-dark"><div className="nova-container"><span className="nova-label">ESTRUTURA PADRONIZADA</span><h2>100 receitas organizadas para você produzir</h2><p>Em vez de testar receitas aleatórias, abra o material e escolha o próximo sabor.</p><div className="nova-steps">{['Ingredientes','Quantidades','Base do picolé','Recheio','Montagem','Finalização'].map((item, i) => <article key={item}><b>0{i + 1}</b><h3>{item}</h3><p>Orientações claras e medidas padronizadas para não errar no ponto.</p></article>)}</div></div></section>

      <section className="nova-section nova-light"><div className="nova-container"><span className="nova-label">CARDÁPIO VARIADO</span><h2>Do tradicional ao gourmet</h2><p>Combinações para variar sua produção e lucrar o ano inteiro:</p><div className="nova-tags">{['Leite Ninho','Chocolate','Morango','Maracujá','Prestígio','Paçoca','Oreo','Doce de leite','Coco','Chocolate branco','Sensação','Limão cremoso','Romeu e Julieta','Cookies & Cream','Beijinho','Chocolate intenso'].map(x => <span key={x}>{x}</span>)}</div></div></section>

      <section className="nova-section nova-cream"><div className="nova-container"><span className="nova-label">ACELERAÇÃO DE RESULTADOS</span><h2>6 bônus exclusivos para você produzir e vender</h2><div className="nova-bonuses">{['Calculadora do Picolé Lucrativo','Guia de Recheios Cremosos','Cardápio Pronto para Personalizar','Checklist da Primeira Produção','Guia de Embalagem e Apresentação','30 Frases para Divulgar Seus Picolés no WhatsApp'].map((x, i) => <article key={x}><b>BÔNUS #{i + 1}</b><h3>{x}</h3><p>Material prático para organizar sua produção, apresentação e vendas.</p></article>)}</div></div></section>

      <section className="nova-section nova-dark"><div className="nova-container nova-calculator"><span className="nova-label">BÔNUS #1 INCLUSO NO PLANO COMPLETO</span><h2>Prévia interativa: Calculadora do Picolé Lucrativo</h2><p>Simule agora o custo de uma receita caseira e descubra o potencial de retorno por cada fornada.</p><div className="nova-calc-grid">{[['Custo da Base', base, setBase],['Custo do Recheio', filling, setFilling],['Rendimento da Receita', yieldCount, setYieldCount],['Preço de Venda', salePrice, setSalePrice]].map(([label, value, setter]) => <label key={label as string}>{label as string}<input type="number" value={value as number} onChange={e => (setter as (n: number) => void)(Number(e.target.value))} /></label>)}</div><div className="nova-result"><h3>Resultado da Produção</h3><div><strong>R$ {result.cost.toFixed(2)}</strong><span>CUSTO POR PICOLÉ</span></div><div><strong>R$ {result.profit.toFixed(2)}</strong><span>LUCRO POR UNIDADE</span></div><div><strong>R$ {result.batch.toFixed(2)}</strong><span>LUCRO NA FORNADA</span></div><div><strong>{result.margin.toFixed(0)}%</strong><span>MARGEM DE LUCRO</span></div></div></div></section>

      <section className="nova-offer"><div className="nova-container"><span className="nova-label">OFERTA ESPECIAL</span><h2>Comece hoje a montar seu cardápio lucrativo</h2><p>Tenha o material completo, os 6 bônus e acesso imediato.</p><div className="nova-price"><del>R$ 47,00</del><strong>R$ 27,90</strong></div><a className="nova-button" href={checkout}>QUERO O PLANO COMPLETO</a><p className="nova-small">Compra segura · 7 dias de garantia · acesso digital imediato</p></div></section>

      <section className="nova-section nova-light"><div className="nova-container"><span className="nova-label">DÚVIDAS FREQUENTES</span><h2>Perguntas frequentes</h2><div className="nova-faq">{faqs.map(([q, a], i) => <div key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}>{q}<span>{openFaq === i ? '−' : '+'}</span></button>{openFaq === i && <p>{a}</p>}</div>)}</div><a className="nova-button" href={checkout}>QUERO AS 100 RECEITAS AGORA</a></div></section>
      <footer className="nova-footer">Este é um produto digital. O resultado depende da aplicação das receitas.<br />100 Picolés Gourmet Recheados e Cremosos. Todos os direitos reservados.</footer>
    </main>
  )
}
