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

  const textColor = variant === "white" ? "text-white" : "text-srm-blue";
  
  return (
    <div className={`flex justify-center items-center w-full py-4 ${className}`}>
      <div className={`relative flex items-center ${sizeClasses[size]}`}>
        <img 
          src="/srm-logo.png" 
          alt="SRM Parking" 
          className={`object-contain ${sizeClasses[size]} h-auto max-w-full`}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
            const textElement = e.currentTarget.nextElementSibling as HTMLElement;
            if (textElement) {
              textElement.style.display = 'flex';
            }
          }}
        />
        <div 
          className={`hidden font-bold items-center`}
          style={{ display: 'none' }}
        >
          <span className={`text-xl md:text-2xl ${textColor}`}>SRM</span>
          <span className={`text-xs md:text-sm ml-1 ${textColor} opacity-90`}>
            PARKING
          </span>
        </div>
      </div>
    </div>
  );
};

export default SRMLogo;
