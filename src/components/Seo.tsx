import { Head } from 'vite-react-ssg'
import { site } from '@/content/site'

type Props = {
  title: string
  description: string
  /** Caminho da rota, começando com "/". Vira o canonical. */
  path: string
  /** Caminho absoluto de imagem OG. Default: /og-vetra.png. */
  image?: string
  type?: 'website' | 'article'
  /** true nas páginas que não devem indexar (ex.: 404). */
  noindex?: boolean
  children?: React.ReactNode
}

export function Seo({
  title,
  description,
  path,
  image = '/og-vetra.png',
  type = 'website',
  noindex = false,
  children,
}: Props) {
  // canonical precisa bater exatamente com a URL listada no sitemap
  const url = path === '/' ? `${site.url}/` : `${site.url}${path}`
  const fullTitle =
    path === '/' ? title : `${title} · ${site.legalName} · Fortaleza`
  const imageUrl = `${site.url}${image}`

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      {noindex && <meta name="robots" content="noindex, follow" />}

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={site.legalName} />
      <meta property="og:locale" content="pt_BR" />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={`${site.legalName} — ${site.positioning}`} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />

      {children}
    </Head>
  )
}

/** Bloco JSON-LD. Recebe o objeto já montado. */
export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <Head>
      <script type="application/ld+json">{JSON.stringify(data)}</script>
    </Head>
  )
}

/** LocalBusiness — presente em todas as páginas via Layout. */
export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${site.url}/#localbusiness`,
  name: site.legalName,
  alternateName: site.name,
  description:
    'Arquitetura em vidro sob medida em Fortaleza: fachadas e envidraçamento, box e box elegance, espelhos, divisórias e portas em vidro para projetos residenciais e corporativos.',
  url: site.url,
  telephone: site.contact.phoneE164,
  email: site.contact.email,
  image: `${site.url}/og-vetra.png`,
  logo: `${site.url}/brand/vetra-simbolo.svg`,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    addressCountry: site.address.country,
  },
  areaServed: site.areaServed.map((name) => ({ '@type': 'City', name })),
  openingHours: site.hours.map((h) => h.schema).filter(Boolean),
  sameAs: [site.social.instagram, site.social.googleBusiness],
}
