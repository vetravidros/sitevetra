import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Picture } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section, SectionHead } from '@/components/ui'
import { site } from '@/content/site'

const etapas = [
  {
    n: '01',
    title: 'Leitura do projeto',
    text: 'Você manda a planta, o corte ou a referência. Devolvemos a leitura do que o vidro exige do projeto: rebaixo de forro, ponto de fixação, cota de piso, folga de dilatação.',
  },
  {
    n: '02',
    title: 'Especificação técnica',
    text: 'Sistema, espessura, tipo de vidro e ferragem definidos por escrito, com o acabamento já compatibilizado com os metais que você especificou.',
  },
  {
    n: '03',
    title: 'Orçamento aberto',
    text: 'Preço separado por item — vidro, ferragem, instalação. Sem pacote fechado que impede o cliente de comparar ou de cortar escopo com critério.',
  },
  {
    n: '04',
    title: 'Medição e execução',
    text: 'Medição feita depois do revestimento assentado, agendada com a obra. Instalação acompanhada pela mesma pessoa que fez a especificação.',
  },
]

const condicoes = [
  {
    title: 'Canal direto, sem fila',
    // Prazo numérico removido: a VETRA não sustenta um SLA de 48h hoje.
    // Só volta se virar compromisso real (ver README › Antes de publicar).
    text: 'Contato com quem decide, não com atendimento. Quem responde é quem vai especificar o projeto.',
  },
  {
    title: 'Desenho antes do fechamento',
    text: 'Detalhamento do sistema em DWG ou PDF para você compatibilizar com o restante do projeto — antes de qualquer assinatura.',
  },
  {
    title: 'Sua assinatura preservada',
    text: 'O crédito do projeto é seu. Publicamos a obra com a autoria informada e com a sua autorização prévia.',
  },
  {
    title: 'Visita conjunta ao cliente',
    text: 'Quando ajuda a defender a especificação, vamos junto à reunião. O vidro costuma ser o item que o cliente tenta cortar primeiro.',
  },
]

export default function Arquitetos() {
  return (
    <>
      <Seo
        path="/arquitetos"
        title="Programa para arquitetos e designers"
        description="Parceria da VETRA com arquitetos e designers de interiores em Fortaleza: canal direto com quem especifica, detalhamento do sistema antes do fechamento e crédito de autoria preservado."
      />

      <Section className="pt-16 pb-12 md:pt-24">
        <Eyebrow>Programa de parceria</Eyebrow>
        <h1 className="mt-7 max-w-4xl font-display text-hero font-light text-balance">
          Para quem
          <span className="block text-ink/45">especifica.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lede text-ink/60">
          Vidro é o item do projeto que mais depende de decisão antecipada e o
          que mais sofre quando chega no fim da obra. Este programa existe para
          que o vidro possa ser especificado da forma mais recomendada e
          segura em conformidade com as normas da ABNT.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTA
            utm={{ campaign: 'arquitetos', content: 'hero-whatsapp' }}
            message="Olá, VETRA. Sou arquiteto(a)/designer e quero conhecer o programa de parceria."
          >
            <WhatsAppGlyph />
            Abrir canal direto
          </CTA>
          <CTA
            variant="portfolio"
            to="/projetos"
            utm={{ campaign: 'arquitetos', content: 'hero-projetos' }}
          >
            Ver projetos executados
          </CTA>
        </div>
      </Section>

      <div className="container-vetra">
        <Picture
          name="aldeota-02"
          alt="Sala de reunião fechada por divisórias de vidro com perfil preto, vista do corredor do escritório"
          ratio="16/9"
          priority
          sizes="(min-width: 1280px) 76rem, 100vw"
        />
      </div>

      {/* ------------------------------------------------------ condições */}
      <Section>
        <SectionHead
          eyebrow="O que você ganha"
          title="Condições do programa."
          lede="Sem cadastro, sem meta e sem catálogo. O que muda é a forma de trabalhar."
        />
        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2">
          {condicoes.map((c) => (
            <div key={c.title}>
              <Rule />
              <h3 className="mt-6 font-display text-heading font-medium text-balance">
                {c.title}
              </h3>
              <p className="mt-4 text-ink/60">{c.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------- processo de especificação */}
      <section className="relative overflow-hidden bg-navy py-section text-white">
        <div className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.05]" aria-hidden="true" />
        <div className="container-vetra relative">
          <SectionHead
            tone="white"
            eyebrow="Processo"
            title="Como a especificação acontece."
          />
          <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-2 lg:grid-cols-4">
            {etapas.map((e) => (
              <li key={e.n}>
                <span className="font-display text-eyebrow tracking-label text-cyan">{e.n}</span>
                <h3 className="mt-4 font-display text-heading font-medium text-white text-balance">
                  {e.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">{e.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* --------------------------------------------------------- contato */}
      <Section tone="mist">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Contato direto</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-title font-light text-balance">
              Manda o projeto. A gente devolve a especificação.
            </h2>
            <p className="mt-6 max-w-xl text-lede text-ink/60">
              Planta, corte, foto do vão ou só a dúvida técnica — qualquer um
              dos quatro serve para começar. Atendimento em{' '}
              {site.address.locality} e Região Metropolitana.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTA
              utm={{ campaign: 'arquitetos', content: 'fechamento-whatsapp' }}
              message="Olá, VETRA. Sou arquiteto(a)/designer e tenho um projeto para especificar."
            >
              <WhatsAppGlyph />
              Falar no WhatsApp
            </CTA>
            <CTA
              variant="portfolio"
              to="/contato"
              utm={{ campaign: 'arquitetos', content: 'fechamento-contato' }}
            >
              Enviar arquivos
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
