/**
 * Dados institucionais da VETRA.
 * Fonte única de verdade — schema.org, footer, CTAs e SEO leem daqui.
 * Estruturado para migrar para CMS sem tocar nos componentes.
 */

export const site = {
  name: 'VETRA',
  legalName: 'VETRA Soluções em Vidros',
  tagline: 'Soluções em Vidros',
  /** Usado em <title> e no schema. Trocar aqui muda o site inteiro. */
  positioning: 'Arquitetura em vidro sob medida',
  url: 'https://www.vetravidros.com.br',

  contact: {
    /** E.164, sem espaços — formato exigido pelo link do WhatsApp. */
    phoneE164: '+5585991785809',
    phoneDisplay: '(85) 99178-5809',
    whatsappNumber: '5585991785809',
    email: 'contato@vetravidros.com.br',
  },

  address: {
    locality: 'Fortaleza',
    region: 'CE',
    country: 'BR',
    /** Atendimento por agendamento — sem loja de rua. */
    note: 'Atendimento técnico agendado em Fortaleza e Região Metropolitana',
  },

  /** Formato schema.org openingHours. */
  hours: [
    { label: 'Segunda a sexta', value: '08h — 18h', schema: 'Mo,Tu,We,Th,Fr 08:00-18:00' },
    { label: 'Sábado', value: '08h — 12h', schema: 'Sa 08:00-12:00' },
    { label: 'Domingo', value: 'Fechado', schema: null },
  ],

  social: {
    instagram: 'https://www.instagram.com/vetravidros',
    /** Perfil da Empresa no Google — CTA terciário. */
    googleBusiness: 'https://www.google.com/search?q=VETRA+Solu%C3%A7%C3%B5es+em+Vidros+Fortaleza',
    maps: 'https://www.google.com/maps/search/?api=1&query=VETRA+Solu%C3%A7%C3%B5es+em+Vidros+Fortaleza+CE',
  },

  areaServed: ['Fortaleza', 'Eusébio', 'Aquiraz', 'Caucaia', 'Região Metropolitana de Fortaleza'],
} as const

/**
 * Os três compromissos de execução da VETRA.
 *
 * Confirmados como verdadeiros e sustentáveis publicamente (13/08/2026).
 * São a única afirmação específica do hero — o que separa a VETRA de um
 * concorrente que escreveria o mesmo slogan de categoria. Se algum deixar de
 * ser verdade, sai daqui e some do site inteiro.
 */
export const commitments = [
  {
    label: 'Medição',
    claim: 'Depois do revestimento assentado',
  },
  {
    label: 'Orçamento',
    claim: 'Aberto, item a item',
  },
  {
    label: 'Responsável',
    claim: 'Uma pessoa, do projeto à instalação',
  },
] as const

export const nav = [
  { href: '/', label: 'Início' },
  { href: '/projetos', label: 'Projetos' },
  { href: '/arquitetos', label: 'Arquitetos' },
  { href: '/sobre', label: 'Sobre' },
  { href: '/contato', label: 'Contato' },
] as const
