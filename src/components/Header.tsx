import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { nav, site } from '@/content/site'
import { setScrollLocked } from '@/lib/smooth-scroll'

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // fecha o menu ao trocar de rota
  useEffect(() => setOpen(false), [pathname])

  // trava o scroll enquanto o menu mobile estiver aberto (inclusive o Lenis)
  useEffect(() => {
    setScrollLocked(open)
    return () => setScrollLocked(false)
  }, [open])

  // Na home o header flutua sobre a foto do topo. Ele só vira branco depois
  // que a pessoa rola — antes disso, fundo transparente e marca em branco.
  const [scrolled, setScrolled] = useState(false)
  const overHero = pathname === '/'

  useEffect(() => {
    if (!overHero) return
    // o Lenis rola a window, então o evento nativo continua servindo
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [overHero])

  const transparent = overHero && !scrolled && !open

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
    {/* A linha inferior é um elemento absoluto, não `border-b`: com borda a
        altura do header vira 81/97px e o hero da home, que sobe com -mt-20/-mt-24,
        deixa 1px de fresta branca no topo da página. */}
    <header
      // marca o estado sobre foto para o CSS trocar a cor do anel de foco:
      // navy sobre claro é invisível contra o céu escurecido da imagem
      data-over-photo={transparent ? '' : undefined}
      className={`sticky top-0 z-50 transition-colors duration-500 ease-glass ${
        transparent ? 'bg-transparent' : 'bg-white/90 backdrop-blur-md'
      }`}
    >
      {!transparent && (
        <div className="absolute inset-x-0 bottom-0 h-px bg-ink/8" aria-hidden="true" />
      )}
      <div className="container-vetra flex h-20 items-center justify-between gap-6 md:h-24">
        {/* Assinatura reduzida: símbolo + wordmark, sem "SOLUÇÕES EM VIDROS".
            Na 2ª assinatura horizontal completa a tagline sai a 5,5px de altura
            nesta escala — ilegível. Os dois arquivos são recortes por viewBox do
            MESMO SVG oficial (nenhum traço foi redesenhado), então proporção e
            espaçamento entre símbolo e wordmark são os do manual.
            Decisão de marca registrada no README › Identidade. */}
        <Link
          to="/"
          className="flex shrink-0 items-center gap-[5px] md:gap-1.5"
          aria-label={`${site.legalName} — página inicial`}
        >
          <img
            src="/brand/vetra-simbolo-lockup.svg"
            alt=""
            width={104}
            height={95}
            className={`h-8 w-auto md:h-10 ${transparent ? 'brightness-0 invert' : ''}`}
          />
          <img
            src="/brand/vetra-wordmark.svg"
            alt=""
            width={257}
            height={36}
            className={`h-3 w-auto md:h-[15px] ${transparent ? 'brightness-0 invert' : ''}`}
          />
        </Link>

        <nav aria-label="Principal" className="hidden lg:block">
          <ul className="flex items-center gap-9">
            {nav.map((item) => (
              <li key={item.href}>
                <NavLink
                  to={item.href}
                  end={item.href === '/'}
                  className={({ isActive }) =>
                    `font-display text-[0.8125rem] font-medium uppercase tracking-label transition-colors duration-300 ${
                      transparent
                        ? isActive
                          ? 'text-mist'
                          : 'text-white hover:text-mist'
                        : isActive
                          ? 'text-navy'
                          : 'text-ink/70 hover:text-ink'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          {/* O wrapper é que esconde no celular: `hidden` na própria CTA perde
              para o `inline-flex` que vem da classe base dela, e o botão
              acabava empurrando o hambúrguer para fora da tela. */}
          {/* Sobre a foto o botão vira filete branco: o ciano fica reservado
              para um único ponto do primeiro viewport (o CTA do hero). Depois
              da rolagem, com o header já sólido, ele volta a ser preenchido. */}
          <div className="hidden sm:block">
            <CTA
              variant={transparent ? 'glass' : 'whatsapp'}
              utm={{ campaign: 'header', content: 'whatsapp' }}
              className="px-6 py-3.5"
            >
              <WhatsAppGlyph />
              WhatsApp
            </CTA>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            className={`flex h-11 w-11 items-center justify-center lg:hidden ${
              transparent ? 'text-white' : 'text-ink'
            }`}
          >
            <span className="sr-only">{open ? 'Fechar menu' : 'Abrir menu'}</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" strokeLinecap="square" />
              ) : (
                <path d="M3 7h18M3 12h18M3 17h18" strokeLinecap="square" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </header>

      {/* --- menu mobile ---
          FORA do <header> de propósito. O header usa `backdrop-blur`, e
          backdrop-filter cria bloco contentor para descendentes `fixed`: com o
          menu dentro dele, `top-20 bottom-0` era resolvido contra a caixa de
          80px do header em vez do viewport, e o painel abria com altura ZERO —
          menu invisível e scroll travado. Mantenha este bloco fora do header. */}
      <div
        id="menu-mobile"
        hidden={!open}
        className="fixed inset-x-0 top-20 bottom-0 z-50 overflow-y-auto bg-white lg:hidden md:top-24"
      >
        <div className="container-vetra flex min-h-full flex-col justify-between py-12">
          <nav aria-label="Principal (mobile)">
            <ul className="space-y-1">
              {nav.map((item, i) => (
                <li key={item.href} className="border-b border-ink/8">
                  <NavLink
                    to={item.href}
                    end={item.href === '/'}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 py-5 font-display text-2xl font-light ${
                        isActive ? 'text-navy' : 'text-ink'
                      }`
                    }
                  >
                    <span className="font-display text-eyebrow tracking-label text-ink/60">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-12">
            <CTA utm={{ campaign: 'menu-mobile', content: 'whatsapp' }} className="w-full">
              <WhatsAppGlyph />
              Falar no WhatsApp
            </CTA>
            <p className="mt-6 font-display text-eyebrow uppercase tracking-wordmark text-ink/60">
              {site.address.locality} / {site.address.region}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
