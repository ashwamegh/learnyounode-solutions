const asyncHelper = require('./filteredls-helper');

const dirpath = process.argv[2];
const extension = process.argv[3];

const callback = (err, files) => {
	if(err) throw err;
	files.forEach((file) => {
	if(path.extname(file).replace('.','') === extension){
		console.log(file);
	}
	});
}

asyncHelper(dirpath, extension, callback)