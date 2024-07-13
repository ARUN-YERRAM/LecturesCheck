// import React, { useEffect, useState } from "react";
// import { useLocation } from "react-router-dom";
// import axios from "axios";

// function Lot() {
//   const [pdfs, setPdfs] = useState([]);
//   const location = useLocation();

//   useEffect(() => {
//     const params = new URLSearchParams(location.search);
//     const pdfsData = params.get("pdfs");
//     if (pdfsData) {
//       setPdfs(JSON.parse(pdfsData));
//     }
//   }, [location.search]);

//   const showPdf = (pdf) => {
//     window.open(`http://localhost:5000/files/${pdf}`, "_blank", "noreferrer");
//   };

//   const deletePdf = async (id) => {
//     try {
//       const result = await axios.delete(`http://localhost:5000/delete-file/${id}`);
//       if (result.data.status === 'ok') {
//         setPdfs(pdfs.filter(pdf => pdf._id !== id));
//       } else {
//         alert('Failed to delete the file');
//       }
//     } catch (error) {
//       console.error("There was an error deleting the file!", error);
//       alert('There was an error deleting the file!');
//     }
//   };

//   return (
//     <div className="uploaded">
//       <h4>Uploaded PDF:</h4>
//       <div className="container">
//       <table className="table table-hover table-dark">
//         <thead>
//           <tr>
//             <th style={{ paddingLeft: "100px" }}>PDF</th>
//             <th style={{ paddingLeft: "100px" }}>Action</th>
//           </tr>
//         </thead>
//         <tbody>
//           {pdfs.map((data, index) => (
//             <tr key={index}>
//               <td style={{ paddingLeft: "100px" }}>{data.title}</td>
//               <td>
//                 <button
//                   className="btn btn-primary"
//                   onClick={() => showPdf(data.pdf)}
//                   style={{ marginRight: "10px" }}
//                 >
//                   Show Pdf
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deletePdf(data._id)}
//                 >
//                   Delete
//                 </button>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//       </div>
//     </div>
//   );
// }

// export default Lot;


import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PdfList = () => {
  const [pdfs, setPdfs] = useState([]);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.pdfs) {
      setPdfs(location.state.pdfs);
    } else {
      fetchPdfs();
    }
  }, [location.state]);

  const fetchPdfs = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/getfiles");
      setPdfs(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      alert("Error fetching PDFs");
    }
  };

  const showPdf = (pdf) => {
    window.open(`http://localhost:5000/api/files/${pdf}`, "_blank", "noreferrer");
  };

  const deletePdf = async (id) => {
    try {
      const result = await axios.delete(`http://localhost:5000/api/delete-file/${id}`);
      if (result.data.status === "ok") {
        setPdfs(pdfs.filter((pdf) => pdf._id !== id));
      } else {
        alert("Failed to delete the file");
      }
    } catch (error) {
      console.error("There was an error deleting the file!", error);
      alert("There was an error deleting the file!");
    }
  };

  return (
    <div className="uploaded">
      <h4>Uploaded PDF:</h4>
      <div className="container">
        <table className="table table-hover table-dark">
          <thead>
            <tr>
              <th style={{ paddingLeft: "100px" }}>PDF</th>
              <th style={{ paddingLeft: "100px" }}>Action</th>
            </tr>
          </thead>
          <tbody>
            {pdfs.map((data, index) => (
              <tr key={index}>
                <td style={{ paddingLeft: "100px" }}>{data.title}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={() => showPdf(data.pdf)}
                    style={{ marginRight: "10px" }}
                  >
                    Show Pdf
                  </button>
                  <button className="btn btn-danger" onClick={() => deletePdf(data._id)}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PdfList;
