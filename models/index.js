require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO_URI);
mongoose.connect("mongodb://localhost:27017/rest-rant", {

  useNewUrlParser: "true",
  useUnifiedTopology: "true"

})
mongoose.connection.on("error", err => {

  console.log("err", err)

})
mongoose.connection.on("connected", (err, res) => {

  console.log("mongoose is connected")

})

// const mongoose = require('mongoose')

// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true, 
//   useUnifiedTopology: true
// })

module.exports.Place = require('./places')

