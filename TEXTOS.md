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

---

## 0. Global — aparece em todas as páginas

### Navegação (topo e rodapé)

- `[nav.home]` → Início
- `[nav.projetos]` → Projetos
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

Os três compromissos que você confirmou como verdadeiros. São a única afirmação
específica do primeiro viewport — se algum deixar de ser verdade, sai do site.

- `[hero.comp.1]` → Medição · Depois do revestimento assentado
- `[hero.comp.2]` → Orçamento · Aberto, item a item
- `[hero.comp.3]` → Responsável · Uma pessoa, do projeto à instalação

### Parágrafo de abertura

- `[home.lede]` → Trabalhamos com quem desenha o espaço antes de ele existir. Cortina de vidro, portas, divisórias, espelhos e box especificados junto com o projeto — e executados no milímetro que o projeto pediu.

### Faixa "como atendemos" (3 colunas, fundo azul claro)

- `[home.atend.1.titulo]` → Especificação junto com o projeto
- `[home.atend.1.texto]` → Entramos antes do revestimento assentado, quando ainda dá para resolver rebaixo de forro, prumo e ponto de carga.
- `[home.atend.2.titulo]` → Medição técnica no local
- `[home.atend.2.texto]` → Cada vão é medido depois do acabamento executado. Obra pronta raramente é retangular — e o vidro não perdoa.
- `[home.atend.3.titulo]` → Execução acompanhada
- `[home.atend.3.texto]` → Uma pessoa responde pelo projeto do orçamento à instalação. Sem repassar o problema para o próximo elo.

### Quatro soluções

- `[home.solucoes.eyebrow]` → Soluções
- `[home.solucoes.titulo]` → Quatro frentes, uma mesma exigência de acabamento.

(O conteúdo dos 4 cards está na seção **6. Soluções**, porque se repete no rodapé
e nos filtros da página de projetos.)

### Projeto em destaque

- `[home.destaque.eyebrow]` → Em destaque
- `[home.destaque.cta]` → Ver o projeto

O título e o texto vêm da obra marcada como destaque (hoje: *Edifício Ana Amélia
Boulevard* — ver seção **7. Obras**). Trocar = editar `DESTAQUES` em
`src/content/projects.ts`.

### Faixa azul-escura para arquitetos

- `[home.arq.eyebrow]` → Programa de parceria
- `[home.arq.titulo]` → Para quem especifica.
- `[home.arq.lede]` → Arquitetos e designers de interiores têm canal direto, prazo de retorno definido e desenho técnico do sistema antes do fechamento — para o vidro entrar no projeto como projeto, não como fornecedor.
- `[home.arq.cta]` → Conhecer o programa

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

(Os demais filtros usam os nomes das categorias — seção **6**. Categoria sem obra
publicada não aparece como filtro.)

### Estado vazio e fechamento

- `[projetos.vazio]` → Ainda não publicamos projetos nessa categoria. Fale com a gente — temos obras não fotografadas.
- `[projetos.fim.titulo]` → Tem um vão difícil, um prumo fora ou um prazo apertado? É exatamente aí que a conversa começa.
- `[projetos.fim.cta]` → Falar no WhatsApp

---

## 3. Página de projeto (`/projetos/...`)

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

## 4. Arquitetos (`/arquitetos`)

### SEO

- `[arq.seo.title]` `SEO` → Programa para arquitetos e designers
- `[arq.seo.description]` `SEO` → Parceria da VETRA com arquitetos e designers de interiores em Fortaleza: canal direto com quem especifica, detalhamento do sistema antes do fechamento e crédito de autoria preservado.

### Topo

- `[arq.eyebrow]` → Programa de parceria
- `[arq.h1.linha1]` → Para quem
- `[arq.h1.linha2]` (em cinza) → especifica.
- `[arq.lede]` → Vidro é o item do projeto que mais depende de decisão antecipada e o que mais sofre quando chega no fim da obra. Este programa existe para o vidro entrar na sua prancheta junto com o resto — não depois.
- `[arq.cta1]` → Abrir canal direto
- `[arq.cta2]` → Ver projetos executados
- `[arq.foto.alt]` `ALT` → Sala de reunião fechada por divisórias de vidro com perfil preto, vista do corredor do escritório

### Condições do programa

- `[arq.cond.eyebrow]` → O que você ganha
- `[arq.cond.titulo]` → Condições do programa.
- `[arq.cond.lede]` → Sem cadastro, sem meta e sem catálogo. O que muda é a forma de trabalhar.
- `[arq.cond.1.titulo]` → Canal direto, sem fila
- `[arq.cond.1.texto]` → Contato com quem decide, não com atendimento. Quem responde é quem vai especificar o projeto.
- `[arq.cond.2.titulo]` → Desenho antes do fechamento
- `[arq.cond.2.texto]` ⚠︎ → Detalhamento do sistema em DWG ou PDF para você compatibilizar com o restante do projeto — antes de qualquer assinatura.
- `[arq.cond.3.titulo]` → Sua assinatura preservada
- `[arq.cond.3.texto]` → O crédito do projeto é seu. Publicamos a obra com a autoria informada e com a sua autorização prévia.
- `[arq.cond.4.titulo]` → Visita conjunta ao cliente
- `[arq.cond.4.texto]` → Quando ajuda a defender a especificação, vamos junto à reunião. O vidro costuma ser o item que o cliente tenta cortar primeiro.

### Processo (faixa azul-escura, 4 etapas)

- `[arq.proc.eyebrow]` → Processo
- `[arq.proc.titulo]` → Como a especificação acontece.
- `[arq.proc.1.titulo]` → Leitura do projeto
- `[arq.proc.1.texto]` → Você manda a planta, o corte ou a referência. Devolvemos a leitura do que o vidro exige do projeto: rebaixo de forro, ponto de fixação, cota de piso, folga de dilatação.
- `[arq.proc.2.titulo]` → Especificação técnica
- `[arq.proc.2.texto]` → Sistema, espessura, tipo de vidro e ferragem definidos por escrito, com o acabamento já compatibilizado com os metais que você especificou.
- `[arq.proc.3.titulo]` → Orçamento aberto
- `[arq.proc.3.texto]` → Preço separado por item — vidro, ferragem, instalação. Sem pacote fechado que impede o cliente de comparar ou de cortar escopo com critério.
- `[arq.proc.4.titulo]` → Medição e execução
- `[arq.proc.4.texto]` → Medição feita depois do revestimento assentado, agendada com a obra. Instalação acompanhada pela mesma pessoa que fez a especificação.

### Fechamento

- `[arq.fim.eyebrow]` → Contato direto
- `[arq.fim.titulo]` → Manda o projeto. A gente devolve a especificação.
- `[arq.fim.texto]` → Planta, corte, foto do vão ou só a dúvida técnica — qualquer um dos quatro serve para começar. Atendimento em Fortaleza e Região Metropolitana.
- `[arq.fim.cta1]` → Falar no WhatsApp
- `[arq.fim.cta2]` → Enviar arquivos

---

## 5. Sobre (`/sobre`)

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

## 6. Contato (`/contato`)

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

## 7. Soluções (`src/content/solutions.ts`)

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

## 8. Obras do portfólio (`src/content/projects.ts` › `RESUMOS`)

21 obras reais. Título e categoria ficam em `scripts/projects.manifest.mjs`; o
resumo de uma linha, aqui. **Nenhuma tem ficha técnica** — ver seção 3.

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

## 9. Página de erro (404)

- `[404.eyebrow]` → Erro 404
- `[404.h1.linha1]` → Esse vão
- `[404.h1.linha2]` → não existe.
- `[404.texto]` → A página saiu do ar ou mudou de endereço. Os projetos continuam todos publicados.
