import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Picture } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section, SectionHead } from '@/components/ui'
import { site } from '@/content/site'

const MSG_ARQUITETO =
  'Olá, VETRA. Sou arquiteto(a)/designer e quero falar sobre um projeto.'

const beneficios = [
  {
    n: '01',
    tag: 'Acesso técnico',
    title: 'Fale direto com quem especifica',
    text: 'Canal direto com um especialista técnico, não com atendente genérico. Dúvida de especificação, detalhe construtivo ou pedido de orçamento é tratada por quem entende do assunto.',
  },
  {
    n: '02',
    tag: 'Cuidado com o projeto',
    title: 'Especificação pensada para o seu projeto',
    text: 'Sistema, espessura, ferragem e folgas definidos para a sua obra, não copiados de um catálogo genérico. Cada projeto recebe atenção própria.',
  },
  {
    n: '03',
    tag: 'Agenda',
    title: 'Sua obra não fica esperando',
    text: 'Alinhamos medição, execução e instalação com o cronograma da sua obra, para que o prazo do seu cliente não vire problema seu.',
  },
]

export default function Arquitetos() {
  return (
    <>
      <Seo
        path="/arquitetos"
        title="Atendimento para arquitetos e designers · VETRA"
        description="Atendimento técnico dedicado a arquitetos e designers em Fortaleza: canal direto com especialista, cuidado na especificação e acompanhamento do projeto até a entrega."
      />

      {/* ------------------------------------------------------------- hero
          Fundo fotográfico: medição em obra, planta na mão. O assunto da foto
          fica no centro/direita; o texto ocupa a esquerda, que é justamente a
          faixa clara (céu, mar, prédios). Por isso o véu é assimétrico e forte
          à esquerda — escurece onde o texto cai e devolve a cena onde ela
          importa.

          Véus em `ink`, nunca em navy: navy tinge a foto de azul e mata o mar.
          As opacidades saíram de medir contraste real sobre os pixels desta
          foto — trocar a foto exige medir de novo (ver README › Imagens). */}
      <section className="relative overflow-hidden bg-ink py-20 text-white md:py-28">
        <Picture
          name="arqvetra-hero"
          alt="Dois profissionais da VETRA conferindo a planta e medindo o vão de uma varanda envidraçada em obra, com vista para o mar"
          fill
          priority
          sizes="100vw"
        />

        {/* 01 — véu geral: nenhuma parte da foto fica em brilho pleno sob texto */}
        <div
          className="pointer-events-none absolute inset-0 bg-ink/45"
          aria-hidden="true"
        />
        {/* 02 — véu direcional: a coluna de texto é a esquerda */}
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/55 to-ink/10"
          aria-hidden="true"
        />
        {/* 03 — véu de topo: separa o header branco da foto sem linha dura */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/60 to-transparent"
          aria-hidden="true"
        />
        <div
          className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.06]"
          aria-hidden="true"
        />

        <div className="container-vetra relative">
          {/* `photo`, não `white`: sobre foto nenhuma transparência sobrevive
              ao AA — mesma regra já aplicada no hero da home. */}
          <Eyebrow tone="photo">Atendimento para arquitetos e designers</Eyebrow>
          <Rule className="mt-5" />
          <h1 className="mt-6 max-w-4xl font-display text-hero font-light text-balance text-white">
            Especificar vidro é coisa séria.
            <span className="block font-normal">Tratamos assim.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lede text-white">
            Atendimento técnico dedicado a arquitetos e designers que
            projetam com padrão: fale direto com quem entende de
            especificação, do primeiro contato até a entrega da obra.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <CTA
              utm={{ campaign: 'arquitetos', content: 'hero-whatsapp' }}
              message={MSG_ARQUITETO}
            >
              <WhatsAppGlyph />
              Falar com um especialista
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

      {/* ------------------------------------------------------------ problema
          Framing, não venda: nomeia o risco que o arquiteto já conhece antes
          de oferecer qualquer coisa. */}
      <Section>
        <SectionHead
          eyebrow="Por que isso importa"
          title="Especificar vidro é assumir um risco que não é seu."
        />
        <p className="mt-8 max-w-3xl text-lede text-ink/60">
          Especificar vidro em projeto exige confiar num fornecedor que não vai
          te deixar na mão na hora H: prazo estourado, medição errada,
          retrabalho que vira problema seu com o cliente. A maioria dos
          vidraceiros trata arquiteto como canal de venda. A VETRA trata como
          parceiro técnico, com atenção direta ao seu projeto.
        </p>
      </Section>

      {/* ------------------------------------------------------- benefícios */}
      <Section tone="mist">
        <SectionHead
          eyebrow="Como tratamos seu projeto"
          title="Atenção direta, do primeiro contato à entrega."
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
      </Section>

      {/* ----------------------------------------------------- prova técnica
          Promete a especificação POR PROJETO, não um documento pronto: não
          existe ficha técnica publicada para baixar, e prometer download de
          um arquivo inexistente é dívida na primeira conversa. Se o PDF for
          produzido, esta seção vira link direto e o CTA some. */}
      <Section>
        <SectionHead
          eyebrow="Especificação técnica, não venda de vidro"
          title="A especificação vai por escrito, pronta para o memorial."
          lede="Sistema, espessura, tipo de vidro, ferragem, folgas e parâmetros de medição: documentados para o seu projeto, no formato que entra direto no memorial descritivo."
        />
        <div className="mt-10">
          <CTA
            variant="ghost"
            utm={{ campaign: 'arquitetos', content: 'especificacao' }}
            message="Olá, VETRA. Sou arquiteto(a)/designer e quero a especificação técnica para o meu projeto."
          >
            Pedir a especificação do seu projeto
          </CTA>
        </div>
      </Section>

      {/* --------------------------------------------------------- CTA final */}
      <Section tone="mist">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Próximo passo</Eyebrow>
            <h2 className="mt-6 max-w-2xl font-display text-title font-light text-balance">
              Atendimento direto, sem intermediário.
            </h2>
            <p className="mt-6 max-w-xl text-lede text-ink/60">
              Fale com a gente. Sem burocracia, só atendimento técnico direto.
              Atendimento em {site.address.locality} e Região Metropolitana:{' '}
              {site.contact.phoneDisplay}.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTA
              utm={{ campaign: 'arquitetos', content: 'fechamento-whatsapp' }}
              message={MSG_ARQUITETO}
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
