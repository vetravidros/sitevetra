import { track } from '@vercel/analytics'
import { Link } from 'react-router-dom'
import { useEffect, useState, type ReactNode } from 'react'
import { whatsappUrl, withUtm, defaultWhatsappMessage, type Utm } from '@/lib/utm'
import { site } from '@/content/site'

/**
 * Hierarquia de CTA do site (aplicada em todas as páginas):
 *   1. whatsapp   — primário
 *   2. portfolio  — secundário
 *   3. ghost      — terciário (Google, telefone, links de apoio)
 */
type Variant = 'whatsapp' | 'portfolio' | 'ghost' | 'glass'

const base =
  'inline-flex items-center justify-center gap-2.5 font-display text-[0.8125rem] font-semibold ' +
  'uppercase tracking-label transition-all duration-300 ease-glass ' +
  'px-7 py-4 disabled:opacity-50'

const variants: Record<Variant, string> = {
  // texto preto sobre ciano: 7.95:1. Branco sobre ciano dá 2.64:1 e reprova AA.
  whatsapp: 'bg-cyan text-ink hover:bg-navy hover:text-white',
  portfolio: 'border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-white',
  // Para uso SOBRE fotografia: filete branco, zero croma. Existe para que o
  // ciano não precise se repetir em cima da imagem — no primeiro viewport só
  // um elemento tem licença para brilhar.
  glass:
    'border border-white/60 text-white backdrop-blur-[2px] hover:border-white hover:bg-white hover:text-navy',
  ghost: 'text-navy underline-offset-8 hover:text-ink hover:underline px-0 py-1',
}

type Props = {
  variant?: Variant
  /** Rota interna. Se ausente e variant='whatsapp', vira link do WhatsApp. */
  to?: string
  /** URL externa explícita (Google, Instagram…). */
  href?: string
  /** Sobrescreve a mensagem pré-preenchida do WhatsApp. */
  message?: string
  utm: Utm
  className?: string
  children: ReactNode
}

export function CTA({
  variant = 'whatsapp',
  to,
  href,
  message,
  utm,
  className = '',
  children,
}: Props) {
  const classes = `${base} ${variants[variant]} ${className}`

  const onClick = () => {
    track('cta_click', {
      variant,
      campaign: utm.campaign ?? '',
      content: utm.content ?? '',
    })
  }

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {children}
      </Link>
    )
  }

  const target =
    href !== undefined
      ? withUtm(href, utm)
      : whatsappUrl(message ?? defaultWhatsappMessage, utm)

  return (
    <a
      href={target}
      className={classes}
      onClick={onClick}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  )
}

/**
 * Botão flutuante de WhatsApp — o CTA primário sempre visível.
 * Em mobile ele fica acima da safe-area e o <body> reserva espaço no fim das
 * páginas (pb-28), então nunca cobre conteúdo.
 */
export function WhatsAppFAB({
  campaign,
  revealAfterHero = false,
}: {
  campaign: string
  /**
   * Na home o balão só entra depois do hero. Sobre a foto ele seria o terceiro
   * objeto em ciano saturado do primeiro viewport, e a interface passaria a
   * conduzir a leitura no lugar da imagem.
   */
  revealAfterHero?: boolean
}) {
  const [visible, setVisible] = useState(!revealAfterHero)

  useEffect(() => {
    if (!revealAfterHero) {
      setVisible(true)
      return
    }
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [revealAfterHero])

  const href = whatsappUrl(defaultWhatsappMessage, {
    campaign,
    content: 'fab',
    medium: 'floating',
  })

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track('cta_click', { variant: 'whatsapp', campaign, content: 'fab' })}
      aria-label={`Falar com a ${site.name} no WhatsApp`}
      aria-hidden={!visible}
      tabIndex={visible ? undefined : -1}
      className={`fixed right-4 bottom-[calc(1rem+env(safe-area-inset-bottom))] z-40 flex h-14 w-14
                 items-center justify-center rounded-full bg-cyan text-ink shadow-lg
                 shadow-navy/25 transition-all duration-500 ease-glass hover:scale-105
                 hover:bg-navy hover:text-white md:right-8 md:bottom-8 md:h-16 md:w-16 ${
                   visible
                     ? 'pointer-events-auto scale-100 opacity-100'
                     : 'pointer-events-none scale-90 opacity-0'
                 }`}
    >
      <WhatsAppGlyph className="h-7 w-7 md:h-8 md:w-8" />
    </a>
  )
}

export function WhatsAppGlyph({ className = 'h-5 w-5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.46 1.32 4.96L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.17 8.17 0 0 1-1.26-4.38c0-4.54 3.7-8.23 8.25-8.23 2.2 0 4.27.86 5.83 2.41a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.79.97-.14.16-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.16 0-.43.06-.65.31-.22.25-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.15 3.66.58.25 1.03.4 1.39.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  )
}
