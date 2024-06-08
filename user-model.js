
const mongoose = require('mongoose');

// Define the User model
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    phone: { type: String, required: true }
  });
  
  const UserModel = mongoose.model('User', userSchema);
  module.exports=UserModel;