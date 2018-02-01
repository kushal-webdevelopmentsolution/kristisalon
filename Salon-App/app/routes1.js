module.exports = function(app){
	
	var path = require("path");
	var multer  = require('multer');
	var bodyParser = require('body-parser'); 
	
	var storage = multer.diskStorage({
		  destination: 'app/uploads/',
		  filename: function (req, file, cb) {
			cb(null, file.originalname)
		  }
	})

	var upload = multer({limits: {fileSize: 10000000, files:1}, storage: storage })
	
	app.use(bodyParser.json({limit:'100mb'})); 
	app.use(bodyParser.urlencoded({limit:'100mb', extended: true}));

	app.use(function(req,res,next){
		next();
	});
	
	app.get('/app/*',function(req,res,next){
	 next();
	})
		
	app.get('/',function(req,res,next){
		res.redirect('http://localhost:5434/app/#!/home');
	})
		
	app.post('/uploadImage', upload.single('file'), function(req,res,next){
		res.send({statusCode:200,statusText:"upload successfully"});
		console.log('Uploade Successful ', req.file, req.body);
	});
}