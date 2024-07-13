import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VideosList = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const result = await axios.get('http://localhost:5000/api/getVideos');
      console.log('Fetched videos:', result.data);
      setVideos(result.data.videos); // Assuming backend returns an array of video objects
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const handleDelete = async (videoId, fileName) => {
    try {
      // Delete video from backend
      await axios.delete(`http://localhost:5000/api/videos/${videoId}`);

      // Update UI by removing the deleted video from the state
      setVideos(videos.filter(video => video._id !== videoId));

      // Optionally, delete video file from server (if required)
      await axios.delete(`http://localhost:5000/videos/${fileName}`);

      alert('Video deleted successfully!');
    } catch (error) {
      console.error('Error deleting video:', error);
      alert('Error deleting video');
    }
  };

  return (
    <div className="videos-list">
      <h2>All Videos</h2>
      <div className="video-items">
        {videos.map((video, index) => (
          <div key={index} className="video-item">
            <video controls>
              <source src={`http://localhost:5000/videos/${video.fileName}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div className="video-buttons">
              <button className="btn btn-primary mt-2" onClick={() => window.open(`http://localhost:3000/viewvideo/${video._id}`, '_blank')}>
                View
              </button>
              <button className="btn btn-danger mt-2" onClick={() => handleDelete(video._id, video.fileName)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VideosList;
