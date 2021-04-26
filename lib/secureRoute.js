const jwt = require('jsonwebtoken')
const { secret } = require('../config/environment')
const User = require('../models/user')

async function secureRoute(req, res, next) {
  try {
    if (!req.headers.authorization) throw new Error() 

    const token = req.headers.authorization.replace('Bearer ', '') 
    
    const payload = jwt.verify(token, secret) 
    
    const user = await User.findById(payload.sub) 
    
    if (!user) throw new Error() 

    next() 
  
  } catch (err) {
    res.status(401).json({ message: 'Unauthorized' }) // ? <-- any errors at all in the above, will cause this resposne to be sent
  }
}
module.exports =  secureRoute