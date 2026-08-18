// Manifesto de origem das imagens.
// `src` é relativo ao acervo bruto (RAW_DIR) — o acervo fica FORA do repositório.
// `out` é o nome final publicado em /public/img/<out>-<largura>.<fmt>
// Trocar uma foto = trocar o `src` aqui e rodar `npm run assets`.
//
// Regra de curadoria: só entram originais com largura >= 900px nas peças de
// destaque (hero, capa de projeto). Originais menores só aparecem em células
// pequenas de galeria — o gerador nunca faz upscale, então uma foto pequena
// simplesmente não recebe as variantes maiores.

export const RAW_DIR = '/Users/andreramos/Claude/SiteVetra/fotos'

/**
 * Fotos do hero ficam em fotos-origem/, dentro do projeto — são poucas, mudam
 * junto com o layout e é onde o André salva os arquivos novos.
 * `src` também aceita caminho absoluto (é o caso das entradas do hero).
 */
export const HERO_DIR = new URL('../fotos-origem/', import.meta.url).pathname

/** Larguras candidatas. O gerador descarta as maiores que o original. */
export const WIDTHS = [480, 800, 1200, 1600]

/**
 * O hero ocupa a tela inteira, então precisa de variantes maiores que o resto
 * do site. Não vale subir WIDTHS global: geraria arquivos gigantes e inúteis
 * para card de projeto.
 */
export const HERO_WIDTHS = [640, 1024, 1440, 1920, 2560]

export const IMAGES = [
  // ---------------------------------------------------------------- hero
  // Duas fotos por art direction: a horizontal é cortada demais em tela de
  // celular, onde some justamente a lateral com a arquitetura.
  // Especificação para substituir estas duas: ver README › Imagens › Hero.
  {
    out: 'hero-desktop',
    src: `${HERO_DIR}hero-desktop.png`, // 1672x941 — abaixo do ideal, ver README
    widths: HERO_WIDTHS,
    fallback: 'HERO.png',
  },
  {
    // Ainda não existe corte vertical: cai para a mesma imagem do desktop, que
    // no celular é cortada nas laterais. Basta salvar fotos-origem/hero-mobile.png
    // (1600x2400) e rodar `npm run assets` para o corte próprio entrar.
    out: 'hero-mobile',
    src: `${HERO_DIR}hero-mobile.png`,
    widths: HERO_WIDTHS,
    fallback: `${HERO_DIR}hero-desktop.png`,
  },
  {
    // Fundo do hero da /arquitetos. Medição em obra com planta na mão — é a
    // cena que o programa ArqVetra vende, não um ambiente pronto.
    out: 'arqvetra-hero',
    src: `${HERO_DIR}arqvetra-hero.png`, // 1672x941 — não gera 1920/2560
    widths: HERO_WIDTHS,
  },
  {
    // Fundo do hero da /cortina-de-vidro. Varanda fechada com mesa posta,
    // foto vertical de celular — o object-cover corta as laterais no fill.
    out: 'cortina-vidro-hero',
    src: `${HERO_DIR}cortina-vidro-reserva-parque.jpg`, // 2268x4032
    widths: HERO_WIDTHS,
  },

  // ------------------------------------- envidraçamento / cortina de vidro
  { out: 'guararapes-01', src: 'Cortina de Vidro/4206F896-AF5E-407E-BB75-AAF34945530F_1_102_o.jpeg' }, // 1536x2048
  { out: 'guararapes-02', src: 'Cortina de Vidro/17CE6B40-6595-41D4-97DD-891162F75AE4_1_102_o.jpeg' }, // 1536x2048
  { out: 'beira-mar-01', src: 'Cortina de Vidro/BD36A8B3-290B-45A9-B149-E83419C107A9_1_102_o.jpeg' }, // 1536x2048
  { out: 'beira-mar-02', src: 'Cortina de Vidro/CAC6B426-6A34-4BDE-BE49-1A1FC2BD0541_1_102_o.jpeg' }, // 1536x2048
  { out: 'beira-mar-03', src: 'Cortina de Vidro/9D0BF133-887C-42FE-8D98-36651C87CD0D.jpeg' }, // 1080x1080

  // Galeria da /cortina-de-vidro — fotos enviadas pelo André das obras
  // Reserva do Parque, Ana Amélia Boulevard e Unique Meireles.
  { out: 'cortina-vidro-ana-amelia', src: `${HERO_DIR}cortina-vidro-ana-amelia.jpg` }, // 3024x4032
  { out: 'cortina-vidro-unique-meireles', src: `${HERO_DIR}cortina-vidro-unique-meireles.jpg` }, // 3213x5712

  // -------------------------------------------- slide door / divisórias
  { out: 'aldeota-01', src: 'Slide Door/9D37763B-A1FE-4C8E-A7D0-348EC3A055B0.jpeg' }, // 1200x1600
  { out: 'aldeota-02', src: 'Slide Door/F25068D1-7019-45D6-B1A3-723066F0F3A8.jpeg' }, // 1200x1600
  { out: 'aldeota-03', src: 'Slide Door/2071F458-3CFE-41C2-B96A-006087E7DD69.jpeg' }, // 480x640

  // ------------------------------------------------------ box elegance
  { out: 'elegance-01', src: 'Box Elegance/0D566202-FE7E-4349-B626-594A18EFE1CF_1_201_a.jpg' }, // 3213x5712
  { out: 'elegance-02', src: 'Box Elegance/7E0DFAF6-4287-4A64-B60A-57BB040ED421.jpeg' }, // 958x1280
  { out: 'elegance-03', src: 'Box Elegance/E88D0692-325C-42B7-A065-BC648DCA6EFC_4_5005_c.jpeg' }, // 359x640

  // ------------------------------------------------- box reto / box flex
  { out: 'box-sob-medida-01', src: 'Box Reto/60AD0B4A-E567-4E88-9D91-BC56202D9CC7.jpeg' }, // 1200x1600
  { out: 'box-sob-medida-02', src: 'Box Reto/76E847AC-F1E7-4517-8923-89A456ECCF6D.jpeg' }, // 1204x1600
  { out: 'box-sob-medida-03', src: 'Box Flex/A26B37A8-F37C-41BA-AA19-C1EB2A92D11F.jpeg' }, // 1200x1600
  { out: 'box-sob-medida-04', src: 'Box Flex/C91352BC-A7CB-4154-822E-38DB3F29917E.jpeg' }, // 1200x1600
  { out: 'box-sob-medida-05', src: 'Box Reto/46BA0502-11A5-42F6-BE25-B1426BBDC2C7_1_102_o.jpeg' }, // 1536x2048

  // ------------------------------- espelhos e projeto comercial (academia)
  { out: 'imperator-01', src: 'Projetos/52D93FC6-968C-4DB0-A7ED-70480FBE9EC6_1_105_c.jpeg' }, // 666x1182
  { out: 'imperator-02', src: 'Projetos/93C31E80-1D8C-4095-8141-9021F58D7E6B_4_5005_c.jpeg' }, // 310x552
  { out: 'imperator-03', src: 'Projetos/641961CD-96E6-461F-8DCE-2E66814DD444_4_5005_c.jpeg' }, // 310x552
  { out: 'imperator-04', src: 'Projetos/19CF06B2-4AE8-4292-801C-D2E881CA4132_4_5005_c.jpeg' }, // 310x552

  // ---------------------------------------------- capas das 3 soluções
  { out: 'solucao-fachadas', src: 'Cortina de Vidro/CAC6B426-6A34-4BDE-BE49-1A1FC2BD0541_1_102_o.jpeg' },
  { out: 'solucao-box', src: 'Box Elegance/0D566202-FE7E-4349-B626-594A18EFE1CF_1_201_a.jpg' },
  { out: 'solucao-sob-medida', src: 'Slide Door/F25068D1-7019-45D6-B1A3-723066F0F3A8.jpeg' },
]

/** Imagem usada como base do Open Graph. */
export const HERO = 'hero-desktop'
