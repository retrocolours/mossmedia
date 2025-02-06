import React, { useState, useEffect } from "react";
import axios from "axios";
import ReactPlayer from "react-player";
import "./Portfolio.scss";

const Portfolio = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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

  if (isLoading) {
    return <div className="portfolio__loading">Loading videos...</div>;
  }

  if (videos.length === 0) {
    return <div className="portfolio__empty">No videos available</div>;
  }

  return (
    <div className="portfolio">
      {videos.map((video) => (
        <div className="portfolio__item" key={video.uri}>
          <div className="portfolio__player">
            <ReactPlayer url={video.link} width="100%" height="100%" controls />
          </div>
          <div className="portfolio__details">
            <h2 className="portfolio__title">{video.name}</h2>
            <p className="portfolio__description">{video.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Portfolio;
