import React, { useState } from 'react';

export default function Navbar({ currentPage, setCurrentPage }) {
  const [isOpen, setIsOpen] = useState(false);

  const NavLink = ({ page, children }) => (
    <button 
      onClick={() => { setCurrentPage(page); setIsOpen(false); }}
      className={`block w-full md:w-auto text-left px-4 py-3 md:py-0 md:ml-8 font-bold transition-colors rounded-lg
        ${currentPage === page 
          ? 'bg-teal-400 md:bg-transparent md:text-teal-400' 
          : 'hover:bg-teal-400 md:hover:bg-transparent md:hover:text-teal-400'
        }`}
    >
      {children}
    </button>
  );

  return (
    <nav className="bg-slate-700 text-white fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-6">
          <button 
            onClick={() => setCurrentPage('home')} 
            className="text-3xl font-bold hover:opacity-80 transition-opacity"
          >
            START FRAMEWORK
          </button>
          
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <div className={`${isOpen ? 'block' : 'hidden'} md:flex md:items-center absolute md:relative top-full left-0 w-full md:w-auto bg-slate-700 md:bg-transparent`}>
            <NavLink page="about">ABOUT</NavLink>
            <NavLink page="portfolio">PORTFOLIO</NavLink>
            <NavLink page="contact">CONTACT</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
}