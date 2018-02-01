module.exports = function(app){
	var path = require("path");
	var multer  = require('multer');
	var bodyParser = require('body-parser'); 
	var s3 = require("../modules/awsS3");
	var database = require("../modules/database");
	var menus = require("../modules/database/menus");
	var uploads = require("../modules/database/uploads");
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
		
	var storage = multer.diskStorage({
		  destination: 'app/uploads/',
		  filename: function (req, file, cb) {
			cb(null, file.originalname)
		  }
	})

	var upload = multer({limits: {fileSize: 10000000, files:1}, storage: storage })
	
	app.use(bodyParser.json({limit:'100mb'})); 
	app.use(bodyParser.urlencoded({limit:'100mb', extended: true}));
	
	app.use(function(err, req, res, next){
		res.status(err.status || 500);
		res.send({
			message: err.message,
			error: err
		});
		return;
	});

	app.get('/app/*',function(req,res,next){
	 next();
	})
	
	app.get('/api/*',auth,function(req,res,next){
	 next();
	})
	
	app.get('/',function(req,res,next){
		res.redirect('http://ec2-18-217-127-212.us-east-2.compute.amazonaws.com/app/#!/home');
	})
	
	app.post('/api/app/createmenus',menus.createMenus);
	
	app.get('/api/app/menus',menus.getMenus);
	
	app.get('/api/app/getImages/:group',uploads.getImages);
	
	app.post('/api/app/uploadImage',upload.single('file'),uploads.createUploads);
	
	app.post('/api/app/updateImage',upload.single('file'),uploads.updateImage);
	
	app.get('/api/app/deleteImage/:group/:id',uploads.deleteImage);
}
