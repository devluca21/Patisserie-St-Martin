'use client';

import { Instagram } from 'lucide-react';
import { useTranslations } from '@/lib/useTranslations';

export default function InstagramEmbed() {
  const { t } = useTranslations();

  return (
    <section className="pt-8 sm:pt-10 md:pt-14 lg:pt-32 pb-6 sm:pb-8 md:pb-10 lg:pb-16 bg-white w-full overflow-hidden">
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-full">
        {/* Header */}
        <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-16 w-full">
          <div className="flex items-center justify-center gap-2 sm:gap-3 md:gap-4 mb-2 sm:mb-3 md:mb-4 lg:mb-4">
            <Instagram className="h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 lg:h-8 lg:w-8 text-patisserie-primary" />
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-patisserie-dark">
              {t('instagramEmbed.title')}
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-patisserie-secondary max-w-3xl mx-auto px-2">
            {t('instagramEmbed.subtitle')}
          </p>
        </div>

        {/* Instagram Embed */}
        <div className="w-full max-w-full">
          <div className="bg-patisserie-light rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-5 md:p-8 lg:p-12 shadow-lg mx-1 sm:mx-3 md:mx-4 lg:mx-4 w-full max-w-full">
            <div className="aspect-[4/3] w-full bg-white rounded-lg sm:rounded-xl overflow-hidden shadow-inner border-2 sm:border-3 md:border-4 border-white">
              <iframe
                src="https://www.instagram.com/patisseriestmartin/embed"
                title="Patisserie St. Martin Instagram Feed"
                className="w-full h-full border-0"
                allowFullScreen
              />
            </div>
            
            {/* Fallback content if embed doesn't load */}
            <div className="text-center mt-3 sm:mt-4 md:mt-6 w-full">
              <p className="text-patisserie-secondary mb-2 sm:mb-3 md:mb-4 lg:mb-4 text-xs sm:text-sm md:text-base">
                {t('instagramEmbed.fallbackText')}
              </p>
              <a
                href="https://www.instagram.com/patisseriestmartin/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 sm:px-4 md:px-6 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all text-xs sm:text-sm md:text-base lg:text-base"
              >
                <Instagram className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                {t('instagramEmbed.followButton')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
