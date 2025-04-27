"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { Button } from '@/components/ui/button'

const navigationItems = [
  { href: '/about', label: 'Über Uns' },
  { href: '/team', label: 'Unser Team' },
  { href: '/formulare', label: 'Formulare' },
]

export function Navigation() {
  const pathname = usePathname()

  return (
    <NavigationMenu>
      <NavigationMenuList className="space-x-8">
        {navigationItems.map((item) => {
          if (pathname === item.href) return null
          
          return (
            <NavigationMenuItem key={item.href} className="px-2">
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className="hover:text-primary transition-colors">
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
        {pathname !== '/contact' && (
          <NavigationMenuItem className="pl-2">
            <Button variant="default" asChild>
              <Link href="/contact">Kontakt</Link>
            </Button>
          </NavigationMenuItem>
        )}
      </NavigationMenuList>
    </NavigationMenu>
  )
}