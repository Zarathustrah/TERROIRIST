/* eslint-disable no-undef */

const Wine = require('../models/wine')
const { notFound, unauthorized } = require('../lib/errorMessages')

async function winesIndex(req, res, next) {
  try {
    const wines = await Wine.find()
    if (!wines) throw new Error(notFound)
    res.status(200).json(wines)
  } catch (err) {
    next(err)
  }
}

async function wineShow(req, res, next) {
   try {
    const wine = await Wine.findById(req.params.id).populate('user').populate('comments.user')
    if (!wine) throw new Error(notFound)
    res.status(200).json(wine)
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
    const wineToEdit = await Wine.findById(req.params.id)
    if (!wineToEdit) throw new Error(notFound)
    if (!wineToEdit.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    Object.assign(wineToEdit, req.body)
    await wineToEdit.save()
    res.status(202).json(wineToEdit)
  } catch (err) {
    next(err)
  }
}

async function wineDelete(req, res, next) {
  try {
    const wineToDelete = await Wine.findById(req.params.id)
    if (!wineToDelete) throw new Error(notFound)
    if (!wineToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    await wineToDelete.delete()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

async function wineCommentCreate(req, res, next) {
  try {
    const wine = await Wine.findById(req.params.id)
    if (!wine) throw new Error(notFound)
    const commentBody = req.body
    commentBody.user = req.currentUser._id
    wine.comments.push(commentBody)
    await wine.save()
    res.status(201).json(wine)
  } catch (err) {
    next(err)
  }
}

async function wineCommentEdit(req, res, next) {
  try {
    const wine = await Wine.findById(req.params.id)
    if (!wine) throw new Error(notFound)
    const commentToEdit = wine.comments.id(req.params.commentId)
    if (!commentToEdit) throw new Error(notFound)
    if (!commentToEdit.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    Object.assign(commentToEdit, req.body)
    await wine.save()
    res.status(202).json(commentToEdit)
  } catch (err) {
    next(err)
  }
}

async function wineCommentDelete(req, res, next) {
  try {
    const wine = await Wine.findById(req.params.id)
    if (!wine) throw new Error(notFound)
    const commentToDelete = wine.comments.id(req.params.commentId)
    if (!commentToDelete) throw new Error(notFound)
    if (!commentToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    await commentToDelete.remove()
    await wine.save()
    res.status(200).json(wine)
  } catch (err) {
    next(err)
  }
}

module.exports = {
  index: winesIndex,
  show: wineShow,
  create: wineCreate,
  edit: wineEdit,
  delete: wineDelete,
  createComment: wineCommentCreate,
  editComment: wineCommentEdit,
  deleteComment: wineCommentDelete
}