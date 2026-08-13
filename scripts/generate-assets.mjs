/**
 * Pipeline de imagens da VETRA.
 *
 *   npm run assets
 *
 * Lê o acervo bruto (JPEG de origem, fora do repo), gera derivados responsivos
 * em AVIF + WebP + JPEG de fallback dentro de public/img/, e escreve
 * src/content/images.generated.ts com as dimensões reais de cada imagem
 * (necessário para reservar espaço no layout e evitar CLS).
 *
 * Também gera o favicon PNG, o apple-touch-icon e a imagem de Open Graph.
 */
import sharp from 'sharp'
import fs from 'node:fs/promises'
import { existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { RAW_DIR, WIDTHS, IMAGES, HERO } from './assets.manifest.mjs'

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const OUT_IMG = path.join(ROOT, 'public', 'img')
const OUT_BRAND = path.join(ROOT, 'public', 'brand')

const AVIF = { quality: 55, effort: 6 }
const WEBP = { quality: 76 }
const JPEG = { quality: 82, mozjpeg: true }

if (!existsSync(RAW_DIR)) {
  console.error(`\n  Acervo bruto não encontrado em:\n  ${RAW_DIR}\n`)
  console.error('  Ajuste RAW_DIR em scripts/assets.manifest.mjs.\n')
  process.exit(1)
}

await fs.mkdir(OUT_IMG, { recursive: true })

// limpa derivados antigos para que fotos removidas do manifesto não fiquem órfãs
for (const f of await fs.readdir(OUT_IMG).catch(() => [])) {
  if (/\.(avif|webp|jpg)$/.test(f)) await fs.rm(path.join(OUT_IMG, f))
}

/** @type {Record<string, {w:number,h:number,widths:number[]}>} */
const meta = {}

/** `src` absoluto vale como está; relativo resolve dentro do acervo bruto. */
const resolve = (src) => (path.isAbsolute(src) ? src : path.join(RAW_DIR, src))

for (const { out, src, widths: only, fallback } of IMAGES) {
  let input = resolve(src)

  if (!existsSync(input) && fallback) {
    input = resolve(fallback)
    console.warn(`  … ${out}: usando provisória (${path.basename(input)})`)
  }

  if (!existsSync(input)) {
    console.error(`  ✗ ausente: ${src}`)
    process.exitCode = 1
    continue
  }

  const base = sharp(input).rotate() // respeita EXIF
  const { width: ow, height: oh } = await base.metadata()
  const widths = (only ?? WIDTHS).filter((w) => w <= ow)
  if (widths.length === 0) widths.push(ow)
  const largest = widths[widths.length - 1]

  meta[out] = { w: largest, h: Math.round((oh / ow) * largest), widths }

  for (const w of widths) {
    const resized = () => sharp(input).rotate().resize({ width: w, withoutEnlargement: true })
    await Promise.all([
      resized().avif(AVIF).toFile(path.join(OUT_IMG, `${out}-${w}.avif`)),
      resized().webp(WEBP).toFile(path.join(OUT_IMG, `${out}-${w}.webp`)),
    ])
  }
  // fallback universal (usado no <img src>) — navegadores sem AVIF/WebP são
  // residuais, então o fallback fica capado em 800px para não pesar no repo.
  await sharp(input).rotate().resize({ width: Math.min(800, largest), withoutEnlargement: true })
    .jpeg(JPEG).toFile(path.join(OUT_IMG, `${out}.jpg`))

  console.log(`  ✓ ${out}  ${widths.join('/')}`)
}

// ---------------------------------------------------------------- ícones
const simbolo = path.join(OUT_BRAND, 'vetra-simbolo.svg')
await sharp(simbolo, { density: 384 }).resize(180, 180, {
  fit: 'contain', background: '#ffffff',
}).flatten({ background: '#ffffff' }).png().toFile(path.join(ROOT, 'public', 'apple-touch-icon.png'))

await sharp(simbolo, { density: 384 }).resize(512, 512, {
  fit: 'contain', background: '#ffffff',
}).flatten({ background: '#ffffff' }).png().toFile(path.join(ROOT, 'public', 'icon-512.png'))
console.log('  ✓ ícones')

// ------------------------------------------------------------ open graph
// Foto do hero escurecida + logo horizontal centralizado, 1200x630.
{
  const hero = IMAGES.find((i) => i.out === HERO)
  const heroSrc = [hero.src, hero.fallback].filter(Boolean).map(resolve).find(existsSync)
  const photo = await sharp(heroSrc)
    .rotate().resize(1200, 630, { fit: 'cover', position: 'attention' })
    .modulate({ brightness: 0.62 })
    .toBuffer()

  const logo = await sharp(path.join(OUT_BRAND, 'vetra-horizontal-dark.svg'), { density: 300 })
    .resize({ width: 620 }).png().toBuffer()

  const veil = Buffer.from(
    `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
       <rect width="1200" height="630" fill="#00376B" opacity="0.42"/>
     </svg>`,
  )

  await sharp(photo)
    .composite([{ input: veil, blend: 'over' }, { input: logo, gravity: 'centre' }])
    .png()
    .toFile(path.join(ROOT, 'public', 'og-vetra.png'))
  console.log('  ✓ og-vetra.png')
}

// ------------------------------------------------- manifesto p/ o código
const banner = `// GERADO POR scripts/generate-assets.mjs — não editar à mão.
// Rode \`npm run assets\` para atualizar.

/** w/h = dimensões da MAIOR variante gerada; widths = variantes disponíveis. */
export type ImageMeta = { w: number; h: number; widths: number[] }

export type ImageName = keyof typeof IMAGE_META

export const IMAGE_META = ${JSON.stringify(meta, null, 2)} satisfies Record<string, ImageMeta>
`
await fs.writeFile(path.join(ROOT, 'src', 'content', 'images.generated.ts'), banner, 'utf8')
console.log('\n  src/content/images.generated.ts atualizado.\n')
