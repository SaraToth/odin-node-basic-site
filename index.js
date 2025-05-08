require('dotenv').config();

const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const videoURL = process.env.VIDEO_URL;

http.createServer(function (req, res) {
    const q = url.parse(req.url, true);
    let pathname = q.pathname;

    if(pathname === '/video-url.html') {
        res.writeHead(200, { 'content-type': 'application/json'});
        return res.end(JSON.stringify({ url: videoURL}));
    }

    // If path ends with / treat it as index
    if (pathname === '/') {
        pathname = '/index.html';
    } 

    // If path doesn't end with html add it
    else if (!pathname.endsWith('.html')) {
        pathname += '.html';
    }

    const filename = '.' + pathname;
    fs.readFile(filename, function (err, data) {
        if (err) {
            fs.readFile('./404.html', function (err404, data404) {
                if (err404) {
                    res.writeHead(404, { 'content-type': 'text/html'});
                    return res.end("404 Page Not Found");
                }
                res.writeHead(404, { 'content-type': 'text/html'});
                res.write(data404);
                res.end();
            })
            return;
        }
        res.writeHead(200, { 'content-type': 'text/html'});
        res.write(data);
        res.end();
    });
}).listen(8080);