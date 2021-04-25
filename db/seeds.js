/* eslint-disable no-undef */
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')
const Wine = require('../models/wine')
const wineData = require('./data/wines')


mongoose.connect(dbURI, 
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

      await mongoose.connection.close()

      console.log('Goodbye')


    } catch (err) {
      await mongoose.connection.close()
      console.log(err) 
      return
    }


  })