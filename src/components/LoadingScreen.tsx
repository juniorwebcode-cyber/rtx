import React, { useEffect, useState } from 'react';
import { RTX_INFO } from '../data/rtxData';

interface LoadingScreenProps {
  onLoaded?: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoaded }) => {
  const [progress, setProgress] = useState(0);
  const [isHiding, setIsHiding] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setIsHiding(true);
            setTimeout(() => {
              setIsDone(true);
              if (onLoaded) onLoaded();
            }, 600);
          }, 300);
          return 100;
        }
        const step = Math.floor(Math.random() * 25) + 15;
        return Math.min(100, prev + step);
      });
    }, 180);

    return () => clearInterval(timer);
  }, [onLoaded]);

  if (isDone) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-opacity duration-500 ${
        isHiding ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
    >
      <div className="relative flex flex-col items-center max-w-lg px-6 text-center">
        {/* Glow ambient circle */}
        <div className="absolute -top-16 w-80 h-80 sm:w-96 sm:h-96 bg-blue-200/60 rounded-full blur-3xl opacity-70 pointer-events-none" />

        {/* 3D Official Logo - Made much bigger */}
        <div className="relative mb-8 transform transition-transform duration-700 hover:scale-105">
          <img
            src={RTX_INFO.officialLogo}
            alt="RTX Construtora Logo Oficial"
            className="w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain drop-shadow-[0_25px_50px_rgba(30,64,175,0.35)] animate-pulse"
          />
        </div>

        {/* Brand Name */}
        <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-1.5">
          RTX Construtora
        </h2>
        <p className="text-xs sm:text-sm uppercase tracking-widest text-blue-600 font-bold mb-6">
          Engenharia & Construção Civil
        </p>

        {/* Progress Bar */}
        <div className="w-64 sm:w-72 h-2 bg-slate-100 rounded-full overflow-hidden mb-3.5 shadow-inner">
          <div
            className="h-full bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>

        <span className="text-[11px] font-mono tabular-nums text-slate-400">
          Carregando excelência... {progress}%
        </span>
      </div>
    </div>
  );
};
