
import { cn } from '@/lib/utils';

interface StatusIndicatorProps {
  status: 'available' | 'limited' | 'full' | 'selected';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const StatusIndicator = ({ 
  status, 
  size = 'md',
  className 
}: StatusIndicatorProps) => {
  const sizeClasses = {
    sm: 'w-2 h-2',
    md: 'w-3 h-3',
    lg: 'w-4 h-4'
  };
  
  const colorClasses = {
    available: 'bg-parking-available',
    limited: 'bg-parking-limited',
    full: 'bg-parking-full',
    selected: 'bg-parking-selected'
  };

  return (
    <div 
      className={cn(
        'rounded-full', 
        sizeClasses[size], 
        colorClasses[status],
        className
      )} 
    />
  );
};

export default StatusIndicator;
