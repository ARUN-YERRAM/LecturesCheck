const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongodbUrl = "mongodb://localhost:27017"
app.listen(4000,() => {
    console.log("App is running on PORT 4000");
})