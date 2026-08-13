/**
 * Pós-build: sitemap.xml + página 404 no lugar que a Vercel procura.
 *
 * O sitemap sai do HTML realmente pré-renderizado.
 * Roda depois do `vite-react-ssg build` (ver script "build" no package.json),
 * então o sitemap nunca lista uma rota que não existe no disco.
 */
import fs from 'node:fs/promises'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const DIST = path.join(ROOT, 'dist')
const BASE = process.env.SITE_URL ?? 'https://www.vetravidros.com.br'

/** Rotas fora do índice: 404 não entra em sitemap. */
const EXCLUDE = new Set(['/404'])

/** Prioridade por rota — a home puxa mais que uma página de projeto. */
function priority(route) {
  if (route === '/') return '1.0'
  if (route === '/projetos' || route === '/arquitetos') return '0.9'
  if (route.startsWith('/projetos/')) return '0.7'
  return '0.8'
}

async function walk(dir, prefix = '') {
  const routes = []
  for (const entry of await fs.readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) {
      if (entry.name === 'assets' || entry.name === 'img' || entry.name === 'brand') continue
      routes.push(...(await walk(full, `${prefix}/${entry.name}`)))
    } else if (entry.name === 'index.html') {
      routes.push(prefix === '' ? '/' : prefix)
    }
  }
  return routes
}

const routes = (await walk(DIST))
  .filter((r) => !EXCLUDE.has(r))
  .sort((a, b) => a.localeCompare(b))

const lastmod = new Date().toISOString().slice(0, 10)

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (r) => `  <url>
    <loc>${BASE}${r === '/' ? '/' : r}</loc>
    <lastmod>${lastmod}</lastmod>
    <priority>${priority(r)}</priority>
  </url>`,
  )
  .join('\n')}
</urlset>
`

await fs.writeFile(path.join(DIST, 'sitemap.xml'), xml, 'utf8')
console.log(`\n  sitemap.xml — ${routes.length} rotas:\n${routes.map((r) => `    ${r}`).join('\n')}`)

// A Vercel serve dist/404.html em rota inexistente; o SSG gera 404/index.html.
await fs.copyFile(path.join(DIST, '404', 'index.html'), path.join(DIST, '404.html'))
console.log('  404.html publicado na raiz do dist\n')
