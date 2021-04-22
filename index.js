/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const router = require('./config/router')
const logger = require('./lib/logger')

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


  app.use(express.json())

  app.use(logger)

  app.use(router)




app.listen(port, () => console.log(`Listening on Port: ${port}`))