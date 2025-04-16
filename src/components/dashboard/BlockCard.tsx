
import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import StatusIndicator from '@/components/ui/status-indicator';
import { Link } from 'react-router-dom';

export interface BlockData {
  id: string;
  name: string;
  totalSlots: number;
  occupiedSlots: number;
  status: 'available' | 'limited' | 'full';
}

interface BlockCardProps {
  block: BlockData;
  className?: string;
}

const BlockCard: React.FC<BlockCardProps> = ({ block, className }) => {
  const availableSlots = block.totalSlots - block.occupiedSlots;
  const occupancyPercentage = (block.occupiedSlots / block.totalSlots) * 100;
  
  return (
    <Link to={`/parking/${block.id}`}>
      <Card 
        className={cn(
          "overflow-hidden transition-all hover:shadow-md cursor-pointer",
          className
        )}
      >
        <CardContent className="p-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="font-semibold text-lg">{block.name}</h3>
            <div className="flex items-center gap-2">
              <StatusIndicator status={block.status} />
              <span className="text-sm font-medium text-gray-600">
                {block.status === 'available' && 'Available'}
                {block.status === 'limited' && 'Limited'}
                {block.status === 'full' && 'Full'}
              </span>
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Total:</span>
              <span className="font-medium">{block.totalSlots} slots</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Occupied:</span>
              <span className="font-medium">{block.occupiedSlots} slots</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-600">Available:</span>
              <span className="font-medium">{availableSlots} slots</span>
            </div>
          </div>
        </CardContent>
        
        <CardFooter className="p-0">
          <div className="w-full h-1.5 bg-gray-100">
            <div 
              className={cn(
                "h-full", 
                block.status === 'available' && "bg-parking-available",
                block.status === 'limited' && "bg-parking-limited",
                block.status === 'full' && "bg-parking-full"
              )}
              style={{ width: `${occupancyPercentage}%` }}
            />
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};

export default BlockCard;
