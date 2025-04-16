
import React from 'react';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Info, AlertTriangle, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

interface Notification {
  id: string;
  title: string;
  description: string;
  timestamp: string;
  type: 'info' | 'warning' | 'success';
}

const Notifications = () => {
  const { toast } = useToast();
  
  // Sample notifications data
  const notifications: Notification[] = [
    {
      id: '1',
      title: 'MBA Block Nearly Full',
      description: 'Only 5 slots left in MBA Block.',
      timestamp: 'Just now',
      type: 'warning',
    },
    {
      id: '2',
      title: 'Parking Reserved',
      description: 'Your parking slot A6 has been reserved successfully.',
      timestamp: '10 minutes ago',
      type: 'success',
    },
    {
      id: '3',
      title: 'System Maintenance',
      description: 'The parking system will undergo maintenance tomorrow from 2 AM to 4 AM.',
      timestamp: '2 hours ago',
      type: 'info',
    },
    {
      id: '4',
      title: 'Your Parking Expires Soon',
      description: 'Your parking reservation will expire in 30 minutes.',
      timestamp: '3 hours ago',
      type: 'warning',
    },
  ];
  
  const handleClearAll = () => {
    toast({
      title: "Notifications cleared",
      description: "All notifications have been cleared"
    });
  };
  
  const getNotificationIcon = (type: string) => {
    switch (type) {
      case 'info':
        return <Info className="text-srm-blue" size={20} />;
      case 'warning':
        return <AlertTriangle className="text-parking-limited" size={20} />;
      case 'success':
        return <CheckCircle className="text-parking-available" size={20} />;
      default:
        return <Info className="text-srm-blue" size={20} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header title="Notifications" />
      
      <main className="p-4">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-lg font-semibold">Recent Notifications</h1>
          <Button 
            variant="ghost" 
            size="sm"
            onClick={handleClearAll}
          >
            Clear All
          </Button>
        </div>
        
        {/* Notifications list */}
        {notifications.length > 0 ? (
          <div className="space-y-3">
            {notifications.map((notification) => (
              <Card key={notification.id} className="overflow-hidden">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="mt-1">
                      {getNotificationIcon(notification.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-medium">{notification.title}</h3>
                        <span className="text-xs text-gray-500">{notification.timestamp}</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        {notification.description}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-10">
            <p className="text-gray-500">No notifications</p>
          </div>
        )}
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Notifications;
