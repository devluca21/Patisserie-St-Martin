import { Metadata } from 'next';
import Hero from '@/components/Hero';
import ServicesGrid from '@/components/ServicesGrid';
import FinancingTeaser from '@/components/FinancingTeaser';
import Testimonials from '@/components/Testimonials';
import OfficeSection from '@/components/OfficeSection';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Dr Georgette Elias Dental Clinic | Montreal - Complete Dental Care',
  description: 'Modern dental clinic in Montreal. Complete dental care, cutting-edge technology, RCSD partner. Online appointment booking. Dental emergencies.',
  keywords: [
    'dentist montreal',
    'dental clinic montreal',
    'dr georgette elias',
    'dental care montreal',
    'dental implant montreal',
    'root canal treatment montreal',
    'teeth whitening montreal',
    'dental emergency montreal',
    'RCSD montreal',
    'dental financing montreal',
    'metro d\'iberville',
    'rue belanger'
  ],
  openGraph: {
    title: 'Dr Georgette Elias Dental Clinic | Montreal - Complete Dental Care',
    description: 'Modern dental clinic in Montreal. Complete dental care, cutting-edge technology, RCSD partner. Online appointment booking. Dental emergencies.',
    url: 'https://www.dentistegeorgetteelias.com/en',
    siteName: 'Dr Georgette Elias Dental Clinic',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr Georgette Elias Dental Clinic - Montreal - Complete Dental Care',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr Georgette Elias Dental Clinic | Montreal - Complete Dental Care',
    description: 'Modern dental clinic in Montreal. Complete dental care, cutting-edge technology, RCSD partner.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/en',
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
