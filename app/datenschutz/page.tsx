export default function DatenschutzPage() {
  return (
    <div className="pt-20">
      <div className="bg-primary/5 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">Datenschutzerklärung</h1>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl">
          <div className="space-y-12">
            {/* 1. Name und Kontaktdaten */}
            <section>
              <h2 className="text-2xl font-bold mb-4">1. Name und Kontaktdaten</h2>
              <p className="mb-4">Diese Datenschutz-Information gilt für die Datenverarbeitung durch:</p>
              <p className="font-semibold mb-2">Verantwortlicher:</p>
              <div className="mb-4">
                <p>Rechtsanwalt Joachim Lederle Kanzleiinhaber und dessen angestellten Anwälte -/ innen</p>
                <p>Hermann-Dietrich-Straße 4</p>
                <p>77694 Kehl</p>
              </div>
              <p>Unseren betrieblichen Datenschutzbeauftragten erreichen Sie über unsere Kontaktseite.</p>
            </section>

            {/* 2. Erhebung und Speicherung */}
            <section>
              <h2 className="text-2xl font-bold mb-4">2. Erhebung und Speicherung personenbezogener Daten sowie Art und Zweck von deren Verwendung</h2>
              <h3 className="text-xl font-semibold mb-3">a. Beim Besuch der Website</h3>
              <p className="mb-4">
                Beim Aufrufen unserer Website werden durch den auf Ihrem Endgerät zum Einsatz kommenden Browser automatisch Informationen an den Server unserer Website gesendet.
              </p>
              <p className="mb-4">
                Die Website setzt nur Session-Cookies ein, speichert aber keine Daten, die dazu geeignet wären Personen zu identifizieren.
              </p>
              <p className="mb-4">Folgende Informationen werden dabei ohne Ihr Zutun erfasst:</p>
              <ul className="list-disc pl-5 mb-4 space-y-2">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Datei</li>
                <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
                <li>verwendeter Browser und ggf. das Betriebssystem Ihres Rechners sowie der Name Ihres Access-Providers</li>
              </ul>
            </section>

            {/* 3. Weitergabe von Daten */}
            <section>
              <h2 className="text-2xl font-bold mb-4">3. Weitergabe von Daten</h2>
              <p className="mb-4">
                Eine Übermittlung Ihrer persönlichen Daten an Dritte zu anderen als den im Folgenden aufgeführten Zwecken findet nicht statt.
              </p>
              <p className="mb-4">Wir geben Ihre persönlichen Daten nur an Dritte weiter, wenn:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Sie nach Art. 6 Abs. 1 S. 1 lit. a DSGVO Ihre ausdrückliche Einwilligung dazu erteilt haben</li>
                <li>die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. f DSGVO zur Wahrung unserer berechtigten Interessen erforderlich ist</li>
                <li>für den Fall, dass für die Weitergabe nach Art. 6 Abs. 1 S. 1 lit. c DSGVO eine gesetzliche Verpflichtung besteht</li>
                <li>dies gesetzlich zulässig und nach Art. 6 Abs. 1 S. 1 lit. b DSGVO für die Abwicklung von Vertragsverhältnissen erforderlich ist</li>
              </ul>
            </section>

            {/* 4. Google Maps */}
            <section>
              <h2 className="text-2xl font-bold mb-4">4. Google Maps</h2>
              <p className="mb-4">
                Wir nutzen auf unserer Webseite Google Maps. Dadurch können wir Ihnen interaktive Karten direkt in der Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion.
              </p>
              <p className="mb-4">
                Weitere Informationen zu Zweck und Umfang der Datenerhebung erhalten Sie in den{' '}
                <a 
                  href="https://www.google.de/intl/de/policies/privacy" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:text-primary/80"
                >
                  Google Datenschutzerklärungen
                </a>
              </p>
            </section>

            {/* 5. Cookies */}
            <section>
              <h2 className="text-2xl font-bold mb-4">5. Cookies</h2>
              <p className="mb-4">
                Die Website setzt nur Session-Cookies ein. Hierbei handelt es sich um kleine Dateien, die Ihr Browser automatisch erstellt und die auf Ihrem Endgerät gespeichert werden.
              </p>
            </section>

            {/* 6. Betroffenenrechte */}
            <section>
              <h2 className="text-2xl font-bold mb-4">6. Betroffenenrechte</h2>
              <p className="mb-4">Sie haben das Recht:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>gemäß Art. 15 DSGVO Auskunft über Ihre von uns verarbeiteten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 16 DSGVO unverzüglich die Berichtigung unrichtiger Daten zu verlangen</li>
                <li>gemäß Art. 17 DSGVO die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 18 DSGVO die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen</li>
                <li>gemäß Art. 20 DSGVO Ihre personenbezogenen Daten in einem strukturierten Format zu erhalten</li>
                <li>gemäß Art. 7 Abs. 3 DSGVO Ihre Einwilligung jederzeit zu widerrufen</li>
                <li>gemäß Art. 77 DSGVO sich bei einer Aufsichtsbehörde zu beschweren</li>
              </ul>
            </section>

            {/* 7. Widerspruchsrecht */}
            <section>
              <h2 className="text-2xl font-bold mb-4">7. Widerspruchsrecht</h2>
              <p className="mb-4">
                Möchten Sie von Ihrem Widerrufs- oder Widerspruchsrecht Gebrauch machen, genügt eine E-Mail an:{' '}
                <a href="mailto:kanzlei@lederlelaw.com" className="text-primary hover:text-primary/80">
                  kanzlei@lederlelaw.com
                </a>
              </p>
            </section>

            {/* 8. Datensicherheit */}
            <section>
              <h2 className="text-2xl font-bold mb-4">8. Datensicherheit</h2>
              <p className="mb-4">
                Wir weisen darauf hin, dass die Datenübertragung im Internet grundsätzlich Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht möglich.
              </p>
            </section>

            {/* 9. Aktualität */}
            <section>
              <h2 className="text-2xl font-bold mb-4">9. Aktualität und Änderung dieser Datenschutzerklärung</h2>
              <p className="mb-4">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Mai 2018.
              </p>
              <p>
                Durch die Weiterentwicklung unserer Website und Angebote darüber oder aufgrund geänderter gesetzlicher beziehungsweise behördlicher Vorgaben kann es notwendig werden, diese Datenschutzerklärung zu ändern.
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}