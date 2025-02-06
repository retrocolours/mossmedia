import React from "react";
import "./About.scss";
import stefan from "../../assets/Images/stefan.jpeg";
import tanya from "../../assets/Images/tanya.jpg";
import about from "../../assets/Images/about.jpg";

const employees = [
  {
    name: "Stefan Mekkinosson",
    title: "Founder, main videographer, editor",
    image: stefan,
    description: `Born and raised in Iceland, Stefan is an Icelandic-Canadian award-winning filmmaker and videographer. 
      He left his home country to pursue adventures in his second home, Canada. As a dedicated wedding videographer, 
      his passion lies in capturing the essence and magic of your special day. He believes every love story is unique and 
      deserves to be preserved with artistry and attention to detail.`,
  },
  {
    name: "Tatiana Privezentseva",
    title: "Assistant Videographer & Editor",
    image: tanya,
    description: `Tatiana brings creativity and precision to every project. With a keen eye for detail and a passion for storytelling, 
      she ensures every video captures the unique spirit of each event. Tatiana specializes in post-production editing, bringing moments 
      to life through expert cuts and thoughtful composition.`,
  },
];

const About = () => {
  return (
    <div className="about-container">
      <section className="about-container__intro">
        <img
          src={about}
          alt="A married couple enjoying Icelandic nature"
          className="about-container__hero"
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

      <h2 className="heading">Meet Our Team</h2>
      <section className="team">
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
                src={employee.image}
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
      </section>

      <section className="section-three">
        <button className="about__cta">Talk to Us</button>
      </section>
    </div>
  );
};

export default About;
