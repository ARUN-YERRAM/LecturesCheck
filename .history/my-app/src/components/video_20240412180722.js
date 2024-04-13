import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoUpload() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  useEffect(() => {
    fetchUploadedVideos();
  }, []);

  const fetchUploadedVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-videos');
      setUploadedVideos(response.data.data);
    } catch (error) {
      console.error('Error fetching uploaded videos:', error);
    }
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', video);

    try {
      const response = await axios.post('http://localhost:5000/upload-videos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      if (response.data.status === 'ok') {
        alert('Video uploaded successfully');
        fetchUploadedVideos();
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Title:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Video:</label>
          <input type="file" accept="video/*" onChange={handleVideoChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
      <div>
        <h2>Uploaded Videos</h2>
        {uploadedVideos.map((video) => (
          <div key={video._id}>
            <h3>Title: {video.title}</h3>
            <video width="320" height="240" controls>
              <source src={`http://localhost:5000/videos/${video.filename}`} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoUpload;
