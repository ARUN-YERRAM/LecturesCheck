const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const multer = require("multer");
const fs = require("fs");
const path = require("path");

app.use(express.json());
app.use(cors());
app.use("/files", express.static("files"));
app.use("/videos", express.static("videos"));

// MongoDB Connection
const mongoUrl = "mongodb+srv://ARUN:1234@cluster0.mmyigrp.mongodb.net/LECTURESCHECK?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoUrl, {})
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));

// Multer storage setup for PDFs
const pdfStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./files");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const uploadPdf = multer({ storage: pdfStorage });

// Multer storage setup for videos
const videoStorage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./videos");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const uploadVideo = multer({ storage: videoStorage });

// Define PdfSchema and model
const PdfSchema = new mongoose.Schema({
  title: String,
  pdf: String,
});

const PdfDetails = mongoose.model("PdfDetails", PdfSchema);

// Define VideoSchema and model
const VideoSchema = new mongoose.Schema({
  title: String,
  video: String,
});

const VideoDetails = mongoose.model("VideoDetails", VideoSchema);

app.post("/upload-files", uploadPdf.single("file"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await PdfDetails.create({ title: title, pdf: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.post("/upload-videos", uploadVideo.single("video"), async (req, res) => {
  console.log(req.file);
  const title = req.body.title;
  const fileName = req.file.filename;
  try {
    await VideoDetails.create({ title: title, video: fileName });
    res.send({ status: "ok" });
  } catch (error) {
    res.json({ status: error });
  }
});

app.get("/get-files", async (req, res) => {
  try {
    const data = await PdfDetails.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

app.get("/get-videos", async (req, res) => {
  try {
    const data = await VideoDetails.find({});
    res.send({ status: "ok", data: data });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// Delete endpoint for PDFs
app.delete("/delete-file/:id", async (req, res) => {
  try {
    const pdf = await PdfDetails.findById(req.params.id);
    if (!pdf) {
      return res.status(404).send({ status: "error", message: "File not found" });
    }

    // Delete the file from the filesystem
    const filePath = path.join(__dirname, "files", pdf.pdf);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting file:", err);
        return res.status(500).send({ status: "error", message: "File deletion error" });
      }

      // Delete the record from the database
      PdfDetails.findByIdAndDelete(req.params.id)
        .then(() => res.send({ status: "ok" }))
        .catch((error) => res.status(500).send({ status: "error", message: error.message }));
    });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// Delete endpoint for videos
app.delete("/delete-video/:id", async (req, res) => {
  try {
    const video = await VideoDetails.findById(req.params.id);
    if (!video) {
      return res.status(404).send({ status: "error", message: "Video not found" });
    }

    // Delete the video file from the filesystem
    const filePath = path.join(__dirname, "videos", video.video);
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error("Error deleting video file:", err);
        return res.status(500).send({ status: "error", message: "Video deletion error" });
      }

      // Delete the record from the database
      VideoDetails.findByIdAndDelete(req.params.id)
        .then(() => res.send({ status: "ok" }))
        .catch((error) => res.status(500).send({ status: "error", message: error.message }));
    });
  } catch (error) {
    res.status(500).send({ status: "error", message: error.message });
  }
});

// APIs

app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});

app.listen(5000, () => {
  console.log("Server Started at 5000");
});
