import React from 'react';

export default function ImageModal({ image, onClose }) {
  if (!image) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 cursor-pointer"
      onClick={onClose}
    >
      <div className="relative max-w-4xl max-h-full">
        <img 
          src={image} 
          alt="Selected" 
          className="max-w-full max-h-[90vh] rounded-lg shadow-2xl" 
        />
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-white text-4xl font-bold hover:text-teal-400 transition-colors"
        >
          ×
        </button>
      </div>
    </div>
  );
}