import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Seo } from '@/components/Seo'
import { Eyebrow, Section } from '@/components/ui'

export default function NotFound() {
  return (
    <>
      <Seo
        path="/404"
        title="Página não encontrada"
        description="A página que você procurava não existe mais ou mudou de endereço."
        noindex
      />
      <Section className="py-32">
        <Eyebrow>Erro 404</Eyebrow>
        <h1 className="mt-7 max-w-3xl font-display text-hero font-light text-balance">
          Esse vão
          <span className="block text-ink/45">não existe.</span>
        </h1>
        <p className="mt-8 max-w-xl text-lede text-ink/60">
          A página saiu do ar ou mudou de endereço. Os projetos continuam todos
          publicados.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <CTA variant="portfolio" to="/projetos" utm={{ campaign: '404', content: 'projetos' }}>
            Ver projetos
          </CTA>
          <CTA utm={{ campaign: '404', content: 'whatsapp' }}>
            <WhatsAppGlyph />
            Falar no WhatsApp
          </CTA>
        </div>
      </Section>
    </>
  )
}
