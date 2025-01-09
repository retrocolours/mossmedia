import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "./Portfolio.scss";

const Portfolio = () => {
  const [videos, setVideos] = useState([]);
  const [currentVideo, setCurrentVideo] = useState(0);

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
        setVideos(response.data.data);
      } catch (error) {
        console.error("Error fetching videos:", error);
      }
    };

    fetchVideos();
  }, []);

  const nextVideo = () => {
    setCurrentVideo((prev) => (prev + 1) % videos.length);
  };

  const prevVideo = () => {
    setCurrentVideo((prev) =>
      prev === 0 ? videos.length - 1 : prev - 1
    );
  };

  if (videos.length === 0) {
    return <div>Loading videos...</div>;
  }

  const video = videos[currentVideo];

  return (
    <div className="container">
      <div className="video-section">
       
        <ReactPlayer
          url={video.link}
          width="100%"
          height="100%"
          controls
        />
        {/* <div className="video-footer">
          © Your Brand {new Date().getFullYear()}
        </div> */}
      </div>
      <div className="info-section">
  
        <div className="content">
          <div className="thumbnail">
            <img src={video.pictures.sizes[2].link} alt={video.name} />
          </div>
          <h1>{video.name}</h1>
          <p>{video.description}</p>
        </div>
        <div className="navigation">
          <button onClick={prevVideo}>&lt;</button>
          <button onClick={nextVideo}>&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
