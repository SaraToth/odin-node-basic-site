const http = require('http');
const url = require('url');
const fs = require('fs');

http.createServer(function (req, res) {
    const q = url.parse(req.url, true); // whats this
    const filename = "." + q.pathname; // what's going on here
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