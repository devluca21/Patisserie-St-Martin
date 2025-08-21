import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import FinancingTeaser from '@/components/FinancingTeaser';
import Testimonials from '@/components/Testimonials';
import OfficeSection from '@/components/OfficeSection';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Clinique Dentaire Dr Georgette Elias | Montréal - Soins Dentaires Complets',
  description: 'Clinique dentaire moderne à Montréal. Soins dentaires complets, technologie de pointe, partenaire RCSD. Prise de rendez-vous en ligne. Urgences dentaires.',
  keywords: [
    'dentiste montreal',
    'clinique dentaire montreal',
    'dr georgette elias',
    'soins dentaires montreal',
    'implant dentaire montreal',
    'traitement canal montreal',
    'blanchiment dents montreal',
    'urgence dentaire montreal',
    'RCSD montreal',
    'financement dentaire montreal',
    'métro d\'iberville',
    'rue bélanger'
  ],
  openGraph: {
    title: 'Clinique Dentaire Dr Georgette Elias | Montréal - Soins Dentaires Complets',
    description: 'Clinique dentaire moderne à Montréal. Soins dentaires complets, technologie de pointe, partenaire RCSD. Prise de rendez-vous en ligne. Urgences dentaires.',
    url: 'https://www.dentistegeorgetteelias.com',
    siteName: 'Clinique Dentaire Dr Georgette Elias',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinique Dentaire Dr Georgette Elias - Montréal - Soins Dentaires Complets',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinique Dentaire Dr Georgette Elias | Montréal - Soins Dentaires Complets',
    description: 'Clinique dentaire moderne à Montréal. Soins dentaires complets, technologie de pointe, partenaire RCSD.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en',
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
      <FinancingTeaser />
      <OfficeSection />
      <Testimonials />
    </>
  );
}
