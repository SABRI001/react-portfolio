/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

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
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
