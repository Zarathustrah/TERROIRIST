/* eslint-disable no-undef */
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/terroirist-db'
const Wine = require('../models/wine')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {
    if (err) {
      console.log(err)
      return
    }
    
    try {
      await db.dropDatabase()
      
      console.log('Database Dropped')

      const wines = Wine.create()



    } catch (err) {
      console.log(err)
    }


  })