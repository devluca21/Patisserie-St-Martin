'use client';

import { Cake, Croissant, Wheat, Star, Users, ArrowRight, Phone, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from '@/lib/useTranslations';

interface Category {
  id: string;
  title: string;
  subtitle: string;
  link: string;
  image: string;
  description: string;
  features: string[];
  icon: React.ComponentType<{ className?: string }>;
  highlight: string;
}

export default function ServicesGrid() {
  const { t, isEnglish } = useTranslations();
  
  const categories: Category[] = [
    {
      id: 'traiteur',
      title: t('services.categories.traiteur.title'),
      subtitle: t('services.categories.traiteur.subtitle'),
      link: isEnglish ? '/en/traiteur' : '/traiteur',
      image: '/Traiteur/chacuterie-fins-sur.jpeg',
      description: t('services.categories.traiteur.description'),
      features: t('services.categories.traiteur.features'),
      icon: Users,
      highlight: t('services.categories.traiteur.highlight')
    },
    {
      id: 'patisseries',
      title: t('services.categories.patisseries.title'),
      subtitle: t('services.categories.patisseries.subtitle'),
      link: isEnglish ? '/en/patisseries' : '/patisseries',
      image: '/Pastries/image-10.jpeg',
      description: t('services.categories.patisseries.description'),
      features: t('services.categories.patisseries.features'),
      icon: Croissant,
      highlight: t('services.categories.patisseries.highlight')
    },
    {
      id: 'boulangerie',
      title: t('services.categories.boulangerie.title'),
      subtitle: t('services.categories.boulangerie.subtitle'),
      link: isEnglish ? '/en/boulangerie' : '/boulangerie',
      image: '/Traiteur/baguette-2015.jpg',
      description: t('services.categories.boulangerie.description'),
      features: t('services.categories.boulangerie.features'),
      icon: Wheat,
      highlight: t('services.categories.boulangerie.highlight')
    },
    {
      id: 'gateaux',
      title: t('services.categories.gateaux.title'),
      subtitle: t('services.categories.gateaux.subtitle'),
      link: isEnglish ? '/en/gateaux' : '/gateaux',
      image: '/Cakes/Wedding Cakes/peach-and-cream-compressor-WEDDING-CAKE.jpg',
      description: t('services.categories.gateaux.description'),
      features: t('services.categories.gateaux.features'),
      icon: Cake,
      highlight: t('services.categories.gateaux.highlight')
    }
  ];
  return (
    <section className="py-6 sm:py-8 md:py-10 lg:py-16 bg-patisserie-accent w-full overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16 w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-patisserie-dark mb-2 sm:mb-3 md:mb-4 lg:mb-4">
            {t('services.title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-patisserie-secondary max-w-2xl mx-auto px-2">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Enhanced Category Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-16 w-full max-w-full">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.id} className="group flex flex-col w-full max-w-full">
                {/* Image Card */}
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg mb-2 sm:mb-3 md:mb-4 lg:mb-4 w-full">
                  <Image
                    src={category.image}
                    alt={category.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Highlight Badge */}
                  <div className="absolute top-1 sm:top-2 md:top-3 lg:top-3 right-1 sm:right-2 md:right-3 lg:right-3">
                    <span className="bg-patisserie-primary text-white text-xs px-1 sm:px-2 py-1 rounded-full font-medium">
                      {category.highlight}
                    </span>
                  </div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-1 sm:top-2 md:top-3 lg:top-3 left-1 sm:left-2 md:left-3 lg:left-3">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 bg-white bg-opacity-90 rounded-full flex items-center justify-center">
                      <IconComponent className="h-3 w-3 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5 text-patisserie-primary" />
                    </div>
                  </div>
                  
                  {/* Link overlay */}
                  <Link 
                    href={category.link} 
                    className="absolute inset-0 block"
                    aria-label={`View ${category.title}`}
                  />
                </div>

                {/* Content Card */}
                <div className="bg-white rounded-lg shadow-lg p-3 sm:p-4 md:p-5 lg:p-6 flex-1 flex flex-col w-full">
                  <div className="flex items-start justify-between mb-2 sm:mb-3 md:mb-4 lg:mb-4 w-full">
                    <Link 
                      href={category.link}
                      className="text-sm sm:text-base md:text-lg lg:text-lg font-bold text-patisserie-dark hover:text-patisserie-primary transition-colors flex-1"
                    >
                      {category.title}
                    </Link>
                    <Link 
                      href={category.link}
                      className="text-patisserie-primary hover:text-patisserie-dark transition-colors ml-2"
                    >
                      <ArrowRight className="h-3 w-3 sm:h-4 sm:w-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
                    </Link>
                  </div>
                  
                  <p className="text-patisserie-secondary text-xs sm:text-xs md:text-sm lg:text-sm mb-2 sm:mb-3 md:mb-4 lg:mb-4 leading-relaxed">
                    {category.description}
                  </p>
                  
                  {/* Features List */}
                  <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-4 w-full">
                    <h4 className="text-xs sm:text-xs md:text-sm lg:text-sm font-semibold text-patisserie-dark mb-1 sm:mb-2 md:mb-3 lg:mb-3">
                      {t('services.included')}
                    </h4>
                    <ul className="space-y-1 sm:space-y-1 md:space-y-2 lg:space-y-2 w-full">
                      {category.features.map((feature: string, index: number) => (
                        <li key={index} className="flex items-center gap-1 sm:gap-2 text-xs sm:text-xs md:text-sm lg:text-sm text-patisserie-secondary">
                          <Star className="h-2 w-2 sm:h-2 sm:w-2 md:h-3 md:w-3 lg:h-3 lg:w-3 text-patisserie-accent flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Action Button - Push to bottom */}
                  <div className="mt-auto w-full">
                    <Link
                      href={category.link}
                      className="w-full bg-patisserie-primary text-white py-1.5 sm:py-2 md:py-2.5 lg:py-2 px-2 sm:px-3 md:px-4 lg:px-4 rounded-lg text-xs sm:text-xs md:text-sm lg:text-sm font-semibold hover:bg-patisserie-dark transition-colors flex items-center justify-center gap-1 sm:gap-2"
                    >
                      {t('services.explore')}
                      <ArrowRight className="h-2 w-2 sm:h-3 sm:w-3 md:h-3 md:w-3 lg:h-4 lg:w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
