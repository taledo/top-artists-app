var express = require('express');
var router = express.Router();
var artistController = require('../controllers/artistController');
var artistHandler = new artistController();

/* GET home page. */

router.get('/topArtists', artistHandler.fetchArtists);
router.get('/topTracks', artistHandler.fetchTracks);

module.exports = router;
