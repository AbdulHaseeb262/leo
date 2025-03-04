import React, { useState, useEffect, useRef } from "react";
import Layout from "../Layout";
import Header from "../components/header/v1/Header";
import Banner from "../sections/banner/v6/Banner";
import Footer from "../components/Footer";
import Featured from "../components/Featured";
import "../global.css"; 
// Import Swiper and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const roadmapPhases = [
  {
    phase: "PHASE 1",
    color: "bg-[#FFA336]",
    items: [
      "Research and Development",
      "Token Contract Deployment",
      "Create Social Media Channels",
      "Acquire Marketing Partners",
    ],
  },
  {
    phase: "PHASE 2",
    color: "bg-[#8A2BE2]",
    items: [
      "Start of Token Presale",
      "Marketing Drive Begins",
      "Get $T Trending",
    ],
  },
  {
    phase: "PHASE 3",
    color: "bg-[#FF00A6]",
    items: ["End of Presale", "Token Launch on DEX", "Trend on DexTools"],
  },
  {
    phase: "PHASE 4",
    color: "bg-[#FF4500]",
    items: ["CoinGecko & CoinMarketCap", "Full P2E Game", "CEX Listings"],
  },
];

const HomeV6 = () => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" && window.innerWidth < 768
  );
  const swiperRef = useRef(null);

  // Update mobile state on resize
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(typeof window !== "undefined" && window.innerWidth < 768);
      if (swiperRef.current && swiperRef.current.swiper) {
        swiperRef.current.swiper.update();
      }
    };
    
    if (typeof window !== "undefined") {
      window.addEventListener("resize", handleResize);
      
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  // On slide change, update currentSlide (always 1-3)
  const onSwiperSlideChange = (swiper) => {
    const newIndex = (swiper.realIndex % 3) + 1;
    setCurrentSlide(newIndex);
  };

  // Only on desktop, add a custom class to the visible active slide
  useEffect(() => {
    if (swiperRef.current && swiperRef.current.swiper && !isMobile) {
      const swiper = swiperRef.current.swiper;
      // Remove our custom class from all slides
      swiper.slides.forEach((slide) => slide.classList.remove("activeClear"));
      // For desktop, active slide = loopedSlides + realIndex
      const activeIndex = swiper.loopedSlides + swiper.realIndex;
      const activeSlide = swiper.slides[activeIndex];
      if (activeSlide) {
        activeSlide.classList.add("activeClear");
      }
    }
  }, [currentSlide, isMobile]);

  const handleDownload = () => {
    const pdfUrl =
      "https://drive.google.com/uc?export=download&id=141DCHJ1UhyReS4nSeiNZY-13ElF90eEm";
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "white-paper.pdf"; // Suggested file name
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const goToPrevSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const goToNextSlide = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <Layout pageTitle="Gittu - Home Six">
      <div className="overflow-x-hidden w-full">
        <Header variant="v5" />
        <Banner />
        
        {/* Featured Section with auto-sliding */}
        <Featured />

        <section>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div>
              <img src="./bingo.png" alt="bingo" className="w-full h-auto" />
            </div>
          </div>
        </section>
        
        {/* About Us Section */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8" id="about">
          <div className="max-w-[1340px] mx-auto bg-white/20 py-[60px] rounded-lg border-2 border-solid border-black shadow-[0px_4px_0px_black]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center px-4 lg:px-14">
              {/* Left Column */}
              <div className="col-span-full lg:col-span-7 rounded-lg border-[3px] border-solid border-black overflow-hidden">
                <div className="py-5 px-5 bg-bgPrimary text-white  border-b-[4px] bg-[rgb(255,163,54)] border-solid border-black">
                  <h4 className="text-xl leading-[32px] text-center font-kids-magazine text-stroke-2 uppercase drop-shadow-[0px_1px_0px_black]">
                    TUMPIDENTAL TOWER
                  </h4>
                </div>
                <div className="p-5 lg:px-10 lg:py-10 text-center bg-[#FFF3E5]">
                  <h4 className="mb-4 font-kids-magazine text-stroke-2 drop-shadow-[0px_3px_0px_black] uppercase">
                    ABOUT US
                  </h4>
                  <p className="text-sm leading-5 text-black titillium-web-semibold">
                    The visual inspiration for the game comes from Don&apos;t Starve and
                    Oxygen Not Included, both of which demonstrate that 2D flat
                    hand-drawn cartoon-style games can reduce visual fatigue for
                    players, allowing them to enjoy a longer gaming experience.
                    Similarly, Trumpidential Tower adopts a 2D flat presentation and
                    hand-drawn art style, where players can earn substantial
                    cryptocurrency through long gaming sessions while enjoying the fun
                    of management.
                  </p>
                  <p className="text-sm leading-5 text-black titillium-web-semibold mt-4">
                    Trumpidential Tower is a simulation and management game where
                    players need to build and manage a skyscraper hotel. By setting up
                    more facilities to earn cryptocurrency and expanding the hotel space
                    to accommodate more diverse hotel amenities.
                  </p>
                </div>
              </div>
              {/* Right Column */}
              <div className="col-span-full lg:col-span-5">
                <img
                  src="./game.png"
                  alt="Game Character"
                  className="w-full h-auto rounded-lg transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section
          id="roadmap"
          className="pt-14 pb-24 bg-cover bg-no-repeat bg-center px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('./roadmap-bg.png')" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="mb-[60px] ">
            <h2 className="!text-[40px] lg:!text-[32px] leading-[51px] -tracking-[.1em] text-center uppercase font-kids-magazine text-stroke-2 drop-shadow-[0px_8px_0px_black]">
  ROADMAP
</h2>

            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 justify-items-center gap-8 lg:gap-x-24 lg:gap-y-24 w-full max-w-4xl mx-auto">
              {roadmapPhases.map((phase, index) => (
                <div key={index} className="relative w-full max-w-xs">
                  <div
                    className={`${phase.color} text-base text-white py-3 px-4 rounded-t-lg font-kids-magazine inline-block border-2 border-solid border-black text-stroke-1 text-shadow-3`}
                  >
                    {phase.phase}
                  </div>
                  <div className="bg-white rounded-b-lg rounded-tr-lg py-8 pl-8 pr-4 border-2 border-solid border-black min-h-[200px]">
                    <ul className="">
                      {phase.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="text-xl titillium-web-bold text-black flex items-center"
                        >
                          <span className={`w-[6px] h-2 bg-black mr-2`}></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="tokenomic"
          className="py-12 bg-cover bg-no-repeat bg-center px-4 sm:px-6 lg:px-8"
          style={{ backgroundImage: "url('./tokenomic-bg.png')" }}
        >
          <div className="max-w-7xl mx-auto">
          <h2 className="mb-[60px] !text-[40px] lg:!text-[32px] leading-[51px] -tracking-[.1em] text-center uppercase font-kids-magazine text-stroke-2 drop-shadow-[0px_8px_0px_black]">
  Tokenomic
</h2>

            <div className="rounded-lg border-2 border-solid border-black shadow-[0px_4px_0px_black] overflow-hidden">
              <div className="flex flex-col lg:flex-row gap-8 justify-between items-center py-4 bg-[rgb(255,163,54)] px-5 text-white border-b-2 border-solid border-black">
                <h6 className="text-center lg:text-left text-xl font-kids-magazine text-stroke-2 uppercase drop-shadow-[0px_2px_0px_black]">
                  Token Features
                </h6>
                <h6 className="text-center lg:text-left text-xl font-kids-magazine text-stroke-2 uppercase drop-shadow-[0px_2px_0px_black]">
                  9.4 Billion Tokens
                </h6>
              </div>
              <div className="bg-white/20 shadow-[0px_4px_0px_black]">
                <h4 className="text-xl sm:text-2xl lg:text-3xl text-white titillium-web-semibold px-4 sm:px-6 pt-6 pb-12">
                  $T is the in-game currency used for building and decorating the
                  hotel, hiring staff, and operating the casino. By making the
                  hotel more luxurious, enriching the gambling game offerings, and
                  adding more hotel facilities, you can achieve a higher rating.
                  Higher-rated hotels attract high-spending guests, allowing you
                  to earn more $T.
                </h4>
                <div className="relative flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-8 px-4 sm:px-8 xl:pl-[84px] xl:pr-16 pb-[84px]">
                  <div className="w-full lg:w-[362px]">
                    <h6 className="bg-bgPrimary font-kids-magazine bg-[rgb(255,163,54)] text-stroke-2 text-shadow-3 uppercase text-base text-white py-3 px-4 rounded-t-lg inline-block border-2 border-b-0 border-solid border-black">
                      Token Distribution
                    </h6>
                    <div className="bg-white rounded-b-lg rounded-tr-lg py-8 px-4 sm:px-8 lg:py-8 lg:px-14 border-2 border-solid border-black">
                      <img
                        src="./tokenomic-chart.png"
                        alt="tokenomic-chart"
                        className="mx-auto w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
                    <div className="bg-white p-4 rounded-lg border-2 border-solid border-black w-full lg:w-[310px]">
                      <span className="bg-bgPrimary titillium-web-bold text-base text-black px-[6px] py-[2px] rounded-[4px] inline-block border border-solid border-black">
                        50%
                      </span>
                      <h6 className="py-2 text-sm leading-[22px] font-kids-magazine uppercase text-stroke-1 text-white text-shadow-3">
                        Presale
                      </h6>
                      <p className="text-2xl titillium-web-semibold text-black">
                        4,700,000,000
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-solid border-black w-full lg:w-[310px]">
                      <span className="bg-[#8A2BE2] titillium-web-bold text-base text-black px-[6px] py-[2px] rounded-[4px] inline-block border border-solid border-black">
                        6.5%
                      </span>
                      <h6 className="py-2 text-sm font-kids-magazine uppercase text-stroke-1 text-white text-shadow-3">
                        COMMUNITY REWARDS
                      </h6>
                      <p className="text-2xl titillium-web-semibold text-black">
                        611,000,000
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-solid border-black w-full lg:w-[310px]">
                      <span className="bg-[#00D1FF] titillium-web-bold text-base text-black px-[6px] py-[2px] rounded-[4px] inline-block border border-solid border-black">
                        11.5%
                      </span>
                      <h6 className="py-2 text-sm font-kids-magazine uppercase text-stroke-1 text-white text-shadow-3">
                        LIQUIDITY
                      </h6>
                      <p className="text-2xl titillium-web-semibold text-black">
                        1,081,000,000
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-solid border-black w-full lg:w-[310px]">
                      <span className="bg-[#FF00A6] titillium-web-bold text-base text-black px-[6px] py-[2px] rounded-[4px] inline-block border border-solid border-black">
                        10%
                      </span>
                      <h6 className="py-2 text-sm font-kids-magazine uppercase text-stroke-1 text-white text-shadow-3">
                        MARKETING
                      </h6>
                      <p className="text-2xl titillium-web-semibold text-black">
                        940,000,000
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-solid border-black w-full lg:w-[310px]">
                      <span className="bg-[#FFD700] titillium-web-bold text-base text-black px-[6px] py-[2px] rounded-[4px] inline-block border border-solid border-black">
                        10%
                      </span>
                      <h6 className="py-2 text-sm font-kids-magazine uppercase text-stroke-1 text-white text-shadow-3">
                        PROJECT FUND
                      </h6>
                      <p className="text-2xl titillium-web-semibold text-black">
                        940,000,000
                      </p>
                    </div>
                    <div className="bg-white p-4 rounded-lg border-2 border-solid border-black w-full lg:w-[310px]">
                      <span className="bg-[#FF4500] titillium-web-bold text-base text-black px-[6px] py-[2px] rounded-[4px] inline-block border border-solid border-black">
                        12%
                      </span>
                      <h6 className="py-2 text-sm font-kids-magazine uppercase text-stroke-1 text-white text-shadow-3">
                        STAKING
                      </h6>
                      <p className="text-2xl titillium-web-semibold text-black">
                        1,128,000,000
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Buy Section with Fixed Sliders */}
        <section className="py-20 px-4 sm:px-6 lg:px-8" id="how-to-play">
          <div className="max-w-7xl mx-auto relative">
          <h2 className="mb-[60px] !text-[40px] lg:!text-[32px] leading-[51px] -tracking-[.1em] text-center uppercase font-kids-magazine text-stroke-2 drop-shadow-[0px_8px_0px_black]">
  How to Buy
</h2>

            <Swiper
              pagination={{ clickable: true }}
              loop={true}
              spaceBetween={30}
              centeredSlides={true}
              slidesPerView={isMobile ? 1 : 3}
              breakpoints={{
                640: {
                  slidesPerView: 1,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
              }}
              modules={[Pagination]}
              className="mySwiper"
              ref={swiperRef}
              allowTouchMove={true}
              simulateTouch={true}
              onSlideChange={onSwiperSlideChange}
            >
              {/* Slide 1 */}
              <SwiperSlide className="transition-transform duration-300 flex justify-center items-center py-4">
                <div className="bg-white h-[280px] w-full max-w-full p-3">
                  <button className="bg-[#FFA336] w-full h-14 text-center rounded border-2 border-black drop-shadow-[0px_5px_0px_black]">
                    <p className="mb-8 lg:text-[16px] text-lg text-center uppercase font-kids-magazine text-stroke-2 drop-shadow-[0px_4px_0px_black] mt-2">
                      1.Wallet
                    </p>
                  </button>
                  <p className="titillium-web-semibold text-black mt-4 text-lg tracking-tighter">
                    Set up a compatible cryptocurrency wallet (e.g., MetaMask,
                    Trust Wallet). Transfer ETH, BNB, or other accepted
                    cryptocurrencies to your wallet.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-6">
                    <button onClick={goToPrevSlide} className="text-black">
                      <img
                        src="./left-arrow.png"
                        alt="Left"
                        className="w-8 h-8"
                      />
                    </button>
                    <button onClick={goToNextSlide} className="text-black">
                      <img
                        src="./right-arrow.png"
                        alt="Right"
                        className="w-8 h-8"
                      />
                    </button>
                  </div>
                  <p className="text-black titillium-web-semibold text-center mt-2">{`${currentSlide} of 3`}</p>
                </div>
              </SwiperSlide>

              {/* Slide 2 */}
              <SwiperSlide className="transition-transform duration-300 relative flex justify-center items-center py-4">
                <div className="bg-white h-[280px] w-full max-w-full p-3">
                  <button className="bg-[#8a2be2] w-full h-14 text-center rounded border-2 border-black drop-shadow-[0px_5px_0px_black]">
                    <p className="mb-8 lg:text-[16px] text-lg text-center uppercase font-kids-magazine text-stroke-2 drop-shadow-[0px_4px_0px_black] mt-2">
                      2.CONNECT
                    </p>
                  </button>
                  <p className="titillium-web-semibold text-black mt-4 text-lg tracking-tighter">
                    Visit our presale page and connect your wallet.
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-20">
                    <button onClick={goToPrevSlide} className="text-black">
                      <img
                        src="./left-arrow.png"
                        alt="Left"
                        className="w-8 h-8"
                      />
                    </button>
                    <button onClick={goToNextSlide} className="text-black">
                      <img
                        src="./right-arrow.png"
                        alt="Right"
                        className="w-8 h-8"
                      />
                    </button>
                  </div>
                  <p className="text-black titillium-web-semibold text-center mt-2">{`${currentSlide} of 3`}</p>
                </div>
              </SwiperSlide>

              {/* Slide 3 */}
              <SwiperSlide className="transition-transform duration-300 flex justify-center items-center py-4">
                <div className="bg-white h-[280px] w-full max-w-full p-3">
                  <button className="bg-[#ff00a6] w-full h-14 text-center rounded border-2 border-black drop-shadow-[0px_5px_0px_black]">
                    <p className="mb-8 lg:text-[16px] text-lg text-center uppercase font-kids-magazine text-stroke-2 drop-shadow-[0px_4px_0px_black] mt-2">
                      3.CLAIM
                    </p>
                  </button>
                  <p className="titillium-web-semibold text-black mt-4 text-lg tracking-tighter">
                    Select the amount of $T you wish to purchase, confirm the
                    transaction
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-14">
                    <button onClick={goToPrevSlide} className="text-black">
                      <img
                        src="./left-arrow.png"
                        alt="Left"
                        className="w-8 h-8"
                      />
                    </button>
                    <button onClick={goToNextSlide} className="text-black">
                      <img
                        src="./right-arrow.png"
                        alt="Right"
                        className="w-8 h-8"
                      />
                    </button>
                  </div>
                  <p className="text-black text-center titillium-web-semibold mt-2">{`${currentSlide} of 3`}</p>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </section>

        <Footer />
      </div>
    </Layout>
  );
};

export default HomeV6;