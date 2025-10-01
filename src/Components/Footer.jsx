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

const Footer = ({
  devDotTo,
  email,
  gitHub,
  instagram,
  linkedIn,
  medium,
  name = "",
  primaryColor,
  twitter,
  youTube,
}) => {

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
      className={`flex flex-col items-center w-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 ${isMobile ? 'gap-8 py-12 px-4' : 'gap-10 py-20'}`}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Floating geometric shapes */}
        {[...Array(8)].map((_, i) => (
          <div
            key={`bg-shape-${i}`}
            className={`absolute ${i % 2 === 0 ? 'rounded-full' : 'rounded-none'} ${i % 3 === 0 ? 'rotate-45' : 'rotate-0'}`}
            style={{
              width: `${8 + i * 2}px`,
              height: `${8 + i * 2}px`,
              background: `rgba(37, 99, 235, ${0.1 - i * 0.01})`,
              top: `${10 + i * 12}%`,
              left: `${5 + i * 12}%`,
              animation: `floating-circle ${4 + i * 0.3}s infinite ease-in-out`,
              animationDelay: `${i * 0.3}s`,
            }}
          />
        ))}
      </div>

      {/* Social Icons Container */}
      <div className={`flex justify-center flex-wrap relative z-20 ${isMobile ? 'gap-6 px-4' : 'gap-10'}`}>
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="social-icon" />
          </a>
        )}
        {devDotTo && (
          <a href={`https://dev.to/${devDotTo}`} target="_blank" rel="noopener noreferrer">
            <img src={devDotToIcon} alt="Dev.to" className="social-icon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank" rel="noopener noreferrer">
            <img src={gitHubIcon} alt="GitHub" className="social-icon" />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={instagramIcon} alt="Instagram" className="social-icon" />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedInIcon} alt="LinkedIn" className="social-icon" />
          </a>
        )}
        {medium && (
          <a href={`https://medium.com/@${medium}`} target="_blank" rel="noopener noreferrer">
            <img src={mediumIcon} alt="Medium" className="social-icon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" className="social-icon" />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={youTubeIcon} alt="YouTube" className="social-icon" />
          </a>
        )}
      </div>
      
      {/* Footer Text */}
      <p className="mt-0 text-white/90 font-light relative z-20"
        style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
