import { Metadata } from 'next'

export const defaultMetadata: Metadata = {
  metadataBase: new URL('https://lederlelaw.com'),
  title: {
    default: 'Lederle Law | Professionelle Rechtsdienstleistungen',
    template: '%s | Lederle Law'
  },
  description: 'Kompetente Rechtsvertretung und Beratung in Kehl. Spezialisiert auf Strafrecht, Arbeitsrecht und weitere Rechtsbereiche.',
  keywords: [
    'Rechtsanwalt Kehl',
    'Anwaltskanzlei Kehl',
    'Strafrecht',
    'Arbeitsrecht',
    'Verwaltungsrecht',
    'Rechtsberatung',
    'Lederle Law',
    'Fachanwalt Strafrecht'
  ],
  authors: [{ name: 'Lederle Law' }],
  creator: 'Lederle Law',
  publisher: 'Lederle Law',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'de_DE',
    url: 'https://lederlelaw.com',
    siteName: 'Lederle Law',
    title: 'Lederle Law | Professionelle Rechtsdienstleistungen',
    description: 'Kompetente Rechtsvertretung und Beratung in Kehl. Spezialisiert auf Strafrecht, Arbeitsrecht und weitere Rechtsbereiche.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3',
        width: 1200,
        height: 630,
        alt: 'Lederle Law Kanzlei',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lederle Law | Professionelle Rechtsdienstleistungen',
    description: 'Kompetente Rechtsvertretung und Beratung in Kehl. Spezialisiert auf Strafrecht, Arbeitsrecht und weitere Rechtsbereiche.',
    images: ['https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://lederlelaw.com',
  },
}

export const structuredData = {
  organization: {
    '@context': 'https://schema.org',
    '@type': 'LegalService',
    name: 'Lederle Law',
    description: 'Professionelle Rechtsdienstleistungen in Kehl',
    url: 'https://lederlelaw.com',
    logo: 'https://lederlelaw.com/logo.png',
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Hermann-Dietrich-Str. 4',
      addressLocality: 'Kehl',
      postalCode: '77694',
      addressCountry: 'DE'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '48.573498',
      longitude: '7.805743'
    },
    telephone: '+49078518001',
    email: 'kanzlei@lederlelaw.com',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:30',
        closes: '17:00'
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:30',
        closes: '14:00'
      }
    ],
    sameAs: [
      'https://www.linkedin.com/company/lederle-law',
      'https://www.facebook.com/lederlelaw'
    ]
  }
}