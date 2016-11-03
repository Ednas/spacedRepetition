"use strict";
const express = require('express');
const bodyParser = require('body-parser');
const logger = require('morgan');
const passport = require('passport');
const config = require('./config');
// added path to render components from url
const path = require('path')


// change this when uploading to Heroku
// Temporary solution
// DOES NOT WORK FOR REACT
// const directoryname = "localhost:" + PORT;

// connect to the database and load models
require('./server/models').connect(config.dbUri);


const app = express();
var PORT = process.env.PORT || 5000;



// tell the app to look for static files in these directories
app.use(express.static('./server/static/'));
app.use(express.static('./client/dist/'));

// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).
// ADDED TO HANDLE URLS THAT RENDER COMPONENTS
// DOES NOT WORK FOR REACT
// app.get('*', function (request, response){
//   response.sendFile(path.resolve(directoryname, './server/static/', 'index.html'))
// })




// tell the app to parse HTTP body messages
app.use(bodyParser.json());
// INITIAL SETUP IS TO FALSE
app.use(bodyParser.urlencoded({ extended: false }));
// MAYBE SWITCH TO TRUE FOR TESTING PURPOSES
// app.use(bodyParser.urlencoded({ extended: true }));
// ======================================
// ADDED FOR TESTING
// app.use(bodyParser.text());
// app.use(bodyParser.json({type:'application/vnd.api+json'}));
// ======================================

// pass the passport middleware
app.use(passport.initialize());


// load passport strategies
const localSignupStrategy = require('./server/passport/local-signup');
const localLoginStrategy = require('./server/passport/local-login');
passport.use('local-signup', localSignupStrategy);
passport.use('local-login', localLoginStrategy);


// pass the authorization checker middleware
const authCheckMiddleware = require('./server/middleware/auth-check');
app.use('/api', authCheckMiddleware);



// routes
const authRoutes = require('./server/routes/auth');
const apiRoutes = require('./server/routes/api');
app.use('/auth', authRoutes);
app.use('/api', apiRoutes);




// Listener
app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
