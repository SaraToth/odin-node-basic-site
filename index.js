require('dotenv').config();
const express = require('express');
const app = express();
const http = require('http');
const url = require('url');
const fs = require('fs');
const path = require('path');
const videoURL = process.env.VIDEO_URL;

// http.createServer(function (req, res) {
//     const q = url.parse(req.url, true);
//     let pathname = q.pathname;

//     if(pathname === '/video-url.html') {
//         res.writeHead(200, { 'content-type': 'application/json'});
//         return res.end(JSON.stringify({ url: videoURL}));
//     }

//     // If path ends with / treat it as index
//     if (pathname === '/') {
//         pathname = '/index.html';
//     } 

//     // If path doesn't end with html add it
//     else if (!pathname.endsWith('.html')) {
//         pathname += '.html';
//     }

//     const filename = '.' + pathname;
//     fs.readFile(filename, function (err, data) {
//         if (err) {
//             fs.readFile('./404.html', function (err404, data404) {
//                 if (err404) {
//                     res.writeHead(404, { 'content-type': 'text/html'});
//                     return res.end("404 Page Not Found");
//                 }
//                 res.writeHead(404, { 'content-type': 'text/html'});
//                 res.write(data404);
//                 res.end();
//             })
//             return;
//         }
//         res.writeHead(200, { 'content-type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "about.html"))
})

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "contact-me.html"));
})

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, "404.html"));
});

// app.use(express.static(path.join(__dirname, "public")));

const PORT = 3000;
app.listen(PORT, () => {
    console.log("update!")
})
