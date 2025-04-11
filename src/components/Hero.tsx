// src/components/Hero.tsx
import React from 'react';
import heroImage from '../assets/Hero img.png';
import '@fontsource/playfair-display/700.css'; // Playfair Display bold
import Navbar from './Navbar';
import spoon from '../assets/spoon.png'
import scroll from '../assets/Scroll.png'


const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen bg-black text-white px-12 py-8">
      {/* Use the Navbar component (fixed at top) */}
      <Navbar />


      <div className="absolute  top-1/2 transform -translate-y-1/2 -rotate-90 text-xs tracking-widest text-gray-300 -ml-24">
        <span>#Bar</span>
        <span className="mx-4"></span>
        <span>#Gericht</span>
      </div>

      {/* Content Area with improved vertical centering */}
      <div className="relative w-full h-full flex items-center justify-center pt-20 px-12">
        <div className="flex items-center w-full max-w-6xl">
          {/* Left Content Area */}
          <div className="w-1/2 pr-12 flex flex-col justify-center">
        {/* Subheading + Spoon */}
        <div className="flex flex-col items-start mb-6">
          <p className="text-white text-sm font-light">Chase The New Flavour</p>
          <img src={spoon} alt="spoon" className="w-15 h-15" />
        </div>

        {/* Heading */}
        <h1
          className="text-7xl leading-tight text-yellow-200 mb-8"
          style={{ fontFamily: '"Cinzel Decorative", serif' }}
        >
          The Key To <br />Fine Dining
        </h1>

        {/* Paragraph */}
        <p className="text-gray-300 mb-8 max-w-md text-sm leading-relaxed">
          Sit tellus lobortis sed senectus vivamus molestie. Condimentum
          volutpat morbi facilisis quam scelerisque sapien. Et, penatibus
          aliquam amet tellus.
        </p>

        {/* CTA Button (smaller & left aligned) */}
        <button className="w-fit bg-amber-200/90 text-gray-900 px-5 py-3 text-xs font-light hover:bg-amber-300 transition-colors">
        Explore Menu
      </button>
      </div>


          {/* Right Image Area with layered borders */}
          <div className="w-1/2 relative flex justify-end">
  <div className="p-4 bg-transparent relative">
      <img
      src={heroImage}
      alt="Fine Dining"
      className="w-full max-w-[470px] h-auto object-cover"
    />

    {/* Top-right corner border */}
    {/* <div className="absolute top-0 right-0 flex">
      <div className="w-10 h-0 border-t-4 border-yellow-200"></div>
      <div className="w-0 h-10 border-r-4 border-yellow-200"></div>
    </div> */}

    {/* Bottom-left corner border */}
    {/* <div className="absolute bottom-0 left-0 flex flex-col-reverse items-start">
      <div className="w-10 h-0 border-b-4 border-yellow-200"></div>
      <div className="w-0 h-10 border-l-4 border-yellow-200"></div>
    </div> */}
  </div>
</div>


        </div>
      </div>

      {/* Pagination */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 text-sm">
        <span className="text-gray-300">01</span>
        <span className="text-gray-300">—</span>
        <span className="text-gray-300">02</span>
        <span className="text-gray-300">03</span>
        <span className="text-gray-300">04</span>
      </div>

      {/* Scroll */}
      <div className="absolute bottom-8 right-12 flex flex-col items-center space-y-2">
  {/* Scroll Image */}
      <img src={scroll} alt="Scroll Icon" className="h-30 w-15" />

      {/* SCROLL text */}
      {/* <span className="font-serif uppercase text-yellow-300 text-base tracking-widest">
        SCROLL
      </span> */}
    </div>
    </section>
  );
};

export default Hero;