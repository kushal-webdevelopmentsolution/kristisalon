'use strict';

var urlPrefix = '/demoservice';
var serviceurl = 'http://localhost:9000';
var reqheaders = {'Authorization':'Basic a3Jpc3RpOmt1c2hhbDIyMDk=','Content-Type':'application/json'};
angular.module('restModule',['ngResource'])
.factory('demoService', function($resource){
	return $resource(
			urlPrefix ,{},{
				getMenus:{
					url: serviceurl + urlPrefix +'/getMenus',
					method: 'GET',
					headers: reqheaders,
					isArray: true
				},
				getAllImages:{
					url: serviceurl + urlPrefix +'/getAllImage',
					method: 'GET',
					headers: reqheaders,
					isArray: true
				},
				getImagesByGroupname:{
					url: serviceurl + urlPrefix +'/getImageByGroupName/:groupName',
					method: 'GET',
					headers: reqheaders,
					isArray: true
				},
				createImage:{
					url: serviceurl + urlPrefix +'/saveImage',
					method: 'POST',
					headers: reqheaders,
					isObject: true
				}
			}
	)	
})
.factory('uploadService', function($resource){
	return $resource(
			'/uploadImage',{},{
				upload:{
					url: "/uploadImage",
					method: "POST",
					headers:{},
		            transformRequest: angular.identity,
		            headers: { 'Authorization':undefined,'Content-Type': undefined }
				}
			}
	)
})

