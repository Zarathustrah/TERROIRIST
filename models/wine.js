const mongoose = require('mongoose')

const wineSchema = new mongoose.Schema({
  producer: { type: String, required: true },
  name: { type: String, required: true },
  vintage: { type: Number, required: true },
  type: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  countInStock: { type: Number, required: true},
  price: { type: Number, required: true }, 
  
})

wineSchema.plugin(require('mongoose-unique-validator'))


module.exports = mongoose.model('Wine', wineSchema)