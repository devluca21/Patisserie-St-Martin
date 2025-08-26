'use client';

import React, { useCallback, useEffect } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import Button from './Button';

interface CarouselProps {
  children: React.ReactNode[];
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  responsive?: Array<{
    breakpoint: number;
    settings: {
      slidesToShow: number;
      slidesToScroll: number;
    };
  }>;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  className,
  autoplay = false,
  autoplayDelay = 5000,
  slidesToShow = 1,
  slidesToScroll = 1,
  responsive = [],
}) => {
  const [currentSlidesToShow, setCurrentSlidesToShow] = React.useState(() => {
    // Initialize with the correct value based on current window size
    if (typeof window !== 'undefined') {
      const windowWidth = window.innerWidth;
      let initialSlidesToShow = slidesToShow;

      const sortedResponsive = [...responsive].sort((a, b) => b.breakpoint - a.breakpoint);
      
      for (const breakpoint of sortedResponsive) {
        if (windowWidth <= breakpoint.breakpoint) {
          initialSlidesToShow = breakpoint.settings.slidesToShow;
          break;
        }
      }

      return initialSlidesToShow;
    }
    return slidesToShow;
  });

  // Handle responsive breakpoints
  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      let newSlidesToShow = slidesToShow;

      // Sort responsive breakpoints by breakpoint value (descending) to ensure proper priority
      const sortedResponsive = [...responsive].sort((a, b) => b.breakpoint - a.breakpoint);
      
      for (const breakpoint of sortedResponsive) {
        if (windowWidth <= breakpoint.breakpoint) {
          newSlidesToShow = breakpoint.settings.slidesToShow;
          break;
        }
      }

      setCurrentSlidesToShow(newSlidesToShow);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [slidesToShow, responsive]);

  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true,
    skipSnaps: false,
    dragFree: false,
    containScroll: 'trimSnaps',
    slidesToScroll: slidesToScroll,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi || !autoplay) return;

    const autoplayInterval = setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayDelay);

    const onPointerDown = () => clearInterval(autoplayInterval);
    const onPointerUp = () => {
      clearInterval(autoplayInterval);
      setTimeout(() => {
        if (emblaApi) {
          const newInterval = setInterval(() => {
            emblaApi.scrollNext();
          }, autoplayDelay);
          
          // Store the interval so we can clear it later
          (emblaApi as any)._autoplayInterval = newInterval;
        }
      }, autoplayDelay);
    };

    emblaApi.on('pointerDown', onPointerDown);
    emblaApi.on('pointerUp', onPointerUp);

    return () => {
      clearInterval(autoplayInterval);
      emblaApi.off('pointerDown', onPointerDown);
      emblaApi.off('pointerUp', onPointerUp);
    };
  }, [emblaApi, autoplay, autoplayDelay]);

  return (
    <div className={cn('relative', className)}>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex w-full">
          {children.map((child, index) => (
            <div 
              key={index} 
              className={`min-w-0 flex-shrink-0 testimonial-slide ${
                currentSlidesToShow === 1 ? 'w-full' : ''
              }`}
              style={{ 
                flex: `0 0 ${100 / currentSlidesToShow}%`,
                maxWidth: `${100 / currentSlidesToShow}%`,
                width: `${100 / currentSlidesToShow}%`,
                minWidth: `${100 / currentSlidesToShow}%`
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>
      
      {children.length > 1 && (
        <>
          <Button
            variant="ghost"
            size="sm"
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            onClick={scrollPrev}
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white shadow-lg hover:shadow-xl transition-all duration-200 z-10"
            onClick={scrollNext}
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
        </>
      )}
    </div>
  );
};

export default Carousel;
