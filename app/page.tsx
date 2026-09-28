import Image from 'next/image'
import Link from 'next/link'
import HeroTitle from '@/components/HeroTitle'
import Reveal, { Line } from '@/components/Reveal'
import Gallery from '@/components/Gallery'
import Testimonials from '@/components/Testimonials'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { photos, processSteps, services, siteConfig, spaces, stats } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Finca para bodas y eventos en Alicante',
  description:
    'Finca Torre Bosch, torre del siglo XVI y 22.000 m² de jardines en la Playa de San Juan, Alicante. Bodas, ceremonias civiles y eventos en exclusiva cada día.',
  path: '/',
})

const portfolioHome = photos.filter((p) => !p.featured).slice(0, 12)

export default function Home() {
  return (
    <>
      {/* HERO · fullbleed */}
      <section className="hero">
        <div className="hero__media">
          <Image
            src="/photos/banquete-pinar.webp"
            alt="Banquete de boda con mantelería azul bajo la pinada centenaria de Finca Torre Bosch"
            fill
            priority
            sizes="100vw"
          />
        </div>
        <div className="container hero__content">
          <Reveal variant="fade-in">
            <span className="eyebrow eyebrow--light">Finca señorial · Playa de San Juan, Alicante</span>
          </Reveal>
          <HeroTitle
            lines={[
              'Donde el',
              <span key="l2">
                siglo <em>XVI</em>
              </span>,
              'dice sí',
            ]}
          />
          <Reveal delay={0.65}>
            <p className="hero__sub">{siteConfig.bioShort}</p>
          </Reveal>
          <Reveal delay={0.75} className="btn-row">
            <Link href="/contacto" className="btn btn--light">
              Visitar la finca
            </Link>
            <a href={waLink()} className="btn btn--light" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Reveal>
        </div>
        <span className="hero__scroll" aria-hidden="true">
          Desliza · 22.000 m²
        </span>
      </section>

      {/* INTRO · asimétrica 40/60, empieza con subtítulo fino */}
      <section className="section" id="intro">
        <div className="container">
          <div className="intro">
            <div>
              <Reveal>
                <span className="eyebrow">Una finca, un evento al día</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">
                  Una torre vigía que hoy <em>solo</em> mira por vosotros
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="muted">
                  Se levantó en el siglo XVI para avistar piratas berberiscos desde la costa. Hoy está catalogada como
                  Monumento y rodeada de jardines, fuentes y pinos centenarios. Ceremonia, cóctel, banquete y barra libre,
                  todo sin salir de la finca y sin compartirla con nadie.
                </p>
              </Reveal>
              <Reveal delay={0.24}>
                <Link href="/sobre-mi" className="link-arrow">
                  Nuestra historia →
                </Link>
              </Reveal>
            </div>
            <Reveal variant="scale-in" className="intro__photo">
              <Image
                src="/photos/patio-torre-chillout.webp"
                alt="Patio frente a la torre de piedra con sombrillas blancas y mesas altas para el cóctel"
                fill
                sizes="(min-width: 900px) 60vw, 100vw"
              />
            </Reveal>
          </div>
          <div className="stats">
            {stats.map((s, i) => (
              <Reveal key={s.label} index={i}>
                <div className="stats__value">{s.value}</div>
                <div className="stats__label">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ESPACIOS · filmstrip, empieza con número grande */}
      <section className="section section--surface" id="espacios">
        <div className="container">
          <div className="spaces-head">
            <span className="watermark" aria-hidden="true">
              05
            </span>
            <div>
              <Reveal>
                <span className="eyebrow">Los espacios</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title" style={{ marginBottom: 0 }}>
                  Cinco escenarios, <em>una</em> finca
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.16}>
              <p className="muted" style={{ marginBottom: 0 }}>
                De la biblioteca de la torre a las camas balinesas bajo los pinos. Desliza para recorrerlos.
              </p>
            </Reveal>
          </div>
        </div>
        <div className="filmstrip">
          {spaces.map((s, i) => (
            <Reveal key={s.slug} as="article" className="space-card" index={i}>
              <Link href={`/espacios#${s.slug}`}>
                <div className="space-card__img">
                  <span className="space-card__tag">{s.size}</span>
                  <Image src={s.image} alt={`${s.name} de Finca Torre Bosch`} fill sizes="(min-width: 768px) 420px, 82vw" />
                </div>
                <h3>{s.name}</h3>
                <p className="muted small">{s.description}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* SEPARADOR a sangre */}
      <section className="separator" aria-label="Noches en Torre Bosch">
        <Image
          src="/photos/tunel-luces-novios.webp"
          alt="Novios bajo un túnel de luces cálidas entre los árboles de la finca de noche"
          fill
          sizes="100vw"
        />
        <Reveal className="separator__text" variant="fade-in">
          <span className="script">Y cae la noche…</span>
          <p>Guirnaldas, pinos y una torre encendida</p>
        </Reveal>
      </section>

      {/* CELEBRACIONES · cards, empieza con línea + título */}
      <section className="section" id="celebraciones">
        <div className="container">
          <Line width="6rem" />
          <Reveal>
            <h2 className="title" style={{ marginTop: '1.8rem' }}>
              Lo que <em>celebramos</em>
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="muted" style={{ maxWidth: '38rem', marginBottom: '3rem' }}>
              Bodas, ceremonias civiles, comuniones y eventos de empresa. Mismo cuidado, misma exclusividad.
            </p>
          </Reveal>
          <div className="cards">
            {services.map((s, i) => (
              <Reveal key={s.slug} as="article" className="card" index={i}>
                <div className="card__img">
                  <Image src={s.image} alt={`${s.title} en Finca Torre Bosch`} fill sizes="(min-width: 768px) 30vw, 100vw" />
                </div>
                <div className="card__body">
                  <span className="card__num">0{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p className="muted small">{s.description}</p>
                  <Link href={`/servicios#${s.slug}`} className="link-arrow">
                    Ver detalle →
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESO · números grandes */}
      <section className="section section--surface" id="proceso">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Cómo trabajamos</span>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="title" style={{ maxWidth: '16ch', marginBottom: '3rem' }}>
              De la primera visita al <em>último</em> baile
            </h2>
          </Reveal>
          <ol className="process" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {processSteps.map((s, i) => (
              <Reveal key={s.number} as="li" className="step" index={i}>
                <span className="step__num">0{s.number}</span>
                <h3>{s.title}</h3>
                <p>{s.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* PORTFOLIO · masonry edge-to-edge */}
      <section className="section" id="bodas-reales">
        <div className="container" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'end', gap: '1rem', marginBottom: '2.5rem' }}>
          <div>
            <Reveal>
              <span className="eyebrow">Bodas reales</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title" style={{ marginBottom: 0 }}>
                Ellos ya dijeron <em>sí</em> aquí
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.16}>
            <Link href="/portfolio" className="link-arrow">
              Ver todas las bodas →
            </Link>
          </Reveal>
        </div>
        <div className="portfolio-edge">
          <Gallery photos={portfolioHome} />
        </div>
      </section>

      {/* SOBRE · historia con foto portrait */}
      <section className="section section--surface" id="historia">
        <div className="container">
          <div className="story">
            <Reveal variant="scale-in" className="story__photo">
              <span className="story__frame" aria-hidden="true" />
              <Image
                src="/photos/jardin-torre-banquete.webp"
                alt="Mesas de banquete en el jardín con la torre de piedra del siglo XVI al fondo"
                fill
                sizes="(min-width: 900px) 50vw, 100vw"
              />
            </Reveal>
            <div style={{ position: 'relative' }}>
              <span className="watermark" aria-hidden="true">
                1500
              </span>
              <Reveal>
                <span className="eyebrow">Quiénes somos</span>
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="title">
                  Quince años cuidando <em>cada</em> detalle
                </h2>
              </Reveal>
              <Reveal delay={0.16}>
                <p className="muted">{siteConfig.bio}</p>
              </Reveal>
              <Reveal delay={0.24}>
                <p className="signature">{siteConfig.planner}</p>
              </Reveal>
              <Reveal delay={0.3}>
                <Link href="/sobre-mi" className="link-arrow">
                  Conoce la finca →
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIOS · quote grande */}
      <section className="section" id="testimonios">
        <div className="container">
          <Reveal style={{ textAlign: 'center' }}>
            <span className="eyebrow">Lo que cuentan</span>
          </Reveal>
          <Testimonials />
        </div>
      </section>

      {/* CONTACTO */}
      <section className="section section--surface" id="contacto">
        <div className="container contact">
          <div className="contact__info">
            <Reveal>
              <span className="eyebrow">Contacto</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                ¿Vuestra fecha sigue <em>libre</em>?
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Contadnos cuándo y cuántos seréis. Os respondemos en menos de 24 horas con disponibilidad y una cita para
                visitar la finca.
              </p>
            </Reveal>
            <dl>
              {siteConfig.phones.map((p, i) => (
                <Reveal key={p.tel} index={i}>
                  <dt>{p.name}</dt>
                  <dd>
                    <a href={`tel:${p.tel}`}>{p.number}</a>
                  </dd>
                </Reveal>
              ))}
              <Reveal index={2}>
                <dt>Email</dt>
                <dd>
                  <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
                </dd>
              </Reveal>
            </dl>
          </div>
          <Reveal delay={0.1}>
            <ContactForm compact />
          </Reveal>
        </div>
      </section>
    </>
  )
}
