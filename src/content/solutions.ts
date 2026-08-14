import type { ImageName } from '@/content/images.generated'
import type { CategoryId } from '@/content/projects'

export type Solution = {
  /** Mesmo id da categoria do portfólio — é o que liga o card ao filtro. */
  id: CategoryId
  /** Numeração visível no layout — parte da linguagem gráfica. */
  index: string
  title: string
  lede: string
  items: string[]
  image: ImageName
  imageAlt: string
}

export const solutions: Solution[] = [
  {
    id: 'cortina-de-vidro',
    index: '01',
    title: 'Cortina de Vidro',
    lede: 'Fechar a varanda sem fechar a vista. Vão livre, perfil mínimo, o vidro assumindo o papel de parede.',
    items: [
      'Envidraçamento de varanda e terraço',
      'Sistema sem roldanas aparentes',
      'Folhas de piso a teto, recolhimento lateral',
      'Ferragem dimensionada para vento e maresia',
    ],
    image: 'solucao-fachadas',
    imageAlt:
      'Varanda envidraçada em Fortaleza com vista para piscina e coqueiros, painéis de vidro recolhidos na lateral',
  },
  {
    id: 'portas-e-divisorias',
    index: '02',
    title: 'Portas de Correr e Divisórias',
    lede: 'Separar ambientes sem escurecer nenhum. Perfil estreito desenha a linha, não o volume.',
    items: [
      'Divisórias internas em vidro',
      'Portas de correr com trilho embutido',
      'Perfil preto fosco, inox e alumínio',
      'Fachadas e vitrines comerciais',
    ],
    image: 'solucao-sob-medida',
    imageAlt:
      'Divisórias de vidro com perfil preto separando sala de reunião de corredor em escritório',
  },
  {
    id: 'espelhos',
    index: '03',
    title: 'Espelhos',
    lede: 'De painel contínuo de parede inteira a peça recortada para um vão específico.',
    items: [
      'Espelhos de grande formato',
      'Iluminação embutida e recuo de LED',
      'Película de segurança na face posterior',
      'Formatos sob medida e bordas trabalhadas',
    ],
    image: 'solucao-box',
    imageAlt: 'Espelho iluminado sobre bancada de banheiro com revestimento claro',
  },
  {
    id: 'box',
    index: '04',
    title: 'Box de Banheiro',
    lede: 'O banho como peça de projeto. Ferragem escolhida junto com o metal da louça, não depois dele.',
    items: [
      'Box de correr, abrir e canto',
      'Perfil embutido e ferragem aparente',
      'Acabamentos em preto, dourado, cobre e inox',
      'Vidro incolor, fumê e extraclaro',
    ],
    image: 'solucao-box',
    imageAlt:
      'Box de vidro temperado com nicho iluminado em banheiro revestido de porcelanato claro',
  },
]
