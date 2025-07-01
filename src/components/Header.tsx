import React from 'react';
import { Award } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="/LOGO SEM FUNDO.png" 
              alt="Mecânica Total" 
              className="h-12 w-12 object-contain"
            />
            <span className="text-2xl font-bold text-gray-800">Mecânica Total</span>
          </div>
          <div className="hidden md:flex items-center space-x-2 text-sm text-gray-600">
            <Award className="h-4 w-4" />
            <span>Certificação Profissional</span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;