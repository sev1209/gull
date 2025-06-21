import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { AuthModal } from './components/AuthModal';
import { ForestBackground } from './components/ForestBackground';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <ForestBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar onLoginClick={openModal} />
        
        {/* Main Content */}
        <div className="flex items-center justify-center min-h-screen pt-20">
          <div className="text-center text-white px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
              Welcome to Nature
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-2xl mx-auto">
              Experience the tranquility and beauty of the wilderness through our immersive platform
            </p>
            <button
              onClick={openModal}
              className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-blue-700 hover:to-green-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Get Started
            </button>
          </div>
        </div>
      </div>

      {/* Auth Modal */}
      <AuthModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;