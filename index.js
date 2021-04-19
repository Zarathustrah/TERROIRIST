const express = require('express')
const mongoose = require('mongoose')
// const { truncate } = require('node:fs')
const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/terroirist-db'

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  (err) => {
    if (err) {
      console.log(err)
      return
    }
    console.log('Mongo has connected')
  })

  const wineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true }, 
    size: { type: String, required: true },
    vintage: { type: String, required: true },
    type: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    abv: { type: String, required: true },
    description: { type: String, required: true }

  })


app.listen(port, () => console.log(`Listening on Port: ${port}`))