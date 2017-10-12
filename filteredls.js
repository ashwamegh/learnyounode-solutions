const fs = require('fs');
const path = require('path');

const dirpath = process.argv[2];
const extension = process.argv[3];
const options = {
	encoding: 'utf8'
}

fs.readdir(dirpath, options, (err, files) => {
	if(err) throw err;
	files.forEach((file) => {
	if(path.extname(file).replace('.','') === extension){
		console.log(file);
	}
	});
});