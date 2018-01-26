module.exports = function(app){

	app.get('/app/*',function(req,res,next){
	 next();
	})
	
	app.get('/',function(req,res,next){
		res.redirect('http://localhost:5434/app/#!/home');
	})


}
