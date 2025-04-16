
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
    <div className={`flex items-center justify-center ${className}`}>
      <div className={`font-bold ${sizeClasses[size]} flex items-center`}>
        <span className={`text-2xl md:text-3xl lg:text-4xl ${textColor} tracking-tight`}>SRM</span>
        <span className={`text-xs md:text-sm lg:text-base ml-1 ${textColor} opacity-90`}>PARKING</span>
      </div>
    </div>
  );
};

export default SRMLogo;
