import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out transform ${isScrolled ? 'bg-gray-900 shadow-lg' : 'bg-transparent'} ${isScrolled ? 'animate-slideDown' : 'animate-fadeIn'}`}>
      <div className="container mx-auto flex justify-between items-center py-4">
        <h1 className="text-2xl font-bold text-white animate-fadeIn">SentienceCorp</h1>
        <ul className="flex space-x-6">
          <li className="animate-fadeIn"><a href="#home" className="text-white hover:text-gray-300">Home</a></li>
          <li className="animate-fadeIn"><a href="#features" className="text-white hover:text-gray-300">Features</a></li>
          <li className="animate-fadeIn"><a href="#about" className="text-white hover:text-gray-300">About</a></li>
          <li className="animate-fadeIn"><a href="#contact" className="text-white hover:text-gray-300">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
