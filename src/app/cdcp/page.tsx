import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowRight, Calendar, Users, CheckCircle, Info } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export const metadata: Metadata = {
  title: 'Régime canadien de soins dentaires (RCSD) | Clinique Dentaire Dr Georgette Elias - Montréal',
  description: 'Informations complètes sur le RCSD : admissibilité, comment postuler, couverture des soins dentaires. Partenaire officiel à Montréal.',
  keywords: [
    'RCSD montreal',
    'regime canadien soins dentaires',
    'assurance dentaire gouvernementale',
    'soins dentaires gratuits montreal',
    'RCSD admissibilite',
    'postuler RCSD montreal',
    'assurance dentaire quebec',
    'soins dentaires abordables',
    'regime dentaire federal',
    'clinique partenaire RCSD'
  ],
  openGraph: {
    title: 'Régime canadien de soins dentaires (RCSD) | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Informations complètes sur le RCSD : admissibilité, comment postuler, couverture des soins dentaires. Partenaire officiel à Montréal.',
    url: 'https://www.dentistegeorgetteelias.com/cdcp',
    siteName: 'Clinique Dentaire Dr Georgette Elias',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'RCSD - Régime canadien de soins dentaires - Clinique Dentaire Dr Georgette Elias - Montréal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RCSD - Régime canadien de soins dentaires | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Informations complètes sur le RCSD : admissibilité, comment postuler, couverture des soins dentaires.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/cdcp',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com/cdcp',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en/cdcp',
    },
  },
};

export default function CDCPPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-dental-dark mb-4">
          Régime canadien de soins dentaires (RCSD)
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Le gouvernement du Canada a lancé le Régime canadien de soins dentaires (RCSD) pour améliorer l'accessibilité et l'abordabilité des soins dentaires.
        </p>
      </div>

      {/* How it works */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          Comment fonctionne le RCSD ?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-dental-primary" />
                Début du programme
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Le RCSD est un régime de prestations dentaires financé par l'État qui commence en mai 2024. Il vise les personnes dont le revenu familial annuel est inférieur à 90 000 $ et qui n'ont pas d'assurance dentaire privée.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-dental-primary" />
                Couverture
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Ce régime couvre une partie des coûts associés aux traitements de santé bucco-dentaire pour prévenir et traiter les maladies buccales, protégeant ainsi contre des problèmes de santé plus graves.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Eligibility */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          Critères d'admissibilité
        </h2>
        <Card className="mb-6">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Être un résident canadien à des fins fiscales</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Avoir produit une déclaration de revenus pour l'année précédente</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ne pas avoir d'assurance dentaire privée ou de régime de retraite</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Avoir un revenu familial net (après impôt) de moins de 90 000 $ annuellement</span>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                  <span>Ne pas avoir d'assurance dentaire par l'employeur</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Application Phases */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          Phases de demande
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-dental-light">
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Groupes d'âge admissibles</th>
                <th className="border border-gray-300 px-4 py-3 text-left font-semibold">Date d'ouverture des demandes</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Aînés 87+</td>
                <td className="border border-gray-300 px-4 py-3">Décembre 2023</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Aînés entre 77-86</td>
                <td className="border border-gray-300 px-4 py-3">Janvier 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Aînés entre 72-76</td>
                <td className="border border-gray-300 px-4 py-3">Février 2024</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Aînés entre 70-71</td>
                <td className="border border-gray-300 px-4 py-3">Mars 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Aînés entre 65-69</td>
                <td className="border border-gray-300 px-4 py-3">Mai 2024</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Personnes ayant un certificat de crédit d'impôt pour personnes handicapées</td>
                <td className="border border-gray-300 px-4 py-3">Juin 2024</td>
              </tr>
              <tr>
                <td className="border border-gray-300 px-4 py-3">Enfants de moins de 18 ans</td>
                <td className="border border-gray-300 px-4 py-3">Juin 2024</td>
              </tr>
              <tr className="bg-gray-50">
                <td className="border border-gray-300 px-4 py-3">Tous les autres résidents canadiens admissibles</td>
                <td className="border border-gray-300 px-4 py-3">2025</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* How to Apply */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          Comment postuler
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5 text-dental-primary" />
                Pour les aînés (65 ans et plus)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                Vous recevrez une lettre avec des instructions et un code de demande. Suivez les instructions de la lettre pour postuler par téléphone.
              </p>
              <p className="text-gray-600">
                Si vous n'avez pas reçu de lettre mais croyez être admissible, assurez-vous que l'adresse postale utilisée pour votre déclaration fiscale 2022 est à jour.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Info className="h-5 w-5 text-dental-primary" />
                Pour les autres personnes admissibles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                À partir de mai 2024, vous pourrez postuler en ligne.
              </p>
              <p className="text-gray-600">
                Surveillez les mises à jour du RCSD pour plus d'informations sur le processus de demande en ligne.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* After Application */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold text-dental-dark mb-6 text-center">
          Après votre demande
        </h2>
        <Card>
          <CardContent className="pt-6">
            <p className="text-gray-600 mb-4">
              Après avoir postulé au RCSD, Santé Canada vérifiera votre admissibilité et transmettra vos informations à Sun Life, qui gère le processus d'inscription du régime.
            </p>
            <p className="text-gray-600">
              Dans les trois mois suivant votre demande, vous recevrez un forfait de bienvenue de Sun Life comprenant la date de début de votre couverture, votre carte d'adhésion et des informations sur le RCSD.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center">
        <div className="bg-dental-primary text-white rounded-lg p-8 mb-8">
          <h3 className="text-2xl font-bold mb-4">Prêt à postuler ?</h3>
          <p className="text-lg mb-6">
            Postulez maintenant au Régime canadien de soins dentaires
          </p>
          <a
            href="https://www.canada.ca/en/services/benefits/dental/dental-care-plan/apply.html"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-dental-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Comment postuler
            <ArrowRight className="h-5 w-5" />
          </a>
        </div>
        
        <p className="text-gray-600 mb-6">
          Pour plus d'informations sur les services couverts, visitez le site web du gouvernement du Canada.
        </p>
        
        <Link href="/contact">
          <Button variant="outline" size="lg">
            Nous contacter pour plus d'informations
          </Button>
        </Link>
      </div>
    </div>
  );
}
