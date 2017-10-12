const http = require('http');
const BufferList = require('bl');
const url = process.argv[2];

http.get(url, (response) => {
	let bl = new BufferList();
	response.setEncoding('utf8');
	response.on('data', (data)=> {
		bl.append(new Buffer(data));
	});
	response.on('error', (error) => {
		return console.error(error)
	})
	response.on('end', () => {
		console.log(bl.length);
		console.log(bl);
	})
});