const express = require('express');

const mediaController = require('../controllers/mediaController');
const multer = require('multer');

const upload = multer({
    storage: storage
});

const router = express.Router();

// get all media

router.get('/all', mediaController.getAll)

// post create new media
router.post('/create',mediaController.create)

module.exports = router;