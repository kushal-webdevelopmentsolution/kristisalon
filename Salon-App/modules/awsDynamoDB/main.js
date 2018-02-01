var AWS = require('aws-sdk');

var ddb = new AWS.DynamoDB();

// Bucket names must be unique across all S3 users


var menuBatchInsert = function(){
	var params = {
		RequestItems: {
			"menus": [{
				PutRequest: {
					Item: {
							"id": { "N": "1" },
							"nav_name": { "S": "Home" },
							"nav_path": { "N": "#!/home" },
							"order": { "N": "1" },
							"active": { "BOOL": "true" }
						}
				}
			},
			{
				PutRequest: {
					Item: {
							"id": { "N": "2" },
							"nav_name": { "S": "About" },
							"nav_path": { "N": "#!/about" },
							"order": { "N": "2" },
							"active": { "BOOL": "true" }
						}
				}
			},
			{
				PutRequest: {
					Item: {
							"id": { "N": "3" },
							"nav_name": { "S": "Gallery" },
							"nav_path": { "N": "#!/gallery" },
							"order": { "N": "3" },
							"active": { "BOOL": "true" }
						}
				}
			},{
				PutRequest: {
					Item: {
							"id": { "N": "4" },
							"nav_name": { "S": "Services" },
							"nav_path": { "N": "#!/services" },
							"order": { "N": "4" },
							"active": { "BOOL": "true" }
						}
				}
			},{
				PutRequest: {
					Item: {
							"id": { "N": "5" },
							"nav_name": { "S": "Contact" },
							"nav_path": { "N": "#!/contact" },
							"order": { "N": "5" },
							"active": { "BOOL": "true" }
						}
				}
			}]
		}
	};
	ddb.batchWriteItem(params, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data);
	}
});
	
}

 

module.exports = {
    batchInsert: batchInsert
};