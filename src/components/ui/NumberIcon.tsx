import React from 'react';
import { cn } from '@/lib/utils';

interface NumberIconProps {
  number: number;
  icon: React.ReactNode;
  className?: string;
  onClick?: () => void;
  isClickable?: boolean;
}

const NumberIcon: React.FC<NumberIconProps> = ({
  number,
  icon,
  className,
  onClick,
  isClickable = false,
}) => {
  const Component = isClickable ? 'button' : 'div';

  return (
    <Component
      className={cn(
        'relative inline-flex items-center justify-center',
        isClickable && 'cursor-pointer transition-transform hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-dental-primary focus-visible:ring-offset-2',
        className
      )}
      onClick={onClick}
      {...(isClickable && { type: 'button' })}
    >
      <div className="relative">
        {icon}
        <span className="absolute -top-2 -right-2 inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-dental-secondary rounded-full">
          {number}
        </span>
      </div>
    </Component>
  );
};

export default NumberIcon;
