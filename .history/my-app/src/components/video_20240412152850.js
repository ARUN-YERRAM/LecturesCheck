import React from 'react'

const video = () => {
  return (
    <>

    
    {/* <h1>Upload Video</h1> */}

    

      <section>
            {/* <button >Upload</button> */}
            {/* <Button variant="primary" size="lg">Upload Video</Button>{' '} */}
            {/* <button type="button">Upload Video</button> */}

            <button className="btn btn-primary" type="submit">
           Submit
         </button>
          <div className="d-flex justify-content-center my-5">
              <iframe width="560" loading="lazy" height="315" src="https://www.youtube.com/embed/395ZloN4Rr8?si=3-h6s56wIFv2sDBU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>     
          </div>           
      </section>
    </>
  )
}
export default video;





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



