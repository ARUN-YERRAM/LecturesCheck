import React, { useState} from "react";
import axios from "axios";
// import App1 from "../App1"; // Make sure to import App1
import "./css/Uploadvideo.css";
const BACKEND_URI = "http://localhost:4000";

const UploadForm = ({ getAllMedias }) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);

  

  const handleSubmit = (e) => {
    e.preventDefault();
    let formData = new FormData();
    for (let key in videos) {
      formData.append("videos", videos[key]);
    }
    formData.append("name", name);

    axios
      .post(`${BACKEND_URI}/api/v1/media/create`, formData)
      .then((response) => {
        getAllMedias();
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  // useEffect(() => {
  //   fetchVideos();
  // }, []);

  // const fetchVideos = async () => {
  //   try {
  //     const response = await axios.get(`${BACKEND_URI}/api/v1/media/all`);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error('Error fetching videos:', error);
  //   }
  // };

  return (
    <>
      <div className="uploadpdf container d-flex justify-content-center align-content-center mt-5" style={{"width": "100%", "height":"100%"}}>
        <form className="pdfform p-5" onSubmit={handleSubmit}>
          <h4>Upload Video</h4>
          <br/>
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            required
            onChange={(e) => setName(e.target.value)}
          />
          <br/>
          <input
            type="file"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
          <button type="submit" className="btn btn-primary mr-4 space-x-4 mt-4">
            Submit
          </button>
          
        </form>
      </div>
      {/* <App1 /> */}
    </>
  );
};

export default UploadForm;
