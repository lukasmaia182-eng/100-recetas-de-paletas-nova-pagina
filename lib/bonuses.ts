export type Bonus = {
  id: number
  slug: string
  titulo: string
  descripcion: string
  contenido: BonusSection[]
}

export type BonusSection = {
  subtitulo: string
  tipo: "lista" | "tabla" | "texto"
  items?: string[]
  filas?: { columnas: string[] }[]
  encabezados?: string[]
  texto?: string
}

export const bonuses: Bonus[] = [
  {
    id: 1,
    slug: "precio-justo",
    titulo: "Precio Justo para Cada Paleta",
    descripcion:
      "Aprende a calcular exactamente cuánto cuesta producir cada paleta y a definir un precio de venta rentable sin regalar tu trabajo.",
    contenido: [
      {
        subtitulo: "La fórmula del precio justo",
        tipo: "texto",
        texto:
          "Precio de venta = (Costo de ingredientes + Costo de empaque + Costo de energía) ÷ (1 - Margen deseado). Un margen saludable para paletas artesanales está entre 60% y 75%.",
      },
      {
        subtitulo: "Tabla de referencia por tipo de paleta",
        tipo: "tabla",
        encabezados: ["Tipo de paleta", "Costo aprox.", "Precio sugerido", "Ganancia"],
        filas: [
          { columnas: ["Económica (limón, vainilla)", "US$ 0.20", "US$ 1.00", "US$ 0.80"] },
          { columnas: ["Cremosa (fresa, coco, café)", "US$ 0.28", "US$ 1.30", "US$ 1.02"] },
          { columnas: ["Frutal (mango, maracuyá)", "US$ 0.26", "US$ 1.30", "US$ 1.04"] },
          { columnas: ["Premium (pistacho, cheesecake)", "US$ 0.42", "US$ 1.80", "US$ 1.38"] },
        ],
      },
      {
        subtitulo: "Errores comunes al poner precio",
        tipo: "lista",
        items: [
          "Cobrar solo por los ingredientes y olvidar el empaque y la energía.",
          "Copiar el precio del vecino sin calcular tus propios costos.",
          "No incluir tu tiempo de trabajo en el cálculo.",
          "Bajar demasiado el precio por miedo a no vender.",
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "menus-listos",
    titulo: "12 Menús Listos para Paletas",
    descripcion:
      "Combinaciones de sabores ya armadas para vender por temporada, ocasión o público. Solo elige un menú y empieza a producir.",
    contenido: [
      {
        subtitulo: "Menús por temporada y ocasión",
        tipo: "tabla",
        encabezados: ["Menú", "Sabores incluidos", "Ideal para"],
        filas: [
          { columnas: ["Clásico", "Fresa, chocolate, vainilla", "Todo público"] },
          { columnas: ["Tropical", "Mango, maracuyá, coco", "Verano y playa"] },
          { columnas: ["Gourmet", "Pistacho, cheesecake, café", "Eventos premium"] },
          { columnas: ["Fiesta infantil", "Cookies & cream, vainilla, fresa", "Cumpleaños"] },
          { columnas: ["Económico", "Limón, vainilla, fresa", "Venta por volumen"] },
          { columnas: ["Cafetería", "Café, chocolate, dulce de leche", "Adultos"] },
        ],
      },
      {
        subtitulo: "Cómo usar los menús",
        tipo: "lista",
        items: [
          "Elige 3 sabores por menú para no complicar la producción.",
          "Ofrece un menú diferente cada semana para generar novedad.",
          "Usa el menú premium para encargos y eventos especiales.",
          "Combina un menú económico + uno premium para todos los bolsillos.",
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "mensajes-para-vender",
    titulo: "50 Mensajes Listos para Vender",
    descripcion:
      "Textos listos para copiar y pegar en WhatsApp, Instagram y estados. Solo cambia el nombre y el precio y empieza a vender.",
    contenido: [
      {
        subtitulo: "Mensajes para WhatsApp",
        tipo: "lista",
        items: [
          "Hola! Ya están listas las paletas cremosas de esta semana. ¿Te aparto algunas antes de que se acaben?",
          "Promo de hoy: 3 paletas por [precio]. ¿Cuántas te preparo?",
          "Nuevo sabor disponible: [sabor]. ¡Son las primeras y vuelan rápido!",
          "Perfectas para el calor. Cremosas, caseras y hechas con ingredientes de verdad. ¿Te envío la lista de sabores?",
        ],
      },
      {
        subtitulo: "Frases para publicaciones y estados",
        tipo: "lista",
        items: [
          "Cremosas por dentro, irresistibles por fuera. Pide las tuyas hoy.",
          "El antojo perfecto existe y es casero. Paletas rellenas y cremosas.",
          "Hechas con amor y con ingredientes de verdad. ¿Ya probaste las tuyas?",
          "Encargos abiertos para el fin de semana. Aparta con anticipación.",
        ],
      },
      {
        subtitulo: "Mensajes para cerrar la venta",
        tipo: "lista",
        items: [
          "Te confirmo entonces [cantidad] paletas para [día]. ¿Retiras o te las envío?",
          "Puedo reservarlas con un pequeño adelanto. ¿Te parece?",
          "Si pides 6 o más, te incluyo una de regalo. ¿Aprovechas?",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "combos-rentables",
    titulo: "30 Combos Rentables de Paletas",
    descripcion:
      "Combos y paquetes armados para aumentar el ticket de venta y vender más en cada pedido, con precios sugeridos.",
    contenido: [
      {
        subtitulo: "Combos más vendidos",
        tipo: "tabla",
        encabezados: ["Combo", "Contenido", "Precio sugerido"],
        filas: [
          { columnas: ["Combo Pareja", "2 paletas premium", "US$ 3.20"] },
          { columnas: ["Combo Familiar", "6 paletas surtidas", "US$ 7.50"] },
          { columnas: ["Combo Fiesta", "12 paletas surtidas", "US$ 14.00"] },
          { columnas: ["Combo Degustación", "4 sabores diferentes", "US$ 5.00"] },
          { columnas: ["Combo Mini", "10 mini paletas", "US$ 8.00"] },
        ],
      },
      {
        subtitulo: "Estrategias para vender combos",
        tipo: "lista",
        items: [
          "Ofrece siempre el combo antes que la paleta individual.",
          "Incluye una paleta de regalo en combos grandes para dar más valor.",
          "Arma combos por ocasión: cumpleaños, reuniones, regalos.",
          "Da un precio especial por pedidos anticipados o al mayoreo.",
        ],
      },
    ],
  },
]
