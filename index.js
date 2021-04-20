const express = require('express')
const mongoose = require('mongoose')
// const { AsyncResource } = require('node:async_hooks')
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
    size: { type: Number, required: true },
    vintage: { type: Number, required: true },
    type: { type: String, required: true },
    country: { type: String, required: true },
    region: { type: String, required: true },
    abv: { type: Number, required: true },
    description: { type: String, required: true }
})

  const Wine = mongoose.model('Wine', wineSchema)

  app.use(express.json())

  app.get('/wines', async (req, res) => {
    const wines = await Wine.find()
    res.status(200).json(wines)
  })

  app.post('/wines', async (req, res) => {
    try {
      const createdWine = await Wine.create(req.body)
      res.status(201).json(createdWine)
    } catch(err) {
      res.json(err)
    }
  })

  app.get('/wines/:id', async (req, res) => {
    try {
      const wine = await Wine.findById(req.params.id)
    if (!wine) throw new Error()
    res.status(200).json(wine)
    } catch (err) {
      res.status(404).json('Not Found')
    }
  })

  app.put('/wines/:id', async (req, res) => {
    try {
      const wineToEdit = await Wine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
      res.status(202).json(wineToEdit)

    } catch (err) {

    }
  })

  app.delete('/wines/:id', async (req, res) => {
    try {
      const wineToDelete = await Wine.findByIdAndDelete(req.params.id)
      res.sendStatus(204)
    } catch (err) {
      res.json(err)
    }
  })


app.listen(port, () => console.log(`Listening on Port: ${port}`))