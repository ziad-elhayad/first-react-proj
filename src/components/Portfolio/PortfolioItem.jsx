import React from 'react';

export default function PortfolioItem({ image, onClick }) {
  return (
    <div 
      className="relative group cursor-pointer rounded-lg overflow-hidden shadow-lg"
      onClick={onClick}
    >
      <img 
        src={image} 
        alt="Portfolio" 
        className="w-full h-full object-cover rounded-lg transition-transform duration-300 group-hover:scale-105" 
      />
      <div className="absolute inset-0 bg-teal-400 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center">
        <svg className="w-20 h-20 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" />
        </svg>
      </div>
    </div>
  );
}