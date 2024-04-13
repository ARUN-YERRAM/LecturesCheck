const express = require("express");
const app = express();
const mongoose = require("mongoose");
app.use(express.json());
const cors = require("cors");
app.use(cors());
app.use("/videos", express.static("videos")); // Serve uploaded videos statically

// Mongoose connection
const mongoUrl =
  "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongoUrl, {
    useNewUrlParser: true,
    // useUnifiedTopology: true, // Add this option to avoid deprecation warning
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

// Multer for video uploads
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./videos"); // Directory to store uploaded videos
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

// Define VideoSchema and model
const VideoSchema = mongoose.model("Video", {
  title: String,
  video: String, // Store video filename
});

// Endpoint to handle video uploads
app.post("/upload-videos", upload.single("video"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const videoFileName = req.file.filename;
  try {
    await VideoSchema.create({ title: title, video: videoFileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

// Endpoint to get uploaded videos
app.get("/get-videos", async (req, res) => {
  try {
    const data = await VideoSchema.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Default route
app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

app.listen(5000, () => {
  console.log("Server Started");
});
