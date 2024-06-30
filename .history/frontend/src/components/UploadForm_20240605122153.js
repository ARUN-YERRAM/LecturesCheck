import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/Uploadpdf.css";
import UploadsList from "./UploadsList";

const BACKEND_URI = "http://localhost:4000";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState([]);
  const [showVideos, setShowVideos] = useState(false);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(`${BACKEND_URI}/api/v1/media`);
      console.log(response.data);
      setAllVideos(response.data);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (let key in videos) {
      formData.append("videos", videos[key]);
    }
    formData.append("name", name);

    try {
      const response = await axios.post(
        `${BACKEND_URI}/api/v1/media/create`,
        formData
      );
      fetchVideos(); // Refresh video list after uploading
      alert("Submitted successfully");
    } catch (error) {
      console.log(error);
      alert("Error happened!");
    }
  };

  const handleShowVideos = () => {
    setShowVideos(true);
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
      {!showVideos ? (
        <form className="pdfform p-5" onSubmit={handleSubmit}>
          <h4>Upload Video</h4>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <input
            type="file"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => setVideos(e.target.files)}
          />
          <br />
          <button type="submit" className="btn btn-primary mr-4 space-x-4 mt-4">
            Submit
          </button>
          <button
            type="button"
            className="btn btn-primary mt-4"
            onClick={handleShowVideos}
            style={{ marginLeft: "12px" }}
          >
            Show Videos
          </button>
        </form>
      ) : (
        <UploadsList medias={allVideos} />
      )}
    </div>
  );
};

export default UploadForm;
