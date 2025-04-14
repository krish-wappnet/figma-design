import React from 'react';
import chefImage from '../assets/chef.png'; // Replace with actual path
import spoonImage from '../assets/spoon.png';
import apostropheImage from '../assets/apos.png';
import sign from '../assets/sign.png';
import videoImage from '../assets/Video.png'; // New video image

function Chef() {
  return (
    <div className="bg-black min-h-fit py-16 px-4 ">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center">
          
          {/* Left - Chef Image with Border Accents */}
          <div className="w-full md:w-1/2 relative mb-10 md:mb-0 flex justify-center items-center">
            <div className="relative z-10 max-w-md w-4/5">
              <img 
                src={chefImage} 
                alt="Chef Kevin Luo holding lettuce" 
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Gold Accent Corners */}
            <div className="absolute top-0 left-0 w-20 h-20 bg-amber-200 -z-10"></div>
            <div className="absolute bottom-0 right-0 w-20 h-20 bg-amber-200 -z-10"></div>
          </div>

          {/* Right - Text Content */}
          <div className="w-full md:w-1/2 md:pl-16 flex flex-col justify-center text-left">
            {/* Section Label */}
            <div className="mb-4">
              <div className="flex items-center mb-2">
                <span className="text-amber-200/80 text-sm font-light">Chef’s Word</span>
              </div>
              <img 
                src={spoonImage} 
                alt="Spoon icon" 
                className="h-15 w-auto mb-2"
              />
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl text-amber-200/90 mb-10">
              What We Believe In
            </h2>

            {/* Quote */}
            <div className="relative mb-6 max-w-2xl">
              <img 
                src={apostropheImage} 
                alt="Apostrophe" 
                className="absolute -top-6 -left-6 w-10 h-10 opacity-70"
              />
              <p className="text-gray-400 italic font-light leading-relaxed text-base md:text-lg">
                &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit. auctor sit iaculis in arcu. 
                Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, 
                aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
              </p>
            </div>

            {/* Chef Name & Title */}
            <div className="mb-4">
              <h3 className="text-amber-200/90 text-xl mb-1">Kevin Luo</h3>
              <p className="text-gray-400 text-sm">Chef & Founder</p>
            </div>

            {/* Signature */}
            <div className="mt-4">
              <img 
                src={sign}
                alt="Kevin Luo signature" 
                className="h-40 w-40 opacity-100"
              />
            </div>
          </div>
        </div>

        {/* Bottom Video Section */}
        <div className="relative mt-16">
          <img 
            src={videoImage} 
            alt="Interior restaurant view with play button overlay" 
            className="w-full h-auto object-cover" 
          />

          {/* Optional: Centered play button overlay */}
          <div className="absolute inset-0 flex items-center justify-center">
            <button className="bg-white/70 rounded-full p-4">
              <svg 
                className="w-8 h-8 text-black" 
                fill="currentColor" 
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Chef;
