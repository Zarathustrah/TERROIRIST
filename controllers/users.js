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
    const user = await User.findById(req.params.userId)
    if (!user) throw new Error(notFound)
    res.status(200).json(user)
  } catch (err) {
    next(err)
  }
}

//! User follow handler

async function followUser(req, res, next) {
  try {
    const follower = await User.findById(req.currentUser._id)
    const followee = await User.findById(req.params.userId)
    if (!followee) throw new Error(notFound)
      
    if (followee.followers.some(follower => follower.user._id.equals(req.currentUser._id))) 
    return res.status(400).json({ message: `Current user, ${follower.username}), already follows user: ${followee.username}` })

    followee.followers.push({ user: req.currentUser._id })
    follower.following.push({ user: followee._id})
    
    await followee.save()
    await follower.save()
    res.status(201).json({ message: "User follow request successful" })
  } catch (err) {
    next(err)
  }
}

// async function followee(req, res, next) {
//   try {
//     const followee = await User.findById(req.params.userId)
//     if (!followee) throw new Error(notFound)

//     const user = req.currentUser
//     if (user.following.some(followeeUser => followeeUser.user._id.equals(req.params.userId)))
//     return res.status(400).json({ message: `${user.username} is already following ${followee.username}` })

//     user.following.push({ user: followee._id })

//     await user.save()
    
//   } catch (err) {
//     next(err)
//   }
// }




module.exports = {
  register,
  login,
  showProfile,
  showUser,
  followUser,
  usersIndex
}