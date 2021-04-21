const router = require('express').Router()
const wines = require('../controllers/wines')

router.route('/wines')
  .get(wines.index)

  module.exports = router