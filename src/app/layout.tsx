import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import CDCPBanner from '@/components/CDCPBanner';
import ScrollToTop from '@/components/ScrollToTop';

const inter = Inter({ subsets: ['latin'] });

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: '#733f2b',
};

export const metadata: Metadata = {
  metadataBase: new URL('https://www.dentistegeorgetteelias.com'),
  title: {
    default: 'Clinique Dentaire Dr Georgette Elias | Montréal',
    template: '%s | Clinique Dentaire Dr Georgette Elias'
  },
  description: 'Clinique dentaire moderne à Montréal. Soins dentaires complets, technologie de pointe, partenaire RCSD. Prise de rendez-vous en ligne.',
  keywords: [
    'dentiste montreal',
    'clinique dentaire montreal',
    'dr georgette elias',
    'soins dentaires',
    'implant dentaire montreal',
    'traitement canal montreal',
    'blanchiment dents montreal',
    'urgence dentaire montreal',
    'RCSD',
    'financement dentaire'
  ],
  authors: [{ name: 'Dr Georgette Elias' }],
  creator: 'Dr Georgette Elias',
  publisher: 'Clinique Dentaire Dr Georgette Elias',
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', sizes: 'any' }
    ],
    apple: '/favicon.svg',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Clinique Dentaire Dr Georgette Elias',
  },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    url: 'https://www.dentistegeorgetteelias.com',
    siteName: 'Clinique Dentaire Dr Georgette Elias',
    title: 'Clinique Dentaire Dr Georgette Elias | Montréal',
    description: 'Clinique dentaire moderne à Montréal. Soins dentaires complets, technologie de pointe, partenaire RCSD. Prise de rendez-vous en ligne.',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Clinique Dentaire Dr Georgette Elias - Montréal',
      },
      {
        url: '/logo-full.svg',
        width: 200,
        height: 66,
        alt: 'Logo Clinique Dentaire Dr Georgette Elias',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Clinique Dentaire Dr Georgette Elias | Montréal',
    description: 'Clinique dentaire moderne à Montréal. Soins dentaires complets, technologie de pointe, partenaire RCSD.',
    images: ['/og/default.jpg'],
    creator: '@cliniquedentairedrgeorgetteelias',
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
  verification: {
    google: 'your-google-verification-code', // Add your Google Search Console verification code
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en',
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <div className="min-h-screen flex flex-col">
          <AnnouncementBar />
          <CDCPBanner />
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
