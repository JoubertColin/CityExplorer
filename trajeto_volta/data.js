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
    category: 'Natureza',
    city: 'São Francisco de Paula',
    address: 'Rodovia ERS-235, Km 68 - São Francisco de Paula - RS',
    hours: 'Diariamente: 10:00h às 18:00h',
    price: '$$$',
    rating: '4.8 ★ (700+ avaliações)',
    popularRank: 1,
    route: 1,
    image: 'imagens/matria.jpg',
    summary: 'Grande parque de flores e jardins temáticos na Serra Gaúcha, com paisagens, experiências ao ar livre e espaços dedicados à natureza.',
    description: 'O Mátria Parque de Flores é um dos principais atrativos de natureza de São Francisco de Paula. Instalado em uma área de aproximadamente 50 hectares, o parque reúne dezenas de jardins temáticos que integram paisagismo, flores e elementos naturais dos Campos de Cima da Serra. Entre os espaços estão o Jardim das Cerejeiras, Jardim das Magnólias, Jardim dos Ventos, Jardim Sensorial, Vale dos Ipês e Mar de Rosas, proporcionando um passeio contemplativo e fotogênico em meio à natureza.',
    tip: 'Reserve algumas horas para conhecer o parque com calma. A primavera e o verão costumam proporcionar uma experiência especialmente colorida, mas cada estação apresenta diferentes espécies e paisagens.'
  },
  {
    id: 'mirante_rota_do_sol',
    name: 'Mirante da Rota do Sol',
    category: 'Mirante',
    city: 'São Francisco de Paula',
    address: 'Rota do Sol - São Francisco de Paula - RS',
    hours: 'Acesso livre',
    price: 'Grátis',
    rating: '—',
    popularRank: 2,
    route: 1,
    image: 'imagens/mirante_rota_sol.jpg',
    summary: 'Mirante às margens da Rota do Sol com vista panorâmica para as paisagens montanhosas da Serra Gaúcha.',
    description: 'O Mirante da Rota do Sol é um ponto de parada para contemplação localizado na região de São Francisco de Paula, junto ao trajeto da Rota do Sol. O local proporciona uma vista das montanhas, vales e áreas de vegetação características da Serra Gaúcha, sendo uma parada interessante para quem percorre a rodovia em direção ao litoral ou à serra.',
    tip: 'Aproveite a parada para fotografar a paisagem e observar a mudança do cenário entre os vales e as áreas de serra. Tenha atenção ao trânsito ao acessar e deixar o ponto de parada.'
  },
  {
    id: 'cafe_tainhas',
    name: 'Café Tainhas',
    category: 'Gastronomia',
    city: 'São Francisco de Paula',
    address: 'Rodovia RS-020, Km 127 - Tainhas - São Francisco de Paula - RS',
    hours: 'Segunda a sexta: 07:00h às 18:30h | Sábado e domingo: 07:00h às 19:00h',
    price: '$$',
    rating: '4.2 ★ (300+ avaliações)',
    popularRank: 3,
    route: 1,
    image: 'imagens/cafe_tainhas.jpg',
    summary: 'Tradicional parada gastronômica na região de Tainhas, conhecida pelos famosos pastéis, cafés, lanches e produtos coloniais.',
    description: 'O Café Tainhas é uma tradicional parada para viajantes na região de São Francisco de Paula, localizado junto à RS-020, no distrito de Tainhas. O estabelecimento oferece café da manhã, lanches, bebidas quentes, sucos, produtos coloniais e almoço. Entre as especialidades estão os famosos pastéis, enquanto o espaço conta ainda com estacionamento, deck com vista panorâmica, Wi-Fi, banheiros, fraldário e espaço para animais de estimação.',
    tip: 'É uma ótima parada para quem está percorrendo a Rota do Sol. Experimente os famosos pastéis e aproveite o deck panorâmico para descansar durante a viagem.'
  },
  {
    id: 'mirante_morro_do_farol',
    name: 'Mirante Morro do Farol',
    category: 'Mirante',
    city: 'Torres',
    address: 'Morro do Farol - Torres - RS',
    hours: 'Acesso livre',
    price: 'Grátis',
    rating: '4.9 ★ (16 mil+ avaliações)',
    popularRank: 4,
    route: 1,
    image: 'imagens/morro_do_farol.jpg',
    summary: 'Um dos principais mirantes de Torres, com vista panorâmica para o oceano, praias e a paisagem costeira do litoral gaúcho.',
    description: 'O Morro do Farol é um dos principais cartões-postais de Torres e um dos pontos mais procurados para contemplar a costa do Rio Grande do Sul. Situado em uma elevação junto ao mar, o local oferece amplas vistas da Praia Grande, Prainha e outras áreas da orla. No alto encontra-se o atual farol, inaugurado em 1952 e atualmente utilizado pelo ICMBio como observatório de fauna marinha. O morro também é conhecido como ponto de observação e prática de parapente.',
    tip: 'Visite no início da manhã ou no final da tarde para aproveitar uma iluminação mais bonita para fotografias. O pôr do sol é especialmente interessante quando as condições climáticas estão favoráveis.'
  },
  {
    id: 'panificio_real',
    name: 'Panifício Real',
    category: 'Gastronomia',
    city: 'Tubarão',
    address: 'Av. Patrício Lima, 1616 - Tubarão SC',
    hours: 'Segunda a sábado: 06:30h às 21:00h | Domingo: 14:00h às 21:00h',
    price: '$$',
    rating: '4.6 ★ (1k+ avaliações)',
    popularRank: 1,
    route: 1,
    image: 'imagens/padaria.jpg',
    summary: 'Tradicional padaria e confeitaria de Tubarão SC, conhecida pela variedade de pães, doces, salgados e opções para café.',
    description: 'O Panifício Real é uma tradicional padaria e confeitaria de Tubarão, localizada na Avenida Patrício Lima. O estabelecimento oferece uma grande variedade de pães, doces, salgados, cafés e produtos de confeitaria, sendo uma opção bastante procurada tanto pelos moradores quanto por visitantes que passam pela cidade.',
    tip: 'Uma boa opção para uma parada durante a viagem, especialmente no início da manhã, quando há grande variedade de pães e produtos frescos.'
  }




];
