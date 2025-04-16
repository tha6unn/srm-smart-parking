
import React from 'react';
import AuthForm from '@/components/auth/AuthForm';
import SRMLogo from '@/components/logo/SRMLogo';

const Auth = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-srm-blue/5 to-white p-4">
      <div className="w-full max-w-md px-8 py-10 bg-white rounded-2xl shadow-lg animate-fade-in">
        <div className="mb-8">
          <SRMLogo size="hg"/>
          <h2 className="text-2xl font-medium text-center text-gray-800">Welcome Back</h2>
          <p className="text-sm text-center text-gray-500 mt-2">Park smart, park easy</p>
        </div>
        <AuthForm />
      </div>
    </div>
  );
};

export default Auth;
