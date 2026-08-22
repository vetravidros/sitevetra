# Mapa de textos — site VETRA

Todo o texto visível do site, em um lugar só.

**Como usar:** edite o texto **depois do `→`**. Não mexa no ID (`[home.hero.h1]`)
— é por ele que eu encontro o trecho no código. Pode apagar as seções que não
vai alterar; só me devolva o que mudou.

Marcações:
- `SEO` — aparece no Google e no compartilhamento, não na tela. Título ideal até
  ~60 caracteres; descrição entre 120 e 155.
- `ALT` — descrição da foto para leitor de tela e para o Google. Descreve o que
  se vê, não o nome do arquivo.
- `⚠︎` — texto que promete algo (prazo, condição). Só mantenha se for sustentável.

Onde cada bloco vive hoje, se quiser conferir: `src/pages/*.tsx`,
`src/components/{Header,Footer}.tsx` e `src/content/*.ts`.

> **Sincronizado com o commit `6cafd83` (17/08/2026).** Este arquivo é uma
> cópia manual do que está no código — ele não se atualiza sozinho. Se o site
> mudou depois desse commit e ninguém editou aqui, o mapa está atrasado. Para
> conferir: `git log --oneline 6cafd83..HEAD -- src/`. Se essa lista não estiver
> vazia, peça a atualização antes de usar o mapa como referência.

Blocos citados como `> nota` são avisos meus sobre o texto — inconsistências ou
promessas a confirmar. Não são texto do site.

---

## 0. Global — aparece em todas as páginas

### Navegação (topo e rodapé)

- `[nav.home]` → Início
- `[nav.projetos]` → Projetos
- `[nav.cortina-de-vidro]` → Cortina de Vidro
- `[nav.arquitetos]` → Arquitetos
- `[nav.sobre]` → Sobre
- `[nav.contato]` → Contato

### Botões de WhatsApp

- `[cta.header]` → WhatsApp
- `[cta.menu-mobile]` → Falar no WhatsApp
- `[cta.mensagem-padrao]` (texto já preenchido ao abrir a conversa) → Olá, VETRA. Vim pelo site e gostaria de falar sobre um projeto em vidro.

### Acessibilidade

- `[a11y.skip]` → Pular para o conteúdo

### Rodapé

- `[footer.descricao]` → Arquitetura em vidro sob medida. Especificação, medição técnica e execução em Fortaleza e Região Metropolitana.
- `[footer.cta]` → Falar no WhatsApp
- `[footer.col.navegacao]` → Navegação
- `[footer.col.solucoes]` → Soluções
- `[footer.col.contato]` → Contato
- `[footer.google]` → Perfil da Empresa no Google
- `[footer.copyright]` → © 2026 VETRA Soluções em Vidros. CNPJ 66.861.917/0001-99. Fortaleza / CE.
- `[site.cnpj]` (`src/content/site.ts`) → 66.861.917/0001-99 — também entra no JSON-LD (`taxID`)

### Dados da empresa (`src/content/site.ts`)

Mudar aqui muda em todo lugar: rodapé, contato, Google e meta tags.

- `[site.positioning]` → Arquitetura em vidro sob medida
- `[site.telefone]` → (85) 99178-5809
- `[site.email]` → contato@vetravidros.com.br
- `[site.endereco.nota]` → Atendimento técnico agendado em Fortaleza e Região Metropolitana
- `[site.horario.1]` → Segunda a sexta · 08h — 18h
- `[site.horario.2]` → Sábado · 08h — 12h
- `[site.horario.3]` → Domingo · Fechado
- `[site.areas]` → Fortaleza · Eusébio · Aquiraz · Caucaia · Região Metropolitana de Fortaleza

---

## 1. Home (`/`)

### SEO

- `[home.seo.title]` `SEO` → VETRA — Arquitetura em vidro sob medida · Fortaleza/CE
- `[home.seo.description]` `SEO` → Cortina de vidro, portas de correr e divisórias, espelhos e box de banheiro sob medida em Fortaleza. Obras executadas para condomínios, escritórios e residências.

### Topo (sobre a foto)

- `[home.hero.eyebrow]` → Fortaleza / CE — desde o projeto
- `[home.hero.h1.linha1]` → Arquitetura em vidro
- `[home.hero.h1.linha2]` (mesma cor, peso maior) → sob medida.
- `[home.hero.cta1]` → Falar com a VETRA
- `[home.hero.cta2]` → Ver projetos
- `[home.hero.alt]` `ALT` → Varanda envidraçada de piso a teto com vista para a praia, os coqueiros da orla e os prédios de Fortaleza

### Barra técnica do hero (`src/content/site.ts` › `commitments`)

As quatro etapas do processo, na ordem em que acontecem. É a única afirmação
específica do primeiro viewport — se alguma etapa mudar, ajuste aqui.

- `[hero.comp.1]` → Especificação · Damos suporte no início do projeto para adequar a solução mais recomendada.
- `[hero.comp.2]` → Medição · Visita técnica para análise minuciosa das medidas.
- `[hero.comp.3]` → Instalação · A execução do projeto é acompanhada de perto.
- `[hero.comp.4]` → Entrega · Finalizamos com orientações sobre cuidados e recomendações.

### Parágrafo de abertura

- `[home.lede]` → Trabalhamos com quem desenha o espaço antes de ele existir. Cortina de vidro, Box, Portas e Espelhos especificados e executados exatamente conforme o projeto.

> A lista espelha as quatro categorias da seção 8, na mesma ordem dos cards.
> Se acrescentar um produto aqui, ele precisa existir como categoria — senão
> promete uma seção que o visitante não encontra.

### Faixa "como atendemos" (3 colunas, fundo azul claro)

- `[home.atend.1.titulo]` → Especificação junto com o projeto
- `[home.atend.1.texto]` → Iniciamos um acompanhamento técnico ainda em fase de projeto para que os vidros sejam especificados da forma mais segura e funcional.
- `[home.atend.2.titulo]` → Medição técnica no local
- `[home.atend.2.texto]` → Realizamos a medição técnica com equipamentos de alta precisão in loco após todos os revestimentos e acabamentos serem finalizados.
- `[home.atend.3.titulo]` → Execução acompanhada
- `[home.atend.3.texto]` → Todo o processo de produção e instalação é acompanhado de perto para evitar quaisquer imprevistos ou divergências do projeto.

### Quatro soluções

- `[home.solucoes.eyebrow]` → Soluções

> Título removido a pedido do André (16/08/2026) — a seção ficou só com o
> eyebrow, sem H2 de efeito.

(O conteúdo dos 4 cards está na seção **8. Soluções**, porque se repete no rodapé
e nos filtros da página de projetos.)

### Projeto em destaque

- `[home.destaque.eyebrow]` → Em destaque
- `[home.destaque.cta]` → Ver o projeto

O título e o texto vêm da obra marcada como destaque (hoje: *Edifício Ana Amélia
Boulevard* — ver seção **9. Obras**). Trocar = editar `DESTAQUES` em
`src/content/projects.ts`.

### Faixa azul-escura para arquitetos

- `[home.arq.eyebrow]` → ArqVetra — programa de parceria
- `[home.arq.titulo]` → Para quem especifica.
- `[home.arq.lede]` ⚠︎ → Arquitetos e designers parceiros têm canal direto com especialista e retorno em até 24h, prioridade na agenda de medição, execução e instalação, e condição especial de valor e pagamento para os clientes que indicam.
- `[home.arq.cta]` → Conhecer o programa

> Este lede repete os **três pilares** da seção 5, na mesma ordem. É a porta de
> entrada do programa: se os pilares mudarem lá, mudam aqui também — senão quem
> clica encontra outra promessa na página de destino.

### Fechamento

- `[home.fim.eyebrow]` → Próximo passo
- `[home.fim.titulo]` → Manda a planta, a foto do vão ou só a dúvida.
- `[home.fim.texto]` → Respondemos com a especificação técnica e o caminho de execução — antes de falar de preço.
- `[home.fim.cta1]` → Falar no WhatsApp
- `[home.fim.cta2]` → Enviar briefing

---

## 2. Projetos (`/projetos`)

### SEO

- `[projetos.seo.title]` `SEO` → Projetos executados
- `[projetos.seo.description]` `SEO` → Obras de cortina de vidro, portas de correr, divisórias e espelhos executadas pela VETRA em Fortaleza e Região Metropolitana. Galeria de cada projeto.

### Topo

- `[projetos.eyebrow]` → Portfólio
- `[projetos.h1.linha1]` → Projetos
- `[projetos.h1.linha2]` (em cinza) → executados.
- `[projetos.lede]` → Obras entregues em Fortaleza e Região Metropolitana — condomínios, escritórios, lojas e residências.

### Filtros

- `[projetos.filtro.todos]` → Todos

(Os demais filtros usam os nomes das categorias — seção **8**. Categoria sem obra
publicada não aparece como filtro.)

### Estado vazio e fechamento

- `[projetos.vazio]` → Ainda não publicamos projetos nessa categoria. Fale com a gente — temos obras não fotografadas.
- `[projetos.fim.titulo]` → Tem um vão difícil, um prumo fora ou um prazo apertado? É exatamente aí que a conversa começa.
- `[projetos.fim.cta]` → Falar no WhatsApp

---

## 3. Cortina de Vidro (`/cortina-de-vidro`)

Página feita para tráfego pago — link do anúncio aponta direto pra cá. Também
entrou no menu principal, entre Projetos e Arquitetos.

### SEO

- `[cortina.seo.title]` `SEO` → Cortina de Vidro para Varanda em Fortaleza | VETRA Soluções em Vidros
- `[cortina.seo.description]` `SEO` → Cortina de vidro sob medida para fechar sacada e varanda em Fortaleza. Sistema sem roldanas aparentes, vedação técnica e instalação executada pela VETRA. Peça seu orçamento.

> Título ajustado (19/08/2026) para a campanha de tráfego pago que começa
> essa semana: era "...em Fortaleza · VETRA Soluções em Vidros · Fortaleza"
> (Fortaleza duas vezes — o `Seo.tsx` sempre completa o título com
> "· {marca} · Fortaleza", e essa página já dizia "Fortaleza" no título
> próprio). Essa é a única página do site que precisa do título por
> extenso, sem o complemento automático — usei um campo novo,
> `titleOverride`, que só entra em ação quando presente; as outras páginas
> não mudam.

### Topo (sobre a foto)

- `[cortina.hero.eyebrow]` → Cortina de Vidro — VETRA Soluções em Vidros
- `[cortina.hero.h1.linha1]` → Feche a sacada. Não feche a vista.
- `[cortina.hero.h1.linha2]` → Cortina de vidro sob medida.
- `[cortina.hero.lede.linha1]` → Cortina de vidro premium em Fortaleza.
- `[cortina.hero.lede.linha2]` → Medição, fabricação e instalação com materiais e execução do serviço de alta qualidade.
- `[cortina.hero.cta]` → Pedir orçamento
- `[cortina.hero.msg-whatsapp]` (mensagem pré-preenchida) → Olá, VETRA. Quero orçamento de cortina de vidro para minha varanda/sacada.
- `[cortina.hero.alt]` `ALT` → Varanda fechada com cortina de vidro sob cobertura de palha, vista para piscina de condomínio

> Primeira foto do carrossel: obra Manhattan Beach Riviera. O carrossel do
> hero tem 5 fotos agora (18/08/2026) — Manhattan Beach + 4 fotos novas que
> vieram em `img/Topo/` (pasta local fora do git, mesmo padrão de
> `fotos-origem/LEIA-ME.md`): varanda com vista para prédios e área verde,
> varanda curva com céu azul, varanda curva em dia nublado e varanda com
> piso em porcelanato.
>
> As 4 fotos antigas (Reserva do Parque, Ana Amélia, Unique Meireles, Portal
> de Malaga) **ficaram de fora do hero** — foram fotografadas contra a luz,
> através do vidro, olhando pro céu aberto: o resultado é neblina/véu óptico
> real no arquivo, não uma questão de cor fraca que CSS resolva. Testei até
> `contrast(2.2) saturate(1.8) brightness(0.7)` (bem mais forte que o normal)
> e o céu continuou raso. Elas continuam na galeria, mais abaixo — em
> miniatura o problema incomoda menos.
>
> Uma 5ª foto nova (varanda com luminárias pretas penduradas) ficou de fora
> a pedido seu — só 640×360px, resolução baixa demais pra hero de tela
> cheia. Entra se você mandar uma versão maior.
>
> Ainda faltam: 2 fotos (Ana Amélia 2ª, Maison de la Musique) com HEIC que
> não abre em nenhuma ferramenta daqui — peço reenvio em JPEG — e mais 4
> coladas direto na mensagem, sem arquivo acessível.
>
> **A causa real da mancha esbranquiçada** (19/08/2026, achada só agora):
> não era neblina de foto nem véu escuro — era um bug no `HeroCarousel`. Cada
> foto vem dentro de uma `<div>` com fundo `bg-mist/60` (placeholder de
> carregamento do componente `Picture`); eu só desligava a opacidade da
> `<img>` das fotos inativas, não da `<div>` em volta. Com 5 fotos empilhadas,
> os 4 fundos claros "invisíveis" ficavam por cima da foto ativa. Corrigido
> movendo a opacidade pro wrapper inteiro, em `HeroCarousel.tsx`.
>
> A pedido seu, tirei também o véu escuro que existia por cima da foto (as
> duas faixas em `ink`) — a foto ficou 100% limpa, com a legibilidade do
> texto vindo de sombra projetada (`text-shadow`) em vez de escurecer a
> cena. Funcionava bem visualmente, mas dependia de qual parte da foto caía
> atrás de cada letra — sem garantia matemática de contraste.
>
> **Painel de vidro (19/08/2026)** — você reportou que ainda não estava
> legível o bastante. Troquei a sombra por um painel translúcido
> (`bg-ink/55` + `backdrop-blur-md`) atrás só da coluna de texto — a foto
> segue 100% visível fora do painel (a maior parte da imagem, à direita).
> Medi o contraste de novo com o mesmo método de antes (pixel real da foto
> por trás, através do painel): pior ponto **7.01:1**, o resto entre 8 e
> 9.5:1 — folga garantida em qualquer uma das 5 fotos do carrossel, não só
> na que eu testei.

### Onde atendemos (faixa logo abaixo do hero)

- `[cortina.onde.eyebrow]` → Onde atendemos
- `[cortina.onde.texto]` → Presença ativa nos principais bairros verticalizados de Fortaleza: Aldeota, Meireles, Cocó, Dionísio Torres e Guararapes e com atendimento também em Eusébio e Aquiraz, para projetos residenciais e condomínios de alto padrão.

> Seção nova (19/08/2026), pedida para a campanha de tráfego pago — SEO
> local, mira os bairros que o Google Ads está direcionando.

### Por que fechar a varanda

- `[cortina.motivo.eyebrow]` → Por que fechar a varanda
- `[cortina.motivo.titulo]` → Chuva, poeira e barulho ficam do lado de fora.
- `[cortina.motivo.1.tag]` → Conforto
- `[cortina.motivo.1.titulo]` → Varanda utilizável o ano todo
- `[cortina.motivo.1.texto]` → Chuva de lado, vento forte e poeira da rua deixam de decidir se dá para usar a varanda hoje.
- `[cortina.motivo.2.tag]` → Espaço
- `[cortina.motivo.2.titulo]` → Metro quadrado que você já paga
- `[cortina.motivo.2.texto]` → A varanda fechada vira sala, home office ou espaço de estar — sem obra, sem alvenaria.
- `[cortina.motivo.3.tag]` → Silêncio
- `[cortina.motivo.3.titulo]` → Menos barulho da rua
- `[cortina.motivo.3.texto]` → O vidro também barra ruído: menos trânsito, menos vizinho, mais sossego.

### O sistema (faixa azul-escura, 6 características com ícone)

- `[cortina.sistema.eyebrow]` → O sistema
- `[cortina.sistema.titulo]` → Sistema de envidraçamento de sacadas sem roldanas premium.
- `[cortina.sistema.1.titulo]` → Mais estável
- `[cortina.sistema.1.texto]` → O painel se apoia na base, sem depender de roldana suspensa — mais segurança e estabilidade no uso diário.
- `[cortina.sistema.2.titulo]` → Vista sem interrupções
- `[cortina.sistema.2.texto]` → Perfil mínimo entre os vidros, sem travessa vertical cortando a paisagem.
- `[cortina.sistema.3.titulo]` → Baixa manutenção
- `[cortina.sistema.3.texto]` → Sem rolamento para desgastar — menos manutenção ao longo dos anos.
- `[cortina.sistema.4.titulo]` → Testado e aprovado
- `[cortina.sistema.4.texto]` `⚠︎` → Sistema testado e aprovado em ensaios de pressão e resistência ao vento pelo Instituto Falcão Bauer.
- `[cortina.sistema.5.titulo]` → Resistente à corrosão
- `[cortina.sistema.5.texto]` → Componentes com alta resistência à corrosão — inclusive na maresia de Fortaleza.
- `[cortina.sistema.6.titulo]` → Acabamento de alto padrão
- `[cortina.sistema.6.texto]` → Linhas curvas e suaves, acabamento pensado para não competir com a arquitetura do imóvel.

> Você mandou um print de material de divulgação de outra empresa (marca
> "Fine Glass") com essas 6 características e pediu para incluir no site.
> Reescrevi com as palavras da VETRA — não citei a marca do concorrente em
> nenhum texto. O item 4 (Instituto Falcão Bauer) você confirmou que é real
> para o sistema que a VETRA usa; se isso mudar, tem que sair do site.

### Como funciona (5 passos, fundo branco)

- `[cortina.como.eyebrow]` → Como funciona
- `[cortina.como.titulo]` → Do primeiro contato à instalação, um processo só.
- `[cortina.como.1.titulo]` → Visita técnica
- `[cortina.como.1.texto]` → Avaliação detalhada do espaço e das necessidades do seu projeto, feita por quem vai executar.
- `[cortina.como.2.titulo]` → Projeto personalizado
- `[cortina.como.2.texto]` → Layout sob medida que une estética e funcionalidade ao ambiente.
- `[cortina.como.3.titulo]` → Produção com qualidade
- `[cortina.como.3.texto]` → Vidro temperado ou laminado de 8, 10 ou 12mm e perfis de alumínio com precisão milimétrica na fabricação.
- `[cortina.como.4.titulo]` → Instalação limpa e rápida
- `[cortina.como.4.texto]` → Execução que respeita o prazo combinado e o ambiente da sua casa.
- `[cortina.como.5.titulo]` → Entrega com garantia
- `[cortina.como.5.texto]` `⚠︎` → Garantia de 7 anos do fabricante nos trilhos do sistema, mais 24 meses de garantia da própria VETRA sobre a instalação.

> Os dois textos acima (passo 03 e 05) e a pergunta de garantia no FAQ mais
> abaixo vieram prontos assim do André, na instrução da campanha (19/08/2026)
> — são dados dele sobre a própria empresa, não algo que eu inferi de
> material de terceiro. Ainda assim, é uma promessa concreta (prazo de
> garantia) publicada no site — mesmo cuidado das outras promessas marcadas
> `⚠︎`: se o prazo mudar, atualizar aqui também.

> Mesma origem do bloco acima (print "Processo Fine Glass", 5 passos
> numerados) — reescrito, sem a marca do concorrente.

### Galeria (fundo azul claro)

- `[cortina.galeria.eyebrow]` → Instalações executadas
- `[cortina.galeria.titulo]` → Cada vão, medido e executado pela VETRA.

(6 fotos: 4 reais das obras Ana Amélia Boulevard, Unique Meireles, Portal de
Malaga e Manhattan Beach Riviera — + 2 provisórias da categoria Cortina de
Vidro, mesmas de `solutions.ts`.)

### Valorização do imóvel (fundo branco, 5 benefícios com ícone)

- `[cortina.valor.eyebrow]` → Além do conforto
- `[cortina.valor.titulo]` → Varanda fechada também é valorização do imóvel.
- `[cortina.valor.lede]` → O mercado imobiliário está mais competitivo a cada ano, e quem compra busca diferenciais claros. Em regiões valorizadas, a varanda envidraçada virou um dos itens mais procurados.
- `[cortina.valor.1.titulo]` → Aumento da área útil
- `[cortina.valor.1.texto]` → A varanda fechada vira extensão da sala, espaço gourmet ou escritório.
- `[cortina.valor.2.titulo]` → Estética de alto padrão
- `[cortina.valor.2.texto]` → Design limpo e moderno, que valoriza a fachada e o ambiente.
- `[cortina.valor.3.titulo]` → Conforto térmico e acústico
- `[cortina.valor.3.texto]` → Proteção contra vento, chuva e ruído externo.
- `[cortina.valor.4.titulo]` → Segurança
- `[cortina.valor.4.texto]` → Barreira física adicional — importante para quem tem criança, idoso ou pet em casa.
- `[cortina.valor.5.titulo]` → Percepção de exclusividade
- `[cortina.valor.5.texto]` → Diferencial claro frente a imóveis parecidos no mesmo bairro.
- `[cortina.valor.fechamento]` → Imóveis com varanda fechada e bem aproveitada tendem a se destacar no anúncio e vender com mais agilidade.

> O material original citava "valorização de até 20%" sem fonte. Você pediu
> para suavizar em vez de publicar um número sem lastro — o fechamento ficou
> qualitativo.

### Perguntas frequentes (fundo azul claro, accordion)

- `[cortina.faq.eyebrow]` → Antes de pedir o orçamento
- `[cortina.faq.titulo]` → Perguntas frequentes sobre cortina de vidro.
- `[cortina.faq.1.pergunta]` → Quanto tempo leva a instalação de uma cortina de vidro?
- `[cortina.faq.1.resposta]` → O prazo varia conforme o tamanho do vão e a linha do sistema. Após a medição técnica, a VETRA informa o prazo exato de fabricação e instalação para o seu projeto.
- `[cortina.faq.2.pergunta]` → Precisa fazer obra ou alvenaria para instalar?
- `[cortina.faq.2.resposta]` → Não. O sistema é fixado diretamente na estrutura existente da varanda, sem necessidade de obra civil ou reforço estrutural na maioria dos casos.
- `[cortina.faq.3.pergunta]` → Funciona em varandas curvas ou com formato irregular?
- `[cortina.faq.3.resposta]` → Sim. O sistema se adapta a vãos curvos e formatos variados — a VETRA faz a medição técnica no local para confirmar o dimensionamento exato de cada painel.
- `[cortina.faq.4.pergunta]` → Qual a garantia da cortina de vidro?
- `[cortina.faq.4.resposta]` `⚠︎` → Garantia de 7 anos do fabricante sobre os trilhos do sistema, mais 24 meses de garantia da VETRA sobre a instalação e regulagem.
- `[cortina.faq.5.pergunta]` → O vidro embaça, risca ou perde a vedação com o tempo?
- `[cortina.faq.5.resposta]` → O sistema usa vidro temperado de segurança com vedação em silicone que não resseca. A manutenção recomendada é simples: limpeza periódica dos trilhos e aplicação de silicone spray na pista de deslizamento.
- `[cortina.faq.6.pergunta]` → Vocês atendem qual região?
- `[cortina.faq.6.resposta]` → Presença ativa nos principais bairros verticalizados de Fortaleza — Aldeota, Meireles, Cocó, Dionísio Torres e Guararapes — com atendimento também em Eusébio e Aquiraz, para projetos residenciais e condomínios de alto padrão.
- `[cortina.faq.7.pergunta]` → O vidro desbota ou perde a cor com o sol?
- `[cortina.faq.7.resposta]` → Não. Vidro é material inorgânico e não desbota com exposição solar. O perfil de alumínio recebe pintura eletrostática, resistente à ação do sol e da maresia — o mesmo acabamento descrito na característica "resistente à corrosão" do sistema.
- `[cortina.faq.8.pergunta]` → Como é feita a limpeza e manutenção do sistema?
- `[cortina.faq.8.resposta]` → É simples: limpeza periódica do vidro com produto neutro, remoção de areia e sujeira dos trilhos inferiores, e aplicação eventual de silicone spray na pista de deslizamento para manter o deslize suave. Sem rolamento, a manutenção estrutural é praticamente inexistente.

> Seção nova (19/08/2026), pedida para a campanha de tráfego pago. Usa
> `<details>/<summary>` nativo (sem componente de accordion no projeto) e
> leva também um bloco JSON-LD `FAQPage` no `<head>` da página — ajuda tanto
> o SEO quanto a leitura por ferramentas de busca com IA. O texto de cada
> resposta fica no HTML mesmo com o accordion fechado.
>
> **Expansão de 5 → 8 perguntas (19/08/2026)** — uma lista de tarefas de
> preparação para Google Ads pedia 8-10 perguntas, incluindo preço médio,
> parcelamento no cartão e prazo de resposta de orçamento em 24h. Só
> acrescentei as 3 que já dava para responder com o que está confirmado no
> site (região, durabilidade do material, limpeza) — as 3 que pediam preço/
> pagamento/prazo ficaram de fora até você confirmar os dados reais.

### Fechamento

- `[cortina.fim.eyebrow]` → Peça o seu
- `[cortina.fim.titulo]` → Do orçamento à instalação, o mesmo time acompanha o projeto.
- `[cortina.fim.texto]` → Atendimento em Fortaleza e Região Metropolitana — (85) 99178-5809.
- `[cortina.fim.cta]` → Falar no WhatsApp

---

## 4. Página de projeto (`/projetos/...`)

Rótulos fixos. **Hoje a ficha técnica não aparece em nenhuma obra** — nenhuma
tem dado confirmado, e a seção some quando está vazia. Estes rótulos só voltam
a ser visíveis quando você preencher `FICHAS` em `src/content/projects.ts`.

- `[projeto.voltar]` → ← Todos os projetos
- `[projeto.ficha.titulo]` → Ficha técnica
- `[projeto.ficha.local]` → Local
- `[projeto.ficha.ano]` → Ano
- `[projeto.ficha.tipologia]` → Tipologia
- `[projeto.ficha.vidro]` → Vidro
- `[projeto.ficha.ferragem]` → Ferragem
- `[projeto.ficha.arquitetura]` → Arquitetura
- `[projeto.ficha.sem-arquiteto]` → Projeto direto com o cliente
- `[projeto.cta]` → Quero algo assim
- `[projeto.galeria]` → Galeria
- `[projeto.proximo]` → Próximo projeto

---

## 5. Arquitetos — programa ArqVetra (`/arquitetos`)

A página inteira foi reescrita como programa de parceria. Único CTA de
conversão: WhatsApp. Não existe formulário aqui — o "cadastro" acontece na
própria conversa.

### SEO

- `[arq.seo.title]` `SEO` → ArqVetra — programa de parceria para arquitetos e designers
- `[arq.seo.description]` `SEO` ⚠︎ → Programa de parceria técnica da VETRA em Fortaleza: canal direto com especialista e retorno em até 24h, prioridade na agenda de medição, execução e instalação, e condição especial de valor e pagamento para os clientes indicados.

### Topo (sobre a foto)

- `[arq.eyebrow]` → ArqVetra — Programa de parceria VETRA
- `[arq.h1.linha1]` → Especificar vidro deixa de ser risco.
- `[arq.h1.linha2]` (mesma cor, peso maior) → Passa a ser vantagem.
- `[arq.lede]` → Um programa de parceria técnica para arquitetos e designers que projetam com padrão — canal direto com especialista, prioridade em toda a agenda de produção e condições especiais para os seus clientes.
- `[arq.cta1]` → Quero ser parceiro ArqVetra
- `[arq.cta2]` → Ver projetos executados
- `[arq.foto.alt]` `ALT` → Dois profissionais da VETRA conferindo a planta e medindo o vão de uma varanda envidraçada em obra, com vista para o mar
- `[arq.msg-whatsapp]` (texto já preenchido ao abrir a conversa) → Quero ser parceiro do ArqVetra. Sou arquiteto(a)/designer e quero conhecer o programa.

### Por que o programa existe

- `[arq.problema.eyebrow]` → Por que o ArqVetra existe
- `[arq.problema.titulo]` → Especificar vidro é assumir um risco que não é seu.
- `[arq.problema.texto]` → Especificar vidro em projeto exige confiar num fornecedor que não vai te deixar na mão na hora H — prazo estourado, medição errada, retrabalho que vira problema seu com o cliente. A maioria dos vidraceiros trata arquiteto como canal de venda. A VETRA trata como parceiro técnico com responsabilidade compartilhada pelo resultado.

### Os três benefícios (fundo azul claro)

- `[arq.benef.eyebrow]` → O que você ganha no ArqVetra
- `[arq.benef.titulo]` → Três compromissos, sem letra miúda escondida.
- `[arq.benef.1.tag]` → 01 · Acesso técnico
- `[arq.benef.1.titulo]` ⚠︎ → Fale com quem entende, em até 24h
- `[arq.benef.1.texto]` ⚠︎ → Parceiro ArqVetra tem canal direto de atendimento com um especialista — não com atendente genérico. Dúvida de especificação, detalhe construtivo ou pedido de orçamento têm retorno garantido em até 24 horas.
- `[arq.benef.2.tag]` → 02 · Vantagem comercial
- `[arq.benef.2.titulo]` → Condição exclusiva de valor e pagamento
- `[arq.benef.2.texto]` ⚠︎ → Clientes indicados por parceiro ArqVetra recebem condição especial de valor e de forma de pagamento — vantagem exclusiva do canal de parceria, que você leva para a mesa junto com o seu projeto.
- `[arq.benef.3.tag]` → 03 · Prazo
- `[arq.benef.3.titulo]` → Seu projeto entra na frente
- `[arq.benef.3.texto]` ⚠︎ → Prioridade em toda a cadeia: medição, execução e instalação. Projeto de parceiro ArqVetra não disputa fila com a demanda geral — o cronograma da sua obra não fica refém do nosso.

### Termos da condição comercial (letra miúda, logo abaixo dos benefícios)

- `[arq.termos.titulo]` → Termos da condição comercial
- `[arq.termos.1]` → Condição válida exclusivamente para clientes indicados por parceiro ArqVetra ativo.
- `[arq.termos.2]` → Aplicável apenas se o fechamento ocorrer dentro do prazo de validade da proposta.
- `[arq.termos.3]` → Não cumulativa com outras condições especiais eventualmente em vigor.
- `[arq.termos.4]` → Condições de pagamento sujeitas a análise por projeto.

### Como entrar (faixa azul-escura, 3 passos)

- `[arq.entrar.eyebrow]` → Como entrar
- `[arq.entrar.titulo]` → Três passos, tudo pelo WhatsApp.
- `[arq.entrar.1.titulo]` → Cadastro
- `[arq.entrar.1.texto]` → Você se identifica como arquiteto ou designer parceiro pelo WhatsApp: nome, escritório e CAU ou contato.
- `[arq.entrar.2.titulo]` → Ativação
- `[arq.entrar.2.texto]` ⚠︎ → Confirmação em até 24h e liberação do canal direto com especialista.
- `[arq.entrar.3.titulo]` → Indicação
- `[arq.entrar.3.texto]` → Você especifica VETRA no projeto ou indica um cliente; a condição especial é aplicada no orçamento.

### Prova técnica

- `[arq.ficha.eyebrow]` → Especificação técnica, não venda de vidro
- `[arq.ficha.titulo]` → A especificação vai por escrito, pronta para o memorial.
- `[arq.ficha.lede]` ⚠︎ → Sistema, espessura, tipo de vidro, ferragem, folgas e parâmetros de medição — documentados para o seu projeto, no formato que entra direto no memorial descritivo.
- `[arq.ficha.cta]` → Pedir a especificação do seu projeto

> Promete a especificação **por projeto**, não um documento pronto para baixar —
> esse PDF não existe. Se ele for produzido, a seção vira link direto e o botão
> de WhatsApp sai.

### Fechamento

- `[arq.fim.eyebrow]` → Próximo passo
- `[arq.fim.titulo]` → Transparência é posicionamento.
- `[arq.fim.texto]` → Entre no ArqVetra. Sem burocracia, sem contrato de exclusividade, somente um compromisso técnico. Atendimento em Fortaleza e Região Metropolitana — (85) 99178-5809.
- `[arq.fim.cta]` → Falar no WhatsApp

> **O prazo de 24h aparece em dois lugares** (`[arq.benef.1.*]` e
> `[arq.entrar.2.texto]`) e também na descrição do Google (`[arq.seo.description]`).
> Se mudar, mude nos três. Se não for sustentável, tire dos três.

---

## 6. Sobre (`/sobre`)

### SEO

- `[sobre.seo.title]` `SEO` → Sobre a VETRA
- `[sobre.seo.description]` `SEO` → A VETRA trabalha vidro como parte do projeto de arquitetura, não como item de acabamento: especificação antecipada, medição técnica no local e execução acompanhada em Fortaleza.

### Topo

- `[sobre.h1.linha1]` → Vidro é projeto,
- `[sobre.h1.linha2]` (em cinza) → não acabamento.
- `[sobre.lede]` → A VETRA nasceu de uma constatação incômoda: o vidro quase sempre é o último item a ser especificado e o primeiro a mostrar erro. Trabalhamos para inverter essa ordem.
- `[sobre.foto.alt]` `ALT` → Varanda envidraçada em andar alto com vista para área verde e para os prédios de Fortaleza

### Posicionamento

- `[sobre.pos.eyebrow]` → Posicionamento
- `[sobre.pos.titulo]` → Transparência é uma decisão de projeto.
- `[sobre.pos.p1]` → Um painel de vidro define o que se vê, o que se ouve e por onde a luz entra. Ele resolve as mesmas questões que uma parede resolve — só que sem pedir licença ao espaço.
- `[sobre.pos.p2]` → Por isso não trabalhamos por catálogo. Cada peça sai de uma conversa sobre o vão específico, o uso específico e a paleta específica daquele projeto. O que a VETRA vende não é o vidro: é a decisão técnica que faz o vidro funcionar ali.
- `[sobre.pos.p3]` → Atendemos Fortaleza e Região Metropolitana, em obras residenciais e corporativas, com arquitetos e diretamente com clientes finais.

### Diferencial técnico

- `[sobre.dif.eyebrow]` → Diferencial técnico
- `[sobre.dif.titulo]` → Quatro coisas que mudam o resultado.
- `[sobre.dif.1.titulo]` → O vidro é decidido cedo ou é remendado depois
- `[sobre.dif.1.texto]` → Trilho embutido pede rebaixo de forro. Guarda-corpo pede ponto de fixação estrutural. Box com perfil embutido pede que o revestimento pare na cota certa. Nada disso se resolve na semana da instalação — e é por isso que entramos na fase de projeto.
- `[sobre.dif.2.titulo]` → Medição depois do acabamento, sempre
- `[sobre.dif.2.texto]` → Vão de obra pronta não é retangular. Medir na alvenaria bruta e torcer para dar certo é como se perde uma peça inteira de vidro temperado, que não aceita corte depois de temperado.
- `[sobre.dif.3.titulo]` → Ferragem escolhida com a paleta, não com o preço
- `[sobre.dif.3.texto]` → O acabamento da ferragem convive com o metal da louça e com a maçaneta da porta. Quando o box chega por último, ele se adapta ao que já foi especificado — nunca o contrário.
- `[sobre.dif.4.titulo]` → Uma pessoa responde do início ao fim
- `[sobre.dif.4.texto]` → A mesma pessoa que lê o projeto faz a medição e acompanha a instalação. Não existe repassar o problema para o próximo elo da cadeia.

### Fechamento

- `[sobre.fim.eyebrow]` → Atendimento
- `[sobre.fim.titulo]` → usa `[site.endereco.nota]`
- `[sobre.fim.texto]` → (lista de cidades) — e obras fora dessa área mediante avaliação de logística.
- `[sobre.fim.cta]` → Falar no WhatsApp

---

## 7. Contato (`/contato`)

### SEO

- `[contato.seo.title]` `SEO` → Contato

### Topo

- `[contato.eyebrow]` → Contato
- `[contato.h1.linha1]` → Comece pelo
- `[contato.h1.linha2]` (em cinza) → vão.
- `[contato.lede]` → Uma foto do local e a medida aproximada já bastam para a primeira resposta técnica.

### Formulário

- `[form.titulo]` → Enviar briefing
- `[form.campo.nome]` → Nome
- `[form.campo.contato]` → E-mail ou WhatsApp
- `[form.campo.perfil]` → Você é
- `[form.opcao.perfil]` → Cliente final / Arquiteto(a) / Designer / Construtora / Outro
- `[form.campo.tipo]` → Tipo de projeto
- `[form.opcao.tipo]` → Fachada / envidraçamento · Box / box elegance · Espelhos · Divisórias e portas · Outro
- `[form.campo.mensagem]` → Sobre o projeto
- `[form.campo.mensagem.dica]` → Local, medida aproximada do vão e prazo desejado.
- `[form.botao]` → Enviar briefing
- `[form.botao.enviando]` → Enviando…
- `[form.nota-whatsapp]` → O envio abre uma conversa no WhatsApp com os dados já preenchidos.

### Mensagens do formulário

- `[form.erro.nome]` → Informe seu nome.
- `[form.erro.contato]` → Informe um e-mail válido ou um telefone com DDD.
- `[form.erro.mensagem]` → Conte um pouco mais sobre o projeto.
- `[form.erro.envio]` → Não conseguimos enviar agora. Use o WhatsApp ao lado — o retorno é imediato.
- `[form.sucesso.titulo]` → Recebido.
- `[form.sucesso.texto]` ⚠︎ → Respondemos em até 1 dia útil. Se for urgente, chama no WhatsApp — costuma ser mais rápido.

### Coluna lateral

- `[contato.lado.direto]` → Direto
- `[contato.lado.onde]` → Onde atendemos
- `[contato.lado.maps]` → Abrir no Google Maps ↗
- `[contato.lado.horario]` → Horário
- `[contato.lado.redes]` → Também estamos em
- `[contato.lado.google]` → Perfil da Empresa no Google ↗
- `[contato.lado.instagram]` → Instagram ↗

---

## 8. Soluções (`src/content/solutions.ts`)

Aparecem na home, nos filtros de projetos e no rodapé. Mudar aqui muda nos três.

### 01 — Cortina de Vidro

- `[sol.cortina-de-vidro.titulo]` → Cortina de Vidro
- `[sol.cortina-de-vidro.lede]` → Fechar a varanda sem fechar a vista. Vão livre, perfil mínimo, o vidro assumindo o papel de parede.
- `[sol.cortina-de-vidro.itens]` →
  - Envidraçamento de varanda e terraço
  - Sistema sem roldanas aparentes
  - Folhas de piso a teto, recolhimento lateral
  - Ferragem dimensionada para vento e maresia

### 02 — Portas de Correr e Divisórias

- `[sol.portas-e-divisorias.titulo]` → Portas de Correr e Divisórias
- `[sol.portas-e-divisorias.lede]` → Separar ambientes sem escurecer nenhum. Perfil estreito desenha a linha, não o volume.
- `[sol.portas-e-divisorias.itens]` →
  - Divisórias internas em vidro
  - Portas de correr com trilho embutido
  - Perfil preto fosco, inox e alumínio
  - Fachadas e vitrines comerciais

### 03 — Espelhos

- `[sol.espelhos.titulo]` → Espelhos
- `[sol.espelhos.lede]` → De painel contínuo de parede inteira a peça recortada para um vão específico.
- `[sol.espelhos.itens]` →
  - Espelhos de grande formato
  - Iluminação embutida e recuo de LED
  - Película de segurança na face posterior
  - Formatos sob medida e bordas trabalhadas

### 04 — Box de Banheiro

- `[sol.box.titulo]` → Box de Banheiro
- `[sol.box.lede]` → O banho como peça de projeto. Ferragem escolhida junto com o metal da louça, não depois dele.
- `[sol.box.itens]` →
  - Box de correr, abrir e canto
  - Perfil embutido e ferragem aparente
  - Acabamentos em preto, dourado, cobre e inox
  - Vidro incolor, fumê e extraclaro

---

## 9. Obras do portfólio (`src/content/projects.ts` › `RESUMOS`)

21 obras reais. Título e categoria ficam em `scripts/projects.manifest.mjs`; o
resumo de uma linha, aqui. **Nenhuma tem ficha técnica** — ver seção 4.

### Cortina de Vidro — 12 obras

- `[obra.helbor-reserva]` **Helbor Reserva** (6 fotos) → Varanda em L envidraçada de ponta a ponta, com vista aberta para a cidade.
- `[obra.helbor-parque-clube]` **Helbor Parque Clube** (3 fotos) → Envidraçamento de varanda corrida em andar alto, sobre área verde.
- `[obra.ana-amelia-boulevard]` **Edifício Ana Amélia Boulevard** (5 fotos) → Varanda curva envidraçada acompanhando o raio da laje, de frente para o mar.
- `[obra.unique-meireles]` **Edifício Unique Meireles** (3 fotos) → Varanda envidraçada com esquadria escura e vista para o Meireles.
- `[obra.manhattan-beach-riviera]` **Manhattan Beach Riviera** (5 fotos) → Terraço envidraçado voltado para a piscina do condomínio, em ambiente litorâneo.
- `[obra.terraco-dos-passaros]` **Terraço dos Pássaros** (6 fotos) → Varanda social envidraçada, integrada à sala de jantar.
- `[obra.verdi]` **Verdi** (6 fotos) → Envidraçamento de varanda ampla com vista panorâmica para a cidade.
- `[obra.paco-do-bem]` **Paço do Bem** (3 fotos) → Varanda envidraçada em vértice, com dois panos convergindo na quina.
- `[obra.portal-de-malaga]` **Portal de Málaga** (3 fotos) → Varanda envidraçada em pavimento alto, sobre área arborizada.
- `[obra.golf-ville]` **Golf Ville** (3 fotos) → Envidraçamento de varanda com vista para o campo e os coqueiros.
- `[obra.condominio-inovatto]` **Condomínio Inovatto** (3 fotos) → Varanda envidraçada de apartamento, com guarda-corpo em vidro.
- `[obra.maison-de-la-musique]` **Maison de La Musique** (3 fotos) → Varanda envidraçada sobre a área de lazer do empreendimento.

### Portas de Correr e Divisórias — 6 obras

- `[obra.boi-e-cia]` **Boi & Cia** (4 fotos) → Fachada comercial em vidro com portas automáticas, voltada para a rua.
- `[obra.casa-do-churrasco]` **Casa do Churrasco** (3 fotos) → Vitrine em vidro e guarda-corpo de escada na loja, com estrutura metálica aparente.
- `[obra.sintsef]` **SINTSEF** (6 fotos) → Divisórias de vidro em salas de atendimento, com portas de abrir.
- `[obra.majo-beauty-club]` **Majô Beauty Club** (6 fotos) → Divisórias e portas de vidro separando as salas do salão, com fachada envidraçada para a rua.
- `[obra.espaco-305]` **Espaço 305** (6 fotos) → Portas e divisórias de vidro em clínica de estética, com ferragem clara.
- `[obra.loopfit]` **Loopfit** (5 fotos) → Loja envidraçada com perfil preto, montada dentro de galpão de pé-direito alto.

### Espelhos — 3 obras

- `[obra.imperator-performance]` **Imperator Performance** (6 fotos) → Espelhos de grande formato em academia, com iluminação linear embutida e recuo de LED.
- `[obra.residencia-bs-flower]` **Residência BS Flower** (6 fotos) → Painel espelhado no corredor, espelhos com iluminação embutida em dois banheiros e divisória de vidro colorido na cozinha.
- `[obra.espelhos-sob-medida]` **Espelhos sob medida** (14 fotos) → Espelhos em banheiro, sala, bar e closet: redondo, oval, arco e painel contínuo, com e sem iluminação embutida.

### Box de Banheiro — 1 obra

- `[obra.box-sob-medida]` **Box sob medida** (6 fotos) → Boxes de correr executados em banheiros com revestimentos e ferragens diferentes: mármore, azulejo escuro, ripado com nicho de LED.

Coleção sem cliente identificado, como "Espelhos sob medida" — por isso o
título é genérico em vez de nome de obra.

---

## 10. Página de erro (404)

- `[404.eyebrow]` → Erro 404
- `[404.h1.linha1]` → Esse vão
- `[404.h1.linha2]` → não existe.
- `[404.texto]` → A página saiu do ar ou mudou de endereço. Os projetos continuam todos publicados.
