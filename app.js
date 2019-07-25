var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var requireDir = require('require-dir');

var routes = requireDir(path.join(__dirname, 'routes'));

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

Object.keys(routes).forEach(key => {
  app.use(...routes[key])
})

module.exports = app;
