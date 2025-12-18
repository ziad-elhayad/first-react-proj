import React from 'react';

export default function FooterSocial() {
  const socialLinks = ['f', 't', 'in', 'd'];

  return (
    <div className="text-center">
      <h3 className="text-2xl font-bold mb-4">AROUND THE WEB</h3>
      <div className="flex justify-center gap-4">
        {socialLinks.map((icon, idx) => (
          <button 
            key={idx}
            className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center hover:bg-white hover:text-slate-700 transition-all duration-300"
          >
            {icon}
          </button>
        ))}
      </div>
    </div>
  );
}