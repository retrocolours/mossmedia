import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "./Home.scss";
import one from "../../assets/Images/one.jpg";
import two from "../../assets/Images/two.jpg";
import three from "../../assets/Images/three.jpg";
// import four from "../../assets/Images/four.jpg";
import five from "../../assets/Images/five.jpg";
import six from "../../assets/Images/six.jpg";
import teaser from "../../assets/Videos/teaser.mp4";
import touch from "../../assets/Images/touch.jpg";
import story from "../../assets/Images/story.jpg";
import fullday from "../../assets/Images/fullday.jpg";
import colour from "../../assets/Images/colour.jpg";
import cake from "../../assets/Images/cake.jpg";
import wine from "../../assets/Images/wine.jpg";

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
     
        <section className="expect">
        
          <div className="expect__container">
          <h2 className="expect__title">What we offer</h2>
          </div>
          <div className="expect__features">
            <div className="expect__top">
            <div className="expect__feature">
             
              <h3 className="expect__name">Cinematic Quality</h3>
              <img
                src={two}
                alt="Cinematic Quality"
                className="expect__image"
              />
              <p className="expect__text">Beautiful visuals, shot in 4k</p>
           
            </div>
            <div className="expect__feature">
             
              <h3 className="expect__name">Professional Audio and Colour Correction</h3>
              <img
                src={colour}
                alt="Cinematic Quality"
                className="expect__image"
              />
              <p className="expect__text">High quality microphones</p>
            </div>
            <div className="expect__feature">
              
              <h3 className="expect__name">Elegant Storytelling</h3>
              <img
                src={story}
                alt="Cinematic Quality"
                className="expect__image"
              />
              <p className="expect__text">Emotional, engaging films</p>
            </div>
            </div>
            <div className="expect__bottom">
            <div className="expect__feature">
           
              <h3 className="expect__name">Full Day Coverage</h3>
              <img
                src={cake}
                alt="Cinematic Quality"
                className="expect__image"
              />
              <p className="expect__text">Capture every moment</p>
            </div>
            <div className="expect__feature">
           
              <h3 className="expect__name">Competitive prices</h3>
              <img
                src={wine}
                alt="Cinematic Quality"
                className="expect__image"
              />
              <p className="expect__text">
                No hidden fees. Our buisness is built on honesty and upfront
                communication.{" "}
              </p>
            </div>
            <div className="expect__feature">
             
              <h3 className="expect__name">Personal touch</h3>
              <img
                src={touch}
                alt="Black sheep standing in a field"
                className="expect__image"
              />
              <p className="expect__text">
                We care about you and your special day. 24/7 communication with
                us is available.{" "}
              </p>
            </div>
            </div>
          </div>
       
          
          {/* <div class="container">
	<div class="boxes">
		<div class="box">
			<p class="icon">Cinematic Quality</p>
      <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
			The King can move just one square at a time in any direction. It should be defended at all times by the other pieces as once checkmated the game is lost.
		</div>
		<div class="box">
			<p class="icon">Professional Audio</p>
      <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
			The most powerful piece on the board, the Queen can move any number of squares in straight lines or on the diagonal until obstructed by another piece.
		</div>
		<div class="box">
			<p class="icon">Elegant Storytelling</p>
      <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
			After the Queen the Rook is the next most powerful piece on the board. It can move any number of squares in a straight line until obstructed by another piece.
		</div>
	</div>
	<div class="boxes">
		<div class="box">
			<p class="icon">Full Day Coverage</p>
      <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
			The Bishop can move any number of squares on the diagonal until obstructed by another piece. Each Bishop will always occupy squares of the same colour as it's starting square.
		</div>
		<div class="box">
			<p class="icon">Competitive prices</p>
      <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
			The Knight can move to any of the eight squares of the opposite colour to the one on which it stands that are either two ranks or two files away. It's move is not obstructed by other pieces.
		</div>
		<div class="box">
			<p class="icon">Personal touch</p>
		  <img
                src={three}
                alt="Cinematic Quality"
                className="feature__image"
              />
			Considered the weakest piece on the board the Pawn can only move forward one square at a time on the same file, except for it's first move when it can move two squares forward. On reaching the eighth rank a Pawn can be promoted to the value of any other piece.
		</div>
	</div> */}

          {/* </div>  */}
          {/* <div className="expect__offers">
         
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
          </div>
          </div> */}
          {/* <button className="hero__cta">Check out Packages & Prices</button> */}
        </section>

        {/* What to Expect Section */}
        <section className="packages">
          <h2 className="packages__title">Packages</h2>
          <div className="packages__features">
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
