import Image from 'next/image'
import Link from 'next/link'
import { siteConfig } from '@/content/data'
import { waLink } from './WhatsAppButton'

export default function Footer() {
  const ig = siteConfig.instagram.replace('@', '')
  return (
    <footer className="footer">
      <div className="footer__bg">
        <Image
          src="/photos/fachada-pinos-atardecer.webp"
          alt="Fachada de piedra de Finca Torre Bosch entre pinos al atardecer"
          fill
          sizes="100vw"
        />
      </div>
      <div className="container">
        <p className="footer__quote">“{siteConfig.quote}”</p>
        <p className="footer__sig">{siteConfig.planner}</p>
        <div className="footer__grid">
          <div className="footer__brand">
            <span className="script">Torre Bosch</span>
            <p className="small" style={{ opacity: 0.8, marginTop: '1rem', maxWidth: '22rem' }}>
              Finca señorial del siglo XVI para bodas y eventos en la Playa de San Juan, Alicante.
            </p>
          </div>
          <div>
            <h4>Explorar</h4>
            <ul>
              <li>
                <Link href="/espacios">Espacios</Link>
              </li>
              <li>
                <Link href="/servicios">Celebraciones</Link>
              </li>
              <li>
                <Link href="/portfolio">Bodas reales</Link>
              </li>
              <li>
                <Link href="/sobre-mi">La finca</Link>
              </li>
            </ul>
          </div>
          <div>
            <h4>Contacto</h4>
            <ul>
              {siteConfig.phones.map((p) => (
                <li key={p.tel}>
                  <a href={`tel:${p.tel}`}>
                    {p.name} · {p.number}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${siteConfig.email}`}>{siteConfig.email}</a>
              </li>
              <li>
                <a href={waLink()} target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Visitadnos</h4>
            <ul>
              <li>
                <a href="https://maps.google.com/?q=Finca+Torre+Bosch+Alicante" target="_blank" rel="noopener noreferrer">
                  {siteConfig.address.street}, {siteConfig.address.postalCode} {siteConfig.address.city}
                </a>
              </li>
              <li>
                <a href={`https://www.instagram.com/${ig}/`} target="_blank" rel="noopener noreferrer">
                  Instagram {siteConfig.instagram}
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer__legal">
          <span>
            © {new Date().getFullYear()} {siteConfig.name} · Bien Protegido, categoría Monumento
          </span>
          <span>Bodas · Ceremonias · Eventos · Alicante</span>
        </div>
      </div>
    </footer>
  )
}
