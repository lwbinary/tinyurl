var express = require('express');
var router = express.Router();

// use the functions in urlServices
var urlService = require('../services/urlService');

// GET * for anything
// no need to parse json, get rid of jsonParser here
router.get('*', function (req, res){
    var shortUrl = req.originalUrl.slice(1); // originalUrl = "/XXX" instead of "XXX", which is what we need
    var longUrl = urlService.getLongUrl(shortUrl, req.app.shortToLongHash);
    res.redirect(longUrl);
});

module.exports = router;