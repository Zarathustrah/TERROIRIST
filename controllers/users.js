const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const { unauthorized, notFound } = require('../lib/errorMessages')

// ! Register handler

async function register(req, res, next) {
  try {
    const user = await User.create(req.body)
    res.status(201).json({ message: `Welcome ${user.username}` })
  } catch (err) {
    next(err)
  }
}

// ! Login handler

async function login(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user || !user.validatePassword(req.body.password)) {
      throw new Error(unauthorized)
    }
    const token = jwt.sign( 
      { sub: user._id }, 
      secret, 
      { expiresIn: '7 days' } 
    )
    res.status(202).json({ 
      message: `Welcome back ${user.username}`,
      token
    })
    
  } catch (err) { 
    next(err)

  }
}

// ! Profile show handler

async function showProfile(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error(notFound)
    return res.status(200).json(user)
  } catch (err) {
    next(err)
  }
  

}


module.exports = {
  register,
  login,
  showProfile
}