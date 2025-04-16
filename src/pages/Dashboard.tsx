
import React from 'react';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import BlockCard, { BlockData } from '@/components/dashboard/BlockCard';

const Dashboard = () => {
  // Sample data for blocks
  const blocks: BlockData[] = [
    {
      id: '1',
      name: 'MBA Block',
      totalSlots: 50,
      occupiedSlots: 12,
      status: 'available'
    },
    {
      id: '2',
      name: 'Law Block',
      totalSlots: 30,
      occupiedSlots: 25,
      status: 'limited'
    },
    {
      id: '3',
      name: 'Tech Park Avenue',
      totalSlots: 80,
      occupiedSlots: 35,
      status: 'available'
    },
    {
      id: '4',
      name: 'Medical Block',
      totalSlots: 40,
      occupiedSlots: 40,
      status: 'full'
    },
    {
      id: '5',
      name: 'Tech park ground',
      totalSlots: 60,
      occupiedSlots: 20,
      status: 'available'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header />
      
      <main className="p-4">
        <h1 className="text-2xl font-bold mb-6">Find Parking</h1>
        
        {/* Search bar */}
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          <Input 
            placeholder="Search blocks..." 
            className="pl-10 bg-white border-gray-200 rounded-lg" 
          />
        </div>
        
        {/* Status legend */}
        <div className="flex gap-6 mb-6">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-parking-available"></div>
            <span className="text-sm text-gray-600">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-parking-limited"></div>
            <span className="text-sm text-gray-600">Limited</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-parking-full"></div>
            <span className="text-sm text-gray-600">Full</span>
          </div>
        </div>
        
        {/* Blocks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {blocks.map((block) => (
            <BlockCard key={block.id} block={block} />
          ))}
        </div>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Dashboard;
