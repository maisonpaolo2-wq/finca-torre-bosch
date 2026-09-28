import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import CtaBand from '@/components/CtaBand'
import { photos, testimonials } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Bodas reales en la finca',
  description:
    'Galería de bodas reales celebradas en Finca Torre Bosch, Playa de San Juan, Alicante. Ceremonias entre pinos, banquetes bajo la torre y noches de luces.',
  path: '/portfolio',
  image: '/photos/novios-beso-guirnaldas.webp',
})

export default function Portfolio() {
  const gallery = photos.filter((p) => p.src !== '/photos/banquete-pinar.webp')
  return (
    <>
      <PageHero
        image="/photos/novios-abrazo-ramo.webp"
        alt="Novios abrazados con el ramo de rosas bajo una lluvia de pétalos en Finca Torre Bosch"
        eyebrow="Bodas reales"
        lines={['La ilusión', <em key="e">se respira</em>]}
        text="Algunas de las bodas celebradas en Torre Bosch. Pulsa cualquier foto para verla en grande."
      />

      <section className="section">
        <div className="container" style={{ marginBottom: '2.5rem' }}>
          <Reveal>
            <span className="eyebrow">{gallery.length} momentos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ maxWidth: '18ch' }}>
              Ceremonias, banquetes y <em>noches</em> largas
            </h2>
          </Reveal>
        </div>
        <div className="portfolio-edge">
          <Gallery photos={gallery} />
        </div>
      </section>

      <section className="section section--surface">
        <div className="container">
          <Reveal>
            <span className="eyebrow">En sus palabras</span>
          </Reveal>
          <div className="t-list">
            {testimonials.map((t, i) => (
              <Reveal key={t.name} className="t-item" index={i}>
                <div>
                  <h3>{t.name}</h3>
                  <p className="muted small">
                    {t.date} · {t.location}
                  </p>
                </div>
                <blockquote>“{t.text}”</blockquote>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        surface={false}
        title={
          <>
            La próxima puede ser <em>la vuestra</em>
          </>
        }
      />
    </>
  )
}
