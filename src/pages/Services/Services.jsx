import React from "react";
import "./Services.scss";
import { Link } from "react-router-dom";

const services = [
  {
    title: "Diamond Package",
    description:
      "Best Value for your love story.  This package is timeless. If you want to relive your entire wedding day, from morning to evening, we highly recommend this package.",
    image: "diamond.png",
  },
  {
    title: "Gold Package",
    description:
      "Cherish your golden moments forever. This package captures all the most important moments of the day, from the ceremony in the church to the first dance.",
    image: "gold2.jpg",
  },
  {
    title: "Silver Package",
    description:
      "Classic & Unforgettable. Half-Day of Footage. We arrive during the first part of the day to capture moments such as the preparations for the ceremony and post-ceremony footage and the ceremony as well.",
    image: "silver3.jpg",
  },
  {
    title: "Pearl Package",
    description:
      "Simple & Elegant. The entire ceremony, regardless of where it is held, is recorded in full and edited together.",
    image: "pearl5.png",
  },
];

const Services = () => {
  return (
    <>
      <div className="wrapper">
        <section
          className="services-hero"
          style={{ backgroundImage: 'url("/Images/hero.jpg")' }}
        >
          <h1 className="services-hero__title">Our Services & Prices</h1>
        </section>

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
            <Link to="/contact">
              <button className="services-comparison__button">Book Now</button>
            </Link>
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
                    src={`/Images/${service.image}`}
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
