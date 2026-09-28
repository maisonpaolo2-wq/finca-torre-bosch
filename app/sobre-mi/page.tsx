import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'La finca y nuestra historia',
  description:
    'Torre vigía del siglo XVI catalogada como Monumento en la Playa de San Juan, Alicante. Conoce la historia de Finca Torre Bosch y al equipo de Enrique y María.',
  path: '/sobre-mi',
  image: '/photos/torre-noche-guirnaldas.webp',
})

const values = [
  { title: 'Compromiso', text: 'Una boda se prepara durante meses. Estamos a vuestro lado desde la primera visita.' },
  { title: 'Constancia', text: 'Con dedicación diaria llegamos a un resultado excelente, año tras año.' },
  { title: 'Equipo', text: 'Cocina, sala, montaje y coordinación. Cada persona se esfuerza por superarse.' },
  { title: 'Confianza', text: 'Os transmitimos seguridad desde el primer momento, sin letra pequeña.' },
  { title: 'Detalle', text: 'Un trabajo personalizado para que cada detalle se recuerde como único.' },
]

const history = [
  { when: 'Siglo XVI', what: 'Los ataques berberiscos obligan a levantar torres vigía en la costa. Nace la Torre Bosch.' },
  { when: 'Siglos XVII a XIX', what: 'La torre se integra en una finca agrícola de la huerta de Alicante, rodeada de pinos.' },
  { when: 'Hoy', what: 'Catalogada como Bien Protegido, categoría Monumento, y restaurada con respeto.' },
  { when: '15+ años', what: 'Enrique, María y su equipo abren la finca a bodas y celebraciones únicas.' },
]

export default function SobreMi() {
  return (
    <>
      <PageHero
        image="/photos/torre-noche-guirnaldas.webp"
        alt="Torre vigía del siglo XVI iluminada de noche con guirnaldas de luces sobre las mesas del banquete"
        eyebrow="La finca"
        lines={['Cinco siglos', <em key="e">mirando al mar</em>]}
        text="Una torre construida para vigilar la costa, hoy convertida en el escenario de las bodas más especiales de Alicante."
      />

      <section className="section">
        <div className="container">
          <div className="story">
            <Reveal variant="scale-in" className="story__photo">
              <span className="story__frame" aria-hidden="true" />
              <Image
                src="/photos/biblioteca-novia.webp"
                alt="Novia en la biblioteca de la torre junto a un retrato antiguo y estanterías de libros"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
              />
            </Reveal>
            <div className="prose">
              <Reveal>
                <span className="eyebrow">Nuestra historia</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">
                  Una torre para <em>avistar</em> piratas
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="dropcap">
                  Tras el enfrentamiento entre el poder turco otomano y el emperador en Europa, la costa alicantina sufrió
                  durante el siglo XVI numerosos ataques berberiscos. Para defenderse, se construyeron torres fortificadas
                  de vigía desde las que avistar a los piratas. La Torre Bosch es una de ellas.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="muted">
                  Hoy la torre es el corazón de una finca de 22.000 m² en la Playa de San Juan, junto al Campo de Golf de
                  Alicante. Guarda dos salones, una biblioteca y una capilla, decorados con sutileza y en completa armonía.
                  A su alrededor crecen jardines, fuentes, estatuas y pinadas de árboles centenarios.
                </p>
              </Reveal>
              <Reveal delay={0.3}>
                <p className="muted">
                  Tras más de quince años dedicados a la planificación integral de bodas, nuestra meta sigue siendo la misma:
                  mejorar cada día para que cada detalle se recuerde como algo único e inolvidable.
                </p>
              </Reveal>
              <Reveal delay={0.36}>
                <p className="signature">{siteConfig.planner}</p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Line width="6rem" />
          <Reveal>
            <h2 className="title" style={{ marginTop: '1.8rem', marginBottom: '3rem' }}>
              Quinientos años en <em>cuatro</em> momentos
            </h2>
          </Reveal>
          <ol className="timeline-h">
            {history.map((h, i) => (
              <Reveal as="li" key={h.when} index={i}>
                <strong>{h.when}</strong>
                <span className="muted small">{h.what}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="separator" aria-label="La capilla de la torre">
        <Image
          src="/photos/capilla-interior.webp"
          alt="Capilla interior de la torre con velas encendidas y cuadro religioso antiguo"
          fill
          sizes="100vw"
        />
        <Reveal className="separator__text" variant="fade-in">
          <span className="script">Dos salones, biblioteca y capilla</span>
          <p>El interior de la torre</p>
        </Reveal>
      </section>

      <section className="section">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Nuestros valores</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ marginBottom: '3rem' }}>
              Lo que nos <em>mueve</em>
            </h2>
          </Reveal>
          <div className="values">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value" index={i}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
