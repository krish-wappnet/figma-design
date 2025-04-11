import image from '../assets/Group 43.png'; // adjust if needed
import laurels from '../assets/laurels.png'; // adjust if needed
import badge from '../assets/badge.png'; // for '2' - Bib Gourmand
import badge2 from '../assets/badge 2.png'; // for '1' - Rising Star
import badge3 from '../assets/badge 3 (3).png'; // for '5' - AA Hospitality
import badge4 from '../assets/badge4.png'; // for '3' - Outstanding Chef

function Laurels() {
  const awards = [
    {
      image: badge,
      title: 'Bib Gourmand',
      description: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      image: badge2,
      title: 'Rising Star',
      description: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      image: badge3,
      title: 'AA Hospitality',
      description: 'Lorem ipsum dolor sit amet, consectetur.'
    },
    {
      image: badge4,
      title: 'Outstanding Chef',
      description: 'Lorem ipsum dolor sit amet, consectetur.'
    }
  ];

  return (
    <div
      className="w-full bg-black bg-opacity-90 p-8 relative min-h-screen"
      style={{
        backgroundImage: 'url("path-to-textured-bg.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Enlarged and repositioned logo */}
      <div className="absolute top-24 left-8 md:top-32 md:left-16 z-10">
        <div className="w-32 h-32 md:w-40 md:h-40 flex items-center justify-center">
          <img
            src={laurels}
            alt="Bite Delight Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      <div className="max-w-6xl mx-auto pt-48">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Left side - Awards */}
          <div className="w-full md:w-1/2 text-white">
            <div className="mb-10">
              <p className="text-sm font-light italic text-yellow-200 mb-2">
                Awards & Recognition
              </p>
              <h2 className="text-5xl font-serif text-yellow-200 mb-10">
                Our Laurels
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start gap-6">
                  <div className="w-16 h-16 flex items-center justify-center">
                    <img
                      src={award.image}
                      alt={award.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div>
                    <h3 className="text-yellow-200 text-xl font-medium mb-1 font-serif">
                      {award.title}
                    </h3>
                    <p className="text-gray-400 text-sm">
                      {award.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Food Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-md overflow-hidden">
              <div className="absolute bottom-0 right-0 w-60 h-60 bg-white bg-opacity-10 rounded-full transform translate-x-1/3 translate-y-1/3 z-0"></div>
              <div className="relative w-full h-[500px] max-w-[555px] overflow-hidden">
                <img
                  src={image}
                  alt="Gourmet dish with tomatoes and herbs"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Laurels;
