import React from 'react';

export const ForestBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 overflow-hidden">
      {/* Sky Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-blue-700" />
      
      {/* Stars */}
      <div className="absolute inset-0">
        <div className="absolute top-12 left-20 w-1 h-1 bg-white rounded-full opacity-80" />
        <div className="absolute top-16 right-32 w-1 h-1 bg-white rounded-full opacity-60" />
        <div className="absolute top-24 left-1/4 w-0.5 h-0.5 bg-white rounded-full opacity-70" />
        <div className="absolute top-32 right-1/4 w-1 h-1 bg-white rounded-full opacity-90" />
        <div className="absolute top-8 left-1/2 w-0.5 h-0.5 bg-white rounded-full opacity-60" />
        <div className="absolute top-20 right-16 w-0.5 h-0.5 bg-white rounded-full opacity-80" />
      </div>

      {/* Fog/Mist Effect */}
      <div className="absolute inset-0 bg-gradient-to-t from-white/10 via-transparent to-transparent" />

      {/* Forest Layers */}
      {/* Back layer - furthest trees */}
      <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-t from-blue-900/80 to-transparent">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 400"
          fill="none"
          preserveAspectRatio="xMidYEnd slice"
        >
          <path
            d="M0 400 L0 250 Q50 200 100 180 Q150 160 200 170 Q250 180 300 160 Q350 140 400 150 Q450 160 500 140 Q550 120 600 130 Q650 140 700 120 Q750 100 800 110 Q850 120 900 100 Q950 80 1000 90 Q1050 100 1100 80 Q1150 60 1200 70 L1200 400 Z"
            fill="rgba(30, 58, 138, 0.6)"
          />
        </svg>
      </div>

      {/* Middle layer */}
      <div className="absolute bottom-0 left-0 right-0 h-80">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 320"
          fill="none"
          preserveAspectRatio="xMidYEnd slice"
        >
          <path
            d="M0 320 L0 200 Q80 150 160 140 Q240 130 320 120 Q400 110 480 100 Q560 90 640 80 Q720 70 800 60 Q880 50 960 40 Q1040 30 1120 20 L1200 320 Z"
            fill="rgba(30, 58, 138, 0.8)"
          />
        </svg>
      </div>

      {/* Front layer - closest trees */}
      <div className="absolute bottom-0 left-0 right-0 h-64">
        <svg
          className="absolute bottom-0 w-full h-full"
          viewBox="0 0 1200 256"
          fill="none"
          preserveAspectRatio="xMidYEnd slice"
        >
          <path
            d="M0 256 L0 180 Q60 120 120 110 Q180 100 240 90 Q300 80 360 70 Q420 60 480 50 Q540 40 600 30 Q660 20 720 10 Q780 5 840 15 Q900 25 960 20 Q1020 15 1080 10 Q1140 5 1200 0 L1200 256 Z"
            fill="rgba(15, 23, 42, 0.9)"
          />
        </svg>
      </div>

      {/* Ground */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-slate-900 to-transparent" />
    </div>
  );
};