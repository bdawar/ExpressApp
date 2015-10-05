/*var http = require('http'),
	fs = require('fs'),
	connect = require('connect');
http.createServer(app).listen(8888);
*/

var express = require('express'),
	path = require('path'),
	parser = require('body-parser');

var app = express();

//App Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(parser()); //body-parser
app.use(require('./todos'));

//Server
function doServe(){
	console.log('Listening at 8888..');
}
app.listen(8888, doServe);
