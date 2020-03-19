
const jwt = require('../lib/jsonwebtoken')
function auth (request,response,next) {
  try {
    const {authorization:token}=request.header
    const decodeToken = jwt.verify(token)
    if(!decodeToken) throw new Error ('invalid token')    
    next()
  } catch (error) {
    response.status(400),
      response.json({
        success: false,
        message: error.message
    
  })
  }
}
module.exports = auth