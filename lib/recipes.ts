export type Recipe = {
  id: number
  slug: string
  numero: string
  titulo: string
  subtitulo: string
  descripcion: string
  rinde: number
  image: string
  categoria: string
  theme: string
  posterImage?: string
  ingredientes: string[]
  ingredientesExtra?: { titulo: string; items: string[] }
  dica: string
  idealPara: string
  pasos: string[]
  listo: string
  consejos: string[]
  conservacion: string
  costoPaleta: string
  precioVenta: string
}

type Tech =
  | "chocolate"
  | "cremosa"
  | "rellena"
  | "galleta"
  | "postre"
  | "gourmet"
  | "tropical"
  | "economica"
  | "vender"
  | "especial"

type Flavor = {
  photo: string
  theme: string
  nombre: string
  tipo: "fruta" | "cremoso"
  ing: string
}

const FLAVORS: Record<string, Flavor> = {
  chocolate: { photo: "chocolate", theme: "chocolate", nombre: "chocolate", tipo: "cremoso", ing: "150 g de chocolate meio amargo picado" },
  "chocolate-blanco": { photo: "vainilla", theme: "naranja", nombre: "chocolate branco", tipo: "cremoso", ing: "150 g de chocolate branco picado" },
  fresa: { photo: "fresa", theme: "morango", nombre: "morango", tipo: "fruta", ing: "1 e 1/2 xícaras de morangos frescos" },
  mango: { photo: "mango", theme: "naranja", nombre: "manga", tipo: "fruta", ing: "1 e 1/2 xícaras de polpa de manga" },
  maracuya: { photo: "maracuya", theme: "naranja", nombre: "maracujá", tipo: "fruta", ing: "1 xícara de polpa de maracujá" },
  pina: { photo: "pina", theme: "naranja", nombre: "abacaxi", tipo: "fruta", ing: "1 e 1/2 xícaras de abacaxi picado" },
  coco: { photo: "coco", theme: "azul", nombre: "coco", tipo: "cremoso", ing: "1 xícara de coco ralado e 1 xícara de leite de coco" },
  banana: { photo: "banana", theme: "naranja", nombre: "banana", tipo: "fruta", ing: "2 bananas maduras" },
  durazno: { photo: "durazno", theme: "naranja", nombre: "pêssego", tipo: "fruta", ing: "1 e 1/2 xícaras de pêssego em pedaços" },
  guayaba: { photo: "guayaba", theme: "morango", nombre: "goiaba", tipo: "fruta", ing: "1 e 1/2 xícaras de polpa de goiaba" },
  mora: { photo: "mora", theme: "morango", nombre: "amora", tipo: "fruta", ing: "1 e 1/2 xícaras de amoras" },
  papaya: { photo: "papaya", theme: "naranja", nombre: "mamão", tipo: "fruta", ing: "1 e 1/2 xícaras de mamão em pedaços" },
  vainilla: { photo: "vainilla", theme: "naranja", nombre: "baunilha", tipo: "cremoso", ing: "2 colheres de chá de essência de baunilha" },
  limon: { photo: "limon", theme: "pistache", nombre: "limão", tipo: "fruta", ing: "1/2 xícara de suco de limão e raspas de 1 limão" },
  cafe: { photo: "cafe", theme: "chocolate", nombre: "café", tipo: "cremoso", ing: "2 colheres de sopa de café solúvel" },
  pistacho: { photo: "pistacho", theme: "pistache", nombre: "pistache", tipo: "cremoso", ing: "1/2 xícara de pistaches descascados" },
  "frutos-rojos": { photo: "frutos-rojos", theme: "morango", nombre: "frutas vermelhas", tipo: "fruta", ing: "1 e 1/2 xícaras de frutas vermelhas" },
  "dulce-de-leche": { photo: "dulce-de-leche", theme: "naranja", nombre: "doce de leite", tipo: "cremoso", ing: "1 xícara de doce de leite" },
  galleta: { photo: "galleta", theme: "azul", nombre: "biscoito", tipo: "cremoso", ing: "8 biscoitos triturados" },
  mani: { photo: "mani", theme: "chocolate", nombre: "amendoim", tipo: "cremoso", ing: "1/2 xícara de amendoim torrado e 3 colheres de sopa de pasta de amendoim" },
  naranja: { photo: "naranja", theme: "naranja", nombre: "laranja", tipo: "fruta", ing: "1 xícara de suco de laranja natural" },
  sandia: { photo: "sandia", theme: "morango", nombre: "melancia", tipo: "fruta", ing: "2 xícaras de melancia sem sementes" },
  melon: { photo: "mango", theme: "naranja", nombre: "melão", tipo: "fruta", ing: "2 xícaras de melão em pedaços" },
  arcoiris: { photo: "arcoiris", theme: "morango", nombre: "frutas variadas", tipo: "fruta", ing: "2 xícaras de frutas variadas picadas" },
  yogur: { photo: "yogur", theme: "morango", nombre: "iogurte natural", tipo: "cremoso", ing: "2 xícaras de iogurte natural" },
  cheesecake: { photo: "frutos-rojos", theme: "morango", nombre: "cheesecake", tipo: "cremoso", ing: "200 g de cream cheese e 4 biscoitos maisena" },
  tiramisu: { photo: "cafe", theme: "chocolate", nombre: "tiramisù", tipo: "cremoso", ing: "200 g de queijo mascarpone e 2 colheres de sopa de café" },
  "arroz-con-leche": { photo: "postre", theme: "naranja", nombre: "arroz doce", tipo: "cremoso", ing: "1 xícara de arroz cozido no leite com canela" },
  flan: { photo: "dulce-de-leche", theme: "naranja", nombre: "pudim", tipo: "cremoso", ing: "1 xícara de pudim preparado com calda de caramelo" },
  "tres-leches": { photo: "postre", theme: "naranja", nombre: "três leites", tipo: "cremoso", ing: "1 xícara de pão de ló embebido em três leites" },
  brownie: { photo: "chocolate", theme: "chocolate", nombre: "brownie", tipo: "cremoso", ing: "1 xícara de brownie em pedaços" },
  cocada: { photo: "coco", theme: "azul", nombre: "cocada", tipo: "cremoso", ing: "1 e 1/2 xícaras de coco ralado" },
  "queso-guayaba": { photo: "guayaba", theme: "morango", nombre: "queijo com goiaba", tipo: "cremoso", ing: "200 g de cream cheese e 1 xícara de goiaba" },
  avellana: { photo: "chocolate", theme: "chocolate", nombre: "creme de avelã", tipo: "cremoso", ing: "1/2 xícara de creme de avelã" },
  "leche-polvo": { photo: "vainilla", theme: "naranja", nombre: "leite em pó", tipo: "cremoso", ing: "1/2 xícara de leite em pó" },
  caramelo: { photo: "dulce-de-leche", theme: "naranja", nombre: "caramelo", tipo: "cremoso", ing: "1 xícara de calda de caramelo" },
  postre: { photo: "postre", theme: "chocolate", nombre: "creme de sobremesa", tipo: "cremoso", ing: "1 xícara de creme de confeiteiro" },
}

const ADDONS: Record<string, string> = {
  "doce de leite": "1/2 xícara de doce de leite",
  "creme de avelã": "1/2 xícara de creme de avelã",
  morango: "1/2 xícara de morangos picados",
  manga: "1/2 xícara de polpa de manga",
  banana: "1 banana em rodelas",
  biscoito: "6 biscoitos triturados",
  "biscoito triturado": "6 biscoitos triturados",
  "biscoito recheado": "6 biscoitos recheados em pedaços",
  coco: "1/2 xícara de coco ralado",
  "coco ralado": "1/2 xícara de coco ralado",
  amendoim: "1/2 xícara de amendoim torrado",
  café: "1 colher de sopa de café solúvel",
  caramelo: "1/2 xícara de calda de caramelo",
  baunilha: "1 colher de chá extra de essência de baunilha",
  "leite condensado": "1/2 xícara extra de leite condensado",
  "creme branco": "1/2 xícara de chantilly",
  creme: "1/2 xícara de chantilly",
  "cream cheese": "150 g de cream cheese",
  amêndoas: "1/3 xícara de amêndoas picadas",
  nozes: "1/3 xícara de nozes picadas",
  laranja: "raspas e suco de 1 laranja",
  maracujá: "1/2 xícara de polpa de maracujá",
  "frutas vermelhas": "1/2 xícara de frutas vermelhas",
  chocolate: "100 g de chocolate picado",
  "chocolate branco": "80 g de chocolate branco",
  avelãs: "1/3 xícara de avelãs picadas",
  "amendoim torrado": "1/2 xícara de amendoim torrado",
  "caramelo salgado": "1/2 xícara de caramelo com uma pitada de sal marinho",
  hortelã: "algumas folhas de hortelã picadas",
  "chocolate crocante": "80 g de chocolate para derreter",
  "cobertura de chocolate": "100 g de chocolate para cobertura",
  "recheio cremoso": "1/2 xícara de recheio de creme",
  "pasta de amendoim": "3 colheres de sopa de pasta de amendoim",
  "geleia de morango": "1/2 xícara de geleia de morango",
  "doce de leite com cobertura": "1/2 xícara de doce de leite e 100 g de chocolate",
}

function addonIngrediente(add: string) {
  return ADDONS[add] ?? `1/2 xícara de ${add}`
}

function slugify(text: string) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
}

function pad(n: number) {
  return n < 10 ? `0${n}` : `${n}`
}

function pasosFor(tech: Tech, f: Flavor, add?: string): string[] {
  const palito = "Coloque os palitos no centro de cada molde."
  const congelar = "Leve ao congelador por no mínimo 6 horas ou até ficarem completamente firmes."
  switch (tech) {
    case "chocolate":
      return [
        "Em uma panela, coloque o leite integral, o creme de leite e o leite condensado.",
        `Adicione o ${f.nombre} picado${add ? ` e ${add}` : ""} e leve ao fogo médio, mexendo sem parar até derreter por completo (sem deixar ferver).`,
        "Retire do fogo, acrescente a essência de baunilha e deixe amornar por alguns minutos.",
        "Despeje a mistura nos moldes de paleta, enchendo 3/4 da capacidade.",
        palito,
        congelar,
      ]
    case "cremosa":
      return [
        `Lave e pique ${f.nombre}. Reserve alguns pedaços para decorar.`,
        `No liquidificador, coloque o leite integral, o creme de leite, o leite condensado e ${f.nombre}.`,
        "Bata até obter uma mistura cremosa e homogênea. Adicione a essência de baunilha.",
        `Despeje a mistura nos moldes${add ? ` e incorpore ${add}` : ""}, enchendo 3/4 da capacidade. Acrescente os pedaços reservados.`,
        palito,
        congelar,
      ]
    case "rellena":
      return [
        `Prepare a mistura base batendo o leite integral, o creme de leite e o leite condensado com o ${f.nombre}.`,
        "Despeje uma primeira camada da mistura nos moldes, enchendo até a metade.",
        `Adicione no centro uma colher de chá de recheio de ${add ?? "leite condensado"}, cuidando para que fique no meio.`,
        "Cubra com mais mistura até encher 3/4 do molde, selando bem o recheio.",
        palito,
        congelar,
      ]
    case "galleta":
      return [
        `Bata o leite integral, o creme de leite, o leite condensado e o ${f.nombre} até integrar.`,
        "Triture os biscoitos deixando alguns pedaços grandes para dar textura.",
        `Incorpore os biscoitos triturados${add ? ` e ${add}` : ""} à mistura e mexa suavemente.`,
        "Despeje nos moldes, enchendo 3/4 da capacidade, e distribua mais pedaços de biscoito por cima.",
        palito,
        congelar,
      ]
    case "postre":
      return [
        `Prepare a base combinando o creme de leite, o leite condensado e o ${f.nombre}.`,
        "Bata até obter uma mistura cremosa e bem integrada.",
        `Monte camadas nos moldes alternando a mistura${add ? ` com ${add}` : ""} para criar o efeito de sobremesa.`,
        "Despeje até encher 3/4 da capacidade de cada molde.",
        palito,
        congelar,
      ]
    case "gourmet":
      return [
        "Em uma panela, aqueça o leite integral com o creme de leite e o leite condensado (sem ferver).",
        `Incorpore o ${f.nombre}${add ? ` e ${add}` : ""} e misture até integrar por completo.`,
        "Deixe a mistura esfriar e adicione a essência de baunilha.",
        "Despeje nos moldes, enchendo 3/4 da capacidade.",
        "Coloque os palitos e reserve um pouco da mistura para decorar a ponta.",
        "Congele por no mínimo 6 horas e banhe a ponta no chocolate para um acabamento premium.",
      ]
    case "tropical":
      return [
        `Bata o ${f.nombre} com o leite de coco (ou leite integral) e o leite condensado.`,
        `Adicione${add ? ` ${add} e` : ""} o creme de leite e bata até integrar.`,
        "Prove e ajuste a doçura conforme a maturação da fruta.",
        "Despeje a mistura nos moldes, enchendo 3/4 da capacidade.",
        palito,
        congelar,
      ]
    case "economica":
      return [
        "Em uma tigela, misture o leite integral com o leite condensado até integrar.",
        `Adicione o ${f.nombre} e a essência de baunilha, e mexa muito bem.`,
        "Despeje a mistura nos moldes, enchendo 3/4 da capacidade.",
        palito,
        "Acomode os moldes bem nivelados no congelador.",
        "Congele por no mínimo 6 horas ou até ficarem completamente firmes.",
      ]
    case "vender":
      return [
        `Prepare a mistura base batendo o leite integral, o creme de leite e o leite condensado com o ${f.nombre}.`,
        `Incorpore ${add ?? "o recheio ou a cobertura escolhida"} para dar um valor agregado ao seu produto.`,
        "Despeje nos moldes, enchendo 3/4 da capacidade.",
        palito,
        congelar,
        "Desenforme, embale em saquinhos individuais e etiquete para a venda.",
      ]
    case "especial":
      return [
        `Combine o ${f.nombre} com o creme de leite e o leite condensado até obter uma mistura suave.`,
        `Adicione${add ? ` ${add} e` : ""} a essência de baunilha e misture bem.`,
        "Despeje nos moldes, enchendo 3/4 da capacidade.",
        palito,
        congelar,
        "Desenforme com cuidado e decore a gosto antes de servir.",
      ]
  }
}

const CONSEJOS: Record<Tech, string[]> = {
  chocolate: [
    "Use chocolate de boa qualidade para um sabor mais intenso.",
    "Não deixe a mistura ferver para que não talhe.",
    "Conserve sempre no congelador.",
  ],
  cremosa: [
    "Use frutas bem maduras para mais doçura natural.",
    "Reserve pedaços de fruta para decorar cada paleta.",
    "Conserve sempre no congelador.",
  ],
  rellena: [
    "Mantenha o recheio bem centralizado para a surpresa perfeita.",
    "Sele bem a última camada para que o recheio não vaze.",
    "Conserve sempre no congelador.",
  ],
  galleta: [
    "Deixe pedaços grandes de biscoito para mais textura.",
    "Adicione os biscoitos no final para que fiquem crocantes.",
    "Conserve sempre no congelador.",
  ],
  postre: [
    "Monte as camadas com paciência para um efeito bonito.",
    "Você pode decorar com farofa de biscoito ou crumble por cima.",
    "Conserve sempre no congelador.",
  ],
  gourmet: [
    "Banhe a ponta no chocolate para uma apresentação premium.",
    "Use ingredientes de primeira qualidade para se destacar.",
    "Conserve sempre no congelador.",
  ],
  tropical: [
    "Use frutas tropicais maduras para um sabor vibrante.",
    "O leite de coco realça o sabor tropical.",
    "Conserve sempre no congelador.",
  ],
  economica: [
    "Aproveite ingredientes básicos para baixar o custo.",
    "Ideal para produzir em quantidade com pouco investimento.",
    "Conserve sempre no congelador.",
  ],
  vender: [
    "Embale em saquinhos individuais e sele bem.",
    "Etiquete com sabor e preço para vender mais rápido.",
    "Conserve sempre no congelador.",
  ],
  especial: [
    "Combine bem os sabores antes de congelar.",
    "Decore a gosto para surpreender seus clientes.",
    "Conserve sempre no congelador.",
  ],
}

const CONSERVACION =
  "Mantenha as paletas no congelador em recipientes fechados ou sacos herméticos para que não absorvam odores e se conservem perfeitas."

type Group = {
  cat: string
  tech: Tech
  ideal: string
  costo: string
  precio: string
  dica: string
  entries: { t: string; s: string; f: keyof typeof FLAVORS; add?: string }[]
}

const GROUPS: Group[] = [
  {
    cat: "Chocolate",
    tech: "chocolate",
    ideal: "Sobremesas em família, festas, empreender e vender.",
    costo: "US$ 0.28 – 0.38",
    precio: "US$ 1.00 – 1.50",
    dica: "Não deixe a mistura ferver; retire do fogo assim que o chocolate derreter para uma textura sedosa.",
    entries: [
      { t: "Paleta de Chocolate", s: "com doce de leite", f: "chocolate", add: "doce de leite" },
      { t: "Paleta de Chocolate", s: "com creme de avelã", f: "chocolate", add: "creme de avelã" },
      { t: "Paleta de Chocolate Branco", s: "com morango", f: "chocolate-blanco", add: "morango" },
      { t: "Paleta de Chocolate", s: "com biscoito", f: "chocolate", add: "biscoito" },
      { t: "Paleta de Chocolate", s: "com coco", f: "chocolate", add: "coco" },
      { t: "Paleta de Chocolate", s: "com amendoim", f: "chocolate", add: "amendoim" },
      { t: "Paleta de Chocolate", s: "com café", f: "chocolate", add: "café" },
      { t: "Paleta de Chocolate", s: "com caramelo", f: "chocolate", add: "caramelo" },
      { t: "Paleta de Chocolate", s: "com baunilha", f: "chocolate", add: "baunilha" },
      { t: "Paleta de Chocolate", s: "com leite condensado", f: "chocolate", add: "leite condensado" },
    ],
  },
  {
    cat: "Frutas Cremosas",
    tech: "cremosa",
    ideal: "Sobremesas refrescantes, lanches, empreender e vender.",
    costo: "US$ 0.22 – 0.30",
    precio: "US$ 1.00 – 1.50",
    dica: "Reserve alguns pedaços de fruta para adicionar ao molde e obter paletas com pedacinhos de verdade.",
    entries: [
      { t: "Paleta Cremosa de Morango", s: "fresca e natural", f: "fresa" },
      { t: "Paleta Cremosa de Manga", s: "doce e tropical", f: "mango" },
      { t: "Paleta Cremosa de Maracujá", s: "agridoce e refrescante", f: "maracuya" },
      { t: "Paleta Cremosa de Abacaxi", s: "suculenta e tropical", f: "pina" },
      { t: "Paleta Cremosa de Coco", s: "suave e aromática", f: "coco" },
      { t: "Paleta Cremosa de Banana", s: "doce e natural", f: "banana" },
      { t: "Paleta Cremosa de Pêssego", s: "suave e frutada", f: "durazno" },
      { t: "Paleta Cremosa de Goiaba", s: "tropical e doce", f: "guayaba" },
      { t: "Paleta Cremosa de Amora", s: "intensa e frutada", f: "mora" },
      { t: "Paleta Cremosa de Mamão", s: "suave e refrescante", f: "papaya" },
    ],
  },
  {
    cat: "Recheadas",
    tech: "rellena",
    ideal: "Surpreender em festas, empreender e vender com valor agregado.",
    costo: "US$ 0.28 – 0.38",
    precio: "US$ 1.20 – 1.80",
    dica: "Coloque o recheio bem no centro e sele com a mistura para que seja uma surpresa em cada mordida.",
    entries: [
      { t: "Paleta de Morango", s: "recheada com leite condensado", f: "fresa", add: "leite condensado" },
      { t: "Paleta de Manga", s: "recheada com creme", f: "mango", add: "creme" },
      { t: "Paleta de Coco", s: "recheada com chocolate", f: "coco", add: "chocolate" },
      { t: "Paleta de Baunilha", s: "recheada com doce de leite", f: "vainilla", add: "doce de leite" },
      { t: "Paleta de Chocolate", s: "recheada com creme branco", f: "chocolate", add: "creme branco" },
      { t: "Paleta de Maracujá", s: "recheada com leite condensado", f: "maracuya", add: "leite condensado" },
      { t: "Paleta de Banana", s: "recheada com caramelo", f: "banana", add: "caramelo" },
      { t: "Paleta de Goiaba", s: "recheada com cream cheese", f: "guayaba", add: "cream cheese" },
      { t: "Paleta de Abacaxi", s: "recheada com coco", f: "pina", add: "coco" },
      { t: "Paleta de Café", s: "recheada com chocolate", f: "cafe", add: "chocolate" },
    ],
  },
  {
    cat: "Com Biscoito",
    tech: "galleta",
    ideal: "Lanches, desejos, empreender e vender.",
    costo: "US$ 0.25 – 0.35",
    precio: "US$ 1.00 – 1.50",
    dica: "Adicione os biscoitos no final e deixe pedaços grandes para que fiquem crocantes.",
    entries: [
      { t: "Paleta de Baunilha", s: "com biscoito de chocolate", f: "vainilla", add: "biscoito" },
      { t: "Paleta de Morango", s: "com biscoito de baunilha", f: "fresa", add: "biscoito" },
      { t: "Paleta de Chocolate", s: "com biscoito recheado", f: "chocolate", add: "biscoito recheado" },
      { t: "Paleta de Limão", s: "com biscoito triturado", f: "limon", add: "biscoito triturado" },
      { t: "Paleta de Coco", s: "com biscoito doce", f: "coco", add: "biscoito" },
      { t: "Paleta de Café", s: "com biscoito de chocolate", f: "cafe", add: "biscoito" },
      { t: "Paleta de Banana", s: "com biscoito e caramelo", f: "banana", add: "caramelo" },
      { t: "Paleta de Amendoim", s: "com biscoito crocante", f: "mani", add: "biscoito" },
      { t: "Paleta de Doce de Leite", s: "com biscoito", f: "dulce-de-leche", add: "biscoito" },
      { t: "Paleta de Chocolate Branco", s: "com biscoito", f: "chocolate-blanco", add: "biscoito" },
    ],
  },
  {
    cat: "Sobremesas",
    tech: "postre",
    ideal: "Sobremesas especiais, cafeterias, empreender e vender.",
    costo: "US$ 0.35 – 0.45",
    precio: "US$ 1.50 – 2.00",
    dica: "Monte as camadas com calma para obter o efeito de uma sobremesa clássica em formato de paleta.",
    entries: [
      { t: "Paleta de Cheesecake", s: "de morango", f: "cheesecake", add: "morango" },
      { t: "Paleta de Tiramisù", s: "clássico italiano", f: "tiramisu", add: "café" },
      { t: "Paleta de Arroz Doce", s: "com canela", f: "arroz-con-leche" },
      { t: "Paleta de Pudim", s: "com calda de caramelo", f: "flan", add: "caramelo" },
      { t: "Paleta de Três Leites", s: "suave e fofinha", f: "tres-leches" },
      { t: "Paleta de Bolo de Chocolate", s: "úmido e cremoso", f: "brownie", add: "chocolate branco" },
      { t: "Paleta de Coco", s: "tipo cocada", f: "cocada", add: "leite condensado" },
      { t: "Paleta de Limão", s: "tipo torta", f: "limon", add: "biscoito" },
      { t: "Paleta de Banana Split", s: "com chocolate e morango", f: "banana", add: "morango" },
      { t: "Paleta de Brownie", s: "com creme", f: "brownie", add: "creme" },
    ],
  },
  {
    cat: "Gourmet",
    tech: "gourmet",
    ideal: "Sobremesas premium, eventos, empreender e vender com alta margem.",
    costo: "US$ 0.40 – 0.55",
    precio: "US$ 1.80 – 2.50",
    dica: "Use ingredientes de primeira e banhe a ponta no chocolate para um acabamento profissional.",
    entries: [
      { t: "Paleta de Chocolate Amargo", s: "com laranja", f: "chocolate", add: "laranja" },
      { t: "Paleta de Baunilha", s: "com frutas vermelhas", f: "vainilla", add: "frutas vermelhas" },
      { t: "Paleta de Pistache", s: "com chocolate branco", f: "pistacho", add: "chocolate branco" },
      { t: "Paleta de Café", s: "com caramelo salgado", f: "cafe", add: "caramelo salgado" },
      { t: "Paleta de Coco", s: "com amêndoas", f: "coco", add: "amêndoas" },
      { t: "Paleta de Morango", s: "com cream cheese", f: "fresa", add: "cream cheese" },
      { t: "Paleta de Manga", s: "com maracujá", f: "mango", add: "maracujá" },
      { t: "Paleta de Chocolate", s: "com avelãs", f: "chocolate", add: "avelãs" },
      { t: "Paleta de Baunilha", s: "com nozes", f: "vainilla", add: "nozes" },
      { t: "Paleta de Caramelo", s: "com amendoim torrado", f: "caramelo", add: "amendoim torrado" },
    ],
  },
  {
    cat: "Tropicais",
    tech: "tropical",
    ideal: "Dias quentes, praia, empreender e vender.",
    costo: "US$ 0.22 – 0.32",
    precio: "US$ 1.00 – 1.50",
    dica: "O leite de coco potencializa o sabor tropical; ajuste conforme a fruta que usar.",
    entries: [
      { t: "Paleta de Piña Colada", s: "sem álcool", f: "pina", add: "coco" },
      { t: "Paleta de Manga", s: "com coco", f: "mango", add: "coco" },
      { t: "Paleta de Maracujá", s: "com laranja", f: "maracuya", add: "laranja" },
      { t: "Paleta de Goiaba", s: "com leite", f: "guayaba" },
      { t: "Paleta de Mamão", s: "com baunilha", f: "papaya", add: "baunilha" },
      { t: "Paleta de Abacaxi", s: "com hortelã", f: "pina", add: "hortelã" },
      { t: "Paleta de Melancia", s: "cremosa", f: "sandia" },
      { t: "Paleta de Melão", s: "com leite condensado", f: "melon", add: "leite condensado" },
      { t: "Paleta de Banana", s: "com coco", f: "banana", add: "coco" },
      { t: "Paleta de Frutas Tropicais", s: "mix refrescante", f: "arcoiris" },
    ],
  },
  {
    cat: "Econômicas",
    tech: "economica",
    ideal: "Produzir em quantidade com baixo custo, empreender e vender.",
    costo: "US$ 0.15 – 0.22",
    precio: "US$ 0.70 – 1.10",
    dica: "Com poucos ingredientes básicos você faz muitas paletas; ideal para maximizar os lucros.",
    entries: [
      { t: "Paleta Cremosa de Baunilha", s: "clássica e econômica", f: "vainilla" },
      { t: "Paleta de Chocolate", s: "fácil e rápida", f: "chocolate" },
      { t: "Paleta de Morango", s: "econômica", f: "fresa" },
      { t: "Paleta de Banana", s: "com leite", f: "banana" },
      { t: "Paleta de Coco", s: "com três ingredientes", f: "coco" },
      { t: "Paleta de Café", s: "cremosa", f: "cafe" },
      { t: "Paleta de Caramelo", s: "simples", f: "caramelo" },
      { t: "Paleta de Biscoito", s: "econômica", f: "galleta" },
      { t: "Paleta de Leite Condensado", s: "suave e doce", f: "leche-polvo", add: "leite condensado" },
      { t: "Paleta de Chocolate", s: "com amendoim", f: "chocolate", add: "amendoim" },
    ],
  },
  {
    cat: "Para Vender",
    tech: "vender",
    ideal: "Negócio de paletas, feiras, encomendas e venda direta.",
    costo: "US$ 0.30 – 0.42",
    precio: "US$ 1.50 – 2.00",
    dica: "Apresente cada paleta embalada e etiquetada; a boa apresentação aumenta suas vendas.",
    entries: [
      { t: "Paleta de Chocolate", s: "premium", f: "chocolate", add: "cobertura de chocolate" },
      { t: "Paleta de Morango", s: "com recheio cremoso", f: "fresa", add: "recheio cremoso" },
      { t: "Paleta de Doce de Leite", s: "com cobertura", f: "dulce-de-leche", add: "doce de leite com cobertura" },
      { t: "Paleta de Manga", s: "gourmet", f: "mango", add: "creme" },
      { t: "Paleta de Coco", s: "com chocolate crocante", f: "coco", add: "chocolate crocante" },
      { t: "Paleta de Maracujá", s: "recheada", f: "maracuya", add: "leite condensado" },
      { t: "Paleta de Baunilha", s: "com caramelo", f: "vainilla", add: "caramelo" },
      { t: "Paleta de Chocolate Branco", s: "com frutas vermelhas", f: "chocolate-blanco", add: "frutas vermelhas" },
      { t: "Paleta de Café", s: "com creme", f: "cafe", add: "creme" },
      { t: "Paleta de Biscoito", s: "com chocolate", f: "galleta", add: "cobertura de chocolate" },
    ],
  },
  {
    cat: "Especiais",
    tech: "especial",
    ideal: "Sabores diferentes para se destacar, empreender e vender.",
    costo: "US$ 0.28 – 0.40",
    precio: "US$ 1.20 – 1.80",
    dica: "Combine bem os ingredientes antes de congelar para que o sabor fique uniforme.",
    entries: [
      { t: "Paleta de Iogurte", s: "com morango", f: "yogur", add: "morango" },
      { t: "Paleta de Iogurte", s: "com manga", f: "yogur", add: "manga" },
      { t: "Paleta de Leite em Pó", s: "com chocolate", f: "leche-polvo", add: "chocolate" },
      { t: "Paleta de Creme de Avelã", s: "com banana", f: "avellana", add: "banana" },
      { t: "Paleta de Cream Cheese", s: "com goiaba", f: "queso-guayaba" },
      { t: "Paleta de Coco", s: "com doce de leite", f: "coco", add: "doce de leite" },
      { t: "Paleta de Chocolate", s: "com pasta de amendoim", f: "chocolate", add: "pasta de amendoim" },
      { t: "Paleta de Baunilha", s: "com geleia de morango", f: "vainilla", add: "geleia de morango" },
      { t: "Paleta de Maracujá", s: "com chocolate branco", f: "maracuya", add: "chocolate branco" },
      { t: "Paleta Arco-Íris", s: "de frutas cremosas", f: "arcoiris" },
    ],
  },
]

function buildRecipes(): Recipe[] {
  const list: Recipe[] = []
  let n = 0
  const usedSlugs = new Set<string>()

  for (const group of GROUPS) {
    for (const e of group.entries) {
      n += 1
      const f = FLAVORS[e.f]
      let slug = slugify(`${e.t} ${e.s}`)
      while (usedSlugs.has(slug)) {
        slug = `${slug}-${n}`
      }
      usedSlugs.add(slug)

      const ingredientes = [
        "2 xícaras de leite integral (500 ml)",
        "1 xícara de creme de leite (200 ml)",
        "1/2 xícara de leite condensado (150 g)",
        "1 colher de chá de essência de baunilha",
      ]
      if (f.ing) ingredientes.push(f.ing)
      if (e.add) ingredientes.push(addonIngrediente(e.add))

      list.push({
        id: n,
        slug,
        numero: `RECEITA ${pad(n)}`,
        titulo: e.t,
        subtitulo: e.s,
        descripcion: `${e.t} ${e.s}. Cremosa, deliciosa e muito fácil de preparar. Perfeita para aproveitar em família, empreender e vender.`,
        rinde: 10,
        image: `/images/flavors/${f.photo}.png`,
        categoria: group.cat,
        theme: f.theme,
        ingredientes,
        dica: group.dica,
        idealPara: group.ideal,
        pasos: pasosFor(group.tech, f, e.add),
        listo: `Desenforme e aproveite esta deliciosa ${e.t.toLowerCase()} ${e.s}. Um sabor que conquista e que se vende sozinho!`,
        consejos: CONSEJOS[group.tech],
        conservacion: CONSERVACION,
        costoPaleta: group.costo,
        precioVenta: group.precio,
      })
    }
  }

  return list
}

export const recipes: Recipe[] = buildRecipes()

export const categorias = [
  "Todas",
  "Chocolate",
  "Frutas Cremosas",
  "Recheadas",
  "Com Biscoito",
  "Sobremesas",
  "Gourmet",
  "Tropicais",
  "Econômicas",
  "Para Vender",
  "Especiais",
] as const
