import { Link } from 'react-router-dom'
import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Eyebrow } from '@/components/ui'
import { nav, site } from '@/content/site'
import { solutions } from '@/content/solutions'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-navy text-white">
      {/* listras diagonais do símbolo, quase imperceptíveis */}
      <div className="glass-stripes pointer-events-none absolute inset-0 opacity-[0.04]" aria-hidden="true" />

      <div className="container-vetra relative py-section">
        <div className="grid gap-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <img
              src="/brand/vetra-horizontal-dark.svg"
              alt={site.legalName}
              width={400}
              height={112}
              className="h-10 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="mt-7 max-w-sm text-lede text-white/60">
              {site.positioning}. Especificação, medição técnica e execução em
              Fortaleza e Região Metropolitana.
            </p>
            <CTA utm={{ campaign: 'footer', content: 'whatsapp' }} className="mt-9">
              <WhatsAppGlyph />
              Falar no WhatsApp
            </CTA>
          </div>

          <nav aria-label="Rodapé — navegação">
            <Eyebrow tone="white">Navegação</Eyebrow>
            <ul className="mt-4 space-y-0.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    to={item.href}
                    className="inline-block py-1.5 text-sm text-white/70 transition-colors duration-300 hover:text-cyan"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <Eyebrow tone="white">Soluções</Eyebrow>
            <ul className="mt-4 space-y-0.5">
              {solutions.map((s) => (
                <li key={s.id}>
                  <Link
                    to={`/projetos?categoria=${s.id}`}
                    className="inline-block py-1.5 text-sm text-white/70 transition-colors duration-300 hover:text-cyan"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <Eyebrow tone="white">Contato</Eyebrow>
            <ul className="mt-4 space-y-1 text-sm text-white/70">
              <li>
                <a
                  href={`tel:${site.contact.phoneE164}`}
                  className="inline-block py-1.5 transition-colors duration-300 hover:text-cyan"
                >
                  {site.contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.contact.email}`}
                  className="inline-block py-1.5 transition-colors duration-300 hover:text-cyan"
                >
                  {site.contact.email}
                </a>
              </li>
              <li className="pt-2">
                {site.address.locality} / {site.address.region}
              </li>
              {site.hours.map((h) => (
                <li key={h.label} className="text-white/60">
                  {h.label}: {h.value}
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={site.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block py-1.5 transition-colors duration-300 hover:text-cyan"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-4 border-t border-white/12 pt-8 text-xs text-white/70 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.legalName}. Fortaleza / CE.
          </p>
          <a
            href={site.social.googleBusiness}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block py-1.5 transition-colors duration-300 hover:text-cyan"
          >
            Perfil da Empresa no Google
          </a>
        </div>
      </div>
    </footer>
  )
}
