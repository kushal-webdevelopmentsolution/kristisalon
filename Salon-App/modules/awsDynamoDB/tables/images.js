// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');

// Create the DynamoDB service object
var ddb = new AWS.DynamoDB();

var createImageTable = function(){
	var params = {
		AttributeDefinitions: [
		{
			AttributeName: 'id',
			AttributeType: 'N'
		},
		{
			AttributeName: 'img_path',
			AttributeType: 'S'
		},
		{
			AttributeName: 'img_group',
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
		TableName: 'images',
			StreamSpecification: {
				StreamEnabled: false
			}
		};
	ddb.createTable(params, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			console.log("Success", data.Table.KeySchema);
		}
	});
}
var getImageItems = function(callback){
	var params = {
		TableName: 'images',
	};
	ddb.scan(params, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			callback(data.Items);
		}
	});
}

var getImageByGroup = function(group,callback){
	var params = {
		TableName: "images",
		KeyConditionExpression: "img_group = :a",
		ExpressionAttributeValues: {
			":a": group
			}
	};
	ddb.scan(params, function(err, data) {
		if (err) {
			console.log("Error", err);
		} else {
			callback(data.Items);
		}
	});
}
module.exports = {
    createImageTable: createImageTable,
	getImageItems: getImageItems,
	getImageByGroup:getImageByGroup
};