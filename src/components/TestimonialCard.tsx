'use client';

import { Star } from 'lucide-react';
import { Card, CardContent } from './ui/Card';

interface TestimonialCardProps {
  testimonial: {
    name: string;
    text: string;
    rating: number;
    reviews?: string;
    timeAgo?: string;
  };
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial }) => {
  const { name, text, rating, reviews, timeAgo } = testimonial;
  return (
    <Card className="h-full">
      <CardContent className="p-4 sm:p-6">
        {/* Stars */}
        <div 
          className="flex gap-1 mb-3 sm:mb-4"
          role="img"
          aria-label={`${rating} out of 5 stars`}
        >
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                i < rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              }`}
              aria-hidden="true"
            />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <blockquote 
          className="text-gray-700 mb-3 sm:mb-4 italic text-xs sm:text-sm leading-relaxed"
          cite={`https://patisseriestmartin.com/reviews/${name.toLowerCase().replace(/\s+/g, '-')}`}
        >
          "{text}"
        </blockquote>
        
        {/* Author */}
        <footer>
          <cite className="font-medium text-patisserie-dark mb-1 text-sm sm:text-base not-italic">
            {name}
          </cite>
          {reviews && (
            <div className="text-xs text-gray-500 mb-1">
              {reviews}
            </div>
          )}
          {timeAgo && (
            <time className="text-xs text-gray-500" dateTime={timeAgo}>
              {timeAgo}
            </time>
          )}
        </footer>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
