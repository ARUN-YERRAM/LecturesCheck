import React, { useState, useEffect } from "react";
import axios from "axios";

const VideosList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/api/v1/media/all');
      setVideos(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  return (
    <div>
      <h1>Videos List</h1>
      {videos.length > 0 ? (
        <div>
          {videos.map((video) => (
            <div key={video._id}>
              <h2>{video.name}</h2>
              <div>
                {video.videos.map((videoUrl) => (
                  <video key={videoUrl} controls>
                    <source src={`http://localhost:4000${videoUrl}`} />
                    Your browser does not support the video tag.
                  </video>
                ))}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No videos available</p>
      )}
    </div>
  );
};

export default VideosList;
