

import React, { useState } from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className=" text-black body-font p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
        <span className="nav-logo">
      <Link
          to={"/"}
          className="flex navbar-logo cursor-pointer title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-10 h-10 text-white p-2 animate-bounce capa4 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-2xl">BAJIHUB</span>
        </Link></span>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-black focus:outline-none"
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
          <Link onClick={() => setIsOpen(!isOpen)}  to="/"><a className="het" href="/">Home</a></Link>
      <Link onClick={() => setIsOpen(!isOpen)} to="/product"><a className="het">Product</a></Link>
      <Link onClick={() => setIsOpen(!isOpen)}  to="/gallery"><a className="het" >Gallery</a></Link>
      <Link onClick={() => setIsOpen(!isOpen)} to="/contact"><a className="het2 inline-flex text-white capa3 border-0 py-2 px-6 focus:outline-none  rounded text-lg" href="/anime">Contact Us</a></Link>
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
