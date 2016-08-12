var express = require('express');
var router = express.Router();

// POST: JSON data, install body-parser
// only use the json parser here
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();


router.post('/urls', jsonParser, function (req, res) {
    var longUrl = req.body.longUrl; // directly use the req body parsed by jsonParser
    // implement this
    res.json('implement this');
});

// Exports the router and so it can be USED in server.js
module.exports = router;