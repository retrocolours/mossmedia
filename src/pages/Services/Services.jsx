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
            Perfect for intimate ceremonies, featuring short-form edits and
            cinematic storytelling.
          </p>
          <ul className="package-card__features">
            <li>
              <FaCheck className="package-card__icon" /> Up to 4 hours of coverage
            </li>
            <li>
              <FaCheck className="package-card__icon" /> 1 videographer
            </li>
            <li>
              <FaCheck className="package-card__icon" /> 5-7 minute highlight film
            </li>
          </ul>
          <div className="package-card__price">$1,800</div>
          <button className="package-card__button">Book Now</button>
        </div>
        <div className="package-card">
          <img
            src={one}
            alt="Golden Memories"
            className="package-card__image"
          />
          <h2 className="package-card__name">Golden Memories</h2>
          <h3 className="package-card__tagline">
            Cherish your golden moments forever.
          </h3>
          <p className="package-card__description">
            A beautifully crafted package that captures every heartfelt moment
            of your special day with cinematic flair.
          </p>
          <div className="package-card__price">$2,500</div>
          <button className="package-card__button">Book Now</button>
        </div>
        <div className="package-card">
          <img
            src={two}
            alt="Timeless Elegance"
            className="package-card__image"
          />
          <h2 className="package-card__name">Timeless Elegance</h2>
          <h3 className="package-card__tagline">
            Creating memories that last a lifetime.
          </h3>
          <p className="package-card__description">
            A sophisticated package offering full-day coverage, drone shots, and
            an expertly edited highlight reel.
          </p>
          <div className="package-card__price">$3,800</div>
          <button className="package-card__button">Book Now</button>
        </div>
        <div className="package-card">
          <img
            src={three}
            alt="Romantic Bliss"
            className="package-card__image"
          />
          <h2 className="package-card__name">Romantic Bliss</h2>
          <h3 className="package-card__tagline">
            Celebrate your love story with style.
          </h3>
          <p className="package-card__description">
            Perfect for intimate ceremonies, featuring short-form edits and
            cinematic storytelling.
          </p>
          <div className="package-card__price">$1,800</div>
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
