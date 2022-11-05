
module.exports.postLogin = function check(req, res, next){
  var password = req.body.password 
  var username = req.body.username 
  console.log(username+'\n'+ password)
  if (password  === undefined  | username === undefined) {
    return res.status(400).json({
      error: 'Please fill in all fields',
    })
  } else {   
    if(username.trim().length === 0 && username.trim().length ===0){
      return res.status(200).json({
        error: 'username and password are required',
      })
    }else {
      next()
    }
  }
}

module.exports.postSignUp = function check(req, res, next){
  var password = req.body.password 
  var username = req.body.username 
  console.log(username+'\n'+ password)
  if (password  === undefined  | username === undefined | email === undefined | passwordConfirmation === undefined) {
    return res.status(400).json({
      error: 'Please fill in all fields',
    })
  } else {   
    if(username.trim().length === 0 && username.trim().length ===0){
      return res.status(200).json({
        error: 'username and password are required',
      })
    }else {
      next()
    } 
  }
}

