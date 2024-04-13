const Media = require("../Models/Media");


exports.getAll = async(req,res) => {
    try{
        const Media = await Media.fin();
    }
}