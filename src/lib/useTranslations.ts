'use client';

import { usePathname } from 'next/navigation';
import { translations, Language } from './translations';

export function useTranslations() {
  const pathname = usePathname();
  const language: Language = pathname.startsWith('/en') ? 'en' : 'fr';
  
  const t = (key: string) => {
    const keys = key.split('.');
    let value: any = translations[language];
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        // Translation key not found - using fallback
        return key;
      }
    }
    
    return value;
  };
  
  return {
    t,
    language,
    isEnglish: language === 'en',
    isFrench: language === 'fr'
  };
}
