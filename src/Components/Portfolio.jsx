/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

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
  return (
    <section className="padding" id="portfolio" style={{
      background: "linear-gradient(135deg, #0f1419 0%, #1a1f36 50%, #0f1419 100%)",
      position: "relative",
      overflow: "hidden"
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
        marginBottom: "4rem",
        position: "relative",
        zIndex: 2
      }}>
        <h2 style={{
          background: "linear-gradient(135deg, #ffffff, #e0f2fe)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          fontSize: "3rem",
          fontWeight: "bold",
          margin: "0 0 1rem 0",
          textShadow: "0 4px 8px rgba(0,0,0,0.3)",
          animation: "fadeInUp 0.8s ease-out",
          filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
        }}>Portfolio</h2>
        
        <div style={{
          width: "100px",
          height: "4px",
          background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
          margin: "0 auto",
          borderRadius: "2px",
          animation: "slideInLeft 0.8s ease-out 0.3s both"
        }} />
      </div>

      {/* Portfolio Content Container */}
      <div style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "stretch",
        gap: "3rem",
        maxWidth: "1400px",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
        padding: "0 2rem"
      }}>
        
        {/* Left Side - Tech Visualization */}
        <div style={{
          flex: "1",
          maxWidth: "500px",
          position: "relative",
          height: "100%",
          display: "flex"
        }}>
          {/* Glassmorphism container for image */}
          <div style={{
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(20px)",
            borderRadius: "25px",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            padding: "2rem",
            boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
            animation: "slideInLeft 0.8s ease-out 0.5s both",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%"
          }}>
            <div style={{
              borderRadius: "20px",
              overflow: "hidden",
              position: "relative",
              background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
              flex: "1 1 auto",
              minHeight: "300px"
            }}>
              {/* Tech pattern overlay */}
              <div style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                background: `
                  radial-gradient(circle at 25% 25%, rgba(255,255,255,0.1) 0%, transparent 50%),
                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)
                `,
                zIndex: 2
              }} />
              
              <img
                src={image}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "400px",
                  objectFit: "cover",
                  transition: "transform 0.5s ease",
                  filter: "brightness(0.8) contrast(1.1)"
                }}
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
            <div style={{
              marginTop: "1.5rem",
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "1rem",
              flex: "0 0 auto"
            }}>
              {[
                { label: "Projects", value: "15+" },
                { label: "Technologies", value: "10+" },
                { label: "Experience", value: "2+ Years" },
                { label: "Certifications", value: "4" }
              ].map((stat, i) => (
                <div key={stat.label} style={{
                  textAlign: "center",
                  padding: "1rem",
                  background: "rgba(255, 255, 255, 0.1)",
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  animation: `fadeInUp 0.6s ease-out ${0.8 + i * 0.1}s both`
                }}>
                  <div style={{
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "#ffffff",
                    marginBottom: "0.5rem"
                  }}>{stat.value}</div>
                  <div style={{
                    fontSize: "0.9rem",
                    color: "rgba(255, 255, 255, 0.8)"
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Project Cards */}
        <div style={{
          flex: "1",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1.5rem",
          alignContent: "start"
        }}>
          {projectList.map((project, index) => (
            <div
              key={project.title}
              style={{
                background: "rgba(255, 255, 255, 0.1)",
                backdropFilter: "blur(20px)",
                borderRadius: "20px",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                padding: "2rem 1.5rem",
                boxShadow: "0 15px 35px rgba(0, 0, 0, 0.1)",
                transition: "all 0.4s ease",
                cursor: "pointer",
                position: "relative",
                overflow: "hidden",
                animation: `fadeInUp 0.6s ease-out ${0.2 + index * 0.15}s both`
              }}
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
              <div style={{
                position: "absolute",
                top: 0,
                left: "-100%",
                width: "100%",
                height: "2px",
                background: "linear-gradient(90deg, transparent, #2563EB, transparent)",
                transition: "left 0.6s ease",
                animation: `movingLine 3s infinite ease-in-out ${index * 0.5}s`
              }} />

              {/* Project icon */}
              <div style={{
                width: "50px",
                height: "50px",
                background: "linear-gradient(135deg, #2563EB, #1d4ed8)",
                borderRadius: "15px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "1.5rem",
                boxShadow: "0 10px 20px rgba(37, 99, 235, 0.3)"
              }}>
                <div style={{
                  width: "20px",
                  height: "20px",
                  background: "white",
                  borderRadius: "3px",
                  position: "relative"
                }}>
                  <div style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "8px",
                    height: "8px",
                    background: "#2563EB",
                    borderRadius: "50%"
                  }} />
                </div>
              </div>

              <h3 style={{
                color: "#ffffff",
                fontSize: "1.3rem",
                fontWeight: "600",
                margin: "0 0 1rem 0",
                transition: "color 0.3s ease"
              }}>{project.title}</h3>

              <p style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                margin: "0 0 1.5rem 0"
              }}>{project.description}</p>

              {/* View project link */}
              <div style={{
                display: "flex",
                alignItems: "center",
                color: "#2563EB",
                fontSize: "0.9rem",
                fontWeight: "600",
                transition: "all 0.3s ease"
              }}>
                <span>View Project</span>
                <span style={{
                  marginLeft: "0.5rem",
                  transition: "transform 0.3s ease"
                }}>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
