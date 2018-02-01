var AWS = require('aws-sdk');

var s3 = new AWS.S3();

// Bucket names must be unique across all S3 users

 var create = function(bucket,key, callback){
	s3.createBucket({Bucket: bucket}, function(err, data) {
		if (err) {
			console.log(err);
		} else {
			params = {Bucket: bucket, Key: key, Body: 'Hello!'};
			s3.putObject(params, function(err, data) {
				if (err) {
					console.log(err)
				} else {
					return callback(data);
				}
			});
		}
	});
}

var list = function (bucket, callback){	
	s3.listObjects({Bucket:bucket}, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			callback(data);
		}
	});
}

var deleteBucket = function (bucket,key, callback){	
	s3.deleteObject({Bucket: bucket, Key: key}, function(err, data) {
		if (err) {
			console.log(err)
		} else {
			s3.deleteBucket({Bucket:bucket}, function(err, data) {
				if (err) {
					console.log("Error", err);
				} else {
					callback(data);
				}
			});
		}
	});
}

module.exports = {
    create: create,
	list:list,
	deleteBucket:deleteBucket
};