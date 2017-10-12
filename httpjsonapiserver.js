const http = require('http');
const url = require('url');

const port = process.argv[2];

const server = http.createServer((request, response) => {
	if(request.method === 'GET'){
		const urlData = url.parse(request.url, true);
		response.writeHead(200,{'Content-Type' : 'application/json'});
		if(urlData.pathname === '/api/parsetime' && Object.prototype.hasOwnProperty.call(urlData.query, 'iso')){
				const responseJson ={};
				const date = new Date(urlData.query.iso);
				responseJson.hour = date.getHours();
				responseJson.minute = date.getMinutes();
				responseJson.second = date.getSeconds();
				response.write(JSON.stringify(responseJson));
				response.end();
		}

		else if(urlData.pathname === '/api/unixtime' && Object.prototype.hasOwnProperty.call(urlData.query, 'iso')){
				const responseJson ={};
				const date = new Date(urlData.query.iso);
				responseJson.unixtime = date.getTime();
				response.write(JSON.stringify(responseJson));
				response.end();
				console.log(responseJson);
		}
	}
});

server.listen(port);