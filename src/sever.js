const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const uri = 'mongodb://localhost:27017/Stranger'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config()
connection()
router(app)

app.listen(port, () => {
  console.log(`App listening on port ` + port)
})

async function connection() {
  try {
    await mongoose.connect(uri).then(()=> {
      console.log(' mooose connection')
    })
    
  } catch (error) {
    console.log(Error)
  }
}
