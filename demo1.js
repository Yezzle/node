const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((Request, response) => {

    let url = Request.url;
    let fileToRead
    if (url == '/') {
        fileToRead = './html/index.html';
    } else {
        fileToRead = './html' + url;
    }

    fs.readFile(path.resolve(fileToRead), (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        response.write(data.toString());
        response.end();
    })
})

const port = 8080;
server.listen(port, () => {
    console.log('server is running at port:', port)
})
