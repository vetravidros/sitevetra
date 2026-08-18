import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Picture } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section, SectionHead } from '@/components/ui'
import { site } from '@/content/site'

const MSG_ORCAMENTO =
  'Olá, VETRA. Quero orçamento de cortina de vidro para minha varanda/sacada.'

const motivos = [
  {
    n: '01',
    tag: 'Conforto',
    title: 'Varanda utilizável o ano todo',
    text: 'Chuva de lado, vento forte e poeira da rua deixam de decidir se dá para usar a varanda hoje.',
  },
  {
    n: '02',
    tag: 'Espaço',
    title: 'Metro quadrado que você já paga',
    text: 'A varanda fechada vira sala, home office ou espaço de estar — sem obra, sem alvenaria.',
  },
  {
    n: '03',
    tag: 'Silêncio',
    title: 'Menos barulho da rua',
    text: 'O vidro também barra ruído: menos trânsito, menos vizinho, mais sossego.',
  },
]

const sistema = [
  'Sem roldanas aparentes — o painel desliza em fitas de polímero de alta resistência, apoiado no trilho inferior.',
  'Travamento interno entre os painéis, para alinhamento perfeito do conjunto.',
  'Vedação com perfil de silicone entre os vidros — sem ressecar, sem abrir vão com o tempo.',
  'Manutenção praticamente inexistente: sem rolamento para desgastar.',
]

/** Fotos das obras que o André mandou para a página. */
const galeria = [
  {
    name: 'cortina-vidro-ana-amelia' as const,
    alt: 'Varanda curva fechada com cortina de vidro, vista panorâmica para os prédios de Fortaleza',
  },
  {
    name: 'cortina-vidro-unique-meireles' as const,
    alt: 'Varanda fechada com cortina de vidro e tela de proteção, vista para os prédios do bairro Meireles',
  },
  {
    name: 'cortina-vidro-portal-de-malaga' as const,
    alt: 'Varanda fechada com cortina de vidro em corredor longo, vista para prédios e área verde',
  },
  {
    name: 'cortina-vidro-manhattan-beach' as const,
    alt: 'Varanda fechada com cortina de vidro sob cobertura de palha, vista para piscina de condomínio',
  },
  {
    name: 'beira-mar-01' as const,
    alt: 'Sacada fechada com cortina de vidro de piso a teto, vista para a orla de Fortaleza',
  },
  {
    name: 'beira-mar-02' as const,
    alt: 'Cortina de vidro recolhida lateralmente em varanda com vista para o mar',
  },
]

export default function CortinaDeVidro() {
  return (
    <>
      <Seo
        path="/cortina-de-vidro"
        title="Cortina de Vidro para Varanda em Fortaleza"
        description="Cortina de vidro sob medida para fechar sacada e varanda em Fortaleza. Sistema sem roldanas aparentes, vedação técnica e instalação executada pela VETRA. Peça seu orçamento."
      />

      {/* ------------------------------------------------------------- hero
          Fundo fotográfico, mesmo tratamento do hero do ArqVetra: véus em
          `ink`, nunca em navy (navy tinge a foto de azul). */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <Picture
          name="cortina-vidro-hero"
          alt="Varanda fechada com cortina de vidro, mesa posta e vista para os prédios de Fortaleza"
          fill
          priority
          sizes="100vw"
        />

        <div className="pointer-events-none absolute inset-0 bg-ink/50" aria-hidden="true" />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/60 to-transparent"
          aria-hidden="true"
        />
        <div
          className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
        />

        <div className="container-vetra relative">
          <Eyebrow tone="photo">Cortina de Vidro — VETRA Soluções em Vidros</Eyebrow>
          <Rule className="mt-5" />
          <h1 className="mt-6 max-w-4xl font-display text-hero font-light text-balance text-white">
            Feche a sacada. Não feche a vista.
            <span className="block font-normal">Cortina de vidro sob medida.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lede text-white">
            Cortina de vidro premium em Fortaleza.
            <span className="block">
              Medição, fabricação e instalação com materiais e execução do
              serviço de alta qualidade.
            </span>
          </p>
          <div className="mt-10">
            <CTA
              utm={{ campaign: 'cortina-de-vidro', content: 'hero-whatsapp' }}
              message={MSG_ORCAMENTO}
            >
              <WhatsAppGlyph />
              Pedir orçamento
            </CTA>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------- por que fechar */}
      <Section>
        <SectionHead
          eyebrow="Por que fechar a varanda"
          title="Chuva, poeira e barulho ficam do lado de fora."
        />
        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {motivos.map((m) => (
            <div key={m.n}>
              <Rule />
              <p className="mt-6 font-display text-eyebrow uppercase tracking-label text-navy">
                {m.n} · {m.tag}
              </p>
              <h3 className="mt-4 font-display text-heading font-medium text-balance">
                {m.title}
              </h3>
              <p className="mt-4 text-ink/60">{m.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------------ o sistema */}
      <section className="relative overflow-hidden bg-navy py-section text-white">
        <div
          className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
        />
        <div className="container-vetra relative">
          <SectionHead
            tone="white"
            eyebrow="O sistema"
            title="Vidro que desliza, não que emperra."
          />
          <ul className="mt-16 grid gap-x-10 gap-y-6 md:grid-cols-2">
            {sistema.map((texto) => (
              <li key={texto} className="border-t border-white/15 pt-5 text-white/70">
                {texto}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------------------------------------------------------- galeria */}
      <Section tone="mist">
        <SectionHead
          eyebrow="Instalações executadas"
          title="Cada vão, medido e executado pela VETRA."
        />
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galeria.map((foto) => (
            <Picture
              key={foto.name}
              name={foto.name}
              alt={foto.alt}
              ratio="3/4"
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          ))}
        </div>
      </Section>

      {/* --------------------------------------------------------- fechamento */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Peça o seu</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-title font-light text-balance">
              Do orçamento à instalação, o mesmo time acompanha o projeto.
            </h2>
            <p className="mt-6 max-w-xl text-lede text-ink/60">
              Atendimento em {site.address.locality} e Região Metropolitana —{' '}
              {site.contact.phoneDisplay}.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTA
              utm={{ campaign: 'cortina-de-vidro', content: 'fechamento-whatsapp' }}
              message={MSG_ORCAMENTO}
            >
              <WhatsAppGlyph />
              Falar no WhatsApp
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
