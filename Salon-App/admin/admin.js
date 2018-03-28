module.exports = function(app){
	var path = require("path");
	var multer  = require('multer');
	var bodyParser = require('body-parser'); 
	var s3 = require("../modules/awsS3");
	var database = require("../modules/database");
	var users = require("../modules/database/users");
	var basicAuth = require('basic-auth');
	
	var auth = function (req, res, next) {
		res.setHeader('Cache-Control','no-cache,no-store,max-age=0,must-revalidate');
		res.setHeader('Pragma','no-cache');
		res.setHeader('Expires','-1');
		function unauthorized(res) {
			res.set('WWW-Authenticate', 'x-Basic realm=Authorization Required');
			return res.send(401);
		};
		var user = basicAuth(req);
		
		if (!user || !user.name || !user.pass) {
			return unauthorized(res);
		};

		if (user.name === 'kristi' && user.pass === 'kushal2209') {
			return next();
		} else {
			return unauthorized(res);
		};
	};
	
	app.use(bodyParser.json()); 
	app.use(bodyParser.urlencoded({extended: true}));
	
	app.use(function(err, req, res, next){
		res.status(err.status || 500);
		res.send({
			message: err.message,
			error: err
		});
		return;
	});

	app.get('/admin/*',function(req,res,next){
	 next();
	})
	
	app.get('/api/*',function(req,res,next){
	 next();
	})
	
	app.post('/api/admin/login',users.getUserByUsername);
	
	
}
