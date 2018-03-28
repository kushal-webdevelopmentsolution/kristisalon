'use strict';

app.controller('uploadController', function($scope, $rootScope, salonService, $timeout, $route){
	
	$rootScope.enableSlider=false;
	$rootScope.enableFooter=false;
	$scope.image = {
			"imgurl":"uploads/",
			"imgGroup":"Slider",
			"imgOrder":"1",
			"active":"true"
	}
	var maxOrder = 100;
	var orders = [];
	for(var i=1; i<=100; i++){
		orders.push(i);
	}
	$scope.orders = orders;
	
	$scope.uploadFile = function(file,imageData){
		console.log(file);
		imageData.imgurl += file.name;
		var fd = new FormData();
		fd.append('image',JSON.stringify(imageData));
		fd.append('file', file);
		salonService.upload(fd).then(function(res){
			$route.reload();
		});
		
	}
	
	
})