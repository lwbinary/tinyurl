var express = require('express');
var router = express.Router();

//var bodyParser = require('body-parser');
//var jsonParser = bodyParser.json();

// GET * for anything
// no need to parse json, get rid of jsonParser here
router.get('*', function (req, res){
    var shortUrl = req.originalUrl.slice(1); // originalUrl = "/XXX" instead of "XXX", which is what we need
    var longUrl = ''; // implement this
    res.redirect(longUrl);
});

module.exports = router;