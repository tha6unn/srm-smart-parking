
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SRMLogo from '@/components/logo/SRMLogo';

const SplashScreen = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Simulate loading time then navigate to auth
    const timer = setTimeout(() => {
      navigate('/auth');
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen srm-gradient flex flex-col items-center justify-center">
      <div className="w-full max-w-md mx-auto text-center">
        {/* Logo */}
        <div className="mb-6">
          <SRMLogo size="lg" className="text-white" />
        </div>
        
        {/* Tagline */}
        <p className="text-white text-xl font-light mb-16">
          Smart Parking Made Easy
        </p>
        
        {/* Loading animation */}
        <div className="flex justify-center">
          <div className="animate-pulse-light">
            <div className="w-10 h-1 bg-white rounded-full opacity-80"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
