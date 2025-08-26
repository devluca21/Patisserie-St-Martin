import { Metadata } from 'next';
import CateringServices from '@/components/CateringServices';

export const metadata: Metadata = {
  title: 'Services Traiteur | Patisserie St. Martin',
  description: 'Services traiteur professionnels avec menus complets : Boîtes à Lunch, Menu Chaud, Menu Composer et Menu à la Carte. Buffets, plateaux et menus personnalisés pour vos événements.',
};

export default function TraiteurPage() {
  return (
    <div className="min-h-screen bg-patisserie-accent">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-patisserie-dark mb-3 sm:mb-4">
            Services Traiteur
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-patisserie-secondary max-w-4xl mx-auto px-2">
            Découvrez nos menus traiteur complets : Boîtes à Lunch pratiques, Menu Chaud italien authentique, 
            Menu Composer pour événements, et Menu à la Carte en galerie. Service professionnel et ingrédients frais.
          </p>
        </div>

        {/* Catering Services Component */}
        <CateringServices />
      </div>
    </div>
  );
}
