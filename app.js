/*var http = require('http'),
	fs = require('fs'),
	connect = require('connect');
http.createServer(app).listen(8888);
*/

var express = require('express'),
	path = require('path'),
	parser = require('body-parser');

var app = express();
var router = require('./todos');

//App Config
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

//Middleware
app.use(express.static(path.join(__dirname, 'bower_components')));
app.use(parser.urlencoded({ extended: false }));
app.use(parser.json());
app.use(router);

//Server
function doServe(){
	console.log('Listening at '+port+'..');
}
var port = Number(process.env.PORT || 3000);
app.listen(port, doServe);
