'use client';

import { usePathname } from 'next/navigation';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const CDCPBanner = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const message = isEnglish 
    ? "Proud partner of the Canadian Dental Care Plan (CDCP)!"
    : "Fière partenaire du Régime canadien de soins dentaires (RCSD) !";

  const learnMore = isEnglish ? "Learn more" : "En savoir plus";
  const linkHref = isEnglish ? "/en/financement" : "/financement";

  return (
    <div className="bg-dental-light text-dental-dark py-3 border-b border-dental-secondary">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-center gap-2 text-center">
          <span className="text-sm font-semibold">
            {message}
          </span>
          <Link
            href={linkHref}
            className="inline-flex items-center gap-1 text-sm font-medium hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-primary focus-visible:ring-offset-2 rounded"
          >
            {learnMore}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CDCPBanner;
