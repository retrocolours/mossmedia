import React from "react";
import "./Services.scss";
// import one from "../../assets/Images/one.jpg";
// import two from "../../assets/Images/two.jpg";
// import three from "../../assets/Images/three.jpg";
// import { FaCheck } from "react-icons/fa";
// import { useEffect } from "react";
// import gsap from "gsap";
import diamond from "../../assets/Images/diamond.png";
import gold2 from "../../assets/Images/gold2.jpg";
import silver3 from "../../assets/Images/silver3.jpg";
import pearl5 from "../../assets/Images/pearl5.png";
// import hero from "../../assets/Images/hero.jpg";

const services = [
  {
    title: "Diamond Package",
    description:
      "Best Value for your love story.  This package is timeless. If you want to relive your entire wedding day, from morning to evening, we highly recommend this package. ",
    image: diamond,
  },
  {
    title: "Gold Package",
    description:
      "Cherish your golden moments forever. This package captures all the most important moments of the day, from the ceremony in the church to the first dance.",
    image: gold2,
  },
  {
    title: "Silver Package",
    description:
      "Classic & Unforgettable. Half-Day of Footage. We arrive during the first part of the day to capture moments such as the preparations for the ceremony and post-ceremony footage and the ceremony as well.",
    image: silver3,
  },
  {
    title: "Pearl Package",
    description:
      "Simple & Elegant. The entire ceremony, regardless of where it is held, is recorded in full and edited together.",
    image: pearl5,
  },
];

const Services = () => {
  return (
    // <div className="packages-page">
    //   <h1 className="packages-page__title">Our Wedding Packages</h1>
    //   <div className="packages-page__container">
    //     <div className="package-card">
    //       <img
    //         src={three}
    //         alt="Romantic Bliss"
    //         className="package-card__image"
    //       />
    //       <h2 className="package-card__name">Diamond Package</h2>
    //       <h3 className="package-card__tagline">
    //         Best Value for your love story.
    //       </h3>
    //       <p className="package-card__description">
    //         A Full Day of Footage (Preparation, ceremony, and reception.)
    //       </p>
    //       <p className="package-card__description">
    //         This package is timeless. If you want to relive your entire wedding
    //         day, from morning to evening, we highly recommend this package.
    //       </p>
    //       <p className="package-card__description">Includes:</p>
    //       <ul className="package-card__features">
    //         <li>
    //           <FaCheck className="package-card__icon" /> A 7-10 minute highlight
    //           film covering the entire wedding day, edited to music and
    //           delivered in 4K.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" /> A 1-minute
    //           trailer-style video of your wedding day, perfect for sharing on
    //           social media.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Separate videos of your first dance and all the speeches from the
    //           reception, so you can enjoy reliving the heartfelt words.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           The entire ceremony, captured in full wherever it takes place,
    //           unedited.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Quality wireless microphone placed on the officiant to ensure
    //           crystal-clear audio.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Professionally edited and Color corrected using industry standard
    //           software's such as Adobe Premiere Pro and DaVinci Resolve.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Video gimbal stabilizer for high-quality, cinematic shots.
    //         </li>
    //       </ul>
    //       <div className="package-card__price">$4,000</div>
    //       <button className="package-card__button">Book Now</button>
    //     </div>
    //     <div className="package-card">
    //       <img
    //         src={one}
    //         alt="Golden Memories"
    //         className="package-card__image"
    //       />
    //       <h2 className="package-card__name">Golden Package</h2>
    //       <h3 className="package-card__tagline">
    //         Cherish your golden moments forever.
    //       </h3>
    //       <p className="package-card__description">
    //         Ceremony and Reception Coverage
    //       </p>
    //       <p className="package-card__description">
    //         This package captures all the most important moments of the day,
    //         from the ceremony in the church to the first dance.
    //       </p>
    //       <p className="package-card__description">Includes:</p>
    //       <ul className="package-card__features">
    //         <li>
    //           <FaCheck className="package-card__icon" />A 5-8 minute highlight
    //           film covering your wedding day, edited to music and delivered in
    //           4K.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />A 1-minute trailer-style
    //           video of your wedding day, perfect for sharing on social media.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Separate videos of your first dance and all the speeches from the
    //           reception, so you can enjoy reliving the heartfelt words.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           The entire ceremony, captured in full wherever it takes place,
    //           unedited.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Quality wireless microphone placed on the officiant to ensure
    //           crystal-clear audio.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Professionally edited and Color corrected using industry standard
    //           software's such as Adobe Premiere Pro and DaVinci Resolve.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Video gimbal stabilizer for high-quality, cinematic shots.
    //         </li>
    //       </ul>
    //       <div className="package-card__price">$3,500</div>
    //       <button className="package-card__button">Book Now</button>
    //     </div>

    //     <div className="package-card">
    //       <img
    //         src={two}
    //         alt="Timeless Elegance"
    //         className="package-card__image"
    //       />
    //       <h2 className="package-card__name">Silver Package</h2>
    //       <h3 className="package-card__tagline">Classic & Unforgettable</h3>
    //       <p className="package-card__description">Preparation & Ceremony</p>
    //       <p className="package-card__description">
    //         Half-Day of Footage. We arrive during the first part of the day to
    //         capture moments such as the preparations for the ceremony and
    //         post-ceremony footage and the ceremony as well.
    //       </p>
    //       <p className="package-card__description">Includes:</p>
    //       <ul className="package-card__features">
    //         <li>
    //           <FaCheck className="package-card__icon" />A 4-6 minute highlight
    //           film covering any preparations all the way until the end of the
    //           wedding ceremony, edited to music and delivered in 4K.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />A 1-minute trailer-style
    //           video of your wedding day, perfect for sharing on social media.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           The entire ceremony, captured in full wherever it takes place,
    //           unedited.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Quality wireless microphone placed on the officiant to ensure
    //           crystal-clear audio.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Professionally edited and Color corrected using industry standard
    //           software's such as Adobe Premiere Pro and DaVinci Resolve.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Video gimbal stabilizer for high-quality, cinematic shots.
    //         </li>
    //       </ul>
    //       <div className="package-card__price">$2,800</div>
    //       <button className="package-card__button">Book Now</button>
    //     </div>
    //     <div className="package-card">
    //       <img
    //         src={three}
    //         alt="Romantic Bliss"
    //         className="package-card__image"
    //       />
    //       <h2 className="package-card__name">Pearl Package</h2>
    //       <h3 className="package-card__tagline">Simple & Elegant</h3>
    //       <p className="package-card__description">Ceremony Only</p>
    //       <p className="package-card__description">
    //         The entire ceremony, regardless of where it is held, is recorded in
    //         full and edited together.
    //       </p>
    //       <ul className="package-card__features">
    //         <li>
    //           <FaCheck className="package-card__icon" />A 3-5 minute highlight
    //           film covering the wedding ceremony, Video will be edited to music
    //           and delivered in 4K.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />A 1-minute trailer-style
    //           video of your wedding day, perfect for sharing on social media.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           The entire ceremony, captured in full wherever it takes place,
    //           unedited.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Quality wireless microphone placed on the officiant to ensure
    //           crystal-clear audio.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Professionally edited and Color corrected using industry standard
    //           software's such as Adobe Premiere Pro and DaVinci Resolve.
    //         </li>
    //         <li>
    //           <FaCheck className="package-card__icon" />
    //           Video gimbal stabilizer for high-quality, cinematic shots.
    //         </li>
    //       </ul>
    //       <div className="package-card__price">$2,000</div>
    //       <button className="package-card__button">Book Now</button>
    //     </div>
    //   </div>

    //   <div className="addons-section">
    //     <h2 className="addons-section__title">Additional Services & Addons</h2>
    //     <p className="addons-section__subtitle">
    //       Choose from our list of additional services and addons to create a
    //       custom package that fits your unique needs
    //     </p>
    //     <p className="addons-section__description">
    //       All of our packages include a pre-wedding consultation, professional
    //       audio recording, and digital delivery of your films. For more
    //       information or to get a quote, please contact us.
    //     </p>
    //     <div className="addons-section__container">
    //       <div className="addon-card">
    //         <div className="addon-card__icon">📹</div>
    //         <h3 className="addon-card__title">Drone Coverage</h3>
    //         <p className="addon-card__description">
    //           Aerial views of your venue and surroundings
    //         </p>
    //       </div>
    //       <div className="addon-card">
    //         <div className="addon-card__icon">🎥</div>
    //         <h3 className="addon-card__title">Extended Highlight Film</h3>
    //         <p className="addon-card__description">
    //           Add up to 5 minutes to your highlight film
    //         </p>
    //       </div>
    //       <div className="addon-card">
    //         <div className="addon-card__icon">📸</div>
    //         <h3 className="addon-card__title">Raw Footage</h3>
    //         <p className="addon-card__description">
    //           All unedited footage from the day
    //         </p>
    //       </div>
    //       <div className="addon-card">
    //         <div className="addon-card__icon">🎙️</div>
    //         <h3 className="addon-card__title">Audio Enhancement</h3>
    //         <p className="addon-card__description">
    //           Clean up background noise or muffled audio
    //         </p>
    //       </div>
    //       <div className="addon-card">
    //         <div className="addon-card__icon">✂️</div>
    //         <h3 className="addon-card__title">Social Media Teasers</h3>
    //         <p className="addon-card__description">
    //           15-30 second clips for Instagram and TikTok
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <>
      <div className="wrapper">
        <section className="services-hero">
          {/* <img src={hero} className="services-hero__image" alt="Wedding Services" /> */}
          <h1 className="services-hero__title">Our Services & Prices</h1>
        </section>
        {/* <div className="dot-wrapper">
<span className="dot">•</span>
</div> */}

        <section class="services-comparison">
          <div class="services-comparison__container">
            <h2 class="services-comparison__title">
              Compare Our Wedding Packages
            </h2>

            <table class="services-comparison__table">
              <thead>
                <tr>
                  <th>Features</th>
                  <th>Diamond</th>
                  <th>Gold</th>
                  <th>Silver</th>
                  <th>Pearl</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Final Video Length</td>
                  <td>6-8 Minutes</td>
                  <td>5 Minutes</td>
                  <td>5 Minutes</td>
                  <td>3 Minutes</td>
                </tr>
                <tr>
                  <td>Preparations (Before the Ceremony)</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__red">✖</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__red">✖</td>
                </tr>
                <tr>
                  <td>Full Ceremony</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                </tr>
                <tr>
                  <td>Reception (After the Ceremony)</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__red">✖</td>
                  <td className="services-comparison__red">✖</td>
                </tr>

                <tr>
                  <td>Recording of the full ceremony unedited</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                </tr>
                <tr>
                  <td>First Dance + Speeches as standalone videos</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__red">✖</td>
                  <td className="services-comparison__red">✖</td>
                </tr>
                <tr>
                  <td>1-min cinematic trailer</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                </tr>
                <tr>
                  <td>Vows recording</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                </tr>
                <tr>
                  <td>Edited & delivered in 4-6 weeks</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                  <td className="services-comparison__green">✔</td>
                </tr>
                <tr>
                  <td>Price</td>
                  <td>4,000 $</td>
                  <td>3,500 $</td>
                  <td>2,800 $</td>
                  <td>2,000 $</td>
                </tr>
              </tbody>
            </table>
            <h2 class="services-comparison__title">
              Add-on Services & Extras (can be added to any package)
            </h2>
            <table class="services-comparison__table">
              {/* <thead>
                <tr>
                  <th>Features</th>
                  <th>Diamond</th>
                  <th>Gold</th>
                  <th>Silver</th>
                  <th>Pearl</th>
                </tr>
              </thead> */}
              <tbody>
                <tr>
                  <td>Half-day of additional filming (up to 4 hours)</td>
                  <td>
                    Would you like any pre- or post-wedding events included in
                    the video, such as photoshoots, dinners, or
                    bachelor/bachelorette parties? This footage can be added to
                    the wedding video, likely extending it by at least a minute.
                  </td>
                  <td>1, 000 $</td>
                </tr>
                <tr>
                  <td>Full day of additional filming (up to 8 hours)</td>
                  <td>
                    Would you like any pre- or post-wedding events included in
                    the video, such as photoshoots, dinners, or
                    bachelor/bachelorette parties? This footage can be added to
                    the wedding video, likely extending it by at least a minute.
                  </td>
                  <td>1, 600 $</td>
                </tr>
                <tr>
                  <td>Your Love Story on Film</td>
                  <td>
                    Tell us how it all began! Share your love story in front of
                    the camera—indoors or outdoors at your favorite spot. You
                    set the scene, the atmosphere, and the humor. This package
                    includes a sit-down interview and one hour of filming with
                    the couple. The final edit is a 3-6 minute video, separate
                    from the main wedding film. These are priceless memories for
                    your children, grandchildren, family, and friends. It’s also
                    perfect for playing at the wedding reception. If you’d like
                    to show the video at the event, filming needs to take place
                    well before the big day. Let’s chat and find a time!
                  </td>
                  <td>800 $</td>
                </tr>
                <tr>
                  <td>FOMO edit</td>
                  <td>
                    Worried about all the incredible moments happening behind
                    the scenes on your big day? That’s where our FOMO (Fear Of
                    Missing Out) Clip comes in—a 2 to 4-hour video capturing
                    everything filmed on your wedding day. All footage from the
                    day is compiled in chronological order using Adobe Premiere
                    Pro, with unnecessary shots removed. However, this video
                    will not be color-graded or include music. Delivered
                    separately from the wedding film on an external drive, this
                    raw footage preserves precious memories that would otherwise
                    be lost. Later in life, you can revisit, edit, and
                    color-correct the footage if desired. External hard drive up
                    to 2TB is included in the price.
                  </td>
                  <td>800 $</td>
                </tr>
              </tbody>
            </table>
            <button className="services-comparison__button">Book Now</button>
          </div>
        </section>
        <section className="service-section">
          <div className="service-section__container">
            <span className="service-section__dot"></span>
            {services.map((service, index) => (
              <div className="service-section__card" key={index}>
                <div className="service-section__content">
                  <h2 className="service-section__title">{service.title}</h2>
                  <p className="service-section__description">
                    {service.description}
                  </p>
                </div>
                <div className="service-section__image-container">
                  <img
                    className="service-section__image"
                    src={service.image}
                    alt={service.title}
                  />
                </div>
              </div>
            ))}
            <span className="service-section__dot"></span>
          </div>
        </section>
      </div>
    </>
  );
};

export default Services;

// import React from "react";
// import "./Services.scss";

// const packages = [
//   {
//     name: "Diamond",
//     includes: [
//       "Full-day coverage from preparations to the final moments.",
//       "6-8 minute highlight video in 4K with stabilizer gimbal.",
//       "1-minute cinematic trailer.",
//       "Vows recorded and intertwined (if requested).",
//       "Edited and delivered within 4-6 weeks."
//     ]
//   },
//   {
//     name: "Gold",
//     includes: [
//       "8 hours of coverage.",
//       "5-minute highlight video.",
//       "1-minute cinematic trailer.",
//       "Vows recorded and intertwined (if requested).",
//       "Edited and delivered within 4-6 weeks."
//     ]
//   },
//   {
//     name: "Silver",
//     includes: [
//       "4-6 hours of coverage (preparation + ceremony, not party).",
//       "5-minute highlight video in 4K with stabilizer gimbal.",
//       "1-minute cinematic trailer.",
//       "Vows recorded and intertwined (if requested).",
//       "Edited and delivered within 4-6 weeks."
//     ]
//   },
//   {
//     name: "Pearl",
//     includes: [
//       "Covers only the wedding ceremony.",
//       "3-minute highlight video.",
//       "1-minute cinematic trailer.",
//       "4K footage with stabilizer gimbal.",
//       "Vows recorded and intertwined (if requested).",
//       "Edited and delivered within 4-6 weeks."
//     ]
//   }
// ];

// const Services = () => {
//   return (
//     <section className="services-comparison">
//       <div className="services-comparison__container">
//         <div className="services-comparison__header">
//           <h2 className="services-comparison__title">Compare Our Wedding Packages</h2>
//         </div>
//         <div className="services-comparison__table">
//           <div className="services-comparison__column services-comparison__column--features">
//             <h3 className="services-comparison__package-name">Features</h3>
//             {packages[0].includes.map((feature, index) => (
//               <div key={index} className="services-comparison__feature">
//                 {feature}
//               </div>
//             ))}
//           </div>
//           {packages.map((pkg, pkgIndex) => (
//             <div key={pkgIndex} className="services-comparison__column">
//               <h3 className="services-comparison__package-name">{pkg.name}</h3>
//               {packages[0].includes.map((feature, featureIndex) => (
//                 <div key={featureIndex} className="services-comparison__indicator">
//                   {pkg.includes.includes(feature) ? (
//                     <span className="services-comparison__check">✔</span>
//                   ) : (
//                     <span className="services-comparison__cross">✖</span>
//                   )}
//                 </div>
//               ))}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Services;
