import { useEffect, useState } from 'react'
import Lenis from 'lenis'

/**
 * Scroll suave (Lenis).
 *
 * Roda só no cliente: o SSG renderiza o HTML sem tocar nisso, e a rolagem
 * nativa continua funcionando se o JS não carregar.
 *
 * Regras que o resto do site depende:
 *  - `prefers-reduced-motion: reduce` desliga o Lenis por completo (e volta a
 *    ligar se a pessoa mudar a preferência sem recarregar a página).
 *  - `getLenis()` expõe a instância para quem precisa comandar a rolagem:
 *    troca de rota (Layout) e trava do menu mobile (Header).
 */
let instance: Lenis | null = null

export function getLenis() {
  return instance
}

const REDUCED_MOTION = '(prefers-reduced-motion: reduce)'

export function useSmoothScroll() {
  const [reduced, setReduced] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia(REDUCED_MOTION)
    setReduced(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  useEffect(() => {
    if (reduced) return

    const lenis = new Lenis({
      // curva de desaceleração longa e sem "borracha" no fim — a sensação é de
      // peso de vidro, não de elástico
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
      smoothWheel: true,
      // no toque a rolagem nativa é melhor (e não briga com o gesto de voltar
      // do iOS); o Lenis só suaviza roda e trackpad
      syncTouch: false,
      wheelMultiplier: 0.9,
      overscroll: false,
      // deixa o Lenis cuidar dos links âncora (o "pular para o conteúdo")
      anchors: { offset: -96 },
    })

    instance = lenis

    let frame = 0
    const loop = (time: number) => {
      lenis.raf(time)
      frame = requestAnimationFrame(loop)
    }
    frame = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(frame)
      lenis.destroy()
      instance = null
    }
  }, [reduced])
}

/** Vai ao topo na troca de rota, sem animação, com ou sem Lenis ativo. */
export function scrollToTop() {
  const lenis = getLenis()
  if (lenis) lenis.scrollTo(0, { immediate: true })
  else window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior })
}

/** Trava/destrava a rolagem (menu mobile aberto). */
export function setScrollLocked(locked: boolean) {
  const lenis = getLenis()
  if (lenis) {
    if (locked) lenis.stop()
    else lenis.start()
  }
  document.body.style.overflow = locked ? 'hidden' : ''
}
