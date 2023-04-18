const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const uri = 'mongodb://127.0.0.1:27017/Strager'



app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

dotenv.config()
connection()
router(app)

app.listen(port, () => {

  console.log(`App listening on http://localhost:` + port+"/")
});

async function connection() {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(uri,{useNewUrlParser : true}).then(() => {
    
      console.log(' mooose connection')
    })
  } catch (error) {
    console.log(error)
  }
}
