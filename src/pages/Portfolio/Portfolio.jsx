// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import ReactPlayer from "react-player";
// import "./Portfolio.scss";

// const Portfolio = () => {
//   const [videos, setVideos] = useState([]);
//   const [currentVideo, setCurrentVideo] = useState(0);
//   const [isVideoPlaying, setIsVideoPlaying] = useState(false);
//   const [isLoading, setIsLoading] = useState(true);

//   useEffect(() => {
//     const fetchVideos = async () => {
//       try {
//         const response = await axios.get(
//           "https://api.vimeo.com/users/217327133/videos",
//           {
//             headers: {
//               Authorization: `Bearer ${process.env.REACT_APP_VIMEO_ACCESS_TOKEN}`,
//             },
//           }
//         );
//         setVideos(response.data.data);
//         setIsLoading(false); // Set loading to false when videos are fetched
//       } catch (error) {
//         console.error("Error fetching videos:", error);
//       }
//     };

//     fetchVideos();
//   }, []);

//   const handleNextVideo = () => {
//     setIsVideoPlaying(false); // Stop the current video while navigating
//     setCurrentVideo((prev) => (prev + 1) % videos.length);
//   };

//   const handlePrevVideo = () => {
//     setIsVideoPlaying(false);
//     setCurrentVideo((prev) =>
//       prev === 0 ? videos.length - 1 : prev - 1
//     );
//   };

//   if (isLoading) {
//     return <div>Loading videos...</div>;
//   }

//   if (videos.length === 0) {
//     return <div>No videos available</div>;
//   }

//   const video = videos[currentVideo];

//   return (
//     <div className="container">
//       <div className="video-section">
//         {!isVideoPlaying && (
//           <div className="thumbnail">
//             <img
//               src={video.pictures.sizes[3].link} // Use optimized size
//               alt={video.name}
//               onClick={() => setIsVideoPlaying(true)} // Start playing on click
//             />
//             <div className="play-button" onClick={() => setIsVideoPlaying(true)}>
//               ▶ Play
//             </div>
//           </div>
//         )}
//         {isVideoPlaying && (
//           <ReactPlayer
//             url={video.link}
//             width="100%"
//             height="100%"
//             controls
//           />
//         )}
//         <div className="video-footer">
//           © Your Brand {new Date().getFullYear()}
//         </div>
//       </div>
//       <div className="info-section">
//         <div className="menu">
//           <button>MENU</button>
//         </div>
//         <div className="content">
//           <h1>{video.name}</h1>
//           <p>{video.description}</p>
//         </div>
//         <div className="navigation">
//           <button onClick={handlePrevVideo}>&lt;</button>
//           <button onClick={handleNextVideo}>&gt;</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Portfolio;


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
        setVideos(response.data.data);
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
            <ReactPlayer
              url={video.link}
              width="100%"
              height="100%"
              controls
            />
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
