import React, { useState, useEffect, useCallback, memo } from "react";
import { testimonials } from "../../data/testmonialData";
import { logos } from "../../data/logoData";
import prevBtn from "../../assets/images/prev-arrow-icon-black.svg";
import nextBtn from "../../assets/images/next-arrow-icon-black.svg";

// Memoized Testimonial Card Component
const TestimonialCard = memo(({ testimonial }) => (
  <div className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-md w-full">
    <div className="w-full  sm:w-1/3 h-full">
      <img
        src={testimonial.imgUrl}
        alt={testimonial.name}
        loading="lazy"
        className="w-full h-full object-cover rounded-t-2xl md:rounded-l-2xl rounded-tr-none h-full"
      />
    </div>
    <div className="flex flex-col justify-center w-full p-2 md:w-2/3  md:p-4">
      <h3 className="text-xl md:text-2xl font-bold text-[#020a19] text-center md:text-left mb-5">
        {testimonial.text}
      </h3>
      <div className="w-full h-px bg-gray-200 my-5"></div>
      <div className="space-y-2">
        <h3 className="text-lg font-bold text-gray-800 text-center md:text-left">
          {testimonial.name}
        </h3>
        {testimonial.position && (
          <p className="text-sm text-gray-600 text-center md:text-left">
            {testimonial.position}
          </p>
        )}
        <p className="text-sm text-gray-600 text-center md:text-left">
          {testimonial.company.name}
        </p>
      </div>
    </div>
  </div>
));

// Memoized Logo Slider Component
const LogoSlider = memo(({ logoList }) => (
  <>
    {logoList.map((logo, index) => (
      <div key={index} className="flex-shrink-0 w-40 h-16 flex items-center justify-center">
        <img 
          src={logo.imageUrl} 
          alt={logo.name} 
          loading="lazy"
          className="w-full h-auto object-contain" 
        />
      </div>
    ))}
  </>
));

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [logoList, setLogoList] = useState(logos);
  const [isPaused, setIsPaused] = useState(false);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  }, []);

  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        const slider = document.querySelector(".logo-slider");
        if (slider) {
          slider.style.transition = "transform 0.5s ease-in-out";
          slider.style.transform = "translateX(-160px)";

          const handleTransitionEnd = () => {
            slider.style.transition = "none";
            slider.appendChild(slider.firstElementChild);
            slider.style.transform = "translateX(0)";
            slider.removeEventListener("transitionend", handleTransitionEnd);
          };

          slider.addEventListener("transitionend", handleTransitionEnd);
        }
      }, 2000);

      return () => clearInterval(interval);
    }
  }, [isPaused]);

  return (
    <section className="py-20 md:pt-30 pb-30 bg-gray-50">
      <div className="container mx-auto px-4 md:px-20">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          Why should you choose Hexnode
        </h2>

        {/* Testimonial Card Section with Arrows */}
        <div className="relative">
          {/* Left Arrow - Desktop */}
          <button 
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 w-14 h-14 bg-white rounded-lg items-center justify-center z-10 shadow-md"
            onClick={handlePrev}
          >
            <img src={prevBtn} alt="Previous" loading="lazy" />
          </button>

          {/* Testimonial Card */}
          <div className="relative">
            <TestimonialCard testimonial={testimonials[currentIndex]} />
            
            {/* Mobile Arrows */}
            <div className="flex md:hidden justify-center gap-4 mt-4">
              <button 
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md"
                onClick={handlePrev}
              >
                <img src={prevBtn} alt="Previous" loading="lazy" />
              </button>
              <button 
                className="w-14 h-14 bg-white rounded-lg flex items-center justify-center shadow-md"
                onClick={handleNext}
              >
                <img src={nextBtn} alt="Next" loading="lazy" />
              </button>
            </div>
          </div>

          {/* Right Arrow - Desktop */}
          <button 
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 w-14 h-14 bg-white rounded-lg items-center justify-center z-10 shadow-md"
            onClick={handleNext}
          >
            <img src={nextBtn} alt="Next" loading="lazy" />
          </button>
        </div>

        {/* Logos Section */}
        <div className="relative mt-20 overflow-hidden">
          <div 
            className="logo-slider flex transition-transform duration-500 ease-in-out"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <LogoSlider logoList={logoList} />
          </div>
          {/* Gradient Overlays */}
          <div className="absolute inset-y-0 left-0 w-1/6 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-1/6 bg-gradient-to-l from-gray-50 to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;