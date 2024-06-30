import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom'; // Update imports
import axios from "axios";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import "./css/Uploadpdf.css";
import App1 from "../App1";
import Lot from "./Lot.js";


// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url
// ).toString();


function FileUpload() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [allVideos, setAllVideos] = useState([]);
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate(); // useNavigate instead of useHistory


  useEffect(() => {
    fetchVideos();
    getPdf();
  }, []);
    
  const fetchVideos = async () => {
    try {
      const response = await axios.get('http://localhost:4000/get-videos');
      console.log(response.data.data);
      setAllVideos(response.data.data);
    } catch (error) {
      console.error('Error fetching videos:', error);
    }
  };

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/get-files");
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error('Error fetching PDFs:', error);
    }
  };

  // const submitVideo = async (e) => {
  //   e.preventDefault();
  //   const formData = new FormData();
  //   formData.append('title', title);
  //   formData.append('video', file);
  //   console.log(title,file);
  //   try {
  //     const response = await axios.post('http://localhost:4000/upload-videos', formData, {
  //       headers: { 'Content-Type': 'multipart/form-data' }
  //     });
  //     console.log(response.data);
  //     if (response.data.message === "ok") {
  //       alert('Uploaded Successfully!!!');
  //       fetchVideos();
  //     }
  //   } catch (error) {
  //     console.error('Error uploading video:', error);
  //   }
  // };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
    
    try {
      const result = await axios.post(
        "http://localhost:5000/upload-files",
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );
      console.log(result);
  
      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPdf();
      }
    } catch (error) {
      console.error('Error uploading PDF:', error);
    }
  };

  const navigateToLot = () => {
    navigate(`/lot?pdfs=${JSON.stringify(allImage)}`); 
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

  return (
    <>
      <Navbar/>
      <Sidebar/>
      
      <div className="container d-flex justify-content-center align-items-center">
        <form className="pdfform p-5" onSubmit={submitImage}>
          <h4>Upload Pdf</h4>
          <br />
          <input
            type="text"
            className="form-control"
            placeholder="Title"
            required    
            onChange={(e) => setTitle(e.target.value)}
          />
          <br />
          <input
            type="file"
            className="form-control"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />
          <br/>
          <button className="btn btn-primary mr-4 space-x-4" type="submit">
            Submit
          </button>

          <button className="btn btn-primary" onClick={navigateToLot} style={{marginLeft:"12px"}}>
            View
          </button>
        </form>

  
        {/* <div className="uploaded">
          <h4>Uploaded PDF:</h4>
          <div className="output-div">
            {allImage && allImage.map((data) => (
              <div className="inner-div" key={data.id}>
                <h6>Title: {data.title}</h6>
                <div className="space-x-4">
                  <button
                    className="btn btn-primary"
                    onClick={() => showPdf(data.pdf)}
                  >
                    Show Pdf
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
        <br/>

        <div className="App">
          <div className="uploaded">
            {/* <h4>Upload Videos:</h4> */}
            <div className="output-div">
              {allVideos && allVideos.map((video) => (
                <div className="inner-div" key={video.id}>
                  <h6>Title: {video.title}</h6>
                  <video width="320" height="240" controls>
                    <source src={`http://localhost:4000/videos/${video.filename}`} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ))}
            </div>
          </div>
          <App1/>
        </div>
      </div>

      
    </>
  );
}

export default FileUpload;
