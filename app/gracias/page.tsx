import type { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '@/components/PageHero'
import Reveal from '@/components/Reveal'
import { waLink } from '@/components/WhatsAppButton'
import { siteConfig } from '@/content/data'

export const metadata: Metadata = {
  title: 'Gracias por escribirnos',
  description:
    'Hemos recibido tu consulta para celebrar en Finca Torre Bosch, Playa de San Juan, Alicante. Enrique o María te responderán en menos de 24 horas por email.',
  robots: { index: false, follow: true },
  openGraph: { images: ['/og-image.jpg'] },
}

export default function Gracias() {
  return (
    <>
      <PageHero
        image="/photos/novios-pinar-atardecer.webp"
        alt="Novios brindando en la pinada de la finca al atardecer"
        eyebrow="Mensaje recibido"
        lines={['Gracias,', <em key="e">de corazón</em>]}
        text="Hemos recibido vuestra consulta. En menos de 24 horas os escribiremos con disponibilidad y una propuesta de visita."
      />
      <section className="section cta-band">
        <div className="container">
          <Reveal>
            <p className="signature" style={{ marginTop: 0 }}>
              {siteConfig.planner}
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="muted" style={{ maxWidth: '34rem', margin: '1rem auto 2rem' }}>
              Mientras tanto, podéis ver más bodas reales o, si tenéis prisa por reservar fecha, escribirnos por WhatsApp.
            </p>
          </Reveal>
          <Reveal delay={0.16} className="btn-row">
            <Link href="/portfolio" className="btn btn--solid">
              Ver bodas reales
            </Link>
            <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
              WhatsApp
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
