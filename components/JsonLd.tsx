import { siteConfig, testimonials } from '@/content/data'

export default function JsonLd() {
  const url = `https://${siteConfig.domain}`
  const data = {
    '@context': 'https://schema.org',
    '@type': ['LocalBusiness', 'WeddingPlanner'],
    '@id': `${url}/#business`,
    name: siteConfig.name,
    description: siteConfig.bioShort,
    url,
    image: `${url}/og-image.jpg`,
    logo: `${url}/logo-torre-bosch.jpg`,
    email: siteConfig.email,
    telephone: siteConfig.phones[0].tel,
    priceRange: '€€€',
    address: {
      '@type': 'PostalAddress',
      streetAddress: siteConfig.address.street,
      postalCode: siteConfig.address.postalCode,
      addressLocality: 'Alicante',
      addressRegion: siteConfig.address.region,
      addressCountry: siteConfig.address.country,
    },
    geo: { '@type': 'GeoCoordinates', latitude: siteConfig.address.lat, longitude: siteConfig.address.lng },
    areaServed: siteConfig.locations,
    sameAs: [`https://www.instagram.com/${siteConfig.instagram.replace('@', '')}/`],
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '5.0',
      bestRating: '5',
      reviewCount: testimonials.length,
    },
    review: testimonials.map((t) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: t.name },
      reviewBody: t.text,
      reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
