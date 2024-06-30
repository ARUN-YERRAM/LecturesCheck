import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

function Lot() {
  const [pdfs, setPdfs] = useState([]);
  const [videos, setVideos] = useState([]);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const pdfsData = params.get("pdfs");
    const videosData = params.get("videos");

    if (pdfsData) {
      setPdfs(JSON.parse(pdfsData));
    }
    if (videosData) {
      setVideos(JSON.parse(videosData));
    }
  }, [location.search]);

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  const deletePdf = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:5000/delete-file/${id}`);
      if (result.data.status === 'ok') {
        setPdfs(pdfs.filter(pdf => pdf._id !== id));
      } else {
        alert('Failed to delete the file');
      }
    } catch (error) {
      console.error("There was an error deleting the file!", error);
      alert('There was an error deleting the file!');
    }
  };

  const showVideo = (video) => {
    window.open(`http://localhost:4000/videos/${video}`, "_blank", "noreferrer");
  };

  const deleteVideo = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:4000/delete-video/${id}`);
      if (result.data.status === 'ok') {
        setVideos(videos.filter(video => video._id !== id));
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
      <h4>Uploaded Files:</h4>
      <table className="table table-hover table-dark">
        <thead>
          <tr>
            <th style={{ paddingLeft: "100px" }}>Title</th>
            <th style={{ paddingLeft: "100px" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {pdfs.map((data, index) => (
            <tr key={index}>
              <td style={{ paddingLeft: "100px" }}>{data.title}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => showPdf(data.pdf)}
                  style={{ marginRight: "10px" }}
                >
                  Show PDF
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deletePdf(data._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
          {videos.map((data, index) => (
            <tr key={index}>
              <td style={{ paddingLeft: "100px" }}>{data.title}</td>
              <td>
                <button
                  className="btn btn-primary"
                  onClick={() => showVideo(data.filename)}
                  style={{ marginRight: "10px" }}
                >
                  Show Video
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteVideo(data._id)}
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

export default Lot;
