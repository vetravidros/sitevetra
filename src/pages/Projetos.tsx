import { Link, useSearchParams } from 'react-router-dom'
import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { ProjectPicture } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Section } from '@/components/ui'
import { categoriasComObra, categoryLabel, projects, type CategoryId } from '@/content/projects'

export default function Projetos() {
  const [params, setParams] = useSearchParams()
  const active = params.get('categoria') as CategoryId | null

  const visible = active ? projects.filter((p) => p.category === active) : projects

  const select = (id: CategoryId | null) => {
    if (id) setParams({ categoria: id }, { replace: true })
    else setParams({}, { replace: true })
  }

  return (
    <>
      <Seo
        path="/projetos"
        title="Projetos executados"
        description="Obras de cortina de vidro, portas de correr, divisórias e espelhos executadas pela VETRA em Fortaleza e Região Metropolitana. Galeria de cada projeto."
      />

      <Section className="pt-16 pb-10 md:pt-24">
        <Eyebrow>Portfólio</Eyebrow>
        <h1 className="mt-7 max-w-4xl font-display text-hero font-light text-balance">
          Projetos
          <span className="block text-ink/45">executados.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lede text-ink/60">
          Obras entregues em Fortaleza e Região Metropolitana: condomínios,
          escritórios, lojas e residências.
        </p>

        {/* ------------------------------------------------------- filtros */}
        <div
          role="group"
          aria-label="Filtrar projetos por categoria"
          className="mt-14 flex flex-wrap gap-3 border-t border-ink/10 pt-8"
        >
          <FilterButton active={active === null} onClick={() => select(null)}>
            Todos
          </FilterButton>
          {categoriasComObra().map((c) => (
            <FilterButton
              key={c.id}
              active={active === c.id}
              onClick={() => select(c.id)}
            >
              {c.label}
            </FilterButton>
          ))}
        </div>

        {/* --------------------------------------------------------- grade */}
        <div className="mt-14 grid gap-x-8 gap-y-16 md:grid-cols-2">
          {visible.map((p, i) => (
            <article key={p.slug} className="group">
              <Link to={`/projetos/${p.slug}`} className="block">
                <ProjectPicture
                  photo={p.cover}
                  alt={p.coverAlt}
                  ratio="4/3"
                  priority={i < 2}
                  sizes="(min-width: 768px) 46vw, 92vw"
                  imgClassName="transition-transform duration-700 ease-glass group-hover:scale-[1.03]"
                />
                <div className="mt-6 flex items-baseline gap-4">
                  <span className="font-display text-eyebrow tracking-label text-navy">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="font-display text-heading font-medium text-balance transition-colors duration-300 group-hover:text-navy">
                    {p.title}
                  </h2>
                </div>
              </Link>
              <p className="mt-3 text-ink/60">{p.summary}</p>
              <p className="mt-5 font-display text-eyebrow uppercase tracking-label text-ink/60">
                {categoryLabel(p.category)}
              </p>
            </article>
          ))}
        </div>

        {visible.length === 0 && (
          <p className="mt-14 text-lede text-ink/60">
            Ainda não publicamos projetos nessa categoria. Fale com a gente: temos
            obras não fotografadas.
          </p>
        )}
      </Section>

      <Section tone="mist" className="py-20">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
          <h2 className="max-w-2xl font-display text-heading font-light text-balance">
            Tem um vão difícil, um prumo fora ou um prazo apertado? É exatamente
            aí que a conversa começa.
          </h2>
          <CTA utm={{ campaign: 'projetos', content: 'rodape-whatsapp' }}>
            <WhatsAppGlyph />
            Falar no WhatsApp
          </CTA>
        </div>
      </Section>
    </>
  )
}

function FilterButton({
  active,
  onClick,
  children,
}: {
  active: boolean
  onClick: () => void
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`font-display text-[0.75rem] font-medium uppercase tracking-label transition-all duration-300 ease-glass px-5 py-3 border ${
        active
          ? 'border-navy bg-navy text-white'
          : 'border-ink/15 text-ink/60 hover:border-ink/50 hover:text-ink'
      }`}
    >
      {children}
    </button>
  )
}
