const Wine = require('../models/wine')

async function winesIndex(req, res) {
  try {
    const wines = await Wine.find()
    res.status(200).json(wines)
  } catch (err) {
    res.json(err)
  }
}

module.exports = {
  index: winesIndex
}