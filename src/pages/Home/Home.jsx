import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./Home.scss";
import one from "../../assets/Images/one.jpg";
import two from "../../assets/Images/two.jpg";
import three from "../../assets/Images/three.jpg";
// import four from "../../assets/Images/four.jpg";
import five from "../../assets/Images/five.jpg";
import teaser from "../../assets/Videos/teaser.mp4";
import { FiVolume } from "react-icons/fi";

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
          </video>
          <div className="hero__image"></div>
          <div className="hero__content">
            <h1 className="hero__title">Cinematic wedding films</h1>
            <p className="hero__subtitle">
              Preserving lifelong memories, one frame at a time.
            </p>
          </div>
        </section>

        <section className="about">
          <h2 className="about__title">About Us</h2>
          <div className="about__container">
            <div className="about__box-one">
              <p className="about__text">
                Welcome to <span className="about__name">Moss Media</span>! We
                are a small creative group of professional videographers. We
                specialize in making cinematic wedding films that tell unique
                love stories. With years of experience and a deep passion for
                storytelling, we ensure every frame captures the essence of your
                special day and preserves precious memories for years to come.
              </p>
              <img src={three} alt="Memorable scene" className="about__image" />
            </div>

            <div className="about__box-two">
              <p className="about__text">
                Originally founded in Reykjavik, Iceland, we have since expanded
                our services to the Greater Vancouver Area. The name Moss Media
                symbolizes a unique connection between Iceland and Canada, the
                countries we call our home. In both places, moss thrives as a
                symbol of resilience and natural beauty, growing across diverse
                landscapes. This shared element of our environments inspired us,
                as it mirrors the values that we cherish: resilience, diversity
                and the preservation of beauty.
              </p>

              <img src={five} alt="Elegant moment" className="about__image" />
            </div>
            <div className="about__box-three">
              <p className="about__text">
                Moss Media is a small family-run business that takes pride in
                offering a personal approach to each client. We value
                compassionate communication and transparency in our craft. With
                us, you’ll never have to worry about hidden fees or surprises,
                as we are upfront about all our pricing and services. We understand
                that planning a wedding can be stressful, which is why we
                guarantee a calm, smooth, and enjoyable experience when working
                with us. To our treasured clients, we offer a range of
                thoughtfully designed packages to make your wedding day truly
                unforgettable. From the vows to the first dance, we capture
                every moment with care, creativity, and attention to detail.
              </p>

              <img src={two} alt="Elegant moment" className="about__image" />
            </div>
          </div>
        </section>

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
              <p className="feature__text">
                No hidden fees. Our buisness is built on honesty and upfront
                communication.{" "}
              </p>
            </div>
            <div className="feature">
              <img
                src={one}
                alt="Full Day Coverage"
                className="feature__image"
              />
              <h3 className="feature__title">Personal touch</h3>
              <p className="feature__text">
                We care about you and your special day. 24/7 communication with
                us is available.{" "}
              </p>
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
              <p className="feature__text">
                A Full Day of Footage (Preparation, ceremony and reception.)
              </p>
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
              <h3 className="feature__title">
                Silver: Classic & Unforgettable
              </h3>
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
