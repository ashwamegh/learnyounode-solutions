const http = require('http');
const urls = [...process.argv].slice(2);
const index = 0;

const juggle = (url) => {
	return new Promise((resolve, reject) => {
		http.get(url, (response) => {
			let dataString="";
			response.setEncoding('utf8');
			response.on('data', (data)=> {
				dataString += data;
			});
			response.on('error', (error) => {
				reject(error);
			});
			response.on('end', () => {
				resolve(dataString);
			});
		});
	});
}

const callJuggle = () => {
	Promise.all([ juggle(urls[0]), juggle(urls[1]), juggle(urls[2]) ]).then((values) => {
		values.forEach((value) => console.log(value));
	});
}

callJuggle();