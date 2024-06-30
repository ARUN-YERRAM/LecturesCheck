import React, { useEffect, useState } from "react";
import axios from "axios";

const BACKEND_URI = "http://localhost:4000";

const VideosList = () => {
  const [allVideos, setAllVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${BACKEND_URI}/api/v1/media/all`);
      console.log(response.data);
      setAllVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  return (
    <div className="container mt-5">
      <h4>Uploaded Videos:</h4>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th style={{ paddingLeft: "100px" }}>Name</th>
            <th style={{ paddingLeft: "100px" }}>Video</th>
          </tr>
        </thead>
        <tbody>
          {allVideos.length > 0 ? (
            allVideos.map((video, index) => (
              <tr key={index}>
                <td style={{ paddingLeft: "100px" }}>{video.name}</td>
                <td>
                  {video.videos.map((videoUrl, idx) => (
                    <video key={idx} width="320" height="240" controls>
                      <source src={`${BACKEND_URI}${videoUrl.replace(/\\/g, "/")}`} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ))}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="2" style={{ textAlign: "center" }}>No videos available</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default VideosList;
