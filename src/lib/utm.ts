import { site } from '@/content/site'

/**
 * Parâmetros de campanha. Todo CTA do site declara os seus — é assim que a
 * VETRA sabe qual página e qual botão originou cada conversa no WhatsApp.
 */
export type Utm = {
  source?: string
  medium?: string
  campaign?: string
  content?: string
  term?: string
}

/** Valores aplicados quando a instância do CTA não sobrescreve. */
export const defaultUtm: Required<Pick<Utm, 'source' | 'medium'>> = {
  source: 'site',
  medium: 'cta',
}

export function withUtm(url: string, utm: Utm = {}): string {
  const merged = { ...defaultUtm, ...utm }
  const entries = Object.entries(merged).filter(([, v]) => Boolean(v))
  if (entries.length === 0) return url

  // URL relativa (rota interna) não recebe UTM — só links de saída.
  if (url.startsWith('/') || url.startsWith('#')) return url

  const parsed = new URL(url)
  for (const [key, value] of entries) parsed.searchParams.set(`utm_${key}`, String(value))
  return parsed.toString()
}

/**
 * Link do WhatsApp com mensagem pré-preenchida.
 * O código de campanha também vai DENTRO da mensagem: assim a origem do lead
 * aparece na própria conversa, mesmo que o clique não chegue ao analytics.
 */
export function whatsappUrl(message: string, utm: Utm = {}): string {
  const merged = { ...defaultUtm, ...utm }
  const campaignTag = [merged.campaign, merged.content].filter(Boolean).join('/')
  const text = campaignTag ? `${message}\n\n(ref: ${campaignTag})` : message

  const url = new URL(`https://wa.me/${site.contact.whatsappNumber}`)
  url.searchParams.set('text', text)
  return withUtm(url.toString(), merged)
}

/** Mensagem padrão — tom de quem especifica projeto, não de quem pede orçamento. */
export const defaultWhatsappMessage =
  'Olá, VETRA. Vim pelo site e gostaria de falar sobre um projeto em vidro.'
