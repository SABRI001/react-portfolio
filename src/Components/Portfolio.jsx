/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React, { useState, useEffect } from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/software1.svg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Full-Stack Web Applications",
    description:
      "Developed scalable web applications using Django and Flask backends with ReactJS frontends, implementing RESTful APIs and database optimization for enhanced performance.",
    url: "https://github.com/SABRI001",
  },
  {
    title: "Database Management Systems",
    description:
      "Designed and implemented robust database solutions using MySQL and PostgreSQL, ensuring data integrity and optimized query performance for enterprise applications.",
    url: "https://github.com/SABRI001",
  },
  {
    title: "Cloud Computing Solutions",
    description:
      "Architected and deployed cloud-based applications with focus on scalability and reliability, utilizing modern DevOps practices and API development.",
    url: "https://github.com/SABRI001",
  },
  {
    title: "Network Infrastructure Projects",
    description:
      "Applied Cisco CCNA expertise in designing network solutions, implementing TCP/IP protocols and OSI model principles for enterprise networking requirements.",
    url: "https://github.com/SABRI001",
  },
];

const Portfolio = () => {
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
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="portfolio">
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
      <div className={`text-center relative z-20 ${isMobile ? 'mb-8 px-4' : 'mb-16'}`}>
        <h2 className={`bg-gradient-to-br from-white to-cyan-100 bg-clip-text text-transparent font-bold text-center mb-4 ${isMobile ? 'text-3xl' : isTablet ? 'text-4xl' : 'text-5xl'}`}
          style={{ 
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            animation: "fade-in-up 0.8s ease-out",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
          }}>
          Portfolio
        </h2>
        
        <div className="w-25 h-1 bg-gradient-to-r from-blue-600 to-blue-700 mx-auto rounded"
          style={{ animation: "slide-in-left 0.8s ease-out 0.3s both" }} />
      </div>

      {/* Portfolio Content Container */}
      <div className={`flex items-stretch relative z-20 max-w-7xl mx-auto ${isMobile ? 'flex-col gap-8 px-4' : 'flex-row gap-12'} ${isTablet ? 'px-6' : 'px-8'}`}>
        
        {/* Left Side - Tech Visualization */}
        <div className={`flex-1 relative h-full flex ${isMobile ? 'max-w-full' : 'max-w-lg'}`}>
          {/* Glassmorphism container for image */}
          <div className={`glass-morphism flex flex-col justify-between w-full ${isMobile ? 'p-6 rounded-2xl' : 'p-8 rounded-3xl'}`}
            style={{ animation: "slide-in-left 0.8s ease-out 0.5s both" }}>
            <div className={`rounded-2xl overflow-hidden relative bg-gradient-to-br from-blue-600 to-blue-700 flex-1 ${isMobile ? 'min-h-[200px]' : 'min-h-[300px]'}`}>
              {/* Tech pattern overlay */}
              <div className="absolute inset-0 z-20"
                style={{
                  background: `
                    radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                    radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)
                  `
                }} />
              
              <img
                src={image}
                className={`w-full h-full object-cover transition-transform duration-500 ${isMobile ? 'min-h-[250px]' : 'min-h-[400px]'}`}
                style={{ filter: "brightness(0.8) contrast(1.1)" }}
                alt={imageAltText}
                onMouseEnter={(e) => {
                  e.target.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.transform = "scale(1)";
                }}
              />
            </div>
            
            {/* Tech stats overlay */}
            <div className={`mt-6 grid gap-3 flex-shrink-0 ${isMobile ? 'grid-cols-2' : 'grid-cols-2'}`}>
              {[
                { label: "Projects", value: "15+" },
                { label: "Technologies", value: "10+" },
                { label: "Experience", value: "2+ Years" },
                { label: "Certifications", value: "4" }
              ].map((stat, i) => (
                <div key={stat.label} 
                  className={`text-center bg-white/10 border border-white/10 rounded-2xl ${isMobile ? 'p-3' : 'p-4'}`}
                  style={{ animation: `fade-in-up 0.6s ease-out ${0.8 + i * 0.1}s both` }}>
                  <div className={`font-bold text-white mb-2 ${isMobile ? 'text-xl' : 'text-2xl'}`}>
                    {stat.value}
                  </div>
                  <div className={`text-white/80 ${isMobile ? 'text-xs' : 'text-sm'}`}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Project Cards */}
        <div className={`flex-1 grid content-start ${isMobile ? 'grid-cols-1 gap-4' : isTablet ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-6'}`}>
          {projectList.map((project, index) => (
            <div
              key={project.title}
              className={`glass-morphism relative overflow-hidden cursor-pointer transition-all duration-400 ${isMobile ? 'p-4 rounded-2xl' : 'p-6 rounded-2xl'}`}
              style={{ animation: `fade-in-up 0.6s ease-out ${0.2 + index * 0.15}s both` }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-10px) scale(1.02)";
                e.currentTarget.style.boxShadow = "0 25px 50px rgba(37, 99, 235, 0.2)";
                e.currentTarget.style.borderColor = "rgba(37, 99, 235, 0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0) scale(1)";
                e.currentTarget.style.boxShadow = "0 15px 35px rgba(0, 0, 0, 0.1)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.2)";
              }}
              onClick={() => window.open(project.url, '_blank')}
            >
              {/* Animated border effect */}
              <div className="absolute top-0 -left-full w-full h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent transition-all duration-600"
                style={{ animation: `moving-line 3s infinite ease-in-out ${index * 0.5}s` }} />

              {/* Project icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-2xl flex items-center justify-center mb-6"
                style={{ boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)" }}>
                <div className="w-5 h-5 bg-white rounded relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-600 rounded-full" />
                </div>
              </div>

              <h3 className={`text-white font-semibold mb-4 transition-colors duration-300 ${isMobile ? 'text-lg' : 'text-xl'}`}>
                {project.title}
              </h3>

              <p className={`text-white/80 leading-relaxed mb-6 ${isMobile ? 'text-sm' : 'text-base'}`}>
                {project.description}
              </p>

              {/* View project link */}
              <div className={`flex items-center text-blue-600 font-semibold transition-all duration-300 ${isMobile ? 'text-sm' : 'text-base'}`}>
                <span>View Project</span>
                <span className="ml-2 transition-transform duration-300">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
