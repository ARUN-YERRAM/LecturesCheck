const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongodbUrl = "mongodb://localhost:27017/Video";

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,

});

mongoose.connection.on()


app.listen(4000,() => {
    console.log("App is running on PORT 4000");
})