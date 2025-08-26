'use client';

import Image from 'next/image';
import { useTranslations } from '@/lib/useTranslations';

export default function PastryGallery() {
  const { t, isEnglish } = useTranslations();

  // Pastry data organized by category
  const pastryData = [
    {
      id: 'PA01',
      title: 'Assortiment de Viennoiseries',
      image: '/Pastries/image-16.jpeg',
      description: 'Sélection variée de croissants et viennoiseries fraîches',
      category: 'Viennoiseries'
    },
    {
      id: 'PA02',
      title: 'Pâtisseries Artisanales',
      image: '/Pastries/image-10.jpeg',
      description: 'Créations délicates et savoureuses de notre atelier',
      category: 'Viennoiseries'
    },
    {
      id: 'PA03',
      title: 'Viennoiseries Traditionnelles',
      image: '/Pastries/image-18.jpeg',
      description: 'Nos viennoiseries classiques préparées avec soin',
      category: 'Viennoiseries'
    },
    {
      id: 'PA04',
      title: 'Pains Artisanaux',
      image: '/Pastries/image-30.jpeg',
      description: 'Sélection de nos pains frais et traditionnels',
      category: 'Boulangerie'
    },
    {
      id: 'PA05',
      title: 'Baguettes Fraîches',
      image: '/Traiteur/baguette-2015.jpg',
      description: 'Baguettes traditionnelles cuites au feu de bois',
      category: 'Boulangerie'
    },
    {
      id: 'PA06',
      title: 'Pains Spéciaux',
      image: '/Pastries/4-3.png',
      description: 'Nos pains aux céréales et graines nutritifs',
      category: 'Boulangerie'
    },
    {
      id: 'PA07',
      title: 'Pâtisseries Fines',
      image: '/Pastries/6-3.png',
      description: 'Créations élégantes et raffinées',
      category: 'Pâtisseries'
    },
    {
      id: 'PA08',
      title: 'Desserts Saisonniers',
      image: '/Pastries/11-2.png',
      description: 'Tartes et desserts aux fruits de saison',
      category: 'Pâtisseries'
    },
    {
      id: 'PA09',
      title: 'Macarons Colorés',
      image: '/Pastries/Untitled-500-x-500-mm.png',
      description: 'Macarons aux saveurs variées et couleurs vives',
      category: 'Pâtisseries'
    },
    {
      id: 'PA10',
      title: 'Mille-Feuilles Classiques',
      image: '/Pastries/8-3.png',
      description: 'Mille-feuilles traditionnels feuilletés et délicats',
      category: 'Pâtisseries'
    },
    {
      id: 'PA11',
      title: 'Choux à la Crème',
      image: '/Pastries/6-4.png',
      description: 'Choux garnis de crème chantilly vanille',
      category: 'Pâtisseries'
    },
    {
      id: 'PA12',
      title: 'Pains au Lait',
      image: '/Pastries/5-3.png',
      description: 'Pains au lait moelleux et légèrement sucrés',
      category: 'Viennoiseries'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {pastryData.map((pastry) => (
          <div key={pastry.id} className="group">
            <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-white">
              <Image
                src={pastry.image}
                alt={pastry.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              
              {/* Overlay with pastry info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                  <h3 className="font-semibold text-lg mb-2">{pastry.title}</h3>
                  <p className="text-sm opacity-90">{pastry.description}</p>
                  <div className="mt-2 text-xs opacity-75">ID: {pastry.id}</div>
                </div>
              </div>
            </div>
            
            {/* Item title below image */}
            <div className="mt-3 text-center">
              <h3 className="font-medium text-patisserie-dark">{pastry.title}</h3>
              <p className="text-sm text-patisserie-secondary mt-1">{pastry.id}</p>
            </div>
          </div>
        ))}
      </div>

             {/* Daily Freshness Note */}
       <div className="text-center mt-16">
         <div className="bg-white rounded-lg shadow-lg p-4 sm:p-6 md:p-8 max-w-7xl mx-auto">
           <div className="w-16 h-16 sm:w-20 sm:h-20 bg-patisserie-accent rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
             <Image
               src="/Logos/Patisserie-St-Martin-Logo.png"
               alt="Patisserie St. Martin"
               width={48}
               height={48}
               className="object-contain"
             />
           </div>
           <h3 className="text-xl sm:text-2xl font-bold text-patisserie-dark mb-3 sm:mb-4">
             {t('gallery.cta.dailyFreshness')}
           </h3>
          <p className="text-sm sm:text-base text-patisserie-secondary mb-4 sm:mb-6 px-2">
            {t('gallery.cta.dailyFreshnessDescPastry')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-patisserie-primary text-white px-6 py-3 rounded-lg font-semibold hover:bg-patisserie-dark transition-colors w-full sm:w-auto text-center"
            >
              {t('gallery.cta.order')}
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center gap-2 border-2 border-patisserie-primary text-patisserie-primary px-6 py-3 rounded-lg font-semibold hover:bg-patisserie-primary hover:text-white transition-colors w-full sm:w-auto text-center"
            >
              {t('gallery.cta.contactUs')}
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
