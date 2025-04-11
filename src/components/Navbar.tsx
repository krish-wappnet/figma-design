import React from 'react';
import logo from '../assets/logo.png'; // adjust path if needed

const Navbar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-12 py-4 bg-black z-50">
      {/* Logo Image */}
      <div>
        <img src={logo} alt="Gericht Logo" className="h-10 object-contain" />
      </div>

      {/* Navigation - centered on screen */}
      <nav className="absolute left-1/2 transform -translate-x-1/2">
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

      {/* Auth and Booking with partition */}
      <div className="flex items-center text-base">
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
    </div>
  );
};

export default Navbar;
