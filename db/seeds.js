/* eslint-disable no-undef */
const mongoose = require('mongoose')
const { dbURI } = require('../config/environment')

const Wine = require('../models/wine')
const User = require('../models/user')

const wineData = require('./data/wines')
const usersData = require('./data/users')


mongoose.connect(dbURI, 
  async (err, db) => {
    if (err) {
      console.log(err)
      return
    }
     
    try {

      await db.dropDatabase()
      
      console.log('Database Dropped')

      const users = await User.create(usersData)

      const wines = await Wine.create(wineData)

      console.log(`${users.length} Users Created`)
      console.log(`${wines.length} Wines Created`)
      
      await mongoose.connection.close()

      console.log('Goodbye')


    } catch (err) {
      await mongoose.connection.close()
      console.log(err) 
      return
    }


  })