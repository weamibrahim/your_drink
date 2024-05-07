const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const Schema = mongoose.Schema;

const userSchema = new Schema({
  
  user_name: {
    type: String,
    required: false,
    minlength: 3,
    maxlength: 50
  },
  email: {
    type: String,
    required: false,
    unique: true,
    minlength: 5,
    maxlength: 255
  },
  password: {
    type: String,
    required: false,
    minlength: 8,
    maxlength: 1024
  },
 
  user_image: {
    type: String,
    required: false
  },
  gender: {
    type: String,
    required: false,
    enum: ['male', 'female']
  },
  role: {
    type: String,
    required: false,
    enum: ['user', 'admin'],
    default: 'user'
  },
  mobile: {
    type: String,
    required: false,
   
  },
  address: {
    type: String,
    required: false
  },
  
 
});

const User = mongoose.model('users', userSchema);

module.exports = User;
