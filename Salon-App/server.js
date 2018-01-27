

var express = require('express');
var bodyParser = require('body-parser');
var helmet = require('helmet');
var http = require('http');
var app = express();

var port = 80;

require('./app/routes')(app)
app.use(express.static(__dirname));
app.use(helmet());

var server = http.createServer(app);
server.listen(port);

console.log("Demo App Started on "+port);

exports = module.exports = app;


