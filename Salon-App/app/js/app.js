'use strict';

var app = angular.module('salonApp', ['ngRoute','restModule','serviceModule']);
	app.config(['$routeProvider','$httpProvider',function($routeProvider,$httpProvider){
		
		$routeProvider
		.when('/home',{
			templateUrl: 'views/home.htm',
			controller: 'homeController'
		})
		.when('/about',{
			templateUrl: 'views/about.html',
			controller: 'aboutController'
		})
		.when('/contact',{
			templateUrl: 'views/contact.html',
			controller: 'contactController'
		})
		.when('/gallery',{
			templateUrl: 'views/gallery.html',
			controller: 'galleryController'
		})
		.when('/services',{
			templateUrl: 'views/service.html',
			controller: 'serviceController'
		})
		.when('/upload',{
			templateUrl: 'views/upload.html',
			controller: 'uploadController'
		})
		.when('/admin/images',{
			templateUrl: 'views/admin/gallery.html',
			controller: 'imagesController'
		})
		.otherwise({
			redirectTo: '/home'
		})
		
		
		$httpProvider.interceptors.push('APIInterceptor');
	}])
	app.run(function($rootScope, $route){
		$rootScope.enableSlider=true;
		$rootScope.enableFooter=true;
		$rootScope.$on('$routeChangeStart',function(){});
		$rootScope.$route = $route;
		$rootScope.$on("$routeChangeSuccess", function(){
			$rootScope.activeTab = $rootScope.$route.current.$$route.originalPath.toUpperCase();
			$rootScope.routeItem = function(name){
				name = name.toUpperCase();
				return $rootScope.activeTab === '/'+name;
			}
		});
		$rootScope.$on('$routeChangeError',function(){});
	})
	app.directive('fileModel', ['$parse', function ($parse) {
        return {
           restrict: 'A',
           link: function(scope, element, attrs) {
              var model = $parse(attrs.fileModel);
              var modelSetter = model.assign;
              element.bind('change', function(){
            	  
                 scope.$apply(function(){
                	modelSetter(scope, element[0].files[0]);
                 });
              });
           }
        };
     }]);
	app.service('APIInterceptor', [function() {
	    var service = this;

	    service.request = function(config) {
	       // config.headers.authorization= "Basic a3Jpc3RpOmt1c2hhbDIyMDk=";
	       // config.headers["Content-Type"] = 'application/json';
	        return config;
	    };
	}]);
	
	

	