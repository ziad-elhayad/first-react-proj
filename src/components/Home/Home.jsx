import React from 'react';
import StarDivider from '../StarDivider/StarDivider';

export default function Home() {
  return (
    <div className="bg-teal-400 text-white min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="text-center">
        <img 
          src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" 
          alt="Avatar" 
          className="w-64 mx-auto mb-8"
        />
        <h1 className="text-5xl font-bold mb-4">START FRAMEWORK</h1>
        <StarDivider colorClass="white" />
        <p className="text-xl mt-4">Graphic Artist - Web Designer - Illustrator</p>
      </div>
    </div>
  );
}