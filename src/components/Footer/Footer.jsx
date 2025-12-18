import React from 'react';
import FooterLocation from './FooterLocation';
import FooterSocial from './FooterSocial';
import FooterAbout from './FooterAbout';

export default function Footer() {
  return (
    <footer className="bg-slate-700 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8">
          <FooterLocation />
          <FooterSocial />
          <FooterAbout />
        </div>
      </div>
      <div className="bg-slate-800 py-6 text-center">
        <p className="text-sm">Copyright © Your Website 2021</p>
      </div>
    </footer>
  );
}