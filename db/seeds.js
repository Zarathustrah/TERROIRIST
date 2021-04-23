/* eslint-disable no-undef */
const mongoose = require('mongoose')
const dbURI = 'mongodb://localhost/terroirist-db'
const Wine = require('../models/wine')
const wineData = require('./data/wines')

mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true },
  async (err, db) => {
    if (err) {
      console.log(err)
      return
    }
     
    try {

      await db.dropDatabase()
      
      console.log('Database Dropped')

      const wines = await Wine.create(wineData)

      console.log(`${wines.length} Wines Created`)

      mongoose.connection.close

      console.log('Goodbye')


    } catch (err) {
      console.log(err)
    }


  })