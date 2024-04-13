const express = require("express");
const mongoose = require("mongoose");

const app = express();


app.listen(4000,() => {
    console.log("App is running on PORT 4000");
})