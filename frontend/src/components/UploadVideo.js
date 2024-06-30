// import React from "react";
// // import { BACKEND_URI } from "../config/constants";

// const UploadsList = ({ medias }) => {
//   const BACKEND_URI = "http://localhost:4000";  
//   return (
//     <div className="row">
//       <div className="col-md-12">
//         <table className="table table-bordered" style={{
//           height: 'auto',
//           width:"1000px",
//           margin:"100px",
//           marginLeft:"250px",
//           border:"1px solid black",
//         }}>
//           <thead>
//             <tr>
//               <th width="200">Name</th>
//               <th>Videos</th>
//             </tr>
//           </thead>
//           <tbody>
//             {medias &&
//               medias.map((media) => {
//                 return (
//                   <tr>
//                     <td>{media.name}</td>
//                     <td>
//                       {media.videos.map((video) => {
//                         return (
//                           <>
//                           <video
//                             preload="auto"
//                             width="250"
//                             height="250"
//                             controls
//                           > 
//                             <source src={`${BACKEND_URI}${video}`} />
//                             ;Your browser does not support the video tag.
//                           </video>
//                           <br/>
//                           </>
//                         );
//                       })}
//                     </td>
//                   </tr>
//                 );
//               })} 
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default UploadsList;



















import { useState, useEffect } from "react";
import React from "react";
import axios from "axios";
import "./css/Uploadpdf.css";

const UploadVideo = ({ onSubmit }) => {
    const [Vtitle, VsetTitle] = useState('');
    const [Vfile, VsetFile] = useState('');
    const [VallImages, VsetAllImages] = useState(null);

    useEffect(() => {
        getVideo();
    }, []);

    const getVideo = async () => {
        const result = await axios.get("http://localhost:5000/api/getVideos");
        console.log(result.data.data);
        VsetAllImages(result.data.data);
    }

    const submitImage = async (e) => {
        e.preventDefault();
        const formdata = new FormData();
        formdata.append("title", Vtitle);
        formdata.append("file", Vfile);
        console.log(Vtitle, Vfile);
        console.log("sending video")
        const result = await axios.post("http://localhost:5000/api/Uploadvideos", formdata, { headers: { "Content-Type": "multipart/form-data" }, });
        console.log("video has been sent ");
        console.log(result);

        if (result.data.status === "ok") {
            alert("Uploaded Successfully!!!");
            getVideo();
            onSubmit();  // Call the onSubmit prop here
        }
    };

    const showVideo = (video) => {
        window.open(`http://localhost:5000/api/videos/${video}`, "_blank", "noreferrer");
    }

    return (
        <div className="uploadpdf">
            <form className="pdfform" onSubmit={submitImage}>
                <h4>Upload Video</h4>
                <label htmlFor="title">Title:</label>
                <input type="text" className="form-control pt-2 mt-2 " onChange={(e) => VsetTitle(e.target.value)} placeholder="Title" id="title" required />
                <input type="file" className="form-control mt-4" id="file" accept="mp4/mp3" required onChange={(e) => VsetFile(e.target.files[0])} />
                <button className="btn btn-dark mt-3" type="submit">Submit</button>
            </form>
            <div className="uploaded">
                <h4>Uploaded Video:</h4>
                <div className="output-div">
                    {VallImages == null ? "" : VallImages.map((data) => {
                        return (
                            <div className="inner-div">
                                <h6>Title: {data.title}</h6>
                                <button className="btn btn-dark" onClick={() => showVideo(data.video)}>Show Video</button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
}

export default UploadVideo;