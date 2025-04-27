import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'David Schmidt',
    company: 'Schmidt Industries',
    text: 'Lederle Law hat bei unserer Unternehmensumstrukturierung außergewöhnliche Arbeit geleistet. Ihre Expertise und Detailgenauigkeit waren von unschätzbarem Wert.',
  },
  {
    name: 'Emily Weber',
    company: 'Tech Startup Gründerin',
    text: 'Das Team von Lederle Law half uns, komplexe Vertragsverhandlungen mit Zuversicht zu führen. Ihre Beratung war entscheidend für unseren Erfolg.',
  },
  {
    name: 'Robert Chen',
    company: 'Global Enterprises GmbH',
    text: 'Professionell, gründlich und reaktionsschnell. Lederle Law ist seit über einem Jahrzehnt unser vertrauenswürdiger Rechtspartner.',
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Mandantenstimmen</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lesen Sie, was unsere Mandanten über ihre Erfahrungen mit Lederle Law berichten.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="bg-white">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary mb-4" />
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">{testimonial.text}</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}