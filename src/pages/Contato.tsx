import { useState } from 'react'
import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section } from '@/components/ui'
import { site } from '@/content/site'
import { whatsappUrl } from '@/lib/utm'

/**
 * Endpoint do serviço de formulários (Formspree, Basin, webhook próprio…).
 * Sem a variável definida, o formulário não some: ele monta a mensagem e
 * envia pelo WhatsApp. O MVP nunca fica sem canal de retorno.
 */
const ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined

type Status = 'idle' | 'sending' | 'ok' | 'error'
type Errors = Partial<Record<'nome' | 'contato' | 'mensagem', string>>

const tipos = [
  'Fachada / envidraçamento',
  'Box / box elegance',
  'Espelhos',
  'Divisórias e portas',
  'Outro',
]

export default function Contato() {
  const [status, setStatus] = useState<Status>('idle')
  const [errors, setErrors] = useState<Errors>({})

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    const data = new FormData(form)

    const nome = String(data.get('nome') ?? '').trim()
    const contato = String(data.get('contato') ?? '').trim()
    const mensagem = String(data.get('mensagem') ?? '').trim()
    const tipo = String(data.get('tipo') ?? '')
    const perfil = String(data.get('perfil') ?? '')

    const next: Errors = {}
    if (nome.length < 2) next.nome = 'Informe seu nome.'
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]{2,}$/.test(contato) && contato.replace(/\D/g, '').length < 10) {
      next.contato = 'Informe um e-mail válido ou um telefone com DDD.'
    }
    if (mensagem.length < 10) next.mensagem = 'Conte um pouco mais sobre o projeto.'

    setErrors(next)
    if (Object.keys(next).length > 0) {
      form.querySelector<HTMLElement>(`[name="${Object.keys(next)[0]}"]`)?.focus()
      return
    }

    // honeypot anti-spam: campo invisível que só um robô preenche
    if (String(data.get('empresa') ?? '') !== '') return

    if (!ENDPOINT) {
      const texto = [
        `Nome: ${nome}`,
        `Contato: ${contato}`,
        perfil && `Perfil: ${perfil}`,
        tipo && `Tipo: ${tipo}`,
        '',
        mensagem,
      ]
        .filter(Boolean)
        .join('\n')

      window.open(
        whatsappUrl(texto, { campaign: 'contato', content: 'formulario-fallback' }),
        '_blank',
        'noopener',
      )
      setStatus('ok')
      form.reset()
      return
    }

    setStatus('sending')
    try {
      const response = await fetch(ENDPOINT, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      })
      if (!response.ok) throw new Error(String(response.status))
      setStatus('ok')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  return (
    <>
      <Seo
        path="/contato"
        title="Contato"
        description={`Fale com a VETRA em Fortaleza: WhatsApp ${site.contact.phoneDisplay}, e-mail ${site.contact.email}. Atendimento técnico agendado em Fortaleza e Região Metropolitana.`}
      />

      <Section className="pt-16 pb-12 md:pt-24">
        <Eyebrow>Contato</Eyebrow>
        <h1 className="mt-7 max-w-4xl font-display text-hero font-light text-balance">
          Comece pelo
          <span className="block text-ink/45">vão.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lede text-ink/60">
          Uma foto do local e a medida aproximada já bastam para a primeira
          resposta técnica.
        </p>
      </Section>

      <Section className="pt-0 pb-section">
        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr] lg:gap-24">
          {/* ------------------------------------------------- formulário */}
          <div>
            <Eyebrow>Enviar briefing</Eyebrow>
            <Rule className="mt-4" />

            {status === 'ok' ? (
              <div
                role="status"
                className="mt-8 border border-navy/25 bg-mist/40 p-8"
              >
                <p className="font-display text-heading font-medium">Recebido.</p>
                <p className="mt-3 text-ink/60">
                  Respondemos em até 1 dia útil. Se for urgente, chama no
                  WhatsApp — costuma ser mais rápido.
                </p>
                <CTA utm={{ campaign: 'contato', content: 'pos-envio' }} className="mt-6">
                  <WhatsAppGlyph />
                  Falar no WhatsApp
                </CTA>
              </div>
            ) : (
              <form onSubmit={onSubmit} noValidate className="mt-8 space-y-6">
                <Field label="Nome" name="nome" error={errors.nome} autoComplete="name" />
                <Field
                  label="E-mail ou WhatsApp"
                  name="contato"
                  error={errors.contato}
                  autoComplete="email"
                />

                <div className="grid gap-6 sm:grid-cols-2">
                  <Select label="Você é" name="perfil" options={['Cliente final', 'Arquiteto(a) / Designer', 'Construtora', 'Outro']} />
                  <Select label="Tipo de projeto" name="tipo" options={tipos} />
                </div>

                <Field
                  label="Sobre o projeto"
                  name="mensagem"
                  error={errors.mensagem}
                  textarea
                  hint="Local, medida aproximada do vão e prazo desejado."
                />

                {/* honeypot — escondido de gente, visível para robô */}
                <div aria-hidden="true" className="absolute left-[-9999px]">
                  <label>
                    Empresa
                    <input type="text" name="empresa" tabIndex={-1} autoComplete="off" />
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="inline-flex w-full items-center justify-center gap-2.5 bg-navy px-7 py-4
                             font-display text-[0.8125rem] font-semibold uppercase tracking-label
                             text-white transition-colors duration-300 ease-glass hover:bg-cyan
                             disabled:opacity-50 sm:w-auto"
                >
                  {status === 'sending' ? 'Enviando…' : 'Enviar briefing'}
                </button>

                {status === 'error' && (
                  <p role="alert" className="text-sm text-navy">
                    Não conseguimos enviar agora. Use o WhatsApp ao lado — o
                    retorno é imediato.
                  </p>
                )}

                {!ENDPOINT && (
                  <p className="text-xs text-ink/60">
                    O envio abre uma conversa no WhatsApp com os dados já
                    preenchidos.
                  </p>
                )}
              </form>
            )}
          </div>

          {/* --------------------------------------------------- canais */}
          <aside className="space-y-12">
            <div>
              <Eyebrow>Direto</Eyebrow>
              <Rule className="mt-4" />
              <div className="mt-6 space-y-4">
                <CTA utm={{ campaign: 'contato', content: 'lateral-whatsapp' }} className="w-full">
                  <WhatsAppGlyph />
                  {site.contact.phoneDisplay}
                </CTA>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="block text-ink/70 underline-offset-8 transition-colors hover:text-navy hover:underline"
                >
                  {site.contact.email}
                </a>
              </div>
            </div>

            <div>
              <Eyebrow>Onde atendemos</Eyebrow>
              <Rule className="mt-4" />
              <p className="mt-6 text-ink/70">{site.address.note}.</p>
              <p className="mt-3 text-sm text-ink/60">{site.areaServed.join(' · ')}</p>
              <a
                href={site.social.maps}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block font-display text-eyebrow uppercase tracking-label text-navy underline-offset-8 transition-colors hover:text-navy hover:underline"
              >
                Abrir no Google Maps ↗
              </a>
            </div>

            <div>
              <Eyebrow>Horário</Eyebrow>
              <Rule className="mt-4" />
              <dl className="mt-6 divide-y divide-ink/10 border-t border-ink/10 text-sm">
                {site.hours.map((h) => (
                  <div key={h.label} className="flex justify-between gap-6 py-3">
                    <dt className="text-ink/60">{h.label}</dt>
                    <dd className="text-ink/80">{h.value}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div>
              <Eyebrow>Também estamos em</Eyebrow>
              <Rule className="mt-4" />
              <ul className="mt-6 space-y-2 text-sm">
                <li>
                  <a
                    href={site.social.googleBusiness}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 underline-offset-8 transition-colors hover:text-navy hover:underline"
                  >
                    Perfil da Empresa no Google ↗
                  </a>
                </li>
                <li>
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink/70 underline-offset-8 transition-colors hover:text-navy hover:underline"
                  >
                    Instagram ↗
                  </a>
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </Section>
    </>
  )
}

/* -------------------------------------------------------------- campos */

function Field({
  label,
  name,
  error,
  textarea = false,
  hint,
  autoComplete,
}: {
  label: string
  name: string
  error?: string
  textarea?: boolean
  hint?: string
  autoComplete?: string
}) {
  const id = `campo-${name}`
  const describedBy = [hint && `${id}-hint`, error && `${id}-erro`].filter(Boolean).join(' ')
  const cls = `mt-2 w-full border bg-white px-4 py-3.5 text-ink transition-colors duration-300
               placeholder:text-ink/60 focus:border-navy focus:outline-none ${
                 error ? 'border-navy' : 'border-ink/20'
               }`

  return (
    <div>
      <label
        htmlFor={id}
        className="font-display text-eyebrow uppercase tracking-label text-ink/60"
      >
        {label}
      </label>
      {textarea ? (
        <textarea
          id={id}
          name={name}
          rows={5}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy || undefined}
          className={cls}
        />
      ) : (
        <input
          id={id}
          name={name}
          type="text"
          autoComplete={autoComplete}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy || undefined}
          className={cls}
        />
      )}
      {hint && (
        <p id={`${id}-hint`} className="mt-2 text-xs text-ink/60">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-erro`} role="alert" className="mt-2 text-sm text-navy">
          {error}
        </p>
      )}
    </div>
  )
}

function Select({
  label,
  name,
  options,
}: {
  label: string
  name: string
  options: string[]
}) {
  const id = `campo-${name}`
  return (
    <div>
      <label
        htmlFor={id}
        className="font-display text-eyebrow uppercase tracking-label text-ink/60"
      >
        {label}
      </label>
      <select
        id={id}
        name={name}
        defaultValue={options[0]}
        className="mt-2 w-full border border-ink/20 bg-white px-4 py-3.5 text-ink transition-colors duration-300 focus:border-navy focus:outline-none"
      >
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  )
}
