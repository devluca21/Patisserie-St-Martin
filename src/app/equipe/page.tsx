import { Metadata } from 'next';
import Image from 'next/image';
import { GraduationCap, Award, Heart, Users } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Notre Équipe | Clinique Dentaire Dr Georgette Elias - Montréal',
  description: 'Rencontrez Dr Georgette Elias et notre équipe de professionnels dentaires dévoués à votre santé bucco-dentaire. Expertise et soins personnalisés à Montréal.',
  keywords: [
    'dr georgette elias montreal',
    'dentiste montreal',
    'equipe dentaire montreal',
    'chirurgien dentiste montreal',
    'clinique dentaire montreal',
    'expertise dentaire montreal',
    'soins personnalises montreal',
    'professionnels dentaires montreal',
    'sante bucco-dentaire montreal',
    'experience dentaire montreal'
  ],
  openGraph: {
    title: 'Notre Équipe | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Rencontrez Dr Georgette Elias et notre équipe de professionnels dentaires dévoués à votre santé bucco-dentaire. Expertise et soins personnalisés à Montréal.',
    url: 'https://www.dentistegeorgetteelias.com/equipe',
    siteName: 'Clinique Dentaire Dr Georgette Elias',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Notre Équipe - Clinique Dentaire Dr Georgette Elias - Montréal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Notre Équipe | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Rencontrez Dr Georgette Elias et notre équipe de professionnels dentaires dévoués à votre santé bucco-dentaire.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/equipe',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com/equipe',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en/equipe',
    },
  },
};

export default function EquipePage() {
  return (
    <>
      <JsonLD />
      <div className="min-h-screen bg-gradient-to-b from-dental-light to-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-dark mb-6">
              Notre Équipe
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Une équipe de professionnels passionnés dédiés à votre santé bucco-dentaire et à votre bien-être.
            </p>
          </div>

          {/* Dr Georgette Elias Profile */}
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 mb-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-3xl font-bold text-dental-dark mb-4">
                  Dr Georgette Elias, D.M.D.
                </h2>
                <p className="text-xl text-dental-primary font-semibold mb-6">
                  Dentiste généraliste
                </p>
                <div className="space-y-4 text-gray-600">
                  <p>
                    Dr Georgette Elias est une dentiste passionnée qui s'engage à fournir des soins dentaires 
                    de la plus haute qualité dans une atmosphère chaleureuse et accueillante. Avec des années 
                    d'expérience en dentisterie générale, elle combine expertise technique et approche humaine 
                    pour assurer le confort et la satisfaction de chaque patient.
                  </p>
                  <p>
                    Son approche préventive et sa philosophie axée sur le patient font d'elle une dentiste 
                    de choix pour toute la famille. Dr Elias prend le temps d'écouter les préoccupations de 
                    ses patients et de leur expliquer clairement tous les aspects de leur traitement.
                  </p>
                </div>
              </div>
              <div className="order-1 lg:order-2 text-center">
                <div className="relative w-64 h-64 mx-auto mb-6">
                  <Image
                    src="/slide-01-1.jpg"
                    alt="Dr Georgette Elias"
                    fill
                    className="object-cover rounded-full shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Team Pictures Section */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-dental-dark mb-8 text-center">
              Notre Équipe
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/reception.jpg"
                    alt="Membre de l'équipe - Réception"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-dental-dark">Réception</h3>
                <p className="text-gray-600 text-sm">Accueil et coordination des soins</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/img-06.jpg"
                    alt="Membre de l'équipe - Soins"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-dental-dark">Soins</h3>
                <p className="text-gray-600 text-sm">Professionnel des soins dentaires</p>
              </div>
              <div className="text-center">
                <div className="relative w-48 h-48 mx-auto mb-4">
                  <Image
                    src="/img-08.jpg"
                    alt="Membre de l'équipe - Support"
                    fill
                    className="object-cover rounded-lg shadow-md"
                  />
                </div>
                <h3 className="font-semibold text-dental-dark">Support</h3>
                <p className="text-gray-600 text-sm">Assistance et coordination</p>
              </div>
            </div>
          </div>

          {/* Qualifications */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <GraduationCap className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Formation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Docteur en médecine dentaire (D.M.D.) avec formation continue en dentisterie moderne
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Accréditations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Membre de l'Ordre des dentistes du Québec et associations professionnelles
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Heart className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Philosophie
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Soins préventifs et approche douce pour un confort optimal du patient
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12 text-dental-primary" />
                </div>
                <CardTitle className="text-lg">
                  Expérience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">
                  Années d'expérience en dentisterie familiale et soins pour tous âges
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Specialities */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-12">
            <h2 className="text-3xl font-bold text-dental-dark mb-8 text-center">
              Spécialités et Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Dentisterie préventive</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Examens de routine</li>
                  <li>• Nettoyages professionnels</li>
                  <li>• Radiographies numériques</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Soins restaurateurs</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Obturations esthétiques</li>
                  <li>• Couronnes et ponts</li>
                  <li>• Traitements de canal</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Dentisterie esthétique</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Blanchiment dentaire</li>
                  <li>• Facettes en porcelaine</li>
                  <li>• Remise en forme du sourire</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Soins spécialisés</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Implants dentaires</li>
                  <li>• Prothèses complètes et partielles</li>
                  <li>• Traitement des gencives</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Dentisterie familiale</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Soins pour enfants</li>
                  <li>• Soins pour adultes</li>
                  <li>• Soins pour aînés</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-dental-dark">Urgences</h3>
                <ul className="text-gray-600 space-y-1">
                  <li>• Soulagement de la douleur</li>
                  <li>• Réparations d'urgence</li>
                  <li>• Consultations immédiates</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Team Values */}
          <div className="bg-dental-primary text-white rounded-xl p-8 mb-12">
            <h2 className="text-3xl font-bold mb-8 text-center">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Compassion</h3>
                <p className="text-white text-opacity-90">
                  Nous traitons chaque patient avec empathie et compréhension, créant un environnement sécuritaire et rassurant.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                <p className="text-white text-opacity-90">
                  Nous nous engageons à fournir des soins de la plus haute qualité en utilisant les dernières technologies.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Communication</h3>
                <p className="text-white text-opacity-90">
                  Nous prenons le temps d'expliquer clairement tous les traitements et répondons à toutes vos questions.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-3xl font-bold text-dental-dark mb-4">
              Rencontrez notre équipe
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Venez découvrir pourquoi tant de familles nous font confiance pour leurs soins dentaires.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15147226575"
                className="inline-flex items-center justify-center gap-2 bg-dental-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-dental-dark transition-colors"
              >
                Appeler maintenant
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-dental-primary text-dental-primary px-8 py-3 rounded-lg font-semibold hover:bg-dental-primary hover:text-white transition-colors"
              >
                Prendre rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
