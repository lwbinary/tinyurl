var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
   res.sendfile('./public/views/index.html');
});

// Exports the router and so it can be USED in server.js
module.exports = router;