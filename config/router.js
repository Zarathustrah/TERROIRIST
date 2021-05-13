/* eslint-disable no-undef */
const router = require('express').Router()
const wines = require('../controllers/wines')
const user = require('../controllers/users')
const secureRoute = require('../lib/secureRoute')

//! Wine routes

router.route('/wines')
  .get(wines.index)
  .post(secureRoute, wines.create)

router.route('/wines/:id')
  .get(wines.show)
  .put(secureRoute, wines.edit)
  .delete(secureRoute, wines.delete)

//! Comment routes

router.route('/wines/:id/comments')
  .post(secureRoute, wines.createReview)

router.route('/wines/:id/comments/:commentId')
  .put(secureRoute, wines.editReview)

router.route('/wines/:id/comments/:commentId')
  .delete(secureRoute, wines.deleteReview)

//! User routes

router.route('/register')
  .post(user.register)

router.route('/login')
  .post(user.login)

router.route('/users')
  .get(user.usersIndex)
  
router.route('/profile')
  .get(secureRoute, user.showProfile)

router.route('/users/:id')
  .get(user.showUser)

  router.route('/users/:userId')
  .put(user.followUser)




  module.exports = router