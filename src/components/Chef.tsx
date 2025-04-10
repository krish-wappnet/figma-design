import chef from '../assets/chef.png'; // adjust if needed
import sign from '../assets/sign.png'; // adjust if needed

function Chef() {
  return (
    <div className="w-full bg-[#0C0B08] py-16 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-30">
        {/* Left Image with Gold Frame */}
        <div className="relative w-full md:w-1/2 max-w-md">
          {/* Top-left frame */}
          <div className="absolute -top-5 -left-5 w-[90%] h-[95%] border-t-[8px] border-l-[8px] border-[#DCCA87] z-0"></div>
          {/* Bottom-right frame */}
          <div className="absolute -bottom-5 -right-5 w-[90%] h-[95%] border-b-[8px] border-r-[8px] border-[#DCCA87] z-0"></div>

          {/* Chef Image */}
          <div className="relative z-10 bg-[#1A1A1A] p-1">
            <img 
              src={chef} 
              alt="Chef Kevin Luo" 
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Text Content */}
        <div className="w-full md:w-1/2 text-white">
          {/* Heading */}
          <p className="text-sm text-[#DCCA87] tracking-wider mb-2">Chef’s Word</p>
          <h2 className="text-4xl md:text-5xl font-serif text-[#DCCA87] mb-6">
            What We Believe In
          </h2>

          {/* Quote */}
          <div className="mb-8 text-gray-300 text-sm leading-relaxed italic relative">
            <span className="text-5xl text-white absolute -left-6 top-0">❝</span>
            <p className="pl-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.
              auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
              Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
              Congue iaculis integer curabitur semper sit nunc.
            </p>
          </div>

          {/* Chef Info */}
          <div className="mt-6">
            <h3 className="text-[#DCCA87] text-lg font-serif mb-1">Kevin Luo</h3>
            <p className="text-gray-400 text-sm mb-3">Chef & Founder</p>
            <div className="w-32">
              <img 
                src={sign} 
                alt="Kevin Luo Signature" 
                className="w-full opacity-90"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chef;
