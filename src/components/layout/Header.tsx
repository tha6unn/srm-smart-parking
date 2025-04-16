
import React from 'react';
import SRMLogo from '@/components/logo/SRMLogo';
import { cn } from '@/lib/utils';
import { ArrowLeft, Info, ChevronLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  title?: string;
  showBackButton?: boolean;
  showInfoButton?: boolean;
  className?: string;
  onInfoClick?: () => void;
}

const Header: React.FC<HeaderProps> = ({ 
  title,
  showBackButton = false,
  showInfoButton = false,
  className,
  onInfoClick
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <header className={cn("bg-white border-b border-gray-100 py-3 px-4", className)}>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {showBackButton && (
            <button 
              onClick={handleBack} 
              className="mr-3 p-1 rounded-full hover:bg-gray-100 transition-colors"
            >
              <ChevronLeft className="text-gray-600" size={24} />
            </button>
          )}
          
          {title ? (
            <h1 className="font-semibold text-lg">{title}</h1>
          ) : (
            <SRMLogo size="md" />
          )}
        </div>
        
        {showInfoButton && (
          <button 
            onClick={onInfoClick} 
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
          >
            <Info className="text-gray-600" size={20} />
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
