"use client"

import Link from 'next/link'
import { Scale, MapPin } from 'lucide-react'

export function Footer() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=48.573498,7.805743"

  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-white mb-4">
              <Scale className="h-6 w-6" />
              <span className="font-semibold text-lg">Lederle Law</span>
            </Link>
            <p className="text-sm">
              Wir bieten seit 1990 kompetente Rechtsdienstleistungen mit Integrität und Engagement.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Schnellzugriff</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="hover:text-white transition-colors">Startseite</Link></li>
              <li><Link href="/#about" className="hover:text-white transition-colors">Über Uns</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors">Kontakt</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-white mb-4">Kontakt</h3>
            <address className="not-italic">
              <p>Hermann-Dietrich-Str. 4</p>
              <p>77694 Kehl</p>
              <p className="mt-2">Tel: +49 07851 8001</p>
              <p>E-Mail: kanzlei@lederlelaw.com</p>
              <Link 
                href={googleMapsUrl}
                target="_blank"
                className="flex items-center space-x-2 mt-4 text-primary hover:text-primary/80 transition-colors"
              >
                <MapPin className="h-5 w-5" />
                <span>Auf Google Maps ansehen</span>
              </Link>
            </address>
          </div>
        </div>

        {/* OpenStreetMap iframe */}
        <div className="mt-8 w-full h-64 rounded-lg overflow-hidden relative">
          <Link href={googleMapsUrl} target="_blank" className="block w-full h-full relative group">
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10" />
            <iframe
              src="https://www.openstreetmap.org/export/embed.html?bbox=7.803743%2C48.571498%2C7.807743%2C48.575498&amp;layer=mapnik&amp;marker=48.573498%2C7.805743"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </Link>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Lederle Law. Alle Rechte vorbehalten.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href="/datenschutz" className="hover:text-white transition-colors">Datenschutz</Link>
              <Link href="/impressum" className="hover:text-white transition-colors">Impressum</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}