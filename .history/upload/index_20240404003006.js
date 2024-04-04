const path = require("path");
const express = require("express");
const multer = require("multer");
const upload = multer({dest :"uploads/"});


const app = express();
const PORT = 8000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

app.use(express.urlencoded({extended:false}));


app.get("/",(req,res)=> {
    return res.render("homepage");
});

app.post("/upload",upload.single('') => {});


app.listen(PORT,() => console.log(`Server Started at PORT:8000`));
