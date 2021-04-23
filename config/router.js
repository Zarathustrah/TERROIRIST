/* eslint-disable no-undef */
const router = require('express').Router()
const wines = require('../controllers/wines')

router.route('/wines')
  .get(wines.index)
  .post(wines.create)

router.route('/wines/:id')
  .get(wines.show)
  .put(wines.edit)
  .delete(wines.delete)

  module.exports = router