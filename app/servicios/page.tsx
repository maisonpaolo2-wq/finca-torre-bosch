import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal, { Line } from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { faqs, services } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Bodas, ceremonias y eventos',
  description:
    'Bodas, ceremonias civiles, comuniones y eventos de empresa en Finca Torre Bosch, Playa de San Juan, Alicante. Menús a medida, decoración y exclusividad total.',
  path: '/servicios',
  image: '/photos/ceremonia-arco-flores.webp',
})

export default function Servicios() {
  return (
    <>
      <PageHero
        image="/photos/ceremonia-arco-flores.webp"
        alt="Ceremonia civil ante un arco de flores y hiedra en los jardines de la finca"
        eyebrow="Celebraciones"
        lines={['Cada celebración,', <em key="e">a vuestra medida</em>]}
        text="Cuatro maneras de vivir la finca, con un mismo principio: un único evento al día y un equipo pendiente de vosotros."
      />

      <section className="section">
        <div className="container">
          {services.map((s, i) => (
            <div key={s.slug} id={s.slug} className={`split${i % 2 ? ' split--reverse' : ''}`} style={{ scrollMarginTop: '100px' }}>
              <Reveal variant="scale-in" className="split__photo">
                <Image src={s.image} alt={`${s.title} en Finca Torre Bosch, Alicante`} fill sizes="(min-width: 900px) 50vw, 100vw" />
              </Reveal>
              <div>
                <Reveal>
                  <span className="eyebrow">0{i + 1} · Celebración</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="title">{s.title}</h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="muted">{s.longDescription}</p>
                </Reveal>
                <ul className="checklist">
                  {s.includes.map((item, n) => (
                    <Reveal as="li" key={item} index={n}>
                      {item}
                    </Reveal>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section section--surface">
        <div className="container" style={{ maxWidth: '900px' }}>
          <Line width="6rem" />
          <Reveal>
            <h2 className="title" style={{ marginTop: '1.8rem' }}>
              Preguntas <em>frecuentes</em>
            </h2>
          </Reveal>
          <div className="faq">
            {faqs.map((f, i) => (
              <Reveal key={f.q} index={i}>
                <details>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        surface={false}
        title={
          <>
            Os ayudamos a <em>elegir</em>
          </>
        }
        text="Contadnos qué queréis celebrar y os proponemos espacios, horarios y menú. Presupuesto cerrado y sin compromiso."
      />
    </>
  )
}
