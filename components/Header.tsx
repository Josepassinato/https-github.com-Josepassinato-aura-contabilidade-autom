
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, WHATSAPP_LINK } from '../constants';
import { Logo, MenuIcon, CloseIcon } from './Icons';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/50 backdrop-blur-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <a href="#inicio" className="flex-shrink-0">
            <Logo className="h-8 w-auto"/>
          </a>
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {NAV_LINKS.map((link) => (
              <a key={link.label} href={link.href} className="text-sm font-medium text-gray-300 hover:text-white transition-colors duration-200">{link.label}</a>
            ))}
          </nav>
          <div className="hidden lg:block">
            <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="inline-block bg-[#00F729] text-black font-bold py-2 px-6 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
              Fale Conosco
            </a>
          </div>
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-gray-300 hover:text-white focus:outline-none">
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
      </div>
      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-20 left-0 w-full bg-black/80 backdrop-blur-lg transition-transform duration-300 ease-in-out ${isOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'}`}>
        <nav className="flex flex-col items-center space-y-4 py-8">
          {NAV_LINKS.map((link) => (
            <a key={link.label} href={link.href} onClick={toggleMenu} className="text-lg font-medium text-gray-300 hover:text-white">{link.label}</a>
          ))}
          <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-[#00F729] text-black font-bold py-3 px-8 rounded-full hover:bg-opacity-80 transition-all duration-300 transform hover:scale-105">
            Fale Conosco
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
