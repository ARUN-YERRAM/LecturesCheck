import {v2 as cloudinary} from "cloudinary";

import fs from "fs";


cloudinary.config({
    cloud_name: 'LecturesCheck',
    api_key : '',
    api_secret
})
cloudinary.uploader.upload("https://upload.wikimedia.org/wikipedia/commons/a/ae/Olympic_flag.jpg",
  { public_id: "olympic_flag" }, 
  function(error, result) {console.log(result); });
