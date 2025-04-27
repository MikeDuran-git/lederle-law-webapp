"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'

const navigationItems = [
  { href: '/about', label: 'Über Uns' },
  { href: '/team', label: 'Unser Team' },
  { href: '/formulare', label: 'Formulare' },
]

interface MobileMenuProps {
  isOpen: boolean
}

export function MobileMenu({ isOpen }: MobileMenuProps) {
  const pathname = usePathname()
  
  if (!isOpen) return null

  return (
    <div className="md:hidden bg-white border-t">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col space-y-4">
          {navigationItems.map((item) => {
            if (pathname === item.href) return null
            
            return (
              <Link 
                key={item.href}
                href={item.href} 
                className="hover:text-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          })}
          {pathname !== '/contact' && (
            <Button asChild>
              <Link href="/contact">Kontakt</Link>
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}