import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const BACKEND_URI = "http://localhost:4000";

function VideoLot() {
  const [videos, setVideos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const videosData = params.get("videos");
    if (videosData) {
      setVideos(JSON.parse(videosData));
    }
  }, [location.search]);

  const showVideo = (filename) => {
    window.open(`${BACKEND_URI}/videos/${filename}`, "_blank", "noreferrer");
  };

  const deleteVideo = async (id) => {
    try {
      const result = await axios.delete(`${BACKEND_URI}/delete-video/${id}`);
      if (result.data.status === 'ok') {
        setVideos(videos.filter(video => video.id !== id));
      } else {
        alert('Failed to delete the video');
      }
    } catch (error) {
      console.error("There was an error deleting the video!", error);
      alert('There was an error deleting the video!');
    }
  };

  return (
    <div className="uploaded">
      <h4>Uploaded Videos:</h4>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th style={{ paddingLeft: "100px" }}>Video</th>
            <th style={{ paddingLeft: "100px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {videos.map((video, index) => (
            <tr key={index}>
              <td style={{ paddingLeft: "100px" }}>{video.title}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => showVideo(video.filename)}
                  style={{ marginRight: "10px" }}
                >
                  Show Video
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteVideo(video.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default VideoLot;
