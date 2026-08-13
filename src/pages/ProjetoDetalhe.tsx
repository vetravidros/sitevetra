import { Link, useParams } from 'react-router-dom'
import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Picture } from '@/components/Picture'
import { JsonLd, Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section } from '@/components/ui'
import { categoryLabel, projectBySlug, projects } from '@/content/projects'
import { site } from '@/content/site'
import NotFound from '@/pages/NotFound'

export default function ProjetoDetalhe() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? projectBySlug(slug) : undefined

  if (!project) return <NotFound />

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  const ficha: [string, string][] = [
    ['Local', project.spec.local],
    ['Ano', project.spec.ano],
    ['Tipologia', project.spec.tipologia],
    ['Vidro', project.spec.vidro],
    ['Ferragem', project.spec.ferragem],
    ['Arquitetura', project.spec.architect ?? 'Projeto direto com o cliente'],
  ]

  return (
    <>
      <Seo
        path={`/projetos/${project.slug}`}
        title={project.title}
        description={`${project.summary} Ficha técnica: ${project.spec.tipologia}, ${project.spec.vidro}. ${project.spec.local}.`}
        type="article"
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Início', item: site.url },
            { '@type': 'ListItem', position: 2, name: 'Projetos', item: `${site.url}/projetos` },
            {
              '@type': 'ListItem',
              position: 3,
              name: project.title,
              item: `${site.url}/projetos/${project.slug}`,
            },
          ],
        }}
      />

      <Section className="pt-14 pb-12 md:pt-20">
        <Link
          to="/projetos"
          className="font-display text-eyebrow uppercase tracking-label text-ink/60 transition-colors hover:text-navy"
        >
          ← Todos os projetos
        </Link>

        <Eyebrow className="mt-10">{categoryLabel(project.category)}</Eyebrow>
        <h1 className="mt-6 max-w-4xl font-display text-title font-light text-balance">
          {project.title}
        </h1>
        <p className="mt-6 max-w-xl text-lede text-ink/60">{project.summary}</p>
      </Section>

      <div className="container-vetra">
        <Picture
          name={project.cover}
          alt={project.coverAlt}
          ratio="3/2"
          priority
          sizes="(min-width: 1280px) 76rem, 100vw"
        />
      </div>

      <Section className="pt-16">
        <div className="grid gap-14 lg:grid-cols-[1fr_22rem] lg:gap-20">
          <div>
            {project.body.map((p) => (
              <p key={p.slice(0, 24)} className="mb-6 text-lede text-ink/70 last:mb-0">
                {p}
              </p>
            ))}
          </div>

          <aside>
            <Eyebrow>Ficha técnica</Eyebrow>
            <Rule className="mt-4" />
            <dl className="mt-6 divide-y divide-ink/10 border-t border-ink/10 text-sm">
              {ficha.map(([k, v]) => (
                <div key={k} className="py-4">
                  <dt className="font-display text-eyebrow uppercase tracking-label text-ink/60">
                    {k}
                  </dt>
                  <dd className="mt-1.5 text-ink/75">{v}</dd>
                </div>
              ))}
            </dl>
            <CTA
              utm={{ campaign: 'projeto', content: project.slug }}
              message={`Olá, VETRA. Vi o projeto "${project.title}" no site e quero algo parecido.`}
              className="mt-8 w-full"
            >
              <WhatsAppGlyph />
              Quero algo assim
            </CTA>
          </aside>
        </div>
      </Section>

      {/* ------------------------------------------------------- galeria */}
      <Section tone="mist" className="pt-4">
        <Eyebrow>Galeria</Eyebrow>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {project.gallery.map((img) => (
            <Picture
              key={img.name}
              name={img.name}
              alt={img.alt}
              ratio="3/4"
              sizes="(min-width: 1024px) 30vw, (min-width: 640px) 46vw, 92vw"
            />
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- próximo */}
      <Section>
        <Link to={`/projetos/${next.slug}`} className="group block">
          <Eyebrow>Próximo projeto</Eyebrow>
          <div className="mt-6 grid gap-8 border-t border-ink/10 pt-8 md:grid-cols-[1fr_18rem] md:items-center">
            <h2 className="font-display text-title font-light text-balance transition-colors duration-300 group-hover:text-navy">
              {next.title}
            </h2>
            <Picture
              name={next.cover}
              alt={next.coverAlt}
              ratio="3/2"
              sizes="(min-width: 768px) 18rem, 92vw"
              imgClassName="transition-transform duration-700 ease-glass group-hover:scale-[1.04]"
            />
          </div>
        </Link>
      </Section>
    </>
  )
}
