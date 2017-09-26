var express = require('express');
var bodyParser = require('body-parser');
var logger = require('morgan');
var connection = require("./config/connection.js");
var app = express();
var methodOverride = require("method-override");
app.use(methodOverride("_method"));
var PORT = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("./public"));


app.get('/', function(req,res){
	res.sendFile('./public/index.html');
});




app.listen(PORT,function(err){
	
	console.log("listening to port : "+ PORT);
})