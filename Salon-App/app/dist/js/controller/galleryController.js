"use strict";app.controller("galleryController",function(e,l,r,a){l.enableSlider=!1,l.enableFooter=!1,e.images=r.getImages("Gallery").then(function(l){e.galleryimages=l})});