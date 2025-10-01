/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

console.log('Arrow SVG import:', arrowSvg);
console.log('Arrow SVG type:', typeof arrowSvg);

/**
 * Home background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
// import image from "../images/profile-img.jpg";
// const image = require("../images/profile-img.jpg");
import profileImage from "../images/design-desk.jpeg";

// Use direct path to public directory image
const imageSrc = "/images/profile-img.jpg";

console.log('Image path:', imageSrc);
console.log('Profile image import:', profileImage);
console.log('Profile image type:', typeof profileImage);

const imageAltText = "Professional software developer workspace";

const Home = ({ name = "", title = "" }) => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Handle responsive design
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
      setIsTablet(window.innerWidth > 768 && window.innerWidth <= 1024);
    };
    
    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  // Example logging
  console.log('Component rendered');
  console.log('Image source:', profileImage || imageSrc);
  console.log('Using imported image:', !!profileImage);

  return (
    <section 
      id="home" 
      className="min-h-screen relative overflow-hidden"
      style={{
        background: `
          linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab),
          radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)
        `,
        backgroundSize: "400% 400%, 100% 100%",
        animation: "gradient-shift 15s ease infinite"
      }}
    >

      {/* Geometric Shapes Animation */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none"
      }}>
        {/* Floating Circles */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`circle-${i}`}
            style={{
              position: "absolute",
              width: `${20 + i * 10}px`,
              height: `${20 + i * 10}px`,
              background: `rgba(255, 255, 255, ${0.1 - i * 0.01})`,
              borderRadius: "50%",
              top: `${10 + i * 12}%`,
              left: `${5 + i * 12}%`,
              animation: `floatingCircle ${4 + i * 0.5}s infinite ease-in-out`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}

        {/* Geometric Triangles */}
        {[...Array(5)].map((_, i) => (
          <div
            key={`triangle-${i}`}
            style={{
              position: "absolute",
              width: 0,
              height: 0,
              borderLeft: `${15 + i * 5}px solid transparent`,
              borderRight: `${15 + i * 5}px solid transparent`,
              borderBottom: `${25 + i * 8}px solid rgba(255, 255, 255, 0.08)`,
              top: `${20 + i * 15}%`,
              right: `${10 + i * 15}%`,
              animation: `rotateTriangle ${6 + i}s infinite linear`,
              animationDelay: `${i * 0.5}s`
            }}
          />
        ))}

        {/* Floating Lines */}
        {[...Array(6)].map((_, i) => (
          <div
            key={`line-${i}`}
            style={{
              position: "absolute",
              width: `${50 + i * 20}px`,
              height: "2px",
              background: `linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent)`,
              top: `${15 + i * 14}%`,
              left: `${8 + i * 13}%`,
              animation: `movingLine ${3 + i * 0.3}s infinite ease-in-out`,
              animationDelay: `${i * 0.4}s`,
              transform: `rotate(${i * 30}deg)`
            }}
          />
        ))}

        {/* Tech-themed Dots Pattern */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`dot-${i}`}
            style={{
              position: "absolute",
              width: "3px",
              height: "3px",
              background: "rgba(37, 99, 235, 0.4)",
              borderRadius: "50%",
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      {/* Wave Animation */}
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        width: "100%",
        height: "200px",
        background: `linear-gradient(180deg, transparent 0%, rgba(37, 99, 235, 0.1) 100%)`,
        zIndex: 1,
        clipPath: "polygon(0 50%, 100% 80%, 100% 100%, 0% 100%)",
        animation: "waveMove 8s ease-in-out infinite"
      }} />

      {/* Digital Matrix Effect */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none",
        opacity: 0.3
      }}>
        {[...Array(15)].map((_, i) => (
          <div
            key={`matrix-${i}`}
            style={{
              position: "absolute",
              left: `${i * 7}%`,
              width: "2px",
              height: "100%",
              background: `linear-gradient(180deg, transparent, rgba(37, 99, 235, 0.8), transparent)`,
              animation: `digitalRain ${3 + Math.random() * 4}s infinite linear`,
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      {/* Orbiting Elements */}
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "600px",
        height: "600px",
        zIndex: 1,
        pointerEvents: "none"
      }}>
        {[...Array(3)].map((_, i) => (
          <div
            key={`orbit-${i}`}
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              width: `${100 + i * 100}px`,
              height: `${100 + i * 100}px`,
              border: "1px solid rgba(255, 255, 255, 0.1)",
              borderRadius: "50%",
              transform: "translate(-50%, -50%)",
              animation: `rotateRing ${10 + i * 5}s infinite linear reverse`
            }}
          >
            <div style={{
              position: "absolute",
              top: "-4px",
              left: "50%",
              width: "8px",
              height: "8px",
              background: "rgba(37, 99, 235, 0.8)",
              borderRadius: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 0 10px rgba(37, 99, 235, 0.5)"
            }} />
          </div>
        ))}
      </div>
      
      {/* Main content container with glassmorphism */}
      <div className={`
        absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2
        text-center z-50 glassmorphism shadow-2xl
        ${isMobile ? 'w-[95%] max-w-sm px-6 py-8' : isTablet ? 'w-[90%] max-w-2xl px-8 py-10' : 'w-[90%] max-w-4xl px-8 py-12'}
      `}>
        {/* Profile image */}
        <div className={`
          ${isMobile ? 'w-36 h-36' : isTablet ? 'w-44 h-44' : 'w-52 h-52'}
          rounded-full mx-auto overflow-hidden border-4 border-white/30
          shadow-2xl relative gradient-bg-primary
          ${isMobile ? 'mb-6' : 'mb-8'}
        `}
        style={{
          animation: "profile-float 1.5s ease-out",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(37, 99, 235, 0.3)"
        }}>
          {/* Animated ring around profile */}
          <div className="absolute -top-2 -left-2 -right-2 -bottom-2 rounded-full border-2 border-transparent bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-padding opacity-100"
            style={{
              animation: "rotate-ring 4s linear infinite"
            }} />
          
          <img 
            src={profileImage || imageSrc}
            alt="Profile"
            className="w-full h-full object-cover transition-transform duration-300 relative z-10 hover:scale-110"
          />
        </div>

        {/* Name and title */}
        <div style={{ animation: "slide-in-up 1s ease-out 0.3s both" }}>
          <h1 className={`
            gradient-text font-bold m-0 mb-4 text-shadow-lg
            ${isMobile ? 'text-4xl' : isTablet ? 'text-5xl' : 'text-6xl'}
          `}
          style={{
            animation: "text-glow 2s ease-in-out infinite alternate",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))"
          }}>
            {name}
          </h1>
          
          <h2 className={`
            text-white/90 font-light text-shadow leading-snug
            ${isMobile ? 'text-lg mb-6' : isTablet ? 'text-xl mb-8' : 'text-2xl mb-8'}
          `}
          style={{ animation: "fade-in-up 1.2s ease-out 0.6s both" }}>
            {title}
          </h2>
          
          {/* Call to action button */}
          <button className={`
            btn-primary ${isMobile ? 'px-6 py-3 text-base' : 'px-8 py-4 text-lg'}
          `}
          style={{ animation: "fade-in-up 1.2s ease-out 0.9s both" }}
          onClick={() => document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' })}
          onMouseEnter={(e) => {
            e.target.style.transform = "translateY(-3px)";
            e.target.style.boxShadow = "0 15px 40px rgba(37, 99, 235, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = "translateY(0)";
            e.target.style.boxShadow = "0 10px 30px rgba(37, 99, 235, 0.3)";
          }}
          >
            View My Work
          </button>
        </div>
      </div>

      {/* Animated scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 cursor-pointer"
        style={{ animation: "bounce-up-down 2s infinite" }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <img 
          src={arrowSvg} 
          className="h-12 w-12"
          style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) invert(1)" }}
          alt="Scroll down arrow" 
        />
      </div>
    </section>
  );
};

Home.propTypes = {
  name: PropTypes.string,
  title: PropTypes.string,
};

export default Home;
