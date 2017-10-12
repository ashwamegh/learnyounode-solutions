const http = require('http');
const map = require('through2-map');

const port = process.argv[2];

const options = {
	method: 'POST'
}
const server = http.createServer((request,response) => {
	console.log("server started");
	console.log(request.method);
	if(request.method === 'POST'){
		request.pipe(map(function (chunk) {  
       return chunk.toString().toUpperCase(); 
     })).pipe(response)  ;
	}
});


server.listen(port);
