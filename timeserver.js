const port = process.argv[2];
const net = require('net');
const date = new Date();

const server = net.createServer((socket) => {
	const currentTime = `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
	socket.write(currentTime+'\n');
	socket.end();
});

server.listen(port);