var express = require('express');
var mongoose = require('mongoose');
var app = express();
var db = mongoose.connect('mongodb://localhost/bookAPI');
var bodyParser = require('body-parser');

var Book = require('./models/bookModel');

var port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var bookRouter = require('./Routes/bookRoutes')(Book);

app.use('/api', bookRouter);

app.get('/', function(req,res){
	
	res.send('Welcome to this random page!');
});

app.listen(port, function(){
	console.log('Running on port: '+port);
});