import spoon from '../assets/spoon.png';
import findus from '../assets/findus.png';

function FindUs() {
  return (
    <div className="bg-[#0C0B08] text-[#DCCA87] flex flex-col md:flex-row justify-center items-center gap-12 md:gap-40 px-4 sm:px-6 md:px-10 py-12 md:py-20">
      
      {/* Left Section */}
      <div className="w-full max-w-lg text-center md:text-left mb-10 md:mb-0">
        <div className="mb-4 flex flex-col items-center md:items-start">
          <span className="text-white text-lg font-light mb-1">Contact</span>
          <img src={spoon} alt="spoon" className="w-8 h-10 mt-1" />
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-[60px]  font-normal text-[#DCCA87] leading-tight mb-6">
          Find Us
        </h1>

        <p className="text-gray-300 mb-6 px-2 md:px-0">
          Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
        </p>

        <h4 className="text-[#DCCA87] text-xl mb-2">Opening Hours</h4>
        <p className="text-gray-300">Mon - Fri: 10:00 am - 02:00 am</p>
        <p className="text-gray-300 mb-6">Sat - Sun: 10:00 am - 03:00 am</p>

        <button className="bg-amber-200/90 text-gray-900 px-6 py-3 font-light text-sm hover:bg-amber-300 transition-colors">
          Visit Us
        </button>
      </div>

      {/* Right Image */}
      <div className="w-full max-w-md px-4 sm:px-0">
        <img
          src={findus}
          alt="find us"
          className="w-full object-contain"
        />
      </div>
    </div>
  );
}

export default FindUs;
