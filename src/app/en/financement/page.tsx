import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CreditCard, FileText, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Dental Financing | Dr Georgette Elias Dental Clinic - Montreal',
  description: 'Financing options for dental care: Accord D, Flexiti, insurance, CDCP. Flexible solutions for all budgets in Montreal.',
  keywords: [
    'dental financing montreal',
    'accord d desjardins',
    'flexiti dental',
    'dental insurance montreal',
    'CDCP montreal',
    'canadian dental care plan',
    'dental credit montreal',
    'dental care payment',
    'dental implant financing',
    'dental care insurance'
  ],
  openGraph: {
    title: 'Dental Financing | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Financing options for dental care: Accord D, Flexiti, insurance, CDCP. Flexible solutions for all budgets in Montreal.',
    url: 'https://www.dentistegeorgetteelias.com/en/financement',
    siteName: 'Dr Georgette Elias Dental Clinic',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Dental Financing - Dr Georgette Elias Dental Clinic - Montreal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dental Financing | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Financing options for dental care: Accord D, Flexiti, insurance, CDCP.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/en/financement',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com/financement',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en/financement',
    },
  },
};

export default function FinancementPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dental-dark mb-4">Available Financing Options</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Flexible solutions for your dental care
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {/* Accord D */}
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <Image
                src="/accord-desjardins.jpg"
                alt="Accord D"
                width={80}
                height={40}
                className="object-contain"
              />
            </div>
            <CardTitle className="text-lg">
              Accord D Service – Pay in one year with no interest
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Pay for your dental care in one year with no interest through Desjardins Accord D.
            </p>
          </CardContent>
        </Card>

        {/* Insurance Processing */}
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <FileText className="h-12 w-12 text-dental-primary" />
            </div>
            <CardTitle className="text-lg">
              Online Insurance Transmission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Electronic transmission of your insurance claims for fast processing.
            </p>
          </CardContent>
        </Card>

        {/* Flexiti */}
        <Card className="text-center">
          <CardHeader>
            <div className="flex justify-center mb-4">
              <CreditCard className="h-12 w-12 text-dental-primary" />
            </div>
            <CardTitle className="text-lg">
              Flexiti (Flexible Partial Dentures)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Flexible financing for your dental care
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CDCP Section */}
      <div className="bg-dental-light rounded-lg p-8 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-dental-dark mb-4">
            Canadian Dental Care Plan (CDCP)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Proud CDCP partner! We accept patients eligible for the federal plan.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link href="/en/cdcp">
            <Button size="lg" className="flex items-center gap-2">
              Learn more about CDCP
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-6">
          For more information about our financing options, contact us.
        </p>
        <Link href="/en/contact">
          <Button variant="outline" size="lg">
            Contact Us
          </Button>
        </Link>
      </div>
    </div>
  );
}
