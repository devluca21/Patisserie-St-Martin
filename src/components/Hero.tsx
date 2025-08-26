'use client';

import { useState, useEffect, useCallback, memo } from 'react';
import { Star, Phone, MapPin, Cake, UtensilsCrossed } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from '@/lib/useTranslations';

const Hero = () => {
  const { t } = useTranslations();
  const [showButtons, setShowButtons] = useState(false);
  const [currentCTASet, setCurrentCTASet] = useState(1);
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowButtons(true);
    }, 5000); // 5 seconds delay

    return () => clearTimeout(timer);
  }, []);

  // Autoplay carousel for mobile - slower and pausable
  useEffect(() => {
    if (isAutoplayPaused) return; // Don't run autoplay if paused

    const autoplayInterval = setInterval(() => {
      setCurrentCTASet((prev) => (prev === 3 ? 1 : prev + 1));
    }, 8000); // Change CTA every 8 seconds (slower)

    return () => clearInterval(autoplayInterval);
  }, [isAutoplayPaused]);

  const nextCTASet = useCallback(() => {
    setIsAutoplayPaused(true); // Pause autoplay when manually navigating
    setCurrentCTASet((prev) => (prev === 3 ? 1 : prev + 1));
  }, []);

  const prevCTASet = useCallback(() => {
    setIsAutoplayPaused(true); // Pause autoplay when manually navigating
    setCurrentCTASet((prev) => (prev === 1 ? 3 : prev - 1));
  }, []);

  const goToCTASet = useCallback((set: number) => {
    setIsAutoplayPaused(true); // Pause autoplay when manually selecting
    setCurrentCTASet(set);
  }, []);

  const getCurrentCTA = useCallback(() => {
    return t(`hero.ctaSets.set${currentCTASet}`);
  }, [currentCTASet, t]);

  const getLeftButtonIcon = useCallback(() => {
    switch (currentCTASet) {
      case 1:
        return <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" />;
      case 2:
        return <Cake className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" />;
      case 3:
        return <UtensilsCrossed className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" />;
      default:
        return <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" />;
    }
  }, [currentCTASet]);

  const getLeftButtonLink = useCallback(() => {
    switch (currentCTASet) {
      case 1:
        return "/contact";
      case 2:
        return "/gateaux";
      case 3:
        return "/traiteur";
      default:
        return "/contact";
    }
  }, [currentCTASet]);

  const getRightButtonLink = useCallback(() => {
    switch (currentCTASet) {
      case 1:
        return "/contact#maps";
      case 2:
        return "/gateaux";
      case 3:
        return "/contact";
      default:
        return "/contact#maps";
    }
  }, [currentCTASet]);

  return (
    <section className="relative min-h-[50vh] sm:min-h-[55vh] md:min-h-[65vh] lg:min-h-[80vh] flex items-center justify-center overflow-hidden w-full">
      {/* Background Video - Now visible on all screen sizes */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full transform-gpu">
          <iframe
            src="https://www.youtube.com/embed/y_BawhBgMhk?autoplay=1&mute=1&loop=1&playlist=y_BawhBgMhk&controls=0&showinfo=0&rel=0&modestbranding=1&playsinline=1&vq=hd1080&fs=0&iv_load_policy=3&cc_load_policy=0&color=white"
            title="Patisserie St. Martin - Artisan Pastries"
            className="w-full h-full object-cover scale-[2.2] sm:scale-[1.8] md:scale-[1.4] lg:scale-[1.2] origin-center transform-gpu will-change-transform"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="eager"
            style={{ imageRendering: 'high-quality' as any }}
          />
          {/* Video overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30"></div>
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-2 sm:px-4 md:px-6 lg:px-8 w-full max-w-full">
        {/* Hexagonal Order Button - Now visible on all screen sizes */}
        <div className={`relative mb-8 sm:mb-12 md:mb-16 transition-all duration-1000 ease-out ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="relative inline-block">
            {/* Hexagon background - Responsive sizing */}
            <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 relative">
              <div className="absolute inset-0 bg-patisserie-primary transform rotate-45 rounded-lg"></div>
              <div className="absolute inset-2 bg-patisserie-primary transform rotate-45 rounded-lg"></div>
            </div>
            
            {/* Content overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
              <span 
                key={`main-${currentCTASet}`}
                className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-bold mb-1 sm:mb-2 transition-all duration-300"
              >
                {getCurrentCTA().main}
              </span>
              <span 
                key={`sub-${currentCTASet}`}
                className="text-xs sm:text-sm opacity-90 transition-all duration-300"
              >
                {getCurrentCTA().subtext}
              </span>
            </div>
            
            {/* Clickable link */}
            <Link 
              href={getLeftButtonLink()} 
              className="absolute inset-0 block"
              aria-label="Main CTA"
            />
          </div>
        </div>

        {/* CTA Buttons - Responsive sizing for all screen sizes */}
        <div className={`flex flex-col sm:flex-row gap-2 sm:gap-3 md:gap-4 justify-center items-center mb-4 sm:mb-6 md:mb-8 lg:mb-8 w-full max-w-full px-2 transition-all duration-1000 ease-out delay-300 ${showButtons ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <Link
            key={`left-${currentCTASet}`}
            href={getLeftButtonLink()}
            className="inline-flex items-center justify-center gap-2 bg-patisserie-primary text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-4 lg:py-5 rounded-lg font-semibold hover:bg-patisserie-dark transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-lg w-full sm:w-auto min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]"
          >
            {getLeftButtonIcon()}
            {getCurrentCTA().leftButton}
          </Link>
          <Link
            key={`right-${currentCTASet}`}
            href={getRightButtonLink()}
            className="inline-flex items-center justify-center gap-2 border-2 border-white text-white px-6 sm:px-8 md:px-10 lg:px-12 py-3 sm:py-4 md:py-4 lg:py-5 rounded-lg font-semibold hover:bg-white hover:text-patisserie-dark transition-all duration-300 text-sm sm:text-base md:text-lg lg:text-lg w-full sm:w-auto min-h-[44px] sm:min-h-[48px] md:min-h-[52px] lg:min-h-[56px]"
          >
            <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-5 md:w-5 lg:h-5 lg:w-5" />
            {getCurrentCTA().rightButton}
          </Link>
        </div>
      </div>

      {/* Carousel Navigation Arrows - Desktop only */}
      <button 
        onClick={prevCTASet}
        className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-lg transition-all cursor-pointer z-20 hidden md:block"
        aria-label="Previous CTA set"
      >
        <svg className="w-5 h-5 sm:w-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button 
        onClick={nextCTASet}
        className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 sm:p-3 rounded-lg transition-all cursor-pointer z-20 hidden md:block"
        aria-label="Next CTA set"
      >
        <svg className="w-5 h-5 sm:w-6 sm:w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>

      {/* CTA Set Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 hidden md:flex">
        {[1, 2, 3].map((set) => (
          <button
            key={set}
            onClick={() => goToCTASet(set)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentCTASet === set 
                ? 'bg-white scale-110' 
                : 'bg-white bg-opacity-30 hover:bg-opacity-50'
            }`}
            aria-label={`Go to CTA set ${set}`}
          />
        ))}
      </div>
    </section>
  );
};

export default memo(Hero);
