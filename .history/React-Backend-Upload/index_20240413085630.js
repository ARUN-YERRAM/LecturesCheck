const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mediaRoutes = require("..")

const mongodbUrl = "mongodb://localhost:27017/Video";

mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,

});

mongoose.connection.on("connected", () => {
    console.log("Connected to mongodb...");
})

mongoose.connection.on("error", (err) => {
    console.log("Error connecting to mongo",err);
});



app.listen(4000,() => {
    console.log("App is running on PORT 4000");
})