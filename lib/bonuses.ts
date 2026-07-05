export type Bonus = {
  id: number
  slug: string
  numero: string
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
    numero: "BONO 01",
    titulo: "Precio Justo para Cada Paleta",
    descripcion:
      "Aprende a calcular exactamente cuánto cuesta producir cada paleta y a definir un precio de venta rentable sin regalar tu trabajo.",
    contenido: [
      {
        subtitulo: "La fórmula del precio justo",
        tipo: "texto",
        texto:
          "Precio de venta = (Costo de ingredientes + Costo de empaque + Costo de energía + Tu tiempo) ÷ (1 - Margen deseado). Un margen saludable para paletas artesanales está entre 60% y 75%. Ejemplo: si tu costo total por paleta es US$ 0.30 y quieres un margen del 70%, tu precio ideal es 0.30 ÷ (1 - 0.70) = US$ 1.00.",
      },
      {
        subtitulo: "Cómo calcular tu costo real paso a paso",
        tipo: "lista",
        items: [
          "Suma el costo de todos los ingredientes de la receta y divídelo entre la cantidad de paletas que rinde.",
          "Agrega el costo del palito, la bolsa o empaque y la etiqueta por unidad.",
          "Calcula el gasto de energía del congelador y divídelo entre tu producción mensual.",
          "Asigna un valor a tu tiempo de trabajo por lote (aunque sea pequeño, cuenta).",
          "Suma todo: ese es tu costo real por paleta. Nunca vendas por debajo de ese número.",
        ],
      },
      {
        subtitulo: "Tabla de referencia por tipo de paleta",
        tipo: "tabla",
        encabezados: ["Tipo de paleta", "Costo aprox.", "Precio sugerido", "Ganancia"],
        filas: [
          { columnas: ["Económica (limón, vainilla)", "US$ 0.20", "US$ 1.00", "US$ 0.80"] },
          { columnas: ["Cremosa (fresa, coco, café)", "US$ 0.28", "US$ 1.30", "US$ 1.02"] },
          { columnas: ["Frutal (mango, maracuyá)", "US$ 0.26", "US$ 1.30", "US$ 1.04"] },
          { columnas: ["Rellena (chocolate, dulce de leche)", "US$ 0.35", "US$ 1.50", "US$ 1.15"] },
          { columnas: ["Premium (pistacho, cheesecake)", "US$ 0.42", "US$ 1.80", "US$ 1.38"] },
          { columnas: ["Mini paleta (fiestas)", "US$ 0.15", "US$ 0.80", "US$ 0.65"] },
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
          "No subir el precio cuando suben los insumos.",
          "Cobrar lo mismo por una paleta económica que por una premium.",
        ],
      },
      {
        subtitulo: "Consejo de oro",
        tipo: "texto",
        texto:
          "Es mejor vender menos paletas con buena ganancia que muchas casi sin ganar. Un precio justo te permite reinvertir, mejorar tus ingredientes y sostener tu negocio en el tiempo. Revisa tus costos cada mes.",
      },
    ],
  },
  {
    id: 2,
    slug: "menus-listos",
    numero: "BONO 02",
    titulo: "12 Menús Listos para Paletas",
    descripcion:
      "12 combinaciones de sabores ya armadas para vender por temporada, ocasión o público. Solo elige un menú y empieza a producir.",
    contenido: [
      {
        subtitulo: "Los 12 menús listos para vender",
        tipo: "tabla",
        encabezados: ["Menú", "Sabores incluidos", "Ideal para"],
        filas: [
          { columnas: ["1. Clásico", "Fresa, chocolate, vainilla", "Todo público"] },
          { columnas: ["2. Tropical", "Mango, maracuyá, coco", "Verano y playa"] },
          { columnas: ["3. Gourmet", "Pistacho, cheesecake, café", "Eventos premium"] },
          { columnas: ["4. Fiesta infantil", "Cookies & cream, vainilla, fresa", "Cumpleaños"] },
          { columnas: ["5. Económico", "Limón, vainilla, fresa", "Venta por volumen"] },
          { columnas: ["6. Cafetería", "Café, chocolate, dulce de leche", "Adultos"] },
          { columnas: ["7. Frutal fresco", "Sandía, piña, mango", "Días calurosos"] },
          { columnas: ["8. Antojo cremoso", "Coco, dulce de leche, banana", "Meriendas"] },
          { columnas: ["9. Chocolatería", "Chocolate, cookies & cream, maní", "Amantes del chocolate"] },
          { columnas: ["10. Berries", "Frutos rojos, mora, cheesecake", "Público femenino"] },
          { columnas: ["11. Fiesta grande", "Fresa, chocolate, mango, coco", "Reuniones y eventos"] },
          { columnas: ["12. Detox ligero", "Limón, sandía, maracuyá", "Público fitness"] },
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
          "Rota los menús según la temporada: tropicales en verano, cremosos en invierno.",
          "Publica el menú de la semana en tus estados para crear expectativa.",
        ],
      },
      {
        subtitulo: "Calendario sugerido de menús",
        tipo: "tabla",
        encabezados: ["Momento", "Menú recomendado", "Por qué funciona"],
        filas: [
          { columnas: ["Lunes a jueves", "Económico o Clásico", "Venta diaria y volumen"] },
          { columnas: ["Fin de semana", "Gourmet o Chocolatería", "Mayor ticket de venta"] },
          { columnas: ["Verano", "Tropical o Frutal fresco", "Refrescan y venden más"] },
          { columnas: ["Cumpleaños", "Fiesta infantil o Fiesta grande", "Pedidos por cantidad"] },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "mensajes-para-vender",
    numero: "BONO 03",
    titulo: "50 Mensajes Listos para Vender",
    descripcion:
      "50 textos listos para copiar y pegar en WhatsApp, Instagram y estados. Solo cambia el nombre y el precio y empieza a vender.",
    contenido: [
      {
        subtitulo: "Mensajes para WhatsApp (1-13)",
        tipo: "lista",
        items: [
          "¡Hola! Ya están listas las paletas cremosas de esta semana. ¿Te aparto algunas antes de que se acaben?",
          "Promo de hoy: 3 paletas por [precio]. ¿Cuántas te preparo?",
          "Nuevo sabor disponible: [sabor]. ¡Son las primeras y vuelan rápido!",
          "Perfectas para el calor. Cremosas, caseras y hechas con ingredientes de verdad. ¿Te envío la lista de sabores?",
          "Buenos días, [nombre]. Hoy tengo producción fresca. ¿Te gustaría encargar tus paletas favoritas?",
          "¡Últimas unidades del sabor [sabor]! ¿Te reservo antes de que se agoten?",
          "Tengo un combo especial para ti hoy: [combo] por [precio]. ¿Lo aprovechas?",
          "¿Antojo de algo dulce y refrescante? Tengo paletas recién hechas listas para entregar.",
          "Abrí encargos para este fin de semana. ¿Te anoto en la lista?",
          "Gracias por tu último pedido. Esta semana tengo sabores nuevos, ¿te muestro?",
          "Hoy hay envío gratis por pedidos de 6 paletas o más. ¿Armamos el tuyo?",
          "¿Para una ocasión especial? Preparo cajas de regalo con paletas surtidas. ¿Te cuento?",
          "¡Stock limitado hoy! Producción del día ya casi agotada. ¿Te aparto las tuyas?",
        ],
      },
      {
        subtitulo: "Frases para publicaciones y estados (14-27)",
        tipo: "lista",
        items: [
          "Cremosas por dentro, irresistibles por fuera. Pide las tuyas hoy.",
          "El antojo perfecto existe y es casero. Paletas rellenas y cremosas.",
          "Hechas con amor y con ingredientes de verdad. ¿Ya probaste las tuyas?",
          "Encargos abiertos para el fin de semana. Aparta con anticipación.",
          "Nada como una paleta casera para refrescar tu día. 🍦 Escríbeme.",
          "Sabor que se siente en cada mordida. Producción fresca todos los días.",
          "¿Cuál es tu sabor favorito? Tengo [cantidad] opciones esperándote.",
          "Se ven bien, saben mejor. Paletas artesanales hechas para ti.",
          "El postre que todos piden en las reuniones. Aparta tu pedido.",
          "Dulce, cremoso y hecho en casa. Así son mis paletas. ¿Pedimos?",
          "Nuevo sabor de la semana: [sabor]. ¡Corre que vuelan!",
          "Perfectas para revender o disfrutar en familia. Escríbeme por precios.",
          "Tu negocio de paletas empieza con un buen antojo. Prueba las mías.",
          "Del congelador directo a tu antojo. Pide hoy y recibe fresquito.",
        ],
      },
      {
        subtitulo: "Mensajes para cerrar la venta (28-37)",
        tipo: "lista",
        items: [
          "Te confirmo entonces [cantidad] paletas para [día]. ¿Retiras o te las envío?",
          "Puedo reservarlas con un pequeño adelanto. ¿Te parece?",
          "Si pides 6 o más, te incluyo una de regalo. ¿Aprovechas?",
          "¿Prefieres pago al recibir o por transferencia? Como te quede más cómodo.",
          "Perfecto, dejo tu pedido apartado. ¿A qué hora te queda bien la entrega?",
          "Tengo cupo para [cantidad] pedidos más esta semana. ¿Te aseguro el tuyo?",
          "Con este combo ahorras [monto]. ¿Te lo preparo así?",
          "¿Te gustaría agregar un sabor premium por solo [precio] más?",
          "Listo, agendo tu pedido. Te confirmo cuando esté saliendo del congelador.",
          "Si confirmas hoy, te mantengo el precio de promoción. ¿Lo dejamos así?",
        ],
      },
      {
        subtitulo: "Mensajes para fechas y promociones especiales (38-50)",
        tipo: "lista",
        items: [
          "¡Promo de fin de semana! 2x[precio] en sabores seleccionados. Escríbeme.",
          "Por el Día de la Madre preparo cajas especiales de regalo. ¿Reservas la tuya?",
          "Vacaciones = antojos. Aparta tus paletas para toda la semana.",
          "¡Feliz viernes! Empieza el finde con paletas fresquitas. ¿Te preparo?",
          "Cumpleaños a la vista. Pide tu combo fiesta con anticipación y ahorra.",
          "Solo por hoy: paleta premium al precio de una cremosa. ¡No te lo pierdas!",
          "Navidad dulce: cajas surtidas para regalar. Encargos abiertos.",
          "¿Evento este mes? Cotiza tus paletas para [cantidad] invitados sin compromiso.",
          "Promo día de calor: 5 paletas por [precio]. Ideal para compartir.",
          "Semana de sabores nuevos: prueba [sabor] con 10% de descuento.",
          "Regala algo diferente: paletas gourmet en caja de regalo personalizada.",
          "¡Última semana de promo de lanzamiento! Aprovecha antes de que suba el precio.",
          "Reserva hoy tus paletas para el fin de semana y recíbelas sin fila.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "combos-rentables",
    numero: "BONO 04",
    titulo: "30 Combos Rentables de Paletas",
    descripcion:
      "30 combos y paquetes armados para aumentar el ticket de venta y vender más en cada pedido, con precios sugeridos.",
    contenido: [
      {
        subtitulo: "Combos para el día a día (1-8)",
        tipo: "tabla",
        encabezados: ["Combo", "Contenido", "Precio sugerido"],
        filas: [
          { columnas: ["1. Combo Individual", "1 paleta + 1 bebida", "US$ 1.80"] },
          { columnas: ["2. Combo Pareja", "2 paletas premium", "US$ 3.20"] },
          { columnas: ["3. Combo Dúo Mixto", "1 cremosa + 1 frutal", "US$ 2.40"] },
          { columnas: ["4. Combo Trío", "3 paletas surtidas", "US$ 3.60"] },
          { columnas: ["5. Combo Antojo", "2 paletas + topping extra", "US$ 3.00"] },
          { columnas: ["6. Combo Oficina", "5 paletas surtidas", "US$ 6.00"] },
          { columnas: ["7. Combo Merienda", "2 mini + 1 cremosa", "US$ 2.50"] },
          { columnas: ["8. Combo Refrescante", "3 paletas frutales", "US$ 3.60"] },
        ],
      },
      {
        subtitulo: "Combos familiares y para compartir (9-18)",
        tipo: "tabla",
        encabezados: ["Combo", "Contenido", "Precio sugerido"],
        filas: [
          { columnas: ["9. Combo Familiar", "6 paletas surtidas", "US$ 7.50"] },
          { columnas: ["10. Combo Familiar Plus", "8 paletas surtidas", "US$ 9.60"] },
          { columnas: ["11. Combo Fiesta", "12 paletas surtidas", "US$ 14.00"] },
          { columnas: ["12. Combo Fiesta Grande", "20 paletas surtidas", "US$ 22.00"] },
          { columnas: ["13. Combo Mini Fiesta", "10 mini paletas", "US$ 8.00"] },
          { columnas: ["14. Combo Cumpleaños", "15 paletas + 3 de regalo", "US$ 17.00"] },
          { columnas: ["15. Combo Reunión", "10 paletas surtidas", "US$ 12.00"] },
          { columnas: ["16. Combo Vecinos", "18 paletas económicas", "US$ 16.00"] },
          { columnas: ["17. Combo Domingo", "6 cremosas + 2 frutales", "US$ 9.50"] },
          { columnas: ["18. Combo Compartir", "9 paletas surtidas", "US$ 10.80"] },
        ],
      },
      {
        subtitulo: "Combos premium y de regalo (19-24)",
        tipo: "tabla",
        encabezados: ["Combo", "Contenido", "Precio sugerido"],
        filas: [
          { columnas: ["19. Combo Degustación", "4 sabores diferentes", "US$ 5.00"] },
          { columnas: ["20. Combo Gourmet", "4 paletas premium", "US$ 6.80"] },
          { columnas: ["21. Combo Regalo", "6 paletas en caja decorada", "US$ 10.00"] },
          { columnas: ["22. Combo Premium Pareja", "2 premium + caja de regalo", "US$ 5.50"] },
          { columnas: ["23. Combo Lujo", "8 paletas premium surtidas", "US$ 13.50"] },
          { columnas: ["24. Combo Empresarial", "24 paletas + etiqueta personalizada", "US$ 30.00"] },
        ],
      },
      {
        subtitulo: "Combos por temporada y ocasión (25-30)",
        tipo: "tabla",
        encabezados: ["Combo", "Contenido", "Precio sugerido"],
        filas: [
          { columnas: ["25. Combo Verano", "6 paletas tropicales", "US$ 7.80"] },
          { columnas: ["26. Combo Navidad", "12 paletas en caja de regalo", "US$ 16.00"] },
          { columnas: ["27. Combo San Valentín", "2 premium en caja corazón", "US$ 5.00"] },
          { columnas: ["28. Combo Día de la Madre", "6 gourmet en caja especial", "US$ 11.00"] },
          { columnas: ["29. Combo Vacaciones", "15 paletas surtidas", "US$ 17.50"] },
          { columnas: ["30. Combo Mayoreo", "50 paletas para revender", "US$ 45.00"] },
        ],
      },
      {
        subtitulo: "Estrategias para vender más combos",
        tipo: "lista",
        items: [
          "Ofrece siempre el combo antes que la paleta individual.",
          "Incluye una paleta de regalo en combos grandes para dar más valor.",
          "Arma combos por ocasión: cumpleaños, reuniones, regalos.",
          "Da un precio especial por pedidos anticipados o al mayoreo.",
          "Muestra el ahorro del combo frente a comprar por unidad.",
          "Crea un combo estrella y promociónalo cada semana.",
        ],
      },
    ],
  },
]
