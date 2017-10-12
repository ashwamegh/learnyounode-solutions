const http = require('http');
const fs = require('fs');

const port = process.argv[2];
const fileLocation = process.argv[3];
const src = fs.createReadStream(fileLocation);

const server = http.createServer((request, response) => {
	src.pipe(response);
});

server.listen(port);
