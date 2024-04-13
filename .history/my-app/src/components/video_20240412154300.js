import React from 'react'
import { useEffect, useState } from "react";
import axios from "axios";
function Video(){ 

  const [title, setTitle] = useState("");
  const [file, setFile] = useState("");
  const [allImage, setAllImage] = useState(null);


  
  useEffect(() => {
    getPdf();
  }, []);
  const getPdf = async () => {
    const result = await axios.get("http://localhost:5000/get-videos");
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
      "http://localhost:5000/upload-videos",
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

  const showVideo = (pdf) => {
    window.open(`http://localhost:5000/videos/${pdf}`, "_blank", "noreferrer");
    // setPdfFile(`http://localhost:5000/files/${pdf}`)
  };

  return (
    <>



    
    {/* <h1>Upload Video</h1> */}

    <form className="formStyle" onSubmit={submitImage}>
        <h4>Upload Video</h4>
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
                      className="btn btn-primary" onClick={() => showVideo(data.pdf)}
                    >
                      Show Pdf
                    </button>
                  </div>
                 );
               })} 
        </div>
      </div>
      

      <section>
            {/* <button >Upload</button> */}
            {/* <Button variant="primary" size="lg">Upload Video</Button>{' '} */}
            {/* <button type="button">Upload Video</button> */}


          <div className="d-flex justify-content-center my-5">
              <iframe width="560" loading="lazy" height="315" src="https://www.youtube.com/watch?v=Gxe-9Evy4C8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
          </div>           
      </section>
    </>
  )
}
export default Video;





// const express = require('express');
// const mongoose = require('mongoose');
// const multer = require('multer');
// const fs = require('fs');
// const path = require('path');
// 
// const app = express();
// 
// Connect to MongoDB
// mongoose.connect('mongodb://localhost:27017/file_upload_demo', {
  // useNewUrlParser: true,
  // useUnifiedTopology: true
// })
  // .then(() => console.log('Connected to MongoDB'))
  // .catch(err => console.error('Failed to connect to MongoDB', err));
// 
// Define storage for uploaded files
// const storage = multer.diskStorage({
  // destination: (req, file, cb) => {
    // cb(null, 'uploads/');
  // },
  // filename: (req, file, cb) => {
    // cb(null, file.originalname);
  // }
// });

// 
// Create multer instance
// const upload = multer({ storage: storage });
// 
// Define a schema for your files
// const fileSchema = new mongoose.Schema({
  // filename: String,
  // contentType: String,
  // path: String
// });
// 
// const File = mongoose.model('File', fileSchema);
// 
// Upload route
// app.post('/upload', upload.single('file'), async (req, res) => {
  // try {
    // const { filename, mimetype, path } = req.file;
    // const file = new File({
      // filename: filename,
      // contentType: mimetype,
      // path: path
    // });
    // await file.save();
    // res.send('File uploaded successfully');
  // } catch (error) {
    // console.error(error);
    // res.status(500).send('Internal Server Error');
  // }
// });
// 
// Download route
// app.get('/download/:filename', async (req, res) => {
  // try {
    // const filename = req.params.filename;
    // const file = await File.findOne({ filename: filename });
    // if (!file) {
      // return res.status(404).send('File not found');
    // }
    // const filePath = path.join(__dirname, file.path);
    // res.sendFile(filePath);
  // } catch (error) {
    // console.error(error);
    // res.status(500).send('Internal Server Error');
  // }
// });
// 
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
  // console.log(`Server running on port ${PORT}`);
// });
// 



