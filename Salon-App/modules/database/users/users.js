var db = require("../database");

var table = "Users";

exports.createUsers =  function(req,res){
	db.setData(table,req.body,function(response){
		try{
			res.status(200).jsonp(response);
		}catch(err){
			res.status(500).jsonp(err);
		}
	});
}

exports.getUsers =  function(req,res){
	try{
		var data = db.dbObj.get(table).value();
		res.status(200).jsonp(data)
	}catch(err){
		console.log(err);
		res.status(500).jsonp(err)
	}
	
}

function isAuthenticated(input,user){
	if(input.username === user.username && input.password === user.password){
		return true;
	}else{
		return false;
	}
	
}

exports.getUserByUsername =  function(req,res){
	try{
		var credstring = JSON.stringify(req.body);
		var credential = JSON.parse(credstring);
		var query = {username:credential.username};
		var user = db.dbObj.get(table)
					.find(query)
					.value();
		if(isAuthenticated(credential, user)){
			res.status(200).jsonp(user);
		}
	}catch(err){
		console.log(err);
		res.status(500).jsonp(err)
	}
	
}

