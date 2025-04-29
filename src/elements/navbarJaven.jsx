import { useState, useEffect } from 'react';
import logo from '../assets/logo_javendzk.png';

function NavbarJaven() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className={`flex items-center justify-between fixed top-0 w-full z-50 px-6 py-4 transition-all duration-300 ${
        scrolled ? 'bg-white/70 backdrop-blur-md shadow-md' : 'bg-transparent'
      }`}>
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="javendzk logo" 
            className="h-10 w-auto"
          />
        </div>

        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className={`${scrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white drop-shadow-md hover:text-gray-300'} transition-colors duration-300`}>
            Home
          </a>
          <a href="#" className={`${scrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white drop-shadow-md hover:text-gray-300'} transition-colors duration-300`}>
            About
          </a>
          <a href="#" className={`${scrolled ? 'text-gray-800 hover:text-gray-600' : 'text-white drop-shadow-md hover:text-gray-300'} transition-colors duration-300`}>
            Projects
          </a>
          <a href="#" className={`${scrolled ? 'bg-gray-800 text-white' : 'bg-white text-gray-800'} px-4 py-2 rounded-md hover:opacity-90 transition-opacity duration-300`}>
            Contact
          </a>
        </div>

        <div className="md:hidden">
          <button 
            className={`${scrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>

      <div 
        className={`fixed top-0 right-0 h-screen w-64 bg-gray-800 z-50 transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        <div className="flex justify-end p-4">
          <button 
            className="text-white"
            onClick={toggleMenu}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col items-center mt-8 space-y-6">
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
            About
          </a>
          <a href="#" className="text-white hover:text-gray-300 transition-colors duration-300">
            Projects
          </a>
          <a href="#" className="bg-white text-gray-800 px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300">
            Contact
          </a>
        </div>
      </div>

      <div 
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        } md:hidden`}
        onClick={toggleMenu}
      />
    </>
  );
}

export default NavbarJaven;
