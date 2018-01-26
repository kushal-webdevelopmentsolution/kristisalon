'use strict';

app.controller('headerController', function($scope, $rootScope,salonService, $timeout){
		salonService.getMenu().$promise.then(function(menus){
			$scope.menus = menus;
		});
})