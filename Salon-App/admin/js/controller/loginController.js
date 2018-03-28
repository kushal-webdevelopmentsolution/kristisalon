'use strict';

app.controller('loginController', function($scope, $rootScope,$location,$timeout, adminService){
	$scope.user = {"username":null,
				   "password":null};
	$scope.submit = function(loginDTO){
		
		adminService.login(loginDTO).then(function(res){
			if(res.role === "Admin"){
				$location.path('/home');
			}
		});
	}
})
