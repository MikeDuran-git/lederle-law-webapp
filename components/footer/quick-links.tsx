import Link from 'next/link'

export function QuickLinks() {
  return (
    <div>
      <h3 className="font-semibold text-[#EFE6DA] mb-4">Schnellzugriff</h3>
      <ul className="space-y-2">
        <li>
          <Link 
            href="/" 
            className="text-[#EFE6DA]/70 hover:text-[#A7B19A] transition-colors"
          >
            Startseite
          </Link>
        </li>
        <li>
          <Link 
            href="/#about" 
            className="text-[#EFE6DA]/70 hover:text-[#A7B19A] transition-colors"
          >
            Über Uns
          </Link>
        </li>
        <li>
          <Link 
            href="/formulare" 
            className="text-[#EFE6DA]/70 hover:text-[#A7B19A] transition-colors"
          >
            Formulare
          </Link>
        </li>
        <li>
          <Link 
            href="/#contact" 
            className="text-[#EFE6DA]/70 hover:text-[#A7B19A] transition-colors"
          >
            Kontakt
          </Link>
        </li>
      </ul>
    </div>
  )
}