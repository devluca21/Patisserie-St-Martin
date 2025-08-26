import React from 'react';
import { Phone } from 'lucide-react';
import { cn } from '@/lib/utils';
import { generatePhoneLink, formatPhoneNumber } from '@/lib/utils';

interface PhoneCTAButtonProps {
  phone: string;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
  showNumber?: boolean;
  showIcon?: boolean;
  size?: 'sm' | 'md' | 'lg';
}

const PhoneCTAButton: React.FC<PhoneCTAButtonProps> = ({
  phone,
  className,
  variant = 'primary',
  showNumber = true,
  showIcon = true,
  size = 'md',
}) => {
  return (
    <a
      href={generatePhoneLink(phone)}
      className={cn(
        'inline-flex items-center justify-center gap-2 rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-patisserie-primary focus-visible:ring-offset-2 hover:scale-105 active:scale-95 touch-manipulation',
        {
          'bg-patisserie-primary text-white hover:bg-patisserie-dark active:bg-patisserie-dark': variant === 'primary',
          'bg-patisserie-secondary text-white hover:bg-patisserie-primary hover:text-white active:bg-patisserie-primary': variant === 'secondary',
          'border border-patisserie-primary text-patisserie-primary hover:bg-patisserie-primary hover:text-white active:bg-patisserie-primary': variant === 'outline',
        },
        {
          'h-10 px-3 text-sm min-h-[40px]': size === 'sm',
          'h-11 px-4 py-2 min-h-[44px]': size === 'md',
          'h-12 px-8 text-lg min-h-[48px]': size === 'lg',
        },
        className
      )}
      aria-label={`Call ${formatPhoneNumber(phone)}`}
    >
      {showIcon && (
        <Phone className={cn(
          'flex-shrink-0',
          {
            'h-4 w-4': size === 'sm',
            'h-5 w-5': size === 'md',
            'h-6 w-6': size === 'lg',
          }
        )} />
      )}
      {showNumber && (
        <span className="whitespace-nowrap">
          {formatPhoneNumber(phone)}
        </span>
      )}
    </a>
  );
};

export default PhoneCTAButton;
