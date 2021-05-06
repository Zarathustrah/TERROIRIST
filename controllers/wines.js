/* eslint-disable no-undef */

const Wine = require('../models/wine')
const {notFound } = require('../lib/errorMessages')

async function winesIndex(req, res) {
  try {
    const wines = await Wine.find()
    res.status(200).json(wines)
  } catch (err) {
    res.json(err)
  }
}

async function wineShow(req, res, next) {
   try {
      const wine = await (await Wine.findById(req.params.id).populate('user')).populated('comments.user')
    if (!wine) throw new Error()
    res.status(200).json(notFound)
    } catch (err) {
      next(err)
    }
}

async function wineCreate(req, res, next) {
  try {
    req.body.user = req.currentUser._id
    const createdWine = await Wine.create(req.body)
    res.status(201).json(createdWine)
  } catch(err) {
    next(err)
  }
}

async function wineEdit(req, res, next) {
  try {
    const wineToEdit = await Wine.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true, useFindAndModify: false })
    if (!wineToEdit) throw new Error()
    res.status(202).json(wineToEdit)
  } catch (err) {
    next(err)
  }
}

async function wineDelete(req, res) {
  try {
    const wineToDelete = await Wine.findByIdAndDelete(req.params.id)
    if (!wineToDelete) throw new Error()
    res.sendStatus(204)
  } catch (err) {
    res.json(err)
  }
}

async function wineCommentCreate(req, res) {
  try {
    const wine = await Wine.findById(req.params.id)
    const commentBody = req.body
    commentBody.user = req.currentUser._id
    wine.comments.push(commentBody)
    await wine.save()
    res.status(201).json(wine)
  } catch (err) {
    res.status(400).json(err)
  }
}

async function wineCommentDelete(req, res) {
  try {
    console.log('reached here')
    const wine = await Wine.findById(req.params.id)
    const commentToDelete = wine.comments.id(req.params.commentId)
    await commentToDelete.remove()
    await wine.save()
    res.status(200).json(wine)
  } catch (err) {
    res.status(400).json(err)
  }
}

module.exports = {
  index: winesIndex,
  show: wineShow,
  create: wineCreate,
  edit: wineEdit,
  delete: wineDelete,
  createComment: wineCommentCreate,
  deleteComment: wineCommentDelete
}