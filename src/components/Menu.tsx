import cocktailShaker from '../assets/cocktail.png'; // adjust if needed

function Menu() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-16 font-serif">
      <div className="w-full max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
            <p className="text-sm text-gray-300 mb-2 tracking-wide">Menu That Fits You Palatte</p>
            <h2 className="text-5xl text-yellow-200 font-normal relative inline-block">
                Today's Special
                <span className="absolute left-1/2 bottom-[-10px] w-16 h-[1px] bg-yellow-500 transform -translate-x-1/2"></span>
            </h2>
            </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* Wine & Beer Section */}
          <div className="w-full md:w-1/3 space-y-6">
            <h3 className="text-white text-2xl mb-4 text-center md:text-left">Wine & Beer</h3>
            {[
              { title: 'Chapel Hill Shiraz', sub: 'AU | Bottle', price: '$56' },
              { title: 'Catena Malbec', sub: 'AR | Bottle', price: '$59' },
              { title: 'La Vieille Rosé', sub: 'FR | 750 ml', price: '$44' },
              { title: 'Rhino Pale Ale', sub: 'CA | 750 ml', price: '$31' },
              { title: 'Irish Guinness', sub: 'IE | 750 ml', price: '$26' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-200 text-lg">{item.title}</span>
                  <div className="w-24 border-t border-gray-600 mx-4"></div>
                  <span className="text-white text-lg">{item.price}</span>
                </div>
                <p className="text-xs text-gray-200 mt-1">{item.sub}</p>
              </div>
            ))}
          </div>

          {/* Image Section */}
          <div className="w-full md:w-1/3 flex justify-center">
          <img
            src={cocktailShaker}
            alt="Cocktail Shaker"
            className="h-[200px] md:h-[300px] lg:h-[350px] object-contain"
            />
          </div>

          {/* Cocktails Section */}
          <div className="w-full md:w-1/3 space-y-6">
            <h3 className="text-white text-2xl mb-4 text-center md:text-right">Cocktails</h3>
            {[
              { title: 'Aperol Spritz', sub: 'Aperol | Villa Marchesi prosecco | soda | 30ml', price: '$20' },
              { title: "Dark 'N' Stormy", sub: 'Dark rum | Ginger beer | Slice of lime', price: '$16' },
              { title: 'Daiquiri', sub: 'Rum | Citrus juice | Sugar', price: '$10' },
              { title: 'Old Fashioned', sub: 'Bourbon | Brown sugar | Angostura Bitters', price: '$31' },
              { title: 'Negroni', sub: 'Gin | Sweet Vermouth | Campari | Orange garnish', price: '$26' },
            ].map((item, i) => (
              <div key={i}>
                <div className="flex items-center justify-between">
                  <span className="text-yellow-200 text-lg">{item.title}</span>
                  <div className="w-24 border-t border-gray-600 mx-4"></div>
                  <span className="text-white text-lg">{item.price}</span>
                </div>
                <p className="text-xs text-gray-200 mt-1 text-right">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Button */}
        <div className="text-center mt-16">
        <button className="bg-gradient-to-r from-yellow-200 to-yellow-300 text-black px-8 py-3 shadow-md hover:scale-105 transition-all duration-300 font-serif text-base border border-yellow-400">
            View More
        </button>
        </div>

      </div>
    </div>
  );
}

export default Menu;
