var AWS = require('aws-sdk');

var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users

function create(bucket,key){
	s3.createBucket({Bucket: bucket, callback}, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			params = {Bucket: myBucket, Key: myKey, Body: 'Hello!'};
			s3.putObject(params, function(err, data) {
				if (err) {
					console.log(err)
				} else {
					return callback(data);
					console.log("Successfully uploaded data to myBucket/myKey");
				}
			});
		}
	});
}

module.exports = {
    create: create
};