
// import React from "react";
// import "./About.scss";

// const About = () => {
//   const teamMembers = [
//     {
//       name: "Jane Doe",
//       title: "Videographer & Editor",
//       image: "/path/to/jane.jpg",
//       description:
//         "Jane has a passion for storytelling and a keen eye for capturing life's most beautiful moments. With over 5 years of experience in wedding videography, she ensures each project is uniquely tailored to the couple's story.",
//     },
//     {
//       name: "John Smith",
//       title: "Creative Director",
//       image: "/path/to/john.jpg",
//       description:
//         "John brings creativity and vision to every project. His expertise in directing and cinematography adds a cinematic touch to wedding videos, creating memories that last forever.",
//     },
//   ];

//   return (
//     <div className="about">
//       <h1 className="about__title">About Us</h1>
//       <div className="about__team">
//         {teamMembers.map((member, index) => (
//           <div key={index} className="about__member">
//             <img
//               src={member.image}
//               alt={member.name}
//               className="about__member-image"
//             />
//             <h2 className="about__member-name">{member.name}</h2>
//             <p className="about__member-title">{member.title}</p>
//             <p className="about__member-description">{member.description}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default About;


// About.js
import React from "react";
import "./About.scss";

const About = () => {
  return (
    <div className="about">
      {/* Top Section */}
      <section className="about__intro">
        <p className="about__intro-text">
          Copenhagen based agency with a focus on thoughtful creative and growth for unconventional ideas.
        </p>
        <p className="about__intro-us">At Moss Media, we are more than just videographers – we are storytellers dedicated to capturing life's most cherished moments. With a deeply personal approach, we specialize in crafting meaningful narratives that resonate for a lifetime. From intimate family gatherings, weddings and special moments with your loved ones, to corporate milestones and promotional videos, our passion lies in preserving the essence of each unique story. We believe in community involvement, working closely with individuals and businesses alike to ensure that every frame reflects the authenticity and depth of the moment. At Moss Media, we don't just create videos – we curate memories that endure, celebrating the richness of human connection one story at a time. Your journey is our canvas, and our commitment to preserving precious memories extends across borders, reaching both the rugged landscapes of Iceland and the diverse communities of Canada. From Reykjavik to Vancouver, we are committed to bridge distances to weave together the tapestry of human experience, connecting hearts and memories across the North Atlantic and beyond.</p>
        <div className="about__scroll-indicator">
          <span className="about__dot"></span>
          <p className="about__scroll-text">more</p>
        </div>
      </section>

      {/* Services Section */}
      <section className="about__services">
        <div className="about__service about__service--left">
          <h2 className="about__service-title">Creative</h2>
          <p className="about__service-description">
            Identities, strategy, animation, UI design and more, driven by emotion.
          </p>
        </div>
        <div className="about__service about__service--right">
          <h2 className="about__service-title">Growth</h2>
          <p className="about__service-description">
            User insights, analytics, acquisition and retention, driven by data.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="about__team">
        <div className="about__team-description">
          <p>
            We are made up of two creatives and a trusted team of developers and growth experts around the world.
          </p>
          <div className="about__team-members">
            <p>
              Jane Doe <span>Creative Director</span>
            </p>
            <p>
              John Smith <span>Growth Director</span>
            </p>
          </div>
        </div>
        <div className="about__team-photo">
          <img src="/path/to/team-photo.jpg" alt="Our Team" />
        </div>
      </section>

      {/* Studio Section */}
      <section className="about__studio">
        <div className="about__studio-photo">
          <img src="/path/to/studio-photo.jpg" alt="Studio Location" />
        </div>
        <div className="about__studio-info">
          <p>
            Our studio sits within a house built in 1869 on the lakes of Østerbro, Copenhagen. We’re always happy to welcome anyone in for a coffee, beer, or a chat.
          </p>
          <address>Sortedam Dossering 55, 2100 København</address>
        </div>
      </section>
    </div>
  );
};

export default About;
