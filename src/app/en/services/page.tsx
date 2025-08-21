'use client';

import Image from 'next/image';
import JsonLD from '@/components/JsonLD';
import { useState } from 'react';

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState('rootCanal');

  const services = [
    {
      id: 'rootCanal',
      title: 'Root Canal Treatment, Endodontics',
      description: 'Root canal treatment (endodontics) is necessary when the pulp inside the tooth becomes irritated or infected. This can be caused by deep decay, a large filling, gum disease, or trauma. The treatment involves removing bacteria from the pulp, cleaning and shaping the canal, then filling and sealing the tooth. Most treatments can be completed in a single dental session.',
      images: ['/Dollarphotoclub_516592191.jpg']
    },
    {
      id: 'preventiveDentistry',
      title: 'Preventive Dentistry',
      description: 'Preventive dentistry is the foundation of good oral health. It includes routine exams, professional cleanings, digital X-rays, and personalized hygiene advice. Our goal is to prevent dental problems before they occur, allowing you to keep your natural teeth for life.',
      images: ['/Dollarphotoclub_464694391.jpg']
    },
    {
      id: 'cosmeticDentistry',
      title: 'Cosmetic Dentistry',
      description: 'Transform your smile with our cosmetic dentistry services. We offer professional whitening, porcelain veneers, smile makeovers, and other treatments to improve the appearance of your teeth. Each treatment is customized to meet your aesthetic goals.',
      images: ['/Dollarphotoclub_441182651.jpg']
    },
    {
      id: 'wisdomTeethExtraction',
      title: 'Wisdom Teeth Extraction',
      description: 'Wisdom teeth extraction is often necessary to prevent alignment problems and infections. Our dentists use advanced techniques for safe and comfortable extractions. We offer sedation options for your comfort during the procedure.',
      images: ['/Newtechnology.jpg']
    },
    {
      id: 'teethWhitening',
      title: 'Teeth Whitening',
      description: 'Get a dazzling smile with our professional whitening treatments. We use professional-grade whitening products that are more effective and safer than over-the-counter products. Treatment can be done in-office or at home according to your preferences.',
      images: ['/Dollarphotoclub_518975341.jpg']
    },
    {
      id: 'periodontics',
      title: 'Gingivitis and Periodontitis Treatment',
      description: 'Gum health is essential to overall oral health. We treat gingivitis and periodontitis with non-surgical and surgical procedures depending on the severity of the disease. Our treatments aim to stop disease progression and restore gum health.',
      images: ['/Dollarphotoclub_482452451.jpg']
    },
    {
      id: 'veneers',
      title: 'Veneers (Composite, Porcelain)',
      description: 'Veneers are thin shells of porcelain or composite that are bonded to the front surface of teeth to improve their appearance. They can correct the color, shape, size, and alignment of teeth. Porcelain veneers are more durable and stain-resistant than composite veneers.',
      images: ['/Dollarphotoclub_614113411-2.jpg']
    },
    {
      id: 'bruxism',
      title: 'Bruxism',
      description: 'Bruxism (teeth grinding) can cause significant damage to teeth and facial pain. We offer personalized solutions, including custom night guards to protect your teeth during sleep. We also treat the underlying causes of bruxism.',
      images: ['/MG_06931.jpg']
    },
    {
      id: 'crownsAndBridges',
      title: 'Crowns and Bridges',
      description: 'Crowns and bridges are durable restorations that can restore the function and appearance of your teeth. Crowns completely cover a damaged tooth, while bridges replace one or more missing teeth. We use the highest quality materials for natural results.',
      images: ['/Dollarphotoclub_479095661.jpg']
    },
    {
      id: 'dentures',
      title: 'Complete and Partial Removable Dentures',
      description: 'Our removable dentures offer a comfortable and aesthetic solution for replacing missing teeth. We create custom dentures that fit perfectly in your mouth and improve your ability to eat and speak. We offer acrylic and metal options according to your needs.',
      images: []
    },
    {
      id: 'implants',
      title: 'Implant with Crown',
      description: 'Dental implants are the most permanent and natural solution for replacing missing teeth. An implant is a titanium screw that is placed in the jawbone, then a crown is attached to the implant. Implants offer function and appearance identical to natural teeth.',
      images: []
    }
  ];

  const activeService = services.find(service => service.id === activeTab);

  return (
    <>
      <JsonLD />
      <div className="min-h-screen bg-gradient-to-b from-dental-light to-white">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-dental-dark mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our complete range of professional dental services
            </p>
          </div>

          {/* Services Tabs Layout */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Left Column - Service Tabs */}
              <div className="bg-gray-50 p-6">
                <h2 className="text-xl font-bold text-dental-dark mb-6">Available Services</h2>
                <div className="space-y-2">
                  {services.map((service) => (
                    <button
                      key={service.id}
                      onClick={() => setActiveTab(service.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors hover:bg-gray-200 ${
                        activeTab === service.id 
                          ? 'bg-dental-primary text-white' 
                          : 'text-gray-700'
                      }`}
                    >
                      {service.title}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column - Service Content */}
              <div className="lg:col-span-2 p-8">
                {activeService && (
                  <div>
                    <h2 className="text-3xl font-bold text-dental-dark mb-6">
                      {activeService.title}
                    </h2>
                    <div className="prose max-w-none">
                      <p className="text-gray-600 text-lg leading-relaxed mb-6">
                        {activeService.description}
                      </p>
                    </div>
                    
                    {/* Service Images */}
                    {activeService.images && activeService.images.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-xl font-semibold text-dental-dark mb-4">Illustrations</h3>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                          {activeService.images.map((image, imageIndex) => (
                            <div key={imageIndex} className="relative aspect-square rounded-lg overflow-hidden">
                              <Image
                                src={image}
                                alt={`${activeService.title} - step ${imageIndex + 1}`}
                                fill
                                className="object-cover"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-dental-dark mb-4">
              Ready to make an appointment?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us to discuss your dental needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+15147226575"
                className="inline-flex items-center justify-center gap-2 bg-dental-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-dental-dark transition-colors"
              >
                Call Now
              </a>
              <a
                href="/en/contact"
                className="inline-flex items-center justify-center gap-2 border-2 border-dental-primary text-dental-primary px-8 py-3 rounded-lg font-semibold hover:bg-dental-primary hover:text-white transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
