import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/Uploadpdf.css";

const BACKEND_URI = "http://localhost:4000";

const UploadForm = () => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formData = new FormData();
    for (let key in videos) {
      formData.append("videos", videos[key]);
    }
    formData.append("name", name);

    try {
      await axios.post(`${BACKEND_URI}/api/v1/media/create`, formData);
      alert("Submitted successfully");
    } catch (error) {
      console.log(error);
      alert("Error happened!");
    }
  };

  const handleShowVideos = () => {
    navigate("/videos");
  };

  return (
    <div className="container d-flex justify-content-center align-items-center mt-5">
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
    </div>
  );
};

export default UploadForm;
