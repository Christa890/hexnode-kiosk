import React from 'react';
import { linksData } from '../../data/linksData';

const LinkContainer = () => (
  <div className="h-full py-8 flex justify-center items-center bg-[#1a1c2b]">
    <div className="flex flex-col md:flex-row justify-between items-center gap-8 w-[90%]">
      {linksData.map((link, index) => (
        <React.Fragment key={index}>
          <a
            href={link.href || "#"}
            className="flex flex-col justify-center items-start gap-4 text-white text-opacity-60 ion-300"
          >
            {link.imageSrc && (
              <img
                src={link.imageSrc}
                alt={link.altText}
                className="w-20 h-6 sm:w-24 sm:h-8 object-contain"
              />
            )}
            <p className="text-sm sm:text-base text-left">{link.description}</p>
          </a>
          {index < linksData.length - 1 && (
            <div className="hidden md:block w-[1px] h-32 bg-white bg-opacity-60" />
          )}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default LinkContainer;
