import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="container mx-auto flex flex-wrap items-center justify-between px-4 py-3">
      {/* Logo Section */}
      <div className="flex items-center">
        <Link
          to="/"
          className="flex items-center text-gray-900 font-medium text-2xl"
        ><svg xmlns="http://www.w3.org/2000/svg" width="150" height="50" viewBox="0 0 300 100" fill="none">

  <circle cx="50" cy="50" r="40" fill="#0078FF" />
  <path d="M50 30 L65 50 L50 70 L35 50 Z" fill="white" />
  

  <text x="100" y="60" fill="#333333" font-family="Arial, sans-serif" font-size="36" font-weight="bold">
    BAJI
  </text>
 
</svg>

        
        </Link>
      </div>

      {/* Hamburger Menu */}
      <button
        className="md:hidden block text-gray-900 focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="space-y-1">
          <div
            className={`w-6 h-1 bg-gray-900 transform transition ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-900 transition ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-1 bg-gray-900 transform transition ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </div>
      </button>

      {/* Nav Items */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:flex flex-col md:flex-row items-center w-full md:w-auto`}
      >
        <Link
          to="/"
          className="block py-2 px-4 text-gray-900 hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          Home
        </Link>
        <Link
          to="/product"
          className="block py-2 px-4 text-gray-900 hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          Product
        </Link>
        <Link
          to="/gallery"
          className="block py-2 px-4 text-gray-900 hover:text-blue-500"
          onClick={() => setIsOpen(false)}
        >
          Gallery
        </Link>
    
        <Link
          to="/cart"
          className="block py-2 px-4 text-gray-900 hover:text-blue-500 flex items-center"
          onClick={() => setIsOpen(false)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-cart mr-2"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
          </svg>
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
