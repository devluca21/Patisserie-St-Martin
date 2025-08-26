'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from '@/lib/useTranslations';

export default function CakeGallery() {
  const [activeTab, setActiveTab] = useState('wedding');
  const { t, isEnglish } = useTranslations();

  // Cake data organized by category
  const cakeData = {
    wedding: [
      { id: 'WM01', title: t('gallery.cake.items.nakedHydrangeas.title'), image: '/Cakes/Wedding Cakes/peach-and-cream-compressor-WEDDING-CAKE.jpg', description: t('gallery.cake.items.nakedHydrangeas.description') },
      { id: 'WM02', title: t('gallery.cake.items.noirTextes.title'), image: '/Cakes/Wedding Cakes/4-tier-love-wedding-cake-compressor-WEDDING-CAKE.jpg', description: t('gallery.cake.items.noirTextes.description') },
      { id: 'WM03', title: t('gallery.cake.items.classiqueBlanc.title'), image: '/Cakes/Wedding Cakes/CLASSIC-CAKE-compressor-WEDDING-CAKE.jpg', description: t('gallery.cake.items.classiqueBlanc.description') },
      { id: 'WM04', title: t('gallery.cake.items.roseGold.title'), image: '/Cakes/Wedding Cakes/mr-mrs-gold-compressor-WEDDING-CAKE.jpg', description: t('gallery.cake.items.roseGold.description') },
      { id: 'WM05', title: t('gallery.cake.items.rustique.title'), image: '/Cakes/Wedding Cakes/1bb4581f892e85b470e6de3e5b5fb5fa-CAKE-OCCASION-SPECIALE.jpg', description: t('gallery.cake.items.rustique.description') },
      { id: 'WM06', title: t('gallery.cake.items.moderne.title'), image: '/Cakes/Wedding Cakes/damaris-mia-photography-278-WEDDING-CAKE.jpg', description: t('gallery.cake.items.moderne.description') },
      { id: 'WM07', title: t('gallery.cake.items.nakedHydrangeas.title'), image: '/Cakes/Wedding Cakes/4-tier-creme-beurrwith-boquet-of-flowers-compressor-WEDDING-CAKE.jpg', description: t('gallery.cake.items.nakedHydrangeas.description') },
      { id: 'WM08', title: t('gallery.cake.items.noirTextes.title'), image: '/Cakes/Wedding Cakes/PERS-05-CAKE-OCCASION-SPECIALE.jpg', description: t('gallery.cake.items.noirTextes.description') },
      { id: 'WM09', title: t('gallery.cake.items.classiqueBlanc.title'), image: '/Cakes/Wedding Cakes/PERS-09-CAKE-OCCASION-SPECIALE.jpg', description: t('gallery.cake.items.classiqueBlanc.description') }
    ],
    classic: [
      { id: 'CL01', title: t('gallery.cake.items.mousseChocolat.title'), image: '/Cakes/Cake Classic/1-pstm.png', description: t('gallery.cake.items.mousseChocolat.description') },
      { id: 'CL02', title: t('gallery.cake.items.pistache.title'), image: '/Cakes/Cake Classic/2-pstm.png', description: t('gallery.cake.items.pistache.description') },
      { id: 'CL03', title: t('gallery.cake.items.shortcakeFraises.title'), image: '/Cakes/Cake Classic/3-pstm.png', description: t('gallery.cake.items.shortcakeFraises.description') },
      { id: 'CL04', title: t('gallery.cake.items.fruitsBois.title'), image: '/Cakes/Cake Classic/4-pstm.png', description: t('gallery.cake.items.fruitsBois.description') },
      { id: 'CL05', title: t('gallery.cake.items.mousseFramboises.title'), image: '/Cakes/Cake Classic/5-pstm.png', description: t('gallery.cake.items.mousseFramboises.description') },
      { id: 'CL06', title: t('gallery.cake.items.chocolatBeurre.title'), image: '/Cakes/Cake Classic/6-pstm.png', description: t('gallery.cake.items.chocolatBeurre.description') },
      { id: 'CL07', title: t('gallery.cake.items.limoncello.title'), image: '/Cakes/Cake Classic/7-pstm.png', description: t('gallery.cake.items.limoncello.description') },
      { id: 'CL08', title: t('gallery.cake.items.cremeLegere.title'), image: '/Cakes/Cake Classic/8-pstm.png', description: t('gallery.cake.items.cremeLegere.description') },
      { id: 'CL09', title: t('gallery.cake.items.moitieMoitie.title'), image: '/Cakes/Cake Classic/9-pstm.png', description: t('gallery.cake.items.moitieMoitie.description') },
      { id: 'CL10', title: t('gallery.cake.items.fraisier.title'), image: '/Cakes/Cake Classic/10-pstm.png', description: t('gallery.cake.items.fraisier.description') },
      { id: 'CL11', title: t('gallery.cake.items.domeFruitsBois.title'), image: '/Cakes/Cake Classic/11-pstm.png', description: t('gallery.cake.items.domeFruitsBois.description') }
    ],
    custom: [
      { id: 'WP01', title: t('gallery.cake.items.bapteme.title'), image: '/Cakes/Personalized Cakes/BEB-01-CAKE-OCCASION-SPECIALE.jpg', description: t('gallery.cake.items.bapteme.description') },
      { id: 'WP02', title: t('gallery.cake.items.communion.title'), image: '/Cakes/Personalized Cakes/REL01-CAKE-OCCASION-SPECIALE.jpg', description: t('gallery.cake.items.communion.description') },
      { id: 'WP03', title: t('gallery.cake.items.diplome.title'), image: '/Cakes/Personalized Cakes/GRA-02-CAKE-OCCASION-SPECIALE.jpg', description: t('gallery.cake.items.diplome.description') },
      { id: 'WP04', title: t('gallery.cake.items.anniversaire.title'), image: '/Cakes/Personalized Cakes/ENF-03-CAKE-OCCASION-SPECIALE.png', description: t('gallery.cake.items.anniversaire.description') },
      { id: 'WP05', title: t('gallery.cake.items.theme.title'), image: '/Cakes/Personalized Cakes/drip-cake-example-CAKE-OCCASION-SPECIALE.jpg', description: t('gallery.cake.items.theme.description') },
      { id: 'WP06', title: t('gallery.cake.items.evenement.title'), image: '/Cakes/Personalized Cakes/image-19.jpeg', description: t('gallery.cake.items.evenement.description') },
      { id: 'WP07', title: t('gallery.cake.items.bapteme.title'), image: '/Cakes/Personalized Cakes/image-21.jpeg', description: t('gallery.cake.items.bapteme.description') },
      { id: 'WP08', title: t('gallery.cake.items.communion.title'), image: '/Cakes/Personalized Cakes/image-26.jpeg', description: t('gallery.cake.items.communion.description') },
      { id: 'WP09', title: t('gallery.cake.items.diplome.title'), image: '/Cakes/Personalized Cakes/image-28.jpeg', description: t('gallery.cake.items.diplome.description') },
      { id: 'WP10', title: t('gallery.cake.items.anniversaire.title'), image: '/Cakes/Personalized Cakes/image-3-1.jpeg', description: t('gallery.cake.items.anniversaire.description') },
      { id: 'WP11', title: t('gallery.cake.items.theme.title'), image: '/Cakes/Personalized Cakes/image-31.jpeg', description: t('gallery.cake.items.theme.description') },
      { id: 'WP12', title: t('gallery.cake.items.evenement.title'), image: '/Cakes/Personalized Cakes/image-32.jpeg', description: t('gallery.cake.items.evenement.description') },
      { id: 'WP13', title: t('gallery.cake.items.bapteme.title'), image: '/Cakes/Personalized Cakes/image-34.jpeg', description: t('gallery.cake.items.bapteme.description') },
      { id: 'WP14', title: t('gallery.cake.items.communion.title'), image: '/Cakes/Personalized Cakes/image-38.jpeg', description: t('gallery.cake.items.communion.description') },
      { id: 'WP15', title: t('gallery.cake.items.diplome.title'), image: '/Cakes/Personalized Cakes/image-40.jpeg', description: t('gallery.cake.items.diplome.description') }
    ]
  };

  const tabs = [
    { id: 'wedding', label: t('gallery.cake.tabs.wedding') },
    { id: 'classic', label: t('gallery.cake.tabs.classic') },
    { id: 'custom', label: t('gallery.cake.tabs.custom') }
  ];

  return (
    <div className="max-w-7xl mx-auto">
      {/* Tab Navigation */}
      <div className="flex flex-col sm:flex-row gap-4 mb-12 justify-center">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-lg font-semibold text-lg transition-all duration-300 ${
              activeTab === tab.id
                ? 'bg-patisserie-primary text-white shadow-lg'
                : 'bg-white text-patisserie-dark border-2 border-patisserie-primary hover:bg-patisserie-light'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="space-y-8">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`transition-all duration-500 ${
              activeTab === tab.id ? 'block opacity-100' : 'hidden opacity-0'
            }`}
          >
            {/* Category Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-patisserie-dark mb-4">
                {tab.label}
              </h2>
              <p className="text-lg text-patisserie-secondary max-w-7xl mx-auto">
                {tab.id === 'wedding' && t('gallery.cake.descriptions.wedding')}
                {tab.id === 'classic' && t('gallery.cake.descriptions.classic')}
                {tab.id === 'custom' && t('gallery.cake.descriptions.custom')}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cakeData[tab.id as keyof typeof cakeData].map((cake) => (
                <div key={cake.id} className="group">
                  <div className="relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg bg-white">
                    <Image
                      src={cake.image}
                      alt={cake.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay with cake info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg mb-2">{cake.title}</h3>
                        <p className="text-sm opacity-90">{cake.description}</p>
                        <div className="mt-2 text-xs opacity-75">ID: {cake.id}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Cake title below image */}
                  <div className="mt-3 text-center">
                    <h3 className="font-medium text-patisserie-dark">{cake.title}</h3>
                    <p className="text-sm text-patisserie-secondary mt-1">{cake.id}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-16">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-7xl mx-auto">
          <div className="w-20 h-20 bg-patisserie-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Image
              src="/Logos/Patisserie-St-Martin-Logo.png"
              alt="Patisserie St. Martin"
              width={48}
              height={48}
              className="object-contain"
            />
          </div>
          <h3 className="text-2xl font-bold text-patisserie-dark mb-4">
            {t('gallery.cta.needCustomCake')}
          </h3>
          <p className="text-patisserie-secondary mb-6">
            {t('gallery.cta.needCustomCakeDesc')}
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-patisserie-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-patisserie-dark transition-colors"
          >
            {t('gallery.cta.orderCake')}
          </a>
        </div>
      </div>
    </div>
  );
}
