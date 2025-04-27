"use client"

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { MapPin, Phone, Mail } from 'lucide-react'
import { useState, FormEvent } from 'react'
import { Captcha } from '@/components/ui/captcha'
import { useToast } from '@/hooks/use-toast'

export function ContactSection() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    callbackRequested: false,
    emailContactRequested: false
  })
  const [isCaptchaValid, setIsCaptchaValid] = useState(false)
  const { toast } = useToast()

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    
    if (!isCaptchaValid) {
      toast({
        title: "Fehler",
        description: "Bitte geben Sie den korrekten Captcha-Code ein.",
        variant: "destructive",
      })
      return
    }

    // Format the email content
    const emailContent = `
Hallo,

Sie haben eine Formularnachricht über Ihre Website https://www.lederlelaw.com/kontakt/ erhalten.

Folgende Daten wurden übermittelt:
--------------------------------

Name:
${formData.firstName} ${formData.lastName}

Firma:
${formData.company || '-'}

E-Mail-Adresse:
${formData.email}

Telefon/Fax:
${formData.phone || '-'}

${formData.callbackRequested ? '[X]' : '[ ]'} Bitte rufen Sie mich zurück
${formData.emailContactRequested ? '[X]' : '[ ]'} Bitte nehmen Sie per Mail Kontakt mit mir auf

Betreff:
${formData.subject}

Nachricht:
${formData.message}
`.trim()

    // Create mailto URL
    const mailtoUrl = `mailto:kanzlei@lederlelaw.com?subject=${encodeURIComponent(
      `Neue Kontaktanfrage: ${formData.subject}`
    )}&body=${encodeURIComponent(emailContent)}`

    // Open default email client and refresh the page after a short delay
    window.location.href = mailtoUrl
    setTimeout(() => {
      window.location.reload()
    }, 100)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({ ...prev, [name]: checked }))
  }

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6">Kontakt</h2>
            <p className="text-muted-foreground mb-8">
              Nehmen Sie Kontakt mit unserem Rechtsteam auf. Wir sind hier, um Ihnen bei Ihren rechtlichen Anliegen zu helfen.
              <br /><br />
              <span className="font-medium">Bitte nehmen Sie bevorzugt per E-Mail Kontakt mit uns auf.</span>
            </p>
            
            <div className="space-y-6">
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center space-x-4 p-6">
                  <MapPin className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-lg mb-1">Besuchen Sie uns</CardTitle>
                    <p className="text-muted-foreground">Hermann-Dietrich-Str. 4, 77694 Kehl</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center space-x-4 p-6">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-lg mb-1">Rufen Sie uns an</CardTitle>
                    <p className="text-muted-foreground">+49 07851 8001</p>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="bg-card/50 backdrop-blur-sm">
                <CardContent className="flex items-center space-x-4 p-6">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <CardTitle className="text-lg mb-1">E-Mail</CardTitle>
                    <p className="text-muted-foreground">kanzlei@lederlelaw.com</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          
          <Card className="bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle>Senden Sie uns eine Nachricht</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    name="firstName"
                    placeholder="Vorname" 
                    required 
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                  <Input 
                    name="lastName"
                    placeholder="Nachname" 
                    required 
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <Input 
                  name="company"
                  placeholder="Firma (optional)" 
                  value={formData.company}
                  onChange={handleInputChange}
                />
                <Input 
                  type="email" 
                  name="email"
                  placeholder="E-Mail Adresse" 
                  required 
                  value={formData.email}
                  onChange={handleInputChange}
                />
                <Input 
                  type="tel"
                  name="phone"
                  placeholder="Telefon/Fax" 
                  value={formData.phone}
                  onChange={handleInputChange}
                />
                <Input 
                  name="subject"
                  placeholder="Betreff" 
                  required 
                  value={formData.subject}
                  onChange={handleInputChange}
                />

                <div className="space-y-3 border rounded-lg p-4">
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="callback"
                      checked={formData.callbackRequested}
                      onCheckedChange={(checked) => handleCheckboxChange('callbackRequested', checked as boolean)}
                      className="h-5 w-5"
                    />
                    <label
                      htmlFor="callback"
                      className="text-sm font-medium cursor-pointer select-none"
                    >
                      Bitte rufen Sie mich zurück
                    </label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Checkbox 
                      id="emailContact"
                      checked={formData.emailContactRequested}
                      onCheckedChange={(checked) => handleCheckboxChange('emailContactRequested', checked as boolean)}
                      className="h-5 w-5"
                    />
                    <label
                      htmlFor="emailContact"
                      className="text-sm font-medium cursor-pointer select-none"
                    >
                      Bitte nehmen Sie per Mail Kontakt mit mir auf
                    </label>
                  </div>
                </div>

                <Textarea 
                  name="message"
                  placeholder="Ihre Nachricht" 
                  className="h-32" 
                  required 
                  value={formData.message}
                  onChange={handleInputChange}
                />

                <div className="space-y-2">
                  <label className="block text-sm font-medium">Captcha (Spam-Schutz)</label>
                  <Captcha
                    onValidate={setIsCaptchaValid}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={!isCaptchaValid}
                >
                  Nachricht senden
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}