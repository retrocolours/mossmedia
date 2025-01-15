import React from "react";
import "./Services.scss";
import one from "../../assets/Images/one.jpg";
import two from "../../assets/Images/two.jpg";
import three from "../../assets/Images/three.jpg";
import { FaCheck } from "react-icons/fa";

const Services = () => {
  return (
    <div className="packages-page">
      <h1 className="packages-page__title">Our Wedding Packages</h1>
      <div className="packages-page__container">
        <div className="package-card">
          <img
            src={three}
            alt="Romantic Bliss"
            className="package-card__image"
          />
          <h2 className="package-card__name">Diamond Package</h2>
          <h3 className="package-card__tagline">
            Best Value for your love story.
          </h3>
          <p className="package-card__description">
            A Full Day of Footage (Preparation, ceremony, and reception.)
          </p>
          <p className="package-card__description">
            This package is timeless. If you want to relive your entire wedding
            day, from morning to evening, we highly recommend this package.
          </p>
          <p className="package-card__description">Includes:</p>
          <ul className="package-card__features">
            <li>
              <FaCheck className="package-card__icon" /> A 7-10 minute highlight
              film covering the entire wedding day, edited to music and
              delivered in 4K.
            </li>
            <li>
              <FaCheck className="package-card__icon" /> A 1-minute
              trailer-style video of your wedding day, perfect for sharing on
              social media.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Separate videos of your first dance and all the speeches from the
              reception, so you can enjoy reliving the heartfelt words.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              The entire ceremony, captured in full wherever it takes place,
              unedited.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Quality wireless microphone placed on the officiant to ensure
              crystal-clear audio.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Professionally edited and Color corrected using industry standard
              software's such as Adobe Premiere Pro and DaVinci Resolve.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Video gimbal stabilizer for high-quality, cinematic shots.
            </li>
          </ul>
          <div className="package-card__price">$4,000</div>
          <button className="package-card__button">Book Now</button>
        </div>
        <div className="package-card">
          <img
            src={one}
            alt="Golden Memories"
            className="package-card__image"
          />
          <h2 className="package-card__name">Golden Package</h2>
          <h3 className="package-card__tagline">
            Cherish your golden moments forever.
          </h3>
          <p className="package-card__description">
            Ceremony and Reception Coverage
          </p>
          <p className="package-card__description">
            This package captures all the most important moments of the day,
            from the ceremony in the church to the first dance.
          </p>
          <p className="package-card__description">Includes:</p>
          <ul className="package-card__features">
            <li>
              <FaCheck className="package-card__icon" />A 5-8 minute highlight
              film covering your wedding day, edited to music and delivered in
              4K.
            </li>
            <li>
              <FaCheck className="package-card__icon" />A 1-minute trailer-style
              video of your wedding day, perfect for sharing on social media.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Separate videos of your first dance and all the speeches from the
              reception, so you can enjoy reliving the heartfelt words.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              The entire ceremony, captured in full wherever it takes place,
              unedited.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Quality wireless microphone placed on the officiant to ensure
              crystal-clear audio.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Professionally edited and Color corrected using industry standard
              software's such as Adobe Premiere Pro and DaVinci Resolve.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Video gimbal stabilizer for high-quality, cinematic shots.
            </li>
          </ul>
          <div className="package-card__price">$3,500</div>
          <button className="package-card__button">Book Now</button>
        </div>

        <div className="package-card">
          <img
            src={two}
            alt="Timeless Elegance"
            className="package-card__image"
          />
          <h2 className="package-card__name">Silver Package</h2>
          <h3 className="package-card__tagline">Classic & Unforgettable</h3>
          <p className="package-card__description">Preparation & Ceremony</p>
          <p className="package-card__description">
            Half-Day of Footage. We arrive during the first part of the day to
            capture moments such as the preparations for the ceremony and
            post-ceremony footage and the ceremony as well.
          </p>
          <p className="package-card__description">Includes:</p>
          <ul className="package-card__features">
            <li>
              <FaCheck className="package-card__icon" />A 4-6 minute highlight film covering any preparations all the way until the end of the wedding ceremony, edited to music and delivered in 4K.
            </li>
            <li>
              <FaCheck className="package-card__icon" />A 1-minute trailer-style video of your wedding day, perfect for sharing on social media.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              The entire ceremony, captured in full wherever it takes place,
              unedited.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Quality wireless microphone placed on the officiant to ensure
              crystal-clear audio.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Professionally edited and Color corrected using industry standard
              software's such as Adobe Premiere Pro and DaVinci Resolve.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Video gimbal stabilizer for high-quality, cinematic shots.
            </li>
          </ul>
          <div className="package-card__price">$2,800</div>
          <button className="package-card__button">Book Now</button>
        </div>
        <div className="package-card">
          <img
            src={three}
            alt="Romantic Bliss"
            className="package-card__image"
          />
          <h2 className="package-card__name">Pearl Package</h2>
          <h3 className="package-card__tagline">
            Simple & Elegant
          </h3>
          <p className="package-card__description">Ceremony Only</p>
          <p className="package-card__description">
          The entire ceremony, regardless of where it is held, is recorded in full and edited together.
          </p>
          <ul className="package-card__features">
            <li>
              <FaCheck className="package-card__icon" />A 3-5 minute highlight film covering the wedding ceremony, Video will be edited to music and delivered in 4K.
            </li>
            <li>
              <FaCheck className="package-card__icon" />A 1-minute trailer-style video of your wedding day, perfect for sharing on social media.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              The entire ceremony, captured in full wherever it takes place,
              unedited.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Quality wireless microphone placed on the officiant to ensure
              crystal-clear audio.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Professionally edited and Color corrected using industry standard
              software's such as Adobe Premiere Pro and DaVinci Resolve.
            </li>
            <li>
              <FaCheck className="package-card__icon" />
              Video gimbal stabilizer for high-quality, cinematic shots.
            </li>
          </ul>
          <div className="package-card__price">$2,000</div>
          <button className="package-card__button">Book Now</button>
        </div>
      </div>

      {/* Additional Services Section */}
      <div className="addons-section">
        <h2 className="addons-section__title">Additional Services & Addons</h2>
        <p className="addons-section__subtitle">
          Choose from our list of additional services and addons to create a
          custom package that fits your unique needs
        </p>
        <p className="addons-section__description">
          All of our packages include a pre-wedding consultation, professional
          audio recording, and digital delivery of your films. For more
          information or to get a quote, please contact us.
        </p>
        <div className="addons-section__container">
          <div className="addon-card">
            <div className="addon-card__icon">📹</div>
            <h3 className="addon-card__title">Drone Coverage</h3>
            <p className="addon-card__description">
              Aerial views of your venue and surroundings
            </p>
          </div>
          <div className="addon-card">
            <div className="addon-card__icon">🎥</div>
            <h3 className="addon-card__title">Extended Highlight Film</h3>
            <p className="addon-card__description">
              Add up to 5 minutes to your highlight film
            </p>
          </div>
          <div className="addon-card">
            <div className="addon-card__icon">📸</div>
            <h3 className="addon-card__title">Raw Footage</h3>
            <p className="addon-card__description">
              All unedited footage from the day
            </p>
          </div>
          <div className="addon-card">
            <div className="addon-card__icon">🎙️</div>
            <h3 className="addon-card__title">Audio Enhancement</h3>
            <p className="addon-card__description">
              Clean up background noise or muffled audio
            </p>
          </div>
          <div className="addon-card">
            <div className="addon-card__icon">✂️</div>
            <h3 className="addon-card__title">Social Media Teasers</h3>
            <p className="addon-card__description">
              15-30 second clips for Instagram and TikTok
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
