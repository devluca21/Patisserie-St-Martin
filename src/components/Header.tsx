'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone, Languages, Instagram, Facebook } from 'lucide-react';
import Image from 'next/image';
import Button from './ui/Button';
import { useTranslations } from '@/lib/useTranslations';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  const { t, isEnglish } = useTranslations();

  const navigation = [
    { name: t('header.catering'), href: isEnglish ? '/en/traiteur' : '/traiteur', description: t('header.cateringDesc') },
    { name: t('header.cakes'), href: isEnglish ? '/en/gateaux' : '/gateaux', description: t('header.cakesDesc') },
    { name: t('header.breadsPastries'), href: isEnglish ? '/en/boulangerie' : '/boulangerie', description: t('header.breadsDesc') },
    { name: t('header.pastries'), href: isEnglish ? '/en/patisseries' : '/patisseries', description: t('header.pastriesDesc') },
    { name: t('header.contact'), href: isEnglish ? '/en/contact' : '/contact', description: t('header.contactDesc') },
  ];

  const toggleLanguage = () => {
    const newLang = isEnglish ? 'fr' : 'en';
    
    let newPath = pathname;
    
    if (newLang === 'en') {
      // Convert French path to English
      if (pathname === '/') {
        newPath = '/en';
      } else if (pathname === '/patisseries') {
        newPath = '/en/patisseries';
      } else if (pathname === '/gateaux') {
        newPath = '/en/gateaux';
      } else if (pathname === '/traiteur') {
        newPath = '/en/traiteur';
      } else if (pathname === '/contact') {
        newPath = '/en/contact';
      } else if (pathname.startsWith('/')) {
        newPath = `/en${pathname}`;
      }
    } else {
      // Convert English path to French
      if (pathname === '/en') {
        newPath = '/';
      } else if (pathname === '/en/patisseries') {
        newPath = '/patisseries';
      } else if (pathname === '/en/gateaux') {
        newPath = '/gateaux';
      } else if (pathname === '/en/traiteur') {
        newPath = '/traiteur';
      } else if (pathname === '/en/contact') {
        newPath = '/contact';
      } else if (pathname.startsWith('/en')) {
        newPath = pathname.replace('/en', '');
        if (newPath === '') newPath = '/';
      }
    }
    
    window.location.href = newPath;
  };

  return (
    <header className="bg-white shadow-sm border-b border-patisserie-light sticky top-0 z-[60] w-full overflow-hidden">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8 w-full max-w-full">
        <div className="flex items-center justify-between h-20 sm:h-22 lg:h-24 w-full">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link href={isEnglish ? '/en' : '/'} className="flex items-center">
              <Image
                src="/Logos/Patisserie-St-Martin-Logo.png"
                alt="Patisserie St. Martin"
                width={120}
                height={120}
                className="h-16 sm:h-20 md:h-24 lg:h-28 object-contain"
                priority
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 lg:space-x-8">
            {navigation.map((item) => (
              <div key={item.name} className="relative group">
                <Link
                  href={item.href}
                  className="text-patisserie-dark hover:text-patisserie-primary transition-colors font-medium"
                >
                  {item.name}
                </Link>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-2 bg-white rounded-lg shadow-lg border border-patisserie-light opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                  <p className="text-xs text-patisserie-secondary">{item.description}</p>
                </div>
              </div>
            ))}
          </nav>

          {/* Right side - Language toggle, Order button, phone, and mobile menu */}
          <div className="flex items-center space-x-2 sm:space-x-3 lg:space-x-4 flex-shrink-0">
            {/* Language Toggle - Hidden on mobile, shown on tablet+ */}
            <button
              onClick={toggleLanguage}
              className="hidden sm:flex items-center gap-2 px-2 sm:px-3 py-2 text-sm font-medium text-patisserie-dark hover:text-patisserie-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patisserie-primary focus-visible:ring-offset-2 rounded border border-gray-200 hover:border-patisserie-primary"
              aria-label={isEnglish ? t('header.switchToFrench') : t('header.switchToEnglish')}
            >
              <Languages className="h-4 w-4" />
              <span className="hidden md:inline">
                {isEnglish ? 'FR' : 'EN'}
              </span>
            </button>

            {/* Phone */}
            <a
              href="tel:+15147226575"
              className="hidden sm:flex items-center gap-2 text-patisserie-secondary hover:text-patisserie-primary transition-colors"
            >
              <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
              <span className="hidden md:inline text-sm lg:text-base">(514) 722-6575</span>
            </a>

            {/* Order Online Button */}
            <Button
              as="a"
              href={isEnglish ? '/en/contact#form' : '/contact#form'}
              className="bg-patisserie-primary text-white hover:bg-patisserie-dark transition-colors text-sm sm:text-base lg:text-base px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-3 flex-shrink-0"
            >
              {t('header.orderOnline')}
            </Button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2.5 text-patisserie-dark hover:text-patisserie-primary transition-colors flex-shrink-0"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden w-full max-w-full">
            <div className="px-3 pt-3 pb-4 space-y-2 bg-white border-t border-patisserie-light w-full">
              {/* Language Toggle for Mobile */}
              <div className="flex items-center justify-center pb-3 border-b border-patisserie-light w-full">
                <button
                  onClick={toggleLanguage}
                  className="flex items-center gap-2 px-4 py-2.5 text-base font-medium text-patisserie-dark hover:text-patisserie-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patisserie-primary focus-visible:ring-offset-2 rounded border border-gray-200 hover:border-patisserie-primary"
                  aria-label={isEnglish ? t('header.switchToFrench') : t('header.switchToEnglish')}
                >
                  <Languages className="h-5 w-5" />
                  <span>{isEnglish ? t('header.switchToFrench') : t('header.switchToEnglish')}</span>
                </button>
              </div>

              {/* Navigation Links */}
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-base font-medium text-patisserie-dark hover:text-patisserie-primary hover:bg-patisserie-light rounded-md transition-colors w-full"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <div className="font-medium">{item.name}</div>
                  <div className="text-sm text-patisserie-secondary">{item.description}</div>
                </Link>
              ))}
              
              {/* Mobile phone link */}
              <div className="pt-3 border-t border-patisserie-light w-full">
                <div className="flex items-center justify-center w-full">
                  <a
                    href="tel:+15147226575"
                    className="flex items-center gap-2 text-patisserie-secondary hover:text-patisserie-primary transition-colors text-base"
                  >
                    <Phone className="h-5 w-5" />
                    <span>(514) 722-6575</span>
                  </a>
                </div>
              </div>

              {/* Mobile social media links */}
              <div className="pt-3 border-t border-patisserie-light w-full">
                <div className="flex items-center justify-center space-x-6 w-full">
                  <a
                    href="https://www.instagram.com/patisseriestmartin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-patisserie-secondary hover:text-patisserie-primary transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.facebook.com/PatisserieStMartin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-patisserie-secondary hover:text-patisserie-primary transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook className="h-6 w-6" />
                  </a>
                  <a
                    href="https://www.tiktok.com/discover/patisserie-st-martin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-patisserie-secondary hover:text-patisserie-primary transition-colors"
                    aria-label="TikTok"
                  >
                    <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
