const mongoose = require('mongoose');

const OrderSchema = mongoose.Schema({
  Seller:{ //id
    type: String,
    required: true
  },
  Buyer:{ //id
    type: String,
    required: true
  },
  Dishes: //array of dish ids
  {
    type: [String],
    required: true
  },
  Price: {
    type: Number,
    required: true
  },
  Estimate_time: {
    type: String,
    required: true
  },
  Status:{
    type: String,
    required: true
  }
}) ;


module.exports = mongoose.model('Orders', OrderSchema)
