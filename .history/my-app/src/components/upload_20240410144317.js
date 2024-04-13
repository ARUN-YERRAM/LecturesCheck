// import React, { useState } from 'react';
// import axios from 'axios';

// const UploadForm = () => {
//   const [file, setFile] = useState(null);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('file', file);

//     try {
//       await axios.post('http://localhost:5000/upload', formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('File uploaded successfully');
//     } catch (error) {
//       console.error('Error uploading file:', error);
//     }
//   };

//   return (
//     <div>
//       <h2>Upload Form</h2>
//       <form onSubmit={handleSubmit}>
//         <input type="file" onChange={handleFileChange} />
//         <button type="submit">Upload</button>
//       </form>
//     </div>
//   );
// };

// export default UploadForm;








import React, { useState } from 'react';
import axios from 'axios';

const UploadComponent = () => {
  const [videoFile, setVideoFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleVideoChange = (event) => {
    setVideoFile(event.target.files[0]);
  };

  const handlePdfChange = (event) => {
    setPdfFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    setError(null);
    setUploading(true);
    setUploadProgress(0);

    const formData = new FormData();
    formData.append('video', videoFile);
    formData.append('pdf', pdfFile);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
        onUploadProgress: (progressEvent) => {
          const progress = Math.round((progressEvent.loaded / progressEvent.total) * 100);
          setUploadProgress(progress);
        },
      });
      console.log(response.data);
      // Handle successful upload
    } catch (error) {
      console.error('Upload failed:', error);
      setError('Upload failed. Please try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="upload-container">
      <h2 className="upload-header">Upload Lecture Material</h2>
      <div className="upload-section">
        <label htmlFor="video-file" className="upload-label">Select Video File:</label>
        <input type="file" id="video-file" accept="video/*" className="upload-input" onChange={handleVideoChange} />
      </div>
      
      <div className="upload-section">
        <label htmlFor="pdf-file" className="upload-label">Select PDF File:</label>
        <input type="file" id="pdf-file" accept=".pdf" className="upload-input" onChange={handlePdfChange} />
      </div>
      <button className="upload-button" onClick={handleUpload} disabled={!videoFile || !pdfFile || uploading}>
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
      {uploadProgress > 0 && <progress value={uploadProgress} max="500" className="upload-progress" />}
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default UploadComponent;
