
import React from 'react';

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "white";
}

const SRMLogo: React.FC<LogoProps> = ({ 
  className = "", 
  size = "md",
  variant = "default"
}) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  // Backup text-based logo styling
  const textColor = variant === "white" ? "text-white" : "text-srm-blue";
  
  // Try to use the image logo, but fall back to text if there's an issue
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`${sizeClasses[size]}`}>
        {/* Logo image with text fallback */}
        <div className="relative">
          <img 
            src="/srm-logo.png" 
            alt="SRM Parking" 
            className={`object-contain ${sizeClasses[size]} h-auto`}
            onError={(e) => {
              // If image fails to load, show the text version
              e.currentTarget.style.display = 'none';
              // Cast to HTMLElement to access style property
              const textElement = e.currentTarget.nextElementSibling as HTMLElement;
              if (textElement) {
                textElement.style.display = 'flex';
              }
            }}
          />
          
          {/* Text fallback - hidden by default */}
          <div 
            className={`font-bold ${sizeClasses[size]} hidden items-center`}
            style={{ display: 'none' }}
          >
            <span className={`text-2xl md:text-3xl lg:text-4xl ${textColor} tracking-tight`}>
              SRM
            </span>
            <span className={`text-xs md:text-sm lg:text-base ml-1 ${textColor} opacity-90`}>
              PARKING
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SRMLogo;
