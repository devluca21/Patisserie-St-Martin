import { Metadata } from 'next';
import Image from 'next/image';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';
import ContactForm from '@/components/ContactForm';
import JsonLD from '@/components/JsonLD';

export const metadata: Metadata = {
  title: 'Contact | Patisserie St. Martin - Montreal',
  description: 'Contact us to place an order or for any questions about our artisan pastries and custom cakes. Online ordering, special orders.',
  keywords: [
    'contact patisserie montreal',
    'patisserie order montreal',
    'custom cake order montreal',
    'patisserie rue belanger',
    'metro d\'iberville patisserie',
    'patisserie phone montreal',
    'patisserie address montreal',
    'patisserie order booking montreal',
    'patisserie montreal contact',
    'patisserie st martin contact'
  ],
  openGraph: {
    title: 'Contact | Patisserie St. Martin - Montreal',
    description: 'Contact us to place an order or for any questions about our artisan pastries and custom cakes. Online ordering, special orders.',
    url: 'https://patisseriestmartin.com/en/contact',
    siteName: 'Patisserie St. Martin',
    locale: 'en_CA',
    type: 'website',
    images: [
      {
        url: '/og/default.jpg',
        width: 1200,
        height: 630,
        alt: 'Contact - Patisserie St. Martin - Montreal',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Patisserie St. Martin - Montreal',
    description: 'Contact us to place an order or for any questions about our artisan pastries and custom cakes.',
    images: ['/og/default.jpg'],
  },
  alternates: {
    canonical: 'https://patisseriestmartin.com/en/contact',
    languages: {
      'fr-CA': 'https://patisseriestmartin.com/contact',
      'en-CA': 'https://patisseriestmartin.com/en/contact',
    },
  },
};

export default function ContactPage() {
  return (
    <>
      <JsonLD />
      <div className="min-h-screen bg-gradient-to-b from-patisserie-light to-white">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 py-8 sm:py-12 lg:py-16">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-patisserie-dark mb-3 sm:mb-4 lg:mb-6">
              Place an Order
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-2 sm:px-4">
              We're here to create moments of happiness with our artisan pastries. Contact us to place an order or for any questions about our specialties.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">
            {/* Contact Form */}
            <div className="space-y-4 sm:space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-patisserie-dark mb-4 sm:mb-6">
                  Order Request
                </h2>
                <ContactForm />
              </div>

              {/* Special Orders */}
              <div className="bg-patisserie-primary text-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-3 sm:mb-4">
                  Special Orders
                </h2>
                <p className="mb-4 sm:mb-6 text-sm sm:text-base">
                  For custom cakes, large orders, or special events, don't hesitate to contact us. We'll work with you to create exactly what you envision.
                </p>
                <a 
                  href="tel:+15147226575"
                  className="inline-flex items-center gap-2 bg-white text-patisserie-primary px-4 sm:px-6 py-2 sm:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm sm:text-base"
                >
                  <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                  Call Now
                </a>
              </div>
            </div>

            {/* Contact Information */}
            <div className="space-y-4 sm:space-y-6 lg:space-y-8">
              {/* Office Info */}
              <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 lg:p-8">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-bold text-patisserie-dark mb-4 sm:mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Contact Methods */}
                  <div className="grid grid-cols-1 gap-3 sm:gap-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-patisserie-dark text-sm sm:text-base">Phone</p>
                        <a 
                          href="tel:+15147226575"
                          className="text-gray-600 hover:text-patisserie-primary transition-colors text-xs sm:text-sm"
                        >
                          (514) 722-6575
                        </a>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-patisserie-dark text-sm sm:text-base">Email</p>
                        <a 
                          href="mailto:pstm2495@gmail.com"
                          className="text-gray-600 hover:text-patisserie-primary transition-colors text-xs sm:text-sm"
                        >
                          pstm2495@gmail.com
                        </a>
                      </div>
                    </div>

                                      <div className="flex items-center gap-2 sm:gap-3">
                    <Instagram className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-patisserie-dark text-sm sm:text-base">Instagram</p>
                      <a 
                        href="https://www.instagram.com/patisseriestmartin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-patisserie-primary transition-colors text-xs sm:text-sm"
                      >
                        @patisseriestmartin
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <Facebook className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-patisserie-dark text-sm sm:text-base">Facebook</p>
                      <a 
                        href="https://www.facebook.com/patisseriestmartin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-patisserie-primary transition-colors text-xs sm:text-sm"
                      >
                        Patisserie St. Martin
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 sm:gap-3">
                    <MessageCircle className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium text-patisserie-dark text-sm sm:text-base">TikTok</p>
                      <a 
                        href="https://www.tiktok.com/@patisseriestmartin/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-600 hover:text-patisserie-primary transition-colors text-xs sm:text-sm"
                      >
                        @patisseriestmartin
                      </a>
                    </div>
                  </div>

                    <div className="flex items-center gap-2 sm:gap-3">
                      <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary flex-shrink-0" />
                      <div>
                        <p className="font-medium text-patisserie-dark text-sm sm:text-base">Hours</p>
                        <p className="text-gray-600 text-xs sm:text-sm">8:00 AM - 8:00 PM</p>
                      </div>
                    </div>
                  </div>

                  {/* Locations */}
                  <div className="border-t border-patisserie-accent pt-4 sm:pt-6">
                    <h3 className="font-semibold text-patisserie-dark mb-3 sm:mb-4 text-base sm:text-lg">Our Locations</h3>
                    
                    <div className="space-y-3 sm:space-y-4">
                      {/* Montreal Location */}
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-patisserie-dark mb-1 text-sm sm:text-base">Montreal</h4>
                          <a 
                            href="https://www.google.com/maps?ll=45.536772,-73.615645&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=268+Rue+Jean-Talon+E+Montr%C3%A9al,+QC+H2R+1S7+Canada"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-patisserie-primary transition-colors text-xs sm:text-sm"
                          >
                            268 Rue Jean-Talon E, Montreal, QC H2R 1S7
                          </a>
                          <p className="text-xs text-gray-500 mt-1">
                            Metro access • Parking available
                          </p>
                        </div>
                      </div>

                      {/* Laval Location */}
                      <div className="flex items-start gap-2 sm:gap-3">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-patisserie-primary mt-1 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-patisserie-dark mb-1 text-sm sm:text-base">Laval</h4>
                          <a 
                            href="https://www.google.com/maps?ll=45.599584,-73.684667&z=10&t=m&hl=en-US&gl=US&mapclient=embed&q=2495+Boul+Saint-Martin+Est+Laval,+QC+H7E+4X6+Canada"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-patisserie-primary transition-colors text-xs sm:text-sm"
                          >
                            2495 Boul Saint-Martin Est, Laval, QC H7E 4X6
                          </a>
                          <p className="text-xs text-gray-500 mt-1">
                            Free parking • Highway access
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Team Section */}
                  <div className="border-t border-patisserie-accent pt-4 sm:pt-6">
                    <div className="text-center">
                                          <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 mx-auto mb-3 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src="/Team - Store/WhatsApp-Image-2025-07-07-at-16.06.14_1cb50c57.jpg"
                        alt="Patisserie St. Martin Team"
                        width={224}
                        height={224}
                        className="w-full h-full object-cover"
                        priority={false}
                      />
                    </div>
                      <p className="text-gray-600 text-xs sm:text-sm">
                        Our passionate team of pastry chefs and bakers dedicated to creating 
                        artisanal delights since 1985.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Maps Section */}
      <div id="maps" className="bg-patisserie-light py-8 sm:py-12 lg:py-16">
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
          {/* Maps Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-patisserie-dark mb-3 sm:mb-4">
              Our Locations
            </h2>
            <p className="text-base sm:text-lg text-patisserie-secondary max-w-2xl mx-auto">
              Visit us at one of our two locations
            </p>
          </div>

          {/* Maps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 max-w-7xl mx-auto">
            {/* Montreal Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-patisserie-light">
                <h3 className="text-lg sm:text-xl font-bold text-patisserie-dark mb-2">Montreal</h3>
                <p className="text-patisserie-secondary text-sm sm:text-base">268 Rue Jean-Talon E, Montreal, QC H2R 1S7</p>
              </div>
              <div className="relative h-64 sm:h-72 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.1234567890123!2d-73.615645!3d45.536772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDMyJzEyLjQiTiA3M8KwMzYnNTYuMyJX!5e0!3m2!1sen!2sca!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Patisserie St. Martin - Montreal"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>

            {/* Laval Map */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4 sm:p-6 border-b border-patisserie-light">
                <h3 className="text-lg sm:text-xl font-bold text-patisserie-dark mb-2">Laval</h3>
                <p className="text-patisserie-secondary text-sm sm:text-base">2495 Boul Saint-Martin Est, Laval, QC H7E 4X6</p>
              </div>
              <div className="relative h-64 sm:h-72 lg:h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.1234567890123!2d-73.684667!3d45.599584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDM1JzU4LjUiTiA3M8KwNDEnMDQuOCJX!5e0!3m2!1sen!2sca!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Patisserie St. Martin - Laval"
                  className="absolute inset-0"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
