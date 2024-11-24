import React, { Suspense } from "react";
import { platforms } from "../../data/platformData";

const Platform = () => {
  return (
    <section className="py-16 md:py-24 lg:py-30 bg-white flex items-center justify-center">
      <div className="px-4 md:px-8 lg:px-16 w-full max-w-7xl">
        <div className="text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8 md:mb-12 lg:mb-16">
            Platforms Supported
          </h1>
        </div>
        
        <Suspense fallback={<div className="text-center">Loading platforms...</div>}>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 lg:justify-items-center">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="flex items-center justify-center p-4 w-full"
              >
                <img
                  src={platform.imageUrl}
                  alt={platform.name}
                  loading="lazy"
                  className="w-auto h-auto max-h-[40px] md:max-h-[50px] lg:max-h-[60px] object-contain"
                />
              </div>
            ))}
          </div>
        </Suspense>
      </div>
    </section>
  );
};

export default Platform;