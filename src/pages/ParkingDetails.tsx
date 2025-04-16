
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import FloorSelector from '@/components/parking/FloorSelector';
import ParkingMap, { ParkingSlot } from '@/components/parking/ParkingMap';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Car, Route } from 'lucide-react';
import { Link } from 'react-router-dom';

const ParkingDetails = () => {
  const { blockId } = useParams<{ blockId: string }>();
  const [selectedFloor, setSelectedFloor] = useState('1st Floor');
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const { toast } = useToast();

  const floors = ['1st Floor', '2nd Floor', '3rd Floor'];

  // Sample parking slots data
  const parkingSlots: ParkingSlot[] = [
    // First row
    { id: '1', slotNumber: 'A1', status: 'occupied', position: { x: 20, y: 20 }, size: { width: 10, height: 5 } },
    { id: '2', slotNumber: 'A2', status: 'available', position: { x: 35, y: 20 }, size: { width: 10, height: 5 } },
    { id: '3', slotNumber: 'A3', status: 'booking', position: { x: 50, y: 20 }, size: { width: 10, height: 5 }, section: 'A' },
    { id: '4', slotNumber: 'A4', status: 'occupied', position: { x: 65, y: 20 }, size: { width: 10, height: 5 } },
    
    // Second row
    { id: '5', slotNumber: 'A5', status: 'occupied', position: { x: 20, y: 30 }, size: { width: 10, height: 5 } },
    { id: '6', slotNumber: 'A6', status: 'available', position: { x: 50, y: 30 }, size: { width: 10, height: 5 } },
    
    // Third row with different orientation
    { id: '7', slotNumber: 'B1', status: 'occupied', position: { x: 20, y: 65 }, size: { width: 10, height: 5 }, section: 'B' },
    { id: '8', slotNumber: 'B2', status: 'booking', position: { x: 35, y: 65 }, size: { width: 10, height: 5 }, section: 'B' },
    
    // Fourth row with different orientation
    { id: '9', slotNumber: 'B3', status: 'occupied', position: { x: 65, y: 75 }, size: { width: 10, height: 5 } },
    { id: '10', slotNumber: 'B4', status: 'occupied', position: { x: 65, y: 85 }, size: { width: 10, height: 5 } },
  ];

  const handleSelectSlot = (slotId: string) => {
    setSelectedSlot(slotId);
  };

  const handleContinue = () => {
    if (!selectedSlot) {
      toast({
        title: "No slot selected",
        description: "Please select a parking slot first",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Slot reserved",
      description: "You have successfully reserved the parking slot"
    });
    
    // Navigate to confirmation or payment page
    // For now, we'll just clear the selection
    setSelectedSlot(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      <Header title="Select Parking Slot" showBackButton showInfoButton />
      
      <main className="p-4">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-medium">{blockId || 'Main'} Block</h2>
          <Link 
            to={`/navigation/${blockId}`} 
            className="flex items-center gap-2 text-sm text-srm-blue font-medium bg-srm-blue/10 px-3 py-1.5 rounded-full"
          >
            <Route size={16} />
            <span>Navigate</span>
          </Link>
        </div>
        
        {/* Floor selector */}
        <FloorSelector 
          floors={floors} 
          selectedFloor={selectedFloor}
          onSelectFloor={setSelectedFloor}
          className="mb-6"
        />
        
        {/* Parking visualization */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-[500px] mb-6">
          <ParkingMap 
            slots={parkingSlots}
            selectedSlot={selectedSlot}
            onSelectSlot={handleSelectSlot}
          />
        </div>
        
        {/* Legend */}
        <div className="flex flex-wrap justify-center gap-6 mb-8 bg-white p-4 rounded-xl shadow-sm">
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 bg-blue-400 border border-blue-500 rounded flex items-center justify-center">
              <Car size={8} className="text-white" />
            </div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 bg-gray-400 border border-gray-500 rounded flex items-center justify-center">
              <Car size={8} className="text-white" />
            </div>
            <span className="text-sm text-gray-600">Occupied</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-5 h-3 bg-yellow-400 border border-yellow-500 rounded flex items-center justify-center">
              <Car size={8} className="text-white" />
            </div>
            <span className="text-sm text-gray-600">Booking</span>
          </div>
        </div>
        
        {/* Continue button */}
        <Button 
          onClick={handleContinue}
          className="w-full bg-srm-blue hover:bg-srm-darkblue text-white rounded-full py-6 shadow-md"
        >
          Continue
        </Button>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default ParkingDetails;
