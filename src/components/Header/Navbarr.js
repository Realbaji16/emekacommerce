import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="Navbar container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
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
      <div className={`nav-items ${isOpen && "open"}`}>
      <Link onClick={() => setIsOpen(!isOpen)}  to="/"><a className="het" href="/">Home</a></Link>
      <Link onClick={() => setIsOpen(!isOpen)} to="/product"><a className="het">Product</a></Link>
      <Link onClick={() => setIsOpen(!isOpen)}  to="/gallery"><a className="het" >Gallery</a></Link>
      <Link onClick={() => setIsOpen(!isOpen)} to="/contact"><a className="het2 inline-flex text-white capa3 border-0 py-2 px-6 focus:outline-none  rounded text-lg" href="/anime">Contact Us</a></Link>
      
      <Link
          to={"/cart"}
          className="inline-flex items-center justify-center tapa text-white border-0 py-2 px-3 focus:outline-none rounded text-base mt-4 md:mt-0 hover:scale-110 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            class="bi bi-cart haha"
            viewBox="0 0 16 16"

          >
            {" "}
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />{" "}
          </svg>
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            className="w-4 h-4 ml-1 haha"
            viewBox="0 0 24 24"
          >
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </Link>
      </div>
    
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default Navbar;

