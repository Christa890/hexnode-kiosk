import React, { useState } from "react";
import { featuresData } from "../../data/featuresData";
import { FaCheck } from "react-icons/fa";

const Features = () => {
  const [activeFeature, setActiveFeature] = useState(1);
  const [transitionImage, setTransitionImage] = useState(null);
  const [direction, setDirection] = useState("down");
  const [isTransitioning, setIsTransitioning] = useState(false);

  const handleFeatureClick = (id) => {
    if (id === activeFeature || isTransitioning) return;
    setIsTransitioning(true);
    const nextImage = featuresData.find((feature) => feature.id === id).imgSrc;
    setDirection(id > activeFeature ? "down" : "up");
    setTransitionImage(nextImage);
    setTimeout(() => {
      setActiveFeature(id);
      setTransitionImage(null);
      setIsTransitioning(false);
    }, 500);
  };

  const customStyles = `
    @keyframes swipeOutUp {
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(-100%); opacity: 0; }
    }
    @keyframes swipeOutDown {
      from { transform: translateY(0); opacity: 1; }
      to { transform: translateY(100%); opacity: 0; }
    }
    @keyframes swipeInFromTop {
      from { transform: translateY(-100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
    @keyframes swipeInFromBottom {
      from { transform: translateY(100%); opacity: 0; }
      to { transform: translateY(0); opacity: 1; }
    }
  `;

  return (
    <section className="bg-white px-4 md:px-8 lg:px-20">
      <style>{customStyles}</style>
      <div className="pt-8 md:pt-12 lg:pt-16 flex flex-col gap-3 md:gap-4 lg:gap-5">
        {/* Features Heading Section */}
        <div className="features-heading mb-6 md:mb-12 lg:mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-center pb-3 md:pb-4 lg:pb-5">
            What additional possibilities does the Kiosk mode offer?
          </h2>
        </div>

        {/* Features Content */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-5 lg:gap-6">
          {/* Desktop Image Section */}
          <div className="hidden lg:block lg:w-2/5 relative overflow-hidden rounded-lg mr-4 md:mr-5 lg:mr-6">
            <div className="relative w-full h-[400px] md:h-[450px] lg:h-[500px]">
              {/* Current Image */}
              <img
                src={featuresData.find((feature) => feature.id === activeFeature).imgSrc}
                alt={featuresData.find((feature) => feature.id === activeFeature)?.heading}
                className={`absolute w-full h-full object-cover rounded-lg transition-all duration-500 ${
                  transitionImage
                    ? direction === "up"
                      ? "animate-[swipeOutUp_0.5s_forwards]"
                      : "animate-[swipeOutDown_0.5s_forwards]"
                    : ""
                }`}
              />
              
              {/* Transition Image */}
              {transitionImage && (
                <img
                  src={transitionImage}
                  alt="Transition"
                  className={`absolute w-full h-full object-cover rounded-lg ${
                    direction === "up"
                      ? "animate-[swipeInFromBottom_0.5s_forwards]"
                      : "animate-[swipeInFromTop_0.5s_forwards]"
                  }`}
                />
              )}

              {/* Feature Overlay */}
              <div 
                className={`absolute -right-4 bg-white/80 text-black p-3 md:p-4 rounded-lg flex items-center gap-2 md:gap-3 z-10 transition-all duration-300 ${
                  isTransitioning ? 'opacity-0' : 'opacity-100'
                }`}
                style={{
                  top: '50%',
                  transform: 'translateY(-50%)'
                }}
              >
                <FaCheck className="text-green-600 text-sm md:text-base" />
                <span className="text-sm md:text-base whitespace-nowrap">
                  {featuresData.find((feature) => feature.id === activeFeature)?.name}
                </span>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="lg:w-3/5">
            {featuresData.map((feature) => (
              <div
                key={feature.id}
                className="border-b border-gray-200 last:border-b-0 pb-2 md:pb-3 lg:pb-4"
              >
                <h3
                  className={`text-xl md:text-2xl font-bold cursor-pointer py-2 md:py-3 transition-colors duration-300 ${
                    activeFeature === feature.id ? "text-[rgb(231,2,67)]" : "text-black"
                  }`}
                  onClick={() => handleFeatureClick(feature.id)}
                >
                  {feature.heading}
                </h3>

                {activeFeature === feature.id && (
                  <div className="mt-2 md:mt-3 space-y-3 md:space-y-4">
                    {/* Mobile/Tablet Image */}
                    <div className="block lg:hidden w-full relative overflow-hidden rounded-lg">
                      <div className="aspect-w-16 aspect-h-9">
                        <img
                          src={feature.imgSrc}
                          alt={feature.heading}
                          className="w-full h-full object-cover rounded-lg"
                        />
                      </div>
                    </div>

                    <p className="text-base md:text-lg text-gray-600 leading-relaxed md:leading-[2rem]">
                      {feature.description}
                    </p>

                    <button className="mt-2 md:mt-3 px-4 md:px-5 py-2 md:py-3 bg-[rgb(231,2,67)] hover:bg-[#dd0735] text-white rounded-lg transition-colors duration-300 text-sm md:text-base">
                      TRY FOR FREE
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;