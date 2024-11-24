import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full text-white">
      <div className="flex flex-col items-center justify-center py-16 px-8 md:px-20 lg:px-32">
        {/* Header */}
        <h2 className="text-2xl font-500 md:text-3xl lg:text-4xl mb-6 text-center ">
          Sign up and try Hexnode free for 14 days!
        </h2>

        {/* Input and Get Started button */}
        <div className="flex flex-col sm:flex-row gap-4 mb-6 w-full max-w-lg">
          <input
            type="email"
            placeholder="Your Work Mail"
            className="text-black flex-1 px-4 py-2 text-lg border rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <button className="bg-red-600 hover:bg-red-700 text-white text-lg px-6 py-2 rounded-md transition duration-300">
            Get Started
          </button>
        </div>

        {/* Text and Request Demo button */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center text-[#556575]">
          <p>No credit cards required.</p>
          <a
            href="#"
            className="text-red-600 hover:text-red-700 text-lg flex items-center gap-2"
          >
            Request Demo <FaArrowRight />
          </a>
        </div>
      </div>

      <div className="text-[#556575] bg-[#f2f2f2] text-sm py-4 px-8 md:px-20 lg:px-32 flex flex-col md:flex-row items-center justify-between gap-4">
        <span>Terms of Use - Privacy - Cookies</span>
        <span>Copyright © 2024 Mitsogo Inc. All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
