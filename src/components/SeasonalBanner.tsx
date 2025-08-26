'use client';

import { Star, Instagram, Facebook } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from '@/lib/useTranslations';

export default function SeasonalBanner() {
  const { t } = useTranslations();
  
  return (
    <div className="bg-gradient-to-r from-patisserie-primary to-patisserie-dark text-white py-2 sm:py-2.5 md:py-3 lg:py-3.5 px-3 sm:px-4 md:px-5 lg:px-6 w-full overflow-hidden relative z-10">
      <div className="container mx-auto flex items-center justify-between gap-2 sm:gap-3 md:gap-4 lg:gap-4 w-full max-w-full">
        {/* Left side - Holiday message with Order Now button on desktop */}
        <div className="flex items-center gap-2 sm:gap-2.5 md:gap-3 lg:gap-3 text-center sm:text-left flex-1">
          <Star className="h-4 w-4 sm:h-4 md:h-5 md:w-5 lg:h-5 lg:w-5 text-white animate-pulse flex-shrink-0" />
          <span className="text-sm sm:text-base md:text-base lg:text-lg font-medium max-w-full leading-tight">
            <span className="sm:hidden">{t('seasonalBanner.holidaySpecialMobile')}</span>
            <span className="hidden sm:inline">
              {t('seasonalBanner.holidaySpecialDesktop')}{' '}
              <Link
                href="/contact#form"
                className="inline underline hover:no-underline transition-all whitespace-nowrap ml-2"
              >
                {t('seasonalBanner.orderNow')}
              </Link>
            </span>
          </span>
        </div>

        {/* Right side - Social media icons only */}
        <div className="flex items-center gap-3 sm:gap-4 md:gap-5 lg:gap-6 flex-shrink-0">
          {/* Order Now Button - Mobile only */}
          <Link
            href="/contact#form"
            className="text-sm sm:text-base md:text-base lg:text-lg font-semibold underline hover:no-underline transition-all whitespace-nowrap flex-shrink-0 md:hidden"
          >
            <span>{t('seasonalBanner.orderNow').replace(' →', '')}</span>
          </Link>

          {/* Social media icons - Hidden on mobile, shown on tablet+ */}
          <div className="hidden md:flex items-center space-x-3 sm:space-x-3 md:space-x-4 lg:space-x-4">
            <a
              href="https://www.instagram.com/patisseriestmartin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-patisserie-accent transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4 sm:h-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
            </a>
            <a
              href="https://www.facebook.com/PatisserieStMartin/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-patisserie-accent transition-colors"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4 sm:h-4 md:h-4 md:w-4 lg:h-5 lg:w-5" />
            </a>
            <a
              href="https://www.tiktok.com/discover/patisserie-st-martin"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-patisserie-accent transition-colors"
              aria-label="TikTok"
            >
              <svg className="h-4 w-4 sm:h-4 md:h-4 md:w-4 lg:h-5 lg:w-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
