import Link from 'next/link'
import type { ReactNode } from 'react'
import Reveal from './Reveal'
import { waLink } from './WhatsAppButton'

type Props = { title?: ReactNode; text?: string; surface?: boolean }

export default function CtaBand({
  title = (
    <>
      Venid a <em>conocer</em> la finca
    </>
  ),
  text = 'Las visitas se hacen con cita previa, de lunes a sábado. Os enseñamos la torre, los jardines y cada espacio montado.',
  surface = true,
}: Props) {
  return (
    <section className={`section cta-band${surface ? ' section--surface' : ''}`}>
      <span className="watermark" aria-hidden="true">
        Torre Bosch
      </span>
      <div className="container" style={{ position: 'relative' }}>
        <Reveal>
          <span className="eyebrow">Siguiente paso</span>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="title">{title}</h2>
        </Reveal>
        <Reveal delay={0.16}>
          <p className="muted" style={{ maxWidth: '36rem', margin: '0 auto 2rem' }}>
            {text}
          </p>
        </Reveal>
        <Reveal delay={0.24} className="btn-row">
          <Link href="/contacto" className="btn btn--solid">
            Pedir cita
          </Link>
          <a href={waLink()} className="btn" target="_blank" rel="noopener noreferrer">
            WhatsApp
          </a>
        </Reveal>
      </div>
    </section>
  )
}
