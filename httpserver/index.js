const http = require('http');
const port = 8000;
const fs = require('fs');

function requestHandler(request, response) {
    console.log(request.url);
    response.writeHead(200, {
        'content-type': 'text/html'
    });

    fs.readFile('./index.html', function (error, data) {
        if (error) {
            return response.end('Error!');
        }
        response.end(data);
    });
}

const server = http.createServer(requestHandler);
server.listen(port, function (error) {
    if (error) {
        console.log("Error: " + error);
        return;
    }
    console.log("The server is up and running on port: " + port);
});