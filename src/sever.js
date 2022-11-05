const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const ngrok = require('ngrok')
const uri = 'mongodb://localhost:27017/Stranger'


const token = '28sxfXhdECnBaRLDq9fL2hMLq7T_KoFbXKNiVcJaa3YzgpA1'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config()
connection()
connectNGROK()
router(app)

app.listen(port, () => {

  console.log(`App listening on port ` + port)
});
async function connectNGROK() {
  await ngrok.authtoken(token);
  const url = await ngrok.connect(port)
  console.log(`App listening on port ` + url)
}
async function connection() {
  try {
    await mongoose.connect(uri).then(() => {
      console.log(' mooose connection')
    })
  } catch (error) {
    console.log(Error)
  }
}
