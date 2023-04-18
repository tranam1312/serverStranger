const express = require('express');

const router = express.Router();
const {loginControler,resgisterControler} = require('../controllers/UserControler');
const loginMiddleware = require('../middlwe/midllweLogin')

router.post('/login',loginMiddleware.postLogin,loginControler);
router.post('/register',loginMiddleware.postLogin,resgisterControler);
router.get("/",loginMiddleware.verytoken,resgisterControler)
module.exports = router