import type { ImageName } from '@/content/images.generated'

export const categories = [
  { id: 'fachadas', label: 'Fachadas e envidraçamento' },
  { id: 'box', label: 'Box e Box Elegance' },
  { id: 'sob-medida', label: 'Espelhos e sob medida' },
] as const

export type CategoryId = (typeof categories)[number]['id']

export type Project = {
  slug: string
  title: string
  /** Uma linha, aparece sob o título na grade. */
  summary: string
  category: CategoryId
  cover: ImageName
  coverAlt: string
  gallery: { name: ImageName; alt: string }[]
  /** Ficha técnica curta. `architect: null` = projeto direto com o cliente. */
  spec: {
    local: string
    ano: string
    tipologia: string
    vidro: string
    ferragem: string
    architect: string | null
  }
  /** Dois a três parágrafos. Descreve a decisão de projeto, não o produto. */
  body: string[]
  featured?: boolean
}

export const projects: Project[] = [
  {
    slug: 'varanda-guararapes',
    title: 'Varanda contínua, Guararapes',
    summary: 'Sala e varanda integradas por um plano de vidro de ponta a ponta.',
    category: 'fachadas',
    cover: 'guararapes-01',
    coverAlt:
      'Mesa de jantar junto a varanda envidraçada com vista para a cidade de Fortaleza ao entardecer',
    gallery: [
      {
        name: 'guararapes-01',
        alt: 'Mesa de jantar junto a varanda envidraçada com vista para a cidade de Fortaleza',
      },
      {
        name: 'guararapes-02',
        alt: 'Varanda envidraçada em andar alto com vista para área verde e prédios de Fortaleza',
      },
    ],
    spec: {
      local: 'Guararapes, Fortaleza/CE',
      ano: '2025',
      tipologia: 'Cortina de vidro em varanda de apartamento',
      vidro: 'Temperado incolor 10 mm',
      ferragem: 'Sistema deslizante com trilho embutido, acabamento branco',
      architect: null,
    },
    body: [
      'A varanda já tinha a vista. O que faltava era conseguir usá-la o ano inteiro sem transformar o vão em uma moldura de alumínio.',
      'A solução foi reduzir a leitura do sistema ao mínimo: trilho superior embutido no forro, folhas de piso a teto e nenhum perfil vertical entre elas. Fechada, a varanda vira extensão da sala. Aberta, o vidro se recolhe inteiro em uma lateral.',
      'O alinhamento do trilho foi definido junto com o rebaixo de gesso, antes do acabamento — é o tipo de decisão que precisa acontecer no projeto, não na instalação.',
    ],
    featured: true,
  },
  {
    slug: 'terraco-beira-mar',
    title: 'Terraço voltado para o mar',
    summary: 'Envidraçamento em ambiente de alta salinidade e vento constante.',
    category: 'fachadas',
    cover: 'beira-mar-01',
    coverAlt: 'Terraço envidraçado com vista para o mar e para a orla de Fortaleza em dia claro',
    gallery: [
      {
        name: 'beira-mar-01',
        alt: 'Terraço envidraçado com vista para o mar e para a orla de Fortaleza',
      },
      {
        name: 'beira-mar-02',
        alt: 'Varanda envidraçada com vista para piscina, coqueiros e telhado de palha do condomínio',
      },
      {
        name: 'beira-mar-03',
        alt: 'Varanda envidraçada com vista para campo gramado e coqueiros ao fundo',
      },
    ],
    spec: {
      local: 'Beira-Mar, Fortaleza/CE',
      ano: '2025',
      tipologia: 'Envidraçamento de terraço em condomínio litorâneo',
      vidro: 'Temperado incolor 10 mm',
      ferragem: 'Componentes em inox e alumínio anodizado',
      architect: null,
    },
    body: [
      'Frente de mar impõe duas variáveis que mudam a especificação inteira: maresia e carga de vento. Ferragem comum não sobrevive ao primeiro ano.',
      'Todo o conjunto foi especificado em inox e alumínio anodizado, com fixações dimensionadas para a pressão de vento da cota do pavimento. O acabamento branco acompanha a esquadria existente para não criar uma segunda linha visual na fachada.',
    ],
  },
  {
    slug: 'escritorio-aldeota',
    title: 'Escritório em Aldeota',
    summary: 'Divisórias em vidro com perfil preto: privacidade acústica sem perder a luz.',
    category: 'sob-medida',
    cover: 'aldeota-01',
    coverAlt:
      'Corredor de escritório com divisórias de vidro e perfil preto revelando sala de estar interna',
    gallery: [
      {
        name: 'aldeota-01',
        alt: 'Corredor de escritório com divisórias de vidro e perfil preto revelando sala interna',
      },
      {
        name: 'aldeota-02',
        alt: 'Sala de reunião fechada com divisórias de vidro e perfil preto, sofá e quadro ao fundo',
      },
      {
        name: 'aldeota-03',
        alt: 'Porta de correr em vidro com perfil preto abrindo para área externa com jardim',
      },
    ],
    spec: {
      local: 'Aldeota, Fortaleza/CE',
      ano: '2024',
      tipologia: 'Divisórias internas e porta de correr slide door',
      vidro: 'Temperado incolor 10 mm',
      ferragem: 'Perfil slide door preto fosco, roldana embutida',
      architect: null,
    },
    body: [
      'O programa pedia salas fechadas em uma planta que dependia de uma única fachada para iluminar tudo. Parede de alvenaria resolveria a acústica e mataria a luz.',
      'As divisórias em vidro com perfil preto fosco mantêm a profundidade do corredor e devolvem a luz da fachada ao miolo da planta. O perfil foi escolhido pela seção estreita — ele desenha a linha, não o volume.',
      'As portas correm sobre trilho embutido no forro, alinhadas ao mesmo prumo das divisórias fixas.',
    ],
    featured: true,
  },
  {
    slug: 'suite-master-elegance',
    title: 'Suíte master, Box Elegance',
    summary: 'Box com perfil embutido, alinhado ao nicho iluminado do revestimento.',
    category: 'box',
    cover: 'elegance-01',
    coverAlt:
      'Box de vidro temperado em banheiro de porcelanato claro com nicho iluminado por fita de LED',
    gallery: [
      {
        name: 'elegance-01',
        alt: 'Box de vidro temperado com nicho iluminado por fita de LED em banheiro claro',
      },
      {
        name: 'elegance-02',
        alt: 'Box de vidro com perfil metálico em banheiro com revestimento rosé e piso amadeirado',
      },
      {
        name: 'elegance-03',
        alt: 'Box de vidro em banheiro de mármore com parede verde e chuveiros duplos',
      },
    ],
    spec: {
      local: 'Fortaleza/CE',
      ano: '2025',
      tipologia: 'Box Elegance de correr, vão único',
      vidro: 'Temperado incolor 8 mm',
      ferragem: 'Perfil embutido, acabamento acetinado',
      architect: null,
    },
    body: [
      'O nicho iluminado já estava executado quando o box entrou. Qualquer desalinhamento entre o perfil e a linha de LED ficaria evidente de frente.',
      'A medição foi feita depois do revestimento assentado e o perfil superior recebeu recorte para acompanhar a cota exata do nicho. É meio centímetro que só aparece se estiver errado.',
    ],
  },
  {
    slug: 'boxes-sob-medida',
    title: 'Série de banhos sob medida',
    summary: 'Cinco banheiros, cinco ferragens diferentes — uma para cada paleta.',
    category: 'box',
    cover: 'box-sob-medida-01',
    coverAlt: 'Box de vidro com perfil preto em banheiro com revestimento de mármore claro',
    gallery: [
      {
        name: 'box-sob-medida-01',
        alt: 'Box de vidro com perfil preto em banheiro com revestimento de mármore claro',
      },
      {
        name: 'box-sob-medida-02',
        alt: 'Box de vidro em banheiro cinza com nicho horizontal e ducha preta',
      },
      {
        name: 'box-sob-medida-03',
        alt: 'Box de vidro em banheiro com parede revestida em madeira e cuba branca suspensa',
      },
      {
        name: 'box-sob-medida-04',
        alt: 'Box de vidro em banheiro com revestimento amadeirado e bancada de mármore branco',
      },
      {
        name: 'box-sob-medida-05',
        alt: 'Box de vidro com moldura escura em banheiro de subway tile branco',
      },
    ],
    spec: {
      local: 'Fortaleza e Região Metropolitana',
      ano: '2024 — 2025',
      tipologia: 'Boxes de correr e de abrir, vãos irregulares',
      vidro: 'Temperado incolor e fumê, 8 mm',
      ferragem: 'Preto fosco, dourado escovado, cobre e inox',
      architect: null,
    },
    body: [
      'Nenhum destes vãos era retangular. Prumo fora, contrapiso com caimento, parede com barriga — o normal de obra pronta.',
      'Cada peça saiu de medição a laser feita no local, com o revestimento já assentado. A ferragem foi definida a partir do metal já especificado no banheiro: quando o box chega depois, ele se ajusta à paleta, não o contrário.',
    ],
  },
  {
    slug: 'imperator-espelhos',
    title: 'Espelhos de grande formato, Imperator',
    summary: 'Painéis contínuos e divisórias para uma operação comercial de alto fluxo.',
    category: 'sob-medida',
    cover: 'imperator-01',
    coverAlt:
      'Painel de espelho de grande formato refletindo área de musculação com iluminação linear',
    gallery: [
      {
        name: 'imperator-01',
        alt: 'Painel de espelho de grande formato refletindo área de musculação iluminada',
      },
      {
        name: 'imperator-02',
        alt: 'Parede espelhada contínua ao longo da área de pesos livres da academia',
      },
      {
        name: 'imperator-03',
        alt: 'Bancada de lavatório com espelho iluminado por fita de LED embutida no forro',
      },
      {
        name: 'imperator-04',
        alt: 'Divisórias de vidro escuro com perfil preto em vestiário',
      },
    ],
    spec: {
      local: 'Fortaleza/CE',
      ano: '2024',
      tipologia: 'Espelhos de parede, divisórias de vestiário e portas',
      vidro: 'Espelho 4 mm com película de segurança; temperado fumê 8 mm nas divisórias',
      ferragem: 'Perfil preto fosco e fixação oculta',
      architect: null,
    },
    body: [
      'Espelho em ambiente comercial tem duas exigências que o residencial não tem: continuidade visual em vãos longos e comportamento seguro em caso de quebra.',
      'Os painéis foram paginados para que as juntas caíssem fora do campo de visão dos equipamentos, e todos receberam película de segurança na face posterior. Nos vestiários, o vidro fumê resolve a privacidade sem exigir divisória cega.',
    ],
  },
]

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function categoryLabel(id: CategoryId) {
  return categories.find((c) => c.id === id)?.label ?? id
}
