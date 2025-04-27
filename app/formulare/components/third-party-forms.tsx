import Link from 'next/link'

export function ThirdPartyForms() {
  return (
    <div className="mt-12 border-t pt-8">
      <h2 className="text-2xl font-bold mb-6">Formulare von Drittanbietern</h2>
      <p className="text-gray-600 mb-4">
        Antragsformulare für Prozeßkostenhilfe und Beratungshilfe finden Sie im Internet z. B. über:
      </p>
      <ul className="space-y-2 list-disc pl-5 text-gray-600">
        <li>
          <Link 
            href="https://justizportal.justiz-bw.de/pb/,Lde/Startseite/Service/Formulare+und+Hinweisblaetter"
            target="_blank"
            className="text-primary hover:text-primary/80"
          >
            Justizportal Baden-Württemberg
          </Link>
          {' '}(Service: Formulare und Hinweisblätter)
        </li>
        <li>
          <Link 
            href="https://anwaltverein-offenburg.de/de/"
            target="_blank"
            className="text-primary hover:text-primary/80"
          >
            Anwaltverein Offenburg e.V.
          </Link>
        </li>
      </ul>
    </div>
  )
}