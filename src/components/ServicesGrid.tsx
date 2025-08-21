'use client';

import { useRouter, usePathname } from 'next/navigation';
import ServiceCard from './ServiceCard';

const ServicesGrid = () => {
  const router = useRouter();
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const services = [
    'rootCanal',
    'preventiveDentistry',
    'cosmeticDentistry',
    'wisdomTeethExtraction',
    'teethWhitening',
    'periodontics',
    'veneers',
    'bruxism',
    'crownsAndBridges',
    'dentures',
    'implants',
    'emergencies'
  ];

  const handleServiceClick = (serviceKey: string) => {
    // Navigate to services page in the correct language
    const servicesPath = isEnglish ? '/en/services' : '/services';
    router.push(servicesPath);
  };

  return (
    <section className="py-12 sm:py-16 bg-dental-light">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-dental-dark mb-4">
            {isEnglish ? 'Our Services' : 'Nos Services'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {isEnglish 
              ? 'State-of-the-art dental care — now in your neighborhood'
              : 'Des soins dentaires à la fine pointe — maintenant dans votre quartier'
            }
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {services.map((service, index) => (
            <ServiceCard
              key={service}
              serviceKey={service}
              number={index + 1}
              onClick={() => handleServiceClick(service)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesGrid;
