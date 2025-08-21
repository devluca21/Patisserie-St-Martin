import React from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  as?: 'button' | 'a';
} & React.ButtonHTMLAttributes<HTMLButtonElement> & React.AnchorHTMLAttributes<HTMLAnchorElement>;

const Button = React.forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', children, as = 'button', ...props }, ref) => {
    const Component = as === 'a' ? 'a' : 'button';
    
    const baseClasses = cn(
      'inline-flex items-center justify-center rounded-md font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-primary focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 touch-manipulation',
      {
        'bg-dental-primary text-white hover:bg-dental-dark active:bg-dental-dark': variant === 'primary',
        'bg-dental-secondary text-white hover:bg-dental-primary hover:text-white active:bg-dental-primary': variant === 'secondary',
        'border border-dental-primary text-dental-primary hover:bg-dental-primary hover:text-white active:bg-dental-primary': variant === 'outline',
        'hover:bg-dental-light text-dental-dark active:bg-dental-light': variant === 'ghost',
      },
      {
        'h-10 px-3 text-sm min-h-[40px]': size === 'sm',
        'h-11 px-4 py-2 min-h-[44px]': size === 'md',
        'h-12 px-8 text-lg min-h-[48px]': size === 'lg',
      },
      className
    );

    if (as === 'a') {
      return (
        <a
          className={baseClasses}
          ref={ref as React.Ref<HTMLAnchorElement>}
          {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      );
    }

    return (
      <button
        className={baseClasses}
        ref={ref as React.Ref<HTMLButtonElement>}
        {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export default Button;
