import { useEffect, useState } from 'react'
import { Picture } from '@/components/Picture'
import type { ImageName } from '@/content/images.generated'

type Slide = {
  name: ImageName
  /** Art direction: corte alternativo servido abaixo de 768px. */
  mobile?: ImageName
  alt: string
}

/**
 * Pilha de fotos em fade automático, preenchendo o elemento posicionado mais
 * próximo (mesmo contrato do `Picture fill`). Com 1 slide só, não liga o
 * timer — vira um hero estático comum até uma 2ª foto entrar no array.
 */
export function HeroCarousel({
  slides,
  sizes,
  intervalMs = 5000,
  imgClassName = '',
}: {
  slides: Slide[]
  sizes: string
  intervalMs?: number
  /** Extra classes aplicadas em toda foto do carrossel — ex.: filtro de
      contraste/saturação para fotos de celular estouradas/embaçadas de sol. */
  imgClassName?: string
}) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), intervalMs)
    return () => clearInterval(id)
  }, [slides.length, intervalMs])

  return (
    <>
      {slides.map((slide, i) => (
        <Picture
          key={slide.name}
          name={slide.name}
          mobile={slide.mobile}
          // Todo <img> em <main> precisa de alt preenchido (critério de aceite
          // do projeto — ver scripts/verify-prerender.mjs). Como as fotos do
          // carrossel são cenas diferentes de verdade, cada uma leva o alt
          // que descreve especificamente aquela foto.
          alt={slide.alt}
          fill
          priority={i === 0}
          sizes={sizes}
          imgClassName={`transition-opacity duration-1000 ease-glass ${imgClassName} ${
            i === index ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
    </>
  )
}
