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
        <div className="flex gap-1 mb-3 sm:mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 sm:h-4 sm:w-4 ${
                i < rating 
                  ? 'text-yellow-400 fill-current' 
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        
        {/* Testimonial Text */}
        <blockquote className="text-gray-700 mb-3 sm:mb-4 italic text-xs sm:text-sm leading-relaxed">
          "{text}"
        </blockquote>
        
        {/* Author */}
        <div>
          <div className="font-medium text-dental-dark mb-1 text-sm sm:text-base">
            {name}
          </div>
          {reviews && (
            <div className="text-xs text-gray-500 mb-1">
              {reviews}
            </div>
          )}
          {timeAgo && (
            <div className="text-xs text-gray-500">
              {timeAgo}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
