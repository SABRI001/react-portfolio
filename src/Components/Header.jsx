/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive design
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div className={`
      fixed top-0 w-full z-50 flex justify-center 
      ${isMobile ? 'gap-4 px-4 py-3' : 'gap-8 px-4 py-4'}
      bg-white/75 backdrop-blur-sm border-b border-white/20
    `}>
      {['home', 'about', 'portfolio', 'contact'].map((section) => (
        <a 
          key={section}
          href={`#${section}`}
          className={`
            no-underline text-gray-800 font-medium capitalize
            ${isMobile ? 'text-sm px-3 py-2' : 'text-base px-4 py-2'}
            rounded-lg transition-all duration-300 bg-white/10
            hover:bg-blue-500/20 hover:text-blue-600 hover:scale-105
          `}
        >
          {section}
        </a>
      ))}
    </div>
  );
};

export default Header;
