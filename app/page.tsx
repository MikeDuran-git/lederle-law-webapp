import { Metadata } from 'next'
import { HeroSection } from '@/components/sections/hero'
import { PracticeAreas } from '@/components/sections/practice-areas'
import { AboutSection } from '@/components/sections/about'
import { ContactSection } from '@/components/sections/contact'

export const metadata: Metadata = {
  title: 'Lederle Law | Professionelle Rechtsdienstleistungen',
  description: 'Kompetente Rechtsvertretung und Beratung in Kehl. Spezialisiert auf Strafrecht, Arbeitsrecht und weitere Rechtsbereiche.',
  openGraph: {
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
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <HeroSection />
      <PracticeAreas />
      <AboutSection />
      <ContactSection />
    </div>
  )
}