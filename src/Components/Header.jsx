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
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        gap: isMobile ? "1rem" : "2rem",
        background: "rgba(255,255,255,0.75)",
        padding: isMobile ? "0.8rem 1rem" : "1rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255,255,255,0.2)"
      }}
    >
      <a href="#home" style={{
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
        fontSize: isMobile ? "0.9rem" : "1rem",
        padding: isMobile ? "0.5rem 0.8rem" : "0.5rem 1rem",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        background: "rgba(255,255,255,0.1)"
      }}>Home</a>
      <a href="#about" style={{
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
        fontSize: isMobile ? "0.9rem" : "1rem",
        padding: isMobile ? "0.5rem 0.8rem" : "0.5rem 1rem",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        background: "rgba(255,255,255,0.1)"
      }}>About</a>
      <a href="#portfolio" style={{
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
        fontSize: isMobile ? "0.9rem" : "1rem",
        padding: isMobile ? "0.5rem 0.8rem" : "0.5rem 1rem",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        background: "rgba(255,255,255,0.1)"
      }}>Portfolio</a>
      <a href="#contact" style={{
        textDecoration: "none",
        color: "#333",
        fontWeight: "500",
        fontSize: isMobile ? "0.9rem" : "1rem",
        padding: isMobile ? "0.5rem 0.8rem" : "0.5rem 1rem",
        borderRadius: "8px",
        transition: "all 0.3s ease",
        background: "rgba(255,255,255,0.1)"
      }}>Contact</a>
    </div>
  );
};

export default Header;
