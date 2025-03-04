import React from 'react';

const logos = [
  {
    src: "./featured-logo/cryptonews.png",
    alt: "CryptoNewsZ",
  },
  {
    src: "./featured-logo/coincodex.png",
    alt: "CoinCodex",
  },
  {
    src: "./featured-logo/fxstreet.png",
    alt: "FXStreet",
  },
  {
    src: "./featured-logo/the-economic.png",
    alt: "Financial Times",
  },
  {
    src: "./featured-logo/tradingview.png",
    alt: "TradingView",
  }
];

const Featured = () => {
  return (
    <div className="max-w-7xl mx-auto px-8 lg:px-0">
      <div className="bg-bgPrimary">
        <h3 className="lg:text-[32px] text-xl py-2 text-center uppercase font-kids-magazine bg-[rgb(255,163,54)] text-stroke-2">
          Featured In
        </h3>
      </div>
      
      <div className="relative flex gap-10 overflow-hidden bg-white/80">
        <div className="py-12 flex space-x-16 animate-marquee whitespace-nowrap">
          {logos.map((logo, index) => (
            <div
              key={`logo-1-${index}`}
              className="min-w-max flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`logo-2-${index}`}
              className="min-w-max flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>

        <div className="absolute top-0 py-12 flex space-x-16 animate-marquee2 whitespace-nowrap">
          {logos.map((logo, index) => (
            <div
              key={`logo-3-${index}`}
              className="min-w-max flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            </div>
          ))}
          {logos.map((logo, index) => (
            <div
              key={`logo-4-${index}`}
              className="min-w-max flex justify-center items-center"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        
        .animate-marquee {
          animation: marquee 25s linear infinite;
        }
        
        .animate-marquee2 {
          animation: marquee2 25s linear infinite;
        }
        
        /* Pause animation on hover */
        .relative:hover .animate-marquee,
        .relative:hover .animate-marquee2 {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
};

export default Featured;