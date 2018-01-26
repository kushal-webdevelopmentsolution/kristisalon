'use strict';

app.controller('imagesController', function($scope, $rootScope, salonService, $timeout){
	$rootScope.enableSlider=false;
	$rootScope.enableFooter=false;
	
	function imagesController(){
		$scope.images = salonService.getImages().$promise.then(function(images){
			$scope.images = images;
		});
	}
	
	imagesController();
	
})