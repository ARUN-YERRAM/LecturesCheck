const express = require('express');

const mediaController = require('../controllers/mediaController');
const multer = require('multer');
const fs = require('fs');
const storage = multer.diskStorage({
    destination: function(req,file,cb){
        if(!fs.existsSync("public")){
            fs.mkdirSync("public");
        } 

        if(!fs.existsSync("public/videos")){
            fs.mkdirSync("public/videos");
        }

        cb(null, "public/videos");
    }
});
const upload = multer({
    storage: storage
});

const router = express.Router();

// get all media

router.get('/all', mediaController.getAll)

// post create new media
router.post('/create',mediaController.create)

module.exports = router;