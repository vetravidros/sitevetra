import { CTA, WhatsAppGlyph } from '@/components/CTA'
import { Picture } from '@/components/Picture'
import { Seo } from '@/components/Seo'
import { Eyebrow, Rule, Section, SectionHead } from '@/components/ui'
import { site } from '@/content/site'

const diferenciais = [
  {
    title: 'O vidro é decidido cedo ou é remendado depois',
    text: 'Trilho embutido pede rebaixo de forro. Guarda-corpo pede ponto de fixação estrutural. Box com perfil embutido pede que o revestimento pare na cota certa. Nada disso se resolve na semana da instalação — e é por isso que entramos na fase de projeto.',
  },
  {
    title: 'Medição depois do acabamento, sempre',
    text: 'Vão de obra pronta não é retangular. Medir na alvenaria bruta e torcer para dar certo é como se perde uma peça inteira de vidro temperado, que não aceita corte depois de temperado.',
  },
  {
    title: 'Ferragem escolhida com a paleta, não com o preço',
    text: 'O acabamento da ferragem convive com o metal da louça e com a maçaneta da porta. Quando o box chega por último, ele se adapta ao que já foi especificado — nunca o contrário.',
  },
  {
    title: 'Uma pessoa responde do início ao fim',
    text: 'A mesma pessoa que lê o projeto faz a medição e acompanha a instalação. Não existe repassar o problema para o próximo elo da cadeia.',
  },
]

export default function Sobre() {
  return (
    <>
      <Seo
        path="/sobre"
        title="Sobre a VETRA"
        description="A VETRA trabalha vidro como parte do projeto de arquitetura, não como item de acabamento: especificação antecipada, medição técnica no local e execução acompanhada em Fortaleza."
      />

      <Section className="pt-16 pb-12 md:pt-24">
        <Eyebrow>Sobre</Eyebrow>
        <h1 className="mt-7 max-w-4xl font-display text-hero font-light text-balance">
          Vidro é projeto,
          <span className="block text-ink/45">não acabamento.</span>
        </h1>
        <p className="mt-8 max-w-2xl text-lede text-ink/60">
          A VETRA nasceu de uma constatação incômoda: o vidro quase sempre é o
          último item a ser especificado e o primeiro a mostrar erro. Trabalhamos
          para inverter essa ordem.
        </p>
      </Section>

      <div className="container-vetra">
        <Picture
          name="guararapes-02"
          alt="Varanda envidraçada em andar alto com vista para área verde e para os prédios de Fortaleza"
          ratio="16/9"
          priority
          sizes="(min-width: 1280px) 76rem, 100vw"
        />
      </div>

      {/* --------------------------------------------------- posicionamento */}
      <Section>
        <div className="grid gap-14 lg:grid-cols-[1fr_1fr] lg:gap-24">
          <SectionHead
            eyebrow="Posicionamento"
            title="Transparência é uma decisão de projeto."
          />
          <div className="space-y-6 text-lede text-ink/70">
            <p>
              Um painel de vidro define o que se vê, o que se ouve e por onde a
              luz entra. Ele resolve as mesmas questões que uma parede resolve —
              só que sem pedir licença ao espaço.
            </p>
            <p>
              Por isso não trabalhamos por catálogo. Cada peça sai de uma
              conversa sobre o vão específico, o uso específico e a paleta
              específica daquele projeto. O que a VETRA vende não é o vidro: é a
              decisão técnica que faz o vidro funcionar ali.
            </p>
            <p>
              Atendemos {site.address.locality} e Região Metropolitana, em obras
              residenciais e corporativas, com arquitetos e diretamente com
              clientes finais.
            </p>
          </div>
        </div>
      </Section>

      {/* --------------------------------------------------- diferencial */}
      <Section tone="mist">
        <SectionHead
          eyebrow="Diferencial técnico"
          title="Quatro coisas que mudam o resultado."
        />
        <div className="mt-16 grid gap-x-12 gap-y-14 md:grid-cols-2">
          {diferenciais.map((d, i) => (
            <div key={d.title}>
              <div className="flex items-center gap-4">
                <span className="font-display text-eyebrow tracking-label text-navy">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <Rule className="flex-1" />
              </div>
              <h3 className="mt-6 font-display text-heading font-medium text-balance">
                {d.title}
              </h3>
              <p className="mt-4 text-ink/60">{d.text}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* -------------------------------------------------------- serviço */}
      <Section>
        <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <Eyebrow>Atendimento</Eyebrow>
            <h2 className="mt-6 max-w-3xl font-display text-title font-light text-balance">
              {site.address.note}.
            </h2>
            <p className="mt-6 max-w-xl text-lede text-ink/60">
              {site.areaServed.slice(0, 4).join(' · ')} — e obras fora dessa
              área mediante avaliação de logística.
            </p>
          </div>
          <CTA utm={{ campaign: 'sobre', content: 'fechamento-whatsapp' }}>
            <WhatsAppGlyph />
            Falar no WhatsApp
          </CTA>
        </div>
      </Section>
    </>
  )
}
