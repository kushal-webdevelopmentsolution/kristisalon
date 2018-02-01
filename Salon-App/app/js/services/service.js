'use strict';

angular.module('serviceModule',['restModule'])
.factory('salonService', function($q, demoService, uploadService){
	
	return {
		getMenu: function(){
			
			return demoService.getMenus({},
			function (){
				console.log('Menu service called');
			},
			function (error){
				console.log(error);
			}).$promise
		},
		getImages: function(group){
			return demoService.getImagesByGroupname({ groupName:group },
			function (){
				console.log('All Images service called');
			},
			function (error){
				console.log(error);
			}).$promise
		},
		createImage: function(imagedto){
			return demoService.createImage({},imagedto,
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