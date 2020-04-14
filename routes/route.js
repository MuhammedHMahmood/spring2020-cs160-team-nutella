
const express = require('express');
const router = express.Router();

const User = require('../models/users')
const Dish = require('../models/dishes')
const Order = require('../models/orders')


router.get('/', function(req, res){
  res.sendFile('/views/index.html', {'root': './public'});
})


/*
  Request Body:
{
“email”: string
“password”: string
//the type will default to buyer unless they go ahead and get a permit
}
Response:
{
 if success -> nothing
}*/
router.get('/login', function(req, res){
  res.sendFile('/views/login.html', {'root': './public'});
})


router.post('/login', function(req, res){
  var results = User.find({$and: [{Account : req.body.email}, {Password: req.body.password}]},function(err, docs) {
      if(err) {
          console.log("Throws error");
          console.log(err);
          res.send({message: "error"})
      } else if (!docs || docs === []){
        console.log("Password or username (email id) incorrect");
        res.status(401)
        //res.sendFile('/Users/admin/Desktop/MomKitchenProject/FrontEnd/views/login.html')
        res.sendFile('/views/login.html', {'root': './public'});
      }
      else {
        console.log(docs);
        res.status(200)
        res.redirect("/users/"+docs._id);
        //res.sendFile('/Users/admin/Desktop/MomKitchenProject/FrontEnd/views/userMainPage.html')
      };
  });
})


router.get('/users', function(req, res){
    res.sendFile('/views/register.html', {'root': './public'});
///res.sendFile('/Users/admin/Desktop/MomKitchenProject/FrontEnd/views/register.html')
})


/*
  Request Body:
{
“username”: string
"name" : string
“password”: string
“address”: string
//the type will default to buyer unless they go ahead and get a permit
}
Response:
{
 The user _id. Should get a response on screen that says object successfully created
}*/
router.post('/users', function(req, res){
const user = new User({
  Name: req.body.name,
  Account: req.body.email,
  Password: req.body.password,
  Location:req.body.address,
  Type: "Buyer"
});

console.log(user);

try {
  user.save();
  //res.send(user._id);
  res.redirect("/users/"+user._id);
}
catch(err){
  res.send(err);
}
})

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
router.get('/dishes/:dishId', function(req, res){
var results = Dish.find({_id : req.params.dishId },function(err, docs) {
    if(err) {
        console.log("Throws error");
        console.log(err);
        res.send({message: "error"})
    } else if (!docs){
      console.log("No dish found");
      res.json(docs)
    }
    else {
      console.log(docs);
        res.json(docs)
    };
});
})


router.get('/users/:userId', function(req, res) {
  res.sendFile('/views/userMainPage.html', {'root': './public'});
//res.sendFile('/Users/admin/Desktop/MomKitchenProject/FrontEnd/views/userMainPage.html')
})

/*
Get a list of dishes that the caterer sells
Body:
Response: array of documents from dishes that the caterer sells
[{
 all information about dishes
 refer to dishes schema
}]*/
router.get('/users/:userId/dishes', function(req, res) {
var results = Dish.find({Userid : req.params.userId },function(err, docs) {
    if(err) {
        console.log("Throws error");
        console.log(err);
        res.send({message: "error"})
    } else if (!docs){
      console.log("No dishes");
      res.json(docs)
    }
    else {
      console.log(docs);
        res.json(docs)
    };
});

})

/*
Creates a new dish to be listed under the caterer
Body:
{
“name”: string
“picture”: jpg
“description”: string
“ingredients”: string[]
“zipcode”: integer
}
Response:
{
 The dish _id. Should get a response on screen that says object successfully created
}*/

router.post('/users/:userId/dishes', function(req, res){
const dish = new Dish({
  Userid: req.params.userId,
  Name:req.body.name,
  Picture:req.body.picture,
  Description:req.body.description,
  Ingredients: req.body.ingredients ,//array,
  Zipcode: req.body.zipcode
});

console.log(dish);

try {
  dish.save();
  res.send(dish._id);
}
catch(err){
  res.send(err);
}

})


/*
  Retrieves a list of dishes according to search criteria based on a key word and limiting number of searches
  Body:
  {
  “keyword”: string
  “limit”: integer
  }
  Response: array of documents from dishes that match the search
  [{
    all information about dishes
    refer to dishes schema
  }]
*/
router.get('/dishes', function(req, res){
  backURL=req.header('Referer') || '/';

  var results = Dish.find({}, function(err, docs) {
        if (err) {
          console.log("Throws error");
          res.send({
            message: "error"
          });
          //res.redirect(backURL);
        } else if (!docs) {
          console.log("No dish found");
          res.json(docs);
        //  res.redirect(backURL);
        } else {
          console.log({ result: docs })
          console.log(docs);
          res.send(docs)
          //res.send({ result: docs});
            res.sendFile('/views/dishes.html', {'root': './public'});
          //res.sendFile('/Users/admin/Desktop/MomKitchenProject/FrontEnd/views/dishes.html')
        };
      });
})


module.exports = router;
