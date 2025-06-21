import React from 'react';
import { User } from 'lucide-react';

interface NavbarProps {
  onLoginClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onLoginClick }) => {
  return (
    <nav className="relative z-50 w-full px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          LOGO
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
            Home
          </a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
            About
          </a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
            Products
          </a>
          <a href="#" className="text-white hover:text-blue-200 transition-colors duration-200">
            Contact
          </a>
        </div>

        <button
          onClick={onLoginClick}
          className="flex items-center space-x-2 px-4 py-2 border border-white/30 rounded-lg text-white hover:bg-white/10 transition-all duration-200"
        >
          <User size={18} />
          <span>Login</span>
        </button>
      </div>
    </nav>
  );
};