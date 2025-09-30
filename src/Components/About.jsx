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
    <section className="padding" id="about" style={{
      background: "linear-gradient(135deg, #0f1419 0%, #1a1f36 50%, #0f1419 100%)",
      position: "relative",
      overflow: "hidden",
      minHeight: "100vh"
    }}>
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
        {[...Array(12)].map((_, i) => (
          <div
            key={`bg-shape-${i}`}
            style={{
              position: "absolute",
              width: `${8 + i * 3}px`,
              height: `${8 + i * 3}px`,
              background: `rgba(37, 99, 235, ${0.1 - i * 0.005})`,
              borderRadius: i % 2 === 0 ? "50%" : "0%",
              top: `${5 + i * 8}%`,
              left: `${3 + i * 8}%`,
              animation: `floatingCircle ${4 + i * 0.3}s infinite ease-in-out`,
              animationDelay: `${i * 0.2}s`,
              transform: i % 3 === 0 ? "rotate(45deg)" : "rotate(0deg)"
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div style={{
        textAlign: "center",
        marginBottom: isMobile ? "2rem" : "3rem",
        position: "relative",
        zIndex: 2,
        padding: isMobile ? "0 1rem" : "0"
      }}>
        <h2 style={{
          background: "linear-gradient(135deg, #ffffff, #e0f2fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontSize: isMobile ? "2rem" : isTablet ? "2.5rem" : "3rem",
          fontWeight: "bold",
          margin: "0 0 1rem 0",
          textShadow: "0 4px 8px rgba(0,0,0,0.3)",
          animation: "fadeInUp 0.8s ease-out",
          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
        }}>About Myself</h2>
        
        <div style={{
          width: "120px",
          height: "4px",
          background: "linear-gradient(135deg, #ffffff, #e0f2fe)",
          margin: "0 auto",
          borderRadius: "2px",
          animation: "slideInLeft 0.8s ease-out 0.3s both"
        }} />
      </div>

      {/* Main Content Container */}
      <div style={{
        maxWidth: "1200px",
        margin: "0 auto",
        padding: isMobile ? "0 1rem" : isTablet ? "0 1.5rem" : "0 2rem",
        position: "relative",
        zIndex: 2
      }}>
        
        {/* Top Section - Description */}
        <div style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: isMobile ? "20px" : "25px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          padding: isMobile ? "2rem 1.5rem" : isTablet ? "2.5rem" : "3rem",
          marginBottom: isMobile ? "2rem" : "3rem",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
          animation: "fadeInUp 0.8s ease-out 0.5s both",
          textAlign: "center"
        }}>
          <p style={{
            color: "rgba(255, 255, 255, 0.9)",
            fontSize: isMobile ? "1.1rem" : isTablet ? "1.2rem" : "1.3rem",
            lineHeight: "1.8",
            margin: "0",
            fontWeight: "300",
            textShadow: "0 2px 4px rgba(0,0,0,0.3)"
          }}>{description}</p>
        </div>

        {/* Skills and Quote Section */}
        <div style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
          gap: isMobile ? "2rem" : "3rem",
          alignItems: "start"
        }}>
          
          {/* Skills Section */}
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: isMobile ? "20px" : "25px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: isMobile ? "2rem 1.5rem" : isTablet ? "2.5rem" : "3rem",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
            animation: "slideInLeft 0.8s ease-out 0.7s both"
          }}>
            <h3 style={{
              color: "#ffffff",
              fontSize: isMobile ? "1.5rem" : isTablet ? "1.7rem" : "1.8rem",
              fontWeight: "600",
              marginBottom: isMobile ? "1.5rem" : "2rem",
              textAlign: "center",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}>Technical Skills</h3>

            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "0.8rem" : "1rem"
            }}>
              {skillsList.map((skill, index) => (
                <div
                  key={skill}
                  style={{
                    background: "rgba(255, 255, 255, 0.1)",
                    borderRadius: isMobile ? "12px" : "15px",
                    padding: isMobile ? "0.8rem" : "1rem",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                    animation: `fadeInUp 0.6s ease-out ${0.9 + index * 0.1}s both`,
                    position: "relative",
                    overflow: "hidden"
                  }}
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
                  <div style={{
                    width: "8px",
                    height: "8px",
                    background: "linear-gradient(135deg, #ffffff, #e0f2fe)",
                    borderRadius: "50%",
                    marginBottom: "0.5rem",
                    boxShadow: "0 0 10px rgba(255,255,255,0.5)"
                  }} />
                  
                  <div style={{
                    color: "rgba(255, 255, 255, 0.9)",
                    fontSize: isMobile ? "0.9rem" : "0.95rem",
                    fontWeight: "500",
                    textShadow: "0 1px 2px rgba(0,0,0,0.3)"
                  }}>{skill}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Quote/Detail Section */}
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: isMobile ? "20px" : "25px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: isMobile ? "2rem 1.5rem" : isTablet ? "2.5rem" : "3rem",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
            animation: "slideInRight 0.8s ease-out 0.7s both",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            position: "relative"
          }}>
            {/* Quote icon */}
            <div style={{
              fontSize: isMobile ? "3rem" : "4rem",
              color: "rgba(255, 255, 255, 0.2)",
              fontFamily: "Georgia, serif",
              lineHeight: "1",
              marginBottom: "1rem"
            }}>"</div>

            <h3 style={{
              color: "#ffffff",
              fontSize: isMobile ? "1.5rem" : isTablet ? "1.7rem" : "1.8rem",
              fontWeight: "600",
              marginBottom: "1.5rem",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)"
            }}>My Philosophy</h3>

            <p style={{
              color: "rgba(255, 255, 255, 0.9)",
              fontSize: isMobile ? "1rem" : "1.1rem",
              lineHeight: "1.7",
              margin: "0",
              fontStyle: "italic",
              textShadow: "0 1px 2px rgba(0,0,0,0.3)"
            }}>{detailOrQuote}</p>

            {/* Professional highlights */}
            <div style={{
              marginTop: "2rem",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr 1fr" : "1fr 1fr",
              gap: isMobile ? "0.8rem" : "1rem"
            }}>
              {[
                { label: "Years Experience", value: "2+" },
                { label: "Location", value: "Malaysia" },
                { label: "Focus", value: "Full-Stack" },
                { label: "Approach", value: "Scalable" }
              ].map((item, i) => (
                <div key={item.label} style={{
                  textAlign: "center",
                  padding: isMobile ? "0.8rem" : "1rem",
                  background: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "10px",
                  animation: `fadeInUp 0.6s ease-out ${1.2 + i * 0.1}s both`
                }}>
                  <div style={{
                    color: "#ffffff",
                    fontSize: isMobile ? "1rem" : "1.2rem",
                    fontWeight: "bold",
                    marginBottom: "0.3rem"
                  }}>{item.value}</div>
                  <div style={{
                    color: "rgba(255, 255, 255, 0.7)",
                    fontSize: isMobile ? "0.7rem" : "0.8rem"
                  }}>{item.label}</div>
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
