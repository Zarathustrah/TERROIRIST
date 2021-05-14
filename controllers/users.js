const User = require('../models/user')
const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const { unauthorized, notFound } = require('../lib/errorMessages')
const user = require('../models/user')

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

//! Show all users

async function usersIndex(req, res, next) {
  try {
    const users = await User.find()
    if(!users) throw new Error(notFound)
    res.status(200).json(users)
  }catch (err) {
    next(err)
  }
}

// ! Profile show handler

async function showProfile(req, res, next) {
  try {
    const user = await User.findOne({ email: req.body.email })
    if (!user) throw new Error(notFound)
    if (!user._id.equals(req.currentUser._id)) throw new Error(unauthorized)
    return res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//! Show user

async function showUser(req, res, next) {
  try {
    const user = await User.findById(req.params.id)
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//! User follow handler




async function followUser(req, res, next) {
  try {
    const userToFollow = await User.findById(req.params.userId)
    if (!userToFollow) throw new Error(notFound)
    if (userToFollow.followers.includes(follower => follower.user._id.equals(req.currentUser._id))) return userToFollow
    userToFollow.followers.push({ user: req.currentUser })
    await userToFollow.save()
    res.status(201).json(userToFollow)
  } catch (err) {
    next(err)
  }
}




module.exports = {
  register,
  login,
  showProfile,
  showUser,
  followUser,
  usersIndex
}