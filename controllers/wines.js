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
    const wineToEdit = await Wine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false })
    res.status(202).json(wineToEdit)
  } catch (err) {
    res.json(err)
  }
}

async function wineDelete(req, res) {
  try {
    const wineToDelete = await Wine.findByIdAndDelete(req.params.id)
    res.sendStatus(204)
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  index: winesIndex,
  show: wineShow,
  create: wineCreate,
  edit: wineEdit,
  delete: wineDelete
}