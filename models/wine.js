const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  text: { type: String, maxLength: 500 },
  rating: { type: Number, required: true, min: 1, max: 5 },
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
}, {
  timestamps: true
})


const wineSchema = new mongoose.Schema({
  producer: { type: String, required: true },
  name: { type: String, required: true },
  vintage: { type: Number, required: true },
  type: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  abv: { type: Number, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  retailer: { type: String }, 
  user: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
  comments: [commentSchema]
}, {
  timestamps: true
})

wineSchema.plugin(require('mongoose-unique-validator'))


module.exports = mongoose.model('Wine', wineSchema)