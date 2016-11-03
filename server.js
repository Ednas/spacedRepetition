//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');

//Sets up express
var app = express();
var PORT = process.env.PORT || 3000;