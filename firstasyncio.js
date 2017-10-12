const fs = require('fs');
const file = process.argv[2];

const options = {
	        encoding:'utf-8'
}

const fileData = fs.readFile(file, options, (err, data) => {
	if(err) throw err;
	const splittedData = data.split('\n');
	console.log(splittedData.length-1);
});

