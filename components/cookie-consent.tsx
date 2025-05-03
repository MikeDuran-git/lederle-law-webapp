"use client"

import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { getCookieConsent, setCookieConsent, type CookieConsent } from '@/lib/cookies'

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [consent, setConsent] = useState<CookieConsent>({
    necessary: true,
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    const savedConsent = getCookieConsent()
    if (!savedConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAcceptAll = () => {
    const fullConsent: CookieConsent = {
      necessary: true,
      analytics: true,
      marketing: true,
    }
    setCookieConsent(fullConsent)
    setIsVisible(false)
  }

  const handleSavePreferences = () => {
    setCookieConsent(consent)
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-background/80 backdrop-blur-sm">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Cookie-Einstellungen</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten.
            Sie können Ihre Cookie-Einstellungen anpassen.
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="necessary" 
                checked={consent.necessary} 
                disabled 
              />
              <label htmlFor="necessary" className="text-sm font-medium">
                Notwendige Cookies (erforderlich)
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="analytics" 
                checked={consent.analytics}
                onCheckedChange={(checked) => 
                  setConsent(prev => ({ ...prev, analytics: checked as boolean }))
                }
              />
              <label htmlFor="analytics" className="text-sm font-medium">
                Analyse-Cookies
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox 
                id="marketing" 
                checked={consent.marketing}
                onCheckedChange={(checked) => 
                  setConsent(prev => ({ ...prev, marketing: checked as boolean }))
                }
              />
              <label htmlFor="marketing" className="text-sm font-medium">
                Marketing-Cookies
              </label>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button variant="outline" onClick={handleSavePreferences}>
            Auswahl speichern
          </Button>
          <Button onClick={handleAcceptAll}>
            Alle akzeptieren
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}