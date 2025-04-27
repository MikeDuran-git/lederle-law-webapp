import { Metadata } from 'next'
import { TeamSection } from '@/components/sections/team'

export const metadata: Metadata = {
  title: 'Unser Team | Lederle Law',
  description: 'Lernen Sie unser erfahrenes Team kennen, das sich für Ihre rechtlichen Interessen einsetzt.',
}

export default function TeamPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Unser Team</h1>
          <p className="text-gray-600 max-w-2xl">
            Lernen Sie unser erfahrenes Team kennen, das sich der Erbringung erstklassiger 
            Rechtsdienstleistungen und dem Schutz Ihrer Interessen verschrieben hat. Mit jahrelanger 
            Erfahrung und Expertise in verschiedenen Rechtsbereichen stehen wir Ihnen kompetent zur Seite.
          </p>
        </div>
      </div>
      <TeamSection />
    </div>
  )
}