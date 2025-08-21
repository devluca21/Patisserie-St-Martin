import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { CreditCard, FileText, Shield, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Financement Dentaire | Clinique Dentaire Dr Georgette Elias - Montréal',
  description: 'Options de financement pour soins dentaires : Accord D, Flexiti, assurances, RCSD. Solutions flexibles pour tous les budgets à Montréal.',
  keywords: [
    'financement dentaire montreal',
    'accord d desjardins',
    'flexiti dentaire',
    'assurance dentaire montreal',
    'RCSD montreal',
    'regime canadien soins dentaires',
    'credit dentaire montreal',
    'paiement soins dentaires',
    'financement implant dentaire',
    'assurance soins dentaires'
  ],
  openGraph: {
    title: 'Financement Dentaire | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Options de financement pour soins dentaires : Accord D, Flexiti, assurances, RCSD. Solutions flexibles pour tous les budgets à Montréal.',
    url: 'https://www.dentistegeorgetteelias.com/financement',
    siteName: 'Clinique Dentaire Dr Georgette Elias',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Financement Dentaire - Clinique Dentaire Dr Georgette Elias - Montréal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Financement Dentaire | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Options de financement pour soins dentaires : Accord D, Flexiti, assurances, RCSD.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/financement',
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
        <h1 className="text-4xl font-bold text-dental-dark mb-4">Options de financement disponibles</h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Des solutions flexibles pour vos soins dentaires
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
              Service Accord D – Payez dans un an sans intérêt
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Payez vos soins dentaires en un an sans intérêt avec Accord D de Desjardins.
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
              Transmission par Internet des assurances
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Transmission électronique de vos réclamations d'assurance pour un traitement rapide.
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
              Flexite (prothèses partielles flexibles)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 text-sm">
              Financement flexible pour vos soins dentaires
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CDCP Section */}
      <div className="bg-dental-light rounded-lg p-8 mb-12">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-dental-dark mb-4">
            Régime canadien de soins dentaires (RCSD)
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Fière partenaire du RCSD ! Nous acceptons les patients admissibles au régime fédéral.
          </p>
        </div>
        
        <div className="flex justify-center">
          <Link href="/cdcp">
            <Button size="lg" className="flex items-center gap-2">
              En savoir plus sur le RCSD
              <ArrowRight className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>

      <div className="text-center">
        <p className="text-gray-600 mb-6">
          Pour plus d'informations sur nos options de financement, contactez-nous.
        </p>
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Nous contacter
          </Button>
        </Link>
      </div>
    </div>
  );
}
