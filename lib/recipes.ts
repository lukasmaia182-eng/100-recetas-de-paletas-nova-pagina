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
  chocolate: { photo: "chocolate", theme: "chocolate", nombre: "chocolate", tipo: "cremoso", ing: "150 g de chocolate semiamargo picado" },
  "chocolate-blanco": { photo: "vainilla", theme: "naranja", nombre: "chocolate blanco", tipo: "cremoso", ing: "150 g de chocolate blanco picado" },
  fresa: { photo: "fresa", theme: "morango", nombre: "fresa", tipo: "fruta", ing: "1 y 1/2 tazas de fresas frescas" },
  mango: { photo: "mango", theme: "naranja", nombre: "mango", tipo: "fruta", ing: "1 y 1/2 tazas de pulpa de mango" },
  maracuya: { photo: "maracuya", theme: "naranja", nombre: "maracuyá", tipo: "fruta", ing: "1 taza de pulpa de maracuyá" },
  pina: { photo: "pina", theme: "naranja", nombre: "piña", tipo: "fruta", ing: "1 y 1/2 tazas de piña picada" },
  coco: { photo: "coco", theme: "azul", nombre: "coco", tipo: "cremoso", ing: "1 taza de coco rallado y 1 taza de leche de coco" },
  banana: { photo: "banana", theme: "naranja", nombre: "banana", tipo: "fruta", ing: "2 bananas maduras" },
  durazno: { photo: "durazno", theme: "naranja", nombre: "durazno", tipo: "fruta", ing: "1 y 1/2 tazas de durazno en trozos" },
  guayaba: { photo: "guayaba", theme: "morango", nombre: "guayaba", tipo: "fruta", ing: "1 y 1/2 tazas de pulpa de guayaba" },
  mora: { photo: "mora", theme: "morango", nombre: "mora", tipo: "fruta", ing: "1 y 1/2 tazas de moras" },
  papaya: { photo: "papaya", theme: "naranja", nombre: "papaya", tipo: "fruta", ing: "1 y 1/2 tazas de papaya en trozos" },
  vainilla: { photo: "vainilla", theme: "naranja", nombre: "vainilla", tipo: "cremoso", ing: "2 cucharaditas de esencia de vainilla" },
  limon: { photo: "limon", theme: "pistache", nombre: "limón", tipo: "fruta", ing: "1/2 taza de jugo de limón y ralladura de 1 limón" },
  cafe: { photo: "cafe", theme: "chocolate", nombre: "café", tipo: "cremoso", ing: "2 cucharadas de café soluble" },
  pistacho: { photo: "pistacho", theme: "pistache", nombre: "pistacho", tipo: "cremoso", ing: "1/2 taza de pistachos pelados" },
  "frutos-rojos": { photo: "frutos-rojos", theme: "morango", nombre: "frutos rojos", tipo: "fruta", ing: "1 y 1/2 tazas de frutos rojos" },
  "dulce-de-leche": { photo: "dulce-de-leche", theme: "naranja", nombre: "dulce de leche", tipo: "cremoso", ing: "1 taza de dulce de leche" },
  galleta: { photo: "galleta", theme: "azul", nombre: "galleta", tipo: "cremoso", ing: "8 galletas trituradas" },
  mani: { photo: "mani", theme: "chocolate", nombre: "maní", tipo: "cremoso", ing: "1/2 taza de maní tostado y 3 cucharadas de crema de maní" },
  naranja: { photo: "naranja", theme: "naranja", nombre: "naranja", tipo: "fruta", ing: "1 taza de jugo de naranja natural" },
  sandia: { photo: "sandia", theme: "morango", nombre: "sandía", tipo: "fruta", ing: "2 tazas de sandía sin semillas" },
  melon: { photo: "mango", theme: "naranja", nombre: "melón", tipo: "fruta", ing: "2 tazas de melón en trozos" },
  arcoiris: { photo: "arcoiris", theme: "morango", nombre: "frutas variadas", tipo: "fruta", ing: "2 tazas de frutas variadas picadas" },
  yogur: { photo: "yogur", theme: "morango", nombre: "yogur natural", tipo: "cremoso", ing: "2 tazas de yogur natural" },
  cheesecake: { photo: "frutos-rojos", theme: "morango", nombre: "cheesecake", tipo: "cremoso", ing: "200 g de queso crema y 4 galletas maría" },
  tiramisu: { photo: "cafe", theme: "chocolate", nombre: "tiramisú", tipo: "cremoso", ing: "200 g de queso mascarpone y 2 cucharadas de café" },
  "arroz-con-leche": { photo: "postre", theme: "naranja", nombre: "arroz con leche", tipo: "cremoso", ing: "1 taza de arroz cocido en leche con canela" },
  flan: { photo: "dulce-de-leche", theme: "naranja", nombre: "flan", tipo: "cremoso", ing: "1 taza de flan preparado con caramelo" },
  "tres-leches": { photo: "postre", theme: "naranja", nombre: "tres leches", tipo: "cremoso", ing: "1 taza de bizcocho remojado en tres leches" },
  brownie: { photo: "chocolate", theme: "chocolate", nombre: "brownie", tipo: "cremoso", ing: "1 taza de brownie en trozos" },
  cocada: { photo: "coco", theme: "azul", nombre: "cocada", tipo: "cremoso", ing: "1 y 1/2 tazas de coco rallado" },
  "queso-guayaba": { photo: "guayaba", theme: "morango", nombre: "queso con guayaba", tipo: "cremoso", ing: "200 g de queso crema y 1 taza de guayaba" },
  avellana: { photo: "chocolate", theme: "chocolate", nombre: "crema de avellanas", tipo: "cremoso", ing: "1/2 taza de crema de avellanas" },
  "leche-polvo": { photo: "vainilla", theme: "naranja", nombre: "leche en polvo", tipo: "cremoso", ing: "1/2 taza de leche en polvo" },
  caramelo: { photo: "dulce-de-leche", theme: "naranja", nombre: "caramelo", tipo: "cremoso", ing: "1 taza de caramelo" },
  postre: { photo: "postre", theme: "chocolate", nombre: "crema de postre", tipo: "cremoso", ing: "1 taza de crema pastelera" },
}

const ADDONS: Record<string, string> = {
  "dulce de leche": "1/2 taza de dulce de leche",
  "crema de avellanas": "1/2 taza de crema de avellanas",
  fresa: "1/2 taza de fresas picadas",
  mango: "1/2 taza de pulpa de mango",
  banana: "1 banana en rodajas",
  galleta: "6 galletas trituradas",
  "galleta triturada": "6 galletas trituradas",
  "galleta rellena": "6 galletas rellenas troceadas",
  coco: "1/2 taza de coco rallado",
  "coco rallado": "1/2 taza de coco rallado",
  maní: "1/2 taza de maní tostado",
  café: "1 cucharada de café soluble",
  caramelo: "1/2 taza de caramelo",
  vainilla: "1 cucharadita extra de esencia de vainilla",
  "leche condensada": "1/2 taza extra de leche condensada",
  "crema blanca": "1/2 taza de crema batida",
  crema: "1/2 taza de crema batida",
  "queso crema": "150 g de queso crema",
  almendras: "1/3 taza de almendras picadas",
  nueces: "1/3 taza de nueces picadas",
  naranja: "ralladura y jugo de 1 naranja",
  maracuyá: "1/2 taza de pulpa de maracuyá",
  "frutos rojos": "1/2 taza de frutos rojos",
  chocolate: "100 g de chocolate picado",
  "chocolate blanco": "80 g de chocolate blanco",
  avellanas: "1/3 taza de avellanas picadas",
  "maní tostado": "1/2 taza de maní tostado",
  "caramelo salado": "1/2 taza de caramelo con una pizca de sal marina",
  hierbabuena: "unas hojas de hierbabuena picadas",
  "chocolate crujiente": "80 g de chocolate para derretir",
  "cobertura de chocolate": "100 g de chocolate para cobertura",
  "relleno cremoso": "1/2 taza de relleno de crema",
  "crema de maní": "3 cucharadas de crema de maní",
  "mermelada de fresa": "1/2 taza de mermelada de fresa",
  "dulce de leche con cobertura": "1/2 taza de dulce de leche y 100 g de chocolate",
}

function addonIngrediente(add: string) {
  return ADDONS[add] ?? `1/2 taza de ${add}`
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
  const articulo = f.tipo === "fruta" ? "la" : "el"
  switch (tech) {
    case "chocolate":
      return [
        "En una olla, coloca la leche entera, la crema de leche y la leche condensada.",
        `Agrega el ${f.nombre} picado${add ? ` y ${add}` : ""} y lleva a fuego medio, moviendo sin parar hasta que se derrita por completo (sin dejar hervir).`,
        "Retira del fuego, incorpora la esencia de vainilla y deja entibiar unos minutos.",
        "Vierte la mezcla en los moldes para paletas, llenando 3/4 de su capacidad.",
        "Coloca los palitos en el centro de cada molde y deja reposar 5 minutos.",
        "Lleva al congelador por mínimo 6 horas o hasta que estén completamente firmes.",
      ]
    case "cremosa":
      return [
        `Lava y trocea ${articulo} ${f.nombre}. Reserva algunos trozos para decorar.`,
        `En la licuadora, coloca la leche entera, la crema de leche, la leche condensada y ${articulo} ${f.nombre}.`,
        "Licúa hasta obtener una mezcla cremosa y homogénea. Agrega la esencia de vainilla.",
        `Vierte la mezcla en los moldes${add ? ` e incorpora ${add}` : ""}, llenando 3/4 de su capacidad. Añade los trozos reservados.`,
        "Coloca los palitos en el centro de cada molde.",
        "Lleva al congelador por mínimo 6 horas o hasta que estén completamente firmes.",
      ]
    case "rellena":
      return [
        `Prepara la mezcla base licuando la leche entera, la crema de leche y la leche condensada con el ${f.nombre}.`,
        "Vierte una primera capa de mezcla en los moldes, llenando hasta la mitad.",
        `Agrega en el centro una cucharadita de relleno de ${add ?? "leche condensada"}, cuidando que quede en el medio.`,
        "Cubre con más mezcla hasta llenar 3/4 del molde, sellando bien el relleno.",
        "Coloca los palitos en el centro de cada molde.",
        "Lleva al congelador por mínimo 6 horas o hasta que estén completamente firmes.",
      ]
    case "galleta":
      return [
        `Licúa la leche entera, la crema de leche, la leche condensada y el ${f.nombre} hasta integrar.`,
        "Tritura las galletas dejando algunos trozos grandes para dar textura.",
        `Incorpora las galletas trituradas${add ? ` y ${add}` : ""} a la mezcla y revuelve suavemente.`,
        "Vierte en los moldes, llenando 3/4 de su capacidad, y reparte más trozos de galleta por encima.",
        "Coloca los palitos en el centro de cada molde.",
        "Lleva al congelador por mínimo 6 horas o hasta que estén completamente firmes.",
      ]
    case "postre":
      return [
        `Prepara la base combinando la crema de leche, la leche condensada y el ${f.nombre}.`,
        "Bate hasta obtener una mezcla cremosa y bien integrada.",
        `Arma capas en los moldes alternando la mezcla${add ? ` con ${add}` : ""} para lograr el efecto de postre.`,
        "Vierte hasta llenar 3/4 de la capacidad de cada molde.",
        "Coloca los palitos en el centro de cada molde.",
        "Lleva al congelador por mínimo 6 horas o hasta que estén completamente firmes.",
      ]
    case "gourmet":
      return [
        "En una olla, entibia la leche entera con la crema de leche y la leche condensada (sin hervir).",
        `Incorpora el ${f.nombre}${add ? ` y ${add}` : ""} y mezcla hasta integrar por completo.`,
        "Deja enfriar la mezcla y añade la esencia de vainilla.",
        "Vierte en los moldes, llenando 3/4 de su capacidad.",
        "Coloca los palitos y reserva un poco de mezcla para decorar la punta.",
        "Congela por mínimo 6 horas y baña la punta en chocolate para un acabado premium.",
      ]
    case "tropical":
      return [
        `Licúa ${articulo} ${f.nombre} con la leche de coco (o leche entera) y la leche condensada.`,
        `Agrega${add ? ` ${add} y` : ""} la crema de leche y licúa hasta integrar.`,
        "Prueba y ajusta el dulzor según la madurez de la fruta.",
        "Vierte la mezcla en los moldes, llenando 3/4 de su capacidad.",
        "Coloca los palitos en el centro de cada molde.",
        "Lleva al congelador por mínimo 6 horas o hasta que estén completamente firmes.",
      ]
    case "economica":
      return [
        "En un bol, mezcla la leche entera con la leche condensada hasta integrar.",
        `Agrega el ${f.nombre} y la esencia de vainilla, y revuelve muy bien.`,
        "Vierte la mezcla en los moldes, llenando 3/4 de su capacidad.",
        "Coloca los palitos en el centro de cada molde.",
        "Acomoda los moldes bien nivelados en el congelador.",
        "Congela por mínimo 6 horas o hasta que estén completamente firmes.",
      ]
    case "vender":
      return [
        `Prepara la mezcla base licuando la leche entera, la crema de leche y la leche condensada con el ${f.nombre}.`,
        `Incorpora ${add ?? "el relleno o cobertura elegida"} para dar un valor agregado a tu producto.`,
        "Vierte en los moldes, llenando 3/4 de su capacidad.",
        "Coloca los palitos en el centro de cada molde.",
        "Congela por mínimo 6 horas o hasta que estén completamente firmes.",
        "Desmolda, envuelve en bolsitas individuales y etiqueta para la venta.",
      ]
    case "especial":
      return [
        `Combina el ${f.nombre} con la crema de leche y la leche condensada hasta obtener una mezcla suave.`,
        `Agrega${add ? ` ${add} y` : ""} la esencia de vainilla y mezcla bien.`,
        "Vierte en los moldes, llenando 3/4 de su capacidad.",
        "Coloca los palitos en el centro de cada molde.",
        "Lleva al congelador por mínimo 6 horas o hasta que estén completamente firmes.",
        "Desmolda con cuidado y decora al gusto antes de servir.",
      ]
  }
}

const CONSEJOS: Record<Tech, string[]> = {
  chocolate: [
    "Usa chocolate de buena calidad para un sabor más intenso.",
    "No dejes hervir la mezcla para que no se corte.",
    "Conserva siempre en congelación.",
  ],
  cremosa: [
    "Usa fruta bien madura para más dulzor natural.",
    "Reserva trozos de fruta para decorar cada paleta.",
    "Conserva siempre en congelación.",
  ],
  rellena: [
    "Mantén el relleno bien centrado para la sorpresa perfecta.",
    "Sella bien la última capa para que no se salga el relleno.",
    "Conserva siempre en congelación.",
  ],
  galleta: [
    "Deja trozos grandes de galleta para más textura.",
    "Agrega las galletas al final para que queden crujientes.",
    "Conserva siempre en congelación.",
  ],
  postre: [
    "Arma las capas con paciencia para un efecto bonito.",
    "Puedes decorar con migas o crumble por encima.",
    "Conserva siempre en congelación.",
  ],
  gourmet: [
    "Baña la punta en chocolate para una presentación premium.",
    "Usa ingredientes de primera calidad para destacar.",
    "Conserva siempre en congelación.",
  ],
  tropical: [
    "Usa fruta tropical madura para un sabor vibrante.",
    "La leche de coco realza el sabor tropical.",
    "Conserva siempre en congelación.",
  ],
  economica: [
    "Aprovecha ingredientes básicos para bajar el costo.",
    "Ideal para producir en cantidad con poca inversión.",
    "Conserva siempre en congelación.",
  ],
  vender: [
    "Envuelve en bolsitas individuales y sella bien.",
    "Etiqueta con sabor y precio para vender más rápido.",
    "Conserva siempre en congelación.",
  ],
  especial: [
    "Combina bien los sabores antes de congelar.",
    "Decora al gusto para sorprender a tus clientes.",
    "Conserva siempre en congelación.",
  ],
}

const CONSERVACION =
  "Mantén las paletas en el congelador en recipientes cerrados o bolsas herméticas para que no absorban olores y se conserven perfectas."

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
    ideal: "Postres en familia, fiestas, emprender y vender.",
    costo: "US$ 0.28 – 0.38",
    precio: "US$ 1.00 – 1.50",
    dica: "No dejes que la mezcla hierva; retírala del fuego apenas el chocolate se derrita para una textura sedosa.",
    entries: [
      { t: "Paleta de Chocolate", s: "con dulce de leche", f: "chocolate", add: "dulce de leche" },
      { t: "Paleta de Chocolate", s: "con crema de avellanas", f: "chocolate", add: "crema de avellanas" },
      { t: "Paleta de Chocolate Blanco", s: "con fresa", f: "chocolate-blanco", add: "fresa" },
      { t: "Paleta de Chocolate", s: "con galleta", f: "chocolate", add: "galleta" },
      { t: "Paleta de Chocolate", s: "con coco", f: "chocolate", add: "coco" },
      { t: "Paleta de Chocolate", s: "con maní", f: "chocolate", add: "maní" },
      { t: "Paleta de Chocolate", s: "con café", f: "chocolate", add: "café" },
      { t: "Paleta de Chocolate", s: "con caramelo", f: "chocolate", add: "caramelo" },
      { t: "Paleta de Chocolate", s: "con vainilla", f: "chocolate", add: "vainilla" },
      { t: "Paleta de Chocolate", s: "con leche condensada", f: "chocolate", add: "leche condensada" },
    ],
  },
  {
    cat: "Frutas Cremosas",
    tech: "cremosa",
    ideal: "Postres refrescantes, meriendas, emprender y vender.",
    costo: "US$ 0.22 – 0.30",
    precio: "US$ 1.00 – 1.50",
    dica: "Reserva algunos trozos de fruta para añadirlos al molde y lograr paletas con pedacitos reales.",
    entries: [
      { t: "Paleta Cremosa de Fresa", s: "fresca y natural", f: "fresa" },
      { t: "Paleta Cremosa de Mango", s: "dulce y tropical", f: "mango" },
      { t: "Paleta Cremosa de Maracuyá", s: "agridulce y refrescante", f: "maracuya" },
      { t: "Paleta Cremosa de Piña", s: "jugosa y tropical", f: "pina" },
      { t: "Paleta Cremosa de Coco", s: "suave y aromática", f: "coco" },
      { t: "Paleta Cremosa de Banana", s: "dulce y natural", f: "banana" },
      { t: "Paleta Cremosa de Durazno", s: "suave y frutal", f: "durazno" },
      { t: "Paleta Cremosa de Guayaba", s: "tropical y dulce", f: "guayaba" },
      { t: "Paleta Cremosa de Mora", s: "intensa y frutal", f: "mora" },
      { t: "Paleta Cremosa de Papaya", s: "suave y refrescante", f: "papaya" },
    ],
  },
  {
    cat: "Rellenas",
    tech: "rellena",
    ideal: "Sorprender en fiestas, emprender y vender con valor agregado.",
    costo: "US$ 0.28 – 0.38",
    precio: "US$ 1.20 – 1.80",
    dica: "Coloca el relleno bien en el centro y séllalo con mezcla para que sea una sorpresa en cada mordida.",
    entries: [
      { t: "Paleta de Fresa", s: "rellena de leche condensada", f: "fresa", add: "leche condensada" },
      { t: "Paleta de Mango", s: "rellena de crema", f: "mango", add: "crema" },
      { t: "Paleta de Coco", s: "rellena de chocolate", f: "coco", add: "chocolate" },
      { t: "Paleta de Vainilla", s: "rellena de dulce de leche", f: "vainilla", add: "dulce de leche" },
      { t: "Paleta de Chocolate", s: "rellena de crema blanca", f: "chocolate", add: "crema blanca" },
      { t: "Paleta de Maracuyá", s: "rellena de leche condensada", f: "maracuya", add: "leche condensada" },
      { t: "Paleta de Banana", s: "rellena de caramelo", f: "banana", add: "caramelo" },
      { t: "Paleta de Guayaba", s: "rellena de queso crema", f: "guayaba", add: "queso crema" },
      { t: "Paleta de Piña", s: "rellena de coco", f: "pina", add: "coco" },
      { t: "Paleta de Café", s: "rellena de chocolate", f: "cafe", add: "chocolate" },
    ],
  },
  {
    cat: "Con Galletas",
    tech: "galleta",
    ideal: "Meriendas, antojos, emprender y vender.",
    costo: "US$ 0.25 – 0.35",
    precio: "US$ 1.00 – 1.50",
    dica: "Agrega las galletas al final y deja trozos grandes para que queden crujientes.",
    entries: [
      { t: "Paleta de Vainilla", s: "con galletas de chocolate", f: "vainilla", add: "galleta" },
      { t: "Paleta de Fresa", s: "con galletas de vainilla", f: "fresa", add: "galleta" },
      { t: "Paleta de Chocolate", s: "con galleta rellena", f: "chocolate", add: "galleta rellena" },
      { t: "Paleta de Limón", s: "con galleta triturada", f: "limon", add: "galleta triturada" },
      { t: "Paleta de Coco", s: "con galletas dulces", f: "coco", add: "galleta" },
      { t: "Paleta de Café", s: "con galleta de chocolate", f: "cafe", add: "galleta" },
      { t: "Paleta de Banana", s: "con galleta y caramelo", f: "banana", add: "caramelo" },
      { t: "Paleta de Maní", s: "con galleta crujiente", f: "mani", add: "galleta" },
      { t: "Paleta de Dulce de Leche", s: "con galletas", f: "dulce-de-leche", add: "galleta" },
      { t: "Paleta de Chocolate Blanco", s: "con galletas", f: "chocolate-blanco", add: "galleta" },
    ],
  },
  {
    cat: "Postres",
    tech: "postre",
    ideal: "Postres especiales, cafeterías, emprender y vender.",
    costo: "US$ 0.35 – 0.45",
    precio: "US$ 1.50 – 2.00",
    dica: "Arma las capas con calma para lograr el efecto de un postre clásico en formato paleta.",
    entries: [
      { t: "Paleta de Cheesecake", s: "de fresa", f: "cheesecake", add: "fresa" },
      { t: "Paleta de Tiramisú", s: "clásico italiano", f: "tiramisu", add: "café" },
      { t: "Paleta de Arroz con Leche", s: "con canela", f: "arroz-con-leche" },
      { t: "Paleta de Flan", s: "con caramelo", f: "flan", add: "caramelo" },
      { t: "Paleta de Tres Leches", s: "suave y esponjosa", f: "tres-leches" },
      { t: "Paleta de Pastel de Chocolate", s: "húmedo y cremoso", f: "brownie", add: "chocolate blanco" },
      { t: "Paleta de Coco", s: "tipo cocada", f: "cocada", add: "leche condensada" },
      { t: "Paleta de Limón", s: "tipo pay", f: "limon", add: "galleta" },
      { t: "Paleta de Banana Split", s: "con chocolate y fresa", f: "banana", add: "fresa" },
      { t: "Paleta de Brownie", s: "con crema", f: "brownie", add: "crema" },
    ],
  },
  {
    cat: "Gourmet",
    tech: "gourmet",
    ideal: "Postres premium, eventos, emprender y vender con alto margen.",
    costo: "US$ 0.40 – 0.55",
    precio: "US$ 1.80 – 2.50",
    dica: "Usa ingredientes de primera y baña la punta en chocolate para un acabado profesional.",
    entries: [
      { t: "Paleta de Chocolate Amargo", s: "con naranja", f: "chocolate", add: "naranja" },
      { t: "Paleta de Vainilla", s: "con frutos rojos", f: "vainilla", add: "frutos rojos" },
      { t: "Paleta de Pistacho", s: "con chocolate blanco", f: "pistacho", add: "chocolate blanco" },
      { t: "Paleta de Café", s: "con caramelo salado", f: "cafe", add: "caramelo salado" },
      { t: "Paleta de Coco", s: "con almendras", f: "coco", add: "almendras" },
      { t: "Paleta de Fresa", s: "con crema de queso", f: "fresa", add: "queso crema" },
      { t: "Paleta de Mango", s: "con maracuyá", f: "mango", add: "maracuyá" },
      { t: "Paleta de Chocolate", s: "con avellanas", f: "chocolate", add: "avellanas" },
      { t: "Paleta de Vainilla", s: "con nueces", f: "vainilla", add: "nueces" },
      { t: "Paleta de Caramelo", s: "con maní tostado", f: "caramelo", add: "maní tostado" },
    ],
  },
  {
    cat: "Tropicales",
    tech: "tropical",
    ideal: "Días calurosos, playa, emprender y vender.",
    costo: "US$ 0.22 – 0.32",
    precio: "US$ 1.00 – 1.50",
    dica: "La leche de coco potencia el sabor tropical; ajústala según la fruta que uses.",
    entries: [
      { t: "Paleta de Piña Colada", s: "sin alcohol", f: "pina", add: "coco" },
      { t: "Paleta de Mango", s: "con coco", f: "mango", add: "coco" },
      { t: "Paleta de Maracuyá", s: "con naranja", f: "maracuya", add: "naranja" },
      { t: "Paleta de Guayaba", s: "con leche", f: "guayaba" },
      { t: "Paleta de Papaya", s: "con vainilla", f: "papaya", add: "vainilla" },
      { t: "Paleta de Piña", s: "con hierbabuena", f: "pina", add: "hierbabuena" },
      { t: "Paleta de Sandía", s: "cremosa", f: "sandia" },
      { t: "Paleta de Melón", s: "con leche condensada", f: "melon", add: "leche condensada" },
      { t: "Paleta de Banana", s: "con coco", f: "banana", add: "coco" },
      { t: "Paleta de Frutos Tropicales", s: "mix refrescante", f: "arcoiris" },
    ],
  },
  {
    cat: "Económicas",
    tech: "economica",
    ideal: "Producir en cantidad con bajo costo, emprender y vender.",
    costo: "US$ 0.15 – 0.22",
    precio: "US$ 0.70 – 1.10",
    dica: "Con pocos ingredientes básicos logras muchas paletas; ideal para maximizar ganancias.",
    entries: [
      { t: "Paleta Cremosa de Vainilla", s: "clásica y económica", f: "vainilla" },
      { t: "Paleta de Chocolate", s: "fácil y rápida", f: "chocolate" },
      { t: "Paleta de Fresa", s: "económica", f: "fresa" },
      { t: "Paleta de Banana", s: "con leche", f: "banana" },
      { t: "Paleta de Coco", s: "con tres ingredientes", f: "coco" },
      { t: "Paleta de Café", s: "cremosa", f: "cafe" },
      { t: "Paleta de Caramelo", s: "sencilla", f: "caramelo" },
      { t: "Paleta de Galleta", s: "económica", f: "galleta" },
      { t: "Paleta de Leche Condensada", s: "suave y dulce", f: "leche-polvo", add: "leche condensada" },
      { t: "Paleta de Chocolate", s: "con maní", f: "chocolate", add: "maní" },
    ],
  },
  {
    cat: "Para Vender",
    tech: "vender",
    ideal: "Negocio de paletas, ferias, pedidos y venta directa.",
    costo: "US$ 0.30 – 0.42",
    precio: "US$ 1.50 – 2.00",
    dica: "Presenta cada paleta envuelta y etiquetada; la buena presentación aumenta tus ventas.",
    entries: [
      { t: "Paleta de Chocolate", s: "premium", f: "chocolate", add: "cobertura de chocolate" },
      { t: "Paleta de Fresa", s: "con relleno cremoso", f: "fresa", add: "relleno cremoso" },
      { t: "Paleta de Dulce de Leche", s: "con cobertura", f: "dulce-de-leche", add: "dulce de leche con cobertura" },
      { t: "Paleta de Mango", s: "gourmet", f: "mango", add: "crema" },
      { t: "Paleta de Coco", s: "con chocolate crujiente", f: "coco", add: "chocolate crujiente" },
      { t: "Paleta de Maracuyá", s: "rellena", f: "maracuya", add: "leche condensada" },
      { t: "Paleta de Vainilla", s: "con caramelo", f: "vainilla", add: "caramelo" },
      { t: "Paleta de Chocolate Blanco", s: "con frutos rojos", f: "chocolate-blanco", add: "frutos rojos" },
      { t: "Paleta de Café", s: "con crema", f: "cafe", add: "crema" },
      { t: "Paleta de Galleta", s: "con chocolate", f: "galleta", add: "cobertura de chocolate" },
    ],
  },
  {
    cat: "Especiales",
    tech: "especial",
    ideal: "Sabores diferentes para destacar, emprender y vender.",
    costo: "US$ 0.28 – 0.40",
    precio: "US$ 1.20 – 1.80",
    dica: "Combina bien los ingredientes antes de congelar para que el sabor quede parejo.",
    entries: [
      { t: "Paleta de Yogur", s: "con fresa", f: "yogur", add: "fresa" },
      { t: "Paleta de Yogur", s: "con mango", f: "yogur", add: "mango" },
      { t: "Paleta de Leche en Polvo", s: "con chocolate", f: "leche-polvo", add: "chocolate" },
      { t: "Paleta de Crema de Avellanas", s: "con banana", f: "avellana", add: "banana" },
      { t: "Paleta de Queso Crema", s: "con guayaba", f: "queso-guayaba" },
      { t: "Paleta de Coco", s: "con dulce de leche", f: "coco", add: "dulce de leche" },
      { t: "Paleta de Chocolate", s: "con crema de maní", f: "chocolate", add: "crema de maní" },
      { t: "Paleta de Vainilla", s: "con mermelada de fresa", f: "vainilla", add: "mermelada de fresa" },
      { t: "Paleta de Maracuyá", s: "con chocolate blanco", f: "maracuya", add: "chocolate blanco" },
      { t: "Paleta Arcoíris", s: "de frutas cremosas", f: "arcoiris" },
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
        "2 tazas de leche entera (500 ml)",
        "1 taza de crema de leche (200 ml)",
        "1/2 taza de leche condensada (150 g)",
        "1 cucharadita de esencia de vainilla",
      ]
      if (f.ing) ingredientes.push(f.ing)
      if (e.add) ingredientes.push(addonIngrediente(e.add))

      list.push({
        id: n,
        slug,
        numero: `RECETA ${pad(n)}`,
        titulo: e.t,
        subtitulo: e.s,
        descripcion: `${e.t} ${e.s}. Cremosa, deliciosa y muy fácil de preparar. Perfecta para disfrutar en familia, emprender y vender.`,
        rinde: 10,
        image: `/images/flavors/${f.photo}.png`,
        categoria: group.cat,
        theme: f.theme,
        ingredientes,
        dica: group.dica,
        idealPara: group.ideal,
        pasos: pasosFor(group.tech, f, e.add),
        listo: `Desmolda y disfruta esta rica ${e.t.toLowerCase()} ${e.s}. ¡Un sabor que enamora y que se vende solo!`,
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
  "Rellenas",
  "Con Galletas",
  "Postres",
  "Gourmet",
  "Tropicales",
  "Económicas",
  "Para Vender",
  "Especiales",
] as const
