'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook } from 'lucide-react';
import { useTranslations } from '@/lib/useTranslations';

const Footer = () => {
  const { t, isEnglish } = useTranslations();

  const quickLinks = [
    { name: t('header.pastries'), href: isEnglish ? '/en/patisseries' : '/patisseries' },
    { name: t('header.cakes'), href: isEnglish ? '/en/gateaux' : '/gateaux' },
    { name: t('header.catering'), href: isEnglish ? '/en/traiteur' : '/traiteur' },
    { name: t('header.contact'), href: isEnglish ? '/en/contact' : '/contact' },
  ];

  return (
    <footer className="bg-patisserie-dark text-white w-full">
      {/* Main Footer Content */}
      <div className="py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-patisserie-accent">
                {t('footer.quickLinks')}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-white/80 hover:text-patisserie-accent transition-colors hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-patisserie-accent">
                {t('footer.contactUs')}
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Phone className="h-5 w-5 text-patisserie-accent flex-shrink-0" />
                  <a
                    href="tel:+15147226575"
                    className="text-white/80 hover:text-patisserie-accent transition-colors"
                  >
                    {t('common.phone')}
                  </a>
                </div>
                <div className="flex items-center justify-center md:justify-start space-x-3">
                  <Mail className="h-5 w-5 text-patisserie-accent flex-shrink-0" />
                  <a
                    href="mailto:pstm2495@gmail.com"
                    className="text-white/80 hover:text-patisserie-accent transition-colors"
                  >
                    {t('common.email')}
                  </a>
                </div>
              </div>
            </div>

            {/* Locations */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-patisserie-accent">
                {t('footer.ourLocations')}
              </h3>
              <div className="space-y-3">
                <div>
                  <h4 className="font-medium text-patisserie-accent">{t('footer.montreal')}</h4>
                  <a 
                    href="https://www.google.com/maps?ll=45.536772,-73.615645&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=268+Rue+Jean-Talon+E+Montr%C3%A9al,+QC+H2R+1S7+Canada"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-patisserie-accent transition-colors text-sm block"
                  >
                    {t('common.montrealAddress')}
                  </a>
                  <p className="text-white/80 text-sm">{t('common.montrealCity')}</p>
                </div>
                <div>
                  <h4 className="font-medium text-patisserie-accent">{t('footer.laval')}</h4>
                  <a 
                    href="https://maps.app.goo.gl/WFQRpD3Wgk1hRDCb9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/80 hover:text-patisserie-accent transition-colors text-sm block"
                  >
                    {t('common.lavalAddress')}
                  </a>
                  <p className="text-white/80 text-sm">{t('common.lavalCity')}</p>
                </div>
              </div>
            </div>

            {/* Social & Reviews */}
            <div className="text-center md:text-left">
              <h3 className="text-xl font-semibold mb-4 text-patisserie-accent">
                {isEnglish ? 'Connect With Us' : 'Connectez-vous'}
              </h3>
              
              {/* Social Media */}
              <div className="flex justify-center md:justify-start space-x-4 mb-4">
                <a
                  href="https://www.instagram.com/patisseriestmartin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-patisserie-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6" />
                </a>
                <a
                  href="https://www.facebook.com/PatisserieStMartin/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-patisserie-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6" />
                </a>
                <a
                  href="https://www.tiktok.com/discover/patisserie-st-martin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-patisserie-accent transition-colors"
                  aria-label="TikTok"
                >
                  <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </a>
              </div>

              {/* Google Reviews */}
              <div className="space-y-2">
                <h4 className="text-sm font-semibold text-patisserie-accent">
                  {isEnglish ? 'Leave a Review' : 'Laissez un Avis'}
                </h4>
                <div className="space-y-2">
                  <a
                    href="https://share.google/mfhYbB3FaaPzOuFBf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start space-x-2 text-white/80 hover:text-patisserie-accent transition-colors text-sm bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Laval</span>
                  </a>
                  <a
                    href="https://maps.app.goo.gl/WFQRpD3Wgk1hRDCb9"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start space-x-2 text-white/80 hover:text-patisserie-accent transition-colors text-sm bg-white/10 px-3 py-2 rounded-lg hover:bg-white/20"
                  >
                    <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                    </svg>
                    <span>Montréal</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-white/70 text-sm">
              © 2025 Patisserie St. Martin. {isEnglish ? 'All rights reserved.' : 'Tous droits réservés.'}
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
