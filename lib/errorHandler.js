/* eslint-disable no-undef */
const { notFound, unauthorized, validationError } = require('./errorMessages')

function errorHandler(err, req, res, next) {
  if (err.name === validationError) {
    
    const customErrors = {}
    
    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }
    return res.status(422).json({ errors: customErrors })
    
  }
 
  if (err.name === notFound) {
    return res.status(404).json({ message: 'Not Found' })
  }
 
  if (err.name === unauthorized) {
    return res.status(401).json({ message: 'Unauthorized' })
  }
 
  res.sendStatus(500)
  next(err)
}
module.exports = errorHandler