import React, { useState } from 'react';
import logo from '../assets/logo.png'; // Make sure this path is correct

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed top-0 left-0 w-full px-6 py-4 bg-black z-50 flex items-center justify-between">
      {/* Logo */}
      <div className="flex items-center">
        <img src={logo} alt="Gericht Logo" className="h-10 object-contain" />
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2">
        <ul className="flex space-x-10 text-base">
          {['Home', 'Pages', 'Contact Us', 'Blog', 'Landing'].map((item) => (
            <li key={item}>
              <a
                href="#"
                className="relative text-white hover:text-yellow-600 transition-colors duration-300 after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Desktop Auth Options */}
      <div className="hidden lg:flex items-center text-base">
        <a
          href="#"
          className="relative text-white hover:text-yellow-600 transition-colors duration-300 after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
        >
          Log In / Registration
        </a>

        <div className="mx-6 h-7 w-px bg-gray-600"></div>

        <a
          href="#"
          className="relative text-white hover:text-yellow-600 transition-colors duration-300 after:content-[''] after:absolute after:h-0.5 after:w-0 after:left-0 after:-bottom-1 after:bg-yellow-600 hover:after:w-full after:transition-all after:duration-300"
        >
          Book Table
        </a>
      </div>

      {/* Mobile Hamburger */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="lg:hidden text-white focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-black text-white px-6 py-4 flex flex-col space-y-4 text-sm">
          {['Home', 'Pages', 'Contact Us', 'Blog', 'Landing'].map((item) => (
            <a key={item} href="#" className="hover:text-yellow-600">
              {item}
            </a>
          ))}
          <hr className="border-gray-700" />
          <a href="#" className="hover:text-yellow-600">
            Log In / Registration
          </a>
          <a href="#" className="hover:text-yellow-600">
            Book Table
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;
