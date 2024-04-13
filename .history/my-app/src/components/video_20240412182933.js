// import React, { useState, useEffect } from 'react';
// import axios from 'axios';

// function Video() {
//   const [title, setTitle] = useState('');
//   const [file, setVideo] = useState('');
//   const [allVideos, setAllVideos] = useState([]);

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/get-videos');
//       setAllVideos(response.data.data);
//     } catch (error) {
//       console.error('Error fetching videos:', error);
//     }
//   };

//   const submitVideo = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('video', file);

//     try {
//       const response = await axios.post('http://localhost:5000/upload-video', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       console.log(response.data);
//       if (response.data.message === 'Video uploaded successfully') {
//         alert('Uploaded Successfully!!!');
//         fetchVideos();
//       }
//     } catch (error) {
//       console.error('Error uploading video:', error);
//     }
//   };


//   return (
//     <>
//       <form className="formStyle" onSubmit={submitVideo}>
//         <h4>Upload VIDEO</h4>
//         <br />
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Title"
//           required
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//         />
//         <br />
//         <input
//           type="file"
//           className="form-control"
//           accept="video/*"
//           required
//           onChange={(e) => setVideo(e.target.files[0])}
//         />
//         <br />
//         <button className="btn btn-primary" type="submit">
//           Submit
//         </button>
//       </form>

//       <div className="uploaded">
//         <h4>Uploaded Videos:</h4>
//         <div className="output-div">
//           {allVideos.map((video) => (
//             <div key={video._id} className="inner-div">
//               <h6>Title: {video.title}</h6>
//               <video width="320" height="240" controls>
//                 <source src={`http://localhost:5000/videos/${video.filename}`} type="video/mp4" />
//                 Your browser does not support the video tag.
//               </video>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Video;





import React, { useState, useEffect } from 'react';
import axios from 'axios';

function VideoUpload() {
  const [title, setTitle] = useState('');
  const [video, setVideo] = useState(null);
  const [uploadedVideos, setUploadedVideos] = useState([]);

  useEffect(() => {
    fetchUploadedVideos();
  }, []);

  const fetchUploadedVideos = async () => {
    try {
      const response = await axios.get('http://localhost:5000/get-videos');
      setUploadedVideos(response.data.data);
    } catch (error) {
      console.error('Error fetching uploaded videos:', error);
    }
  };

  const handleVideoChange = (e) => {
    setVideo(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('video', video);

    try {
      const response = await axios.post('http://localhost:5000/upload-videos', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      if (response.data.status === 'ok') {
        alert('Video uploaded successfully');
        fetchUploadedVideos();
      }
    } catch (error) {
      console.error('Error uploading video:', error);
    }
  };

  return (
    <>
      <form className="formStyle" onSubmit={handleSubmit}>
        <h4>Upload VIDEO</h4>
        <br />
        <input
          type="text"
          className="form-control"
          placeholder="Title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <input
          type="file"
          className="form-control"
          accept="video/*"
          required
          onChange={handleVideoChange}
        />
        <br />
        <button className="btn btn-primary" type="submit">
          Submit
        </button>

        <div className="uploaded">
//         <h4>Uploaded Videos:</h4>
//         <div className="output-div">
//           {allVideos.map((video) => (
            <div key={video._id} className="inner-div">
              <h6>Title: {video.title}</h6>
              <video width="320" height="240" controls>
                <source src={`http://localhost:5000/videos/${video.filename}`} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>
      </div>
  );
}

export default VideoUpload;
