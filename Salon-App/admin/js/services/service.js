'use strict';

angular.module('serviceModule',['restModule'])
.factory('adminService', function($q, adminRestService, uploadService){
	
	return {
		login: function(loginDTO){
			
			return adminRestService.login({},loginDTO,
			function (){
				console.log('Login service called');
			},
			function (error){
				console.log(error);
			}).$promise
		},
		getImages: function(group){
			return adminRestService.getImagesByGroupname({ groupName:group },
			function (){
				console.log('All Images service called');
			},
			function (error){
				console.log(error);
			}).$promise
		},
		createImage: function(imagedto){
			return adminRestService.createImage({},imagedto,
			function (response){
				console.log('Image Created');
			},
			function (error){
				console.log(error);
			}).$promise
		},
		upload: function(file){
			console.log("file ",file);
			return uploadService.upload({}, file,
				function (res){
					console.log('Test Endpoint Invoked',res);
				},
				function (error){
					console.log(error);
				}).$promise
		}
	};
});