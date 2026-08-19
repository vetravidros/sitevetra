import type { SVGProps } from 'react'
import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { HeroCarousel } from '@/components/HeroCarousel'
import { Picture } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section, SectionHead } from '@/components/ui'
import { site } from '@/content/site'

const MSG_ORCAMENTO =
  'Olá, VETRA. Quero orçamento de cortina de vidro para minha varanda/sacada.'

/** Ícones de linha, 24×24, mesmo traço fino em todo o set — não é pacote de
    terceiro, são só os 11 glifos que essa página usa. */
function IconBase(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    />
  )
}

const icons = {
  estavel: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <rect x="7" y="4" width="10" height="12" rx="1" />
      <path d="M4 20h16" />
      <path d="M9 20v-2M15 20v-2" />
    </IconBase>
  ),
  vista: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M3 12c2.5-4 6-6 9-6s6.5 2 9 6c-2.5 4-6 6-9 6s-6.5-2-9-6Z" />
      <circle cx="12" cy="12" r="2.5" />
    </IconBase>
  ),
  manutencao: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M12 3a9 9 0 1 0 9 9" />
      <path d="M12 3v5l3-2" />
      <path d="m9 15 2 2 4-4" />
    </IconBase>
  ),
  certificado: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <circle cx="12" cy="9" r="5.5" />
      <path d="m9 8.5 2 2 4-3.5" />
      <path d="m9 13.5-1.5 6L12 18l4.5 1.5-1.5-6" />
    </IconBase>
  ),
  corrosao: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M12 3c3 4 5 7 5 10a5 5 0 0 1-10 0c0-3 2-6 5-10Z" />
    </IconBase>
  ),
  design: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M4 18c3-8 7-12 16-13" />
      <path d="M4 18c5 1 9-1 12-5" />
    </IconBase>
  ),
  area: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M9 4H4v5M20 9V4h-5M4 15v5h5M15 20h5v-5" />
    </IconBase>
  ),
  estetica: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3" />
      <path d="M12 8a4 4 0 0 1 4 4 4 4 0 0 1-4 4 4 4 0 0 1-4-4 4 4 0 0 1 4-4Z" />
    </IconBase>
  ),
  conforto: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M9 4a2 2 0 0 1 4 0v9.5a3.5 3.5 0 1 1-4 0V4Z" />
      <path d="M17 8c1.5.7 2.5 2 2.5 4M17 5c2.5 1 4 3.2 4 6" />
    </IconBase>
  ),
  seguranca: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M12 3.5 5 6v5c0 4.5 3 7.5 7 9.5 4-2 7-5 7-9.5V6l-7-2.5Z" />
    </IconBase>
  ),
  exclusividade: (p: SVGProps<SVGSVGElement>) => (
    <IconBase {...p}>
      <path d="M12 3v4M12 17v4M4.5 12h4M15.5 12h4" />
      <path d="m6 6 2.5 2.5M15.5 15.5 18 18M18 6l-2.5 2.5M8.5 15.5 6 18" />
      <circle cx="12" cy="12" r="2.5" />
    </IconBase>
  ),
}

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

const sistemaFeatures = [
  {
    icon: icons.estavel,
    title: 'Mais estável',
    text: 'O painel se apoia na base, sem depender de roldana suspensa — mais segurança e estabilidade no uso diário.',
  },
  {
    icon: icons.vista,
    title: 'Vista sem interrupções',
    text: 'Perfil mínimo entre os vidros, sem travessa vertical cortando a paisagem.',
  },
  {
    icon: icons.manutencao,
    title: 'Baixa manutenção',
    text: 'Sem rolamento para desgastar — menos manutenção ao longo dos anos.',
  },
  {
    icon: icons.certificado,
    title: 'Testado e aprovado',
    text: 'Sistema testado e aprovado em ensaios de pressão e resistência ao vento pelo Instituto Falcão Bauer.',
  },
  {
    icon: icons.corrosao,
    title: 'Resistente à corrosão',
    text: 'Componentes com alta resistência à corrosão — inclusive na maresia de Fortaleza.',
  },
  {
    icon: icons.design,
    title: 'Acabamento de alto padrão',
    text: 'Linhas curvas e suaves, acabamento pensado para não competir com a arquitetura do imóvel.',
  },
]

const processo = [
  {
    n: '01',
    title: 'Visita técnica',
    text: 'Avaliação detalhada do espaço e das necessidades do seu projeto, feita por quem vai executar.',
  },
  {
    n: '02',
    title: 'Projeto personalizado',
    text: 'Layout sob medida que une estética e funcionalidade ao ambiente.',
  },
  {
    n: '03',
    title: 'Produção com qualidade',
    text: 'Materiais de alta qualidade e precisão milimétrica na fabricação.',
  },
  {
    n: '04',
    title: 'Instalação limpa e rápida',
    text: 'Execução que respeita o prazo combinado e o ambiente da sua casa.',
  },
  {
    n: '05',
    title: 'Entrega com garantia',
    text: 'Suporte pós-venda depois da instalação concluída.',
  },
]

const valorizacao = [
  {
    icon: icons.area,
    title: 'Aumento da área útil',
    text: 'A varanda fechada vira extensão da sala, espaço gourmet ou escritório.',
  },
  {
    icon: icons.estetica,
    title: 'Estética de alto padrão',
    text: 'Design limpo e moderno, que valoriza a fachada e o ambiente.',
  },
  {
    icon: icons.conforto,
    title: 'Conforto térmico e acústico',
    text: 'Proteção contra vento, chuva e ruído externo.',
  },
  {
    icon: icons.seguranca,
    title: 'Segurança',
    text: 'Barreira física adicional — importante para quem tem criança, idoso ou pet em casa.',
  },
  {
    icon: icons.exclusividade,
    title: 'Percepção de exclusividade',
    text: 'Diferencial claro frente a imóveis parecidos no mesmo bairro.',
  },
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
          `ink`, nunca em navy (navy tinge a foto de azul).
          As fotos do carrossel são retrato (celular) — banda baixa e larga
          cortava demais no object-cover. Mais altura sobra respiro pra foto;
          um véu a menos (tirei o flat ink/50) deixa a cena mais visível fora
          da coluna de texto. */}
      <section className="relative min-h-[560px] overflow-hidden bg-ink py-24 text-white md:min-h-[680px] md:py-32">
        {/* As 4 fotos antigas (Reserva do Parque, Ana Amélia, Unique
            Meireles, Portal de Malaga) ficaram de fora: fotografadas contra
            a luz através do vidro, olhando pro céu aberto, saem com
            neblina/véu óptico real no arquivo — nem contrast(2.2)
            saturate(1.8) brightness(0.7) recuperou o céu. Seguem só na
            galeria, mais abaixo. */}
        <HeroCarousel
          slides={[
            {
              name: 'cortina-vidro-manhattan-beach',
              alt: 'Varanda fechada com cortina de vidro sob cobertura de palha, vista para piscina de condomínio',
            },
            {
              name: 'cortina-vidro-topo-predios-verde',
              alt: 'Varanda fechada com cortina de vidro, vista para prédios altos e área verde de Fortaleza',
            },
            {
              name: 'cortina-vidro-topo-ceu-azul',
              alt: 'Varanda curva fechada com cortina de vidro, céu azul e vista para os prédios do bairro',
            },
            {
              name: 'cortina-vidro-topo-nublado',
              alt: 'Varanda curva fechada com cortina de vidro, tela de proteção e vista para os prédios em dia nublado',
            },
            {
              name: 'cortina-vidro-topo-piso-tijolo',
              alt: 'Varanda fechada com cortina de vidro, piso em porcelanato e vista para os prédios',
            },
          ]}
          sizes="100vw"
        />

        {/* Sem véu nenhum sobre a foto — o André pediu a imagem limpa, sem
            nenhum efeito de escurecimento por cima. Legibilidade do texto
            vem só da sombra projetada (drop-shadow), não de escurecer a
            cena. */}

        <div className="container-vetra relative">
          <Eyebrow tone="photo" className="drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
            Cortina de Vidro — VETRA Soluções em Vidros
          </Eyebrow>
          <Rule className="mt-5" />
          <h1 className="mt-6 max-w-4xl font-display text-hero font-light text-balance text-white drop-shadow-[0_4px_20px_rgba(0,0,0,0.9)]">
            Feche a sacada. Não feche a vista.
            <span className="block font-normal">Cortina de vidro sob medida.</span>
          </h1>
          <p className="mt-8 max-w-2xl text-lede text-white drop-shadow-[0_2px_12px_rgba(0,0,0,0.9)]">
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
            title="Sistema de envidraçamento de sacadas sem roldanas premium."
          />
          <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {sistemaFeatures.map((f) => (
              <div key={f.title}>
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 text-cyan">
                  <f.icon className="h-6 w-6" />
                </span>
                <h3 className="mt-5 font-display text-heading font-medium text-balance text-white">
                  {f.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-white/70">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------- como funciona
          Adaptado do formato de "processo em 5 passos" de material de
          referência de mercado — reescrito com as palavras da VETRA, sem
          citar marca de terceiro. */}
      <Section>
        <SectionHead
          eyebrow="Como funciona"
          title="Do primeiro contato à instalação, um processo só."
        />
        <ol className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {processo.map((p) => (
            <li key={p.n}>
              <Rule />
              <span className="mt-6 block font-display text-eyebrow tracking-label text-navy">
                {p.n}
              </span>
              <h3 className="mt-4 font-display text-heading font-medium text-balance">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{p.text}</p>
            </li>
          ))}
        </ol>
      </Section>

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

      {/* ------------------------------------------------- valorização
          Estatística "até 20%" do material de referência não tinha fonte —
          publicar um número sem lastro no site oficial é risco (alguém pode
          perguntar de onde veio). Fechamento ficou qualitativo em vez disso. */}
      <Section>
        <SectionHead
          eyebrow="Além do conforto"
          title="Varanda fechada também é valorização do imóvel."
          lede="O mercado imobiliário está mais competitivo a cada ano, e quem compra busca diferenciais claros. Em regiões valorizadas, a varanda envidraçada virou um dos itens mais procurados."
        />
        <div className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {valorizacao.map((v) => (
            <div key={v.title}>
              <span className="flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 text-navy">
                <v.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-5 font-display text-heading font-medium text-balance">
                {v.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-ink/60">{v.text}</p>
            </div>
          ))}
        </div>
        <p className="mt-16 max-w-2xl border-t border-ink/10 pt-8 text-ink/60">
          Imóveis com varanda fechada e bem aproveitada tendem a se destacar
          no anúncio e vender com mais agilidade.
        </p>
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
