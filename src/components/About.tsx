// src/components/About.tsx
import React from 'react';
import '@fontsource/playfair-display/700.css'; // Playfair Display bold
import knifeImage from '../assets/knife.webp'; // Replace with the actual knife image path

const About: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex items-center justify-center px-12 py-24 bg-[radial-gradient(ellipse_at_center,_rgba(30,30,30,0.7)_0%,_rgba(0,0,0,1)_100%)]">
      {/* Left Section - About Us */}
      <div className="w-5/12 pr-12 flex flex-col items-end z-30">
        <h2 className="font-serif text-5xl text-yellow-200 mb-4">About Us</h2>
        <p className="text-gray-200 text-sm leading-relaxed max-w-md text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultricies vulputate posuere quisque. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="mt-6 bg-yellow-200 text-black px-6 py-2 font-medium hover:bg-yellow-300 transition text-sm">
          Know More
        </button>
      </div>

      {/* Center Image - Knife with G overlay */}
      <div className="relative flex items-center justify-center w-2/12 z-10">
        <div className="relative h-full flex items-center">
          <img
            src={knifeImage}
            alt="Knife"
            className="w-auto h-120 object-contain z-5" // Lowered z-index to z-5
          />
          <div className="absolute text-[500px] font-serif text-yellow-200 opacity-20 z-0 transform  origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            G
          </div>
        </div>
      </div>

      {/* Right Section - Our History */}
      <div className="w-5/12 pl-12 flex flex-col items-start z-30">
        <h2 className="font-serif text-5xl text-yellow-200 mb-4">Our History</h2>
        <p className="text-gray-200 text-sm leading-relaxed max-w-md">
          Adipiscing tempor ultriciesortis odio tellus arcu vulputat. Risus
          placerat morbi vulputate quisque interdum mi aliquam in sed odio
          nec aliquet.
        </p>
        <button className="mt-6 bg-yellow-200 text-black px-6 py-2 font-medium hover:bg-yellow-300 transition text-sm">
          Know More
        </button>
      </div>
    </div>
  );
};

export default About;