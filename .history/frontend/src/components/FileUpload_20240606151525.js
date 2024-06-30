import React, { useEffect, useState } from "react";
import { BrowserRouter as  useNavigate } from 'react-router-dom'; 
import axios from "axios";
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import "./css/Uploadpdf.css";
import App1 from "../App1";
import Lot from "./Lot.js";
// import VideoLot from "./VideoLot.js"; // Import the new VideoLot component

function FileUpload() {
  const [title, setTitle] = useState('');
  const [file, setFile] = useState('');
  const [allVideos, setAllVideos] = useState([]);
  const [allImage, setAllImage] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const navigate = useNavigate(); 

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

  const navigateToVideoLot = () => {
    navigate(`/videolot?videos=${JSON.stringify(allVideos)}`); 
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };

