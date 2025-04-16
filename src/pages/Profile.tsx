
import React from 'react';
import Header from '@/components/layout/Header';
import BottomNavigation from '@/components/layout/BottomNavigation';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { 
  User, 
  Lock, 
  Bell, 
  HelpCircle, 
  LogOut, 
  ChevronRight 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Profile = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleLogout = () => {
    toast({
      title: "Logged out",
      description: "You have been successfully logged out"
    });
    navigate('/auth');
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pb-16">
      <Header title="Profile" />
      
      <main className="p-4">
        {/* User info */}
        <div className="flex flex-col items-center py-6">
          <Avatar className="w-20 h-20">
            <AvatarImage src="" />
            <AvatarFallback className="bg-srm-lightblue text-white text-lg">SU</AvatarFallback>
          </Avatar>
          
          <h2 className="mt-4 text-xl font-semibold">SRM User</h2>
          <p className="text-gray-600">user@srm.edu.in</p>
        </div>
        
        <Separator className="my-4" />
        
        {/* Account Settings */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">ACCOUNT SETTINGS</h3>
          
          <Card>
            <CardContent className="p-0">
              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <User size={18} className="text-gray-500" />
                  <span>Edit Profile</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
              
              <Separator />
              
              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Lock size={18} className="text-gray-500" />
                  <span>Change Password</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            </CardContent>
          </Card>
        </div>
        
        {/* Notification Settings */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">NOTIFICATION SETTINGS</h3>
          
          <Card className="p-4">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell size={18} className="text-gray-500" />
                  <Label htmlFor="parking-alerts">Parking Alerts</Label>
                </div>
                <Switch id="parking-alerts" defaultChecked />
              </div>
              
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Bell size={18} className="text-gray-500" />
                  <Label htmlFor="system-updates">System Updates</Label>
                </div>
                <Switch id="system-updates" />
              </div>
            </div>
          </Card>
        </div>
        
        {/* Support */}
        <div className="mb-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">SUPPORT</h3>
          
          <Card>
            <CardContent className="p-0">
              <button className="w-full flex items-center justify-between p-4 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <HelpCircle size={18} className="text-gray-500" />
                  <span>Help & FAQ</span>
                </div>
                <ChevronRight size={16} className="text-gray-400" />
              </button>
            </CardContent>
          </Card>
        </div>
        
        {/* Logout button */}
        <Button 
          variant="destructive" 
          className="w-full"
          onClick={handleLogout}
        >
          <LogOut size={16} className="mr-2" /> Logout
        </Button>
      </main>
      
      <BottomNavigation />
    </div>
  );
};

export default Profile;
