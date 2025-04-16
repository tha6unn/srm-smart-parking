
import React from 'react';
import logoImage from '/lovable-uploads/77eac982-b6bc-411c-9fd2-9d00d9b932aa.png';

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

  const imageClasses = `object-contain ${sizeClasses[size]} ${className}`;

  return (
    <div className="flex items-center justify-center">
      <img 
        src={logoImage} 
        alt="SRM Institute of Science & Technology" 
        className={imageClasses}
      />
    </div>
  );
};

export default SRMLogo;
