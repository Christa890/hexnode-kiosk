
import heroImage from "../../assets/images/hero-image.png";

import React from "react";

const HeroSection = () => {
  return (
    <section className="bg-[#020a19] pt-16 mb-4 md:pt-20 lg:pt-28">
      <div className="mx-5 lg:mx-20 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="flex flex-col justify-between items-center lg:items-start w-full lg:w-1/2">
          <h1 className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold leading-normal sm:leading-relaxed text-center lg:text-left">
            Turn your devices into kiosks in a few minutes with Hexnode UEM
          </h1>
          
          <div className="mt-8 w-full flex align-center justify-center flex-col sm:flex-row justify-center gap-4 sm:gap-2">
            <input
              type="email"
              placeholder="Enter work email"
              className="w-full sm:w-[260px] lg:w-3/5 h-auto px-6 py-3 text-sm sm:text-base rounded-md border-none outline-none placeholder-gray-400"
            />
            <button className="w-full sm:w-[220px] lg:w-2/5 h-auto bg-[#dd0735] hover:bg-[#b6062a] text-white px-4 py-3 text-sm sm:text-base rounded-md transition-colors duration-300">
              GET STARTED NOW!
            </button>
          </div>
        </div>

        <div className="w-full lg:w-1/2 overflow-hidden order-first lg:order-last">
          <img
            src={heroImage}
            alt="Kiosk Management"
            className="w-full sm:w-4/5 lg:w-full mx-auto h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;