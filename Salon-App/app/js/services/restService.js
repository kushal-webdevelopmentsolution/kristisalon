'use strict';

var urlPrefix = '/api/app';
var reqheaders = {'Authorization':'Basic a3Jpc3RpOmt1c2hhbDIyMDk=','Content-Type':'application/json'};
angular.module('restModule',['ngResource'])
.factory('demoService', function($resource){
	return $resource(
			urlPrefix ,{},{
				getMenus:{
					url: urlPrefix +'/menus',
					method: 'GET',
					headers: reqheaders,
					isArray: true
				},
				getAllImages:{
					url: urlPrefix +'/getAllImage',
					method: 'GET',
					headers: reqheaders,
					isArray: true
				},
				getImagesByGroupname:{
					url: urlPrefix +'/getImages/:groupName',
					method: 'GET',
					headers: reqheaders,
					isArray: true
				},
				createImage:{
					url: urlPrefix +'/saveImage',
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
					url: urlPrefix+"/uploadImage",
					method: "POST",
					transformRequest: angular.identity,
		            headers:{ 'Authorization':'Basic a3Jpc3RpOmt1c2hhbDIyMDk=','Content-Type': undefined }
				}
			}
	)
})

