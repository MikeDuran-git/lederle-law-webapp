import Link from 'next/link'

export function Copyright() {
  return (
    <div className="border-t border-[#EFE6DA]/10 mt-8 pt-8 text-sm">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <p className="text-[#EFE6DA]/70">
          &copy; {new Date().getFullYear()} ANWALTSKANZLEI LEDERLE. Alle Rechte vorbehalten.
        </p>
        <div className="flex space-x-4 mt-4 md:mt-0">
          <Link 
            href="/datenschutz" 
            className="text-[#EFE6DA]/70 hover:text-[#A7B19A] transition-colors"
          >
            Datenschutz
          </Link>
          <Link 
            href="/impressum" 
            className="text-[#EFE6DA]/70 hover:text-[#A7B19A] transition-colors"
          >
            Impressum
          </Link>
        </div>
      </div>
    </div>
  )
}