import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Contact | Clinique Dentaire Dr Georgette Elias - Montréal',
  description: 'Contactez-nous pour prendre rendez-vous ou pour toute question concernant nos services dentaires. Prise de rendez-vous en ligne, urgences dentaires.',
  keywords: [
    'contact clinique dentaire montreal',
    'rendez-vous dentaire montreal',
    'urgence dentaire montreal',
    'clinique dentaire rue belanger',
    'metro d\'iberville dentiste',
    'telephone clinique dentaire montreal',
    'adresse clinique dentaire montreal',
    'prise rendez-vous dentaire montreal',
    'clinique dentaire montreal contact',
    'dr georgette elias contact'
  ],
  openGraph: {
    title: 'Contact | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Contactez-nous pour prendre rendez-vous ou pour toute question concernant nos services dentaires. Prise de rendez-vous en ligne, urgences dentaires.',
    url: 'https://www.dentistegeorgetteelias.com/contact',
    siteName: 'Clinique Dentaire Dr Georgette Elias',
    locale: 'fr_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact - Clinique Dentaire Dr Georgette Elias - Montréal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Clinique Dentaire Dr Georgette Elias - Montréal',
    description: 'Contactez-nous pour prendre rendez-vous ou pour toute question concernant nos services dentaires.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/contact',
    languages: {
      'fr-CA': 'https://www.dentistegeorgetteelias.com/contact',
      'en-CA': 'https://www.dentistegeorgetteelias.com/en/contact',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLD />
      <div className="min-h-screen bg-gradient-to-b from-dental-light to-white">
        <div className="container mx-auto px-4 sm:px-6 py-12 sm:py-16">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-dental-dark mb-4 sm:mb-6">
              Prendre rendez-vous
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              Nous sommes là pour s'occuper de votre sourire. Contactez-nous pour prendre rendez-vous ou pour toute question concernant nos services dentaires.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 pb-6 sm:pb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-dental-dark mb-4">
                  Demande de rendez-vous
                </h2>
                <ContactForm />
              </div>

              {/* Emergency */}
              <div className="bg-dental-primary text-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Urgences dentaires
                </h2>
                <p className="mb-4 text-sm sm:text-base">
                  En cas d'urgence dentaire en dehors des heures d'ouverture, n'hésitez pas à nous contacter. Nous ferons de notre mieux pour vous accommoder.
                </p>
                <a 
                  href="tel:+15147226575"
                  className="inline-flex items-center gap-2 bg-white text-dental-primary px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  <Phone className="h-5 w-5" />
                  Appeler maintenant
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Office Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-dental-dark mb-4 sm:mb-6">
                  Nous joindre
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-dental-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-dark mb-1 text-sm sm:text-base">Adresse</h3>
                      <a 
                        href="https://maps.google.com/?q=2491+rue+Bélanger+Montreal+QC+H2G+1E6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-dental-primary transition-colors text-sm sm:text-base"
                      >
                        2491 rue Bélanger, Montréal, QC H2G 1E6
                      </a>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Stationnement gratuit • Accès métro
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-dental-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-dark mb-1 text-sm sm:text-base">Téléphone</h3>
                      <a 
                        href="tel:+15147226575"
                        className="text-gray-600 hover:text-dental-primary transition-colors text-sm sm:text-base"
                      >
                        (514) 722-6575
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-dental-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-dark mb-1 text-sm sm:text-base">Courriel</h3>
                      <a 
                        href="mailto:info@dentistegeorgetteelias.com"
                        className="text-gray-600 hover:text-dental-primary transition-colors text-sm sm:text-base"
                      >
                        info@dentistegeorgetteelias.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <Facebook className="h-5 w-5 sm:h-6 sm:w-6 text-dental-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-dark mb-1 text-sm sm:text-base">Facebook</h3>
                      <a 
                        href="https://www.facebook.com/cliniquedentairedrgeorgetteelias/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-dental-primary transition-colors text-sm sm:text-base"
                      >
                        @cliniquedentairedrgeorgetteelias
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-dental-dark mb-4 sm:mb-6 flex items-center gap-2">
                  <Clock className="h-5 w-5 sm:h-6 sm:w-6 text-dental-primary" />
                  Heures d'ouverture
                </h2>
                <div className="space-y-2 text-sm sm:text-base">
                  <p><span className="font-medium">Lundi:</span> 8h00 - 17h00</p>
                  <p><span className="font-medium">Mardi:</span> 8h00 - 17h00</p>
                  <p><span className="font-medium">Mercredi:</span> 8h00 - 17h00</p>
                  <p><span className="font-medium">Jeudi:</span> 8h00 - 17h00</p>
                  <p><span className="font-medium">Vendredi:</span> 8h00 - 16h00</p>
                  <p><span className="font-medium">Samedi:</span> Fermé</p>
                  <p><span className="font-medium">Dimanche:</span> Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
