'use client';

import { useTranslations } from '@/lib/useTranslations';

interface JsonLDProps {
  locale?: string; // Made optional since we don't use it anymore
}

const JsonLD = ({ locale }: JsonLDProps) => {
  const { t } = useTranslations();

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Bakery",
    "name": "Patisserie St. Martin",
    "alternateName": "Patisserie St. Martin",
    "description": t('jsonLD.description'),
    "url": "https://patisseriestmartin.com",
    "telephone": "+1-514-722-6575",
          "email": "pstm2495@gmail.com",
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
        "opens": "07:00",
        "closes": "19:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Friday",
        "opens": "07:00",
        "closes": "20:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Sunday",
        "opens": "08:00",
        "closes": "17:00"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "CAD",
    "paymentAccepted": "Cash, Credit Card, Debit Card",
    "servesCuisine": "French Pastry, Artisan Bread, Custom Cakes",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": t('jsonLD.servicesCatalog'),
      "itemListElement": [
        {
          "@type": "Offer",
          "name": t('jsonLD.artisanPastries'),
          "description": t('jsonLD.artisanPastriesDesc')
        },
        {
          "@type": "Offer",
          "name": t('jsonLD.customCakes'),
          "description": t('jsonLD.customCakesDesc')
        },
        {
          "@type": "Offer",
          "name": t('jsonLD.artisanBreads'),
          "description": t('jsonLD.artisanBreadsDesc')
        },
        {
          "@type": "Offer",
          "name": t('jsonLD.pastries'),
          "description": t('jsonLD.pastriesDesc')
        },
        {
          "@type": "Offer",
          "name": t('jsonLD.cateringServices'),
          "description": t('jsonLD.cateringServicesDesc')
        },
        {
          "@type": "Offer",
          "name": t('jsonLD.weddingCakes'),
          "description": t('jsonLD.weddingCakesDesc')
        },
        {
          "@type": "Offer",
          "name": t('jsonLD.birthdayCakes'),
          "description": t('jsonLD.birthdayCakesDesc')
        },
        {
          "@type": "Offer",
          "name": t('jsonLD.artisanChocolate'),
          "description": t('jsonLD.artisanChocolateDesc')
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Patisserie St. Martin",
      "jobTitle": "Artisan Patissier",
      "worksFor": {
        "@type": "Organization",
        "name": "Patisserie St. Martin"
      }
    },
    "image": [
      "https://patisseriestmartin.com/Pastries/pastry-hero-1.jpg",
      "https://patisseriestmartin.com/Logos/logo-patisserie.svg",
      "https://patisseriestmartin.com/Pastries/patisserie-1.jpg",
      "https://patisseriestmartin.com/Cakes/cake-hero-1.jpg"
    ],
    "sameAs": [
      "https://www.instagram.com/patisseriestmartin/"
    ],
    "areaServed": {
      "@type": "City",
      "name": "Montréal"
    },
    "availableService": [
      {
        "@type": "Service",
        "name": "Pâtisseries artisanales",
        "description": "Créations faites à la main avec des ingrédients premium"
      },
      {
        "@type": "Service",
        "name": "Gâteaux sur mesure",
        "description": "Gâteaux personnalisés pour toutes occasions"
      },
      {
        "@type": "Service",
        "name": "Services traiteur",
        "description": "Événements et réceptions"
      },
      {
        "@type": "Service",
        "name": "Livraison",
        "description": "Livraison à domicile et au bureau"
      },
      {
        "@type": "Service",
        "name": "Cueillette",
        "description": "Cueillette en magasin"
      }
    ],
    "amenityFeature": [
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
        "name": "Ambiance chaleureuse",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Ingrédients premium",
        "value": true
      },
      {
        "@type": "LocationFeatureSpecification",
        "name": "Créations artisanales",
        "value": true
      }
    ],
    "potentialAction": [
      {
        "@type": "OrderAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "https://patisseriestmartin.com/contact",
          "inLanguage": "fr-CA"
        },
        "name": "Commander en ligne",
        "description": "Passer une commande de pâtisseries ou gâteaux"
      },
      {
        "@type": "CallAction",
        "target": {
          "@type": "EntryPoint",
          "urlTemplate": "tel:+15147226575"
        },
        "name": "Appeler la patisserie",
        "description": "Appeler pour des informations ou commandes"
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
          "name": "Marie-Claude Tremblay"
        },
        "reviewBody": "Les gâteaux de mariage sont absolument magnifiques ! Chaque détail était parfait et le goût était exceptionnel. Tous nos invités ont adoré !",
        "datePublished": "2024-01-15",
        "itemReviewed": {
          "@type": "Bakery",
          "name": "Patisserie St. Martin"
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Jean-François Bouchard"
        },
        "reviewBody": "La meilleure patisserie du quartier ! Les croissants sont à tomber et le service est impeccable. Je recommande vivement !",
        "datePublished": "2024-02-20",
        "itemReviewed": {
          "@type": "Bakery",
          "name": "Patisserie St. Martin"
        }
      },
      {
        "@type": "Review",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        },
        "author": {
          "@type": "Person",
          "name": "Sophie Dubois"
        },
        "reviewBody": "Gâteau d'anniversaire personnalisé pour ma fille de 5 ans - elle était ravie ! La décoration était parfaite et le goût délicieux.",
        "datePublished": "2024-03-10",
        "itemReviewed": {
          "@type": "Bakery",
          "name": "Patisserie St. Martin"
        }
      }
    ],
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "50+",
      "bestRating": "5",
      "worstRating": "1"
    },

  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
};

export default JsonLD;
