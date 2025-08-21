'use client';

import { usePathname } from 'next/navigation';
import TestimonialCard from './TestimonialCard';
import Carousel from './ui/Carousel';

const Testimonials = () => {
  const pathname = usePathname();
  const isEnglish = pathname.startsWith('/en');

  // Real testimonials from Google Reviews
  const testimonials = [
    {
      name: "Sandrine El-Khoury",
      text: "Équipe formidable avec des dentistes professionnels qui prennent le temps de répondre à toutes vos questions avant de commencer un traitement. Je recommande vivement!",
      rating: 5,
      reviews: "9 avis · 1 photo",
      timeAgo: "il y a un an"
    },
    {
      name: "Stefano Apostolakos",
      text: "Excellente équipe dentaire. Très attentionnés et professionnels!",
      rating: 5,
      reviews: "Guide local · 25 avis · 13 photos",
      timeAgo: "il y a 9 ans"
    },
    {
      name: "Taous Abderrahmani",
      text: "Une équipe formidable et un service exceptionnel. Désormais, ma petite fille ne craint plus le dentiste. Merci beaucoup à toute l'équipe.",
      rating: 5,
      reviews: "2 avis",
      timeAgo: "il y a 4 mois"
    },
    {
      name: "Ghazal Sari",
      text: "Je suis une patiente du docteure Elias depuis près de 5 ans. Je suis très satisfaite des services de la clinique et plus particulièrement du temps que docteure Elias alloue à ses patients pour bien saisir leurs besoins et inquiétudes et pour expliquer en détails les traitements requis.",
      rating: 5,
      reviews: "2 avis",
      timeAgo: "il y a 4 ans"
    },
    {
      name: "Annie Gnintedem",
      text: "Dr Elias est le médecin qu'il me fallait; rassurante, mais surtout professionnelle. Ça fait du bien de savoir qu'on peut compter sur vous! Mon traitement de canal super bien. Je recommande fortement. Essayez!!! vous ne serez pas déçus.",
      rating: 5,
      reviews: "13 avis",
      timeAgo: "il y a 5 ans"
    },
    {
      name: "Mathieu Poirier-Morency",
      text: "Magique",
      rating: 5,
      reviews: "3 avis · 2 photos",
      timeAgo: "il y a 6 ans"
    },
  ];

  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-dental-dark mb-4">
            {isEnglish ? 'Testimonials' : 'Témoignages'}
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            {isEnglish ? 'What our patients say' : 'Ce que disent nos patients'}
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
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
                breakpoint: 640, // sm breakpoint - mobile devices
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1,
                },
              },
            ]}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="px-1 sm:px-2">
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </Carousel>
          
          {/* Mobile indicator text */}
          <div className="text-center mt-4 sm:hidden">
            <p className="text-xs text-gray-500">
              {isEnglish ? 'Swipe to see more testimonials' : 'Balayez pour voir plus de témoignages'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
