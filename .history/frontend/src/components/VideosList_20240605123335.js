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
      const response = await axios.get(`${BACKEND_URI}/get-videos`);
      console.log(response.data.data);
      setAllVideos(response.data.data);
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
          {allVideos &&
            allVideos.map((video, index) => (
              <tr key={index}>
                <td style={{ paddingLeft: "100px" }}>{video.title}</td>
                <td>
                  <video width="320" height="240" controls>
                    <source src={`${BACKEND_URI}/videos/${video.filename}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default VideosList;
