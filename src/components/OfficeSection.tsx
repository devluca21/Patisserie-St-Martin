'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { MapPin, Clock, Phone, Mail, Building2, Car, Accessibility } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';

const OfficeSection = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  return (
    <section id="clinic" className="py-16 bg-dental-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-dental-dark mb-4">
            {isEnglish ? 'Our Clinic' : 'Notre clinique'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {isEnglish 
              ? 'A modern and welcoming clinic in the heart of Montreal, offering quality dental care in a comfortable environment.'
              : 'Une clinique moderne et accueillante au cœur de Montréal, offrant des soins dentaires de qualité dans un environnement confortable.'
            }
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Office Images Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <Image
                src="/clinic/1.png"
                alt="Dental office view 1"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/clinic/2.png"
                alt="Dental office view 2"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/clinic/3.png"
                alt="Dental office view 3"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/clinic/4.png"
                alt="Dental office view 4"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
            </div>
            <div className="space-y-3">
              <Image
                src="/clinic/5.png"
                alt="Dental office view 5"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/clinic/6.png"
                alt="Dental office view 6"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/clinic/9.png"
                alt="Dental office view 9"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
              <Image
                src="/clinic/10.png"
                alt="Dental office view 10"
                width={200}
                height={150}
                className="rounded-lg shadow-lg object-cover w-full h-32"
              />
            </div>
          </div>

          {/* Office Information */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-dental-dark flex items-center gap-2">
                  <MapPin className="h-5 w-5 text-dental-primary" />
                  {isEnglish ? 'Address & Contact' : 'Adresse & Contact'}
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
                      className="text-gray-600 hover:text-dental-primary transition-colors block"
                    >
                      2491 rue Bélanger, Montreal, QC H2G 1E6
                    </a>
                    <p className="text-sm text-gray-500 mt-2">
                      {isEnglish ? 'D\'Iberville Metro Exit • Free parking • Metro access' : 'D\'Iberville Metro Exit • Free parking • Metro access'}
                    </p>
                  </div>
                  
                  {/* Contact Section */}
                  <div className="pt-2 border-t border-gray-200">
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Phone className="h-4 w-4 text-dental-primary" />
                        <a 
                          href="tel:+15147226575" 
                          className="text-dental-primary hover:text-dental-dark transition-colors"
                        >
                          (514) 722-6575
                        </a>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-4 w-4 text-dental-primary" />
                        <a 
                          href="mailto:info@dentistegeorgetteelias.com"
                          className="text-gray-600 hover:text-dental-primary transition-colors"
                        >
                          info@dentistegeorgetteelias.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl text-dental-dark flex items-center gap-2">
                  <Clock className="h-5 w-5 text-dental-primary" />
                  {isEnglish ? 'Opening Hours' : 'Heures d\'ouverture'}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-gray-600">
                  <div className="flex justify-between">
                    <span>{isEnglish ? 'Monday' : 'Lundi'}</span>
                    <span>8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isEnglish ? 'Tuesday' : 'Mardi'}</span>
                    <span>8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isEnglish ? 'Wednesday' : 'Mercredi'}</span>
                    <span>8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isEnglish ? 'Thursday' : 'Jeudi'}</span>
                    <span>8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isEnglish ? 'Friday' : 'Vendredi'}</span>
                    <span>8h00 - 17h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isEnglish ? 'Saturday' : 'Samedi'}</span>
                    <span>{isEnglish ? 'By appointment' : 'Sur rendez-vous'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>{isEnglish ? 'Sunday' : 'Dimanche'}</span>
                    <span>{isEnglish ? 'Closed' : 'Fermé'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Office Features */}
        <div className="mt-16">
          <h3 className="text-2xl font-bold text-dental-dark text-center mb-8">
            {isEnglish ? 'Why choose our clinic?' : 'Pourquoi choisir notre clinique ?'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-dental-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building2 className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-dental-dark mb-2">
                  {isEnglish ? 'Modern equipment' : 'Équipement moderne'}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isEnglish 
                    ? 'Cutting-edge technology for precise and comfortable care'
                    : 'Technologie de pointe pour des soins précis et confortables'
                  }
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-dental-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Car className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-dental-dark mb-2">
                  {isEnglish ? 'Free parking' : 'Stationnement gratuit'}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isEnglish 
                    ? 'Easy access with free parking for our patients'
                    : 'Accès facile avec stationnement gratuit pour nos patients'
                  }
                </p>
              </div>
            </div>
            <div className="text-center">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-16 h-16 bg-dental-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Accessibility className="h-8 w-8 text-white" />
                </div>
                <h4 className="font-semibold text-dental-dark mb-2">
                  {isEnglish ? 'Accessible' : 'Accessible'}
                </h4>
                <p className="text-gray-600 text-sm">
                  {isEnglish 
                    ? 'Fully accessible clinic for people with reduced mobility'
                    : 'Clinique entièrement accessible aux personnes à mobilité réduite'
                  }
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfficeSection;
