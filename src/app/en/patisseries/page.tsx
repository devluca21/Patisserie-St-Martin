import { Metadata } from 'next';
import PastryGallery from '@/components/PastryGallery';

export const metadata: Metadata = {
  title: 'Our Pastries | Patisserie St. Martin',
  description: 'Discover our delicious artisan pastries, viennoiseries and fresh breads prepared daily.',
};

export default function PastriesPage() {
  return (
    <div className="min-h-screen bg-patisserie-accent">
      <div className="container mx-auto px-3 sm:px-4 md:px-6 py-6 sm:py-8 lg:py-12">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-patisserie-dark mb-3 sm:mb-4">
            Our Pastries
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-patisserie-secondary max-w-3xl mx-auto px-2">
            Discover our delicious artisan pastries, viennoiseries and fresh breads
          </p>
        </div>

        {/* Pastry Gallery Component */}
        <PastryGallery />
      </div>
    </div>
  );
}
