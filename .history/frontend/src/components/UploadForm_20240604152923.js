// import React, { useState } from "react";
// import axios from "axios";
// // import { BACKEND_URI } from "../config/constants";
// const BACKEND_URI = "http://localhost:4000";
// const UploadForm = ({ getAllMedias }) => {
//   const [name, setName] = useState("");
//   const [videos, setVideos] = useState([]);
 

//   const getAllMedias = () => {
//     axios
//       .get(`${BACKEND_URI}/api/v1/media`)
//       .then((success) => {
//         getAllMedias();
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   };
//   const hadleSubmit = (e) => {
//     e.preventDefault();

//     let formdata = new FormData();
//     for (let key in videos) {
//       formdata.append("videos", videos[key]);
//     }
//     const BACKEND_URI = "http://localhost:4000";
//     formdata.append("name", name);

//     axios
//       .post(`${BACKEND_URI}/api/v1/media/create`, formdata)
//       .then((success) => {
//         getAllMedias();
//         alert("Submitted successfully");
//       })
//       .catch((error) => {
//         console.log(error);
//         alert("Error happened!");
//       });
//   };

//   return (
//     <>
//       <form onSubmit={hadleSubmit}>
//         <div className="form-group">
//           <label htmlFor="name">Name</label>
//           <input
//             type="text"
//             name="name"
//             id="name"
//             className="form-control"
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="videos">Upload Videos</label>
//           <input
//             type="file"
//             name="videos"
//             id="videos"
//             multiple
//             className="form-control"
//             accept=".mp4, .mkv"
//             onChange={(e) => {
//               setVideos(e.target.files);
//             }}
//           />
//         </div>

//         <button type="submit" className="btn btn-primary mt-2">
//           Submit
//         </button>
//       </form>
//     </>
//   );
// };

// export default UploadForm;




import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import axios from "axios";
import "./css/Uploadpdf.css";
// import { BACKEND_URI } from "../config/constants";
const BACKEND_URI = "http://localhost:4000";

const UploadForm = ({ getAllMedias }) => {
  const [name, setName] = useState("");
  const [videos, setVideos] = useState([]);
  const [allVideos, setAllVideos] = useState(null);
  const navigate = useNavigate();

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
        getAllMedias(); // Using the prop directly
        alert("Submitted successfully");
      })
      .catch((error) => {
        console.log(error);
        alert("Error happened!");
      });
  };

  const navigateToLot = () => {
    navigate(`/lot?pdfs=${JSON.stringify(allVideos)}`); 
  };


  return (
    <>
      <div className="uploadpdf container d-flex justify-content-center align-content-center" style={{}}>
      <form className="pdfform" onSubmit={handleSubmit}>
        
          {/* <label htmlFor="name">Name</label> */}
          <h4>Upload Video</h4>
          <br/>
          <input
            type="text"
            // name="name"
            className="form-control"
            placeholder="Title"
            required
            onChange={(e) => setName(e.target.value)}
          />
        
        
          {/* <label htmlFor="videos">Upload Videos</label> */}
          <br/>

          <input
            type="file"
            // name="videos"
            // id="videos"
            multiple
            className="form-control"
            accept=".mp4, .mkv"
            onChange={(e) => {
              setVideos(e.target.files);
            }}
          />
        

        <button type="submit" className="btn btn-primary mr-4 space-x-4">
          Submit
        </button>

        <button className="btn btn-primary" onClick={navigateToLot} style={{marginLeft:"12px"}}>
            View
          </button>
        </form>


      </div>


    </>
  );
};

export default UploadForm;