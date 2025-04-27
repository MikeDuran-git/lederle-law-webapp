"use client"

import Link from 'next/link'
import { Scale } from 'lucide-react'
import { QuickLinks } from './quick-links'
import { ContactInfo } from './contact-info'
import { Map } from './map'
import { Copyright } from './copyright'

export function Footer() {
  return (
    <footer className="bg-[#2D2D2D] text-[#EFE6DA]/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center space-x-2 text-[#EFE6DA] mb-4">
              <Scale className="h-6 w-6" />
              <span className="font-semibold text-lg">ANWALTSKANZLEI LEDERLE</span>
            </Link>
            <p className="text-sm text-[#EFE6DA]/70">
              Wir bieten seit 1990 kompetente Rechtsdienstleistungen mit Integrität und Engagement.
            </p>
          </div>
          <QuickLinks />
          <ContactInfo />
        </div>
        <Map />
        <Copyright />
      </div>
    </footer>
  )
}