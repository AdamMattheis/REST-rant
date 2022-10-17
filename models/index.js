require('dotenv').config();
const mongoose = require('mongoose');
//mongoose.connect(process.env.MONGO_URI);
mongoose.connect("mongodb+srv://AdamMattheis:Winchester@cluster1.obi8miz.mongodb.net/test", {

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
module.exports.Comment = require('./comment')

