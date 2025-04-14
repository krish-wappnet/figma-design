import React from 'react';
import heroImage from '../assets/Hero img.png';
import '@fontsource/playfair-display/700.css'; // Playfair Display bold
import Navbar from './Navbar';
import spoon from '../assets/spoon.png';
import scroll from '../assets/Scroll.png';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white px-6 sm:px-8 md:px-10 lg:px-12 py-8 overflow-hidden">
      <Navbar />

      {/* Left floating hashtag text */}
      <div className="absolute top-1/2 transform -translate-y-1/2 -rotate-90 text-xs tracking-widest text-gray-300 -ml-24 hidden lg:block">
        <span>#Bar</span>
        <span className="mx-4"></span>
        <span>#Gericht</span>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full flex items-center justify-center pt-10 md:pt-16 px-4 sm:px-6 md:px-10 lg:px-12">
  <div className="flex flex-col md:flex-row items-center w-full max-w-6xl">
    
    {/* Left Column */}
    <div className="w-full md:w-1/2 md:pr-8 lg:pr-12 flex flex-col justify-center items-start text-center md:text-left mb-12 md:mb-0">
      {/* Subheading + Spoon */}
      <div className="flex flex-col items-center md:items-start mb-6">
        <span className="text-white text-sm font-light">Chase The New Flavour</span>
        <img src={spoon} alt="spoon" className="w-10 h-10 mt-2" />
      </div>

      {/* Heading */}
      <h1
        className="text-4xl sm:text-5xl md:text-6xl leading-tight text-yellow-200 mb-6"
      >
        The Key To <br />Fine Dining
      </h1>

      {/* Paragraph */}
      <p className="text-gray-300 mb-6 max-w-md text-sm sm:text-base leading-relaxed">
        Sit tellus lobortis sed senectus vivamus molestie. Condimentum
        volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
        aliquam amet tellus.
      </p>

      {/* Button */}
      <button className="w-fit bg-amber-200/90 text-gray-900 px-5 py-3 text-xs sm:text-sm font-light hover:bg-amber-300 transition-colors">
        Explore Menu
      </button>
    </div>

    {/* Right Column (Image) */}
    <div className="w-full md:w-1/2 relative flex justify-center md:justify-end">
      <div className="p-2 sm:p-4 bg-transparent relative">
        <img
          src={heroImage}
          alt="Fine Dining"
          className="block sm:hidden w-full h-auto max-h-[500px] object-contain"
        />
        <img
          src={heroImage}
          alt="Fine Dining"
          className="hidden sm:block w-full max-w-[470px] h-auto object-cover"
        />
      </div>
    </div>
  </div>
</div>


      {/* Pagination */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm z-10 font-serif">
        <span className="text-gray-300">01</span>
        <span className="text-gray-300">—</span>
        <span className="text-gray-300">02</span>
        <span className="text-gray-300">03</span>
        <span className="text-gray-300">04</span>
      </div>

      {/* Scroll Icon */}
      <div className="absolute bottom-6 right-6 flex flex-col items-center space-y-2 z-10">
        <img src={scroll} alt="Scroll Icon" className="h-30 w-15" />
      </div>
    </section>
  );
};

export default Hero;
