const mongoose = require('mongoose')


const wineSchema = new mongoose.Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true }, 
  size: { type: Number, required: true },
  vintage: { type: Number, required: true },
  type: { type: String, required: true },
  country: { type: String, required: true },
  region: { type: String, required: true },
  abv: { type: Number, required: true },
  description: { type: String, required: true }
})

module.exports = mongoose.model('Wine', wineSchema)