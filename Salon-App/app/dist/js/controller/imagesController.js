"use strict";app.controller("imagesController",function(e,n,o,t){function i(){e.images=o.getImages().$promise.then(function(n){e.images=n})}n.enableSlider=!1,n.enableFooter=!1,i()});