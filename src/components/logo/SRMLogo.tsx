import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

const SRMLogo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'default',
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-14',
    lg: 'h-20',
  };

  const textColor = variant === 'white' ? 'text-white' : 'text-srm-blue';

  return (
    <div
      className={`flex justify-center items-center w-full ${className}`}
      style={{ minHeight: size === 'sm' ? '4rem' : size === 'lg' ? '6rem' : '4rem' }}
    >
      <div className={`relative flex items-center ${sizeClasses[size]}`}>
        {/* Logo Image */}
        <img
          src="/srm-logo.png"
          alt="SRM Parking"
          className={`object-contain ${sizeClasses[size]}`}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const fallback = e.currentTarget.nextElementSibling as HTMLElement;
            if (fallback) fallback.style.display = 'flex';
          }}
        />

        {/* Fallback Text */}
        <div
          className={`absolute inset-0 hidden items-center space-x-1 ${sizeClasses[size]}`}
          style={{ display: 'none' }}
        >
          <span
            className={`font-bold tracking-tight ${
              size === 'sm'
                ? 'text-xl'
                : size === 'lg'
                ? 'text-4xl'
                : 'text-2xl'
            } ${textColor}`}
          >
            SRM
          </span>
          <span
            className={`opacity-90 ${
              size === 'sm'
                ? 'text-xs'
                : size === 'lg'
                ? 'text-base'
                : 'text-sm'
            } ${textColor}`}
          >
            PARKING
          </span>
        </div>
      </div>
    </div>
  );
};

export default SRMLogo;
