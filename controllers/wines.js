const Wine = require('../models/wine')

async function winesIndex(req, res) {
  try {
    const wines = await Wine.find()
    res.status(200).json(wines)
  } catch (err) {
    res.json(err)
  }
}

async function wineShow(req, res) {
   try {
      const wine = await Wine.findById(req.params.id)
    if (!wine) throw new Error()
    res.status(200).json(wine)
    } catch (err) {
      res.status(404).json('Not Found')
    }
}

async function wineCreate(req, res) {
  try {
    const createdWine = await Wine.create(req.body)
    res.status(201).json(createdWine)
  } catch(err) {
    res.json(err)
  }
}

async function wineEdit(req, res) {
  try {

  } catch (err) {
    
  }
}

async function wineDelete(req, res) {
  try {

  } catch (err) {
    
  }
}

module.exports = {
  index: winesIndex,
  show: wineShow,
  create: wineCreate
}