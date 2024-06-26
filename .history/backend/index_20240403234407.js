const path = require("path");
const express = require("express");

const app = express();
const PORT = 8000;

app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

ppid.use(express.json());

app.get("/",(req,res) => {
    return res.render("homepage");
});

app.listen(PORT, () => console.log(`Server Started at PORT:8000`))