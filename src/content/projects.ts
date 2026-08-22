import { OBRAS_GERADAS, type ObraFoto } from '@/content/projects.generated'

export const categories = [
  { id: 'cortina-de-vidro', label: 'Cortina de Vidro' },
  { id: 'portas-e-divisorias', label: 'Portas de Correr e Divisórias' },
  { id: 'espelhos', label: 'Espelhos' },
  { id: 'box', label: 'Box de Banheiro' },
] as const

export type CategoryId = (typeof categories)[number]['id']

/**
 * Ficha técnica. TODOS os campos são opcionais e hoje nenhuma obra tem ficha:
 * os dados reais (ano, espessura, ferragem) ainda não foram levantados, e
 * inventá-los ao lado de obra com nome de cliente destruiria a credibilidade
 * do portfólio. A seção some da página enquanto estiver vazia.
 *
 * Para preencher: acrescente os campos que souber em FICHAS, abaixo.
 */
export type Spec = {
  local?: string
  ano?: string
  tipologia?: string
  vidro?: string
  ferragem?: string
  architect?: string
}

export type Project = {
  slug: string
  title: string
  summary: string
  category: CategoryId
  cover: ObraFoto
  coverAlt: string
  gallery: { photo: ObraFoto; alt: string }[]
  spec?: Spec
  body: string[]
  featured?: boolean
}

/**
 * Uma linha por obra, descrevendo o que a foto mostra. Escrito a partir das
 * imagens, não do nome da pasta — nenhuma afirmação técnica que a foto não
 * sustente.
 */
const RESUMOS: Record<string, string> = {
  'helbor-reserva': 'Varanda em L envidraçada de ponta a ponta, com vista aberta para a cidade.',
  'helbor-parque-clube': 'Envidraçamento de varanda corrida em andar alto, sobre área verde.',
  'ana-amelia-boulevard':
    'Varanda curva envidraçada acompanhando o raio da laje, de frente para o mar.',
  'unique-meireles': 'Varanda envidraçada com esquadria escura e vista para o Meireles.',
  'manhattan-beach-riviera':
    'Terraço envidraçado voltado para a piscina do condomínio, em ambiente litorâneo.',
  'terraco-dos-passaros': 'Varanda social envidraçada, integrada à sala de jantar.',
  verdi: 'Envidraçamento de varanda ampla com vista panorâmica para a cidade.',
  'paco-do-bem': 'Varanda envidraçada em vértice, com dois panos convergindo na quina.',
  'portal-de-malaga': 'Varanda envidraçada em pavimento alto, sobre área arborizada.',
  'golf-ville': 'Envidraçamento de varanda com vista para o campo e os coqueiros.',
  'condominio-inovatto': 'Varanda envidraçada de apartamento, com guarda-corpo em vidro.',
  'maison-de-la-musique': 'Varanda envidraçada sobre a área de lazer do empreendimento.',

  'boi-e-cia': 'Fachada comercial em vidro com portas automáticas, voltada para a rua.',
  'casa-do-churrasco':
    'Vitrine em vidro e guarda-corpo de escada na loja, com estrutura metálica aparente.',
  sintsef: 'Divisórias de vidro em salas de atendimento, com portas de abrir.',
  'majo-beauty-club':
    'Divisórias e portas de vidro separando as salas do salão, com fachada envidraçada para a rua.',
  'espaco-305': 'Portas e divisórias de vidro em clínica de estética, com ferragem clara.',
  loopfit: 'Loja envidraçada com perfil preto, montada dentro de galpão de pé-direito alto.',

  'espelhos-sob-medida':
    'Espelhos em banheiro, sala, bar e closet: redondo, oval, arco e painel contínuo, com e sem iluminação embutida.',
  'imperator-performance':
    'Espelhos de grande formato em academia, com iluminação linear embutida e recuo de LED.',
  'residencia-bs-flower':
    'Painel espelhado no corredor, espelhos com iluminação embutida em dois banheiros e divisória de vidro colorido na cozinha.',

  'box-sob-medida':
    'Boxes de correr executados em banheiros com revestimentos e ferragens diferentes: mármore, azulejo escuro, ripado com nicho de LED.',
}

/** Duas ou três frases por obra. Só o que a fotografia sustenta. */
const CORPOS: Record<string, string[]> = {
  'ana-amelia-boulevard': [
    'A laje curva é o dado que define tudo: cada folha precisa acompanhar um raio diferente, e o trilho tem de descrever a curva sem quebrar em segmentos visíveis.',
    'O resultado mantém a leitura contínua do peitoril: de dentro, a linha do vidro acompanha a linha da varanda, e a vista do mar não é interrompida por montante.',
  ],
  'paco-do-bem': [
    'Dois panos se encontram na quina sem montante intermediário. É o ponto onde o envidraçamento normalmente entrega um perfil grosso, e onde ele mais aparece.',
    'A convergência foi resolvida no encontro dos trilhos, o que mantém o vértice limpo e preserva o ângulo da varanda como ele foi desenhado.',
  ],
  'imperator-performance': [
    'Espelho em ambiente comercial tem duas exigências que o residencial não tem: continuidade visual em vãos longos e comportamento seguro em caso de quebra.',
    'Os painéis foram paginados para que as juntas caíssem fora do campo de visão dos equipamentos, e a iluminação linear corre embutida na moldura, sem refletir de volta na altura dos olhos.',
  ],
  sintsef: [
    'O programa pedia salas fechadas numa planta que dependia de poucas aberturas para iluminar tudo. Alvenaria resolveria a privacidade e mataria a luz.',
    'As divisórias em vidro devolvem a luz ao miolo da planta e mantêm a leitura do espaço inteiro a partir do corredor.',
  ],
  loopfit: [
    'A loja é uma caixa de vidro montada dentro de um galpão: não há fachada externa para apoiar, então a estrutura precisa se sustentar e ainda desenhar o limite da operação.',
    'O perfil preto foi escolhido pela seção estreita: ele marca a aresta da caixa sem competir com a estrutura metálica do galpão ao redor.',
  ],
}

const ALT_POR_CATEGORIA: Record<CategoryId, (titulo: string) => string> = {
  'cortina-de-vidro': (t) => `Varanda envidraçada com cortina de vidro executada em ${t}, Fortaleza`,
  'portas-e-divisorias': (t) => `Portas e divisórias de vidro executadas em ${t}, Fortaleza`,
  espelhos: (t) => `Espelhos sob medida executados em ${t}, Fortaleza`,
  box: (t) => `Box de banheiro em vidro temperado executado em ${t}, Fortaleza`,
}

/**
 * Exceção ao padrão acima. Nas coleções "sob medida" (sem cliente único —
 * ver `maxFotos` no manifesto) o título já REPETE a descrição da categoria,
 * e a fórmula genérica gerava alt redundante:
 * "Espelhos sob medida executados em Espelhos sob medida, Fortaleza".
 */
const ALT_OVERRIDES: Record<string, string> = {
  'espelhos-sob-medida': 'Espelho sob medida instalado em residência em Fortaleza',
  'box-sob-medida': 'Box de banheiro sob medida instalado em residência em Fortaleza',
}

/**
 * Fichas técnicas confirmadas. Vazio por enquanto — ver comentário em `Spec`.
 * Exemplo de preenchimento:
 *   'helbor-reserva': { ano: '2025', vidro: 'Temperado incolor 10 mm' },
 */
const FICHAS: Record<string, Spec> = {}

/** Obras em destaque na home, na ordem. */
const DESTAQUES = ['ana-amelia-boulevard']

export const projects: Project[] = OBRAS_GERADAS.map((obra) => {
  const alt = ALT_OVERRIDES[obra.slug] ?? ALT_POR_CATEGORIA[obra.categoria](obra.titulo)
  const ficha = FICHAS[obra.slug]

  return {
    slug: obra.slug,
    title: obra.titulo,
    summary: RESUMOS[obra.slug] ?? '',
    category: obra.categoria,
    cover: obra.fotos[0],
    coverAlt: alt,
    gallery: obra.fotos.map((photo, i) => ({
      photo,
      alt: obra.fotos.length > 1 ? `${alt}, foto ${i + 1} de ${obra.fotos.length}` : alt,
    })),
    ...(ficha && Object.keys(ficha).length > 0 ? { spec: ficha } : {}),
    body: CORPOS[obra.slug] ?? [],
    ...(DESTAQUES.includes(obra.slug) ? { featured: true } : {}),
  }
})

export const featuredProject = projects.find((p) => p.featured) ?? projects[0]

export function projectBySlug(slug: string) {
  return projects.find((p) => p.slug === slug)
}

export function categoryLabel(id: CategoryId) {
  return categories.find((c) => c.id === id)?.label ?? id
}

/** Categorias que têm ao menos uma obra publicada. */
export function categoriasComObra() {
  return categories.filter((c) => projects.some((p) => p.category === c.id))
}
