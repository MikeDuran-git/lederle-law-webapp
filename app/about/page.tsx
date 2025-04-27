import { Metadata } from 'next'
import { AboutSection } from '@/components/sections/about'

export const metadata: Metadata = {
  title: 'Über Uns | Lederle Law',
  description: 'Erfahren Sie mehr über unsere Geschichte, Werte und unser Engagement für erstklassige Rechtsdienstleistungen in Kehl.',
}

export default function AboutPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Über Uns</h1>
          <p className="text-gray-600 max-w-2xl">
            Erfahren Sie mehr über unsere Geschichte, Werte und unser Engagement für erstklassige Rechtsdienstleistungen.
          </p>
        </div>
      </div>
      <AboutSection />
    </div>
  )
}