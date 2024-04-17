// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadComponent = () => {
//   const [videoFile, setVideoFile] = useState(null);
//   const [pdfFile, setPdfFile] = useState(null);
//   const [uploading, setUploading] = useState(false);
//   const [uploadProgress, setUploadProgress] = useState(0);
//   const [error, setError] = useState(null);

//   const handleVideoChange = (event) => {
//     setVideoFile(event.target.files[0]);
//   };

//   const handlePdfChange = (event) => {
//     setPdfFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     setError(null);
//     setUploading(true);
//     setUploadProgress(0);

//     const formData = new FormData();
//     formData.append('video', videoFile);
//     formData.append('pdf', pdfFile);

//     try {
//       const response = await axios.post('http://localhost:5000/upload', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//         onUploadProgress: (progressEvent) => {
//           const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
//           setUploadProgress(progress);
//         },
//       });
//       console.log(response.data);
//       // Handle successful upload
//     } catch (error) {
//       console.error('Upload failed:', error);
//       setError('Upload failed. Please try again.');
//     } finally {
//       setUploading(false);
//     }
//   };

//   return (
//     <div className="upload-container">
//       <h2 className="upload-header">Upload Lecture Material</h2>

//       <div className="upload-section">
//         <label htmlFor="video-file" className="upload-label">Select Video File:</label>
//         <input type="file" id="video-file" accept="video/*" className="upload-input" onChange={handleVideoChange} />
//       </div>

//       <div className="upload-section">
//         <label htmlFor="pdf-file" className="upload-label">Select PDF File:</label>
//         <input type="file" id="pdf-file" accept=".pdf" className="upload-input" onChange={handlePdfChange} />
//       </div>

//       <button className="upload-button" onClick={handleUpload} disabled={!videoFile || !pdfFile || uploading}>
//         {uploading ? 'Uploading...' : 'Upload'}
//       </button>
//       {uploadProgress > 0 && <progress value={uploadProgress} max="500" className="upload-progress" />}
//       {error && <p className="error-message">{error}</p>}
//     </div>

//   );
// };

// export default UploadComponent;



import React, { useEffect, useState } from "react";
import axios from "axios";

function FileUpload() {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);


  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-files");
    console.log(result.data.data);
    setAllImage(result.data.data);
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
    
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
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
  };


  return (
    <>
    <div className="App">
      <form className="formStyle" onSubmit={submitImage}>
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

        <button className="btn btn-primary" type="submit">
           Submit
         </button>

      </form>

      <div className="uploaded">
        <h4>Uploaded PDF:</h4>
        <div className="output-div">
          {allImage == null ? "": 
            allImage.map((data) => {
                  return (
                  <div className="inner-div">
                    <h6>Title: {data.title}</h6>
                    <button
                      className="btn btn-primary" onClick={() => showPdf(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                 );
               })} 
        </div>
      </div>
    </div>

    <button className = "btn btn-primary"> Analyze</button>
        

    </>
  );
}

export default FileUpload;
