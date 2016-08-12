/*
//Using HTTP version (instead of using express framework)

var http = require('http'); // require = import "http" pack
var fs = require('fs'); // fs = file system

// then use the "http" variable for a callback function
// then visit local server localhost:3000
http.createServer(function (req, res){
    // ver.1
    // terminal shows the msg, not the browser console
    // no response yet
    //console.log('Server started.');

    // now write the response

    */
/*
    // ver.2
    res.writeHead(200, {"Content-Type": "text-plain"}); // write the header: status 200 and returned type
    res.write('Hello there!'); // write the msg
    res.end(); // *important* need .end() to SEND the msg in browser


    */
/*
    // ver.3
    res.writeHead(200, {"Content-Type": "text-html"});
    // default async, but we use Sync to read the file now
    // current path (sys global variable for windows/linux): __dirname
    var html = fs.readFileSync(__dirname + '/index.html');

    res.end(html); // SEND the html in browser, html will be as STRING
    // OR send the STRING directly
    //res.end("<html><head></head><body><h1>HTML STRING</h1></body></html>");
    *//*


    // BUT: so far no matter what URI after localhost:3000, same response
    // not RESTful

    // ver.4
    // if it's root dir
    if (req.url === '/'){
        res.writeHead(200, {"Content-Type": "text-html"});
        var html = fs.readFileSync(__dirname + '/index.html');
        res.end(html);
    }

    // if it's /api
    if (req.url === '/api'){
        res.writeHead(200, {"Content-Type": "application/json"});
        var obj = {
            name: "leonmiao",
            age: 20
        };
        // JSON.stringify() to send STRING
        res.end(JSON.stringify(obj)); // * may need chrome extension to see the json form
    }

}).listen(3000); // listen port 3000
*/


//Using the Express framework

var express = require('express');
var app = express();

/*
// ver.1 basic routing
// GET operation using .get
// encapsulates all HTTP ops: get, put, post, delete...
app.get('/', function (req, res){
    //res.send('express again');
    res.json({ // .json can send json
        name: 'leomiao',
        age: 20
    });
});
*/


// Using Routers exported in api.js
var restRouter = require('./routes/rest'); // need to enter the path for any NEW directories
var redirectRouter = require('./routes/redirect'); // need to enter the path for any NEW directories

// when URL is /api/v1, calls the API Router to route
app.use('/api/v1', restRouter);

// when URL is /XXX (shortUrl), calls redirect Router and returns the longUrl
//:XXX is variable, not string mapping
app.use('/:shortUrl', redirectRouter);


app.listen(3000);
