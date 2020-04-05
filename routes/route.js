
const express = require('express');
const router = express.Router();

const User = require('../models/users')
const Dish = require('../models/dishes')
const Order = require('../models/orders')


router.get('/dishes', function(req, res){
/*
  Retrieves a list of dishes according to search criteria
  Body:
  {
  “keywords”: string[]
  “range”: integer
  }
  Response:
  {
  “dishID”: integer[]
  }
*/
console.log(req.body.keywords);
var results = Dish.find({name : {$in: req.body.keywords }},{}, function(err, docs) {
    if( err) {
        console.log("Throws error");
        console.log(err);
    } else if (!docs){
      console.log("No dish found");
    }
    else {
      console.log("EGGH");
      console.log(docs);
      return docs;
    };
});
//var query = Dish.find({ name : {$in: req.keywords }, }).limit(req.range);
//var promise = query.exec();
//res.send() //sends the dishes based on query by mongoos on db
})


router.post('/users', function(req, res){
  /*
  Body:
{
“username”: string
"name" : string
“password”: string
“address”: string
}
Response:
{
user document including _id
}*/

const user = new User({
  Name: req.body.name,
  Account: req.body.username,
  Password: req.body.password,
  Location:req.body.address,
  Type: "Buyer"
});

console.log(user);

try {
  user.save();
  res.send(user);
}
catch(err){
  res.send(err);
}
})


router.get('/dishes/dishId', function(req, res){
  /*
  Gets information on a specific dish
Note: this is semi redundant with /users/id/dish/dishID but this interface is just for searching, not for management
Body:
{
“userID”: integer
“name”: string
“picture”: jpg
“description”: string
“rating”: float
“ingredients”: string
“zipcode”: integer
}*/
  


})


router.get('/users/id/dishes', function(req, res) {
  /*
  Get a list of dishes
Body:
None
Response:
{
“dishID”: integer[]
}*/

})

router.post('/users/id/dishes', function(req, res){
  /*
  Creates a new dish
Body:
{
“userid”: integer
“name”: string
“picture”: jpg
“description”: string
“rating”: float
“ingredients”: string
“zipcode”: integer
}
Response:
{
“dishID”: integer
}*/
})

module.exports = router;
