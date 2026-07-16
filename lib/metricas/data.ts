// ============================================================================
// META MASTER — Dados de demonstração (DEMO)
// Todos os valores abaixo são fictícios e servem para testar a interface.
// Moeda base: USD. Números determinísticos (seed fixa) para consistência.
// ============================================================================

export const IS_DEMO = true
export const MOEDA_BASE = "USD"

// ---- Tipos ----------------------------------------------------------------

export type Tendencia = "up" | "down" | "flat"
export type StatusCampanha = "lucrativa" | "observacao" | "prejuizo" | "aprendizado"
export type StatusAtivo = "ativa" | "pausada"
export type FaseCampanha = "teste" | "escala" | "controle"

export interface Produto {
  id: string
  nome: string
  preco: number
  moeda: string
  vendas: number
  receitaBruta: number
  receitaLiquida: number
  investimento: number
  reembolsos: number
  taxaReembolso: number
  receitaOrderBumps: number
  receitaUpsells: number
  ticketMedio: number
  conversaoCheckout: number
}

export interface Campanha {
  id: string
  nome: string
  status: StatusAtivo
  saude: StatusCampanha
  fase: FaseCampanha
  produtoId: string
  pais: string
  orcamentoDiario: number
  investimento: number
  impressoes: number
  alcance: number
  frequencia: number
  cpm: number
  cliques: number
  ctr: number
  cpc: number
  visualizacoesPagina: number
  checkouts: number
  vendas: number
  cpa: number
  receita: number
  roas: number
  lucro: number
  margem: number
  reembolsos: number
  tendencia: Tendencia
  recomendacaoIA: string
}

export interface ConjuntoAnuncio {
  id: string
  nome: string
  campanhaId: string
  publico: string
  pais: string
  idade: string
  sexo: string
  posicionamento: string
  orcamento: number
  investimento: number
  ctr: number
  cpc: number
  cpm: number
  frequencia: number
  checkouts: number
  vendas: number
  cpa: number
  roas: number
  lucro: number
}

export interface Criativo {
  id: string
  codigo: string
  nome: string
  imagem: string
  campanhaId: string
  conjuntoId: string
  headline: string
  angulo: string
  formato: string
  dataInicio: string
  investimento: number
  impressoes: number
  ctr: number
  cpc: number
  cpm: number
  frequencia: number
  cliques: number
  checkouts: number
  vendas: number
  cpa: number
  receita: number
  roas: number
  lucro: number
  taxaConversao: number
  fadiga: "saudavel" | "atencao" | "fadiga"
  indiceQualidade: number
  notaIA: string
}

export interface Venda {
  id: string
  data: string
  produto: string
  oferta: string
  valor: number
  moeda: string
  pais: string
  status: "aprovada" | "reembolsada" | "pendente"
  origem: string
  campanha: string
  criativo: string
  utmSource: string
  utmMedium: string
  utmCampaign: string
  utmContent: string
  adId: string
  transactionId: string
  orderBump: boolean
  comissaoLiquida: number
}

export interface PaisMetrica {
  pais: string
  codigo: string
  investimento: number
  vendas: number
  cpa: number
  receita: number
  roas: number
  lucro: number
  conversao: number
  cpm: number
  cpc: number
  ctr: number
  ticketMedio: number
  reembolso: number
}

export interface DiaMetrica {
  dia: string
  investimento: number
  receita: number
  lucro: number
  vendas: number
  cpa: number
  roas: number
  ctr: number
  cpm: number
}

// ---- Produtos --------------------------------------------------------------

export const produtos: Produto[] = [
  {
    id: "prod-paletas",
    nome: "Paletas Rellenas Rentables — 100 Recetas",
    preco: 9.9,
    moeda: "USD",
    vendas: 1240,
    receitaBruta: 12276,
    receitaLiquida: 10620,
    investimento: 4180,
    reembolsos: 372,
    taxaReembolso: 3.0,
    receitaOrderBumps: 1830,
    receitaUpsells: 2420,
    ticketMedio: 12.4,
    conversaoCheckout: 42,
  },
  {
    id: "prod-lancheira",
    nome: "Manual da Lancheira Mágica",
    preco: 7.9,
    moeda: "USD",
    vendas: 486,
    receitaBruta: 3839,
    receitaLiquida: 3320,
    investimento: 1520,
    reembolsos: 118,
    taxaReembolso: 3.5,
    receitaOrderBumps: 540,
    receitaUpsells: 610,
    ticketMedio: 9.1,
    conversaoCheckout: 38,
  },
]

// ---- Campanhas -------------------------------------------------------------

export const campanhas: Campanha[] = [
  {
    id: "cmp-01", nome: "[ESCALA] Paletas — US Broad", status: "ativa", saude: "lucrativa", fase: "escala",
    produtoId: "prod-paletas", pais: "Estados Unidos", orcamentoDiario: 120, investimento: 1180,
    impressoes: 214000, alcance: 138000, frequencia: 1.55, cpm: 5.51, cliques: 4820, ctr: 2.25,
    cpc: 0.24, visualizacoesPagina: 3980, checkouts: 640, vendas: 392, cpa: 3.01, receita: 4210,
    roas: 3.57, lucro: 2610, margem: 62, reembolsos: 92, tendencia: "up",
    recomendacaoIA: "Escalar orçamento em 20%. ROAS estável e CPA abaixo do teto.",
  },
  {
    id: "cmp-02", nome: "[ESCALA] Paletas — MX", status: "ativa", saude: "lucrativa", fase: "escala",
    produtoId: "prod-paletas", pais: "México", orcamentoDiario: 90, investimento: 870,
    impressoes: 186000, alcance: 121000, frequencia: 1.54, cpm: 4.68, cliques: 4120, ctr: 2.21,
    cpc: 0.21, visualizacoesPagina: 3410, checkouts: 512, vendas: 318, cpa: 2.74, receita: 3120,
    roas: 3.59, lucro: 1980, margem: 63, reembolsos: 61, tendencia: "up",
    recomendacaoIA: "Manter. Bom desempenho, ampliar públicos semelhantes.",
  },
  {
    id: "cmp-03", nome: "[TESTE] Paletas — CO/PE", status: "ativa", saude: "observacao", fase: "teste",
    produtoId: "prod-paletas", pais: "Colômbia", orcamentoDiario: 45, investimento: 430,
    impressoes: 98000, alcance: 71000, frequencia: 1.38, cpm: 4.39, cliques: 1980, ctr: 2.02,
    cpc: 0.22, visualizacoesPagina: 1520, checkouts: 214, vendas: 118, cpa: 3.64, receita: 1090,
    roas: 2.53, lucro: 520, margem: 48, reembolsos: 28, tendencia: "flat",
    recomendacaoIA: "Observar mais 24h. Volume ainda baixo para decisão segura.",
  },
  {
    id: "cmp-04", nome: "[CONTROLE] Lancheira — BR/US LATAM", status: "ativa", saude: "observacao", fase: "controle",
    produtoId: "prod-lancheira", pais: "Estados Unidos", orcamentoDiario: 60, investimento: 580,
    impressoes: 132000, alcance: 96000, frequencia: 1.37, cpm: 4.39, cliques: 2510, ctr: 1.90,
    cpc: 0.23, visualizacoesPagina: 1980, checkouts: 268, vendas: 142, cpa: 4.08, receita: 1290,
    roas: 2.22, lucro: 430, margem: 42, reembolsos: 38, tendencia: "down",
    recomendacaoIA: "CTR em queda. Testar novos criativos antes de escalar.",
  },
  {
    id: "cmp-05", nome: "[TESTE] Paletas — CL/AR/UY", status: "ativa", saude: "prejuizo", fase: "teste",
    produtoId: "prod-paletas", pais: "Argentina", orcamentoDiario: 35, investimento: 410,
    impressoes: 74000, alcance: 58000, frequencia: 1.28, cpm: 5.54, cliques: 1240, ctr: 1.68,
    cpc: 0.33, visualizacoesPagina: 890, checkouts: 96, vendas: 38, cpa: 10.79, receita: 360,
    roas: 0.88, lucro: -240, margem: -67, reembolsos: 14, tendencia: "down",
    recomendacaoIA: "CPA muito acima do teto. Recomendo pausar e realocar verba.",
  },
  {
    id: "cmp-06", nome: "[ESCALA] Lancheira — US", status: "pausada", saude: "aprendizado", fase: "teste",
    produtoId: "prod-lancheira", pais: "Estados Unidos", orcamentoDiario: 40, investimento: 190,
    impressoes: 38000, alcance: 31000, frequencia: 1.23, cpm: 5.0, cliques: 720, ctr: 1.89,
    cpc: 0.26, visualizacoesPagina: 540, checkouts: 62, vendas: 22, cpa: 8.64, receita: 210,
    roas: 1.11, lucro: -20, margem: -10, reembolsos: 6, tendencia: "flat",
    recomendacaoIA: "Ainda em aprendizado. Aguardar sair da fase de aprendizagem do Meta.",
  },
]

// ---- Conjuntos de anúncios -------------------------------------------------

export const conjuntos: ConjuntoAnuncio[] = [
  { id: "adset-01", nome: "US • 25-45 • Todos", campanhaId: "cmp-01", publico: "Broad (aberto)", pais: "Estados Unidos", idade: "25-45", sexo: "Todos", posicionamento: "Advantage+", orcamento: 60, investimento: 610, ctr: 2.31, cpc: 0.23, cpm: 5.4, frequencia: 1.52, checkouts: 340, vendas: 214, cpa: 2.85, roas: 3.71, lucro: 1420 },
  { id: "adset-02", nome: "US • 30-55 • Mulheres", campanhaId: "cmp-01", publico: "Interesses culinária", pais: "Estados Unidos", idade: "30-55", sexo: "Feminino", posicionamento: "Feed+Reels", orcamento: 60, investimento: 570, ctr: 2.18, cpc: 0.25, cpm: 5.62, frequencia: 1.58, checkouts: 300, vendas: 178, cpa: 3.20, roas: 3.42, lucro: 1190 },
  { id: "adset-03", nome: "MX • 25-45 • Todos", campanhaId: "cmp-02", publico: "Broad (aberto)", pais: "México", idade: "25-45", sexo: "Todos", posicionamento: "Advantage+", orcamento: 90, investimento: 870, ctr: 2.21, cpc: 0.21, cpm: 4.68, frequencia: 1.54, checkouts: 512, vendas: 318, cpa: 2.74, roas: 3.59, lucro: 1980 },
  { id: "adset-04", nome: "CO • 25-45 • Todos", campanhaId: "cmp-03", publico: "Broad (aberto)", pais: "Colômbia", idade: "25-45", sexo: "Todos", posicionamento: "Feed+Stories", orcamento: 45, investimento: 430, ctr: 2.02, cpc: 0.22, cpm: 4.39, frequencia: 1.38, checkouts: 214, vendas: 118, cpa: 3.64, roas: 2.53, lucro: 520 },
  { id: "adset-05", nome: "US • 25-45 • Interesses", campanhaId: "cmp-04", publico: "Pais e mães", pais: "Estados Unidos", idade: "25-45", sexo: "Todos", posicionamento: "Reels", orcamento: 60, investimento: 580, ctr: 1.90, cpc: 0.23, cpm: 4.39, frequencia: 1.37, checkouts: 268, vendas: 142, cpa: 4.08, roas: 2.22, lucro: 430 },
  { id: "adset-06", nome: "AR • 25-45 • Todos", campanhaId: "cmp-05", publico: "Broad (aberto)", pais: "Argentina", idade: "25-45", sexo: "Todos", posicionamento: "Advantage+", orcamento: 35, investimento: 410, ctr: 1.68, cpc: 0.33, cpm: 5.54, frequencia: 1.28, checkouts: 96, vendas: 38, cpa: 10.79, roas: 0.88, lucro: -240 },
]

// ---- Criativos -------------------------------------------------------------

const imagensCriativos = [
  "/images/arte/chocolate-feed.png",
  "/images/arte/morango-feed.png",
  "/images/arte/mango-feed.png",
  "/images/arte/pistacho-feed.png",
  "/images/arte/coco-feed.png",
  "/images/arte/maracuya-feed.png",
  "/images/arte/dulce_leche-feed.png",
  "/images/arte/frutos_rojos-feed.png",
  "/images/arte/cookies_cream-feed.png",
  "/images/arte/surtido-feed.png",
]

export const criativos: Criativo[] = [
  { id: "cr-01", codigo: "AD01", nome: "Chocolate — Corte cremoso", imagem: imagensCriativos[0], campanhaId: "cmp-01", conjuntoId: "adset-01", headline: "100 recetas para vender paletas", angulo: "Renda extra", formato: "Imagem 1:1", dataInicio: "2026-06-18", investimento: 340, impressoes: 62000, ctr: 2.62, cpc: 0.21, cpm: 5.48, frequencia: 1.42, cliques: 1620, checkouts: 210, vendas: 138, cpa: 2.46, receita: 1520, roas: 4.47, lucro: 1010, taxaConversao: 8.5, fadiga: "saudavel", indiceQualidade: 92, notaIA: "Vencedor claro. Duplicar e criar variações do mesmo gancho." },
  { id: "cr-02", codigo: "AD02", nome: "Morango — Antes/depois", imagem: imagensCriativos[1], campanhaId: "cmp-01", conjuntoId: "adset-02", headline: "Gana dinero desde casa", angulo: "Negócio caseiro", formato: "Reels 9:16", dataInicio: "2026-06-20", investimento: 300, impressoes: 58000, ctr: 2.34, cpc: 0.24, cpm: 5.17, frequencia: 1.51, cliques: 1360, checkouts: 172, vendas: 104, cpa: 2.88, receita: 1140, roas: 3.80, lucro: 720, taxaConversao: 7.6, fadiga: "saudavel", indiceQualidade: 84, notaIA: "Bom desempenho. Manter e monitorar frequência." },
  { id: "cr-03", codigo: "AD03", nome: "Mango — Depoimento", imagem: imagensCriativos[2], campanhaId: "cmp-02", conjuntoId: "adset-03", headline: "Recetas fáciles y rentables", angulo: "Prova social", formato: "Reels 9:16", dataInicio: "2026-06-15", investimento: 380, impressoes: 71000, ctr: 1.72, cpc: 0.31, cpm: 5.35, frequencia: 3.35, cliques: 1220, checkouts: 128, vendas: 62, cpa: 6.13, receita: 620, roas: 1.63, lucro: 120, taxaConversao: 5.1, fadiga: "fadiga", indiceQualidade: 41, notaIA: "Sinais de fadiga: frequência 3.35 e CTR em queda. Reduzir verba." },
  { id: "cr-04", codigo: "AD04", nome: "Pistacho — Lista de sabores", imagem: imagensCriativos[3], campanhaId: "cmp-02", conjuntoId: "adset-03", headline: "El postre que más se vende", angulo: "Variedade", formato: "Carrossel", dataInicio: "2026-06-22", investimento: 290, impressoes: 54000, ctr: 2.11, cpc: 0.25, cpm: 5.37, frequencia: 1.62, cliques: 1140, checkouts: 150, vendas: 96, cpa: 3.02, receita: 980, roas: 3.38, lucro: 610, taxaConversao: 8.4, fadiga: "atencao", indiceQualidade: 76, notaIA: "Bom, mas frequência subindo. Preparar substituto." },
  { id: "cr-05", codigo: "AD05", nome: "Coco — Passo a passo", imagem: imagensCriativos[4], campanhaId: "cmp-03", conjuntoId: "adset-04", headline: "Aprende a hacerlas hoy", angulo: "Facilidade", formato: "Imagem 1:1", dataInicio: "2026-06-25", investimento: 210, impressoes: 41000, ctr: 2.05, cpc: 0.23, cpm: 4.71, frequencia: 1.31, cliques: 900, checkouts: 108, vendas: 60, cpa: 3.50, receita: 560, roas: 2.67, lucro: 290, taxaConversao: 6.7, fadiga: "saudavel", indiceQualidade: 70, notaIA: "Promissor com poucos dados. Manter em teste." },
  { id: "cr-06", codigo: "AD06", nome: "Maracujá — Oferta", imagem: imagensCriativos[5], campanhaId: "cmp-03", conjuntoId: "adset-04", headline: "Todo por menos de $10", angulo: "Preço/oferta", formato: "Reels 9:16", dataInicio: "2026-06-26", investimento: 220, impressoes: 44000, ctr: 1.98, cpc: 0.25, cpm: 5.0, frequencia: 1.34, cliques: 870, checkouts: 96, vendas: 52, cpa: 4.23, receita: 470, roas: 2.14, lucro: 180, taxaConversao: 6.0, fadiga: "atencao", indiceQualidade: 58, notaIA: "Mediano. CPA no limite; otimizar público." },
  { id: "cr-07", codigo: "AD07", nome: "Dulce de leche — UGC", imagem: imagensCriativos[6], campanhaId: "cmp-01", conjuntoId: "adset-01", headline: "Mira lo fácil que es", angulo: "UGC/autêntico", formato: "Reels 9:16", dataInicio: "2026-06-28", investimento: 180, impressoes: 32000, ctr: 2.78, cpc: 0.20, cpm: 5.63, frequencia: 1.18, cliques: 890, checkouts: 132, vendas: 88, cpa: 2.05, receita: 970, roas: 5.39, lucro: 690, taxaConversao: 9.9, fadiga: "saudavel", indiceQualidade: 95, notaIA: "Melhor CPA e ROAS. Escalar agressivamente com verba do AD03." },
  { id: "cr-08", codigo: "AD08", nome: "Frutos rojos — Curiosidade", imagem: imagensCriativos[7], campanhaId: "cmp-04", conjuntoId: "adset-05", headline: "El secreto de las paletas cremosas", angulo: "Curiosidade", formato: "Imagem 1:1", dataInicio: "2026-06-24", investimento: 260, impressoes: 52000, ctr: 1.62, cpc: 0.31, cpm: 5.0, frequencia: 1.44, cliques: 840, checkouts: 92, vendas: 44, cpa: 5.91, receita: 430, roas: 1.65, lucro: 60, taxaConversao: 5.2, fadiga: "atencao", indiceQualidade: 46, notaIA: "CTR baixo indica gancho fraco. Reescrever headline." },
  { id: "cr-09", codigo: "AD09", nome: "Cookies&cream — Gasto sem venda", imagem: imagensCriativos[8], campanhaId: "cmp-05", conjuntoId: "adset-06", headline: "Empieza tu negocio dulce", angulo: "Negócio caseiro", formato: "Carrossel", dataInicio: "2026-06-29", investimento: 190, impressoes: 33000, ctr: 1.51, cpc: 0.38, cpm: 5.75, frequencia: 1.22, cliques: 500, checkouts: 40, vendas: 12, cpa: 15.83, receita: 120, roas: 0.63, lucro: -140, taxaConversao: 2.4, fadiga: "fadiga", indiceQualidade: 22, notaIA: "Gastou sem converter. Pausar imediatamente." },
  { id: "cr-10", codigo: "AD10", nome: "Surtido — Novo teste", imagem: imagensCriativos[9], campanhaId: "cmp-06", conjuntoId: "adset-06", headline: "12 sabores en una caja", angulo: "Variedade", formato: "Imagem 1:1", dataInicio: "2026-07-01", investimento: 90, impressoes: 16000, ctr: 2.15, cpc: 0.26, cpm: 5.63, frequencia: 1.11, cliques: 344, checkouts: 38, vendas: 18, cpa: 5.0, receita: 180, roas: 2.0, lucro: 60, taxaConversao: 5.2, fadiga: "saudavel", indiceQualidade: 63, notaIA: "Poucos dados. Aguardar ~30 cliques para avaliar." },
]

// ---- Países ----------------------------------------------------------------

export const paises: PaisMetrica[] = [
  { pais: "Estados Unidos", codigo: "US", investimento: 1760, vendas: 534, cpa: 3.30, receita: 5500, roas: 3.13, lucro: 3040, conversao: 8.1, cpm: 5.3, cpc: 0.24, ctr: 2.12, ticketMedio: 12.8, reembolso: 3.1 },
  { pais: "México", codigo: "MX", investimento: 870, vendas: 318, cpa: 2.74, receita: 3120, roas: 3.59, lucro: 1980, conversao: 7.7, cpm: 4.68, cpc: 0.21, ctr: 2.21, ticketMedio: 9.8, reembolso: 2.6 },
  { pais: "Colômbia", codigo: "CO", investimento: 260, vendas: 74, cpa: 3.51, receita: 690, roas: 2.65, lucro: 340, conversao: 6.8, cpm: 4.3, cpc: 0.22, ctr: 2.05, ticketMedio: 9.3, reembolso: 3.4 },
  { pais: "Peru", codigo: "PE", investimento: 170, vendas: 44, cpa: 3.86, receita: 400, roas: 2.35, lucro: 170, conversao: 6.2, cpm: 4.5, cpc: 0.23, ctr: 1.98, ticketMedio: 9.1, reembolso: 3.8 },
  { pais: "Chile", codigo: "CL", investimento: 150, vendas: 20, cpa: 7.50, receita: 190, roas: 1.27, lucro: 20, conversao: 4.1, cpm: 5.4, cpc: 0.30, ctr: 1.74, ticketMedio: 9.5, reembolso: 4.2 },
  { pais: "Argentina", codigo: "AR", investimento: 260, vendas: 22, cpa: 11.8, receita: 210, roas: 0.81, lucro: -140, conversao: 3.1, cpm: 5.6, cpc: 0.34, ctr: 1.62, ticketMedio: 9.5, reembolso: 5.1 },
  { pais: "Uruguai", codigo: "UY", investimento: 90, vendas: 12, cpa: 7.50, receita: 120, roas: 1.33, lucro: 20, conversao: 4.4, cpm: 5.2, cpc: 0.31, ctr: 1.7, ticketMedio: 10.0, reembolso: 3.0 },
  { pais: "Rep. Dominicana", codigo: "DO", investimento: 70, vendas: 10, cpa: 7.0, receita: 96, roas: 1.37, lucro: 16, conversao: 4.6, cpm: 5.0, cpc: 0.29, ctr: 1.8, ticketMedio: 9.6, reembolso: 3.2 },
]

// ---- Série diária (30 dias) ------------------------------------------------

function gerarSerie(): DiaMetrica[] {
  const dias: DiaMetrica[] = []
  let seed = 42
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const hoje = new Date("2026-07-16T00:00:00Z")
  for (let i = 29; i >= 0; i--) {
    const d = new Date(hoje)
    d.setUTCDate(hoje.getUTCDate() - i)
    const base = 120 + (29 - i) * 3.2
    const investimento = Math.round((base + rand() * 40) * 100) / 100
    const roas = 2.6 + rand() * 1.6
    const receita = Math.round(investimento * roas * 100) / 100
    const vendas = Math.round(investimento / (2.6 + rand() * 1.2))
    const lucro = Math.round((receita * 0.62 - investimento) * 100) / 100
    const cpa = Math.round((investimento / Math.max(vendas, 1)) * 100) / 100
    const ctr = Math.round((1.8 + rand() * 0.9) * 100) / 100
    const cpm = Math.round((4.3 + rand() * 1.6) * 100) / 100
    dias.push({
      dia: d.toISOString().slice(0, 10),
      investimento,
      receita,
      lucro,
      vendas,
      cpa,
      roas: Math.round(roas * 100) / 100,
      ctr,
      cpm,
    })
  }
  return dias
}

export const serieDiaria: DiaMetrica[] = gerarSerie()

// ---- Funil -----------------------------------------------------------------

export interface EtapaFunil {
  etapa: string
  valor: number
}

export const funil: EtapaFunil[] = [
  { etapa: "Impressões", valor: 742000 },
  { etapa: "Cliques", valor: 15390 },
  { etapa: "Visualizações da página", valor: 12320 },
  { etapa: "Checkouts iniciados", valor: 1790 },
  { etapa: "Compras aprovadas", valor: 908 },
  { etapa: "Order bumps", valor: 372 },
  { etapa: "Upsells", valor: 214 },
  { etapa: "Reembolsos", valor: 41 },
]

// ---- Vendas (lista) --------------------------------------------------------

function gerarVendas(): Venda[] {
  const vendas: Venda[] = []
  let seed = 7
  const rand = () => {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    return seed / 0x7fffffff
  }
  const paisesLista = ["Estados Unidos", "México", "Colômbia", "Peru", "Chile", "Argentina", "Uruguai"]
  const codigos: Record<string, string> = { "Estados Unidos": "US", México: "MX", Colômbia: "CO", Peru: "PE", Chile: "CL", Argentina: "AR", Uruguai: "UY" }
  const ofertas = ["Produto principal", "Principal + Order bump", "Principal + Upsell"]
  for (let i = 0; i < 60; i++) {
    const cr = criativos[Math.floor(rand() * criativos.length)]
    const cmp = campanhas.find((c) => c.id === cr.campanhaId)!
    const prod = produtos.find((p) => p.id === cmp.produtoId)!
    const pais = paisesLista[Math.floor(rand() * paisesLista.length)]
    const temBump = rand() > 0.7
    const status: Venda["status"] = rand() > 0.94 ? "reembolsada" : rand() > 0.9 ? "pendente" : "aprovada"
    const valor = Math.round((prod.preco + (temBump ? 6.9 : 0)) * 100) / 100
    const dia = new Date("2026-07-16T00:00:00Z")
    dia.setUTCDate(dia.getUTCDate() - Math.floor(rand() * 14))
    dia.setUTCHours(Math.floor(rand() * 24), Math.floor(rand() * 60))
    vendas.push({
      id: `HP${(1000000 + i).toString()}`,
      data: dia.toISOString(),
      produto: prod.nome,
      oferta: temBump ? ofertas[1] : ofertas[Math.floor(rand() * 3)],
      valor,
      moeda: "USD",
      pais,
      status,
      origem: "Meta Ads",
      campanha: cmp.nome,
      criativo: cr.codigo,
      utmSource: "facebook",
      utmMedium: "paid",
      utmCampaign: cmp.id,
      utmContent: cr.codigo,
      adId: `1201${(i + 10).toString()}`,
      transactionId: `HP${(1000000 + i).toString()}`,
      orderBump: temBump,
      comissaoLiquida: Math.round(valor * 0.86 * 100) / 100,
    })
  }
  return vendas.sort((a, b) => (a.data < b.data ? 1 : -1))
}

export const vendas: Venda[] = gerarVendas()

// ---- Agregados / KPIs ------------------------------------------------------

export function calcularResumo() {
  const investimento = campanhas.reduce((s, c) => s + c.investimento, 0)
  const receitaBruta = campanhas.reduce((s, c) => s + c.receita, 0)
  const reembolsos = campanhas.reduce((s, c) => s + c.reembolsos, 0)
  const taxas = Math.round(receitaBruta * 0.099)
  const receitaLiquida = Math.round(receitaBruta - taxas)
  const lucro = Math.round(receitaLiquida - investimento - reembolsos)
  const vendasTotais = campanhas.reduce((s, c) => s + c.vendas, 0)
  const cliques = campanhas.reduce((s, c) => s + c.cliques, 0)
  const impressoes = campanhas.reduce((s, c) => s + c.impressoes, 0)
  const alcance = campanhas.reduce((s, c) => s + c.alcance, 0)
  const checkouts = campanhas.reduce((s, c) => s + c.checkouts, 0)
  return {
    investimento,
    receitaBruta,
    receitaLiquida,
    lucro,
    margem: Math.round((lucro / receitaLiquida) * 1000) / 10,
    roas: Math.round((receitaBruta / investimento) * 100) / 100,
    roi: Math.round((lucro / investimento) * 1000) / 10,
    vendas: vendasTotais,
    cpa: Math.round((investimento / vendasTotais) * 100) / 100,
    ticketMedio: Math.round((receitaBruta / vendasTotais) * 100) / 100,
    taxaConversao: Math.round((vendasTotais / cliques) * 1000) / 10,
    cliques,
    ctr: Math.round((cliques / impressoes) * 10000) / 100,
    cpc: Math.round((investimento / cliques) * 100) / 100,
    cpm: Math.round((investimento / (impressoes / 1000)) * 100) / 100,
    frequencia: Math.round((impressoes / alcance) * 100) / 100,
    impressoes,
    alcance,
    checkouts,
    abandonoCheckout: Math.round(((checkouts - vendasTotais) / checkouts) * 1000) / 10,
    reembolsos,
    taxaReembolso: Math.round((reembolsos / receitaBruta) * 1000) / 10,
    taxas,
  }
}

export const resumo = calcularResumo()

// ---- Formatadores ----------------------------------------------------------

export function formatUSD(v: number): string {
  return new Intl.NumberFormat("pt-BR", { style: "currency", currency: "USD" }).format(v)
}

export function formatNum(v: number): string {
  return new Intl.NumberFormat("pt-BR").format(v)
}

export function formatPct(v: number): string {
  return `${new Intl.NumberFormat("pt-BR", { maximumFractionDigits: 1 }).format(v)}%`
}

export function formatData(iso: string): string {
  return new Date(iso).toLocaleString("pt-BR", { day: "2-digit", month: "2-digit", hour: "2-digit", minute: "2-digit" })
}

// ---- Contexto para a IA ----------------------------------------------------

export function construirContextoIA(): string {
  const r = resumo
  return JSON.stringify(
    {
      periodo: "Últimos 30 dias (dados de demonstração)",
      moeda: "USD",
      resumoGeral: r,
      campanhas: campanhas.map((c) => ({
        nome: c.nome, saude: c.saude, fase: c.fase, pais: c.pais, status: c.status,
        investimento: c.investimento, vendas: c.vendas, cpa: c.cpa, roas: c.roas,
        lucro: c.lucro, margem: c.margem, ctr: c.ctr, frequencia: c.frequencia, tendencia: c.tendencia,
      })),
      criativos: criativos.map((c) => ({
        codigo: c.codigo, campanhaId: c.campanhaId, investimento: c.investimento, vendas: c.vendas,
        cpa: c.cpa, roas: c.roas, ctr: c.ctr, cpc: c.cpc, frequencia: c.frequencia, lucro: c.lucro,
        taxaConversao: c.taxaConversao, fadiga: c.fadiga, indiceQualidade: c.indiceQualidade,
      })),
      paises: paises.map((p) => ({ pais: p.pais, investimento: p.investimento, vendas: p.vendas, cpa: p.cpa, roas: p.roas, lucro: p.lucro })),
      funil,
    },
    null,
    2,
  )
}
