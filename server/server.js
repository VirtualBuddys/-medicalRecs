var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var middleware = require('./config/middleware.js');

middleware(app, express);

app.listen(port);
console.log('Now listening on port: ' + port);
