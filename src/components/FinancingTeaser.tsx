'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CreditCard, FileText, Shield } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/Card';
import Button from './ui/Button';

const FinancingTeaser = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return (
    <section className="py-16 bg-dental-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-dental-dark mb-4">
            {isEnglish ? 'Financing options available' : 'Options de financement disponibles'}
          </h2>
          <p className="text-lg text-gray-600">
            {isEnglish ? 'Flexible solutions for your dental care' : 'Des solutions flexibles pour vos soins dentaires'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
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
                {isEnglish 
                  ? 'Accord D Service – Pay in one year, interest-free'
                  : 'Service Accord D – Payez dans un an sans intérêt'
                }
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                {isEnglish 
                  ? 'Pay for your dental care in one year without interest with Accord D from Desjardins.'
                  : 'Payez vos soins dentaires en un an sans intérêt avec Accord D de Desjardins.'
                }
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
                {isEnglish ? 'Electronic insurance submission' : 'Transmission par Internet des assurances'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                {isEnglish 
                  ? 'Electronic transmission of your insurance claims for fast processing.'
                  : 'Transmission électronique de vos réclamations d\'assurance pour un traitement rapide.'
                }
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
                {isEnglish ? 'Flexite (flexible partial dentures)' : 'Flexite (prothèses partielles flexibles)'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm">
                {isEnglish ? 'Flexible financing for your dental care' : 'Financement flexible pour vos soins dentaires'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Link href={isEnglish ? "/en/financement" : "/financement"}>
            <Button size="lg">
              {isEnglish ? 'Learn More' : 'En savoir plus'}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinancingTeaser;
