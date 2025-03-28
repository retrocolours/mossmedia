import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";

const employees = [
  {
    name: "Stefan Mekkinosson",
    title: "Founder, main videographer, editor",
    image: "stefan.jpeg",
    description: `Born and raised in Iceland, Stefan is an Icelandic-Canadian award-winning filmmaker and videographer. 
      His passion lies in capturing the essence and magic of your special day. He believes every love story is unique and 
      deserves to be preserved with artistry and attention to detail. In his free time enjoys finding inspiration in nature, playing boardgames with friends, and watching films that push creative boundaries.`,
  },
  {
    name: "Tatiana Privezentseva",
    title: "Assistant Videographer, Editor, Web Developer",
    image: "tanya.png",
    description: `Tatiana is a Russian-Canadian software engineer, videographer, and editor with a passion for both technology and storytelling. 
      With a keen eye for composition and detail, she ensures every project reflects the couple’s unique story. Her background in web development also allows her to create digital experiences that complement the cinematic work of Moss Media. 
      In her free time, Tatiana enjoys coding, reading, and exploring artistic ways to contribute to her community.`,
  },
];

const About = () => {
  return (
    <div className="about-container">
      <section className="about-container__intro">
        <img
          className="about-container__intro-image"
          src="/Images/about.jpg"
          alt="A married couple enjoying Icelandic nature"
        />
        <p className="about-container__intro-text">
          Vancouver based videography studio with a focus on preserving precious
          memories and telling love stories.
        </p>
        <span className="about-container__dot"></span>
        <p className="about-container__intro-us">
          At Moss Media, we are more than just videographers – we are
          storytellers dedicated to capturing life's most cherished moments.
          With a deeply personal approach, we specialize in crafting meaningful
          narratives that resonate for a lifetime. From intimate family
          gatherings, weddings and special moments with your loved ones, to
          corporate milestones and promotional videos, our passion lies in
          preserving the essence of each unique story. We believe in community
          involvement, working closely with individuals and businesses alike to
          ensure that every frame reflects the authenticity and depth of the
          moment. At Moss Media, we don't just create videos – we curate
          memories that endure, celebrating the richness of human connection one
          story at a time. Your journey is our canvas, and our commitment to
          preserving precious memories extends across borders, reaching both the
          rugged landscapes of Iceland and the diverse communities of Canada.
          From Reykjavik to Vancouver, we are committed to bridge distances to
          weave together the tapestry of human experience, connecting hearts and
          memories across the North Atlantic and beyond.
        </p>
        <span className="about-container__dot"></span>
      </section>

      <section className="team">
        <h2 className="heading">Meet Our Team</h2>
        {employees.map((employee, index) => (
          <div
            key={index}
            className={`team__container ${
              index % 2 === 0
                ? "team__container--image-right"
                : "team__container--image-left"
            }`}
          >
            <div className="team__image-wrapper">
              <img
                className="team__image"
                src={`/Images/${employee.image}`}
                alt={employee.name}
              />
            </div>

            <div className="team__text-wrapper">
              <h2 className="team__title">{employee.name}</h2>
              <p className="team__role">{employee.title}</p>
              <p className="team__description">{employee.description}</p>
            </div>
          </div>
        ))}
        <Link to="/contact">
          <button className="team__cta">Tell Us Your Story</button>
        </Link>
      </section>
    </div>
  );
};

export default About;
