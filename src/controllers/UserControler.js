var { User, CreatUser } = require('../models/UserModel')
var jwt = require('jsonwebtoken')
const secretKey = 'my_secret_key';
var postLogin = async (req, res) => {
  var _username = req.body.username
  var _password = req.body.password
  User.findOne({
    username: _username,
    password: _password,
  })
    .then((data) => {
       jwt.sign({username : _username, password : _password}, secretKey, { expiresIn: '1h' },function(err, token){
        if (err) {
          res.status(400).json(err.message).end()
        } else {
          res.status(400).json({
            idToken: token
          }).end()
        }
      })
    
     
    })
    .catch((err) => {
      res.status(400).json(err.message).end()
    })
}

var resgiste = async (req, res) => {
  var _email = req.body.email
  var _username = req.body.username
  var _password = req.body.password
  var _passwordConfirmation = req.body.passwordConfirmation
  User.findOne({
    username: _username,
    email: _email,
  })
    .then(async (data) => {
      if (data === null) {
        await newUser(_email, _username, _password, _passwordConfirmation)
        return res.status(200).json({
          message: 'Create User successfully',
        })
      } else {
        return res.status(400).json({
          message: 'email and password are required',
        })
      }
    })
    .catch((err) => {
      res.status(err.status).json(err.message).end()
    })
}
 function newUser(email, username, password, passwordConfirmation) {
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
