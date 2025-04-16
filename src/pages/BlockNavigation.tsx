
import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Button } from '@/components/ui/button';
import { MapPin, Navigation, ArrowRight, ArrowDown, Car } from 'lucide-react';

const BlockNavigation = () => {
  const { blockId } = useParams<{ blockId: string }>();
  const navigate = useNavigate();
  const [isNavigating, setIsNavigating] = useState(false);
  
  // Sample navigation steps - in a real app, this would come from a routing API
  const navigationSteps = [
    {
      instruction: "Exit the main entrance",
      distance: "50m",
      icon: <ArrowRight className="text-srm-blue" size={24} />,
    },
    {
      instruction: "Turn right at the cafeteria",
      distance: "100m",
      icon: <ArrowRight className="text-srm-blue" size={24} />,
    },
    {
      instruction: "Continue straight past the library",
      distance: "150m",
      icon: <ArrowDown className="text-srm-blue" size={24} />,
    },
    {
      instruction: `Arrive at ${blockId || 'Main'} Block parking`,
      distance: "0m",
      icon: <Car className="text-srm-blue" size={24} />,
    },
  ];

  const startNavigation = () => {
    setIsNavigating(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-28">
      <Header title={`Navigate to ${blockId || 'Main'} Block`} showBackButton />
      
      <main className="p-4">
        {/* Map visualization placeholder - in a real app, this would be a real map */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm h-[300px] mb-6 flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 srm-gradient opacity-10"></div>
          <div className="text-center">
            <MapPin size={48} className="text-srm-blue mx-auto mb-2" />
            <h3 className="text-lg font-medium">{blockId || 'Main'} Block</h3>
            <p className="text-sm text-gray-500">~300m from your location</p>
          </div>
        </div>
        
        {/* Navigation steps */}
        {isNavigating ? (
          <div className="space-y-4 mb-6">
            <h3 className="text-lg font-medium mb-4">Navigation Steps</h3>
            
            {navigationSteps.map((step, index) => (
              <div 
                key={index} 
                className={`flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border-l-4 ${
                  index === navigationSteps.length - 1 ? 'border-l-green-500' : 'border-l-srm-blue'
                }`}
              >
                <div className="p-2 bg-gray-50 rounded-full">
                  {step.icon}
                </div>
                <div className="flex-1">
                  <p className="font-medium">{step.instruction}</p>
                  <p className="text-sm text-gray-500">{step.distance}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-xl p-4 shadow-sm mb-6">
            <h3 className="text-lg font-medium mb-2">Route Information</h3>
            <p className="text-sm text-gray-600 mb-4">
              Navigate to {blockId || 'Main'} Block parking area. The route is approximately 300m from your current location.
            </p>
            <div className="flex items-center gap-4 mb-2">
              <div className="w-2 h-2 rounded-full bg-srm-blue"></div>
              <p className="text-sm">Starting point: Main Entrance</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <p className="text-sm">Destination: {blockId || 'Main'} Block Parking</p>
            </div>
          </div>
        )}
        
        {/* Action button */}
        {!isNavigating ? (
          <Button 
            onClick={startNavigation}
            className="w-full bg-srm-blue hover:bg-srm-darkblue text-white rounded-full py-6 shadow-md flex items-center justify-center gap-2"
          >
            <Navigation size={18} />
            <span>Start Navigation</span>
          </Button>
        ) : (
          <Button 
            onClick={() => navigate(`/parking/${blockId}`)}
            className="w-full bg-srm-blue hover:bg-srm-darkblue text-white rounded-full py-6 shadow-md"
          >
            Return to Parking View
          </Button>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default BlockNavigation;
