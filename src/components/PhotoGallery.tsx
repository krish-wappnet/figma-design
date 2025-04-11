import React from 'react';
import image from '../assets/1.png';
import image2 from '../assets/2.png';
import image3 from '../assets/3.png';
import image5 from '../assets/5.png';
import spoonImage from '../assets/spoon.png';

function PhotoGallery() {
  // Gallery images using your imported images
  const galleryImages = [
    {
      id: 1,
      src: image,
      alt: "Ramen with eggs and shrimp"
    },
    {
      id: 2,
      src: image2,
      alt: "Whiskey glass with ice"
    },
    {
      id: 3,
      src: image3,
      alt: "Fried egg on toast"
    },
    {
      id: 4,
      src: image5,
      alt: "Pumpkin soup"
    }
  ];

  return (
    <div className="bg-black h-auto flex items-center justify-center py-8 px-4">
      <div className="max-w-6xl w-full">
        <div className="flex flex-col md:flex-row justify-between items-start mb-8">
          <div className="mb-8 md:mb-0">
            {/* Instagram Label */}
            <div className="flex flex-col items-start mb-4">
              <div className="flex items-center mb-2">
                <span className="text-base md:text-lg font-light tracking-wide text-amber-100/70">Instagram</span>
              </div>
              
              {/* Spoon Image */}
              <img 
                src={spoonImage} 
                alt="Spoon icon" 
                className="h-6 w-auto ml-1"
              />
            </div>
            
            {/* Gallery Title */}
            <h2 className="text-4xl md:text-5xl font-serif text-amber-200/90 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>Photo Gallery</h2>
            
            {/* Placeholder Text */}
            <div className="max-w-md">
              <p className="text-gray-400 text-sm font-light mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
              </p>
            </div>
            
            {/* View More Button */}
            <button className="bg-amber-200/90 text-gray-900 px-6 py-3 font-light text-sm hover:bg-amber-300 transition-colors">
              View More
            </button>
          </div>
          
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 w-full md:w-3/4">
            {galleryImages.map((image) => (
              <div key={image.id} className="relative overflow-hidden h-60 md:h-72">
                {/* Display just the image without overlay for image 2 */}
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoGallery;