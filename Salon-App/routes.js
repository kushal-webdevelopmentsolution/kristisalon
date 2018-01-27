module.exports = function(app){
	var s3 = require("awsS3");
	
	app.get('/app/*',function(req,res,next){
	 next();
	})
	
	app.get('/',function(req,res,next){
		res.redirect('/app/#!/home');
	})
	app.get('/createBucket',function(req,res,next){
		s3.create("krishal",function(response){
			res.render("response", response);
		});

	})
	
}
