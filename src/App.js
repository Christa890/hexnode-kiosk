import React from "react";
import Header from "./components/Header/Header";
import HeroSection from "./components/HeroSection/HeroSection";
import LinkContainer from "./components/LinkContainer/LinkContainer";
import Modes from "./components/Modes/Modes";
import Testimonial from "./components/Testmonial/Testimonial";
import Platform from "./components/Platforms/Platform";
import Footer from "./components/Footer/Footer";
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="text-gray-800">
      <Header/>
      <HeroSection/>
      <LinkContainer/>
      <Modes/>
      <Features />
      <Testimonial/>
      <Platform/>
      <Footer/>
    </div>
  );
}

export default App;
