const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongodbUrl = "mongodb"
app.listen(4000,() => {
    console.log("App is running on PORT 4000");
})