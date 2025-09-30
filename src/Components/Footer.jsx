/**
 * Footer component
 *
 * Displays avenues to contact you.
 * Contact information is passed in from the App component that
 * renders the Footer.
 *
 * If a social value has an empty string it will not be displayed.
 */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

/**
 * 💡 Learning resources
 *
 *  HTML hyperlinks: https://www.w3schools.com/html/html_links.asp
 *  Opening links in new tabs: https://www.freecodecamp.org/news/how-to-use-html-to-open-link-in-new-tab/
 */

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    primaryColor,
    twitter,
    youTube,
  } = props;

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
      id="footer"
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: isMobile ? "2rem" : "2.5rem",
        padding: isMobile ? "3rem 1rem 2rem" : "5rem 0 3rem",
        background: "linear-gradient(135deg, #0f1419 0%, #1a1f36 50%, #0f1419 100%)",
        width: "100vw",
        position: "relative",
        overflow: "hidden"
      }}
    >
      {/* Animated Background Elements */}
      <div style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
        pointerEvents: "none"
      }}>
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bg-shape-${i}`}
            style={{
              position: "absolute",
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: `rgba(37, 99, 235, ${0.1 - i * 0.01})`,
              borderRadius: i % 2 === 0 ? "50%" : "0%",
              top: `${10 + i * 12}%`,
              left: `${5 + i * 12}%`,
              animation: `floatingCircle ${4 + i * 0.3}s infinite ease-in-out`,
              animationDelay: `${i * 0.3}s`,
              transform: i % 3 === 0 ? "rotate(45deg)" : "rotate(0deg)"
            }}
          />
        ))}
      </div>

      {/* Social Icons Container */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: isMobile ? "1.5rem" : "2.5rem",
          position: "relative",
          zIndex: 2,
          flexWrap: "wrap",
          padding: isMobile ? "0 1rem" : "0"
        }}
      >
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      
      {/* Footer Text */}
      <p className="small" style={{ 
        marginTop: 0, 
        color: "rgba(255, 255, 255, 0.9)",
        textShadow: "0 2px 4px rgba(0,0,0,0.3)",
        fontWeight: "300",
        position: "relative",
        zIndex: 2
      }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,

};

export default Footer;
