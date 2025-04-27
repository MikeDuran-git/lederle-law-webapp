export default function ImpressumPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Impressum</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-6">Angaben gemäß § 5 TMG</h2>
          
          <div className="space-y-6">
            <div>
              <p>Rechtsanwalt Joachim Lederle</p>
              <p>Hermann-Dietrich-Str. 4</p>
              <p>77694 Kehl</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Kontakt</h3>
              <p>Telefon: +49 07851 8001</p>
              <p>Fax: +49 07851 1061</p>
              <p>E-Mail: kanzlei@lederlelaw.com</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Berufsbezeichnung</h3>
              <p>Rechtsanwalt</p>
              <p className="mt-2">Die genannten gesetzlichen Berufsbezeichnungen "Rechtsanwalt" sowie Fachanwaltsbezeichnungen wurden sämtlich in der Bundesrepublik Deutschland verliehen.</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Zuständige Rechtsanwaltskammer</h3>
              <p>Rechtsanwaltskammer Freiburg</p>
              <p>Bertoldstraße 44</p>
              <p>79098 Freiburg im Breisgau</p>
              <p>Telefon: 0761 32563</p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Berufsrechtliche Regelungen</h3>
              <ul className="list-disc pl-5 space-y-1">
                <li>Bundesrechtsanwaltsordnung (BRAO)</li>
                <li>Berufsordnung für Rechtsanwälte (BORA)</li>
                <li>Rechtsanwaltsvergütungsgesetz (RVG)</li>
                <li>Fachanwaltsordnung (FAO)</li>
                <li>Berufsregeln der Rechtsanwälte der Europäischen Union (CCBE)</li>
              </ul>
              <p className="mt-2">
                Diese Regelungen finden Sie auf der Website der{' '}
                <a 
                  href="https://www.brak.de/anwaltschaft/berufsrecht/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  Bundesrechtsanwaltskammer
                </a>
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Streitbeilegung</h3>
              <p>
                Plattform der EU zur außergerichtlichen Online-Streitbeilegung:{' '}
                <a 
                  href="https://ec.europa.eu/consumers/odr/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  https://ec.europa.eu/consumers/odr/
                </a>
              </p>
              <p className="mt-2">
                Wir sind weder bereit noch verpflichtet, an einem Streitbeilegungsverfahren vor einer 
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Haftungshinweise</h3>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehmen wir keinerlei Haftung für die 
                Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren 
                Betreiber verantwortlich.
              </p>
              <p className="mt-2">
                Wir übernehmen keinerlei Gewähr für die Aktualität, Korrektheit, Vollständigkeit oder 
                Qualität der bereitgestellten Informationen bei den Rechtstipps. Diese Inhalte dienen 
                ausschließlich der unverbindlichen Information und wurden nach bestem Wissen und 
                Gewissen zusammengestellt. Es handelt sich hierbei um keine Rechtsberatung.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-2">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten 
                unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung 
                und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der 
                schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}