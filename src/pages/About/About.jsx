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
import about from "../../assets/Images/about.jpg";
import stefan from "../../assets/Images/stefan.jpeg";

const About = () => {
  return (
    <div className="about-container">
      {/* Top Section */}
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

      {/* Services Section */}
      <h2 className="heading">Meet Our Team</h2>
      <h2 className="team__container-title">Stefan Mekkinosson</h2>
      {/* <section className="team">
        <div className="team__container">
            <div className="team__text">
        
          <p className="team__container-description">
            Founder, main videographer, editor.
          </p>
          <p className="team__container-description">
            Born and raised in Iceland Stefan is an Icelandic-Canadian
            award-winning filmmaker and videographer. He left his homwcountry to
            pursue adventures in his second home, Canada. As a dedicated wedding
            videographer, my passion lies in capturing the essence and magic of
            your special day. I believe every love story is unique and deserves
            to be preserved with artistry and attention to detail, creating a
            film as unforgettable as the moments themselves. From the quiet,
            intimate exchanges to the joyous celebrations, I approach every
            wedding with care and creativity, ensuring no detail is overlooked.
            With years of experience and a heartfelt commitment to excellence, I
            strive to craft timeless films that not only reflect your story but
            surpass your expectations. Your wedding day is one of life’s most
            cherished milestones, and I am honored to help you preserve these
            memories in a way that you’ll treasure for years to come.
          </p>
        </div>
        </div>
        <div className="team__box team__container--right">
          <img className="team__container-image" src={stefan} alt="Stefan Mekkinosson" />
        </div>
      </section> */}
<section class="team">
  <div class="team__container team__container--left">
    <p class="team__container-description">Founder, main videographer, editor.</p>
    <p class="team__container-description">
    Born and raised in Iceland, Stefan is an Icelandic-Canadian
            award-winning filmmaker and videographer. He left his home country
            to pursue adventures in his second home, Canada. As a dedicated
            wedding videographer, my passion lies in capturing the essence and
            magic of your special day. I believe every love story is unique and
            deserves to be preserved with artistry and attention to detail,
            creating a film as unforgettable as the moments themselves. From the
            quiet, intimate exchanges to the joyous celebrations, I approach
            every wedding with care and creativity, ensuring no detail is
            overlooked. With years of experience and a heartfelt commitment to
            excellence, I strive to craft timeless films that not only reflect
            your story but surpass your expectations. Your wedding day is one of
            life’s most cherished milestones, and I am honored to help you
            preserve these memories in a way that you’ll treasure for years to
            come.
    </p>
  </div>
  <div class="team__container team__container--right">
    <img
      class="team__container-image"
      src={stefan}
      alt="Stefan Mekkinosson"
    />
  </div>
</section>



      {/* Team Section */}
      {/* <section className="about__team">
        <div className="about__team-description">
          <p>
            We are made up of two creatives and a trusted team of developers and
            growth experts around the world.
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
      </section> */}

      {/* Services Section */}
      <section className="team">
        <div className="team__container team__container--right">
          <img className="stefan" src={stefan} alt="Stefan Mekkinosson" />
        </div>
        <div className="team__container team__container--left">
          <h2 className="team__container-title">Stefan Mekkinosson</h2>
          <p className="team__container-description">
            Founder, main videographer, editor.
          </p>
          <p className="team__container-description">
            Born and raised in Iceland, Stefan is an Icelandic-Canadian
            award-winning filmmaker and videographer. He left his home country
            to pursue adventures in his second home, Canada. As a dedicated
            wedding videographer, my passion lies in capturing the essence and
            magic of your special day. I believe every love story is unique and
            deserves to be preserved with artistry and attention to detail,
            creating a film as unforgettable as the moments themselves. From the
            quiet, intimate exchanges to the joyous celebrations, I approach
            every wedding with care and creativity, ensuring no detail is
            overlooked. With years of experience and a heartfelt commitment to
            excellence, I strive to craft timeless films that not only reflect
            your story but surpass your expectations. Your wedding day is one of
            life’s most cherished milestones, and I am honored to help you
            preserve these memories in a way that you’ll treasure for years to
            come.
          </p>
        </div>
      </section>

      <section className="section-three">
        <button className="about__cta">Talk to Us</button>
      </section>
    </div>
  );
};

export default About;
