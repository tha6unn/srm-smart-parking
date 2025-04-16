
import React from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { Home, Bell, User, MapPin } from 'lucide-react';

const navItems = [
  {
    label: 'Dashboard',
    icon: Home,
    path: '/dashboard'
  },
  {
    label: 'Parking',
    icon: MapPin,
    path: '/parking'
  },
  {
    label: 'Notifications',
    icon: Bell,
    path: '/notifications'
  },
  {
    label: 'Profile',
    icon: User,
    path: '/profile'
  }
];

const BottomNavigation: React.FC = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2 px-4 flex justify-around items-center z-50">
      {navItems.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) => cn(
            'flex flex-col items-center py-1 px-3 rounded-lg transition-colors',
            isActive ? 'text-srm-blue' : 'text-gray-500'
          )}
        >
          {({ isActive }) => (
            <>
              <item.icon size={20} className={cn(
                isActive ? 'text-srm-blue' : 'text-gray-500'
              )} />
              <span className="text-xs mt-1">{item.label}</span>
            </>
          )}
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNavigation;
