// Require all of our packages at the top
var express        = require('express');
var cors           = require('cors');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var path           = require('path');
var methodOverride = require('method-override');
var mongoose       = require('mongoose');

// Create a new express app
var app            = express();

// Requiring our routes.js
var routes = require('./config/routes');

// Setup the connection to our database
var databaseUrl    = 'mongodb://localhost:27017/yearbook';
mongoose.connect(databaseUrl);


// Setup our middlewear
app.use(cors());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(methodOverride(function(req, res){
  if(req.body && typeof req.body === 'object' && '_method' in req.body){
    var method = req.body._method;
    delete req.body._method
    return method;
  }
}));

app.use(routes);
app.listen(3000);
console.log("Express is listening on localhost:3000")