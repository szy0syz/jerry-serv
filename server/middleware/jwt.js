const jwt = require('jsonwebtoken')
const config = require('../config/index')

module.exports = () => {
  const middleware = koajwt({ secret: config.jwt_secret }).unless({
    path: [/\/admin\/login/, /\/api\/public\//]
  })

  return middleware
}
