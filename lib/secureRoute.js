const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

async function secureRoute(req, res, next) {
  try {
    if (!req.headers.authorization) throw new Error() // ? <-- if in incomding request has no header called "authorization" throw to the catch block and reject them
    const token = req.headers.authorization.replace('Bearer ', '') // ? <-- attempt to strip the token from the request headers object
    
    const payload = jwt.verify(token, secret) // ? <-- try and decode this token, if it fails it errors and throws to the catch block, if it works it reurns a payload object containing the users id who is using the token
    
    const user = await User.findById(payload.sub) // ? <-- try and look athat user up, id is on a key called "sub" (subject of the token)
    
    if (!user) throw new Error() // ? <-- if the user cant be found for some reason, throw an error and unauthorise them
    next() // ? <-- or everything is fine, the token was good, we found a user and we can let them through the secure route gate
  
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' }) // ? <-- any errors at all in the above, will cause this resposne to be sent
  }
}
module.exports =  secureRoute