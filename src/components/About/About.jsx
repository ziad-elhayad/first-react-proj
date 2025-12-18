import React from 'react';
import StarDivider from '../StarDivider/StarDivider';

export default function About() {
  return (
    <div className="bg-teal-400 text-white min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto py-20">
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold mb-4">ABOUT COMPONENT</h2>
          <StarDivider colorClass="white" />
        </div>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div>
            <p className="text-lg leading-relaxed">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
          <div>
            <p className="text-lg leading-relaxed">
              Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}