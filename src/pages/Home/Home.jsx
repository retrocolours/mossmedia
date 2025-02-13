import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "./Home.scss";
import three from "../../assets/Images/three.jpg";
import five from "../../assets/Images/five.jpg";
import six from "../../assets/Images/six.jpg";
import teaser from "../../assets/Videos/teaser.mp4";
import touch from "../../assets/Images/touch.jpg";
import story from "../../assets/Images/story.jpg";
import ring from "../../assets/Images/ring.jpg";
import colour from "../../assets/Images/colour.jpg";
import wine from "../../assets/Images/wine.jpg";
import people from "../../assets/Images/people.jpg";

const Home = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

        const weddingVideos = response.data.data.filter((video) =>
          video.tags.some((tag) => tag.name.toLowerCase() === "wedding")
        );

        setVideos(weddingVideos);
        setIsLoading(false);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  // Slider settings for the carousel
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
          dots: true,
          vertical: true,
          verticalSwiping: true,
          arrows: false,
          appendDots: (dots) => (
            <div className="vertical-dots">
              <ul>{dots}</ul>
            </div>
          ),
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
                our services to the Greater Vancouver Area. The name{" "}
                <span className="about__name">Moss Media</span> symbolizes a
                unique connection between Iceland and Canada, the countries we
                call our home. In both places, moss thrives as a symbol of
                resilience and natural beauty, growing across diverse
                landscapes. This shared element of our environments inspired us,
                as it mirrors the values that we cherish: resilience, diversity
                and the preservation of beauty.
              </p>

              <img src={five} alt="Elegant moment" className="about__image" />
            </div>
            <div className="about__box-three">
              <p className="about__text">
                <span className="about__name">Moss Media</span> is a small
                family-run business that takes pride in offering a personal
                approach to each client. We value compassionate communication
                and transparency in our craft. With us, you’ll never have to
                worry about hidden fees or surprises, as we are upfront about
                all our pricing and services. We understand that planning a
                wedding can be stressful, which is why we guarantee a calm,
                smooth, and enjoyable experience when working with us. To our
                treasured clients, we offer a range of thoughtfully designed
                packages to make your wedding day truly unforgettable. From the
                vows to the first dance, we capture every moment with care,
                creativity, and attention to detail.
              </p>

              <img
                src={six}
                alt="Elegant moment"
                className="about__image about__image--third"
              />
            </div>
          </div>
        </section>

        <section className="videos">
          <div className="videos__container">
            <h2 className="videos__title">Our Videos</h2>
          </div>
          <div>
            {isLoading ? (
              <div className="videos__loading">Our videos are loading...</div>
            ) : videos.length === 0 ? (
              <div className="videos__empty">No videos available</div>
            ) : (
              <>
                <Slider {...settings} className="videos__carousel">
                  {videos.map((video) => (
                    <div key={video.uri} className="videos__item">
                      <iframe
                        src={`https://player.vimeo.com/video/${
                          video.uri.split("/")[2]
                        }`}
                        title={video.name}
                        frameBorder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowFullScreen
                      ></iframe>
                      <p className="videos__caption">{video.name}</p>
                    </div>
                  ))}
                </Slider>
                <button className="videos__cta">Our Portfolio</button>
              </>
            )}
          </div>
        </section>

        <section className="expect">
          <h2 className="expect__title">What we offer</h2>
          <div className="expect__features">
            <div className="expect__top">
              <div className="expect__feature">
                <h3 className="expect__heading">Cinematic Quality</h3>
                <img
                  src={ring}
                  alt="Cinematic Quality"
                  className="expect__image"
                />
                <p className="expect__text">
                  Every moment we capture is filmed with professional equipment
                  in stunning 4K UHD, ensuring breathtaking visuals and
                  cinematic quality throughout your wedding video.
                </p>
              </div>
              <div className="expect__feature">
                <h3 className="expect__heading">Audio and Colour Correction</h3>
                <img
                  src={colour}
                  alt="Cinematic Quality"
                  className="expect__image"
                />
                <p className="expect__text">
                  We capture crystal-clear audio of every heartfelt moment for
                  you to cherish forever. Our professional color correction
                  preserves the natural vibrancy of your special day.
                </p>
              </div>
              <div className="expect__feature">
                <h3 className="expect__heading">Elegant Storytelling</h3>
                <img
                  src={story}
                  alt="Cinematic Quality"
                  className="expect__image"
                />
                <p className="expect__text">
                  We focus on crafting a unique story and setting the perfect
                  mood, thoughtfully tailored to reflect the essence of your
                  relationship.
                </p>
              </div>
            </div>
            <div className="expect__bottom">
              <div className="expect__feature">
                <h3 className="expect__heading">Full Day Coverage</h3>
                <img
                  src={people}
                  alt="Cinematic Quality"
                  className="expect__image"
                />
                <p className="expect__text">
                  We may be booked for the entire day, ensuring every cherished
                  moment of your celebration is beautifully captured.
                </p>
              </div>
              <div className="expect__feature">
                <h3 className="expect__heading">Competitive prices</h3>
                <img
                  src={wine}
                  alt="Cinematic Quality"
                  className="expect__image"
                />
                <p className="expect__text">
                  No hidden fees. Our business is built on honesty and upfront
                  communication.{" "}
                </p>
              </div>
              <div className="expect__feature">
                <h3 className="expect__heading">Personal touch</h3>
                <img
                  src={touch}
                  alt="Black sheep standing in a field"
                  className="expect__image"
                />
                <p className="expect__text">
                  We care about you and your special day. 24/7 communication
                  with us is available.{" "}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="packages">
          <div className="packages__card packages__card--diamond">
            <Link to="/services" className="packages__link">
              <h3 className="packages__title">Best Value</h3>
              <h1 className="packages__headline">Diamond:</h1>
              <p className="packages__description">A Full Day of Footage</p>
              <p className="packages__description">
                Preparation, Ceremony & Reception
              </p>
            </Link>
          </div>

          <div className="packages__card packages__card--gold">
            <Link to="/services" className="packages__link">
              <h3 className="packages__title">Most Popular</h3>
              <h1 className="packages__headline">Gold:</h1>
              <p className="packages__description">Ceremony & Reception</p>
            </Link>
          </div>
          <div className="packages__card packages__card--silver">
            <Link to="/services" className="packages__link">
              <h3 className="packages__title">Classic & Unforgettable</h3>
              <h1 className="packages__headline">Silver</h1>
              <p className="packages__description">Preparation & Ceremony</p>
            </Link>
          </div>
          <div className="packages__card packages__card--pearl">
            <Link to="/services" className="packages__link">
              <h3 className="packages__title">Simple & Elegant</h3>
              <h1 className="packages__headline">Pearl</h1>
              <p className="packages__description">Ceremony</p>
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default Home;
