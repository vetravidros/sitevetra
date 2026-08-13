import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppFAB } from '@/components/CTA'
import { JsonLd, localBusinessSchema } from '@/components/Seo'
import { scrollToTop, useSmoothScroll } from '@/lib/smooth-scroll'

export function Layout() {
  const { pathname, hash } = useLocation()

  useSmoothScroll()

  // Quem manda no scroll aqui somos nós. Sem isso o navegador restaura a
  // posição anterior depois do nosso reset e a página abre no meio.
  useEffect(() => {
    if ('scrollRestoration' in history) history.scrollRestoration = 'manual'
  }, [])

  // O router não restaura scroll sozinho; sem isso, navegar entre projetos
  // mantém a página no meio da lista anterior.
  useEffect(() => {
    if (hash) return
    scrollToTop()
  }, [pathname, hash])

  const campaign = pathname === '/' ? 'home' : pathname.slice(1).replace(/\//g, '-')

  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60]
                   focus:bg-navy focus:px-5 focus:py-3 focus:font-display focus:text-sm
                   focus:uppercase focus:tracking-label focus:text-white"
      >
        Pular para o conteúdo
      </a>

      <Header />

      {/* pb-28 reserva o espaço do botão flutuante de WhatsApp no mobile */}
      {/* tabIndex -1: sem isso o "pular para o conteúdo" move a rolagem mas
          deixa o foco no <body>, e o teclado recomeça do topo */}
      <main id="conteudo" tabIndex={-1} className="pb-28 outline-none md:pb-0">
        <Outlet />
      </main>

      <Footer />
      <WhatsAppFAB campaign={campaign} revealAfterHero={pathname === '/'} />
      <JsonLd data={localBusinessSchema} />
      <Analytics />
    </>
  )
}
