import React, { useState } from 'react';
import StarDivider from '../StarDivider/StarDivider';
import PortfolioItem from './PortfolioItem';
import ImageModal from './ImageModal';

export default function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const images = [
    'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    'https://routeegy.github.io/startFramework/assets/images/port2.png',
    'https://routeegy.github.io/startFramework/assets/images/port3.png',
    'https://routeegy.github.io/startFramework/assets/images/poert1.png',
    'https://routeegy.github.io/startFramework/assets/images/port2.png',
    'https://routeegy.github.io/startFramework/assets/images/port3.png'
  ];

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-slate-700 mb-4">PORTFOLIO COMPONENT</h2>
          <StarDivider colorClass="dark" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((img, idx) => (
            <PortfolioItem 
              key={idx} 
              image={img} 
              onClick={() => setSelectedImage(img)} 
            />
          ))}
        </div>
      </div>

      <ImageModal 
        image={selectedImage} 
        onClose={() => setSelectedImage(null)} 
      />
    </div>
  );
}