/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React, { useState, useEffect } from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "Dedicated software developer with two years of industry experience, specializing in Python, Django, Flask, JavaScript, NodeJS, React, and SQL. Currently based in Kuala Lumpur, Malaysia, I bring a methodical approach to problem-solving and a commitment to delivering efficient and scalable code.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Python",
  "JavaScript",
  "Django & Flask",
  "ReactJS & NodeJS",
  "MySQL & PostgreSQL",
  "Cloud Computing",
  "Full-stack Development",
  "API Development",
  "Git & Version Control",
  "Linux Administration",
  "Cisco CCNA",
  "Problem Solving",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about developing scalable software solutions that enhance system performance and user experience. With expertise in both front-end and back-end development, I collaborate effectively with cross-functional teams to deliver high-quality applications. My goal is to contribute to impactful projects while continuously expanding my technical expertise.";

const About = () => {
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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="about">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Floating geometric shapes */}
        {[...Array(12)].map((_, i) => (
          <div
            key={`bg-shape-${i}`}
            className={`absolute ${i % 2 === 0 ? 'rounded-full' : 'rounded-none'} ${i % 3 === 0 ? 'rotate-45' : 'rotate-0'}`}
            style={{
              width: `${8 + i * 3}px`,
              height: `${8 + i * 3}px`,
              background: `rgba(37, 99, 235, ${0.1 - i * 0.005})`,
              top: `${5 + i * 8}%`,
              left: `${3 + i * 8}%`,
              animation: `floating-circle ${4 + i * 0.3}s infinite ease-in-out`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className={`text-center relative z-20 ${isMobile ? 'mb-8 px-4' : 'mb-12'}`}>
        <h2 className={`bg-gradient-to-br from-white to-cyan-100 bg-clip-text text-transparent font-bold text-center mb-4 ${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'}`}
          style={{ 
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            animation: "fade-in-up 0.8s ease-out",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
          }}>
          About Myself
        </h2>
        
        <div className="w-30 h-1 bg-gradient-to-r from-white to-cyan-100 mx-auto rounded"
          style={{ animation: "slide-in-left 0.8s ease-out 0.3s both" }} />
      </div>

      {/* Main Content Container */}
      <div className={`max-w-6xl mx-auto relative z-20 ${isMobile ? 'px-4' : isTablet ? 'px-6' : 'px-8'}`}>
        
        {/* Top Section - Description */}
        <div className={`glass-morphism text-center ${isMobile ? 'p-6 mb-8 rounded-2xl' : isTablet ? 'p-10 mb-12 rounded-3xl' : 'p-12 mb-12 rounded-3xl'}`}
          style={{ animation: "fade-in-up 0.8s ease-out 0.5s both" }}>
          <p className={`text-white/90 leading-relaxed font-light ${isMobile ? 'text-lg' : isTablet ? 'text-xl' : 'text-xl'}`}
            style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
            {description}
          </p>
        </div>

        {/* Skills and Quote Section */}
        <div className={`grid items-start ${isMobile ? 'grid-cols-1 gap-8' : 'grid-cols-2 gap-12'}`}>
          
          {/* Skills Section */}
          <div className={`glass-morphism ${isMobile ? 'p-6 rounded-2xl' : isTablet ? 'p-10 rounded-3xl' : 'p-12 rounded-3xl'}`}
            style={{ animation: "slide-in-left 0.8s ease-out 0.7s both" }}>
            <h3 className={`text-white font-semibold text-center mb-6 ${isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-3xl'}`}
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
              Technical Skills
            </h3>

            <div className={`grid gap-4 ${isMobile ? 'grid-cols-1' : 'grid-cols-2'}`}>
              {skillsList.map((skill, index) => (
                <div
                  key={skill}
                  className={`bg-white/10 border border-white/10 relative overflow-hidden cursor-pointer transition-all duration-300 ${isMobile ? 'p-3 rounded-xl' : 'p-4 rounded-2xl'}`}
                  style={{ animation: `fade-in-up 0.6s ease-out ${0.9 + index * 0.1}s both` }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = "rgba(37, 99, 235, 0.2)";
                    e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.4)";
                    e.currentTarget.style.transform = "translateY(-3px) scale(1.02)";
                    e.currentTarget.style.boxShadow = "0 10px 25px rgba(37, 99, 235, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
                    e.currentTarget.style.transform = "translateY(0) scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}
                >
                  {/* Skill icon */}
                  <div className="w-2 h-2 bg-gradient-to-br from-white to-cyan-100 rounded-full mb-2"
                    style={{ boxShadow: "0 0 10px rgba(255,255,255,0.5)" }} />
                  
                  <div className={`text-white/90 font-medium ${isMobile ? 'text-sm' : 'text-base'}`}
                    style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
                    {skill}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote/Detail Section */}
          <div className={`glass-morphism flex flex-col justify-center relative ${isMobile ? 'p-6 rounded-2xl' : isTablet ? 'p-10 rounded-3xl' : 'p-12 rounded-3xl'}`}
            style={{ animation: "slide-in-right 0.8s ease-out 0.7s both" }}>
            {/* Quote icon */}
            <div className={`text-white/20 leading-none mb-4 ${isMobile ? 'text-5xl' : 'text-6xl'}`}
              style={{ fontFamily: "Georgia, serif" }}>
              "
            </div>

            <h3 className={`text-white font-semibold mb-6 ${isMobile ? 'text-2xl' : isTablet ? 'text-3xl' : 'text-3xl'}`}
              style={{ textShadow: "0 2px 4px rgba(0,0,0,0.3)" }}>
              My Philosophy
            </h3>

            <p className={`text-white/90 leading-relaxed italic ${isMobile ? 'text-base' : 'text-lg'}`}
              style={{ textShadow: "0 1px 2px rgba(0,0,0,0.3)" }}>
              {detailOrQuote}
            </p>

            {/* Professional highlights */}
            <div className={`mt-8 grid gap-3 ${isMobile ? 'grid-cols-2' : 'grid-cols-2'}`}>
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Location", value: "Malaysia" },
                { label: "Focus", value: "Full-Stack" },
                { label: "Approach", value: "Scalable" }
              ].map((item, i) => (
                <div key={item.label} 
                  className={`text-center bg-white/5 rounded-lg ${isMobile ? 'p-3' : 'p-4'}`}
                  style={{ animation: `fade-in-up 0.6s ease-out ${1.2 + i * 0.1}s both` }}>
                  <div className={`text-white font-bold mb-1 ${isMobile ? 'text-base' : 'text-xl'}`}>
                    {item.value}
                  </div>
                  <div className={`text-white/70 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
