const path = require("path");
const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

ppid.use(express.json());

app.get("/")