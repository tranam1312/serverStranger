const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  {
    collection: 'users',
  },
)



const CreatUser = new mongoose.Schema({
  email: String,
  username: String,
  password:String,
  passwordConfirmation: String
},{
  collection : 'users'
});

module.exports = {
 User: mongoose.model('users', UserSchema), CreatUser : mongoose.model('User', CreatUser,"users")};

