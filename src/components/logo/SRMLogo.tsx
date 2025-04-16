
import React from 'react';

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

const SRMLogo: React.FC<LogoProps> = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "h-8",
    md: "h-12",
    lg: "h-16"
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`text-srm-blue font-bold ${sizeClasses[size]}`}>
        <span className="text-2xl md:text-3xl lg:text-4xl">SRM</span>
        <span className="text-sm md:text-base lg:text-lg ml-1">PARKING</span>
      </div>
    </div>
  );
};

export default SRMLogo;
