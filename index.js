const express = require('express')
const mongoose = require('mongoose')
const Wine = require('./models/wine')
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



  

  app.post('/wines', async (req, res) => {
    try {
      const createdWine = await Wine.create(req.body)
      res.status(201).json(createdWine)
    } catch(err) {
      res.json(err)
    }
  })



  // app.put('/wines/:id', async (req, res) => {
  //   try {
  //     const wineToEdit = await Wine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
  //     res.status(202).json(wineToEdit)

  //   } catch (err) {

  //   }
  // })

  // app.delete('/wines/:id', async (req, res) => {
  //   try {
  //     const wineToDelete = await Wine.findByIdAndDelete(req.params.id)
  //     res.sendStatus(204)
  //   } catch (err) {
  //     res.json(err)
  //   }
  // })


app.listen(port, () => console.log(`Listening on Port: ${port}`))