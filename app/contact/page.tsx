import { ContactSection } from '@/components/sections/contact'

export default function ContactPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Kontakt</h1>
          <p className="text-gray-600 max-w-2xl">
            Nehmen Sie Kontakt mit unserem Rechtsteam auf. Wir sind hier, um Ihnen bei Ihren rechtlichen Anliegen zu helfen.
          </p>
        </div>
      </div>
      <ContactSection />
    </div>
  )
}