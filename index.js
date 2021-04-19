const express = require('express')
const mongoose = require('mongoose')
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


app.listen(port, () => console.log(`Listening on Port: ${port}`))