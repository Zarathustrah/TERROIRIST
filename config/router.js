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
  .post(secureRoute, user.addFavouriteWine)

//! Comment routes

router.route('/wines/:id/reviews')
  .post(secureRoute, wines.createReview)

router.route('/wines/:id/reviews/:reviewId')
  .put(secureRoute, wines.editReview)

router.route('/wines/:id/reviews/:reviewId')
  .delete(secureRoute, wines.deleteReview)

//! User routes

router.route('/register')
  .post(user.register)

router.route('/login')
  .post(user.login)

router.route('/profile')
.get(secureRoute, user.showProfile)

router.route('/profile/favourites/:favouriteId')
  .delete(secureRoute, user.deleteFavouriteWine)

router.route('/users')
  .get(user.usersIndex)
  
router.route('/users/:userId')
  .get(user.showUser)
  .post(secureRoute, user.followUser)







  module.exports = router