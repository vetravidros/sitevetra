import type { ReactNode } from 'react'

/** Rótulo pequeno em caixa alta com tracking do wordmark. */
export function Eyebrow({
  children,
  tone = 'ink',
  className = '',
}: {
  children: ReactNode
  tone?: 'ink' | 'accent' | 'white' | 'photo'
  className?: string
}) {
  // sobre branco o acento é NAVY: ciano em texto dá 2.64:1 e reprova AA.
  // 'photo' = branco puro: sobre foto nenhuma transparência sobrevive ao AA
  const color = {
    ink: 'text-ink/60',
    accent: 'text-navy',
    white: 'text-white/60',
    photo: 'text-white',
  }[tone]
  return (
    <p className={`font-display text-eyebrow font-medium uppercase ${color} ${className}`}>
      {children}
    </p>
  )
}

/** Régua diagonal fina — o motivo gráfico do símbolo, em dose homeopática. */
export function Rule({ className = '' }: { className?: string }) {
  return <div className={`rule-cyan h-px w-24 ${className}`} aria-hidden="true" />
}

export function Section({
  children,
  className = '',
  tone = 'white',
  id,
}: {
  children: ReactNode
  className?: string
  tone?: 'white' | 'mist' | 'navy'
  id?: string
}) {
  const tones = {
    white: 'bg-white text-ink',
    mist: 'bg-mist/40 text-ink',
    navy: 'bg-navy text-white',
  }
  return (
    <section id={id} className={`${tones[tone]} py-section ${className}`}>
      <div className="container-vetra">{children}</div>
    </section>
  )
}

/** Cabeçalho de seção: eyebrow + título + lede opcional. */
export function SectionHead({
  eyebrow,
  title,
  lede,
  tone = 'ink',
  className = '',
}: {
  eyebrow: string
  title: ReactNode
  lede?: string
  tone?: 'ink' | 'white'
  className?: string
}) {
  return (
    <div className={`max-w-3xl ${className}`}>
      <Eyebrow tone={tone === 'white' ? 'white' : 'ink'}>{eyebrow}</Eyebrow>
      <Rule className="mt-5" />
      <h2
        className={`mt-6 font-display text-title font-light text-balance ${
          tone === 'white' ? 'text-white' : 'text-ink'
        }`}
      >
        {title}
      </h2>
      {lede && (
        <p
          className={`mt-6 max-w-2xl text-lede ${
            tone === 'white' ? 'text-white/70' : 'text-ink/60'
          }`}
        >
          {lede}
        </p>
      )}
    </div>
  )
}
