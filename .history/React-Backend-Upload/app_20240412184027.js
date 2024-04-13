// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require("cors");
// app.use(cors());
// app.use("/files", express.static("files"));


// // Mongoose connection
// const mongoUrl =
//   "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";

// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//     // useUnifiedTopology: true, // Add this option to avoid deprecation warning
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));

// // Multer
// const multer = require("multer");


// const storage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });



// // const upload = multer({ dest: './files' });
// require("./pdfDetails")
// // Define PdfSchema and model
// const PdfSchema = mongoose.model("PdfDetails");
// // const PdfSchema = mongoose.model("PdfDetails");
// const upload = multer({ storage : storage});

// app.post("/upload-files", upload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     // res.status(500).json({ error: "Internal Server Error" });
//     res.json({status:error})
//   }
//     // res.send("Hii");
// });



// app.get("/get-files", async (req, res) => {
//   try {
//     // const data = await PdfSchema.find({});
//     PdfSchema.find({}).then((data) => {
//     res.send({ status: "ok", data: data });
//   });
//  } catch (error) {
//     // res.status(500).json({ error: "Internal Server Error" });
//   }
// });



// // APIs
// app.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });

// app.listen(5000, () => {
//   console.log("Server Started");
// });
















// const express = require("express");
// const app = express();
// const mongoose = require("mongoose");
// const cors = require("cors");
// const multer = require("multer");
// const path = require("path");

// // Use JSON body parser middleware
// app.use(express.json());
// app.use(cors());

// // Serve static files from 'files' directory
// app.use("/files", express.static("files"));
// // Serve uploaded videos statically
// app.use("/videos", express.static("videos"));

// // Mongoose connection
// const mongoUrl = "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";
// mongoose
//   .connect(mongoUrl, {
//     useNewUrlParser: true,
//     // useUnifiedTopology: true, // Add this option to avoid deprecation warning
//   })
//   .then(() => {
//     console.log("Connected to database");
//   })
//   .catch((e) => console.log(e));

// // Multer configuration for video uploads
// const videoStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./videos"); // Directory to store uploaded videos
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const videoUpload = multer({ storage: videoStorage });

// // Define VideoSchema and model for videos
// const VideoSchema = mongoose.model("Video", {
//   title: String,
//   video: String, // Store video filename
// });

// // Endpoint to handle video uploads
// app.post("/upload-videos", videoUpload.single("video"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const videoFileName = req.file.filename;
//   try {
//     await VideoSchema.create({ title: title, video: videoFileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// // Endpoint to get uploaded videos
// app.get("/get-videos", async (req, res) => {
//   try {
//     const data = await VideoSchema.find({});
//     res.send({ status: "ok", data: data });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Multer configuration for file uploads
// const fileStorage = multer.diskStorage({
//   destination: function (req, file, cb) {
//     cb(null, "./files");
//   },
//   filename: function (req, file, cb) {
//     const uniqueSuffix = Date.now();
//     cb(null, uniqueSuffix + file.originalname);
//   },
// });

// const fileUpload = multer({ storage: fileStorage });

// // Define PdfSchema and model for files
// const PdfSchema = mongoose.model("PdfDetails", {
//   title: String,
//   pdf: String, // Store file filename
// });

// // Endpoint to handle file uploads
// app.post("/upload-files", fileUpload.single("file"), async (req, res) => {
//   console.log(req.file);
//   const title = req.body.title;
//   const fileName = req.file.filename;
//   try {
//     await PdfSchema.create({ title: title, pdf: fileName });
//     res.send({ status: "ok" });
//   } catch (error) {
//     res.json({ status: error });
//   }
// });

// // Endpoint to get uploaded files
// app.get("/get-files", async (req, res) => {
//   try {
//     const data = await PdfSchema.find({});
//     res.send({ status: "ok", data: data });
//   } catch (error) {
//     res.status(500).json({ error: "Internal Server Error" });
//   }
// });

// // Default route
// app.get("/", async (req, res) => {
//   res.send("Success!!!!!!");
// });

// // Start the server
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log(`Server started on port ${PORT}`);
// });





































const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const path = require("path");

// Use JSON body parser middleware
app.use(express.json());
app.use(cors());

// Serve static files from 'uploads' directory
app.use("/uploads", express.static("uploads"));

// Mongoose connection
const mongoUrl = "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";
mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    // useUnifiedTopology: true, // Add this option to avoid deprecation warning
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

// Multer configuration for uploads
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define schema and model for uploads
const UploadSchema = mongoose.model("Upload", {
  title: String,
  type: String, // "video" or "file"
  filename: String,
});

// Endpoint to handle uploads
app.post("/upload", upload.single("file"), async (req, res) => {
  console.log(req.file);
  const { title, type } = req.body;
  const filename = req.file.filename;
  try {
    await UploadSchema.create({ title, type, filename });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

// Endpoint to get uploaded items
app.get("/uploads", async (req, res) => {
  try {
    const data = await UploadSchema.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Default route
app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});



