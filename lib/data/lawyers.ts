export interface Lawyer {
  name: string
  slug: string
  role: string
  image: string
  description: string
  specializations: string[]
  biography: string[]
  education: string[]
  memberships: string[]
  titles?: string[]
  contact?: {
    addresses: string[]
    phone?: string
    fax?: string
    email?: string
    website?: string
  }
  languages?: string[]
  publications?: string[]
  careerPath?: string[]
}

export const lawyers: Lawyer[] = [
  {
    name: 'Joachim Lederle',
    slug: 'joachim-lederle',
    role: 'Kanzleiinhaber',
    image: '/images/joachim-lederle.jpg',
    description: 'Erster Fachanwalt für Strafrecht im Landgerichtsbezirk Offenburg mit internationaler Expertise.',
    titles: [
      'Rechtsanwalt',
      'Fachanwalt für Strafrecht',
      'Kanzleiinhaber'
    ],
    specializations: [
      'Strafrecht',
      'Strafverfahrensrecht',
      'Betäubungsmittelstrafrecht',
      'Jugendstrafrecht',
      'Revisionsrecht in Strafsachen',
      'Wirtschaftsstrafrecht',
      'Internationales Straf- und Strafverfahrensrecht'
    ],
    biography: [
      'Als erster Fachanwalt für Strafrecht im Landgerichtsbezirk Offenburg bearbeitet Joachim Lederle fast ausschließlich strafrechtliche Mandate.',
      'Mit fließenden Sprachkenntnissen in Französisch, Englisch, Spanisch und Italienisch betreut er internationale Mandate und vertritt Mandanten vor Gerichten in Deutschland sowie im europäischen Ausland.',
      'Seine Expertise erstreckt sich über die Schweiz, Belgien, Luxemburg, Österreich, Frankreich, Spanien und Tschechien, wo er als Verteidiger bei den jeweiligen Anwaltskammern registriert ist.'
    ],
    education: [
      'Studium der Rechtswissenschaften an der Albert-Ludwigs-Universität Freiburg',
      '1. Juristisches Staatsexamen mit Schwerpunkt Arbeitsrecht (1984)',
      '2. Juristisches Staatsexamen mit Schwerpunkt Arbeits- und Sozialrecht (1988)',
      'Fachanwaltsausbildung Strafrecht (2000)'
    ],
    careerPath: [
      'Studium der Rechtswissenschaften',
      '1. Juristisches Staatsexamen mit Schwerpunkt Arbeitsrecht (1984)',
      'Tätigkeit in der Rechtsabteilung der Deutsch-Französischen Handelskammer, Paris (1984)',
      'Rechtsreferendariat mit Station u.a. in der Anwaltskanzlei Dr. Eyl, Kehl - Strasbourg (1985-1988)',
      '2. Juristisches Staatsexamen mit Schwerpunkt Arbeits- und Sozialrecht (1988)',
      'Zulassung zur Rechtsanwaltschaft (seit Oktober 1988)'
    ],
    contact: {
      addresses: ['Hermann-Dietrich-Str. 4, 77694 Kehl'],
      phone: '+49 (0) 7851 8001',
      fax: '+49 (0) 7851 1061',
      email: 'lederle@lederlelaw.com',
      website: 'www.lederlelaw.com'
    },
    languages: [
      'Deutsch',
      'Französisch',
      'Englisch',
      'Spanisch',
      'Italienisch'
    ],
    memberships: [
      'Mitglied im Deutschen Anwaltverein (DAV)',
      'Mitglied der Arbeitsgemeinschaft Strafrecht im DAV',
      'Registriert als Verteidiger bei den Anwaltskammern in Österreich, Belgien, Spanien, Luxemburg und Tschechien'
    ]
  },
  {
    name: 'Gabriele Braun',
    slug: 'gabriele-braun',
    role: 'angestellte Anwältin',
    image: '/images/gabriele-braun.jpg',
    description: 'Rechtsanwältin mit Expertise im internationalen Recht und grenzüberschreitenden Rechtsfragen.',
    titles: [
      'Rechtsanwältin (Mitglied der Rechtsanwaltskammer Freiburg/Breisgau)',
      'Zugelassen bei allen Oberlandesgerichten in Deutschland',
      'Maîtrise im französischen Recht'
    ],
    specializations: [
      'Internationales Handels- und Kaufrecht',
      'Erbrecht',
      'Familienrecht'
    ],
    biography: [
      'Rechtsanwältin Gabriele Braun verfügt über umfangreiche Erfahrung in der grenzüberschreitenden Rechtsberatung und -vertretung.',
      'Mit Kanzleisitzen in Kehl und Straßburg ist sie bestens positioniert für deutsch-französische Rechtsfälle.',
      'Seit über 10 Jahren pflegt sie eine erfolgreiche Kooperation mit den Kollegen und Kolleginnen von Avira.'
    ],
    education: [
      'Jurastudium in Passau (Deutschland) und Toulouse (Frankreich) (1987-1991)',
      'Studienbegleitende fachspezifische Fremdsprachenausbildung in Französisch, Englisch und Arabisch (1987-1990)',
      '"ERASMUS"-Stipendium der Europäischen Union',
      'Maîtrise im französischen Recht mit Schwerpunkt Internationales Recht und Steuerrecht in Toulouse (1991)',
      'Wahlstation beim Juristischen Dienst des Europäischen Parlaments (1995)',
      'Zweites Staatsexamen in Stuttgart (Deutschland)'
    ],
    careerPath: [
      'Zulassung und Niederlassung als selbständige Rechtsanwältin in Kehl (Deutschland) und Mitglied der Rechtsanwaltskammer Freiburg (1996)',
      'Eröffnung eines Zweitbüros in Straßburg (seit 1996)',
      'Kooperation mit Kollegen und Kolleginnen von Avira seit über 10 Jahren'
    ],
    publications: [
      'Deutsches Baurecht: Zusammenarbeit mit der Industrie- und Handelskammer (CCI) sowie der Union Patronale du Bâtiment et des Travaux Publics du Bas-Rhin in Straßburg und Mulhouse sowie dem Syndicat Général des Entrepreneurs du Bâtiment et des Travaux Publics de la Moselle in Metz (1997-1999)',
      'Internationales Familienrecht: Vortrag beim PAMINA-Seminar (2005)'
    ],
    contact: {
      addresses: [
        'Hermann-Dietrich-Str. 4, D-77694 Kehl',
        '75 avenue des Vosges, F-67000 Straßburg'
      ],
      phone: '0033 (0)3 90 22 15 78',
      fax: '0033 (0)3 88 71 81 55',
      email: 'gabriele.braun@yahoo.fr'
    },
    languages: [
      'Deutsch (Muttersprache)',
      'Französisch',
      'Englisch'
    ],
    memberships: [
      'Rechtsanwaltskammer Freiburg/Breisgau'
    ]
  }
]