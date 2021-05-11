/* eslint-disable no-undef */
const router = require('express').Router()
const wines = require('../controllers/wines')
const auth = require('../controllers/auth')
const secureRoute = require('../lib/secureRoute')

router.route('/wines')
  .get(wines.index)
  .post(secureRoute, wines.create)

router.route('/wines/:id')
  .get(wines.show)
  .put(secureRoute, wines.edit)
  .delete(secureRoute, wines.delete)

router.route('/wines/:id/comments')
  .post(secureRoute, wines.createReview)

router.route('/wines/:id/comments/:commentId')
  .put(secureRoute, wines.editReview)

router.route('/wines/:id/comments/:commentId')
  .delete(secureRoute, wines.deleteReview)

router.route('/register')
  .post(auth.register)

router.route('/login')
  .post(auth.login)

  module.exports = router