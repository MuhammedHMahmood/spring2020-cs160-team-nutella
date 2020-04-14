
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
//mongoose.connect("mongodb://Nutella:NutellaPass@cluster0-7zxfk.mongodb.net/test?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to the db")) //url with username and password with uri of db

mongoose.connect('mongodb+srv://Nutella:NutellaPass@cluster0-7zxfk.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true});

var USER_COLLECTION = "Users";
var DISH_COLLECTION = "Dishes";
var ORDER_COLLECTION = "Orders";

var app = express();
app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
var db;

const route = require('./routes/route');
app.use(route);

app.listen(3000);
