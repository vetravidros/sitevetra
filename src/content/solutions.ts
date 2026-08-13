import type { ImageName } from '@/content/images.generated'

export type Solution = {
  id: string
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
    id: 'fachadas',
    index: '01',
    title: 'Fachadas e envidraçamento',
    lede: 'Fechar uma varanda sem fechar a vista. Perfis mínimos, vão livre, o vidro assumindo o papel de parede.',
    items: [
      'Cortina de vidro sem roldanas aparentes',
      'Envidraçamento de sacada e terraço',
      'Fachadas em vidro estrutural',
      'Guarda-corpos em vidro laminado',
    ],
    image: 'solucao-fachadas',
    imageAlt:
      'Varanda envidraçada em Fortaleza com vista para piscina e coqueiros, painéis de vidro recolhidos na lateral',
  },
  {
    id: 'box',
    index: '02',
    title: 'Box e Box Elegance',
    lede: 'O banho como peça de projeto. Ferragens escolhidas junto com o metal da louça, não depois dele.',
    items: [
      'Box Elegance com perfil embutido',
      'Box de correr, abrir e canto',
      'Acabamentos em preto, dourado, cobre e inox',
      'Vidro incolor, fumê e extraclaro',
    ],
    image: 'solucao-box',
    imageAlt:
      'Box de vidro temperado com nicho iluminado em banheiro revestido de porcelanato claro',
  },
  {
    id: 'sob-medida',
    index: '03',
    title: 'Espelhos e sob medida',
    lede: 'O que não existe em catálogo. Divisórias, portas, painéis e espelhos desenhados para um vão específico.',
    items: [
      'Divisórias e portas slide door com perfil preto',
      'Espelhos de grande formato com iluminação embutida',
      'Painéis, prateleiras e tampos em vidro',
      'Projetos comerciais e corporativos',
    ],
    image: 'solucao-sob-medida',
    imageAlt:
      'Divisórias de vidro com perfil preto separando sala de reunião de corredor em escritório',
  },
]
