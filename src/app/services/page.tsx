'use client';

import Image from 'next/image';
import JsonLD from '@/components/JsonLD';
import { useState } from 'react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('rootCanal');

  const services = [
    {
      id: 'rootCanal',
      title: 'Traitement de canal, Endodontie',
      description: 'Le traitement de canal (endodontie) est nécessaire lorsque la pulpe à l\'intérieur de la dent devient irritée ou infectée. Cela peut être causé par une carie profonde, un plombage important, une maladie des gencives ou un traumatisme. Le traitement consiste à retirer les bactéries de la pulpe, à nettoyer et à façonner le canal, puis à le remplir et à sceller la dent. La plupart des traitements peuvent être complétés en une seule séance dentaire.',
      images: ['/Dollarphotoclub_516592191.jpg']
    },
    {
      id: 'preventiveDentistry',
      title: 'Dentisterie préventive',
      description: 'La dentisterie préventive est la base d\'une bonne santé bucco-dentaire. Elle comprend les examens de routine, les nettoyages professionnels, les radiographies numériques et les conseils d\'hygiène personnalisés. Notre objectif est de prévenir les problèmes dentaires avant qu\'ils ne surviennent, vous permettant de conserver vos dents naturelles toute votre vie.',
      images: ['/Dollarphotoclub_464694391.jpg']
    },
    {
      id: 'cosmeticDentistry',
      title: 'Dentisterie esthétique',
      description: 'Transformez votre sourire avec nos services de dentisterie esthétique. Nous offrons le blanchiment professionnel, les facettes en porcelaine, la remise en forme du sourire et d\'autres traitements pour améliorer l\'apparence de vos dents. Chaque traitement est personnalisé pour répondre à vos objectifs esthétiques.',
      images: ['/Dollarphotoclub_441182651.jpg']
    },
    {
      id: 'wisdomTeethExtraction',
      title: 'Extraction de dents de sagesse',
      description: 'L\'extraction des dents de sagesse est souvent nécessaire pour prévenir les problèmes d\'alignement et les infections. Nos dentistes utilisent des techniques avancées pour des extractions sécuritaires et confortables. Nous offrons des options de sédation pour votre confort pendant la procédure.',
      images: ['/Newtechnology.jpg']
    },
    {
      id: 'teethWhitening',
      title: 'Blanchiment dentaire',
      description: 'Retrouvez un sourire éclatant avec nos traitements de blanchiment professionnels. Nous utilisons des produits de blanchiment de qualité professionnelle qui sont plus efficaces et plus sûrs que les produits en vente libre. Le traitement peut être effectué en cabinet ou à domicile selon vos préférences.',
      images: ['/Dollarphotoclub_518975341.jpg']
    },
    {
      id: 'periodontics',
      title: 'Gingivite et traitement de la parodontite',
      description: 'La santé des gencives est essentielle à la santé bucco-dentaire globale. Nous traitons la gingivite et la parodontite avec des procédures non chirurgicales et chirurgicales selon la gravité de la maladie. Nos traitements visent à arrêter la progression de la maladie et à restaurer la santé des gencives.',
      images: ['/Dollarphotoclub_482452451.jpg']
    },
    {
      id: 'veneers',
      title: 'Facettes (composite, porcelaine)',
      description: 'Les facettes sont des coquilles minces en porcelaine ou en composite qui sont collées sur la surface avant des dents pour améliorer leur apparence. Elles peuvent corriger la couleur, la forme, la taille et l\'alignement des dents. Les facettes en porcelaine sont plus durables et résistantes aux taches que les facettes en composite.',
      images: ['/Dollarphotoclub_614113411-2.jpg']
    },
    {
      id: 'bruxism',
      title: 'Bruxisme',
      description: 'Le bruxisme (grincement des dents) peut causer des dommages importants aux dents et des douleurs faciales. Nous offrons des solutions personnalisées, y compris des protège-dents sur mesure pour protéger vos dents pendant le sommeil. Nous traitons également les causes sous-jacentes du bruxisme.',
      images: ['/MG_06931.jpg']
    },
    {
      id: 'crownsAndBridges',
      title: 'Couronnes et ponts',
      description: 'Les couronnes et ponts sont des restaurations durables qui peuvent restaurer la fonction et l\'apparence de vos dents. Les couronnes recouvrent complètement une dent endommagée, tandis que les ponts remplacent une ou plusieurs dents manquantes. Nous utilisons les matériaux de la plus haute qualité pour des résultats naturels.',
      images: ['/Dollarphotoclub_479095661.jpg']
    },
    {
      id: 'dentures',
      title: 'Prothèses amovibles complètes et partielles',
      description: 'Nos prothèses amovibles offrent une solution confortable et esthétique pour remplacer les dents manquantes. Nous créons des prothèses sur mesure qui s\'adaptent parfaitement à votre bouche et améliorent votre capacité à manger et à parler. Nous offrons des options en acrylique et en métal selon vos besoins.',
      images: []
    },
    {
      id: 'implants',
      title: 'Implant avec couronne',
      description: 'Les implants dentaires sont la solution la plus permanente et naturelle pour remplacer les dents manquantes. Un implant est une vis en titane qui est placée dans l\'os de la mâchoire, puis une couronne est attachée à l\'implant. Les implants offrent une fonction et une apparence identiques aux dents naturelles.',
      images: []
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <>
      <JsonLD />
      <div className="min-h-screen bg-gradient-to-b from-dental-light to-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-dark mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services dentaires professionnels
            </p>
          </div>

          {/* Services Tabs Layout */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left Column - Service Tabs */}
              <div className="bg-gray-50 p-6">
                <h2 className="text-xl font-bold text-dental-dark mb-6">Services Disponibles</h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(service.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors hover:bg-gray-200 ${
                        activeTab === service.id 
                          ? 'bg-dental-primary text-white' 
                          : 'text-gray-700'
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column - Service Content */}
              <div className="lg:col-span-2 p-8">
                {activeService && (
                  <div>
                    <h2 className="text-3xl font-bold text-dental-dark mb-6">
                      {activeService.title}
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {activeService.description}
                      </p>
                    </div>
                    
                    {/* Service Images */}
                    {activeService.images && activeService.images.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold text-dental-dark mb-4">Illustrations</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {activeService.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="relative aspect-square rounded-lg overflow-hidden">
                              <Image
                                src={image}
                                alt={`${activeService.title} - étape ${imageIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-dental-dark mb-4">
              Prêt à prendre rendez-vous ?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contactez-nous pour discuter de vos besoins dentaires
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15147226575"
                className="inline-flex items-center justify-center gap-2 bg-dental-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-dental-dark transition-colors"
              >
                Appeler Maintenant
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-dental-primary text-dental-primary px-8 py-3 rounded-lg font-semibold hover:bg-dental-primary hover:text-white transition-colors"
              >
                Prendre Rendez-vous
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
