import { Link } from 'react-router-dom'
import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { HeroCarousel } from '@/components/HeroCarousel'
import { Picture, ProjectPicture, imageSrcSet } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section, SectionHead } from '@/components/ui'
import { site, commitments } from '@/content/site'
import { solutions } from '@/content/solutions'
import { featuredProject, categoryLabel } from '@/content/projects'

export default function Home() {
  return (
    <>
      <Seo
        path="/"
        title="VETRA · Arquitetura em vidro sob medida · Fortaleza/CE"
        description="Cortina de vidro, portas de correr e divisórias, espelhos e box de banheiro sob medida em Fortaleza. Obras executadas para condomínios, escritórios e residências."
      >
        {/* O hero é o LCP da home. Sem preload o browser só descobre a imagem
            depois de resolver o CSS do <picture>. */}
        <link
          rel="preload"
          as="image"
          type="image/avif"
          media="(max-width: 767px)"
          href="/img/hero-mobile-1024.avif"
          imageSrcSet={imageSrcSet('hero-mobile')}
          imageSizes="100vw"
          fetchPriority="high"
        />
        <link
          rel="preload"
          as="image"
          type="image/avif"
          media="(min-width: 768px)"
          href="/img/hero-desktop-1440.avif"
          imageSrcSet={imageSrcSet('hero-desktop')}
          imageSizes="100vw"
          fetchPriority="high"
        />
      </Seo>

      {/* ------------------------------------------------------------ hero
          Ocupa a tela inteira, começando no pixel zero: sobe por baixo do
          header (que fica transparente nesta rota) com margem negativa da
          altura dele, e devolve o espaço com padding interno. */}
      {/* `min-h-svh`, não `h-svh`: em tela curta (360x640) o hero precisa poder
          CRESCER. Com altura travada, o conteúdo transbordava para cima e o
          eyebrow sumia atrás do header. */}
      <section className="relative -mt-20 flex min-h-svh flex-col overflow-hidden md:-mt-24">
        {/* 1 slide só por enquanto — vira carrossel automático assim que
            entrar uma 2ª foto no array (ver README › Imagens › Hero). */}
        <HeroCarousel
          slides={[
            {
              name: 'hero-desktop',
              mobile: 'hero-mobile',
              alt: 'Varanda envidraçada de piso a teto com vista para a praia, os coqueiros da orla e os prédios de Fortaleza',
            },
          ]}
          sizes="100vw"
        />

        {/* Véus em `ink` (preto), não em navy: navy tinge a foto inteira de
            azul e mata o mar e a areia. Preto só escurece, a cor sobrevive.
            As opacidades não são escolha estética — saíram de medir o
            contraste real do branco sobre os pixels desta foto. Trocar a foto
            pede medir de novo (ver README › Imagens › Hero). */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-ink/70 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-transparent"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-r from-ink/65 via-ink/15 to-transparent"
          aria-hidden="true"
        />
        {/* Véu extra, só para a faixa onde a barra técnica cai. Os três véus
            acima foram calibrados quando a barra tinha 3 colunas — a 4ª
            (mais à direita) caiu numa região que eles escurecem pouco, e o
            rótulo "Entrega" reprovava AA (4.41:1). Em vez de reabrir a
            calibração dos véus globais (que também protege h1 e eyebrow, já
            medidos), soma-se um véu local só na altura da barra. */}
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-80 bg-gradient-to-t from-ink/55 to-transparent md:h-96"
          aria-hidden="true"
        />
        {/* As listras diagonais da marca NÃO entram aqui. Aplicadas sobre o
            terço direito da foto, elas caíam em cima de mobiliário de primeiro
            plano (cadeiras, painel ripado, tampo de pedra) que não tem vidro
            na frente — lia como falha de textura, não como reflexo. O motivo
            continua vivo nas faixas navy, onde corre sobre cor chapada. */}

        <div className="container-vetra relative flex h-full flex-col justify-end pt-20 pb-16 md:pt-24 md:pb-20">
          <Eyebrow tone="photo">
            {site.address.locality} / {site.address.region} · desde o projeto
          </Eyebrow>
          {/* Uma cor só. A hierarquia entre as duas linhas vem do PESO
              (light → regular), não de tingir a segunda linha: sobre foto,
              cor no título compete com a própria imagem. */}
          <h1 className="mt-6 max-w-4xl font-display text-hero font-light text-balance text-white">
            Arquitetura em vidro
            <span className="block font-normal">sob medida.</span>
          </h1>

          <div className="mt-10 flex flex-wrap gap-4">
            <CTA utm={{ campaign: 'home', content: 'hero-whatsapp' }}>
              <WhatsAppGlyph />
              Falar com a VETRA
            </CTA>
            <CTA
              variant="glass"
              to="/projetos"
              utm={{ campaign: 'home', content: 'hero-projetos' }}
            >
              Ver projetos
            </CTA>
          </div>

          {/* Barra técnica. Faz dois trabalhos: dá ao arquiteto um fato
              específico para ler no primeiro viewport (o slogan sozinho é um
              descritor de categoria que qualquer concorrente escreveria), e
              distribui o peso da composição pela largura do quadro em vez de
              empilhar tudo no canto inferior esquerdo.

              O rótulo fica sempre ACIMA do claim: lado a lado, rótulos de
              larguras diferentes empurram cada claim para um x distinto,
              quebrando o alinhamento da coluna no celular.

              Grade 1 → 2 → 4 colunas: com 4 etapas e claim em frase completa,
              travar em 3 (herdado de quando eram 3 itens) deixava a última
              célula sozinha numa linha. 2 colunas no tablet evita frase
              esganada; 4 no desktop, onde sobra largura, volta a ocupar o
              quadro inteiro. */}
          <dl className="mt-10 grid gap-x-8 gap-y-5 border-t border-white/25 pt-6 sm:grid-cols-2 sm:gap-x-10 lg:grid-cols-4 lg:gap-x-12 md:mt-14">
            {commitments.map((c) => (
              <div key={c.label}>
                {/* `mist`, não `white/60`: sobre a foto o branco a 60%
                    reprovava AA em alguns pontos do quadro (medido 3.91:1).
                    Mist é cor de marca, sólida, e ainda separa o rótulo do
                    claim — o branco puro achataria os dois. Refazer a medição
                    se a foto do hero ou esta grade mudarem (ver README). */}
                <dt className="mb-2 font-display text-eyebrow uppercase tracking-wordmark text-mist">
                  {c.label}
                </dt>
                <dd className="font-display text-sm font-light text-white text-balance md:text-base">
                  {c.claim}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* O lede sai de cima da foto: sobre imagem ficam só marca, título e ação. */}
      <Section className="py-16 md:py-20">
        <p className="max-w-3xl text-lede text-ink/70">
          {/* A lista espelha as quatro categorias do portfólio, na mesma ordem
              dos cards abaixo. Citar um produto que não é categoria (era o caso
              de "Janelas") promete ao visitante uma seção que não existe. */}
          Trabalhamos com quem desenha o espaço antes de ele existir. Cortina de
          vidro, Box, Portas e Espelhos especificados e executados exatamente
          conforme o projeto.
        </p>
      </Section>

      {/* --------------------------------------------------- como atendemos */}
      <Section tone="mist" className="py-20">
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              title: 'Especificação junto com o projeto',
              text: 'Iniciamos um acompanhamento técnico ainda em fase de projeto para que os vidros sejam especificados da forma mais segura e funcional.',
            },
            {
              title: 'Medição técnica no local',
              text: 'Realizamos a medição técnica com equipamentos de alta precisão in loco após todos os revestimentos e acabamentos serem finalizados.',
            },
            {
              title: 'Execução acompanhada',
              text: 'Todo o processo de produção e instalação é acompanhado de perto para evitar quaisquer imprevistos ou divergências do projeto.',
            },
          ].map((item) => (
            <div key={item.title}>
              <Rule />
              <h3 className="mt-6 font-display text-heading font-medium text-balance">
                {item.title}
              </h3>
              <p className="mt-4 text-ink/60">{item.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ---------------------------------------------------- três soluções */}
      <Section>
        <Eyebrow>Soluções</Eyebrow>
        <Rule className="mt-5" />

        <div className="mt-16 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
          {solutions.map((s) => (
            <article key={s.id} className="group">
              <Link to={`/projetos?categoria=${s.id}`} className="block">
                {/* `image` pode ser um asset fixo (string) ou a foto de uma
                    obra já publicada (objeto) — ver comentário em solutions.ts */}
                {typeof s.image === 'string' ? (
                  <Picture
                    name={s.image}
                    alt={s.imageAlt}
                    ratio="3/4"
                    sizes="(min-width: 768px) 30vw, 92vw"
                    imgClassName="transition-transform duration-700 ease-glass group-hover:scale-[1.03]"
                  />
                ) : (
                  <ProjectPicture
                    photo={s.image}
                    alt={s.imageAlt}
                    ratio="3/4"
                    sizes="(min-width: 768px) 30vw, 92vw"
                    imgClassName="transition-transform duration-700 ease-glass group-hover:scale-[1.03]"
                  />
                )}
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-eyebrow tracking-label text-navy">
                    {s.index}
                  </span>
                  <h3 className="font-display text-heading font-medium">{s.title}</h3>
                </div>
              </Link>
              <p className="mt-4 text-ink/60">{s.lede}</p>
              <ul className="mt-6 space-y-2 border-t border-ink/10 pt-6 text-sm text-ink/60">
                {s.items.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ projeto em destaque */}
      <Section tone="mist">
        <SectionHead eyebrow="Em destaque" title={featuredProject.title} />
        <div className="mt-14 grid gap-12 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <Link to={`/projetos/${featuredProject.slug}`} className="group block">
            <ProjectPicture
              photo={featuredProject.cover}
              alt={featuredProject.coverAlt}
              ratio="4/3"
              sizes="(min-width: 1024px) 58vw, 92vw"
              imgClassName="transition-transform duration-700 ease-glass group-hover:scale-[1.02]"
            />
          </Link>
          <div>
            <p className="text-lede text-ink/70">{featuredProject.body[0]}</p>
            <dl className="mt-10 divide-y divide-ink/10 border-y border-ink/10 text-sm">
              {[
                ['Categoria', categoryLabel(featuredProject.category)],
                              ].map(([k, v]) => (
                <div key={k} className="flex justify-between gap-6 py-3.5">
                  <dt className="font-display text-eyebrow uppercase tracking-label text-ink/60">
                    {k}
                  </dt>
                  <dd className="text-right text-ink/70">{v}</dd>
                </div>
              ))}
            </dl>
            <CTA
              variant="portfolio"
              to={`/projetos/${featuredProject.slug}`}
              utm={{ campaign: 'home', content: 'destaque' }}
              className="mt-10"
            >
              Ver o projeto
            </CTA>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------------- arquitetos */}
      <section className="relative overflow-hidden bg-navy py-section text-white">
        <div
          className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.05]"
          aria-hidden="true"
        />
        <div className="container-vetra relative grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Os três itens do lede são os MESMOS pilares da /arquitetos, na
              mesma ordem. Esta faixa é a porta de entrada do programa:
              prometer aqui algo que a página de destino não entrega (era o
              caso do "desenho técnico antes do fechamento") quebra a
              expectativa de quem clica. Mudou lá, muda aqui. */}
          <SectionHead
            tone="white"
            eyebrow="ArqVetra · programa de parceria"
            title="Para quem especifica."
            lede="Arquitetos e designers parceiros têm canal direto com especialista e retorno em até 24h, prioridade na agenda de medição, execução e instalação, e condição especial de valor e pagamento para os clientes que indicam."
          />
          <div className="lg:justify-self-end">
            <CTA
              variant="portfolio"
              to="/arquitetos"
              utm={{ campaign: 'home', content: 'arquitetos' }}
              className="border-white/30 text-white hover:border-white hover:bg-white hover:text-navy"
            >
              Conhecer o programa
            </CTA>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- CTA final */}
      <Section className="py-24">
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Próximo passo</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-title font-light text-balance">
              Manda a planta, a foto do vão ou só a dúvida.
            </h2>
            <p className="mt-6 max-w-xl text-lede text-ink/60">
              Respondemos com a especificação técnica e o caminho de execução,
              antes de falar de preço.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <CTA
              utm={{ campaign: 'home', content: 'fechamento-whatsapp' }}
              message="Olá, VETRA. Vim pelo site e quero falar sobre um projeto em vidro."
            >
              <WhatsAppGlyph />
              Falar no WhatsApp
            </CTA>
            <CTA
              variant="portfolio"
              to="/contato"
              utm={{ campaign: 'home', content: 'fechamento-contato' }}
            >
              Enviar briefing
            </CTA>
          </div>
        </div>
      </Section>
    </>
  )
}
