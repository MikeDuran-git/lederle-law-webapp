"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Scale, Menu } from 'lucide-react'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Scale className="h-8 w-8 text-primary" />
            <span className="font-semibold text-xl">Lederle Law</span>
          </Link>

          <nav className="hidden md:flex">
            <NavigationMenu>
              <NavigationMenuList className="space-x-8">
                <NavigationMenuItem className="px-2">
                  <Link href="/about" legacyBehavior passHref>
                    <NavigationMenuLink className="hover:text-primary transition-colors">
                      Über Uns
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-2">
                  <Link href="/team" legacyBehavior passHref>
                    <NavigationMenuLink className="hover:text-primary transition-colors">
                      Unser Team
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="px-2">
                  <Link href="/formulare" legacyBehavior passHref>
                    <NavigationMenuLink className="hover:text-primary transition-colors">
                      Formulare
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
                <NavigationMenuItem className="pl-2">
                  <Button variant="default" asChild>
                    <Link href="/contact">Kontakt</Link>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-4">
            <div className="flex flex-col space-y-4">
              <Link href="/about" className="hover:text-primary transition-colors">
                Über Uns
              </Link>
              <Link href="/team" className="hover:text-primary transition-colors">
                Unser Team
              </Link>
              <Link href="/formulare" className="hover:text-primary transition-colors">
                Formulare
              </Link>
              <Button asChild>
                <Link href="/contact">Kontakt</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}