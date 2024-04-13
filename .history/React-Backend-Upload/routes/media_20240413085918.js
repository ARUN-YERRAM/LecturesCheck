const express = require('express');

const mediaController = require('../controllers/mediaController');

const router = express.Router();

// get all media

router.get('/all', mediaController.getAll)

// post create new media
router.post('/')

module.exports = router;