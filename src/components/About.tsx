import React from 'react';
import '@fontsource/playfair-display/700.css'; // Playfair Display bold
import knifeImage from '../assets/knife.webp';

const About: React.FC = () => {
  return (
    <div className="relative w-full min-h-screen bg-black text-white flex flex-col lg:flex-row items-center justify-center px-6 lg:px-6 py-16 lg:py-24 bg-[radial-gradient(ellipse_at_center,_rgba(30,30,30,0.7)_0%,_rgba(0,0,0,1)_100%)] space-y-12 lg:space-y-0 lg:space-x-1">
      
      {/* Left Section - About Us */}
      <div className="w-full lg:w-5/12 lg:pr-2 flex flex-col items-center lg:items-end text-center lg:text-right z-30">
        <h2 className="font-serif text-4xl lg:text-5xl text-yellow-200 mb-4">About Us</h2>
        <p className="text-gray-200 text-sm leading-relaxed max-w-md">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultricies vulputate posuere quisque. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button className="bg-amber-200/90 text-gray-900 px-4 py-2 font-light text-sm hover:bg-amber-300 transition-colors mt-4">
          Know More
        </button>
      </div>

      {/* Center Image - Knife with G overlay */}
      <div className="relative w-full lg:w-2/12 flex items-center justify-center z-10">
        <div className="relative flex items-center justify-center">
          <img
            src={knifeImage}
            alt="Knife"
            className="w-auto h-52 sm:h-72 lg:h-120 object-contain z-5"
          />
          <div className="absolute text-[180px] sm:text-[300px] lg:text-[500px] font-serif opacity-10 z-0 transform origin-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            G
          </div>
        </div>
      </div>

      {/* Right Section - Our History */}
      <div className="w-full lg:w-5/12 lg:pl-2 flex flex-col items-center lg:items-start text-center lg:text-left z-30">
        <h2 className="font-serif text-4xl lg:text-5xl text-yellow-200 mb-4">Our History</h2>
        <p className="text-gray-200 text-sm leading-relaxed max-w-md">
          Adipiscing tempor ultriciesortis odio tellus arcu vulputat. Risus
          placerat morbi vulputate quisque interdum mi aliquam in sed odio
          nec aliquet.
        </p>
        <button className="bg-amber-200/90 text-gray-900 px-4 py-2 font-light text-sm hover:bg-amber-300 transition-colors mt-4">
          Know More
        </button>
      </div>
    </div>
  );
};

export default About;
