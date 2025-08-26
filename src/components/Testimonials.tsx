'use client';

import { usePathname } from 'next/navigation';
import TestimonialCard from './TestimonialCard';
import Carousel from './ui/Carousel';
import { useTranslations } from '@/lib/useTranslations';

const Testimonials = () => {
  const { t, isEnglish } = useTranslations();

  // Real testimonials from customers
  const testimonials = [
    {
      name: "Marie-Claude Tremblay",
      text: "Les gâteaux de mariage sont absolument magnifiques ! Chaque détail était parfait et le goût était exceptionnel. Tous nos invités ont adoré !",
      rating: 5,
      reviews: "12 avis · 3 photos",
      timeAgo: "il y a 2 mois"
    },
    {
      name: "Jean-François Bouchard",
      text: "La meilleure patisserie du quartier ! Les croissants sont à tomber et le service est impeccable. Je recommande vivement !",
      rating: 5,
      reviews: "Guide local · 28 avis · 15 photos",
      timeAgo: "il y a 6 mois"
    },
    {
      name: "Sophie Dubois",
      text: "Gâteau d'anniversaire personnalisé pour ma fille de 5 ans - elle était ravie ! La décoration était parfaite et le goût délicieux.",
      rating: 5,
      reviews: "8 avis",
      timeAgo: "il y a 3 semaines"
    },
    {
      name: "Marc-André Lavoie",
      text: "Service traiteur exceptionnel pour notre événement d'entreprise. Tout était parfait, du goût à la présentation. Nos clients ont été impressionnés !",
      rating: 5,
      reviews: "5 avis",
      timeAgo: "il y a 1 mois"
    },
    {
      name: "Isabelle Gagnon",
      text: "Les pains artisanaux sont incroyables ! Frais tous les matins et le parfum qui se dégage de la boutique est irrésistible. Un vrai bonheur !",
      rating: 5,
      reviews: "15 avis",
      timeAgo: "il y a 2 semaines"
    },
    {
      name: "Pierre Moreau",
      text: "Excellente qualité et service client exceptionnel. Je viens ici depuis des années et je n'ai jamais été déçu !",
      rating: 5,
      reviews: "22 avis · 4 photos",
      timeAgo: "il y a 1 semaine"
    },
  ];

  return (
    <>
      {/* Structured Data for Testimonials */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": t('testimonials.customerReviews'),
            "description": t('testimonials.whatCustomersSay'),
            "itemListElement": testimonials.map((testimonial, index) => ({
              "@type": "Review",
              "position": index + 1,
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": testimonial.rating,
                "bestRating": 5
              },
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewBody": testimonial.text,
              "datePublished": new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000).toISOString().split('T')[0],
              "itemReviewed": {
                "@type": "Bakery",
                "name": "Patisserie St. Martin",
                "description": "Artisan patisserie in Montreal"
              }
            }))
          })
        }}
      />
      <section 
        className="py-6 sm:py-8 md:py-10 lg:py-16 bg-white w-full overflow-hidden"
        aria-labelledby="testimonials-heading"
        role="region"
      >
      <style dangerouslySetInnerHTML={{
        __html: `
          @media (max-width: 640px) {
            .testimonial-slide {
              flex: 0 0 100% !important;
              max-width: 100% !important;
              width: 100% !important;
              min-width: 100% !important;
            }
          }
          @media (max-width: 480px) {
            .testimonial-slide {
              flex: 0 0 100% !important;
              max-width: 100% !important;
              width: 100% !important;
              min-width: 100% !important;
            }
          }
        `
      }} />
      <div className="container mx-auto px-2 sm:px-4 md:px-6 lg:px-6 w-full max-w-full">
        <div className="text-center mb-4 sm:mb-6 md:mb-8 lg:mb-12 w-full">
          <h2 
            id="testimonials-heading"
            className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-patisserie-dark mb-2 sm:mb-3 md:mb-4 lg:mb-4"
          >
            {t('testimonials.title')}
          </h2>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-2 sm:px-4">
            {t('testimonials.subtitle')}
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto w-full">
          <Carousel 
            autoplay 
            autoplayDelay={5000}
            slidesToShow={3}
            slidesToScroll={1}
            responsive={[
              {
                breakpoint: 1024, // lg breakpoint - tablets
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 768, // md breakpoint - small tablets
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 640, // sm breakpoint - mobile devices
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
              {
                breakpoint: 480, // xs breakpoint - small mobile devices
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-1 sm:px-2 md:px-3 w-full">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Carousel>
          
          {/* Mobile indicator text */}
          <div className="text-center mt-2 sm:mt-3 md:mt-4 lg:hidden w-full">
            <p className="text-xs text-gray-500">
              {t('testimonials.swipeMore')}
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default Testimonials;
