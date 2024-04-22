const homeMetadata = {
  title: 'Parkbussen, Abschleppen & Tankflucht | Falsch-Parker Schweiz',
  description:
    'Öffnen Sie die FalschParker App, um Parkbussen (UE) auf Privatgrund ' +
    'einfach auszustellen. Bestellen Sie mit wenigen Klicks einen ' +
    'Abschleppwagen oder erfassen Sie eine Parkbusse direkt über die App',
};

const parkingTicketMetadata = {
  title: 'Parkbusse / Umtriebsentschädigung Schweiz | Falsch-Parker',
  description:
    'Erfahren Sie alles über Parkbusse und Umtriebsentschädigungen ' +
    'in der Schweiz mit der Falsch-Parker App. Einfach Bussgelder ' +
    'ausstellenn - jetzt App öffnen!',
};

const towingMetadata = {
  title: 'Abschleppdienst Schweiz | Falsch-Parker App',
  description:
    'Entdecken Sie den Abschleppdienst in der Schweiz ' +
    'mit der Falsch-Parker App. Bestellen Sie schnell ' +
    'und einfach Abschleppwagen für Falschparker - Jetzt App öffnen!',
};

const fuelFraudMetadata = {
  title: 'Tankflucht melden | Falsch-Parker App',
  description:
    'Öffnen Sie die FalschParker App, um Tankflucht Vorfälle ' +
    'einfach zu melden. Wir übernehmen die ganze Administration und Inkasso.',
};

const blogMetadata = {
  title: 'Falsch-Parker Blog: Tipps, News & Ratgeber zur Parkproblematik',
  description:
    'Im Falsch-Parker Blog finden Sie hilfreiche Tipps, aktuelle News und ' +
    'praktische Ratgeber rund um das Thema Falschparken & Abschleppdienst ' +
    'in der Schweiz. Bleiben Sie informiert und nutzen Sie unsere App um ' +
    'gegen Falschparker vorzugehen- lesen Sie jetzt mehr',
};

const contactMetadata = {
  title: 'Kontaktieren Sie uns - Falsch-Parker Schweiz',
  description:
    'Kontaktieren Sie uns für Fragen, Anregungen oder Unterstützung ' +
    'bezüglich des Falsch-Parker App in der Schweiz. Wir helfen Ihnen ' +
    'gerne weiter - nutzen Sie unser Kontaktformular oder rufen Sie uns an!',
};

const locationMetadata = {
  title:
    'Abschleppdienst [XXX] für Falschparker: Abschleppwagen über App anfordern',
  description:
    'Falschparker in [XXX]? Unser Abschleppdienst steht bereit! Fordern Sie ' +
    'ganz einfach über unsere App einen Abschleppwagen an und erhalten Sie ' +
    'zuverlässige Hilfe für Ihr Fahrzeug. Kontaktieren Sie uns jetzt!',
};

const termsAndConditionsMetadata = {
  title:
    'Allgemeine Geschäftsbedingungen (AGB) - Nutzungsbedingungen für ' +
    'unsere Dienstleistungen',
  description:
    'Erfahren Sie mehr über unsere Allgemeinen Geschäftsbedingungen ' +
    '(AGB) und die Nutzungsbedingungen für unsere Dienstleistungen. Lesen Sie ' +
    'jetzt unsere AGB und informieren Sie sich über Ihre Rechte und Pflichten',
};

const imprintMetadata = {
  title: 'Impressum - Informationen TowShare Group GmbH',
  description:
    'Erfahren Sie mehr über unser Impressum gemäß dem schweizerischen ' +
    'Medienrecht. Hier finden Sie alle rechtlichen Informationen zu den ' +
    'Verantwortlichen und unseren Kontaktmöglichkeiten. Besuchen Sie jetzt ' +
    'unser Impressum!',
};

const dataProtectionMetadata = {
  title: 'Datenschutzerklärung - Ihre Privatsphäre ist uns wichtig',
  description:
    'Erfahren Sie alles über unsere Datenschutzrichtlinien und wie ' +
    'wir Ihre persönlichen Daten schützen. Ihre Privatsphäre ist uns wichtig. ' +
    'Lesen Sie unsere Datenschutzerklärung jetzt!',
};

const generateOpenGraph = (metadata) => {
  return {
    openGraph: {
      title: metadata.title,
      description: metadata.description,
    },
  };
};

export const buildMetadata = (page = 'home') => {
  switch (page) {
    case 'home':
      return { ...homeMetadata, ...generateOpenGraph(homeMetadata) };
    case 'blog':
      return { ...blogMetadata, ...generateOpenGraph(blogMetadata) };
    case 'parkingTicket':
      return {
        ...parkingTicketMetadata,
        ...generateOpenGraph(parkingTicketMetadata),
      };
    case 'towing':
      return { ...towingMetadata, ...generateOpenGraph(towingMetadata) };
    case 'fuelFraud':
      return { ...fuelFraudMetadata, ...generateOpenGraph(fuelFraudMetadata) };
    case 'contact':
      return { ...contactMetadata, ...generateOpenGraph(contactMetadata) };
    case 'termsAndConditions':
      return {
        ...termsAndConditionsMetadata,
        ...generateOpenGraph(termsAndConditionsMetadata),
      };
    case 'imprint':
      return { ...imprintMetadata, ...generateOpenGraph(imprintMetadata) };
    case 'dataProtection':
      return {
        ...dataProtectionMetadata,
        ...generateOpenGraph(dataProtectionMetadata),
      };
  }
};

export const buildLocationMetadata = (location) => {
  return {
    title: locationMetadata.title.replace('[XXX]', location),
    description: locationMetadata.description.replace('[XXX]', location),
    openGraph: {
      title: locationMetadata.title.replace('[XXX]', location),
      description: locationMetadata.description.replace('[XXX]', location),
    },
  };
};
