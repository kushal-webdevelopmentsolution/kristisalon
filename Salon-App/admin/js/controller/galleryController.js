'use strict';

app.controller('galleryController', function($scope, $rootScope, salonService, $timeout){
	$rootScope.enableSlider=false;
	$rootScope.enableFooter=false;
	
	$scope.images = salonService.getImages("Gallery").then(function(images){
		$scope.galleryimages = images;
	});
	
})