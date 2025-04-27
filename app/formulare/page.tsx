import { Metadata } from 'next'
import Link from 'next/link'
import { FormCategory } from './components/form-category'
import { ThirdPartyForms } from './components/third-party-forms'
import { formCategories } from './data/forms'

export const metadata: Metadata = {
  title: 'Formulare | Lederle Law',
  description: 'Download-Bereich für wichtige Rechtsformulare und Dokumente. Hier finden Sie alle notwendigen Formulare für Ihre rechtlichen Angelegenheiten.',
}

export default function FormularePage() {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Formulare / Downloadbereich</h1>
          <p className="text-gray-600 max-w-2xl">
            Hier können Sie die von uns angefragten Formulare bequem downloaden, ausdrucken und uns diese ausgefüllt sowie gegebenenfalls unterzeichnet zurückschicken.
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 mb-8">
            <p className="text-sm text-blue-700">
              Zum Öffnen der Formulare benötigen Sie eine aktuelle Version des Adobe Acrobat Reader, welchen Sie{' '}
              <Link 
                href="https://get.adobe.com/de/reader/" 
                target="_blank"
                className="text-blue-600 hover:text-blue-800 underline"
              >
                hier
              </Link>
              {' '}downloaden können.
            </p>
          </div>

          <div className="space-y-12">
            {formCategories.map((category) => (
              <FormCategory 
                key={category.title}
                title={category.title}
                forms={category.forms}
              />
            ))}
          </div>

          <ThirdPartyForms />

          <div className="mt-8 text-sm text-gray-500">
            Stand: {new Date().toLocaleDateString('de-DE', { day: '2-digit', month: '2-digit', year: 'numeric' })}
          </div>
        </div>
      </div>
    </div>
  )
}