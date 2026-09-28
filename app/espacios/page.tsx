import Image from 'next/image'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import CtaBand from '@/components/CtaBand'
import { spaces } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Espacios e instalaciones',
  description:
    'Torre del XVI, jardines de 22.000 m², carpa de 400 m², salón acristalado y chill out. Instalaciones de Finca Torre Bosch en Playa de San Juan, Alicante.',
  path: '/espacios',
  image: '/photos/salon-acristalado-mesas.webp',
})

export default function Espacios() {
  return (
    <>
      <PageHero
        image="/photos/salon-acristalado-mesas.webp"
        alt="Salón acristalado de 450 m² con lámparas de araña y mesas vestidas con flores blancas"
        eyebrow="Instalaciones"
        lines={['Espacios para', <em key="e">cada momento</em>]}
        text="Ceremonia, cóctel, banquete y barra libre en espacios diferenciados. Sin mover a vuestros invitados de la finca."
      />

      {spaces.map((s, i) => (
        <section key={s.slug} id={s.slug} className={`section${i % 2 ? ' section--surface' : ''}`} style={{ scrollMarginTop: '60px' }}>
          <div className="container">
            <div className={`split${i % 2 ? ' split--reverse' : ''}`}>
              <Reveal variant="scale-in" className="split__photo">
                <Image src={s.image} alt={`${s.name}, Finca Torre Bosch`} fill sizes="(min-width: 900px) 50vw, 100vw" />
              </Reveal>
              <div style={{ position: 'relative' }}>
                <Reveal>
                  <span className="eyebrow">{s.size}</span>
                </Reveal>
                <Reveal delay={0.08}>
                  <h2 className="title">{s.name}</h2>
                </Reveal>
                <Reveal delay={0.16}>
                  <p className="lead" style={{ marginBottom: '1.2rem' }}>
                    {s.capacity}
                  </p>
                </Reveal>
                <Reveal delay={0.24}>
                  <p className="muted">{s.description}</p>
                </Reveal>
              </div>
            </div>
            <div className="mini-gallery">
              {s.gallery.map((g, n) => (
                <Reveal key={g} variant="scale-in" index={n}>
                  <Image src={g} alt={`${s.name} de Finca Torre Bosch, detalle ${n + 1} del espacio`} fill sizes="(min-width: 560px) 33vw, 100vw" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <CtaBand />
    </>
  )
}
