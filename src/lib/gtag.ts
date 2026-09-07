declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

/**
 * Rótulo da ação de conversão "Contato" no Google Ads (conta AW-18403738170)
 * — criada pelo André em 22/08/2026 para medir clique no botão de WhatsApp.
 * A tag base (gtag.js) já está em index.html; isto só reporta o evento.
 */
const CONVERSAO_CONTATO = 'AW-18403738170/2x_YCN74t_AcELqEy8dE'

/** Chamar no clique do botão de WhatsApp — é a conversão que a campanha mede. */
export function reportarConversaoContato() {
  window.gtag?.('event', 'conversion', { send_to: CONVERSAO_CONTATO })
}
