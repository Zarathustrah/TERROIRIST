/* eslint-disable no-undef */
const router = require('express').Router()
const wines = require('../controllers/wines')
const auth = require('../controllers/auth')

router.route('/wines')
  .get(wines.index)
  .post(wines.create)

router.route('/wines/:id')
  .get(wines.show)
  .put(wines.edit)
  .delete(wines.delete)

router.route('/register')
  .post(auth.register)

  module.exports = router