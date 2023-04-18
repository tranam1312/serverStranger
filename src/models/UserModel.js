const mongoose = require('mongoose')
const UserSchema = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  passwordConfirmation: String
})

const CreatUser = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  passwordConfirmation: String
})


module.exports = {
  User: mongoose.model("User", UserSchema, 'users'),
  CreatUser: mongoose.model( "CreatUser",CreatUser, 'users'),
}
