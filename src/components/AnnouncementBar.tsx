'use client';

import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

const AnnouncementBar = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const message = isEnglish 
    ? "YOUR NEW NEIGHBORHOOD DENTAL CLINIC!"
    : "VOTRE NOUVELLE CLINIQUE DENTAIRE DE QUARTIER !";

  return (
    <div className="bg-dental-primary text-white py-2">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm font-medium animate-fade-in">
          {message}
        </p>
      </div>
    </div>
  );
};

export default AnnouncementBar;
