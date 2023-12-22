

import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="eme hidder text-black body-font p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-black text-xl font-bold">
            Your Logo
          </div>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          <div className="hidden md:flex space-x-4">
            <a href="#" className="text-black">Home</a>
            <a href="#" className="text-black">About</a>
            <a href="#" className="text-black">Services</a>
            <a href="#" className="text-black">Contact</a>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} bg-blue-500`}>
          <a href="#" className="block py-2 px-4 text-white">Home</a>
          <a href="#" className="block py-2 px-4 text-white">About</a>
          <a href="#" className="block py-2 px-4 text-white">Services</a>
          <a href="#" className="block py-2 px-4 text-white">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
