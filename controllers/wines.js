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
    const wine = await Wine.findById(req.params.id).populate('reviews').populate('user')
    if (!wine) throw new Error(notFound)
    res.status(200).json(wine)
    } catch (err) {
      next(err)
    }
}

async function wineCreate(req, res, next) {
  try {
    //  req.body.user = req.currentUser._id
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
    // if (!wineToEdit.user.equals(req.currentUser._id)) throw new Error(unauthorized)
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
    // if (!wineToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized)
    await wineToDelete.remove()
    res.sendStatus(204)
  } catch (err) {
    next(err)
  }
}

// async function wineReviewCreate(req, res, next) {
//   try {
//     const wine = await Wine.findById(req.params.id)
//     if (!wine) throw new Error(notFound)
//     const reviewBody = req.body
//     reviewBody.user = req.currentUser._id
//     wine.reviews.push(reviewBody)
//     await wine.save()
//     res.status(201).json(wine)
//   } catch (err) {
//     next(err)
//   }
// }

// async function wineReviewEdit(req, res, next) {
//   try {
//     const wine = await Wine.findById(req.params.id)
//     if (!wine) throw new Error(notFound)
//     const reviewToEdit = wine.reviews.id(req.params.commentId)
//     if (!reviewToEdit) throw new Error(notFound)
//     if (!reviewToEdit.user.equals(req.currentUser._id)) throw new Error(unauthorized)
//     Object.assign(reviewToEdit, req.body)
//     await wine.save()
//     res.status(202).json(reviewToEdit)
//   } catch (err) {
//     next(err)
//   }
// }

// async function wineReviewDelete(req, res, next) {
//   try {
//     const wine = await Wine.findById(req.params.id)
//     if (!wine) throw new Error(notFound)
//     const reviewToDelete = wine.comments.id(req.params.commentId)
//     if (!reviewToDelete) throw new Error(notFound)
//     if (!reviewToDelete.user.equals(req.currentUser._id)) throw new Error(unauthorized)
//     await reviewToDelete.remove()
//     await wine.save()
//     res.status(200).json(wine)
//   } catch (err) {
//     next(err)
//   }
// }





module.exports = {
  index: winesIndex,
  show: wineShow,
  create: wineCreate,
  edit: wineEdit,
  delete: wineDelete,
  // createReview: wineReviewCreate,
  // editReview: wineReviewEdit,
  // deleteReview: wineReviewDelete,
}