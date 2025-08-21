'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, Building2, Globe } from 'lucide-react';
import PhoneCTAButton from './ui/PhoneCTAButton';

const Footer = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  const quickLinks = isEnglish ? [
    { name: 'Services', href: '/en/services' as const },
    { name: 'Financing', href: '/en/financement' as const },
    { name: 'Team', href: '/en/equipe' as const },
    { name: 'Contact', href: '/en/contact' as const },
  ] : [
    { name: 'Services', href: '/services' as const },
    { name: 'Financement', href: '/financement' as const },
    { name: 'Équipe', href: '/equipe' as const },
    { name: 'Contact', href: '/contact' as const },
  ];

  const openingHours = isEnglish ? [
    'Monday: 8AM-5PM',
    'Tuesday: 8AM-5PM',
    'Wednesday: 8AM-5PM',
    'Thursday: 8AM-5PM',
    'Friday: 8AM-4PM',
    'Saturday: Closed',
    'Sunday: Closed',
  ] : [
    'Lundi: 8h-17h',
    'Mardi: 8h-17h',
    'Mercredi: 8h-17h',
    'Jeudi: 8h-17h',
    'Vendredi: 8h-16h',
    'Samedi: Fermé',
    'Dimanche: Fermé',
  ];

  const openingHoursTitle = isEnglish ? 'Business Hours' : 'Heures d\'ouverture';
  const quickLinksTitle = isEnglish ? 'Quick Links' : 'Liens rapides';
  const followUsTitle = isEnglish ? 'Follow Us' : 'Suivez-nous';
  const metroExit = isEnglish ? 'Metro D\'Iberville Exit' : 'Sortie Métro D\'Iberville';
  const copyright = isEnglish 
    ? '© 2024 Dr Georgette Elias Dental Clinic. All rights reserved.'
    : '© 2024 Clinique Dentaire Dr Georgette Elias. Tous droits réservés.';

  return (
    <footer className="bg-dental-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Logo and Contact */}
          <div className="space-y-4">
            <Link href={isEnglish ? "/en" : "/"} className="inline-block">
              <img
                src="/logo-full.svg"
                alt="Dr Georgette Elias Dental Clinic"
                className="h-16 w-auto sm:h-14 lg:h-20 filter brightness-0 invert hover:opacity-80 transition-opacity"
              />
            </Link>
            <div className="space-y-2">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 flex-shrink-0" />
                <div>
                  <a 
                    href="https://maps.app.goo.gl/bsWZYmVQcE3MMAbp9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm hover:text-dental-accent transition-colors"
                  >
                    2491 rue Bélanger, Montréal, QC H2G 1E6
                  </a>
                  <p className="text-xs text-gray-300">{metroExit}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 flex-shrink-0" />
                <a 
                  href={`tel:+15147226575`}
                  className="text-sm hover:text-dental-accent transition-colors"
                >
                  (514) 722-6575
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 flex-shrink-0" />
                <a 
                  href={`mailto:admin@dentistegeorgetteelias.com`}
                  className="text-sm hover:text-dental-accent transition-colors"
                >
                  admin@dentistegeorgetteelias.com
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div className="space-y-4">
            <h3 className="font-semibold text-dental-accent flex items-center gap-2 text-sm sm:text-base">
              <Clock className="h-4 w-4" />
              {openingHoursTitle}
            </h3>
            <div className="space-y-1 text-xs sm:text-sm">
              {openingHours.map((hour, index) => (
                <p key={index}>{hour}</p>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-dental-accent text-sm sm:text-base">
              {quickLinksTitle}
            </h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="block text-xs sm:text-sm hover:text-dental-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-accent focus-visible:ring-offset-2 rounded"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Media */}
          <div className="space-y-4">
            <h3 className="font-semibold text-dental-accent text-sm sm:text-base">
              {followUsTitle}
            </h3>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/cliniquedentairedrgeorgetteelias/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-dental-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-accent focus-visible:ring-offset-2 rounded p-2"
                aria-label="Facebook - Clinique Dentaire Dr Georgette Elias"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://maps.app.goo.gl/bsWZYmVQcE3MMAbp9"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-dental-accent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-accent focus-visible:ring-offset-2 rounded p-2"
                aria-label="Google Business Profile - Clinique Dentaire Dr Georgette Elias"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-dental-light mt-6 sm:mt-8 pt-6 sm:pt-8 text-center text-xs sm:text-sm text-gray-300">
          <p>{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
