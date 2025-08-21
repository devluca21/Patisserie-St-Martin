interface JsonLDProps {
  locale?: string; // Made optional since we don't use it anymore
}

const JsonLD = ({ locale }: JsonLDProps) => {

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    "name": "Dr Georgette Elias, D.M.D.",
    "alternateName": "Clinique Dentaire Dr Georgette Elias",
    "description": "Clinique dentaire moderne à Montréal offrant des soins complets. Partenaire RCSD. Financement disponible. Technologie de pointe, soins tout en douceur.",
    "url": "https://www.dentistegeorgetteelias.com",
    "telephone": "+1-514-722-6575",
    "email": "admin@dentistegeorgetteelias.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "2491 rue Bélanger",
      "addressLocality": "Montréal",
      "addressRegion": "QC",
      "postalCode": "H2G 1E6",
      "addressCountry": "CA"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 45.5588,
      "longitude": -73.6047
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday"],
        "opens": "08:00",
        "closes": "17:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "CAD",
    "paymentAccepted": "Cash, Credit Card, Insurance, Financing, RCSD",
    "medicalSpecialty": "Dentistry",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Services dentaires",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Dentisterie familiale",
          "description": "Soins dentaires pour toute la famille"
        },
        {
          "@type": "Offer",
          "name": "Urgences dentaires",
          "description": "Soins d'urgence disponibles"
        },
        {
          "@type": "Offer",
          "name": "Implants dentaires",
          "description": "Implants dentaires de qualité"
        },
        {
          "@type": "Offer",
          "name": "Examens et radiographies",
          "description": "Examens complets et radiographies numériques"
        },
        {
          "@type": "Offer",
          "name": "Blanchiment dentaire",
          "description": "Blanchiment professionnel des dents"
        },
        {
          "@type": "Offer",
          "name": "Prothèses dentaires",
          "description": "Prothèses partielles et complètes"
        },
        {
          "@type": "Offer",
          "name": "Traitement de canal",
          "description": "Endodontie pour sauver les dents naturelles"
        },
        {
          "@type": "Offer",
          "name": "Chirurgie dentaire",
          "description": "Extractions et chirurgies dentaires"
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Dr Georgette Elias",
      "jobTitle": "Dentist",
      "worksFor": {
        "@type": "Organization",
        "name": "Clinique Dentaire Dr Georgette Elias"
      }
    },
    "image": [
      "https://www.dentistegeorgetteelias.com/slide-01-1.jpg",
      "https://www.dentistegeorgetteelias.com/logo-full.svg",
      "https://www.dentistegeorgetteelias.com/clinic/1.png",
      "https://www.dentistegeorgetteelias.com/clinic/2.png"
    ],
    "sameAs": [
      "https://www.facebook.com/cliniquedentairedrgeorgetteelias/"
    ],
    "hasCredential": "D.M.D.",
    "memberOf": {
      "@type": "Organization",
      "name": "Ordre des dentistes du Québec"
    },
    "areaServed": {
      "@type": "City",
      "name": "Montréal"
    },
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Examen dentaire",
        "description": "Examen complet de la santé bucco-dentaire"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Nettoyage dentaire",
        "description": "Nettoyage professionnel et détartrage"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Traitement de canal",
        "description": "Endodontie pour sauver les dents naturelles"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Blanchiment dentaire",
        "description": "Blanchiment professionnel des dents"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Implant dentaire",
        "description": "Implants dentaires de qualité"
      }
    ],
    "amenityFeature": [
      {
        "@type": "LocationFeatureSpecification",
        "name": "Accessible en fauteuil roulant",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Stationnement gratuit",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Près du métro",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Technologie de pointe",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Partenaire RCSD",
        "value": true
      }
    ],
    "potentialAction": [
      {
        "@type": "ReserveAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://www.dentistegeorgetteelias.com/contact",
          "inLanguage": "fr-CA"
        },
        "name": "Rendez-vous dentaire",
        "description": "Prendre rendez-vous pour une consultation dentaire"
      },
      {
        "@type": "CallAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:+15147226575"
        },
        "name": "Appeler la clinique",
        "description": "Appeler pour des informations ou urgences"
      }
    ],
    "review": [
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sandrine El-Khoury"
        },
        "reviewBody": "Équipe formidable avec des dentistes professionnels qui prennent le temps de répondre à toutes vos questions avant de commencer un traitement. Je recommande vivement!"
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50+",
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLD;
