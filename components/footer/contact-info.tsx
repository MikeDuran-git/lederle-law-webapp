import Link from 'next/link'
import { MapPin } from 'lucide-react'

export function ContactInfo() {
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=48.573498,7.805743"

  return (
    <div>
      <h3 className="font-semibold text-[#EFE6DA] mb-4">Kontakt</h3>
      <address className="not-italic text-[#EFE6DA]/70">
        <p>Hermann-Dietrich-Str. 4</p>
        <p>77694 Kehl</p>
        <p className="mt-2">Tel: +49 07851 8001</p>
        <p>E-Mail: kanzlei@lederlelaw.com</p>
        <Link 
          href={googleMapsUrl}
          target="_blank"
          className="flex items-center space-x-2 mt-4 text-[#A7B19A] hover:text-[#A7B19A]/80 transition-colors"
        >
          <MapPin className="h-5 w-5" />
          <span>Auf Google Maps ansehen</span>
        </Link>
      </address>
    </div>
  )
}