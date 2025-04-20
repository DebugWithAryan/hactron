import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket, Info, Code, Calendar, Award, HelpCircle, Users, BookOpen, Coffee } from 'lucide-react';

interface NavbarProps {
  scrollY: number;
}

const Navbar = ({ scrollY }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  useEffect(() => {
    setIsScrolled(scrollY > 50);
  }, [scrollY]);

  useEffect(() => {
    // Handle outside clicks to close the menu
    const handleClickOutside = (e: MouseEvent) => {
      if (isOpen) {
        setIsOpen(false);
      }
      // Close dropdowns on outside click
      setActiveDropdown(null);
    };

    // Prevent scrolling when menu is open
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    // Add event listener for clicks and scrolls
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isOpen]);

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    setIsOpen(!isOpen);
  };

  const handleMenuItemClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent the click from bubbling up
    setIsOpen(false);
  };

  const toggleDropdown = (e: React.MouseEvent, name: string) => {
    e.stopPropagation();
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const navLinks = [
    { name: 'About', href: '#about', icon: <Info className="w-6 h-6" /> },
    { name: 'Theme', href: '#theme', icon: <Code className="w-6 h-6" /> },
    { name: 'Schedule', href: '#schedule', icon: <Calendar className="w-6 h-6" /> },
    { name: 'Prizes', href: '#prizes', icon: <Award className="w-6 h-6" /> },
    { name: 'FAQ', href: '#faq', icon: <HelpCircle className="w-6 h-6" /> },
  ];

  const teamLinks = [
    { name: 'Judges', href: '#judges', icon: <Users className="w-6 h-6" /> },
    { name: 'Mentors', href: '#mentors', icon: <BookOpen className="w-6 h-6" /> },
    { name: 'Hosts', href: '#hostingteam', icon: <Coffee className="w-6 h-6" /> },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black bg-opacity-90 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Rocket className="h-8 w-8 text-pink-500 mr-2" />
            <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-700">
              Code Conquerors
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-white hover:text-pink-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            
            {/* Teams Dropdown */}
            <div className="relative">
              <button 
                onClick={(e) => toggleDropdown(e, 'teams')}
                className="text-sm font-medium text-white hover:text-pink-500 transition-colors flex items-center"
              >
                Teams
                <svg 
                  className={`ml-1 h-4 w-4 transition-transform ${activeDropdown === 'teams' ? 'rotate-180' : ''}`} 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {activeDropdown === 'teams' && (
                <div 
                  className="absolute right-0 mt-2 w-48 bg-black bg-opacity-90 backdrop-blur-md rounded-md shadow-lg py-2 z-50"
                  onClick={(e) => e.stopPropagation()}
                >
                  {teamLinks.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-white hover:bg-gray-800 flex items-center"
                      onClick={() => setActiveDropdown(null)}
                    >
                      <span className="mr-2">
                        {React.cloneElement(item.icon, { size: 16 })}
                      </span>
                      {item.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu with Icons */}
      <div
        className={`fixed top-0 right-0 h-full bg-black bg-opacity-90 z-40 flex flex-col items-start justify-center transition-all duration-300 md:hidden ${
          isOpen ? "w-20" : "w-0 overflow-hidden"
        }`}
        onClick={(e) => e.stopPropagation()} // Prevent clicks inside menu from closing it
      >
        <div className="flex flex-col space-y-6 py-4 w-full items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleMenuItemClick}
              className="flex flex-col items-center justify-center text-white hover:text-pink-500 transition-colors"
              title={link.name}
            >
              <div className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                {link.icon}
              </div>
              <span className="text-xs mt-1">{link.name}</span>
            </a>
          ))}
          
          {/* Teams Section Header */}
          <div className="w-full border-t border-gray-700 pt-4 flex justify-center">
            <span className="text-xs text-gray-400">Teams</span>
          </div>
          
          {/* Team Links */}
          {teamLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={handleMenuItemClick}
              className="flex flex-col items-center justify-center text-white hover:text-pink-500 transition-colors"
              title={link.name}
            >
              <div className="p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors">
                {link.icon}
              </div>
              <span className="text-xs mt-1">{link.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Overlay to capture clicks outside the menu */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-30 bg-transparent md:hidden" 
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        />
      )}
    </nav>
  );
};

export default Navbar;
