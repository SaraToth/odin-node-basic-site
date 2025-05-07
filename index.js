const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    const q = url.parse(req.url, true); // whats this
    const filename = "." + q.pathname; // what's going on here
    fs.readFile('FILENAME', function (err, data) {
        if (err) {
            res.writeHead(404, { 'content-type': 'text/html'});
            return res.end("how to get my 404 page here?")
        }
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);