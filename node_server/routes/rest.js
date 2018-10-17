var express = require("express");
var router = express.Router();
var videoService = require("../analyzeVideo");

router.get("/videos/:id", function (req, res) {
    var videoId = req.params.id;
    videoService.analyzeVideo(videoId)
        .then(result => res.json(result))
        .catch(error => console.error('ERROR Could Be:', error));
})

module.exports = router;