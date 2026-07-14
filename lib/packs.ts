import { detectThemeFromTitle } from "@/components/access/pack-theme"

export type Pack = {
  id: number
  numero: string
  titulo: string
  categoria: string
  theme: string
  formato: string
  explicacion: string
  objetivo: string
  materiales: string[]
  instrucciones: string[]
  consejo: string
  variacion: string
  cta: string
  etiquetas: string[]
}

export const packCategorias = [
  "Todas",
  "Presentación del negocio",
  "Pedidos abiertos",
  "Sabores",
  "Combos y paquetes",
  "Deseo del producto",
  "Engagement",
  "Prueba social",
  "Informativos",
  "Fechas especiales",
  "Venta directa",
] as const

type GroupConfig = {
  categoria: string
  formato: string
  titulos: string[]
  objetivo: string
  materiales: string[]
  instrucciones: string[]
  consejo: string
  variacion: string
  cta: string
  etiquetas: string[]
  explicacion: (t: string) => string
}

const groups: GroupConfig[] = [
  {
    categoria: "Presentación del negocio",
    formato: "Feed + Perfil",
    titulos: [
      "¡Llegaron nuestras paletas cremosas!",
      "Conoce nuestro nuevo menú de paletas",
      "Paletas artesanales hechas en casa",
      "Un nuevo sabor llegó a tu barrio",
      "Paletas preparadas con ingredientes seleccionados",
      "Creamos paletas para alegrar tus días",
      "Sabores cremosos hechos con cariño",
      "Bienvenidos a nuestro mundo de paletas",
      "Paletas rellenas para cada antojo",
      "Conoce la paleta que todos quieren probar",
    ],
    objetivo: "Presentar tu negocio, generar reconocimiento de marca y atraer a tus primeros seguidores.",
    materiales: [
      "Foto principal de tus paletas rellenas con el palito visible",
      "Logo o nombre de tu marca",
      "Frase de presentación corta",
      "Colores de tu marca (rosa, chocolate y dorado)",
      "Ícono o sello de 'Artesanal'",
    ],
    instrucciones: [
      "Elige la plantilla de presentación del pack",
      "Sube tu mejor foto de paletas como fondo",
      "Escribe el título con el nombre de tu negocio",
      "Agrega una frase corta que explique qué vendes",
      "Incluye tu ciudad o zona de entrega",
      "Publica en el Feed y fija el post en tu perfil",
    ],
    consejo:
      "Usa esta publicación como post fijado en tu perfil para que todo nuevo seguidor entienda de inmediato qué ofreces.",
    variacion:
      "Adáptalo para Stories con un sticker de 'Nuevo' y música alegre para presentar tu marca de forma más cercana.",
    cta: "Conoce nuestro menú",
    etiquetas: ["Reconocimiento de marca", "Primera impresión", "Identidad visual"],
    explicacion: () =>
      "Post de presentación para dar a conocer tu marca de paletas y crear una primera impresión memorable.",
  },
  {
    categoria: "Pedidos abiertos",
    formato: "Feed + Stories",
    titulos: [
      "¡Pedidos abiertos!",
      "Reserva tus paletas para hoy",
      "Agenda abierta para esta semana",
      "Pedidos disponibles para el fin de semana",
      "Elige tus sabores y haz tu pedido",
      "Ya estamos recibiendo pedidos",
      "Reserva tu caja de sabores",
      "Últimos pedidos disponibles",
      "Escríbenos para conocer los sabores de hoy",
      "Tu próxima paleta está a un mensaje de distancia",
      "Preparamos tu pedido con cariño",
      "Haz tu pedido antes de que se terminen",
      "Agenda tu entrega",
      "Selecciona tus sabores favoritos",
      "Pedidos listos para confirmar",
      "¿Ya reservaste tus paletas?",
      "Hoy es un buen día para pedir paletas",
      "Abiertos para nuevos pedidos",
      "Tu caja de paletas te está esperando",
      "Ordena hoy y disfruta tus sabores favoritos",
    ],
    objetivo: "Abrir pedidos, crear urgencia y llenar tu agenda de entregas.",
    materiales: [
      "Foto de paletas listas o en caja",
      "Texto de 'Pedidos abiertos'",
      "Día y horario de entrega",
      "Número de WhatsApp o @ de contacto",
      "Sticker o sello de urgencia",
    ],
    instrucciones: [
      "Elige la plantilla de pedidos abiertos",
      "Coloca una foto apetitosa de tus paletas",
      "Escribe claramente que los pedidos están abiertos",
      "Indica la fecha límite y el día de entrega",
      "Agrega tu contacto de WhatsApp",
      "Publica en el Feed y repite en Stories con cuenta regresiva",
    ],
    consejo:
      "Agrega una fecha límite ('solo hasta hoy') para generar urgencia y aumentar la cantidad de pedidos.",
    variacion:
      "Crea una versión en Stories con el sticker de cuenta regresiva marcando el cierre de los pedidos.",
    cta: "Haz tu pedido",
    etiquetas: ["Urgencia", "Conversión", "Llamado a la acción"],
    explicacion: () =>
      "Publicación para avisar que estás recibiendo pedidos y activar a tus clientes a comprar ahora.",
  },
  {
    categoria: "Sabores",
    formato: "Feed",
    titulos: [
      "Paleta cremosa de chocolate",
      "Paleta de fresa con crema",
      "Paleta tropical de mango",
      "Paleta cremosa de coco",
      "Paleta de maracuyá",
      "Paleta de cookies and cream",
      "Paleta de pistacho",
      "Paleta de dulce de leche",
      "Paleta de leche condensada",
      "Paleta de café",
      "Paleta de guayaba",
      "Paleta de piña",
      "Paleta de vainilla",
      "Paleta de banana",
      "Paleta de chocolate blanco",
      "Paleta de frutos rojos",
      "Paleta de chocolate con avellana",
      "Paleta de mango con maracuyá",
      "Paleta de coco con chocolate",
      "Paleta de fresa rellena",
      "Sabores clásicos",
      "Sabores tropicales",
      "Sabores premium",
      "Sabores con chocolate",
      "Sabores con frutas",
      "Paletas para los amantes del coco",
      "Paletas para los amantes del chocolate",
      "Una opción para cada antojo",
      "Descubre el sabor de la semana",
      "¿Cuál sabor probarías primero?",
    ],
    objetivo: "Resaltar un sabor específico, despertar antojo y provocar el deseo de probarlo.",
    materiales: [
      "Foto en primer plano del sabor destacado",
      "Nombre del sabor",
      "Precio de la paleta",
      "Detalle del relleno cremoso",
      "Fondo en el color del sabor",
    ],
    instrucciones: [
      "Elige la plantilla de sabor del pack",
      "Sube una foto en primer plano mostrando el relleno",
      "Escribe el nombre del sabor como título",
      "Agrega una descripción corta y apetitosa",
      "Coloca el precio en el sello redondo",
      "Publica y guárdalo como destacado por sabor",
    ],
    consejo:
      "Muestra siempre el relleno o la textura cremosa en la foto: es lo que más despierta el antojo.",
    variacion:
      "Cambia el sabor y el color de fondo para crear una serie de publicaciones, una por cada sabor de tu menú.",
    cta: "Pídela ya",
    etiquetas: ["Antojo", "Producto", "Deseo de compra"],
    explicacion: (t) => `Publicación para destacar "${t}" y despertar el antojo de tus seguidores.`,
  },
  {
    categoria: "Combos y paquetes",
    formato: "Feed",
    titulos: [
      "Combo degustación",
      "Caja con 4 paletas",
      "Caja con 6 paletas",
      "Caja con 10 paletas",
      "Combo familiar",
      "Combo para compartir",
      "Combo de sabores clásicos",
      "Combo de sabores premium",
      "Combo tropical",
      "Combo de chocolate",
      "Caja sorpresa",
      "Caja personalizada",
      "Combo para cumpleaños",
      "Combo para reuniones",
      "Combo para fiestas infantiles",
      "Combo para eventos",
      "Pack para regalar",
      "Pack del fin de semana",
      "Elige tus sabores y crea tu caja",
      "Más paletas, más momentos para compartir",
    ],
    objetivo: "Aumentar el ticket promedio ofreciendo combos y cajas con varios sabores.",
    materiales: [
      "Foto de varias paletas juntas o una caja",
      "Nombre del combo",
      "Cantidad de paletas incluidas",
      "Precio del combo",
      "Sello de 'Combo' o 'Ahorra'",
    ],
    instrucciones: [
      "Elige la plantilla de combo del pack",
      "Muestra una foto con varias paletas juntas",
      "Escribe el nombre del combo",
      "Indica cuántas paletas incluye",
      "Coloca el precio del combo con descuento",
      "Publica y destaca el ahorro frente a comprar individual",
    ],
    consejo:
      "Resalta cuánto ahorra el cliente al comprar el combo en lugar de paletas individuales.",
    variacion:
      "Crea combos por ocasión: cumpleaños, fin de semana o para compartir en familia.",
    cta: "Arma tu caja",
    etiquetas: ["Ticket promedio", "Ventas", "Ahorro"],
    explicacion: (t) => `Publicación para ofrecer "${t}" y aumentar el valor de cada pedido.`,
  },
  {
    categoria: "Deseo del producto",
    formato: "Feed + Reel",
    titulos: [
      "Cremosas por dentro",
      "Rellenas de sabor",
      "El relleno que todos quieren probar",
      "Una explosión de sabor",
      "Hechas para enamorar",
      "Suaves, cremosas e irresistibles",
      "El antojo perfecto",
      "Un sabor para cada momento",
      "Tu postre favorito en forma de paleta",
      "La combinación perfecta",
      "Sabores que conquistan",
      "Paletas que se ven tan bien como saben",
      "Un relleno irresistible",
      "Cada mordida es una sorpresa",
      "¿Puedes elegir solo una?",
      "El postre que transforma tu día",
      "Preparadas para disfrutar",
      "Más cremosidad en cada mordida",
      "Una paleta, muchos sabores",
      "Elige la que más te provoca",
    ],
    objetivo: "Despertar deseo mostrando la cremosidad y el relleno irresistible de tus paletas.",
    materiales: [
      "Foto de una paleta mordida mostrando el relleno",
      "Frase corta de deseo",
      "Detalle de la textura cremosa",
      "Fondo suave y elegante",
      "Ícono de corazón o brillo",
    ],
    instrucciones: [
      "Elige la plantilla de deseo del pack",
      "Usa una foto que muestre el interior cremoso",
      "Escribe una frase corta y sensorial",
      "Evita saturar de texto, deja que la foto hable",
      "Agrega un llamado sutil a pedir",
      "Publica en el mejor horario de tu audiencia",
    ],
    consejo:
      "Las fotos con la paleta mordida o cortada muestran el relleno y aumentan el deseo de compra.",
    variacion:
      "Convierte esta publicación en un Reel corto mostrando el momento de morder la paleta.",
    cta: "Quiero probarla",
    etiquetas: ["Deseo", "Emoción", "Producto"],
    explicacion: (t) => `Publicación de deseo para mostrar lo irresistible de tus paletas: "${t}".`,
  },
  {
    categoria: "Engagement",
    formato: "Feed + Stories",
    titulos: [
      "¿Chocolate o fresa?",
      "¿Mango o maracuyá?",
      "¿Coco o pistacho?",
      "¿Sabores clásicos o premium?",
      "Elige tu paleta favorita",
      "¿Cuál probarías primero?",
      "Escribe tu sabor favorito",
      "¿Qué sabor debería ser el próximo?",
      "Etiqueta a alguien que ama las paletas",
      "Completa la frase: mi paleta perfecta tiene…",
      "Adivina el sabor",
      "Verdadero o falso",
      "Elimina un sabor",
      "Ordena estos sabores del 1 al 4",
      "¿Con quién compartirías esta caja?",
    ],
    objetivo: "Generar interacción, comentarios y guardados para aumentar el alcance del perfil.",
    materiales: [
      "Foto de dos o más sabores",
      "Pregunta o dinámica clara",
      "Opciones para elegir",
      "Sticker de encuesta (para Stories)",
      "Llamado a comentar",
    ],
    instrucciones: [
      "Elige la plantilla de engagement del pack",
      "Coloca la pregunta o las opciones principales",
      "Usa fotos de los sabores que se comparan",
      "Invita a responder en los comentarios",
      "En Stories, usa el sticker de encuesta o preguntas",
      "Responde cada interacción para impulsar el alcance",
    ],
    consejo:
      "Responde todos los comentarios: mientras más interacción, más te muestra el algoritmo.",
    variacion:
      "Lleva la misma dinámica a Stories con stickers de encuesta o de preguntas.",
    cta: "Comenta tu favorito",
    etiquetas: ["Interacción", "Alcance", "Comunidad"],
    explicacion: (t) => `Publicación interactiva "${t}" para generar comentarios y aumentar tu alcance.`,
  },
  {
    categoria: "Prueba social",
    formato: "Feed + Stories",
    titulos: [
      "Pedido preparado",
      "Pedido entregado",
      "Gracias por elegirnos",
      "Otro pedido listo",
      "Clientes felices",
      "Así quedó el pedido de hoy",
      "Gracias por confiar en nuestro trabajo",
      "Paletas preparadas con cariño",
      "Mira lo que preparamos hoy",
      "Una caja llena de sabores y sonrisas",
    ],
    objetivo: "Mostrar prueba social, generar confianza y demostrar que tus paletas ya se venden.",
    materiales: [
      "Foto de un pedido real o de la entrega",
      "Mensaje de agradecimiento",
      "Nombre o inicial del cliente (opcional)",
      "Sello de 'Pedido entregado'",
      "Fondo cálido de tu marca",
    ],
    instrucciones: [
      "Elige la plantilla de prueba social del pack",
      "Sube una foto real de un pedido preparado o entregado",
      "Escribe un mensaje de agradecimiento",
      "Muestra la caja o la presentación final",
      "Agrega tu sello o marca de agua",
      "Publica en el Feed y compártelo en Stories",
    ],
    consejo:
      "Pide a tus clientes una foto al recibir el pedido y compártela (con su permiso) como prueba social.",
    variacion:
      "Reúne varias fotos de clientes felices en un carrusel de 'clientes de la semana'.",
    cta: "Haz tu pedido",
    etiquetas: ["Confianza", "Prueba social", "Fidelización"],
    explicacion: (t) => `Publicación de prueba social "${t}" para mostrar confianza y pedidos reales.`,
  },
  {
    categoria: "Informativos",
    formato: "Destacados",
    titulos: [
      "Cómo hacer tu pedido",
      "Sabores disponibles",
      "Formas de pago",
      "Horarios de atención",
      "Área de entrega",
      "Cómo conservar tus paletas",
      "Paletas preparadas artesanalmente",
      "Ingredientes seleccionados",
      "Pedidos para eventos",
      "Preguntas frecuentes",
    ],
    objetivo: "Informar de forma clara cómo comprar, los sabores, pagos y entregas para eliminar dudas.",
    materiales: [
      "Foto o fondo limpio de tu marca",
      "Texto informativo claro y breve",
      "Íconos de apoyo (WhatsApp, reloj, ubicación)",
      "Lista de puntos o pasos",
      "Contacto u horario",
    ],
    instrucciones: [
      "Elige la plantilla informativa del pack",
      "Escribe la información de forma clara y ordenada",
      "Usa íconos para facilitar la lectura",
      "Divide el contenido en puntos cortos",
      "Agrega tu contacto o los datos relevantes",
      "Guarda el post como destacado de información",
    ],
    consejo:
      "Guarda estas publicaciones como 'destacados' en tu perfil para que los clientes las encuentren siempre.",
    variacion:
      "Convierte la información en un carrusel de varios slides, uno por cada punto.",
    cta: "Escríbenos",
    etiquetas: ["Información", "Claridad", "Soporte"],
    explicacion: (t) => `Publicación informativa "${t}" para resolver dudas y facilitar la compra.`,
  },
  {
    categoria: "Fechas especiales",
    formato: "Feed",
    titulos: [
      "Paletas para cumpleaños",
      "Paletas para fiestas",
      "Paletas para reuniones familiares",
      "Paletas para eventos infantiles",
      "Paletas para regalar",
      "Especial de verano",
      "Fin de semana con más sabor",
      "Celebra con paletas",
      "Un detalle dulce para alguien especial",
      "Haz que tu evento sea más refrescante",
    ],
    objetivo: "Aprovechar fechas y ocasiones especiales para aumentar los pedidos con un motivo de compra.",
    materiales: [
      "Foto de paletas decoradas para la ocasión",
      "Nombre de la fecha o el evento",
      "Frase temática",
      "Precio o combo especial",
      "Elementos decorativos (globos, corazones, etc.)",
    ],
    instrucciones: [
      "Elige la plantilla de fecha especial del pack",
      "Adapta los colores al tema de la ocasión",
      "Escribe una frase relacionada con la fecha",
      "Ofrece un combo o promoción especial",
      "Indica la fecha límite del pedido",
      "Publica con anticipación a la fecha",
    ],
    consejo:
      "Publica con varios días de anticipación para que los clientes puedan planear y reservar su pedido.",
    variacion:
      "Crea una versión para cada fecha del año: cumpleaños, verano, fiestas y eventos.",
    cta: "Reserva para tu evento",
    etiquetas: ["Estacionalidad", "Ocasión", "Ventas"],
    explicacion: (t) => `Publicación temática "${t}" para vender en fechas y eventos especiales.`,
  },
  {
    categoria: "Venta directa",
    formato: "Feed + Stories",
    titulos: [
      "Haz tu pedido hoy",
      "Escríbenos por WhatsApp",
      "Reserva tu caja",
      "Elige tus sabores",
      "Pide tus paletas ahora",
    ],
    objetivo: "Convertir seguidores en clientes con un llamado directo y sencillo a la acción.",
    materiales: [
      "Foto irresistible de tus paletas",
      "Llamado a la acción directo",
      "Número de WhatsApp o @ de contacto",
      "Precio o promoción (opcional)",
      "Botón o sello de 'Pide ahora'",
    ],
    instrucciones: [
      "Elige la plantilla de venta directa del pack",
      "Usa tu mejor foto de producto",
      "Escribe un llamado a la acción claro y directo",
      "Coloca tu contacto de forma visible",
      "Facilita el paso a paso para pedir",
      "Publica en tu mejor horario y repítelo en Stories",
    ],
    consejo:
      "Un solo llamado a la acción claro convierte más que un post lleno de información.",
    variacion:
      "Alterna el llamado: 'Escríbenos', 'Reserva tu caja' o 'Pide por WhatsApp' para no cansar a tu audiencia.",
    cta: "Pide ahora",
    etiquetas: ["Conversión", "Venta directa", "Llamado a la acción"],
    explicacion: (t) => `Publicación de venta directa "${t}" con un llamado claro a comprar ahora.`,
  },
]

// Variedade de temas para packs genéricos (sem sabor específico no título),
// para que as artes não fiquem todas iguais.
const GENERIC_POOL = ["surtido", "morango", "mango", "chocolate", "pistacho", "coco"]

function resolveTheme(titulo: string, categoria: string, id: number): string {
  // 1) Se o título menciona um sabor, usa a arte daquele sabor.
  const detected = detectThemeFromTitle(titulo, "")
  if (detected) return detected
  // 2) Combos e paquetes mostram uma caixa com várias paletas.
  if (categoria === "Combos y paquetes") return "caja"
  // 3) Demais packs genéricos: variedade rotativa.
  return GENERIC_POOL[(id - 1) % GENERIC_POOL.length]
}

export const packs: Pack[] = (() => {
  const result: Pack[] = []
  let id = 0
  for (const group of groups) {
    for (const titulo of group.titulos) {
      id += 1
      result.push({
        id,
        numero: `PACK ${String(id).padStart(2, "0")}`,
        titulo,
        categoria: group.categoria,
        theme: resolveTheme(titulo, group.categoria, id),
        formato: group.formato,
        explicacion: group.explicacion(titulo),
        objetivo: group.objetivo,
        materiales: group.materiales,
        instrucciones: group.instrucciones,
        consejo: group.consejo,
        variacion: group.variacion,
        cta: group.cta,
        etiquetas: group.etiquetas,
      })
    }
  }
  return result
})()

export const packsPorCategoria = packCategorias
  .filter((c) => c !== "Todas")
  .map((categoria) => ({
    categoria,
    items: packs.filter((p) => p.categoria === categoria),
  }))
