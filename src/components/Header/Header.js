import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import LogoBlack from '../../assets/images/logo-black.svg';
import LogoWhite from '../../assets/images/logo-white.svg';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showTabletTrialButton, setShowTabletTrialButton] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('up');
  
  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const SCROLL_THRESHOLD = 30;

  const updateScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    
    // Immediate logo update based on scroll position
    setIsScrolled(currentScrollY > 0);
    
    // Handle other scroll-dependent states
    if (currentScrollY > lastScrollY.current) {
      if (scrollDirection !== 'down' && 
          Math.abs(currentScrollY - lastScrollY.current) > SCROLL_THRESHOLD) {
        setScrollDirection('down');
      }
    } else {
      if (scrollDirection !== 'up' && 
          Math.abs(currentScrollY - lastScrollY.current) > SCROLL_THRESHOLD) {
        setScrollDirection('up');
      }
    }

    setShowTabletTrialButton(currentScrollY > 200);
    setScrollPosition(currentScrollY);
    
    lastScrollY.current = currentScrollY;
    ticking.current = false;
  }, [scrollDirection]);

  useEffect(() => {
    const handleScroll = () => {
      // Immediate logo update outside of requestAnimationFrame
      setIsScrolled(window.scrollY > 0);
      
      if (!ticking.current) {
        requestAnimationFrame(() => {
          updateScroll();
        });
        ticking.current = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [updateScroll]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  const TrialButton = ({ className = "" }) => (
    <a
      href="/free-trial"
      className={`bg-[#e64a5b] hover:bg-[#DD0735] text-white font-bold px-6 py-3 rounded text-base will-change-transform ${className}`}
      role="link"
      aria-label="Start your 14 days free trial"
    >
      14 Days Free Trial
    </a>
  );

  const showMobileTrialInHeader = scrollPosition > 400 && scrollDirection === 'down';
  const showMobileTrialBelowHeader = scrollPosition > 400 && scrollDirection === 'up';

  // Preload both logo images for instant switching
  return (
    <>
      {/* Preload images */}
      <div className="hidden">
        <img src={LogoBlack} alt="" />
        <img src={LogoWhite} alt="" />
      </div>

      <header
        className={`sticky top-0 z-50 h-[74px] will-change-transform ${
          isScrolled ? 'bg-white' : 'bg-[#020a19]'
        } transition-colors duration-200 ease-in-out shadow-md`}
        role="banner"
      >
        <nav
          className="h-[74px] mx-auto px-4 sm:px-6 xl:px-20 flex items-center justify-between"
          aria-label="Main navigation"
        >
          {/* Logo Container */}
          <div
            className={`flex items-center justify-center hover:scale-110 will-change-transform ${
              showMobileTrialInHeader ? 'md:flex hidden' : 'flex'
            }`}
            role="img"
            aria-label="Website Logo"
          >
            {/* Show both logos and control visibility with opacity */}
            <div className="relative">
              <img
                src={LogoBlack}
                alt="Logo"
                className={`absolute top-0 left-0 h-8 sm:h-10 w-auto transition-opacity duration-75 ${
                  isScrolled ? 'opacity-100' : 'opacity-0'
                }`}
              />
              <img
                src={LogoWhite}
                alt="Logo"
                className={`h-8 sm:h-10 w-auto transition-opacity duration-75 ${
                  isScrolled ? 'opacity-0' : 'opacity-100'
                }`}
              />
            </div>
          </div>

          {/* Mobile Trial Button in Header */}
          {showMobileTrialInHeader && (
            <div className="md:hidden flex-1">
              <TrialButton className="w-full text-center" />
            </div>
          )}

          <div className="flex items-center space-x-4">
            {/* Tablet/Laptop Trial Button */}
            <div 
              className={`hidden md:block xl:hidden transition-opacity duration-200 will-change-transform ${
                showTabletTrialButton ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <TrialButton />
            </div>

            {/* Menu Toggle Button */}
            <button
              className={`xl:hidden p-2 rounded-md z-50 transition-colors duration-200 ${
                isScrolled || isMenuOpen ? 'text-black' : 'text-white'
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <div className="relative w-6 h-6">
                <Menu
                  className={`absolute w-6 h-6 transition-transform duration-200 will-change-transform ${
                    isMenuOpen ? 'opacity-0 scale-50 rotate-45' : 'opacity-100 scale-100 rotate-0'
                  }`}
                />
                <X
                  className={`absolute w-6 h-6 transition-transform duration-200 will-change-transform ${
                    isMenuOpen ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 rotate-45'
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Desktop Trial Button */}
          <div className="hidden xl:block">
            <TrialButton />
          </div>
        </nav>
      </header>

      {/* Rest of the component remains the same */}
      {/* Mobile Trial Button Below Header */}
      {showMobileTrialBelowHeader && (
        <div className="md:hidden sticky top-[74px] z-40 px-4 py-2 bg-white shadow-md will-change-transform">
          <TrialButton className="w-full text-center" />
        </div>
      )}

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity duration-200 ${
          isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none -z-10'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-out Menu */}
      <div
        className={`fixed top-0 right-0 h-screen bg-white transform transition-transform duration-200 will-change-transform ${
          isMenuOpen ? 'translate-x-0 z-50' : 'translate-x-full -z-10'
        } w-full sm:w-1/2`}
      >
        <div className="flex flex-col h-full">
          <div className="h-[74px] flex justify-end px-6 items-center">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-md text-black hover:bg-gray-100 transition-colors duration-200"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
          <div className="flex flex-col px-6 py-10 space-y-6">
            <a
              href="/free-trial"
              className="bg-[#e64a5b] hover:bg-[#DD0735] text-white font-bold px-6 py-4 rounded transition-colors duration-200 text-center text-lg"
            >
              14 Days Free Trial
            </a>
            <a
              href="/login"
              className="border-2 border-[#020a19] text-[#020a19] font-bold px-6 py-4 rounded transition-colors duration-200 text-center text-lg hover:bg-[#020a19] hover:text-white"
            >
              Login
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;