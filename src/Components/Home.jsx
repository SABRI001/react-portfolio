/**
 * Home component
 *
 * The section at the top of the page to display image of your
 * choice, name and title that describes your career focus.
 */

import React, { useState, useEffect } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

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
import image from "../images/profile-img.jpg";

const imageAltText = "Professional software developer workspace";

const Home = ({ name, title }) => {
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

  return (
    <section id="home" className="min-height" style={{ position: "relative", overflow: "hidden" }}>
      {/* Animated Gradient Background */}
      <div className="animated-background" style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: `
          linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab),
          radial-gradient(circle at 50% 50%, rgba(37, 99, 235, 0.1) 0%, transparent 70%)
        `,
        backgroundSize: "400% 400%, 100% 100%",
        animation: "gradientShift 15s ease infinite",
        zIndex: 0
      }} />

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
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        textAlign: "center",
        zIndex: 10,
        width: isMobile ? "95%" : "90%",
        maxWidth: isMobile ? "400px" : isTablet ? "600px" : "800px",
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(20px)",
        borderRadius: isMobile ? "20px" : "30px",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        padding: isMobile ? "2rem 1.5rem" : isTablet ? "2.5rem 2rem" : "3rem 2rem",
        boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)"
      }}>
        {/* Profile image */}
        <div style={{
          width: isMobile ? "150px" : isTablet ? "175px" : "200px",
          height: isMobile ? "150px" : isTablet ? "175px" : "200px",
          borderRadius: "50%",
          margin: isMobile ? "0 auto 1.5rem" : "0 auto 2rem",
          overflow: "hidden",
          border: "4px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.2), 0 0 20px rgba(37, 99, 235, 0.3)",
          animation: "profileImageFloat 1.5s ease-out",
          background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
          position: "relative"
        }}>
          {/* Animated ring around profile */}
          <div style={{
            position: "absolute",
            top: "-8px",
            left: "-8px",
            right: "-8px",
            bottom: "-8px",
            borderRadius: "50%",
            border: "3px solid transparent",
            background: "linear-gradient(45deg, rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.8), rgba(37, 99, 235, 0.8))",
            backgroundClip: "padding-box",
            animation: "rotateRing 4s linear infinite",
            opacity: "1"
          }} />
          
          <img 
            src={image}
            alt="Profile"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              transition: "transform 0.3s ease",
              position: "relative",
              zIndex: 1
            }}
            onMouseEnter={(e) => {
              e.target.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
              e.target.style.transform = "scale(1)";
            }}
          />
        </div>

        {/* Name and title */}
        <div style={{
          animation: "slideInUp 1s ease-out 0.3s both"
        }}>
          <h1 style={{
            background: "linear-gradient(135deg, #ffffff, #e0f2fe)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontSize: isMobile ? "2.5rem" : isTablet ? "3rem" : "4rem",
            fontWeight: "bold",
            margin: "0 0 1rem 0",
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            animation: "textGlow 2s ease-in-out infinite alternate",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.5))"
          }}>{name}</h1>
          
          <h2 style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: isMobile ? "1.2rem" : isTablet ? "1.5rem" : "1.8rem",
            fontWeight: "300",
            margin: isMobile ? "0 0 1.5rem 0" : "0 0 2rem 0",
            textShadow: "2px 2px 8px rgba(0,0,0,0.3)",
            animation: "fadeInUp 1.2s ease-out 0.6s both",
            lineHeight: "1.4"
          }}>{title}</h2>
          
          {/* Call to action button */}
          <button style={{
            background: "linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.8))",
            color: "white",
            border: "2px solid rgba(255, 255, 255, 0.3)",
            padding: isMobile ? "0.8rem 1.5rem" : "1rem 2rem",
            borderRadius: "50px",
            fontSize: isMobile ? "1rem" : "1.1rem",
            fontWeight: "600",
            cursor: "pointer",
            backdropFilter: "blur(10px)",
            boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
            animation: "fadeInUp 1.2s ease-out 0.9s both",
            transition: "all 0.3s ease"
          }}
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
      <div style={{ 
        position: "absolute", 
        bottom: "2rem", 
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 2,
        animation: "bounceUpDown 2s infinite",
        cursor: "pointer"
      }}
      onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <img 
          src={arrowSvg} 
          style={{ 
            height: "3rem", 
            width: "3rem",
            filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.3)) invert(1)"
          }} 
          alt="Scroll down arrow" 
        />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
