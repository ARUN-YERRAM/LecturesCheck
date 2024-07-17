import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/Uploadpdf.css";

const UploadPDF = () => {
  const [title, setTitle] = useState("");
  const [file, setFile] = useState(null);
  const [allImage, setAllImage] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getPdf();
  }, []);

  const getPdf = async () => {
    try {
      const result = await axios.get("http://localhost:5000/api/getfiles");
      console.log(result.data.data);
      setAllImage(result.data.data);
    } catch (error) {
      console.error("Error fetching PDFs:", error);
      alert("Error fetching PDFs");
    }
  };

  const submitImage = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("title", title);
    formData.append("file", file);
    console.log(title, file);
    console.log("pdf is uploading");
    try {
      const result = await axios.post("http://localhost:5000/api/uploadfiles", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log("pdf is uploaded");
      console.log(result);

      if (result.data.status === "ok") {
        alert("Uploaded Successfully!!!");
        getPdf();
      }
    } catch (error) {
      console.error("Error uploading PDF:", error);
      alert("Error uploading PDF");
    }
  };

  const navigateToPdfList = () => {
    window.open("/lot", "_blank");
  };

  const navigateToGraph = () => {
    window.open("/RelevanceChart");
  };

  return (
    <>
      <div className="uploadpdf">
        <form className="pdfform" onSubmit={submitImage}>
          <h4>Upload PDF</h4>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            className="form-control pt-2 mt-2"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            id="title"
            required
          />
          <input
            type="file"
            className="form-control mt-4"
            id="file"
            accept="application/pdf"
            required
            onChange={(e) => setFile(e.target.files[0])}
          />

          <button className="btn btn-dark mt-3" type="submit"  style={{ marginLeft: "12px" }}>
            Submit
          </button>

          <button className="btn btn-dark mt-3" type="button" style={{ marginLeft: "12px" }} onClick={navigateToPdfList}>
            View PDFs
          </button>

          <button className="btn btn-dark mt-3" type="button" style={{ marginLeft: "12px" }} onClick={navigateToGraph}>
            GRAPH
          </button>

        </form>
      </div>
    </>
  );
};

export default UploadPDF;
