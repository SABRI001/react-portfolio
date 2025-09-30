/**
 * Contact component
 *
 * A contact form section that allows visitors to send messages
 * directly to your email address using EmailJS service.
 */

import React, { useState, useEffect } from "react";
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("");
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

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("");

    // Debug logging
    console.log('EmailJS Config:', emailConfig);
    console.log('Form Data:', formData);

    try {
      // Validate configuration
      if (!emailConfig.serviceID || !emailConfig.templateID || !emailConfig.publicKey) {
        throw new Error('EmailJS configuration is incomplete. Please check your config file.');
      }

      // Check if we're using placeholder values
      if (emailConfig.serviceID === 'service_portfolio' || 
          emailConfig.templateID === 'template_contact' ||
          emailConfig.serviceID.includes('your_') ||
          emailConfig.templateID.includes('your_')) {
        throw new Error('Please update emailConfig.js with your actual EmailJS credentials from the dashboard.');
      }

      // Prepare the email parameters (simplified for better compatibility)
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };

      console.log('Sending email with params:', templateParams);

      // Send email using EmailJS
      const result = await emailjs.send(
        emailConfig.serviceID,
        emailConfig.templateID,
        templateParams,
        emailConfig.publicKey
      );

      console.log('EmailJS Result:', result);

      if (result.status === 200) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        throw new Error(`Email sending failed with status: ${result.status}`);
      }
    } catch (error) {
      console.error('EmailJS Error Details:', error);
      
      if (error.message.includes('configuration') || error.message.includes('credentials')) {
        setSubmitStatus("config_error");
      } else {
        setSubmitStatus("error");
      }
      
      // Fallback to mailto if EmailJS fails
      const subject = encodeURIComponent(`Portfolio Contact: ${formData.subject}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:sabridokhan2@gmail.com?subject=${subject}&body=${body}`;
      window.location.href = mailtoLink;
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="padding" id="contact" style={{
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
        {[...Array(10)].map((_, i) => (
          <div
            key={`bg-shape-${i}`}
            style={{
              position: "absolute",
              width: `${8 + i * 3}px`,
              height: `${8 + i * 3}px`,
              background: `rgba(37, 99, 235, ${0.1 - i * 0.005})`,
              borderRadius: i % 2 === 0 ? "50%" : "0%",
              top: `${5 + i * 10}%`,
              left: `${3 + i * 10}%`,
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
        }}>Get In Touch</h2>
        
        <div style={{
          width: "120px",
          height: "4px",
          background: "linear-gradient(135deg, #ffffff, #e0f2fe)",
          margin: "0 auto",
          borderRadius: "2px",
          animation: "slideInLeft 0.8s ease-out 0.3s both"
        }} />

        <p style={{
          color: "rgba(255, 255, 255, 0.8)",
          fontSize: "1.2rem",
          marginTop: "2rem",
          maxWidth: "600px",
          margin: "2rem auto 0",
          lineHeight: "1.6",
          animation: "fadeInUp 0.8s ease-out 0.5s both"
        }}>
          Have a project in mind or want to collaborate? I'd love to hear from you!
          Send me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form Container */}
      <div style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "0 2rem",
        position: "relative",
        zIndex: 2
      }}>
        <div style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(20px)",
          borderRadius: "25px",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          padding: "3rem",
          boxShadow: "0 25px 50px rgba(0, 0, 0, 0.1)",
          animation: "fadeInUp 0.8s ease-out 0.7s both"
        }}>
          <form onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
              gap: isMobile ? "1.5rem" : "2.5rem",
              marginBottom: "2rem"
            }}>
              <div style={{
                paddingRight: isMobile ? "0" : "0.5rem"
              }}>
                <label style={{
                  display: "block",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginBottom: "0.5rem"
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontSize: "1rem",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(37, 99, 235, 0.5)";
                    e.target.style.boxShadow = "0 0 20px rgba(37, 99, 235, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="Your Name"
                />
              </div>

              <div style={{
                paddingLeft: isMobile ? "0" : "0.5rem"
              }}>
                <label style={{
                  display: "block",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontSize: "1rem",
                  fontWeight: "500",
                  marginBottom: "0.5rem"
                }}>
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    width: "100%",
                    padding: "1rem",
                    borderRadius: "15px",
                    border: "1px solid rgba(255, 255, 255, 0.2)",
                    background: "rgba(255, 255, 255, 0.1)",
                    color: "white",
                    fontSize: "1rem",
                    backdropFilter: "blur(10px)",
                    transition: "all 0.3s ease",
                    outline: "none"
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "rgba(37, 99, 235, 0.5)";
                    e.target.style.boxShadow = "0 0 20px rgba(37, 99, 235, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                    e.target.style.boxShadow = "none";
                  }}
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={{
                display: "block",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "0.5rem"
              }}>
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  fontSize: "1rem",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  outline: "none"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(37, 99, 235, 0.5)";
                  e.target.style.boxShadow = "0 0 20px rgba(37, 99, 235, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="Project Inquiry / Collaboration / General Question"
              />
            </div>

            {/* Message Field */}
            <div style={{ marginBottom: "2rem" }}>
              <label style={{
                display: "block",
                color: "rgba(255, 255, 255, 0.9)",
                fontSize: "1rem",
                fontWeight: "500",
                marginBottom: "0.5rem"
              }}>
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                style={{
                  width: "100%",
                  padding: "1rem",
                  borderRadius: "15px",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  background: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  fontSize: "1rem",
                  backdropFilter: "blur(10px)",
                  transition: "all 0.3s ease",
                  outline: "none",
                  resize: "vertical",
                  minHeight: "120px"
                }}
                onFocus={(e) => {
                  e.target.style.borderColor = "rgba(37, 99, 235, 0.5)";
                  e.target.style.boxShadow = "0 0 20px rgba(37, 99, 235, 0.2)";
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = "rgba(255, 255, 255, 0.2)";
                  e.target.style.boxShadow = "none";
                }}
                placeholder="Tell me about your project, ideas, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <div style={{ textAlign: "center" }}>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
                  background: isSubmitting 
                    ? "rgba(107, 114, 128, 0.8)" 
                    : "linear-gradient(135deg, rgba(37, 99, 235, 0.8), rgba(29, 78, 216, 0.8))",
                  color: "white",
                  border: "2px solid rgba(255, 255, 255, 0.3)",
                  padding: "1.2rem 3rem",
                  borderRadius: "50px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  backdropFilter: "blur(10px)",
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)",
                  transition: "all 0.3s ease",
                  outline: "none",
                  minWidth: "200px"
                }}
                onMouseEnter={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = "translateY(-3px)";
                    e.target.style.boxShadow = "0 15px 40px rgba(37, 99, 235, 0.4)";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isSubmitting) {
                    e.target.style.transform = "translateY(0)";
                    e.target.style.boxShadow = "0 10px 30px rgba(37, 99, 235, 0.3)";
                  }
                }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p style={{
                  marginTop: "1rem",
                  color: "#10b981",
                  fontSize: "1rem",
                  fontWeight: "500"
                }}>
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {submitStatus === "config_error" && (
                <p style={{
                  marginTop: "1rem",
                  color: "#f59e0b",
                  fontSize: "1rem",
                  fontWeight: "500",
                  padding: "0.75rem",
                  background: "rgba(245, 158, 11, 0.1)",
                  borderRadius: "0.5rem",
                  border: "1px solid rgba(245, 158, 11, 0.3)"
                }}>
                  ⚠️ EmailJS configuration needed. Check console for details or use the mailto link that just opened.
                </p>
              )}

              {submitStatus === "error" && (
                <p style={{
                  marginTop: "1rem",
                  color: "#ef4444",
                  fontSize: "1rem",
                  fontWeight: "500"
                }}>
                  ✗ Failed to send message. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>

          {/* Alternative Contact Info */}
          <div style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            textAlign: "center"
          }}>
            <p style={{
              color: "rgba(255, 255, 255, 0.7)",
              fontSize: "0.95rem",
              marginBottom: "1rem"
            }}>
              Prefer direct contact?
            </p>
            <a 
              href="mailto:sabridokhan2@gmail.com"
              style={{
                color: "#2563EB",
                fontSize: "1.1rem",
                fontWeight: "600",
                textDecoration: "none",
                transition: "color 0.3s ease"
              }}
              onMouseEnter={(e) => {
                e.target.style.color = "#1d4ed8";
              }}
              onMouseLeave={(e) => {
                e.target.style.color = "#2563EB";
              }}
            >
              sabridokhan2@gmail.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;