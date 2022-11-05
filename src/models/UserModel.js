const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
})

const CreatUser = new mongoose.Schema({
  email: String,
  username: String,
  password: String,
  passwordConfirmation: String,
})

CreatUser.methods.comparePassword = function(password) {
  return bcrypt.compareSync(password, this.hash_password);
};

module.exports = {
  User: mongoose.model('users', UserSchema, 'users'),
  CreatUser: mongoose.model('User', CreatUser, 'users'),
}
