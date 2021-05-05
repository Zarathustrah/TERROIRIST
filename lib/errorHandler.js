
function errorHandler(err, req, res, next) {
  if (err.name === 'ValidationError') {
    
    const customErrors = {}

    for (const key in err.errors) {
      customErrors[key] = err.errors[key].message
    }
    return res.status(422).json(customErrors)
  }

}
export default errorHandler