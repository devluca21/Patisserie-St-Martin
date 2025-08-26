import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SeasonalBanner from '@/components/SeasonalBanner';
import ScrollToTop from '@/components/ScrollToTop';
import Image from 'next/image';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial']
});

export const metadata: Metadata = {
  title: {
    default: 'Patisserie St. Martin | Artisan Pastries & Cakes - Montréal',
    template: '%s | Patisserie St. Martin'
  },
  description: 'Découvrez nos délicieuses pâtisseries artisanales, gâteaux sur mesure et services traiteur. Patisserie St. Martin - Excellence et tradition depuis des générations.',
  icons: {
    icon: [
      { url: '/Logos/Patiserie-St-Martin-Featured-Image.png', type: 'image/png' },
      { url: '/Logos/Patiserie-St-Martin-Featured-Image.png', sizes: 'any', type: 'image/png' }
    ],
    shortcut: '/Logos/Patiserie-St-Martin-Featured-Image.png',
    apple: '/Logos/Patiserie-St-Martin-Featured-Image.png',
  },
  keywords: [
    'patisserie montreal',
    'gateaux montreal',
    'patisserie artisanale',
    'traiteur montreal',
    'desserts montreal',
    'patisserie st martin',
    'gateaux sur mesure',
    'pains artisanaux',
    'viennoiseries',
    'chocolat montreal',
    'patisserie artisanale montreal',
    'gateaux personnalises',
    'boulangerie montreal',
    'gateaux de mariage',
    'gateaux d\'anniversaire',
    'patisseries fraiches',
    'croissants montreal',
    'pain au chocolat',
    'chocolat artisanal',
    'desserts francais',
    'patisserie traditionnelle',
    'avis clients patisserie',
    'reviews patisserie montreal',
    'meilleure patisserie montreal'
  ],
  authors: [{ name: 'Patisserie St. Martin' }],
  creator: 'Patisserie St. Martin',
  publisher: 'Patisserie St. Martin',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://patisseriestmartin.com'),
  alternates: {
    canonical: 'https://patisseriestmartin.com',
    languages: {
      'fr-CA': 'https://patisseriestmartin.com',
      'en-CA': 'https://patisseriestmartin.com/en',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://patisseriestmartin.com',
    siteName: 'Patisserie St. Martin',
    title: 'Patisserie St. Martin | Artisan Pastries & Cakes - Montréal',
    description: 'Découvrez nos délicieuses pâtisseries artisanales, gâteaux sur mesure et services traiteur. Patisserie St. Martin - Excellence et tradition depuis des générations.',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Patisserie St. Martin - Artisan Pastries & Cakes - Montréal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Patisserie St. Martin | Artisan Pastries & Cakes - Montréal',
    description: 'Découvrez nos délicieuses pâtisseries artisanales, gâteaux sur mesure et services traiteur.',
    images: ['/og/default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang?: string };
}) {
  return (
    <html lang={params?.lang || 'fr'} className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover" />
      </head>
      <body className={inter.className}>
        <div className="sidebar-layout">
          {/* Left Sidebar - Hidden on mobile, shown on desktop */}
          <aside className="sidebar left-sidebar hidden lg:block">
          </aside>

          {/* Main Content */}
          <main className="main-content">
            <SeasonalBanner />
            <Header />
            {children}
            <Footer />
          </main>

          {/* Right Sidebar - Hidden on mobile, shown on desktop */}
          <aside className="sidebar right-sidebar hidden lg:block">
          </aside>
        </div>

        <ScrollToTop />
      </body>
    </html>
  );
}
