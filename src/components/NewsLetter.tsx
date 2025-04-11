import React from 'react';
import spoon from '../assets/spoon.png';
import facebook from '../assets/facebook.png';
import twitter from '../assets/twitter.png';
import instagram from '../assets/instagram.png';

function NewsLetter() {
  return (
    <>
      {/* Newsletter Section */}
      <div className="bg-[#0C0B08] text-white px-4 py-16 flex justify-center items-center shadow-[0_0_60px_rgba(255,255,255,0.1)]">
        <div className="w-full max-w-6xl text-center border border-[#333] p-10 md:p-20 bg-[#0C0B08]">
          <p className="text-[#DCCA87] text-lg font-serif mb-2">Newsletter</p>
          <img src={spoon} alt="spoon" className="mx-auto w-8 mb-4" />
          <h1 className="text-[#DCCA87] text-4xl md:text-6xl font-serif mb-4">
            Subscribe To Our Newsletter
          </h1>
          <p className="text-gray-300 mb-10">And never miss latest Updates!</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 w-full max-w-3xl mx-auto">
            <input
              type="email"
              placeholder="Email Address"
              className="w-full md:flex-1 px-4 py-3 bg-transparent border border-[#DCCA87] text-white placeholder:text-gray-400 focus:outline-none"
            />
            <button className="bg-[#DCCA87] text-black px-8 py-3 hover:bg-[#e3c66d] transition uppercase">
              Subscribe
            </button>

            
          </div>
        </div>
      </div>


    {/* Footer Section */}
    <div className="bg-[#0C0B08] text-white py-16 px-4">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left gap-10">
        
        {/* Contact Us */}
        <div className="w-full md:w-1/3">
        <h3 className="text-[#DCCA87] text-2xl font-serif mb-4">Contact Us</h3>
        <p className="text-gray-300 mb-2">9 W 53rd St, New York, NY 10019, USA</p>
        <p className="text-gray-300">+1 212-344-1230</p>
        <p className="text-gray-300">+1 212-555-1230</p>
        </div>

        {/* Center Info */}
        <div className="w-full md:w-1/3 flex flex-col items-center justify-center">
        <h1 className="text-[#DCCA87] text-4xl font-serif mb-4">GERÍCHT</h1>
        <p className="text-gray-300 italic mb-4 max-w-xs text-center">
            "The best way to find yourself is to lose yourself in the service of others."
        </p>
        <img src={spoon} alt="spoon" className="w-8 mb-4" />
        <div className="flex gap-4">
            <img src={facebook} alt="facebook" className="w-5 h-5 cursor-pointer" />
            <img src={twitter} alt="twitter" className="w-5 h-5 cursor-pointer" />
            <img src={instagram} alt="instagram" className="w-5 h-5 cursor-pointer" />
        </div>
        </div>

        {/* Working Hours */}
        <div className="w-full md:w-1/3 md:text-right">
        <h3 className="text-[#DCCA87] text-2xl font-serif mb-4">Working Hours</h3>
        <p className="text-gray-300 mb-2">Monday-Friday:</p>
        <p className="text-gray-300 mb-4">08:00 am -12:00 am</p>
        <p className="text-gray-300 mb-2">Saturday-Sunday:</p>
        <p className="text-gray-300">07:00 am -11:00 pm</p>
        </div>
    </div>
    </div>

    {/* Copyright */}
    <div className="bg-[#0C0B08] text-gray-500 text-sm text-center py-6">
    2021 Gerícht. All Rights reserved.
    </div>

    </>
  );
}

export default NewsLetter;
