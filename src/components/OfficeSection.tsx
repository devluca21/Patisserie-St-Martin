'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Clock, Phone, Mail, Coffee, Car, Star } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { useTranslations } from '@/lib/useTranslations';

const PatisserieLocation = () => {
  const { t, isEnglish } = useTranslations();

  return (
    <section id="location" className="py-16 bg-patisserie-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-patisserie-dark mb-4">
            {t('officeSection.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('officeSection.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Patisserie Images Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <Image
                src="/Pastries/patisserie-1.jpg"
                alt="Patisserie interior view 1"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/Pastries/patisserie-2.jpg"
                alt="Patisserie interior view 2"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/Cakes/cake-display-1.jpg"
                alt="Cake display case"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/Pastries/patisserie-3.jpg"
                alt="Patisserie interior view 3"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
            </div>
            <div className="space-y-3">
              <Image
                src="/Pastries/patisserie-4.jpg"
                alt="Patisserie interior view 4"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/Cakes/cake-display-2.jpg"
                alt="Pastry display"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/Pastries/patisserie-5.jpg"
                alt="Patisserie interior view 5"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/Pastries/patisserie-6.jpg"
                alt="Patisserie interior view 6"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
            </div>
          </div>

          {/* Location Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-patisserie-dark flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-patisserie-primary" />
                  {t('officeSection.addressContact')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {/* Address Section */}
                  <div>
                    <a 
                      href="https://maps.google.com/?q=2491+rue+Bélanger+Montreal+QC+H2G+1E6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-patisserie-primary transition-colors block"
                    >
                      2491 rue Bélanger, Montreal, QC H2G 1E6
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      {t('officeSection.metroInfo')}
                    </p>
                  </div>
                  
                  {/* Contact Section */}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-patisserie-primary" />
                        <a 
                          href="tel:+15147226575" 
                          className="text-patisserie-primary hover:text-patisserie-dark transition-colors"
                        >
                          (514) 722-6575
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-patisserie-primary" />
                        <a 
                          href="mailto:pstm2495@gmail.com"
                          className="text-gray-600 hover:text-patisserie-primary transition-colors"
                        >
                          pstm2495@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-patisserie-dark flex items-center gap-2">
                  <Clock className="h-5 w-5 text-patisserie-primary" />
                  {t('officeSection.openingHours')}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{t('officeSection.monday')}</span>
                    <span>7h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('officeSection.tuesday')}</span>
                    <span>7h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('officeSection.wednesday')}</span>
                    <span>7h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('officeSection.thursday')}</span>
                    <span>7h00 - 19h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('officeSection.friday')}</span>
                    <span>7h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('officeSection.saturday')}</span>
                    <span>8h00 - 18h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{t('officeSection.sunday')}</span>
                    <span>8h00 - 17h00</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>


          
      </div>
    </section>
  );
};

export default PatisserieLocation;
