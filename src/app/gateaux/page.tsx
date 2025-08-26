import { Metadata } from 'next';
import CakeGallery from '@/components/CakeGallery';

export const metadata: Metadata = {
  title: 'Nos Gâteaux | Patisserie St. Martin',
  description: 'Découvrez nos gâteaux de mariage, gâteaux classiques et gâteaux personnalisés. Créations artisanales uniques pour vos occasions spéciales.',
};

export default function GateauxPage() {
  return (
    <div className="min-h-screen bg-patisserie-accent">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-patisserie-dark mb-3 sm:mb-4">
            Nos Gâteaux
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-patisserie-secondary max-w-3xl mx-auto px-2">
            Créations artisanales uniques pour vos occasions spéciales
          </p>
        </div>

        {/* Cake Gallery Component */}
        <CakeGallery />
      </div>
    </div>
  );
}
