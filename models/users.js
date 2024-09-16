const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  Name: {
    type: String,
    required: true
  },
  Account: { //email id
    type: String,
    required: true
  },
  Password: {
    type: String,
    required: true
  },
  Type: { //buyer of caterer
    type: String,
    required: true
  },
  Location: { //address, we could ask for just the pin
    type: String,
    required: true
  },
  Permit: { //if caterer, something to be added
    type: String,
    required: false
  }
});

module.exports = mongoose.model('Users', UserSchema)
