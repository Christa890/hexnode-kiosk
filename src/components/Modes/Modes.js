import React, { useState, useEffect } from "react";
import { modesData } from "../../data/modeData";
import { FaCheck, FaChevronUp, FaChevronDown } from "react-icons/fa";

const Modes = () => {
  const [visibleTabs, setVisibleTabs] = useState({ start: 0, end: 4 });
  const [selectedMode, setSelectedMode] = useState(null);
  const [activeTabId, setActiveTabId] = useState(null);
  const [isDesktopOrTablet, setIsDesktopOrTablet] = useState(true);
  const [slideDirection, setSlideDirection] = useState("right");
  const [isAnimating, setIsAnimating] = useState(false);
  const [prevContent, setPrevContent] = useState(null);

  useEffect(() => {
    setSelectedMode(modesData[0]);
    setActiveTabId(modesData[0].id);
    setPrevContent(modesData[0]);

    const handleResize = () => {
      const width = window.innerWidth;
      const isDesktop = width >= 1024;
      const isTablet = width >= 768 && width < 1024;

      setIsDesktopOrTablet(isTablet || isDesktop);
      setVisibleTabs({
        start: 0,
        end: isDesktop ? 4 : isTablet ? 3 : modesData.length,
      });
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleTabClick = (tab) => {
    if (selectedMode?.id === tab.id) {
      setSelectedMode(null);
      return;
    }

    const currentIndex = selectedMode ? modesData.findIndex(m => m.id === selectedMode.id) : -1;
    const newIndex = modesData.findIndex(m => m.id === tab.id);
    const newDirection = currentIndex < newIndex ? "right" : "left";
    
    setSlideDirection(newDirection);
    setIsAnimating(true);
    setPrevContent(selectedMode);

    setTimeout(() => {
      setSelectedMode(tab);
      setTimeout(() => {
        setIsAnimating(false);
      }, 50);
    }, 300);

    setActiveTabId(tab.id);

    const tabIndex = modesData.indexOf(tab);
    if (tabIndex === visibleTabs.end - 1 && visibleTabs.end < modesData.length) {
      setVisibleTabs({
        start: visibleTabs.start + 1,
        end: visibleTabs.end + 1,
      });
    } else if (tabIndex === visibleTabs.start && visibleTabs.start > 0) {
      setVisibleTabs({
        start: visibleTabs.start - 1,
        end: visibleTabs.end - 1,
      });
    }
  };

  const renderContent = (mode, animationClass) => (
    <div className={`absolute w-full ${animationClass}`}>
      <div className="grid md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 items-start">
        <div className="space-y-3 md:space-y-4 lg:space-y-6">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800">
            {mode.heading}
          </h3>
          <ul className="space-y-2 md:space-y-3 lg:space-y-4">
            {mode.description.map((point, index) => (
              <li key={index} className="flex items-start gap-2 md:gap-3">
                <span className="text-green-500 mt-1">
                  <FaCheck className="w-3 h-3 md:w-4 md:h-4 lg:w-5 lg:h-5" />
                </span>
                <span className="text-sm md:text-base lg:text-lg text-gray-600">
                  {point}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg mt-4 md:mt-0">
          <img
            src={mode.imgSrc}
            alt={mode.name}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-4 px-4 md:px-8 lg:px-20 md:py-8 lg:py-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 md:mb-8 lg:mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Specific kiosk modes for unique use cases
          </h2>
        </div>

        {isDesktopOrTablet ? (
          <div className="relative">
            <div className="flex justify-center mb-6 md:mb-8 lg:mb-12 overflow-hidden">
              <div className="flex transition-transform duration-300 w-full">
                {modesData
                  .slice(visibleTabs.start, visibleTabs.end)
                  .map((tab) => (
                    <div
                      key={tab.id}
                      className={`flex items-center justify-center py-2 md:py-3 lg:py-4 cursor-pointer transition-all duration-300 flex-1 ${
                        activeTabId === tab.id
                          ? "bg-black text-white"
                          : "bg-white text-gray-800"
                      }`}
                      onClick={() => handleTabClick(tab)}
                    >
                      <span className="text-base md:text-xl lg:text-2xl text-center px-2">
                        {tab.name}
                      </span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="relative overflow-hidden" style={{ minHeight: '400px' }}>
              {isAnimating && prevContent && renderContent(
                prevContent,
                `transition-all duration-500 transform ${
                  slideDirection === "right"
                    ? "translate-x-full opacity-0"
                    : "-translate-x-full opacity-0"
                }`
              )}
              
              {selectedMode && renderContent(
                selectedMode,
                `transition-all duration-500 transform ${
                  isAnimating
                    ? slideDirection === "left"
                      ? "-translate-x-full"
                      : "translate-x-full"
                    : "translate-x-0 opacity-100"
                }`
              )}
            </div>
          </div>
        ) : (
          <div>
            {modesData.map((tab) => {
              const isActive = selectedMode?.id === tab.id;
              return (
                <div
                  key={tab.id}
                  className={`border border-gray-200 rounded-lg overflow-hidden transition-colors duration-300 ${
                    isActive ? "border-black" : ""
                  }`}
                >
                  <div
                    className={`flex items-center justify-between p-3 md:p-4 cursor-pointer transition-colors duration-300 ${
                      isActive
                        ? "bg-black text-white"
                        : "bg-white text-gray-800"
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    <span className="text-sm md:text-base lg:text-lg font-medium">
                      {tab.name}
                    </span>
                    {isActive ? (
                      <FaChevronUp className="w-4 h-4" />
                    ) : (
                      <FaChevronDown className="w-4 h-4" />
                    )}
                  </div>
                  <div
                    className={`transition-all duration-300 overflow-hidden ${
                      isActive
                        ? "max-h-[1000px] opacity-100"
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="p-3 md:p-4 space-y-3 md:space-y-4">
                      <h3 className="text-lg md:text-xl font-semibold text-gray-800">
                        {tab.heading}
                      </h3>
                      <div className="aspect-video rounded-lg overflow-hidden">
                        <img
                          src={tab.imgSrc}
                          alt={tab.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <ul className="space-y-2 md:space-y-3">
                        {tab.description.map((point, index) => (
                          <li key={index} className="flex items-start gap-2 md:gap-3">
                            <span className="text-green-500 mt-1">
                              <FaCheck className="w-3 h-3 md:w-4 md:h-4" />
                            </span>
                            <span className="text-sm md:text-base text-gray-600">
                              {point}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Modes;