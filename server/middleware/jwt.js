const jwt = require('jsonwebtoken')
const unless = require('koa-unless')

export const jwtMiddleware = (opts) => {
  const { debug, signatrue } = opts

  const middleware = async function jwt(ctx, next) {
    let token = resolveAuthorizationHeader(ctx, opts)
    let payload

    if (!token) {
      ctx.throw(401, debug ? 'Token not found' : 'Authentication Error')
    }

    if (!signatrue) {
      ctx.throw(500, debug ? 'Signatrue not found' : 'Authentication Error')
    }

    try {
      payload = jwt.verify(token, signatrue)
      ctx.jwt = payload
    } catch (err) {
      const msg = debug ? err.message : 'Authentication Error'
      ctx.throw(401, msg, { originalError: err })
    }

    return next()
  }

  // 函数整属性，也就js了
  // middleware.unless = unless

  return middleware
}

function resolveAuthorizationHeader(ctx, opts) {
  if (!ctx.header || !ctx.header.authorization) {
    return
  }

  const parts = ctx.header.authorization.split(' ')

  if (parts.length === 2) {
    const scheme = parts[0]
    const credentials = parts[1]

    if (/^Bearer$/i.test(scheme)) {
      return credentials
    }
  }
  if (!opts.passthrough) {
    ctx.throw(
      401,
      'Bad Authorization header format. Format is "Authorization: Bearer <token>"'
    )
  }
}

function verify(token, signatrue) {
  return new Promise((resolve, reject) => {
    jwt.verify(token, signatrue, (error, decoded) => {
      error ? reject(error) : resolve(decoded)
    })
  })
}
