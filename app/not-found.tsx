import Link from 'next/link'
import PageHero from '@/components/PageHero'

export const metadata = {
  title: 'Página no encontrada',
  robots: { index: false },
}

export default function NotFound() {
  return (
    <>
      <PageHero
        image="/photos/piscina-pinar-atardecer.webp"
        alt="Pinada de la finca al atardecer con la luz filtrándose entre los troncos"
        eyebrow="Error 404"
        lines={['Este camino', <em key="e">no lleva a la torre</em>]}
        text="La página que buscáis no existe o ha cambiado de sitio."
      />
      <section className="section cta-band">
        <div className="container">
          <div className="btn-row">
            <Link href="/" className="btn btn--solid">
              Volver al inicio
            </Link>
            <Link href="/contacto" className="btn">
              Contacto
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
