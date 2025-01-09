import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./Home.scss";
import one from "../../assets/Images/one.jpg";
import two from "../../assets/Images/two.jpg";
import three from "../../assets/Images/three.jpg";
// import four from "../../assets/Images/four.jpg";
import teaser from "../../assets/Videos/teaser.mp4";
// import "font-awesome/css/font-awesome.min.css";

const Home = () => {
  const [videos, setVideos] = useState([]);

  // Fetch Vimeo videos
  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await axios.get(
          "https://api.vimeo.com/users/217327133/videos",
          {
            headers: {
              Authorization: `Bearer ${process.env.REACT_APP_VIMEO_ACCESS_TOKEN}`,
            },
          }
        );
        setVideos(response.data.data); // Vimeo API returns video data in the `data` field
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  //   Slider settings for the carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <main className="home">
        <section className="hero">
          <video autoPlay loop muted className="hero__video" playsInline>
            <source src={teaser} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="hero__image"></div>
          <div className="hero__content">
            <h1 className="hero__title">Modern & elegant wedding films</h1>
            <p className="hero__subtitle">
              Preserving lifelong memories, one frame at a time.
            </p>
            <button className="hero__cta">View Portfolio</button>
          </div>
        </section>

        {/* About Us Section */}
        {/* <section className="about">
          <div className="about__content">
            <h2 className="about__title">About Us</h2>
            <p className="about__description">
              At Moss Media, we specialize in creating captivating wedding films
              that tell your unique story. With years of experience and a deep
              passion for storytelling, we ensure that every frame captures the
              essence of your special day.
            </p>
            <div className="about__cards">
              <div className="card">
                <h3 className="card__title">Who We Are</h3>
                <p className="card__text">
                  A team of professional filmmakers dedicated to turning your
                  memories into cinematic masterpieces.
                </p>
              </div>
              <div className="card">
                <h3 className="card__title">What We Do</h3>
                <p className="card__text">
                  We craft elegant, timeless wedding films that preserve every
                  heartfelt moment for generations to come.
                </p>
              </div>
            </div>
          </div>
        </section> */}

        <section className="about">
          <div className="about__container">
            <div className="about__text">
              <h2 className="about__title">About Us</h2>
              <p className="about__description">
                Welcome to Moss Media! We a creative group of professional
                videographers who we specialize in creating captivating wedding
                films that tell your unique story. With years of experience and
                a deep passion for storytelling, we ensure every frame captures
                the essence of your special day.
              </p>
              <p className="about__description">
                Our mission is to capture the world from captivating angles,
                elevating perspectives through innovative drone photography and
                videography. We embody flexibility, seamlessly adapting to our
                clients' needs and envisioning creative approaches to every
                project. Committed to excellence, we thrive on hard work,
                ensuring each image reflects our dedication to precision and
                quality. Safety is our cornerstone. We prioritize the well-being
                of our team, clients, and surroundings in every aerial endeavor.
                Striving for excellence in every aspect, we rigorously adhere to
                all FAA regulations, guaranteeing not only stunning visuals but
                also peace of mind for all in our environment. With a blend of
                creativity, diligence, and adherence to safety standards, we
                redefine the possibilities of aerial photography, capturing
                moments that inspire and endure. (this needs to be changed and shorter).
              </p>
            </div>
            <div className="about__images">
              <img src={one} alt="Elegant moment" className="about__image" />
              <img src={two} alt="Cinematic moment" className="about__image" />
              <img src={three} alt="Memorable scene" className="about__image" />
            </div>
          </div>
        </section>

        {/* <section className="about">
  <div className="about__container">
    <div className="about__images">
      <div className="about__image-container with-text">
        <img src={one} alt="Elegant moment" className="about__image" />
        <div className="about__overlay-text">
          <h2 className="about__title">About Us</h2>
          <p className="about__description">
            At Moss Media, we specialize in creating captivating wedding films that
            tell your unique story. With years of experience and a deep passion for
            storytelling, we ensure every frame captures the essence of your special day.
          </p>
        </div>
      </div>
      <img src={two} alt="Cinematic moment" className="about__image" />
      <img src={three} alt="Memorable scene" className="about__image" />
    </div>
    <div className="about__decorative-line"></div>
    <div className="about__text">
      <h2 className="about__title">Our Approach</h2>
      <p className="about__description">
        Every wedding is a unique story, and our team of skilled filmmakers is dedicated
        to capturing its essence through beautiful cinematography and storytelling.
      </p>
    </div>
  </div>
</section> */}

        {/* What to Expect Section */}
        <section className="expect">
          <h2 className="expect__title">What we offer</h2>
          <p className="expect__description">
            I focus on creating high quality videos that tell the unique story
            of your wedding. From the vows to the first dance, I capture every
            moment with care and creativity.
          </p>
          <div className="expect__features">
            <div className="feature">
              <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
              <h3 className="feature__title">Cinematic Quality</h3>
              <p className="feature__text">Beautiful visuals, shot in 4k</p>
            </div>
            <div className="feature">
              <img
                src={two}
                alt="Professional Audio"
                className="feature__image"
              />
              <h3 className="feature__title">Professional Audio</h3>
              <p className="feature__text">High quality microphones</p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Elegant Storytelling"
                className="feature__image"
              />
              <h3 className="feature__title">Elegant Storytelling</h3>
              <p className="feature__text">Emotional, engaging films</p>
            </div>
            <div className="feature">
              <img src={one} alt="Drone Footage" className="feature__image" />
              <h3 className="feature__title">Drone Footage</h3>
              <p className="feature__text">Stunning aerial views</p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Full Day Coverage"
                className="feature__image"
              />
              <h3 className="feature__title">Full Day Coverage</h3>
              <p className="feature__text">Capture every moment</p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Full Day Coverage"
                className="feature__image"
              />
              <h3 className="feature__title">Competitive prices</h3>
              <p className="feature__text">No hidden fees. Our buisness is built on honesty and upfront communication. </p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Full Day Coverage"
                className="feature__image"
              />
              <h3 className="feature__title">Personal touch</h3>
              <p className="feature__text">We care about you and your special day. 24/7 communication with us is available. </p>
            </div>
          </div>
          {/* <button className="hero__cta">Check out Packages & Prices</button> */}
        </section>

        {/* What to Expect Section */}
        <section className="expect">
          <h2 className="expect__title">Packages</h2>
          <div className="expect__features">
            <div className="feature">
              <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
              <h3 className="feature__title">Diamond: Best value</h3>
              <p className="feature__text">A Full Day of Footage (Preparation, ceremony and reception.)</p>
            </div>
            <div className="feature">
              <img
                src={two}
                alt="Professional Audio"
                className="feature__image"
              />
              <h3 className="feature__title">Gold: Most Popular</h3>
              <p className="feature__text">Ceremony & Reception</p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Elegant Storytelling"
                className="feature__image"
              />
              <h3 className="feature__title">Silver: Classic & Unforgettable</h3>
              <p className="feature__text">Preparation & Ceremony</p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Full Day Coverage"
                className="feature__image"
              />
              <h3 className="feature__title">Pearl: Simple & Elegant</h3>
              <p className="feature__text">Ceremony</p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Full Day Coverage"
                className="feature__image"
              />
              <h3 className="feature__title">Custom</h3>
              <p className="feature__text">Request additions unique to you</p>
            </div>
          </div>
          <button className="hero__cta">Find out more</button>
        </section>

        {/* Vimeo Videos Section */}
        <section className="videos">
          <h2 className="videos__title">Our Videos</h2>
          <Slider {...settings} className="video-carousel">
            {videos.map((video) => (
              <div key={video.uri} className="video-item">
                <iframe
                  src={`https://player.vimeo.com/video/${
                    video.uri.split("/")[2]
                  }`}
                  title={video.name}
                  frameBorder="0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>
                <p>{video.name}</p>
              </div>
            ))}
          </Slider>
        </section>
      </main>
    </>
  );
};

export default Home;