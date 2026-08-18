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
    numero: "BÔNUS 01",
    titulo: "Preço Justo para Cada Paleta",
    descripcion:
      "Aprenda a calcular exatamente quanto custa produzir cada paleta e a definir um preço de venda rentável sem desvalorizar o seu trabalho.",
    contenido: [
      {
        subtitulo: "A fórmula do preço justo",
        tipo: "texto",
        texto:
          "Preço de venda = (Custo dos ingredientes + Custo da embalagem + Custo de energia + Seu tempo) ÷ (1 - Margem desejada). Uma margem saudável para paletas artesanais fica entre 60% e 75%. Exemplo: se o seu custo total por paleta é US$ 0.30 e você quer uma margem de 70%, o seu preço ideal é 0.30 ÷ (1 - 0.70) = US$ 1.00.",
      },
      {
        subtitulo: "Como calcular o seu custo real passo a passo",
        tipo: "lista",
        items: [
          "Some o custo de todos os ingredientes da receita e divida pela quantidade de paletas que ela rende.",
          "Acrescente o custo do palito, do saquinho ou embalagem e da etiqueta por unidade.",
          "Calcule o gasto de energia do freezer e divida pela sua produção mensal.",
          "Atribua um valor ao seu tempo de trabalho por lote (por menor que seja, conta).",
          "Some tudo: esse é o seu custo real por paleta. Nunca venda abaixo desse número.",
        ],
      },
      {
        subtitulo: "Tabela de referência por tipo de paleta",
        tipo: "tabla",
        encabezados: ["Tipo de paleta", "Custo aprox.", "Preço sugerido", "Lucro"],
        filas: [
          { columnas: ["Econômica (limão, baunilha)", "US$ 0.20", "US$ 1.00", "US$ 0.80"] },
          { columnas: ["Cremosa (morango, coco, café)", "US$ 0.28", "US$ 1.30", "US$ 1.02"] },
          { columnas: ["Frutada (manga, maracujá)", "US$ 0.26", "US$ 1.30", "US$ 1.04"] },
          { columnas: ["Recheada (chocolate, doce de leite)", "US$ 0.35", "US$ 1.50", "US$ 1.15"] },
          { columnas: ["Premium (pistache, cheesecake)", "US$ 0.42", "US$ 1.80", "US$ 1.38"] },
          { columnas: ["Mini paleta (festas)", "US$ 0.15", "US$ 0.80", "US$ 0.65"] },
        ],
      },
      {
        subtitulo: "Erros comuns ao definir o preço",
        tipo: "lista",
        items: [
          "Cobrar apenas pelos ingredientes e esquecer a embalagem e a energia.",
          "Copiar o preço do vizinho sem calcular os seus próprios custos.",
          "Não incluir o seu tempo de trabalho no cálculo.",
          "Baixar demais o preço por medo de não vender.",
          "Não aumentar o preço quando os insumos sobem.",
          "Cobrar o mesmo por uma paleta econômica e por uma premium.",
        ],
      },
      {
        subtitulo: "Dica de ouro",
        tipo: "texto",
        texto:
          "É melhor vender menos paletas com bom lucro do que muitas quase sem ganhar. Um preço justo permite reinvestir, melhorar seus ingredientes e sustentar o seu negócio ao longo do tempo. Revise seus custos todo mês.",
      },
    ],
  },
  {
    id: 2,
    slug: "menus-listos",
    numero: "BÔNUS 02",
    titulo: "12 Cardápios Prontos de Paletas",
    descripcion:
      "12 combinações de sabores já montadas para vender por temporada, ocasião ou público. É só escolher um cardápio e começar a produzir.",
    contenido: [
      {
        subtitulo: "Os 12 cardápios prontos para vender",
        tipo: "tabla",
        encabezados: ["Cardápio", "Sabores incluídos", "Ideal para"],
        filas: [
          { columnas: ["1. Clássico", "Morango, chocolate, baunilha", "Todo público"] },
          { columnas: ["2. Tropical", "Manga, maracujá, coco", "Verão e praia"] },
          { columnas: ["3. Gourmet", "Pistache, cheesecake, café", "Eventos premium"] },
          { columnas: ["4. Festa infantil", "Cookies & cream, baunilha, morango", "Aniversários"] },
          { columnas: ["5. Econômico", "Limão, baunilha, morango", "Venda por volume"] },
          { columnas: ["6. Cafeteria", "Café, chocolate, doce de leite", "Adultos"] },
          { columnas: ["7. Frutado fresco", "Melancia, abacaxi, manga", "Dias quentes"] },
          { columnas: ["8. Desejo cremoso", "Coco, doce de leite, banana", "Lanches"] },
          { columnas: ["9. Chocolateria", "Chocolate, cookies & cream, amendoim", "Amantes de chocolate"] },
          { columnas: ["10. Berries", "Frutas vermelhas, amora, cheesecake", "Público feminino"] },
          { columnas: ["11. Festa grande", "Morango, chocolate, manga, coco", "Reuniões e eventos"] },
          { columnas: ["12. Detox leve", "Limão, melancia, maracujá", "Público fitness"] },
        ],
      },
      {
        subtitulo: "Como usar os cardápios",
        tipo: "lista",
        items: [
          "Escolha 3 sabores por cardápio para não complicar a produção.",
          "Ofereça um cardápio diferente a cada semana para gerar novidade.",
          "Use o cardápio premium para encomendas e eventos especiais.",
          "Combine um cardápio econômico + um premium para todos os bolsos.",
          "Alterne os cardápios conforme a temporada: tropicais no verão, cremosos no inverno.",
          "Publique o cardápio da semana nos seus stories para criar expectativa.",
        ],
      },
      {
        subtitulo: "Calendário sugerido de cardápios",
        tipo: "tabla",
        encabezados: ["Momento", "Cardápio recomendado", "Por que funciona"],
        filas: [
          { columnas: ["Segunda a quinta", "Econômico ou Clássico", "Venda diária e volume"] },
          { columnas: ["Fim de semana", "Gourmet ou Chocolateria", "Ticket de venda maior"] },
          { columnas: ["Verão", "Tropical ou Frutado fresco", "Refrescam e vendem mais"] },
          { columnas: ["Aniversários", "Festa infantil ou Festa grande", "Pedidos por quantidade"] },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "mensajes-para-vender",
    numero: "BÔNUS 03",
    titulo: "50 Mensagens Prontas para Vender",
    descripcion:
      "50 textos prontos para copiar e colar no WhatsApp, Instagram e stories. Basta trocar o nome e o preço e começar a vender.",
    contenido: [
      {
        subtitulo: "Mensagens para WhatsApp (1-13)",
        tipo: "lista",
        items: [
          "Oi! Já estão prontas as paletas cremosas desta semana. Quer que eu separe algumas antes que acabem?",
          "Promoção de hoje: 3 paletas por [preço]. Quantas eu preparo para você?",
          "Sabor novo disponível: [sabor]. São as primeiras e voam rápido!",
          "Perfeitas para o calor. Cremosas, caseiras e feitas com ingredientes de verdade. Quer que eu mande a lista de sabores?",
          "Bom dia, [nome]. Hoje tenho produção fresquinha. Gostaria de encomendar suas paletas favoritas?",
          "Últimas unidades do sabor [sabor]! Reservo para você antes que acabem?",
          "Tenho um combo especial para você hoje: [combo] por [preço]. Vai aproveitar?",
          "Bateu vontade de algo doce e refrescante? Tenho paletas recém-feitas prontas para entrega.",
          "Abri encomendas para este fim de semana. Anoto você na lista?",
          "Obrigada pelo seu último pedido. Esta semana tenho sabores novos, quer ver?",
          "Hoje tem entrega grátis para pedidos de 6 paletas ou mais. Vamos montar o seu?",
          "Para uma ocasião especial? Preparo caixas de presente com paletas sortidas. Quer saber mais?",
          "Estoque limitado hoje! A produção do dia já está quase acabando. Separo as suas?",
        ],
      },
      {
        subtitulo: "Frases para publicações e stories (14-27)",
        tipo: "lista",
        items: [
          "Cremosas por dentro, irresistíveis por fora. Peça as suas hoje.",
          "O desejo perfeito existe e é caseiro. Paletas recheadas e cremosas.",
          "Feitas com amor e com ingredientes de verdade. Já provou as suas?",
          "Encomendas abertas para o fim de semana. Reserve com antecedência.",
          "Nada como uma paleta caseira para refrescar o seu dia. 🍦 Me chame.",
          "Sabor que se sente em cada mordida. Produção fresca todos os dias.",
          "Qual é o seu sabor favorito? Tenho [quantidade] opções esperando por você.",
          "Bonitas de ver, ainda melhores de saborear. Paletas artesanais feitas para você.",
          "A sobremesa que todo mundo pede nas reuniões. Reserve o seu pedido.",
          "Doce, cremosa e feita em casa. Assim são as minhas paletas. Vamos pedir?",
          "Sabor novo da semana: [sabor]. Corre que voam!",
          "Perfeitas para revender ou aproveitar em família. Me chame para saber os preços.",
          "O seu negócio de paletas começa com um bom desejo. Prove as minhas.",
          "Direto do freezer para o seu desejo. Peça hoje e receba fresquinha.",
        ],
      },
      {
        subtitulo: "Mensagens para fechar a venda (28-37)",
        tipo: "lista",
        items: [
          "Confirmo então [quantidade] paletas para [dia]. Você retira ou eu entrego?",
          "Posso reservar com um pequeno sinal. O que acha?",
          "Se pedir 6 ou mais, incluo uma de brinde. Vai aproveitar?",
          "Prefere pagamento na entrega ou por transferência? Como ficar mais cômodo para você.",
          "Perfeito, deixo o seu pedido reservado. Que horário fica bom para a entrega?",
          "Tenho vaga para mais [quantidade] pedidos esta semana. Garanto o seu?",
          "Com este combo você economiza [valor]. Preparo assim para você?",
          "Gostaria de adicionar um sabor premium por apenas [preço] a mais?",
          "Pronto, agendo o seu pedido. Aviso quando estiver saindo do freezer.",
          "Se confirmar hoje, mantenho o preço da promoção. Deixamos assim?",
        ],
      },
      {
        subtitulo: "Mensagens para datas e promoções especiais (38-50)",
        tipo: "lista",
        items: [
          "Promoção de fim de semana! 2 por [preço] em sabores selecionados. Me chame.",
          "No Dia das Mães preparo caixas especiais de presente. Reserva a sua?",
          "Férias = desejos. Reserve suas paletas para a semana toda.",
          "Sexta-feira chegou! Comece o fim de semana com paletas fresquinhas. Preparo para você?",
          "Aniversário à vista. Peça o seu combo festa com antecedência e economize.",
          "Só por hoje: paleta premium pelo preço de uma cremosa. Não perca!",
          "Natal doce: caixas sortidas para presentear. Encomendas abertas.",
          "Tem evento este mês? Faça um orçamento das suas paletas para [quantidade] convidados sem compromisso.",
          "Promoção dia de calor: 5 paletas por [preço]. Ideal para compartilhar.",
          "Semana de sabores novos: prove [sabor] com 10% de desconto.",
          "Presenteie com algo diferente: paletas gourmet em caixa de presente personalizada.",
          "Última semana da promoção de lançamento! Aproveite antes que o preço suba.",
          "Reserve hoje suas paletas para o fim de semana e receba sem fila.",
        ],
      },
    ],
  },
  {
    id: 4,
    slug: "combos-rentables",
    numero: "BÔNUS 04",
    titulo: "30 Combos Rentáveis de Paletas",
    descripcion:
      "30 combos e pacotes montados para aumentar o ticket de venda e vender mais em cada pedido, com preços sugeridos.",
    contenido: [
      {
        subtitulo: "Combos para o dia a dia (1-8)",
        tipo: "tabla",
        encabezados: ["Combo", "Conteúdo", "Preço sugerido"],
        filas: [
          { columnas: ["1. Combo Individual", "1 paleta + 1 bebida", "US$ 1.80"] },
          { columnas: ["2. Combo Casal", "2 paletas premium", "US$ 3.20"] },
          { columnas: ["3. Combo Dupla Mista", "1 cremosa + 1 frutada", "US$ 2.40"] },
          { columnas: ["4. Combo Trio", "3 paletas sortidas", "US$ 3.60"] },
          { columnas: ["5. Combo Desejo", "2 paletas + topping extra", "US$ 3.00"] },
          { columnas: ["6. Combo Escritório", "5 paletas sortidas", "US$ 6.00"] },
          { columnas: ["7. Combo Lanche", "2 mini + 1 cremosa", "US$ 2.50"] },
          { columnas: ["8. Combo Refrescante", "3 paletas frutadas", "US$ 3.60"] },
        ],
      },
      {
        subtitulo: "Combos familiares e para compartilhar (9-18)",
        tipo: "tabla",
        encabezados: ["Combo", "Conteúdo", "Preço sugerido"],
        filas: [
          { columnas: ["9. Combo Familiar", "6 paletas sortidas", "US$ 7.50"] },
          { columnas: ["10. Combo Familiar Plus", "8 paletas sortidas", "US$ 9.60"] },
          { columnas: ["11. Combo Festa", "12 paletas sortidas", "US$ 14.00"] },
          { columnas: ["12. Combo Festa Grande", "20 paletas sortidas", "US$ 22.00"] },
          { columnas: ["13. Combo Mini Festa", "10 mini paletas", "US$ 8.00"] },
          { columnas: ["14. Combo Aniversário", "15 paletas + 3 de brinde", "US$ 17.00"] },
          { columnas: ["15. Combo Reunião", "10 paletas sortidas", "US$ 12.00"] },
          { columnas: ["16. Combo Vizinhos", "18 paletas econômicas", "US$ 16.00"] },
          { columnas: ["17. Combo Domingo", "6 cremosas + 2 frutadas", "US$ 9.50"] },
          { columnas: ["18. Combo Compartilhar", "9 paletas sortidas", "US$ 10.80"] },
        ],
      },
      {
        subtitulo: "Combos premium e de presente (19-24)",
        tipo: "tabla",
        encabezados: ["Combo", "Conteúdo", "Preço sugerido"],
        filas: [
          { columnas: ["19. Combo Degustação", "4 sabores diferentes", "US$ 5.00"] },
          { columnas: ["20. Combo Gourmet", "4 paletas premium", "US$ 6.80"] },
          { columnas: ["21. Combo Presente", "6 paletas em caixa decorada", "US$ 10.00"] },
          { columnas: ["22. Combo Premium Casal", "2 premium + caixa de presente", "US$ 5.50"] },
          { columnas: ["23. Combo Luxo", "8 paletas premium sortidas", "US$ 13.50"] },
          { columnas: ["24. Combo Empresarial", "24 paletas + etiqueta personalizada", "US$ 30.00"] },
        ],
      },
      {
        subtitulo: "Combos por temporada e ocasião (25-30)",
        tipo: "tabla",
        encabezados: ["Combo", "Conteúdo", "Preço sugerido"],
        filas: [
          { columnas: ["25. Combo Verão", "6 paletas tropicais", "US$ 7.80"] },
          { columnas: ["26. Combo Natal", "12 paletas em caixa de presente", "US$ 16.00"] },
          { columnas: ["27. Combo Dia dos Namorados", "2 premium em caixa coração", "US$ 5.00"] },
          { columnas: ["28. Combo Dia das Mães", "6 gourmet em caixa especial", "US$ 11.00"] },
          { columnas: ["29. Combo Férias", "15 paletas sortidas", "US$ 17.50"] },
          { columnas: ["30. Combo Atacado", "50 paletas para revender", "US$ 45.00"] },
        ],
      },
      {
        subtitulo: "Estratégias para vender mais combos",
        tipo: "lista",
        items: [
          "Ofereça sempre o combo antes da paleta individual.",
          "Inclua uma paleta de brinde nos combos grandes para dar mais valor.",
          "Monte combos por ocasião: aniversários, reuniões, presentes.",
          "Dê um preço especial para pedidos antecipados ou no atacado.",
          "Mostre a economia do combo em relação a comprar por unidade.",
          "Crie um combo estrela e promova ele toda semana.",
        ],
      },
    ],
  },
]
