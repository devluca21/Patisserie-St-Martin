import { Metadata } from 'next';
import { MapPin, Phone, Mail, Clock, Facebook } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Contact | Dr Georgette Elias Dental Clinic - Montreal',
  description: 'Contact us to make an appointment or for any questions about our dental services. Online appointment booking, dental emergencies.',
  keywords: [
    'contact dental clinic montreal',
    'dental appointment montreal',
    'dental emergency montreal',
    'dental clinic rue belanger',
    'metro d\'iberville dentist',
    'dental clinic phone montreal',
    'dental clinic address montreal',
    'dental appointment booking montreal',
    'dental clinic montreal contact',
    'dr georgette elias contact'
  ],
  openGraph: {
    title: 'Contact | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Contact us to make an appointment or for any questions about our dental services. Online appointment booking, dental emergencies.',
    url: 'https://www.dentistegeorgetteelias.com/en/contact',
    siteName: 'Dr Georgette Elias Dental Clinic',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact - Dr Georgette Elias Dental Clinic - Montreal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Dr Georgette Elias Dental Clinic - Montreal',
    description: 'Contact us to make an appointment or for any questions about our dental services.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://www.dentistegeorgetteelias.com/en/contact',
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
              Make an Appointment
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto px-4">
              We're here to take care of your smile. Contact us to make an appointment or for any questions about our dental services.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 pb-6 sm:pb-8">
                <h2 className="text-xl sm:text-2xl font-bold text-dental-dark mb-4">
                  Appointment Request
                </h2>
                <ContactForm />
              </div>

              {/* Emergency */}
              <div className="bg-dental-primary text-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold mb-4">
                  Dental Emergencies
                </h2>
                <p className="mb-4 text-sm sm:text-base">
                  In case of a dental emergency outside of business hours, don't hesitate to contact us. We'll do our best to accommodate you.
                </p>
                <a 
                  href="tel:+15147226575"
                  className="inline-flex items-center gap-2 bg-white text-dental-primary px-4 sm:px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  <Phone className="h-5 w-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-6 sm:space-y-8">
              {/* Office Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-xl sm:text-2xl font-bold text-dental-dark mb-4 sm:mb-6">
                  Contact Us
                </h2>
                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-dental-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-dark mb-1 text-sm sm:text-base">Address</h3>
                      <a 
                        href="https://maps.google.com/?q=2491+rue+Bélanger+Montreal+QC+H2G+1E6"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-dental-primary transition-colors text-sm sm:text-base"
                      >
                        2491 rue Bélanger, Montréal, QC H2G 1E6
                      </a>
                      <p className="text-xs sm:text-sm text-gray-500 mt-1">
                        Free parking • Metro access
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4">
                    <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-dental-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-dental-dark mb-1 text-sm sm:text-base">Phone</h3>
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
                      <h3 className="font-semibold text-dental-dark mb-1 text-sm sm:text-base">Email</h3>
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
                  Business Hours
                </h2>
                <div className="space-y-2 text-sm sm:text-base">
                  <p><span className="font-medium">Monday:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="font-medium">Tuesday:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="font-medium">Wednesday:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="font-medium">Thursday:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="font-medium">Friday:</span> 8:00 AM - 4:00 PM</p>
                  <p><span className="font-medium">Saturday:</span> Closed</p>
                  <p><span className="font-medium">Sunday:</span> Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
