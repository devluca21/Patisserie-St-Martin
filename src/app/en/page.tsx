import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import Testimonials from '@/components/Testimonials';
import InstagramEmbed from '@/components/InstagramEmbed';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Patisserie St. Martin | Montreal - Artisan Pastries & Custom Cakes',
  description: 'Modern patisserie in Montreal. Artisan pastries, custom cakes, catering services. Online ordering. Special events and celebrations.',
  keywords: [
    'patisserie montreal',
    'custom cakes montreal',
    'patisserie st martin',
    'artisan pastries montreal',
    'wedding cakes montreal',
    'birthday cakes montreal',
    'catering montreal',
    'croissants montreal',
    'viennoiseries montreal',
    'artisan bread montreal',
    'metro d\'iberville',
    'rue belanger'
  ],
  openGraph: {
    title: 'Patisserie St. Martin | Montreal - Artisan Pastries & Custom Cakes',
    description: 'Modern patisserie in Montreal. Artisan pastries, custom cakes, catering services. Online ordering. Special events and celebrations.',
    url: 'https://patisseriestmartin.com/en',
    siteName: 'Patisserie St. Martin',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Patisserie St. Martin - Montreal - Artisan Pastries & Custom Cakes',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patisserie St. Martin | Montreal - Artisan Pastries & Custom Cakes',
    description: 'Modern patisserie in Montreal. Artisan pastries, custom cakes, catering services. Online ordering.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://patisseriestmartin.com/en',
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
