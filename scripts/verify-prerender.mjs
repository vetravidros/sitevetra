/**
 * CRITÉRIO DE ACEITE DO PROJETO.
 *
 *   npm run build && npm run verify:prerender
 *
 * Abre o HTML gerado de cada rota e confirma que o conteúdo textual está no
 * arquivo estático — não apenas <div id="root"></div>. Sem isso o SEO fica
 * pior que o da versão Next.js anterior.
 *
 * Falha (exit 1) se qualquer rota não passar em todas as checagens.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')

/** [rota, trecho de texto que TEM que estar no HTML estático] */
const EXPECTED = [
  ['/', 'Arquitetura em vidro'],
  ['/projetos', 'Projetos'],
  ['/projetos/varanda-guararapes', 'Varanda contínua, Guararapes'],
  ['/projetos/escritorio-aldeota', 'Escritório em Aldeota'],
  ['/projetos/terraco-beira-mar', 'Terraço voltado para o mar'],
  ['/projetos/suite-master-elegance', 'Suíte master'],
  ['/projetos/boxes-sob-medida', 'Série de banhos sob medida'],
  ['/projetos/imperator-espelhos', 'Espelhos de grande formato'],
  ['/arquitetos', 'Programa de parceria'],
  ['/sobre', 'Vidro é projeto'],
  ['/contato', 'Comece pelo'],
  ['/404', 'não existe'],
]

const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, '')
    .replace(/<style[\s\S]*?<\/style>/gi, '')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ')

let failed = 0

for (const [route, needle] of EXPECTED) {
  const file = path.join(DIST, route === '/' ? '' : route.slice(1), 'index.html')
  const problems = []

  let html
  try {
    html = await fs.readFile(file, 'utf8')
  } catch {
    console.error(`  ✗ ${route.padEnd(34)} HTML não gerado (${path.relative(ROOT, file)})`)
    failed++
    continue
  }

  const text = strip(html)

  if (!text.includes(needle)) problems.push(`texto "${needle}" ausente do HTML`)
  // react-helmet-async marca as tags com data-rh — o regex tolera atributos
  if (!/<title[^>]*>[^<]{10,}<\/title>/.test(html)) problems.push('<title> ausente ou vazio')
  if (!/<meta[^>]+name="description"[^>]+content="[^"]{40,}"/.test(html))
    problems.push('meta description ausente')
  if (!html.includes('rel="canonical"')) problems.push('canonical ausente')
  if (!html.includes('property="og:image"')) problems.push('og:image ausente')
  if (!html.includes('"@type":"LocalBusiness"')) problems.push('JSON-LD LocalBusiness ausente')
  if (!/<h1[\s>]/.test(html)) problems.push('h1 ausente')
  // Regra de alt em duas camadas, que é como a acessibilidade de fato funciona:
  //   - TODA <img> precisa do atributo alt (sem ele, o leitor de tela lê a URL);
  //   - <img> dentro de <main> é conteúdo e precisa de alt PREENCHIDO.
  // alt="" é a marcação correta para imagem decorativa — o logo do header e do
  // rodapé, por exemplo, cujo nome já é anunciado pelo aria-label do link.
  const semAtributo = (html.match(/<img(?![^>]*\salt=)[^>]*>/g) ?? []).length
  if (semAtributo > 0) problems.push(`${semAtributo} <img> sem atributo alt`)

  const main = html.match(/<main[\s\S]*?<\/main>/)?.[0] ?? ''
  const decorativaNoConteudo = (main.match(/<img(?![^>]*\salt="[^"]+")[^>]*>/g) ?? []).length
  if (decorativaNoConteudo > 0)
    problems.push(`${decorativaNoConteudo} <img> em <main> com alt vazio`)

  const bytes = Buffer.byteLength(html)

  if (problems.length === 0) {
    console.log(`  ✓ ${route.padEnd(34)} ${(bytes / 1024).toFixed(1)} kB de HTML`)
  } else {
    console.error(`  ✗ ${route.padEnd(34)} ${problems.join('; ')}`)
    failed++
  }
}

// robots + sitemap
for (const f of ['robots.txt', 'sitemap.xml']) {
  if (await fs.access(path.join(DIST, f)).then(() => true, () => false)) {
    console.log(`  ✓ ${f}`)
  } else {
    console.error(`  ✗ ${f} não gerado`)
    failed++
  }
}

if (failed > 0) {
  console.error(`\n  ${failed} verificação(ões) falharam.\n`)
  process.exit(1)
}
console.log(`\n  ${EXPECTED.length} rotas pré-renderizadas com conteúdo no HTML estático.\n`)
