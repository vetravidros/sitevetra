/**
 * Pipeline das fotos de obra.
 *
 *   npm run assets:obras
 *
 * Lê o acervo de obras (uma pasta por obra, fora do build), gera derivados
 * responsivos em public/img/obras/ e escreve src/content/projects.generated.ts
 * com slug, título e as dimensões reais de cada foto.
 *
 * Duas coisas que não são óbvias:
 *
 * 1. Metade do acervo é HEIC. O sharp instalado aqui LÊ o cabeçalho HEIC mas
 *    não decodifica os pixels (libheif não foi compilado junto). A conversão
 *    passa pelo `sips`, que é nativo do macOS. Em Linux/CI seria preciso outro
 *    caminho — por isso o script falha alto se o `sips` não existir.
 *
 * 2. Vídeo (.MOV) é ignorado de propósito: a galeria é de fotos.
 */
import sharp from 'sharp'
import fs from 'node:fs/promises'
import { existsSync, mkdtempSync, rmSync } from 'node:fs'
import { execFileSync } from 'node:child_process'
import os from 'node:os'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { OBRAS, RAW_OBRAS, MAX_FOTOS, LARGURAS } from './projects.manifest.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT = path.join(ROOT, 'public', 'img', 'obras')

const AVIF = { quality: 52, effort: 6 }
const WEBP = { quality: 74 }
const JPEG = { quality: 80, mozjpeg: true }

if (!existsSync(RAW_OBRAS)) {
  console.error(`\n  Acervo de obras não encontrado:\n  ${RAW_OBRAS}\n`)
  process.exit(1)
}
try {
  execFileSync('sips', ['--version'], { stdio: 'ignore' })
} catch {
  console.error('\n  `sips` não encontrado. Ele é nativo do macOS e é o que')
  console.error('  decodifica os HEIC do acervo — sem ele metade das fotos fica de fora.\n')
  process.exit(1)
}

const TMP = mkdtempSync(path.join(os.tmpdir(), 'vetra-heic-'))
let convertidas = 0

/** HEIC → JPEG temporário. Outros formatos passam direto. */
function decodificar(arquivo) {
  if (!/\.heic$/i.test(arquivo)) return arquivo
  const destino = path.join(TMP, `h${convertidas++}.jpg`)
  execFileSync('sips', ['-s', 'format', 'jpeg', '-s', 'formatOptions', '95', arquivo, '--out', destino], {
    stdio: 'ignore',
  })
  return destino
}

await fs.mkdir(OUT, { recursive: true })
for (const f of await fs.readdir(OUT).catch(() => [])) {
  if (/\.(avif|webp|jpg)$/.test(f)) await fs.rm(path.join(OUT, f))
}

const saida = []
let totalFotos = 0

for (const obra of OBRAS) {
  const dir = path.join(RAW_OBRAS, obra.pasta)
  if (!existsSync(dir)) {
    console.error(`  ✗ pasta ausente: ${obra.pasta}`)
    process.exitCode = 1
    continue
  }

  const arquivos = (await fs.readdir(dir))
    .filter((f) => /\.(jpe?g|heic|png)$/i.test(f))
    .sort()

  // Seleção por RESOLUÇÃO, não por nome de arquivo. As pastas misturam foto de
  // câmera com print de WhatsApp de 360px, e a ordem alfabética fazia um print
  // virar capa da obra. `sharp.metadata()` lê o cabeçalho sem decodificar, o
  // que funciona até em HEIC — então isso custa quase nada.
  // `destaques` no manifesto continua tendo prioridade sobre o tamanho.
  const medidos = []
  for (const f of arquivos) {
    try {
      const m = await sharp(path.join(dir, f)).metadata()
      medidos.push({ f, area: (m.width ?? 0) * (m.height ?? 0) })
    } catch {
      medidos.push({ f, area: 0 })
    }
  }
  const preferidas = (obra.destaques ?? []).filter((f) => arquivos.includes(f))
  const restantes = medidos
    .filter((m) => !preferidas.includes(m.f))
    .sort((a, b) => b.area - a.area)
    .map((m) => m.f)
  const escolhidas = [...preferidas, ...restantes].slice(0, MAX_FOTOS)

  const fotos = []
  for (let i = 0; i < escolhidas.length; i++) {
    const nome = `${obra.slug}-${String(i + 1).padStart(2, '0')}`
    const origem = decodificar(path.join(dir, escolhidas[i]))

    const base = sharp(origem).rotate()
    const { width: ow, height: oh } = await base.metadata()
    const larguras = LARGURAS.filter((w) => w <= ow)
    if (larguras.length === 0) larguras.push(ow)
    const maior = larguras[larguras.length - 1]

    for (const w of larguras) {
      const r = () => sharp(origem).rotate().resize({ width: w, withoutEnlargement: true })
      await Promise.all([
        r().avif(AVIF).toFile(path.join(OUT, `${nome}-${w}.avif`)),
        r().webp(WEBP).toFile(path.join(OUT, `${nome}-${w}.webp`)),
      ])
    }
    await sharp(origem)
      .rotate()
      .resize({ width: Math.min(800, maior), withoutEnlargement: true })
      .jpeg(JPEG)
      .toFile(path.join(OUT, `${nome}.jpg`))

    fotos.push({ nome, w: maior, h: Math.round((oh / ow) * maior), larguras })
    totalFotos++
  }

  saida.push({ slug: obra.slug, titulo: obra.titulo, categoria: obra.categoria, fotos })
  console.log(`  ✓ ${obra.titulo.padEnd(32)} ${fotos.length} fotos`)
}

rmSync(TMP, { recursive: true, force: true })

const ts = `// GERADO POR scripts/generate-projects.mjs — não editar à mão.
// Rode \`npm run assets:obras\` para atualizar.
//
// Título, categoria e ordem das fotos vêm de scripts/projects.manifest.mjs.
// Textos editoriais (resumo, corpo, alt) ficam em src/content/projects.ts.

export type ObraFoto = { nome: string; w: number; h: number; larguras: number[] }
export type ObraGerada = {
  slug: string
  titulo: string
  categoria: 'cortina-de-vidro' | 'portas-e-divisorias' | 'espelhos' | 'box'
  fotos: ObraFoto[]
}

export const OBRAS_GERADAS: ObraGerada[] = ${JSON.stringify(saida, null, 2)}
`
await fs.writeFile(path.join(ROOT, 'src', 'content', 'projects.generated.ts'), ts, 'utf8')

console.log(`\n  ${saida.length} obras, ${totalFotos} fotos.`)
console.log('  src/content/projects.generated.ts atualizado.\n')
