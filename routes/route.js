const express = require('express');
const router = express.Router();

const User = require('../models/users')
const Dish = require('../models/dishes')
const Order = require('../models/orders')


/*
  Retrieves a list of dishes
  Body:
  Nothing
  Response: array of documents from dishes that match the search
  [{
    all information about dishes
    refer to dishes schema
  }]
*/
router.get('/dishes', function(req, res) {
  //console.log(req.body.keywords);
  //try {
    var results = Dish.find({}, function(err, docs) {
      if (err) {
        console.log("Throws error");
        res.send({
          message: "error"
        });
      } else if (!docs) {
        console.log("No dish found");
        res.json(docs);
      } else {
        console.log(docs);
        res.json(docs);
      };
    });

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
router.post('/users', function(req, res) {
  const user = new User({
    Name: req.body.name,
    Account: req.body.email,
    Password: req.body.password,
    Location: req.body.address,
    Type: "Buyer"
  });

  if (!validator.isEmail(user.Account)) {
    return res.status(400).send("Invalid email address");
  }
  if (!validator.isLength(user.Name, 3)) {
    return res.status(400).send("Name must be at least 3 characters");
  }
  if (!validator.isLength(user.Password, 3)) {
    return res.status(400).send("Password must be at least 3 characters");
  }

  try {
    user.save();
    res.send(user._id);
  } catch (err) {
    res.send(err);
  }
})


router.get('/users', function(req, res) {
  console.log("user login page");
  return res.location("/users")
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
router.get('/dishes/dishId', function(req, res) {
  var results = Dish.find({
    _id: req.body._id
  }, function(err, docs) {
    if (err) {
      console.log("Throws error");
      console.log(err);
      res.send({
        message: "error"
      })
    } else if (!docs) {
      console.log("No dish found");
      res.json(docs)
    } else {
      console.log(docs);
      res.json(docs)
    };
  });
})

/*
  Get a list of dishes that the caterer sells
  Body:
  {
    userid: //of caterer
  }
  Response: array of documents from dishes that the caterer sells
 [{
   all information about dishes
   refer to dishes schema
 }]*/
router.get('/users/id/dishes', function(req, res) {
  var results = Dish.find({
    Userid: req.body.userId
  }, function(err, docs) {
    if (err) {
      console.log("Throws error");
      console.log(err);
      res.send({
        message: "error"
      })
    } else if (!docs) {
      console.log("No dishes");
      res.json(docs)
    } else {
      console.log(docs);
      res.json(docs)
    };
  });

})

/*
Creates a new dish to be listed under the caterer
Body:
{
  “userid”: string
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
router.post('/users/id/dishes', function(req, res) {
  const dish = new Dish({
    Userid: req.body.userid,
    Name: req.body.name,
    Picture: req.body.picture,
    Description: req.body.description,
    Ingredients: req.body.ingredients, //array,
    Zipcode: req.body.zipcode
  });

  console.log(dish);

  try {
    dish.save();
    res.send(dish._id);
  } catch (err) {
    res.send(err);
  }

})

module.exports = router;
