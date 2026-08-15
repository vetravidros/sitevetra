import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Picture } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section, SectionHead } from '@/components/ui'
import { site } from '@/content/site'

/** Mensagem única de entrada no programa — o "cadastro" acontece na conversa. */
const MSG_PARCERIA =
  'Quero ser parceiro do ArqVetra. Sou arquiteto(a)/designer e quero conhecer o programa.'

const beneficios = [
  {
    n: '01',
    tag: 'Acesso técnico',
    title: 'Fale com quem entende, em até 24h',
    text: 'Parceiro ArqVetra tem canal direto de atendimento com um especialista — não com atendente genérico. Dúvida de especificação, detalhe construtivo ou pedido de orçamento têm retorno garantido em até 24 horas.',
  },
  {
    n: '02',
    tag: 'Vantagem comercial',
    title: 'Condição exclusiva de valor e pagamento',
    text: 'Clientes indicados por parceiro ArqVetra recebem condição especial de valor e de forma de pagamento — vantagem exclusiva do canal de parceria, que você leva para a mesa junto com o seu projeto.',
  },
  {
    n: '03',
    tag: 'Prazo',
    title: 'Seu projeto entra na frente',
    text: 'Prioridade em toda a cadeia: medição, execução e instalação. Projeto de parceiro ArqVetra não disputa fila com a demanda geral — o cronograma da sua obra não fica refém do nosso.',
  },
]

/** Letra miúda da condição comercial. Fica colada aos benefícios de propósito:
    a vantagem e o limite dela são lidos no mesmo fôlego. */
const termos = [
  'Condição válida exclusivamente para clientes indicados por parceiro ArqVetra ativo.',
  'Aplicável apenas se o fechamento ocorrer dentro do prazo de validade da proposta.',
  'Não cumulativa com outras condições especiais eventualmente em vigor.',
  'Condições de pagamento sujeitas a análise por projeto.',
]

const entrada = [
  {
    n: '01',
    title: 'Cadastro',
    text: 'Você se identifica como arquiteto ou designer parceiro pelo WhatsApp: nome, escritório e CAU ou contato.',
  },
  {
    n: '02',
    title: 'Ativação',
    text: 'Confirmação em até 24h e liberação do canal direto com especialista.',
  },
  {
    n: '03',
    title: 'Indicação',
    text: 'Você especifica VETRA no projeto ou indica um cliente; a condição especial é aplicada no orçamento.',
  },
]

export default function Arquitetos() {
  return (
    <>
      <Seo
        path="/arquitetos"
        title="ArqVetra — programa de parceria para arquitetos e designers"
        description="Programa de parceria técnica da VETRA em Fortaleza: canal direto com especialista e retorno em até 24h, prioridade na agenda de medição, execução e instalação, e condição especial de valor e pagamento para os clientes indicados."
      />

      {/* ------------------------------------------------------------- hero
          Único hero escuro do site fora da home. `ink`, não `navy`: navy é a
          cor de faixa/rodapé e já aparece duas vezes nesta página — repetir
          achataria a hierarquia. A paleta não admite um cinza-carvão próprio
          (ver `@theme` em styles/index.css). */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <div
          className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
        />
        <div className="container-vetra relative">
          <Eyebrow tone="white">ArqVetra — Programa de parceria VETRA</Eyebrow>
          <Rule className="mt-5" />
          <h1 className="mt-6 max-w-4xl font-display text-hero font-light text-balance text-white">
            Especificar vidro deixa de ser risco.
            <span className="block text-white/50">Passa a ser vantagem.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lede text-white/70">
            Um programa de parceria técnica para arquitetos e designers que
            projetam com padrão — canal direto com especialista, prioridade em
            toda a agenda de produção e condições especiais para os seus
            clientes.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTA
              utm={{ campaign: 'arquitetos', content: 'hero-whatsapp' }}
              message={MSG_PARCERIA}
            >
              <WhatsAppGlyph />
              Quero ser parceiro ArqVetra
            </CTA>
            <CTA
              variant="glass"
              to="/projetos"
              utm={{ campaign: 'arquitetos', content: 'hero-projetos' }}
            >
              Ver projetos executados
            </CTA>
          </div>
        </div>
      </section>

      <div className="container-vetra -mt-px">
        <Picture
          name="aldeota-02"
          alt="Sala de reunião fechada por divisórias de vidro com perfil preto, vista do corredor do escritório"
          ratio="16/9"
          priority
          sizes="(min-width: 1280px) 76rem, 100vw"
        />
      </div>

      {/* --------------------------------------------------------- problema
          Framing, não venda: nomeia o risco que o arquiteto já conhece antes
          de oferecer qualquer coisa. */}
      <Section>
        <SectionHead
          eyebrow="Por que o ArqVetra existe"
          title="Especificar vidro é assumir um risco que não é seu."
        />
        <p className="mt-8 max-w-3xl text-lede text-ink/60">
          Especificar vidro em projeto exige confiar num fornecedor que não vai
          te deixar na mão na hora H — prazo estourado, medição errada,
          retrabalho que vira problema seu com o cliente. A maioria dos
          vidraceiros trata arquiteto como canal de venda. A VETRA trata como
          parceiro técnico com responsabilidade compartilhada pelo resultado.
        </p>
      </Section>

      {/* ------------------------------------------------------- benefícios */}
      <Section tone="mist">
        <SectionHead
          eyebrow="O que você ganha no ArqVetra"
          title="Três compromissos, sem letra miúda escondida."
        />
        <div className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
          {beneficios.map((b) => (
            <div key={b.n}>
              <Rule />
              <p className="mt-6 font-display text-eyebrow uppercase tracking-label text-navy">
                {b.n} · {b.tag}
              </p>
              <h3 className="mt-4 font-display text-heading font-medium text-balance">
                {b.title}
              </h3>
              <p className="mt-4 text-ink/60">{b.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-ink/10 pt-8">
          <p className="font-display text-eyebrow uppercase tracking-label text-ink/50">
            Termos da condição comercial
          </p>
          <ul className="mt-5 grid gap-2.5 text-sm leading-relaxed text-ink/50 md:grid-cols-2 md:gap-x-10">
            {termos.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        </div>
      </Section>

      {/* ----------------------------------------------------- como entrar */}
      <section className="relative overflow-hidden bg-navy py-section text-white">
        <div
          className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
        />
        <div className="container-vetra relative">
          <SectionHead
            tone="white"
            eyebrow="Como entrar"
            title="Três passos, tudo pelo WhatsApp."
          />
          <ol className="mt-16 grid gap-x-10 gap-y-12 md:grid-cols-3">
            {entrada.map((e) => (
              <li key={e.n}>
                <span className="font-display text-eyebrow tracking-label text-cyan">
                  {e.n}
                </span>
                <h3 className="mt-4 font-display text-heading font-medium text-white text-balance">
                  {e.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-white/60">
                  {e.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* ----------------------------------------------------- prova técnica */}
      <Section>
        <SectionHead
          eyebrow="Especificação técnica, não venda de vidro"
          title="A ficha técnica é sua para usar no memorial."
          lede="Normas, folgas, materiais e parâmetros de medição documentados — para entrar direto no memorial descritivo, com a sua assinatura no projeto."
        />
        <div className="mt-10">
          <CTA
            variant="ghost"
            utm={{ campaign: 'arquitetos', content: 'ficha-tecnica' }}
            message="Olá, VETRA. Sou parceiro(a) ArqVetra e quero receber a ficha técnica de especificação."
          >
            Pedir a ficha técnica de especificação
          </CTA>
        </div>
      </Section>

      {/* --------------------------------------------------------- CTA final */}
      <Section tone="mist">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Próximo passo</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-title font-light text-balance">
              Transparência é posicionamento.
            </h2>
            <p className="mt-6 max-w-xl text-lede text-ink/60">
              Entre no ArqVetra. Sem burocracia, sem contrato de exclusividade,
              somente um compromisso técnico. Atendimento em{' '}
              {site.address.locality} e Região Metropolitana —{' '}
              {site.contact.phoneDisplay}.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTA
              utm={{ campaign: 'arquitetos', content: 'fechamento-whatsapp' }}
              message={MSG_PARCERIA}
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
