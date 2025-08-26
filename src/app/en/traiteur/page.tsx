import { Metadata } from 'next';
import CateringServices from '@/components/CateringServices';

export const metadata: Metadata = {
  title: 'Catering Services | Patisserie St. Martin',
  description: 'Professional catering services with complete menus: Lunch Boxes, Hot Menu, Composer Menu and À la Carte Menu. Buffets, platters and custom menus for your events.',
};

export default function CateringPage() {
  return (
    <div className="min-h-screen bg-patisserie-accent">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-patisserie-dark mb-3 sm:mb-4">
            Catering Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-patisserie-secondary max-w-4xl mx-auto px-2">
            Discover our complete catering menus: practical Lunch Boxes, authentic Italian Hot Menu, 
            Composer Menu for events, and À la Carte Menu in gallery. Professional service and fresh ingredients.
          </p>
        </div>

        {/* Catering Services Component */}
        <CateringServices />
      </div>
    </div>
  );
}
