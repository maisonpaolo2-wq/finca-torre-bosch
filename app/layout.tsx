import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Outfit, Pinyon_Script } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import WhatsAppButton from '@/components/WhatsAppButton'
import ClientRoot from '@/components/ClientRoot'
import JsonLd from '@/components/JsonLd'
import { siteConfig } from '@/content/data'
import { siteUrl } from '@/content/seo'

const serif = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500'],
  style: ['normal', 'italic'],
  variable: '--ff-serif',
  display: 'swap',
})
const sans = Outfit({ subsets: ['latin'], weight: ['300', '400', '500'], variable: '--ff-sans', display: 'swap' })
const script = Pinyon_Script({ subsets: ['latin'], weight: '400', variable: '--ff-script', display: 'swap' })

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${siteConfig.name} · Finca para bodas en Alicante`,
    template: `%s · ${siteConfig.name}`,
  },
  description:
    'Finca señorial del siglo XVI con 22.000 m² de jardines en la Playa de San Juan, Alicante. Bodas, ceremonias civiles y eventos en exclusiva, uno al día.',
  openGraph: {
    siteName: siteConfig.name,
    locale: 'es_ES',
    type: 'website',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: siteConfig.name }],
  },
  icons: { icon: '/icon.svg' },
}

export const viewport: Viewport = {
  themeColor: '#f6f1e9',
  viewportFit: 'cover',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${serif.variable} ${sans.variable} ${script.variable}`}>
      <body>
        <a href="#main" className="skip">
          Saltar al contenido
        </a>
        <ClientRoot>
          <Nav />
          <main id="main">{children}</main>
          <Footer />
          <WhatsAppButton />
        </ClientRoot>
        <JsonLd />
      </body>
    </html>
  )
}
