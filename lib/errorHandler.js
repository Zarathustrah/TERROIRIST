
// const { notFound, unauthorized, validationError } = require('./errorMessages')

function errorHandler(err, req, res, next) {
  if (err.name === 'notFound') {
    
    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }
    return res.status(422).json(err.errors)
  }

  res.sendStatus(500)
  next(err)

}

//   if (err.message === notFound) {
//     return res.status(404).json({ message: 'Not found' })
//   }

//   if (err.message === unauthorized) {
//     return res.status(401).json({ message: 'Unathorized' })
//   }

//   res.sendStatus(500)
//   next(err)
// }
module.exports = errorHandler