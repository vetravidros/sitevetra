/**
 * Curadoria das obras do portfólio.
 *
 * `pasta` é o nome da pasta dentro de RAW_OBRAS. `slug` vira a URL.
 * `categoria` foi atribuída olhando as fotos, uma a uma — não pelo nome.
 * `destaques` (opcional) força quais fotos vêm primeiro; a primeira da lista
 * final é a capa da obra. Sem `destaques`, entra a ordem alfabética.
 *
 * Para adicionar uma obra: crie a pasta no acervo, acrescente uma entrada aqui
 * e rode `npm run assets:obras`. O texto editorial vai em src/content/projects.ts.
 */

/** Acervo de obras. Fica fora do build — public/img/obras/ é o que é publicado. */
export const RAW_OBRAS = '/Users/andreramos/Claude/Vetra.com.br/img/Imagens_Site'

/** Teto de fotos por obra. Segura o peso do repositório e o tempo de galeria. */
export const MAX_FOTOS = 6

/** Larguras geradas. O gerador descarta as maiores que o original. */
export const LARGURAS = [480, 900, 1400]

export const OBRAS = [
  // ------------------------------------------------ cortina de vidro
  {
    pasta: 'Helbor Reserva',
    slug: 'helbor-reserva',
    titulo: 'Helbor Reserva',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Helbor Parque Clube',
    slug: 'helbor-parque-clube',
    titulo: 'Helbor Parque Clube',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Edifício Ana Amélia Boulevard',
    slug: 'ana-amelia-boulevard',
    titulo: 'Edifício Ana Amélia Boulevard',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Edifício Unique Meireles',
    slug: 'unique-meireles',
    titulo: 'Edifício Unique Meireles',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Manhattan Beach Riviera',
    slug: 'manhattan-beach-riviera',
    titulo: 'Manhattan Beach Riviera',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Terraço dos Pássaros ',
    slug: 'terraco-dos-passaros',
    titulo: 'Terraço dos Pássaros',
    categoria: 'cortina-de-vidro',
  },
  { pasta: 'Verdi', slug: 'verdi', titulo: 'Verdi', categoria: 'cortina-de-vidro' },
  {
    pasta: 'Paço do Bem',
    slug: 'paco-do-bem',
    titulo: 'Paço do Bem',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Portal de Malaga',
    slug: 'portal-de-malaga',
    titulo: 'Portal de Málaga',
    categoria: 'cortina-de-vidro',
  },
  { pasta: 'Golf Ville', slug: 'golf-ville', titulo: 'Golf Ville', categoria: 'cortina-de-vidro' },
  {
    pasta: 'Condomínio Inovatto',
    slug: 'condominio-inovatto',
    titulo: 'Condomínio Inovatto',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Maison de La Musique',
    slug: 'maison-de-la-musique',
    titulo: 'Maison de La Musique',
    categoria: 'cortina-de-vidro',
  },
  {
    pasta: 'Boi & Cia',
    slug: 'boi-e-cia',
    titulo: 'Boi & Cia',
    categoria: 'portas-e-divisorias',
  },
  {
    pasta: 'Casa do Churrasco',
    slug: 'casa-do-churrasco',
    titulo: 'Casa do Churrasco',
    categoria: 'portas-e-divisorias',
  },

  // --------------------------- portas de correr, divisórias e espelhos
  {
    pasta: 'Imperator Performance ',
    slug: 'imperator-performance',
    titulo: 'Imperator Performance',
    categoria: 'espelhos',
    // Capa escolhida pelo André (14/08/2026) — a primeira de `destaques`
    // sempre vira a capa da obra.
    destaques: ['IMG_1303.heic'],
  },
  { pasta: 'SINTSEF', slug: 'sintsef', titulo: 'SINTSEF', categoria: 'portas-e-divisorias' },
  {
    pasta: 'Majô Beauty Club',
    slug: 'majo-beauty-club',
    titulo: 'Majô Beauty Club',
    categoria: 'portas-e-divisorias',
  },
  {
    pasta: 'Espaço 305',
    slug: 'espaco-305',
    titulo: 'Espaço 305',
    categoria: 'portas-e-divisorias',
  },
  { pasta: 'Evando', slug: 'residencia-evando', titulo: 'Residência Evando', categoria: 'espelhos' },
  { pasta: 'Loopfit', slug: 'loopfit', titulo: 'Loopfit', categoria: 'portas-e-divisorias' },
  {
    pasta: 'Espelhos',
    slug: 'espelhos-sob-medida',
    titulo: 'Espelhos sob medida',
    categoria: 'espelhos',
    // Coleção, não obra única — a variedade de formato/acabamento É o
    // conteúdo. Sobrepõe o MAX_FOTOS global para publicar a pasta inteira.
    maxFotos: 20,
  },

  // -------------------------------------------------------- box de banheiro
  {
    pasta: 'Box Banheiro',
    slug: 'box-sob-medida',
    titulo: 'Box sob medida',
    categoria: 'box',
  },
]
