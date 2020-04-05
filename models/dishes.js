const mongoose = require('mongoose');

const DishSchema = mongoose.Schema({
  Userid: {
    type: String,
    required: true
  },
  Name:{
    type: String,
    required: true
  },
  Picture:{
    //Will set up using GridFS
    type: String,
    required: true
  },
  Description:{
    type: String,
    required: true
  },
  Rating:{
    type: Number
  },
  Ingredients: { //array
    type: String[],
    required: true
  },
 Zipcode: {
   type: String,
   required: true
 }//might make it easier to locate dishes and search for them

}) ;

module.exports = mongoose.model('Dishes', DishSchema)
