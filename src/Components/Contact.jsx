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
    <section className="min-h-screen relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900" id="contact">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {/* Floating geometric shapes */}
        {[...Array(10)].map((_, i) => (
          <div
            key={`bg-shape-${i}`}
            className={`absolute ${i % 2 === 0 ? 'rounded-full' : 'rounded-none'} ${i % 3 === 0 ? 'rotate-45' : 'rotate-0'}`}
            style={{
              width: `${8 + i * 3}px`,
              height: `${8 + i * 3}px`,
              background: `rgba(37, 99, 235, ${0.1 - i * 0.005})`,
              top: `${5 + i * 10}%`,
              left: `${3 + i * 10}%`,
              animation: `floating-circle ${4 + i * 0.3}s infinite ease-in-out`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      {/* Section Header */}
      <div className="text-center mb-16 relative z-20">
        <h2 className="bg-gradient-to-br from-white to-cyan-100 bg-clip-text text-transparent text-5xl font-bold text-center mb-4"
          style={{ 
            textShadow: "0 4px 8px rgba(0,0,0,0.3)",
            animation: "fade-in-up 0.8s ease-out",
            filter: "drop-shadow(0 0 10px rgba(255,255,255,0.3))"
          }}>
          Get In Touch
        </h2>
        
        <div className="w-30 h-1 bg-gradient-to-r from-white to-cyan-100 mx-auto rounded"
          style={{ animation: "slide-in-left 0.8s ease-out 0.3s both" }} />

        <p className="text-white/80 text-xl mt-8 max-w-2xl mx-auto leading-relaxed"
          style={{ animation: "fade-in-up 0.8s ease-out 0.5s both" }}>
          Have a project in mind or want to collaborate? I'd love to hear from you!
          Send me a message and I'll get back to you as soon as possible.
        </p>
      </div>

      {/* Contact Form Container */}
      <div className="max-w-4xl mx-auto px-8 relative z-20">
        <div className="glass-morphism p-12 rounded-3xl"
          style={{ animation: "fade-in-up 0.8s ease-out 0.7s both" }}>
          <form onSubmit={handleSubmit}>
            {/* Name and Email Row */}
            <div className={`grid mb-8 ${isMobile ? 'grid-cols-1 gap-6' : 'grid-cols-2 gap-10'}`}>
              <div className={isMobile ? '' : 'pr-2'}>
                <label className="block text-white/90 text-base font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-2xl border border-white/20 bg-white/10 text-white text-base backdrop-blur-sm transition-all duration-300 outline-none focus:border-blue-500/50 focus:shadow-blue-500/20 focus:shadow-lg"
                  placeholder="Your Name"
                />
              </div>

              <div className={isMobile ? '' : 'pl-2'}>
                <label className="block text-white/90 text-base font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-4 rounded-2xl border border-white/20 bg-white/10 text-white text-base backdrop-blur-sm transition-all duration-300 outline-none focus:border-blue-500/50 focus:shadow-blue-500/20 focus:shadow-lg"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            {/* Subject Field */}
            <div className="mb-8">
              <label className="block text-white/90 text-base font-medium mb-2">
                Subject *
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full p-4 rounded-2xl border border-white/20 bg-white/10 text-white text-base backdrop-blur-sm transition-all duration-300 outline-none focus:border-blue-500/50 focus:shadow-blue-500/20 focus:shadow-lg"
                placeholder="Project Inquiry / Collaboration / General Question"
              />
            </div>

            {/* Message Field */}
            <div className="mb-8">
              <label className="block text-white/90 text-base font-medium mb-2">
                Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="w-full p-4 rounded-2xl border border-white/20 bg-white/10 text-white text-base backdrop-blur-sm transition-all duration-300 outline-none resize-y min-h-[120px] focus:border-blue-500/50 focus:shadow-blue-500/20 focus:shadow-lg"
                placeholder="Tell me about your project, ideas, or just say hello..."
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className={`text-white border-2 border-white/30 px-12 py-5 rounded-full text-lg font-semibold backdrop-blur-sm transition-all duration-300 outline-none min-w-[200px] ${
                  isSubmitting 
                    ? 'bg-gray-500/80 cursor-not-allowed' 
                    : 'bg-gradient-to-br from-blue-600/80 to-blue-700/80 cursor-pointer hover:transform hover:-translate-y-1 hover:shadow-blue-500/40 hover:shadow-2xl'
                }`}
                style={{ boxShadow: "0 10px 30px rgba(37, 99, 235, 0.3)" }}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <p className="mt-4 text-emerald-400 text-base font-medium">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              )}

              {submitStatus === "config_error" && (
                <p className="mt-4 text-amber-400 text-base font-medium p-3 bg-amber-400/10 rounded-lg border border-amber-400/30">
                  ⚠️ EmailJS configuration needed. Check console for details or use the mailto link that just opened.
                </p>
              )}

              {submitStatus === "error" && (
                <p className="mt-4 text-red-400 text-base font-medium">
                  ✗ Failed to send message. Please try again or email me directly.
                </p>
              )}
            </div>
          </form>

          {/* Alternative Contact Info */}
          <div className="mt-12 pt-8 border-t border-white/10 text-center">
            <p className="text-white/70 text-base mb-4">
              Prefer direct contact?
            </p>
            <a 
              href="mailto:sabridokhan2@gmail.com"
              className="text-blue-600 text-lg font-semibold no-underline transition-colors duration-300 hover:text-blue-700"
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