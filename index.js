/* eslint-disable no-undef */
const express = require('express')
const mongoose = require('mongoose')
const router = require('./config/router')
const errorHandler = require('./lib/errorHandler')
const logger = require('./lib/logger')
const { dbURI } = require('./config/environment')

const app = express()
const port = 4000

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

  app.use(errorHandler)




app.listen(port, () => console.log(`Listening on Port: ${port}`))