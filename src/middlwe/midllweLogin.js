 var jwt = require("jsonwebtoken")
 var secretKey ='my_secret_key'
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
module.exports.verytoken = function verytoken(res, req, next){
  var authorization = req.header("Authorization")
  const token = authorization && authorization.split(' ')[1]
  if(token){
    try{
        jwt.verify(authorization, secretKey, (err, decoded) => {
          if (err) {
            console.log('Invalid token');
            return res.status(200).json({
              error: 'username and password are required',
            })
          } else {
            console.log(decoded); 
            return res.status(200).json({
              error: decoded,
            }).end()
            
          }
        
        });
      
  }catch(err){
    return res.status(401).json(err).end()
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

