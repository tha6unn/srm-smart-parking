
import React from 'react';
import { cn } from '@/lib/utils';
import { Check, Car } from 'lucide-react';

export interface ParkingSlot {
  id: string;
  slotNumber: string;
  status: 'available' | 'occupied' | 'booking';
  position: { x: number; y: number };
  size: { width: number; height: number };
  rotation?: number;
  section?: 'A' | 'B';
}

interface ParkingMapProps {
  slots: ParkingSlot[];
  selectedSlot: string | null;
  onSelectSlot: (slotId: string) => void;
}

const ParkingMap: React.FC<ParkingMapProps> = ({ 
  slots, 
  selectedSlot, 
  onSelectSlot 
}) => {
  // Group slots by section
  const sections = slots.reduce((acc, slot) => {
    const section = slot.section || 'default';
    if (!acc[section]) {
      acc[section] = [];
    }
    acc[section].push(slot);
    return acc;
  }, {} as Record<string, ParkingSlot[]>);
  
  const getCarColor = (status: string) => {
    switch (status) {
      case 'available':
        return 'bg-blue-400 border-blue-500';
      case 'occupied':
        return 'bg-gray-400 border-gray-500';
      case 'booking':
        return 'bg-yellow-400 border-yellow-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden bg-white rounded-lg">
      {/* Map background */}
      <div className="absolute inset-0 p-4">
        {/* Entry point */}
        <div className="absolute top-[140px] left-0 flex items-center">
          <div className="text-sm font-medium text-gray-600 mr-2">Entry</div>
          <div className="w-16 h-0.5 bg-srm-blue"></div>
        </div>
        
        {/* Section markers */}
        {Object.keys(sections).filter(section => section !== 'default').map((section) => (
          <div 
            key={section} 
            className="absolute w-8 h-8 bg-white rounded-full flex items-center justify-center border border-gray-200 shadow-sm text-sm font-medium"
            style={{ 
              left: section === 'A' ? '45%' : '45%',
              top: section === 'A' ? '30%' : '70%'
            }}
          >
            {section}
          </div>
        ))}
        
        {/* Road paths */}
        <div className="absolute left-[50%] top-[45%] w-[80%] h-0.5 bg-gray-300"></div>
        <div className="absolute left-[50%] top-[75%] w-[80%] h-0.5 bg-gray-300"></div>
        
        {/* Parking slots */}
        {slots.map((slot) => {
          const isSelected = selectedSlot === slot.id;
          
          return (
            <div 
              key={slot.id}
              className={cn(
                "absolute border-2 rounded transition-all cursor-pointer flex items-center justify-center",
                getCarColor(slot.status),
                isSelected && "ring-2 ring-srm-blue"
              )}
              style={{
                left: `${slot.position.x}%`,
                top: `${slot.position.y}%`,
                width: `${slot.size.width}%`,
                height: `${slot.size.height}%`,
                transform: slot.rotation ? `rotate(${slot.rotation}deg)` : undefined
              }}
              onClick={() => slot.status === 'available' && onSelectSlot(slot.id)}
            >
              <Car size={14} className="text-white" />
              <div className="absolute bottom-1 right-1 text-[10px] font-semibold text-white">
                {slot.slotNumber}
              </div>
            </div>
          );
        })}
        
        {/* Selected notification */}
        {selectedSlot && (
          <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 bg-white rounded-full px-4 py-2 flex items-center gap-1.5 shadow-md border">
            <Check size={16} className="text-green-500" />
            <span className="text-sm font-medium">Selected</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default ParkingMap;
