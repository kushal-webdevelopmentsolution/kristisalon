// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var createMenuTable = function(){
	var params = {
		AttributeDefinitions: [
		{
			AttributeName: 'id',
			AttributeType: 'N'
		},
		{
			AttributeName: 'nav_name',
			AttributeType: 'S'
		},
		{
			AttributeName: 'nav_path',
			AttributeType: 'S'
		},
		{
			AttributeName: 'order',
			AttributeType: 'N'
		},
		{
			AttributeName: 'active',
			AttributeType: 'BOOL'
		}],
		KeySchema: [
		{
			AttributeName: 'id',
			KeyType: 'HASH'
		}],
		ProvisionedThroughput: {
			ReadCapacityUnits: 1,
			WriteCapacityUnits: 1
		},
		TableName: 'menus',
			StreamSpecification: {
				StreamEnabled: false
			}
		};
	ddb.createTable(params, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data.Table.KeySchema);
			menuBatchInsert();
		}
	});
}

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

var getMenuItems = function(callback){
	var params = {
		TableName: 'menus',
	};

	ddb.scan(params, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			callback(data.Items);
			/*data.Items.forEach(function(element, index, array) {
				console.log(element.Title.S + " (" + element.Subtitle.S + ")");
			});*/
		}
	});
}
module.exports = {
    createMenuTable: createMenuTable,
	getMenuItems: getMenuItems
};