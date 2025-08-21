'use client';

import Image from 'next/image';
import { MapPin, Calendar, Phone } from 'lucide-react';
import { usePathname } from 'next/navigation';
import Button from './ui/Button';
import PhoneCTAButton from './ui/PhoneCTAButton';
import Carousel from './ui/Carousel';

const Hero = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const clinicImages = [
    {
      src: '/slide-02-2.jpg',
      alt: isEnglish ? 'Our new clinic' : 'Notre nouvelle clinique',
    },
    {
      src: '/slide-01-1.jpg',
      alt: isEnglish ? 'Our new clinic' : 'Notre nouvelle clinique',
    },
    {
      src: '/slide-03-1.jpg',
      alt: isEnglish ? 'Our new clinic' : 'Notre nouvelle clinique',
    },
  ];

  return (
    <section className="relative bg-gradient-to-b from-dental-light to-white py-8 sm:py-12 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6 sm:space-y-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-dental-primary leading-tight">
                {isEnglish ? 'YOUR NEW NEIGHBORHOOD DENTAL CLINIC!' : 'VOTRE NOUVELLE CLINIQUE DENTAIRE DE QUARTIER !'}
              </h1>
              <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
                {isEnglish ? 'We\'re here to care for your smile.' : 'Nous sommes là pour s\'occuper de votre sourire.'}
              </p>
              <p className="text-base sm:text-lg text-gray-600">
                {isEnglish 
                  ? 'Welcome to our new location! Cutting-edge technology, gentle care, and healthy smiles for the whole family.'
                  : 'Bienvenue dans nos nouveaux locaux ! Technologie de pointe, soins tout en douceur et sourires en santé pour toute la famille.'
                }
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <PhoneCTAButton
                phone="5147226575"
                size="lg"
                className="flex-1 sm:flex-none"
              />
              <Button
                variant="outline"
                size="lg"
                className="flex-1 sm:flex-none flex items-center gap-2"
                as="a"
                href={isEnglish ? "/en/contact#appointment-form" : "/contact#appointment-form"}
              >
                <Calendar className="h-5 w-5" />
                {isEnglish ? 'Book Appointment' : 'Prendre rendez-vous'}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                className="flex-1 sm:flex-none flex items-center gap-2"
                as="a"
                href="https://maps.app.goo.gl/bsWZYmVQcE3MMAbp9"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="h-5 w-5" />
                {isEnglish ? 'Directions' : 'Itinéraire'}
              </Button>
            </div>

            {/* Clinic Features */}
            <div className="space-y-2 pt-4 border-t border-gray-200">
              <div className="flex items-center gap-2 text-dental-primary font-medium text-sm sm:text-base">
                <span className="w-2 h-2 bg-dental-primary rounded-full flex-shrink-0"></span>
                {isEnglish ? 'Cutting-edge technology, gentle care' : 'Technologie de pointe, soins tout en douceur'}
              </div>
              <div className="flex items-center gap-2 text-dental-primary font-medium text-sm sm:text-base">
                <span className="w-2 h-2 bg-dental-primary rounded-full flex-shrink-0"></span>
                {isEnglish ? 'Clinic adapted for reduced mobility' : 'Clinique adaptée pour mobilité réduite'}
              </div>
              <div className="flex items-center gap-2 text-dental-primary font-medium text-sm sm:text-base">
                <span className="w-2 h-2 bg-dental-primary rounded-full flex-shrink-0"></span>
                {isEnglish 
                  ? 'Proud partner of the Canadian Dental Care Plan (CDCP)!'
                  : 'Fière partenaire du Régime canadien de soins dentaires (RCSD) !'
                }
              </div>
            </div>
          </div>

          {/* Image Carousel */}
          <div className="relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative overflow-hidden rounded-lg shadow-2xl">
              <Carousel autoplay autoplayDelay={4000}>
                {clinicImages.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] sm:aspect-[3/2]">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index === 0}
                    />
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
