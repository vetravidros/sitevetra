# VETRA — Soluções em Vidros

Site institucional da VETRA (Fortaleza/CE). Vite + React + TypeScript + Tailwind,
com **pré-renderização estática de todas as rotas** (`vite-react-ssg`).

```bash
npm install
npm run dev          # http://localhost:5173
npm run build        # dist/ com um index.html por rota + sitemap + 404
npm run verify:prerender   # critério de aceite (ver abaixo)
```

---

## Índice

- [Critério de aceite](#critério-de-aceite)
- [Scripts](#scripts)
- [Estrutura](#estrutura)
- [Sistema de design](#sistema-de-design)
- [Conteúdo](#conteúdo)
- [Imagens](#imagens)
- [CTAs e UTM](#ctas-e-utm)
- [Formulário de contato](#formulário-de-contato)
- [SEO](#seo)
- [Deploy na Vercel](#deploy-na-vercel)
- [Antes de publicar](#antes-de-publicar)

---

## Critério de aceite

O ponto técnico central do projeto é não perder SEO ao sair do Next.js: **o
conteúdo textual precisa estar no HTML estático**, não só em `<div id="root">`.

```bash
npm run build && npm run verify:prerender
```

O script `scripts/verify-prerender.mjs` abre o HTML gerado de cada rota e falha
(exit 1) se qualquer uma não tiver: o texto esperado fora de `<script>`,
`<title>`, `meta description`, canonical, `og:image`, JSON-LD `LocalBusiness`,
um `<h1>` e `alt` em toda `<img>`.

Conferência manual equivalente:

```bash
npm run build && open dist/index.html
```

E no navegador, `view-source:` de qualquer rota publicada.

## Scripts

| Script | O que faz |
| --- | --- |
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build + pré-render + `sitemap.xml` + `404.html` |
| `npm run preview` | Serve o `dist/` localmente |
| `npm run typecheck` | `tsc --noEmit` |
| `npm run assets` | Regera as fotos otimizadas a partir do acervo bruto |
| `npm run verify:prerender` | Critério de aceite acima |

## Estrutura

```
scripts/
  assets.manifest.mjs     ← quais fotos entram no site (curadoria)
  generate-assets.mjs     ← AVIF/WebP/JPEG responsivos + ícones + OG
  postbuild.mjs           ← sitemap.xml e 404.html
  verify-prerender.mjs    ← critério de aceite
src/
  content/                ← TODO o conteúdo (pronto para virar CMS)
    site.ts               ← telefone, endereço, horário, redes
    solutions.ts          ← as 3 categorias de solução
    projects.ts           ← portfólio, ficha técnica, galerias
    images.generated.ts   ← GERADO — dimensões reais das fotos
  components/             ← Layout, Header, Footer, CTA, Picture, Seo, ui
  lib/utm.ts              ← montagem de link com UTM e do WhatsApp
  pages/                  ← uma por rota
  routes.tsx              ← rotas + getStaticPaths dos projetos
  styles/index.css        ← tokens do design system
public/
  brand/                  ← logo em SVG (horizontal, símbolo, versões dark)
  img/                    ← GERADO por npm run assets
```

## Sistema de design

Todos os tokens ficam no bloco `@theme` de [`src/styles/index.css`](src/styles/index.css).
Nada de hex solto nos componentes.

### Cor

| Token | Hex | Uso |
| --- | --- | --- |
| `ink` | `#000000` | Texto principal, wordmark |
| `navy` | `#00376B` | Footer, CTA secundário, faixas de destaque |
| `cyan` | `#00AAEB` | CTA primário (WhatsApp), acentos, hover |
| `mist` | `#C0E7EF` | Fundos de seção e cards |
| `white` | `#FFFFFF` | Base dominante — 70%+ das superfícies |

Cinzas intermediários **não existem como token**: saem de `ink` com modificador
de opacidade (`text-ink/60`, `border-ink/10`). Isso mantém a paleta fechada.

#### Regras de contraste (WCAG AA)

A paleta é fixa, mas nem toda combinação passa em AA. As regras abaixo estão
aplicadas no código e não devem ser afrouxadas sem recalcular:

| Combinação | Contraste | Regra |
| --- | --- | --- |
| ciano como **texto sobre branco** | 2.64:1 | ❌ nunca. Sobre branco, o acento é `navy` (11.94:1) |
| **branco sobre ciano** | 2.64:1 | ❌ nunca. O CTA primário é `bg-cyan text-ink` (7.95:1) |
| ciano sobre navy | 4.52:1 | ✅ ok — é assim que o ciano aparece nas faixas escuras |
| `text-ink/60` sobre branco | 5.74:1 | ✅ opacidade mínima para texto pequeno |
| `text-ink/45` sobre branco | 3.36:1 | ✅ **só** em texto grande (headline) |
| `text-white/60` sobre navy | 5.28:1 | ✅ opacidade mínima sobre navy |

O ciano continua sendo o CTA primário e o acento da marca — só que como
**preenchimento**, não como cor de texto sobre fundo claro. O indicador de foco
segue a mesma lógica: navy sobre claro, ciano dentro das faixas navy.

#### Texto sobre foto (hero da home)

Sobre foto nenhuma transparência sobrevive ao AA: o texto do hero é branco puro,
nunca `white/60`. O título é **monocromático** — a hierarquia entre as duas
linhas vem do peso (300 → 400), não de cor: sobre fotografia, cor no título
compete com a própria imagem. A legibilidade vem de
três véus em **`ink`** — preto, não navy: navy tinge a foto inteira de azul e
mata o mar e a areia; preto só escurece.

Os valores de opacidade foram medidos, não escolhidos. Para remedir depois de
trocar a foto: no browser, desenhe a imagem do hero num `<canvas>`, componha os
gradientes por cima (as fórmulas estão comentadas no JSX) e calcule o contraste
contra o resultado em vários pontos ao longo de cada elemento. Duas regras que
mudam o resultado: use o **pior** ponto, não a média, e meça sobre os
retângulos de linha do texto (`Range.getClientRects()`), não sobre a bbox do
bloco — a bbox pega área vazia e reprova elemento que passa.

Medição atual (pior ponto, 1440x900):

| Elemento | Cor | Pior caso | Mínimo |
| --- | --- | --- | --- |
| `h1` | branco | 3.70:1 | 3:1 (texto grande) |
| eyebrow | branco | 7.02:1 | 4.5:1 |
| rótulos da barra técnica | `mist` | 5.70:1 | 4.5:1 |
| claims da barra técnica | branco | 6.31:1 | 4.5:1 |

O `h1` tem a margem mais apertada (3.70 contra 3:1) porque o bloco subiu no
quadro e passou a cair sobre céu e mar. Se a foto ou a altura do hero mudarem,
**este é o número a remedir primeiro**.

Os rótulos da barra usam `mist` e não `white/60`: transparência sobre a faixa
clara da foto derrubava "ORÇAMENTO" para 3.91:1, abaixo do mínimo.

### Tipografia

| Token | Família | Papel |
| --- | --- | --- |
| `font-display` | Montserrat Variable | Headline, eyebrow, botões, nav — sempre com tracking largo, ecoando o wordmark |
| `font-sans` | Inter Variable | Parágrafos e blocos longos |

Escala fluida (clamp), nomeada pelo papel e não pelo tamanho:
`text-hero`, `text-title`, `text-heading`, `text-lede`, `text-eyebrow`.
Tracking: `tracking-wordmark` (0.28em, eyebrows) e `tracking-label` (0.18em,
botões e nav).

Headlines usam peso **light** em corpo grande; a segunda linha vai em
`text-ink/45` sobre fundo claro e em peso 400 sobre foto — o contraste de peso
faz o trabalho que a cor não deve fazer.

### Ritmo e movimento

`py-section` (7rem) é o respiro padrão entre seções. `container-vetra` é a
única utilitária de largura (max 84rem, gutter crescente por breakpoint).
Transições usam `ease-glass`.

### Rolagem

O scroll suave é do [Lenis](https://github.com/darkroomengineering/lenis),
encapsulado em [`src/lib/smooth-scroll.ts`](src/lib/smooth-scroll.ts). Três coisas
importam ali:

- **Só roda no cliente.** O HTML pré-renderizado não depende disso e a rolagem
  nativa continua funcionando sem JS (`html:not(.lenis) { scroll-behavior: smooth }`
  é o plano B — os dois juntos brigariam pelo scroll).
- **`prefers-reduced-motion: reduce` desliga o Lenis por completo**, e religa se a
  pessoa mudar a preferência sem recarregar.
- **Nada fala com `window.scrollTo` direto.** Quem precisa comandar a rolagem usa
  `scrollToTop()` (troca de rota) e `setScrollLocked()` (menu mobile aberto) —
  senão a posição interna do Lenis dessincroniza da real.

Toque continua nativo (`syncTouch: false`): o Lenis suaviza roda e trackpad, sem
brigar com o gesto de voltar do iOS.

### Elemento-assinatura

`.glass-stripes` reproduz as listras diagonais do símbolo da marca. Corre em
opacidade baixa (4–5%) **apenas sobre as faixas navy**, onde o fundo é cor
chapada. Não entra sobre fotografia: sobre mobiliário de primeiro plano que não
tem vidro na frente, o padrão lê como falha de textura, não como reflexo. `.rule-cyan` é a régua fina que abre cada seção.

## Conteúdo

Sem CMS no MVP. Tudo em `src/content/*.ts`, tipado, com a mesma forma que um
CMS entregaria — trocar a fonte depois não exige reescrever componente.

- **Adicionar um projeto**: novo objeto em `src/content/projects.ts`. A rota
  `/projetos/<slug>` passa a ser pré-renderizada automaticamente (`getStaticPaths`
  em `src/routes.tsx` lê a mesma lista).
- **Mudar telefone, horário ou endereço**: só `src/content/site.ts`. O schema.org,
  o footer, os links de WhatsApp e as meta tags leem daí.

## Imagens

O acervo bruto **não vive no repositório**. O caminho é declarado em
`scripts/assets.manifest.mjs` (`RAW_DIR`, hoje apontando para
`~/Claude/SiteVetra/fotos`). A exceção é o hero, que vive em `fotos-origem/`
dentro do projeto.

### Hero

O topo da home ocupa a tela inteira e usa **art direction**: duas fotos
diferentes, não a mesma redimensionada.

| Arquivo | Dimensão ideal | Mínimo | Proporção |
| --- | --- | --- | --- |
| `fotos-origem/hero-desktop.png` (ou `.jpg`) | 3200 × 1800 | 2560 × 1440 | 16:9 |
| `fotos-origem/hero-mobile.png` (ou `.jpg`) | 1600 × 2400 | 1200 × 1800 | 2:3 |

Salvar com esses nomes e rodar `npm run assets`. Se um deles não existir, o
gerador avisa e cai no `fallback` declarado no manifesto — o site nunca quebra
por falta de foto.

**Composição:** o texto ocupa o terço inferior esquerdo e o menu a faixa
superior; as duas regiões precisam de área calma na foto. O detalhe bom
(esquadria, vista) rende mais no centro/direita.

**Ao trocar a foto do hero, remedir o contraste.** Os véus escuros em
`src/pages/Home.tsx` foram calibrados sobre os pixels da foto atual, não
escolhidos no olho — o procedimento está em `README` › Sistema de design ›
Regras de contraste.

```bash
npm run assets
```

Isso gera, para cada foto do manifesto: AVIF + WebP nas larguras 480/800/1200/1600
e um JPEG de fallback, além de `favicon`, `apple-touch-icon` e a imagem de Open
Graph. Também reescreve `src/content/images.generated.ts` com as dimensões reais
(width/height nas tags = zero layout shift).

O gerador **nunca faz upscale**: uma foto de origem pequena simplesmente não
recebe as variantes maiores, e o `srcset` só lista o que existe. Por isso o
manifesto tem uma regra de curadoria: originais com menos de ~900px de largura
só entram em célula pequena de galeria, nunca em capa ou hero.

Trocar uma foto = trocar o `src` no manifesto e rodar `npm run assets`.

## CTAs e UTM

A hierarquia é a mesma em todas as páginas:

1. **WhatsApp** — primário (botão no header + botão flutuante sempre visível)
2. **Projetos** — secundário
3. **Perfil no Google / Instagram / telefone** — terciário

O componente `<CTA>` exige `utm` em toda instância:

```tsx
<CTA utm={{ campaign: 'home', content: 'hero-whatsapp' }}>Falar com a VETRA</CTA>
```

`utm_source=site` e `utm_medium=cta` são os defaults (`src/lib/utm.ts`). Além dos
parâmetros na URL, o código da campanha entra **dentro da mensagem** do WhatsApp
(`(ref: home/hero-whatsapp)`) — assim a origem do lead aparece na própria conversa
mesmo quando o clique não chega ao analytics. Todo clique também dispara um evento
`cta_click` no Vercel Analytics.

O botão flutuante fica acima da safe-area e o `<main>` reserva `pb-28` no mobile,
então ele nunca cobre conteúdo.

## Formulário de contato

Validação client-side, honeypot anti-spam, sem backend próprio.

```bash
cp .env.example .env.local
# VITE_FORM_ENDPOINT=https://formspree.io/f/xxxxxxxx
```

**Sem a variável definida o formulário continua funcionando**: ele monta a
mensagem com os campos preenchidos e abre o WhatsApp. O MVP nunca fica sem canal
de retorno. Na Vercel, defina `VITE_FORM_ENDPOINT` em Settings → Environment
Variables (é uma variável de build, exige redeploy).

## SEO

- Meta tags por rota via `<Seo>` (`src/components/Seo.tsx`) — title, description,
  canonical, Open Graph completo e Twitter card.
- JSON-LD `LocalBusiness` em todas as páginas (via `Layout`) e `BreadcrumbList`
  nas páginas de projeto.
- `sitemap.xml` gerado **a partir do HTML realmente presente no `dist/`**, então
  nunca lista rota inexistente. Canonical e sitemap usam exatamente a mesma URL.
- `robots.txt` em `public/`.
- Imagens em AVIF/WebP com `loading="lazy"` (exceto a do topo, `priority`),
  `width`/`height` sempre presentes.

Trocar o domínio: `site.url` em `src/content/site.ts`, a linha `Sitemap:` em
`public/robots.txt` e, opcionalmente, `SITE_URL` no ambiente de build.

## Deploy na Vercel

O `vercel.json` já está configurado (build estático, `cleanUrls`, cache imutável
para `/assets`, `/img` e `/brand`, headers de segurança).

**Pela interface:** Add New → Project → importe o repositório. A Vercel lê o
`vercel.json`; não é preciso escolher framework. Confirme:

- Build Command: `npm run build`
- Output Directory: `dist`
- Install Command: `npm install`

**Pela CLI:**

```bash
npx vercel        # preview
npx vercel --prod # produção
```

Depois do primeiro deploy: aponte o domínio em Settings → Domains e cadastre o
`sitemap.xml` no Google Search Console.

> O Vercel Analytics já está instrumentado (`@vercel/analytics`). Basta habilitar
> Analytics no painel do projeto.

## Antes de publicar

Itens que dependem de confirmação da VETRA — o site está completo, mas estes
dados foram preenchidos com o que havia disponível:

- [ ] **E-mail** `contato@vetravidros.com.br` (`src/content/site.ts`) — confirmar
      se existe e está monitorado.
- [ ] **Horário de atendimento** — hoje seg–sex 8h–18h, sáb 8h–12h.
- [ ] **Fichas técnicas dos projetos** (`src/content/projects.ts`) — espessura,
      tipo de vidro, ferragem, ano e local foram escritos como conteúdo realista
      de referência. Revisar projeto por projeto antes de publicar.
- [ ] **Autoria dos projetos** — todos estão como "projeto direto com o cliente".
      Onde houver arquiteto responsável, preencher `spec.architect` e pedir
      autorização de publicação.
- [ ] **Instagram** — o handle `@vetravidros` está assumido em `site.social`.
- [x] ~~Prazo de retorno de 48h úteis na página /arquitetos~~ — removido em
      13/08/2026: a VETRA não sustenta esse SLA hoje. Só volta se virar
      compromisso real.
- [ ] **Endereço** — o site trabalha com "atendimento agendado", sem endereço de
      rua. Se houver showroom, adicionar em `site.address` e no JSON-LD.
