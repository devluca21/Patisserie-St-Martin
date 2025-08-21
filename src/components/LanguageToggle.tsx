'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';

const LanguageToggle = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [currentLang, setCurrentLang] = useState<'fr' | 'en'>('fr');

  useEffect(() => {
    // Determine current language from pathname
    if (pathname.startsWith('/en')) {
      setCurrentLang('en');
    } else {
      setCurrentLang('fr');
    }
  }, [pathname]);

  const toggleLanguage = () => {
    const newLang = currentLang === 'fr' ? 'en' : 'fr';
    setCurrentLang(newLang);
    
    let newPath = pathname;
    
    if (newLang === 'en') {
      // Convert French path to English
      if (pathname === '/') {
        newPath = '/en';
      } else if (pathname === '/services') {
        newPath = '/en/services';
      } else if (pathname === '/equipe') {
        newPath = '/en/equipe';
      } else if (pathname === '/financement') {
        newPath = '/en/financement';
      } else if (pathname === '/contact') {
        newPath = '/en/contact';
      } else if (pathname === '/cdcp') {
        newPath = '/en/cdcp';
      } else if (pathname.startsWith('/')) {
        newPath = `/en${pathname}`;
      }
    } else {
      // Convert English path to French
      if (pathname === '/en') {
        newPath = '/';
      } else if (pathname === '/en/services') {
        newPath = '/services';
      } else if (pathname === '/en/equipe') {
        newPath = '/equipe';
      } else if (pathname === '/en/financement') {
        newPath = '/financement';
      } else if (pathname === '/en/contact') {
        newPath = '/contact';
      } else if (pathname === '/en/cdcp') {
        newPath = '/cdcp';
      } else if (pathname.startsWith('/en')) {
        newPath = pathname.replace('/en', '');
        if (newPath === '') newPath = '/';
      }
    }
    
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-dental-dark hover:text-dental-primary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-primary focus-visible:ring-offset-2 rounded border border-gray-200 hover:border-dental-primary"
      aria-label={`Switch to ${currentLang === 'fr' ? 'English' : 'Français'}`}
    >
      <Languages className="h-4 w-4" />
      <span className="hidden sm:inline">
        {currentLang === 'fr' ? 'EN' : 'FR'}
      </span>
    </button>
  );
};

export default LanguageToggle;
