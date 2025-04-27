import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const services = [
  {
    title: "Professionelle Beratung"
  },
  {
    title: "Durchsetzungsstarke Vertretung"
  },
  {
    title: "Engagierte Verteidigung"
  },
  {
    title: "Vertrauensvolle Zusammenarbeit"
  },
  {
    title: "Individuelle Verteidigungsstrategie"
  }
]

export function AboutSection() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Das bieten wir unseren Mandanten</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
          <div className="text-gray-600 max-w-3xl mx-auto mb-12">
            <span className="text-2xl font-semibold text-primary">Seit über 30 Jahren</span>
            <span className="text-gray-600"> setzen wir uns mit Leidenschaft und Expertise für die Rechte unserer Mandanten ein.</span>
          </div>
        </div>

        <div className="max-w-2xl mx-auto space-y-4">
          {services.map((service) => (
            <Card key={service.title} className="transition-all duration-300 hover:shadow-lg">
              <CardHeader>
                <CardTitle className="text-xl text-center">{service.title}</CardTitle>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}