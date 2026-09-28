import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import ContactForm from '@/components/ContactForm'
import { waLink } from '@/components/WhatsAppButton'
import { coverage, siteConfig } from '@/content/data'
import { pageMeta } from '@/content/seo'

export const metadata = pageMeta({
  title: 'Contacto y visitas',
  description:
    'Reserva tu visita a Finca Torre Bosch en Avda. Conrado Albadalejo 3, Playa de San Juan, Alicante. Llámanos, escríbenos por WhatsApp o envía tu consulta aquí.',
  path: '/contacto',
  image: '/photos/fachada-pinos-atardecer.webp',
})

export default function Contacto() {
  return (
    <>
      <PageHero
        image="/photos/pasillo-ceremonia-faroles.webp"
        alt="Pasillo de ceremonia con faroles y sillas blancas bajo los pinos de la finca"
        eyebrow="Contacto"
        lines={['Hablemos de', <em key="e">vuestro día</em>]}
        text="Respondemos en menos de 24 horas con disponibilidad, presupuesto orientativo y una cita para visitar la finca."
      />

      <section className="section">
        <div className="container contact">
          <div className="contact__info">
            <Reveal>
              <span className="eyebrow">Escribidnos</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                Cuanto más nos <em>contéis</em>, mejor
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                Fecha, número de invitados y cómo imagináis la celebración. Si lo preferís, llamadnos o escribid por
                WhatsApp.
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
              <Reveal index={3}>
                <dt>WhatsApp</dt>
                <dd>
                  <a href={waLink()} target="_blank" rel="noopener noreferrer">
                    Abrir conversación
                  </a>
                </dd>
              </Reveal>
              <Reveal index={4}>
                <dt>Dirección</dt>
                <dd style={{ fontSize: '1.15rem' }}>
                  {siteConfig.address.street}
                  <br />
                  {siteConfig.address.postalCode} {siteConfig.address.city}
                </dd>
              </Reveal>
            </dl>
          </div>
          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>

      <section className="section section--surface">
        <div className="container split">
          <div>
            <Reveal>
              <span className="eyebrow">Zona de cobertura</span>
            </Reveal>
            <Reveal delay={0.08}>
              <h2 className="title">
                A cinco minutos del <em>mar</em>
              </h2>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="muted">
                La finca está en la Playa de San Juan, junto al Campo de Golf de Alicante, con fácil acceso desde toda la
                provincia y amplio parking privado vigilado para vuestros invitados.
              </p>
            </Reveal>
            <ul className="coverage">
              {coverage.map((c, i) => (
                <Reveal as="li" key={c.place} index={i}>
                  <span>{c.place}</span>
                  <span>{c.time}</span>
                </Reveal>
              ))}
            </ul>
          </div>
          <Reveal variant="fade-in">
            <iframe
              className="map"
              title="Mapa de Finca Torre Bosch en Playa de San Juan, Alicante"
              src="https://www.google.com/maps?q=Finca+Torre+Bosch,+Avda.+Conrado+Albadalejo+3,+03540+Alicante&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Reveal>
        </div>
      </section>
    </>
  )
}
