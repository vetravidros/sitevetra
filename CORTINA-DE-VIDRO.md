# Página Cortina de Vidro — dossiê

> Reúne tudo que foi usado para montar `/cortina-de-vidro`: de onde veio cada
> informação, o que foi confirmado, o que foi suavizado por falta de fonte, e
> o que ainda falta. Não é o mapa de textos para edição — isso é o
> [TEXTOS.md](TEXTOS.md), seção 4. Este arquivo é o "porquê" por trás do que
> está lá.
>
> **Sincronizado com o commit `24cf7f0` (19/08/2026).**

---

## 1. Objetivo da página

Landing page para tráfego pago (Google/Meta Ads), separada do funil
institucional do site — mas também presente no menu principal
("Cortina de Vidro", entre "Projetos" e "Arquitetos"), para quem já navega o
site encontrar a categoria com facilidade.

- **URL**: `/cortina-de-vidro`
- **Conversão**: um único CTA, WhatsApp com mensagem pré-preenchida
  ("Olá, VETRA. Quero orçamento de cortina de vidro para minha
  varanda/sacada."). Sem formulário — decisão explícita do André para não
  criar fricção.
- **SEO**: title "Cortina de Vidro para Varanda em Fortaleza", description
  focada em conversão local.

Criada em `6cafd83` (16/08/2026), evoluída em mais 7 commits desde então.

---

## 2. Estrutura da página (ordem real, de cima para baixo)

1. **Hero** — carrossel de fotos, H1 + lede + CTA
2. **Onde atendemos** — linha de texto com os bairros-alvo da campanha (nova, 19/08/2026)
3. **Por que fechar a varanda** — 3 blocos (conforto, espaço, silêncio)
4. **O sistema** — 6 características técnicas com ícone
5. **Como funciona** — processo em 5 passos
6. **Galeria** — 6 fotos de obras executadas
7. **Valorização do imóvel** — 5 benefícios com ícone + fechamento qualitativo
8. **Perguntas frequentes** — accordion de 5 perguntas + JSON-LD `FAQPage` (nova, 19/08/2026)
9. **Fechamento** — CTA final de WhatsApp

---

## 3. Hero: carrossel de fotos

Componente próprio, [`src/components/HeroCarousel.tsx`](src/components/HeroCarousel.tsx)
(criado em `93721d2`, reutilizado no hero da Home também). Troca de foto a
cada 5s com fade suave, desliga sozinho se só houver 1 foto, e respeita
`prefers-reduced-motion` (não gira para quem pediu menos movimento).

**Fotos no carrossel hoje** (5, todas reais, das obras do André):

| Ordem | Nome do asset | Obra |
|---|---|---|
| 1 (hero fixo) | `cortina-vidro-hero` | Reserva do Parque |
| 2 | `cortina-vidro-ana-amelia` | Ana Amélia Boulevard |
| 3 | `cortina-vidro-unique-meireles` | Unique Meireles |
| 4 | `cortina-vidro-portal-de-malaga` | Portal de Malaga |
| 5 | `cortina-vidro-manhattan-beach` | Manhattan Beach Riviera |

**Pendente**: 2 fotos novas (Ana Amélia Boulevard — 2ª foto, e Maison de la
Musique) foram enviadas em `.HEIC`, mas nenhuma ferramenta de conversão
disponível localmente (`sips`, `qlmanage`, `sharp`) conseguiu abrir esses
arquivos específicos — diferente das fotos anteriores, que converteram sem
problema. Aguardando reenvio em JPEG. Mais 4 fotos foram coladas direto na
mensagem do chat (sem `@caminho`) — nesse formato só chega o conteúdo
visual, não o arquivo; para entrarem no site precisam ser enviadas como
anexo de arquivo.

**Ajustes de exibição** (`9f8d0e6`): as fotos são retrato (celular), e a
banda do hero é baixa e larga — o corte automático (`object-cover`) estava
cortando demais e os véus escureciam a cena inteira. Corrigido em duas
frentes:
- Seção mais alta (`min-h-[560px] md:min-h-[680px]`, antes só padding),
  sobra mais respiro vertical para a foto.
- Véus mais claros: removido um véu plano que cobria a imagem inteira,
  reduzida a opacidade do véu direcional (esquerda→direita, onde fica o
  texto) e do véu de topo.

**Contraste medido** (não só no olho — script rodado no browser, amostrando
pixel real por trás do texto e compondo os véus matematicamente): pior ponto
8.08:1 (H1, que precisa de só 3:1), resto entre 9.5:1 e 13.8:1. WCAG AA
passa com folga.

---

## 4. "O sistema" — 6 características com ícone

Ícones em SVG inline, traço fino consistente, ver `icons` em
`CortinaDeVidro.tsx` (11 glifos ao todo, sem depender de pacote de ícones
externo).

| Característica | Confirmação |
|---|---|
| Mais estável (apoiado na base) | Fato técnico do sistema |
| Vista sem interrupções | Fato técnico do sistema |
| Baixa manutenção | Fato técnico do sistema |
| **Testado e aprovado pelo Instituto Falcão Bauer** | ⚠︎ **Confirmado pelo André por escrito** (18/08/2026) — o sistema que a VETRA usa passou por esse ensaio de pressão e vento. Se isso deixar de ser verdade, precisa sair do site. |
| Resistente à corrosão (maresia) | Fato técnico do sistema |
| Acabamento de alto padrão | Descrição de design |

### Origem do conteúdo — nota de integridade

O André mandou 3 prints de material de divulgação de **outra empresa**
(marca "**Fine Glass**" visível nas imagens) como referência: um resumo do
processo de atendimento, uma ficha técnica de produto (que citava "95% menos
manutenção" e "7 anos de garantia" — números não usados aqui, ver §6) e o
mesmo processo em fonte maior.

O que foi feito com isso:
- **Reescrito com as palavras da VETRA** — nenhum texto foi copiado
  literalmente do material de terceiro.
- **A marca "Fine Glass" não aparece em nenhum lugar do site.**
- A afirmação sobre o Instituto Falcão Bauer só entrou depois de confirmação
  explícita do André de que é real para o sistema da VETRA — não foi
  assumido por estar no material de referência (esse mesmo instituto já
  tinha aparecido antes num catálogo de *outro* fabricante, "Kit Sacada
  Certa" — reaproveitar uma certificação de terceiro sem confirmação seria
  fazer uma alegação técnica falsa em nome da VETRA).

---

## 5. "Como funciona" — processo em 5 passos

Adaptado do mesmo material de referência (que descrevia um processo
genérico de atendimento em vidraçaria: visita técnica → projeto → produção →
instalação → entrega). Reescrito na voz da VETRA, sem a marca do
concorrente. É uma estrutura comum ao setor, não uma criação exclusiva do
material original.

---

## 6. Valorização do imóvel — 5 benefícios + fechamento

Também adaptado do material de referência, que trazia um texto sobre o
mercado imobiliário e a estatística **"valorização de até 20%"** — **sem
fonte citada**.

### Decisão de integridade

Publicar um número específico sem saber de onde veio, no site oficial da
VETRA, é risco: qualquer pessoa pode perguntar a fonte, e não haveria
resposta. Perguntei ao André como preferia tratar — ele escolheu **suavizar**
em vez de manter o número. O fechamento da seção ficou qualitativo:

> "Imóveis com varanda fechada e bem aproveitada tendem a se destacar no
> anúncio e vender com mais agilidade."

Sem o "até 20%".

---

## 7. Galeria — 6 fotos de obras

4 fotos reais das obras do André (Ana Amélia Boulevard, Unique Meireles,
Portal de Malaga, Manhattan Beach Riviera — as mesmas 4 do carrossel do
hero, reaproveitadas) + 2 fotos provisórias da categoria "Cortina de Vidro"
já publicadas em `solutions.ts` (`beira-mar-01`, `beira-mar-02`), até mais
fotos reais chegarem.

---

## 8. Pipeline de imagens — notas técnicas

- Fotos de obra vêm de `fotos-origem/cortina-vidro-*.jpg` (tracked no git),
  processadas por `npm run assets` → `public/img/` +
  `src/content/images.generated.ts`.
- As 4 fotos reaproveitadas no hero (Ana Amélia, Unique Meireles, Portal de
  Malaga, Manhattan Beach) usam `widths: HERO_WIDTHS` no manifesto — variam
  até 2560px, porque servem tanto a galeria (célula pequena) quanto o hero
  em tela cheia.
- **Bug de rotação corrigido em `842daff`**: `sips -r 90` rotaciona os
  pixels mas não limpa a tag EXIF de orientação — o pipeline (que já faz
  auto-rotate por EXIF) girava de novo, duplicando a rotação. A correção foi
  regenerar as fotos direto do arquivo original via `sharp`, que aplica a
  orientação uma única vez.
- HEIC de iPhone geralmente converte bem com `sips -s format jpeg`, mas
  **nem sempre** — alguns arquivos (as 2 pendentes de §3) dão
  `Error 13: Cannot extract image from file` em todas as ferramentas locais
  testadas (`sips`, `qlmanage`; `sharp` não tem suporte a HEIC nesta
  instalação). Quando isso acontece, a solução é pedir reenvio em JPEG.

---

## 9. Preparação para campanha paga (Google Ads) — 19/08/2026

O André pediu ajustes de conteúdo/SEO para a campanha de tráfego pago que
começa essa semana, com uma lista explícita do que **não** podia mudar:
links de WhatsApp e UTMs, cores da marca, tipografia, tom de voz do hero.
Tudo abaixo é só texto/metadado, sem tocar em layout ou componentes visuais
existentes.

- **Title tag** — tinha "Fortaleza" duas vezes ("...em Fortaleza ·
  VETRA Soluções em Vidros · Fortaleza"). A causa não estava nesta página:
  o componente [`Seo.tsx`](src/components/Seo.tsx) sempre completa o título
  com `· {marca} · Fortaleza` para toda página que não é a home — e o
  `title` desta página já dizia "Fortaleza". Criei um campo novo e opcional,
  `titleOverride`, que substitui esse comportamento só quando presente;
  nenhuma outra página do site foi afetada (conferido no HTML gerado das 4
  páginas restantes). Agora o title, og:title e twitter:title saem como
  "Cortina de Vidro para Varanda em Fortaleza | VETRA Soluções em Vidros".
- **"Onde atendemos"** — linha nova logo abaixo do hero, com os bairros que
  a campanha está mirando (Aldeota, Meireles, Cocó, Dionísio Torres,
  Guararapes, Eusébio, Aquiraz). Texto visível (não em alt de imagem),
  pedido explícito do André.
- **Prova concreta** — trocou linguagem genérica por especificação real:
  "materiais de alta qualidade" virou "vidro temperado ou laminado de 8, 10
  ou 12mm e perfis de alumínio"; "suporte pós-venda" virou "garantia de 7
  anos do fabricante nos trilhos + 24 meses de garantia da VETRA sobre a
  instalação". Diferente das promessas suavizadas antes nesta página
  (Instituto Falcão Bauer, valorização de imóvel), esses dois números vieram
  prontos do André como dado da própria empresa — não inferidos de material
  de terceiro. Ainda são promessa pública de garantia, então ficaram
  marcadas `⚠︎` no TEXTOS.md do mesmo jeito.
- **FAQ** — seção nova com 5 perguntas, entre "Além do conforto" e o
  fechamento. Sem componente de accordion no projeto — usei `<details>` /
  `<summary>` nativo do HTML (sem JS, sem dependência nova, texto de cada
  resposta presente no HTML mesmo fechado). Cada resposta também vai como
  JSON-LD `FAQPage` no `<head>`, seguindo o mesmo padrão de
  `<JsonLd data={...} />` já usado em `ProjetoDetalhe.tsx` (breadcrumb) e no
  `Layout.tsx` (LocalBusiness, presente em toda página).
- **Checagem de performance** — ver §8 acima (pipeline de imagens) e a nota
  de LCP abaixo. Resumo: a 1ª foto do carrossel (Manhattan Beach) carrega
  `loading="eager" fetchpriority="high"`; as outras 4 saem
  `loading="lazy"` — na prática, como todas as 5 ficam dentro da área do
  hero (só a ativa em `opacity-100`), o navegador provavelmente busca as 5
  cedo de qualquer forma (o atributo `lazy` decide por interseção com a
  viewport, não por opacidade CSS), mas a prioridade de rede
  (`fetchpriority`) ainda garante que a foto do LCP não disputa banda com as
  outras 4. AVIF/WebP com fallback JPEG já geradas para todas; nenhum
  formato não-otimizado em uso. Nenhum ajuste de código feito aqui — é
  reporte, não correção, como pedido.

---

## 10. Histórico de commits desta página

```
24cf7f0 Troca drop-shadow único por text-shadow em camadas no hero de Cortina de Vidro
751a269 Corrige o bug real da mancha esbranquiçada no hero: opacidade no wrapper
cffd9a2 Volta o carrossel do hero em Cortina de Vidro com 5 fotos boas
80dd529 Tira as 4 fotos com neblina óptica do hero de Cortina de Vidro
67ea19b Remove o glass-stripes do hero em Cortina de Vidro
fbaa7b0 Aplica filtro de contraste/saturação nas fotos do hero em Cortina de Vidro
f49a2f8 Cria dossiê da página Cortina de Vidro
92959b9 Completa a galeria de Cortina de Vidro com 6 fotos, 4 delas reais
9f8d0e6 Reduz o véu do hero em Cortina de Vidro, foto mais visível
79e494e Adiciona seções de sistema, processo e valorização em Cortina de Vidro
93721d2 Adiciona carrossel automático nos heroes da Home e da Cortina de Vidro
b6bf1f9 Troca o lede do hero em Cortina de Vidro
fa34c92 Tira "vão livre" da segunda linha do H1 em Cortina de Vidro
842daff Corrige a rotação duplicada de 2 fotos da galeria Cortina de Vidro
d6bf994 Troca as fotos do hero e de 2 cards da galeria em Cortina de Vidro
6cafd83 Cria a página Cortina de Vidro para tráfego pago
```

Para conferir se este dossiê está desatualizado:
`git log --oneline 24cf7f0..HEAD -- src/pages/CortinaDeVidro.tsx`.
