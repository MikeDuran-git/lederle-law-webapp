"use client"

import Link from 'next/link'
import { Phone, Mail, PhoneCall } from 'lucide-react'

export function FloatingContact() {
  return (
    <div className="fixed right-0 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-2">
        {/* Emergency Number */}
        <div className="group relative flex items-center">
          <div className="absolute right-full mr-2 hidden group-hover:block">
            <div className="bg-red-600 text-white px-4 py-2 rounded-lg whitespace-nowrap">
              <p className="font-semibold">Notfallnummer: +49 (0) 171 - 301 8002</p>
            </div>
          </div>
          <Link 
            href="tel:+491713018002"
            className="bg-red-600 hover:bg-red-700 text-white p-3 rounded-l-lg transition-all duration-300 flex items-center justify-center"
          >
            <PhoneCall className="h-6 w-6" />
          </Link>
        </div>

        {/* Regular Phone */}
        <div className="group relative flex items-center">
          <div className="absolute right-full mr-2 hidden group-hover:block">
            <div className="bg-primary text-white px-4 py-2 rounded-lg whitespace-nowrap">
              <p className="font-semibold">+49 (0) 761 - 217 729 39</p>
            </div>
          </div>
          <Link 
            href="tel:+4976121772939"
            className="bg-primary hover:bg-primary/90 text-white p-3 rounded-l-lg transition-all duration-300 flex items-center justify-center"
          >
            <Phone className="h-6 w-6" />
          </Link>
        </div>

        {/* Email */}
        <div className="group relative flex items-center">
          <div className="absolute right-full mr-2 hidden group-hover:block">
            <div className="bg-blue-600 text-white px-4 py-2 rounded-lg whitespace-nowrap">
              <p className="font-semibold">kanzlei@lederlelaw.com</p>
            </div>
          </div>
          <Link 
            href="mailto:kanzlei@lederlelaw.com"
            className="bg-blue-600 hover:bg-blue-600/90 text-white p-3 rounded-l-lg transition-all duration-300 flex items-center justify-center"
          >
            <Mail className="h-6 w-6" />
          </Link>
        </div>
      </div>
    </div>
  )
}