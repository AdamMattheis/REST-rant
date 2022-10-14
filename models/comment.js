const mongoose = require('mongoose')

let commentSchema = new mongoose.Schema({
    author: { type: String, default: 'Anonymous' },
    rant: { type: Boolean, default: false },
    stars: { type: Number, max: 10, min: 0 },
    content: { type: String, default: '' }
})
  
module.exports = mongoose.model('Comment', commentSchema)
