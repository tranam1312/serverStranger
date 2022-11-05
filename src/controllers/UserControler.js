const model = require('mongoose')
var { User, CreatUser } = require('../models/UserModel')

var postLogin = async (req, res) => {
  var _username = req.body.username
  var _password = req.body.password
  User.findOne({
    username: _username,
    password: _password,
  })
    .then((data) => {
      res.status(200).json(data).end()
    })
    .catch((err) => {
      res.status(err.status).json(err.message).end()
    })
}

var resgiste = async (req, res) => {
  var _email = req.body.email
  var _username = req.body.username
  var _password = req.body.password
  var _passwordConfirmation = req.body.passwordConfirmation
  UserModel.findOne({
    username: _username,
    email: _email,
  })
    .then(async (data) => {
      if (data != null) {
        await ceat(email, username, password, passwordConfirmation)
      }
    })
    .catch((err) => {
      res.status(err.status).json(err.message).end()
    })
}

var ceat = function newUser(email, username, password, passwordConfirmation) {
  var creatUser = new CreatUser({
    email: email,
    username: username,
    password: password,
    passwordConfirmation: passwordConfirmation,
  })
  return creatUser.save()
}

module.exports = {
  loginControler: postLogin,
  resgisterControler: resgiste,
}
