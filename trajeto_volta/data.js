/* ==========================================================================
   Trajeto - Tourist Spot Data
   Consumed by ../assets/app.js
   ========================================================================== */

/* CITY_NAME segue sendo o fallback para links do Google (caso um ponto
   não informe sua própria cidade). Como esse trajeto passa por várias
   cidades, cada ponto abaixo tem seu próprio campo "city" — é aí que se
   deve inserir o nome da cidade de cada novo local adicionado. */

window.CITY_NAME = '';

window.CITY_DATA = [
  {
    id: 'matria_parque_flores',
    name: 'Mátria Parque de Flores',
    category: 'Entretenimento',
    city: 'São Francisco de Paula',
    address: 'Rodovia ERS-235, Km 68 - S. Francisco de Paula RS',
    hours: 'Diariamente: 10h às 18h',
    price: '$$ - $$$',
    rating: '4.8 ★ (700+ avaliações)',
    popularRank: 1,
    route: 1,
    image: 'imagens/matria.jpg',
    summary: 'Grande parque de flores e jardins temáticos em São Francisco de Paula RS, com paisagens e experiências ao ar livre.',
    description: 'O Mátria Parque de Flores é um dos principais atrativos de natureza de São Francisco de Paula. Instalado em uma área de aproximadamente 50 hectares, o parque reúne dezenas de jardins temáticos que integram paisagismo, flores e elementos naturais dos Campos de Cima da Serra. Entre os espaços estão o Jardim das Cerejeiras, Jardim das Magnólias, Jardim dos Ventos, Jardim Sensorial, Vale dos Ipês e Mar de Rosas, proporcionando um passeio contemplativo e fotogênico em meio à natureza.',
    tip: 'Reserve algumas horas para conhecer o parque com calma. A primavera e o verão costumam proporcionar uma experiência especialmente colorida, mas cada estação apresenta diferentes espécies e paisagens.'
  },
  {
    id: 'cafe_tainhas',
    name: 'Café Tainhas',
    category: 'Gastronomia',
    city: 'São Francisco de Paula',
    address: 'Rodovia RS-020, Km 127 - Tainhas - S. Francisco de Paula RS',
    hours: 'Diariamente: 07h às 19h',
    price: '$ - $$',
    rating: '4.2 ★ (300+ avaliações)',
    popularRank: 2,
    route: 2,
    image: 'imagens/cafe_tainhas.png',
    summary: 'Tradicional parada gastronômica na região de Tainhas, conhecida pelos famosos pastéis, cafés, lanches e produtos coloniais.',
    description: 'O Café Tainhas é uma tradicional parada para viajantes na região de São Francisco de Paula, localizado junto à RS-020, no distrito de Tainhas. O estabelecimento oferece café da manhã, lanches, bebidas quentes, sucos, produtos coloniais e almoço. Entre as especialidades estão os famosos pastéis, enquanto o espaço conta ainda com estacionamento, deck com vista panorâmica, Wi-Fi, banheiros, fraldário e espaço para animais de estimação.',
    tip: 'É uma ótima parada para quem está percorrendo a Rota do Sol. Experimente os famosos pastéis e aproveite o deck panorâmico para descansar durante a viagem.'
  },
  {
    id: 'mirante_rota_do_sol',
    name: 'Mirante da Rota do Sol',
    category: 'Paisagem',
    city: 'Itati',
    address: 'RS-486, Km4 - Itati RS',
    hours: 'Acesso livre',
    price: 'Gratuito',
    rating: '4.8 ★ (14 mil+ avaliações)',
    popularRank: 3,
    route: 3,
    image: 'imagens/mirante-rota-sol.jpg',
    summary: 'Mirante às margens da Rota do Sol com vista panorâmica para as paisagens montanhosas da Serra Gaúcha.',
    description: 'O Mirante da Rota do Sol é um ponto de parada para contemplação localizado na região de São Francisco de Paula, junto ao trajeto da Rota do Sol. O local proporciona uma vista das montanhas, vales e áreas de vegetação características da Serra Gaúcha, sendo uma parada interessante para quem percorre a rodovia em direção ao litoral ou à serra.',
    tip: 'Aproveite a parada para fotografar a paisagem e observar a mudança do cenário entre os vales e as áreas de serra. Tenha atenção ao trânsito ao acessar e deixar o ponto de parada.'
  },
  {
    id: 'mirante_morro_do_farol',
    name: 'Mirante Morro do Farol',
    category: 'Paisagem',
    city: 'Torres',
    address: 'Rua Alferes Porto - Torres RS',
    hours: 'Acesso livre',
    price: 'Gratuito',
    rating: '4.9 ★ (16 mil+ avaliações)',
    popularRank: 4,
    route: 4,
    image: 'imagens/morro_do_farol.jpg',
    summary: 'Um dos principais mirantes de Torres, com vista panorâmica para o oceano, praias e a paisagem costeira do litoral gaúcho.',
    description: 'O Morro do Farol é um dos principais cartões-postais de Torres e um dos pontos mais procurados para contemplar a costa do Rio Grande do Sul. Situado em uma elevação junto ao mar, o local oferece amplas vistas da Praia Grande, Prainha e outras áreas da orla. No alto encontra-se o atual farol, inaugurado em 1952 e atualmente utilizado pelo ICMBio como observatório de fauna marinha. O morro também é conhecido como ponto de observação e prática de parapente.',
    tip: 'Visite no início da manhã ou no final da tarde para aproveitar uma iluminação mais bonita para fotografias. O pôr do sol é especialmente interessante quando as condições climáticas estão favoráveis.'
  },
  {
    id: 'engenho_lanches',
    name: 'Engenho Lanches',
    category: 'Gastronomia',
    city: 'Paulo Lopes',
    address: 'Rodovia BR-101, Km 266, s/n, Penha - Paulo Lopes SC',
    hours: 'Diariamente: 06h às 22h',
    price: '$$',
    rating: '4.6 ★ (32k+ avaliações)',
    popularRank: 5,
    route: 5,
    image: 'imagens/engenho_lanches.jpg',
    summary: 'Tradicional parada às margens da BR-101, produtos coloniais, lanches e amplo espaço de lazer em meio à natureza.',
    description: 'O Engenho Lanches é uma tradicional parada de viagem em Paulo Lopes, localizada às margens da BR-101. O complexo oferece uma variedade de lanches, salgados, doces, bolos, cafés e outros produtos, além de restaurante, empório, lojas e produtos coloniais. O espaço também se destaca pelo ambiente rústico e acolhedor, com lago, ponte sobre o rio, passarela e uma pequena fazendinha com animais, proporcionando uma experiência agradável para viajantes e famílias.',
    tip: 'Uma ótima opção para fazer uma pausa durante a viagem pela BR-101. Reserve um pouco de tempo para conhecer as áreas externas, o lago, a fazendinha e as lojas, além de aproveitar para experimentar os produtos coloniais.'
  },
  {
    id: 'cantina_zabot',
    name: 'Cantina Zabot Restaurante',
    category: 'Gastronomia',
    city: 'São José',
    address: 'Av. Leoberto Leal, 184 - Barreiros - São José SC',
    hours: 'Seg a sex: 11:30h às 15h e 18:30h às 00h | Sáb e dom: 11:30h às 15:30h e 18:30h às 00h',
    price: '$$ - $$$',
    rating: '4.7 ★ (4k+ avaliações)',
    popularRank: 6,
    route: 6,
    image: 'imagens/cantina_zabot.jpg',
    summary: 'Tradicional restaurante de São José especializado em culinária brasileira e frutos do mar, com pratos fartos, ambiente amplo e atendimento familiar.',
    description: 'A Cantina Zabot é um tradicional restaurante de Barreiros, em São José, com história que remonta a 1991. Atualmente instalada em um prédio moderno na Avenida Leoberto Leal, a casa oferece culinária brasileira e especialidades com frutos do mar, incluindo pratos como camarão, linguado, salmão e preparações à milanesa e à parmegiana. O restaurante conta com amplo salão, estacionamento, acessibilidade para cadeirantes e ambiente familiar. Avaliações recentes também destacam as porções generosas, o custo-benefício e a presença do proprietário no atendimento aos clientes.',
    tip: 'Uma boa opção para almoço ou jantar durante um roteiro pela Grande Florianópolis. Para uma experiência mais tranquila, considere chegar próximo ao início do horário de atendimento, especialmente nos fins de semana. Se gosta de frutos do mar, vale conferir as opções de camarão e os pratos de peixe disponíveis no cardápio.'
  }
];
