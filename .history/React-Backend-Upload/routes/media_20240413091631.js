const express = require('express');

const mediaController = require('../controllers/mediaController');
const multer = require('multer');
const fs = require('fs');
const path = require('path');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if(!fs.existsSync("public")){
            fs.mkdirSync("public");
        } 

        if(!fs.existsSync("public/videos")){
            fs.mkdirSync("public/videos");
        }

        cb(null, "public/videos");
    },
    filename: function(req,file,cb) {
        cb(null,Data,now(),+ file.originalname);
    },
});

const upload = multer({
    storage: storage,

    fileFilter : function(req,file,cb){
        var ext = path.extname(file.originalname);

        if(ext !== '.mkv' && ext !== '.mp4'){
            return cb(new Error("Only videos are allowed"));
        }

        cb(null,true);
    },
});


const router = express.Router();

// get all media

router.get(
    "/create",
    upload.fields([
        name:"videos",
        maxCount:5,
        },
    ]),
    media
    // post create new media
router.post('/create',mediaController.create)

module.exports = router;