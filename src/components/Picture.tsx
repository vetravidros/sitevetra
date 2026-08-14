import { IMAGE_META, type ImageName } from '@/content/images.generated'

type Props = {
  /** Nome gerado por `npm run assets` (ver scripts/assets.manifest.mjs). */
  name: ImageName
  /** Obrigatório: descreve o conteúdo da foto, não o nome do arquivo. */
  alt: string
  /**
   * Art direction: corte alternativo servido abaixo de 768px.
   * Não é a mesma foto reduzida — é outro enquadramento, para o assunto não
   * sumir no corte lateral de uma tela estreita.
   */
  mobile?: ImageName
  /** Ex.: "(min-width: 768px) 50vw, 100vw". */
  sizes: string
  /** Proporção da moldura (a foto preenche com object-cover). */
  ratio?: '3/4' | '4/3' | '1/1' | '3/2' | '16/9' | 'auto'
  /**
   * Preenche o elemento posicionado mais próximo em vez de criar a própria
   * moldura. É o modo do hero, que tem altura definida pela seção.
   * Sem isso o wrapper fica `relative` e ignora qualquer `absolute` externo.
   */
  fill?: boolean
  /** true na imagem do primeiro dobra — desliga lazy e prioriza o fetch. */
  priority?: boolean
  className?: string
  imgClassName?: string
}

const ratioClass: Record<NonNullable<Props['ratio']>, string> = {
  '3/4': 'aspect-3/4',
  '4/3': 'aspect-4/3',
  '1/1': 'aspect-square',
  '3/2': 'aspect-3/2',
  '16/9': 'aspect-video',
  auto: '',
}

function srcset(name: string, widths: number[], ext: string) {
  return widths.map((w) => `/img/${name}-${w}.${ext} ${w}w`).join(', ')
}

/** Mesmo srcset do componente, para montar <link rel="preload"> no <head>. */
export function imageSrcSet(name: ImageName, ext: 'avif' | 'webp' = 'avif') {
  return srcset(name, IMAGE_META[name].widths, ext)
}

/**
 * Foto responsiva em AVIF → WebP → JPEG.
 *
 * O srcset só lista larguras que realmente existem no disco: o gerador nunca
 * faz upscale, então uma foto de origem pequena entrega o que tem em vez de
 * apontar para um arquivo inexistente.
 */
export function Picture({
  name,
  alt,
  mobile,
  sizes,
  ratio = '3/4',
  fill = false,
  priority = false,
  className = '',
  imgClassName = '',
}: Props) {
  const meta = IMAGE_META[name]
  const metaMobile = mobile ? IMAGE_META[mobile] : null

  return (
    <div
      className={`overflow-hidden bg-mist/60 ${
        fill ? 'absolute inset-0' : `relative ${ratioClass[ratio]}`
      } ${className}`}
    >
      <picture>
        {/* as <source> com media vêm primeiro: o browser usa a primeira que casa */}
        {mobile && metaMobile && (
          <>
            <source
              media="(max-width: 767px)"
              type="image/avif"
              srcSet={srcset(mobile, metaMobile.widths, 'avif')}
              sizes={sizes}
            />
            <source
              media="(max-width: 767px)"
              type="image/webp"
              srcSet={srcset(mobile, metaMobile.widths, 'webp')}
              sizes={sizes}
            />
          </>
        )}
        <source type="image/avif" srcSet={srcset(name, meta.widths, 'avif')} sizes={sizes} />
        <source type="image/webp" srcSet={srcset(name, meta.widths, 'webp')} sizes={sizes} />
        <img
          src={`/img/${name}.jpg`}
          alt={alt}
          width={meta.w}
          height={meta.h}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      </picture>
    </div>
  )
}

/* --------------------------------------------------------------------------
   Fotos de obra

   Vivem em /img/obras/, vêm de outro pipeline (`npm run assets:obras`) e
   carregam as próprias dimensões — por isso não passam pelo IMAGE_META, que
   indexa só os assets fixos do site (hero, capas de solução).
   -------------------------------------------------------------------------- */

export type FotoObra = { nome: string; w: number; h: number; larguras: number[] }

export function ProjectPicture({
  photo,
  alt,
  sizes,
  ratio = '3/4',
  priority = false,
  className = '',
  imgClassName = '',
}: {
  photo: FotoObra
  alt: string
  sizes: string
  ratio?: NonNullable<Props['ratio']>
  priority?: boolean
  className?: string
  imgClassName?: string
}) {
  const base = `obras/${photo.nome}`

  return (
    <div className={`relative overflow-hidden bg-mist/60 ${ratioClass[ratio]} ${className}`}>
      <picture>
        <source type="image/avif" srcSet={srcset(base, photo.larguras, 'avif')} sizes={sizes} />
        <source type="image/webp" srcSet={srcset(base, photo.larguras, 'webp')} sizes={sizes} />
        <img
          src={`/img/${base}.jpg`}
          alt={alt}
          width={photo.w}
          height={photo.h}
          sizes={sizes}
          loading={priority ? 'eager' : 'lazy'}
          fetchPriority={priority ? 'high' : 'auto'}
          decoding={priority ? 'sync' : 'async'}
          className={`absolute inset-0 h-full w-full object-cover ${imgClassName}`}
        />
      </picture>
    </div>
  )
}
