const path = require('path');
const fs = require('fs');

const options = {
	encoding: 'utf8'
}

module.exports = (dirname, extension, callback) => {
	fs.readdir(dirname, options, (err, data) => {
		if(err) return callback(err);
		const callbackData = [];
			data.forEach((file) => {
				if(path.extname(file).replace('.','') === extension){
					callbackData.push(file);
				}
			});
		callback(err, callbackData);
	});
}