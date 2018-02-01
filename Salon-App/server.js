

var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var http = require('http');
var app = express();

var port = 5434;
require('./app/webservice')(app)
app.use(express.static(__dirname));
app.use(helmet());

var server = http.createServer(app);
server.listen(port);

console.log("Salon App Started on "+port);

exports = module.exports = app;


