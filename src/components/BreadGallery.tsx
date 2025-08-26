'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useTranslations } from '@/lib/useTranslations';

export default function BreadGallery() {
  const [activeTab, setActiveTab] = useState('viennoiseries');
  const { t, isEnglish } = useTranslations();

  // Bread and viennoiserie data organized by category
  const breadData = {
    viennoiseries: [
      { id: 'VI01', title: t('gallery.bread.items.croissants.title'), image: '/Pastries/image-16.jpeg', description: t('gallery.bread.items.croissants.description') },
      { id: 'VI02', title: t('gallery.bread.items.painChocolat.title'), image: '/Pastries/image-10.jpeg', description: t('gallery.bread.items.painChocolat.description') },
      { id: 'VI03', title: t('gallery.bread.items.chaussonsPommes.title'), image: '/Pastries/image-18.jpeg', description: t('gallery.bread.items.chaussonsPommes.description') },
      { id: 'VI04', title: t('gallery.bread.items.painsLait.title'), image: '/Pastries/5-3.png', description: t('gallery.bread.items.painsLait.description') },
      { id: 'VI05', title: t('gallery.bread.items.painRaisins.title'), image: '/Pastries/4-3.png', description: t('gallery.bread.items.painRaisins.description') },
      { id: 'VI06', title: t('gallery.bread.items.chouquettes.title'), image: '/Pastries/6-3.png', description: t('gallery.bread.items.chouquettes.description') }
    ],
    boulangerie: [
      { id: 'BO01', title: t('gallery.bread.items.painCampagne.title'), image: '/Pastries/image-30.jpeg', description: t('gallery.bread.items.painCampagne.description') },
      { id: 'BO02', title: t('gallery.bread.items.baguette.title'), image: '/Pastries/image-16.jpeg', description: t('gallery.bread.items.baguette.description') },
      { id: 'BO03', title: t('gallery.bread.items.painComplet.title'), image: '/Pastries/4-3.png', description: t('gallery.bread.items.painComplet.description') },
      { id: 'BO04', title: t('gallery.bread.items.painSeigle.title'), image: '/Pastries/6-4.png', description: t('gallery.bread.items.painSeigle.description') },
      { id: 'BO05', title: t('gallery.bread.items.painNoix.title'), image: '/Pastries/8-3.png', description: t('gallery.bread.items.painNoix.description') },
      { id: 'BO06', title: t('gallery.bread.items.painOlives.title'), image: '/Pastries/11-2.png', description: t('gallery.bread.items.painOlives.description') }
    ],
    specialites: [
      { id: 'SP01', title: t('gallery.bread.items.fougasse.title'), image: '/Pastries/Untitled-500-x-500-mm.png', description: t('gallery.bread.items.fougasse.description') },
      { id: 'SP02', title: t('gallery.bread.items.painFigues.title'), image: '/Pastries/9-3.png', description: t('gallery.bread.items.painFigues.description') },
      { id: 'SP03', title: t('gallery.bread.items.painCereales.title'), image: '/Pastries/10-3.png', description: t('gallery.bread.items.painCereales.description') },
      { id: 'SP04', title: t('gallery.bread.items.painLevain.title'), image: '/Pastries/12-2.png', description: t('gallery.bread.items.painLevain.description') },
      { id: 'SP05', title: t('gallery.bread.items.painMie.title'), image: '/Pastries/13-3.png', description: t('gallery.bread.items.painMie.description') },
      { id: 'SP06', title: t('gallery.bread.items.painFruitsSecs.title'), image: '/Pastries/14-2.png', description: t('gallery.bread.items.painFruitsSecs.description') }
    ]
  };

  const tabs = [
    { id: 'viennoiseries', label: t('gallery.bread.tabs.viennoiseries') },
    { id: 'boulangerie', label: t('gallery.bread.tabs.boulangerie') },
    { id: 'specialites', label: t('gallery.bread.tabs.specialites') }
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
              <p className="text-lg text-patisserie-secondary max-w-2xl mx-auto">
                {tab.id === 'viennoiseries' && t('gallery.bread.descriptions.viennoiseries')}
                {tab.id === 'boulangerie' && t('gallery.bread.descriptions.boulangerie')}
                {tab.id === 'specialites' && t('gallery.bread.descriptions.specialites')}
              </p>
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {breadData[tab.id as keyof typeof breadData].map((item) => (
                <div key={item.id} className="group">
                  <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg bg-white">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    
                    {/* Overlay with item info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                        <p className="text-sm opacity-90">{item.description}</p>
                        <div className="mt-2 text-xs opacity-75">ID: {item.id}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Contact CTA */}
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
            {t('gallery.cta.dailyFreshnessDesc')}
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
