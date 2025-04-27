import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Scale, Briefcase, GraduationCap, Building2, Globe, Gavel, Car, Home, Users, BookOpen } from 'lucide-react'
import Link from 'next/link'

const practiceAreas = [
  {
    title: 'Strafrecht',
    description: 'Als erfahrene Strafverteidiger bieten wir umfassende Vertretung in allen Bereichen des Strafrechts. Unsere Expertise umfasst:',
    icon: Gavel,
    specializations: [
      'Betäubungsmittelstrafrecht',
      'Strafvollstreckungsrecht',
      'Strafprozessrecht',
      'Internationales und europäisches Strafrecht'
    ]
  },
  {
    title: 'Verkehrsstrafrecht',
    description: 'Spezialisierte Verteidigung bei Verkehrsdelikten aller Art. Von Ordnungswidrigkeiten bis zu schweren Verkehrsstraftaten stehen wir Ihnen mit unserer langjährigen Erfahrung zur Seite.',
    icon: Car,
    isPriority: true
  },
  {
    title: 'Verwaltungsrecht / Disziplinarverfahren',
    description: 'Beziehungen zwischen Bürgern und Staat werden durch das Verwaltungsrecht geregelt. Vom Verwaltungsverfahrensrecht bis hin zum Baurecht stehen wir hierbei auf der Seite der Bürger.',
    icon: Building2,
  },
  {
    title: 'Mietrecht',
    description: 'Wir beraten und vertreten Sie in grundlegenden mietrechtlichen Angelegenheiten, von Mietverträgen bis hin zu Kündigungsfragen.',
    icon: Home,
  },
  {
    title: 'Familienrecht',
    description: 'In familienrechtlichen Angelegenheiten stehen wir Ihnen mit Rat und Tat zur Seite. Von Scheidungen über Unterhalt bis hin zu Sorgerecht - wir finden gemeinsam die beste Lösung für Sie und Ihre Familie.',
    icon: Users,
  },
]

export function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Anwaltliche Kompetenzen</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {practiceAreas.map((area) => (
            <Card 
              key={area.title} 
              className={`card-hover bg-card/50 backdrop-blur-sm ${area.isPriority ? 'border-primary/50' : ''}`}
            >
              <CardHeader className="flex flex-row items-start space-y-0 pb-2">
                <div className="mr-4">
                  <area.icon className="h-8 w-8 text-primary" />
                </div>
                <div className="flex-1">
                  <CardTitle className="text-xl mb-3">{area.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {area.description}
                  </CardDescription>
                  {area.specializations && (
                    <ul className="mt-4 space-y-2">
                      {area.specializations.map((spec) => (
                        <li key={spec} className="flex items-center text-sm text-muted-foreground">
                          <BookOpen className="h-4 w-4 mr-2 text-primary/70" />
                          {spec}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </CardHeader>
              <CardContent>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}