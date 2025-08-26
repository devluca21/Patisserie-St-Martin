import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';

import Testimonials from '@/components/Testimonials';

import InstagramEmbed from '@/components/InstagramEmbed';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Patisserie St. Martin | Artisan Pastries & Cakes - Montréal',
  description: 'Découvrez nos délicieuses pâtisseries artisanales, gâteaux sur mesure et services traiteur. Patisserie St. Martin - Excellence et tradition depuis des générations.',
  keywords: [
    'patisserie montreal',
    'gateaux montreal',
    'patisserie artisanale',
    'traiteur montreal',
    'desserts montreal',
    'patisserie st martin',
    'gateaux sur mesure',
    'pains artisanaux',
    'viennoiseries',
    'chocolat montreal',
    'patisserie artisanale montreal',
    'gateaux personnalises'
  ],
  openGraph: {
    title: 'Patisserie St. Martin | Artisan Pastries & Cakes - Montréal',
    description: 'Découvrez nos délicieuses pâtisseries artisanales, gâteaux sur mesure et services traiteur. Patisserie St. Martin - Excellence et tradition depuis des générations.',
    url: 'https://patisseriestmartin.com',
    siteName: 'Patisserie St. Martin',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Patisserie St. Martin - Artisan Pastries & Cakes - Montréal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patisserie St. Martin | Artisan Pastries & Cakes - Montréal',
    description: 'Découvrez nos délicieuses pâtisseries artisanales, gâteaux sur mesure et services traiteur.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://patisseriestmartin.com',
    languages: {
      'fr-CA': 'https://patisseriestmartin.com',
      'en-CA': 'https://patisseriestmartin.com/en',
    },
  },
};

export default function HomePage() {
  return (
    <>
      <JsonLD />
      <Hero />
      <section id="services">
        <ServicesGrid />
      </section>
      <InstagramEmbed />
      <Testimonials />
    </>
  );
}
