const fs = require('fs');
const file = process.argv[2];

const options = {
	encoding:'utf-8'
}

const fileData = fs.readFileSync(file, options);
const splittedData = fileData.split('\n');

console.log(splittedData.length-1);
