'use strict';

app.controller('headerController', function($scope, $rootScope,salonService, $timeout){
	
	
		salonService.getMenu().then(function(menus){
			$scope.menus = menus;
		});
		
		salonService.getImages("Slider").then(function(sliders){
			$scope.sliders = sliders;
		});

})