'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Facebook, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import PhoneCTAButton from './ui/PhoneCTAButton';
import Button from './ui/Button';
import LanguageToggle from './LanguageToggle';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navigation = [
    { name: 'Accueil', href: '/' },
    { name: 'Services', href: '/services' },
    { name: 'Financement', href: '/financement' },
    { name: 'Clinique', href: '/#clinic' },
    { name: 'Équipe', href: '/equipe' },
    { name: 'Contact', href: '/contact' },
  ];

  const englishNavigation = [
    { name: 'Home', href: '/en' },
    { name: 'Services', href: '/en/services' },
    { name: 'Financing', href: '/en/financement' },
    { name: 'Clinic', href: '/en/#clinic' },
    { name: 'Team', href: '/en/equipe' },
    { name: 'Contact', href: '/en/contact' },
  ];

  const isEnglish = pathname.startsWith('/en');
  const currentNavigation = isEnglish ? englishNavigation : navigation;

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo-full.svg"
              alt="Dr Georgette Elias Dental Clinic"
              className="h-12 w-auto sm:h-14 lg:h-16"
              onError={(e) => {
                console.error('Logo failed to load:', e);
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
                const fallback = target.nextElementSibling as HTMLElement;
                if (fallback) fallback.style.display = 'block';
              }}
            />
            {/* Fallback text logo */}
            <div className="hidden text-dental-primary font-bold text-lg sm:text-xl lg:text-2xl">
              <div>CLINIQUE DENTAIRE</div>
              <div>DR GEORGETTE ELIAS</div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {currentNavigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-dental-dark hover:text-dental-primary transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-primary focus-visible:ring-offset-2 rounded text-sm xl:text-base"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right side controls */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <LanguageToggle />
            <a
              href="https://www.facebook.com/cliniquedentairedrgeorgetteelias/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex p-2 text-dental-primary hover:text-dental-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-primary focus-visible:ring-offset-2 rounded"
              aria-label="Facebook - Clinique Dentaire Dr Georgette Elias"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <PhoneCTAButton
              phone="5147226575"
              showNumber={false}
              size="sm"
              className="hidden sm:flex"
            />
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-4 space-y-1 bg-white border-t border-gray-100">
              {currentNavigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-3 text-dental-dark hover:text-dental-primary hover:bg-dental-light transition-colors font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-primary focus-visible:ring-offset-2 rounded text-base"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {/* Mobile contact info */}
              <div className="px-3 py-3 border-t border-gray-100 mt-2">
                <div className="flex items-center gap-2 text-dental-primary font-medium mb-2">
                  <Phone className="h-4 w-4" />
                  <span className="text-sm">(514) 722-6575</span>
                </div>
                <a
                  href="https://www.facebook.com/cliniquedentairedrgeorgetteelias/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-dental-primary hover:text-dental-dark transition-colors text-sm"
                >
                  <Facebook className="h-4 w-4" />
                  <span>Facebook</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
