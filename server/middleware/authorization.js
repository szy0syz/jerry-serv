const { Enforcer } = require('casbin')

const regx = [/^\/api\//i, /^(?!\/api\/public\/)/i, /^(?!\/api\/admin\/login)/i]

// BasicAuthorizer class stores the casbin handler
class BasicAuthorizer {
  constructor(ctx, enforcer) {
    this.ctx = ctx
    this.enforcer = enforcer
  }

  getUserName() {
    // customize to get username from context
    const { username } = this.ctx.jwt

    return username || ''
  }

  // checkPermission checks the user/method/path combination from the request.
  // Returns true (permission granted) or false (permission forbidden)
  checkPermission() {
    const { ctx, enforcer } = this
    const { originalUrl: path, method } = ctx
    const user = this.getUserName()

    return enforcer.enforce(user, path, method)
  }
}

// authz returns the authorizer, uses a Casbin enforcer as input
function authz(newEnforcer) {
  return async (ctx, next) => {
    const needAuthz = regx.every(r => r.test(ctx.url))
    if(needAuthz) {
      try {
        const enforcer = await newEnforcer()
        if (!(enforcer instanceof Enforcer)) {
          throw new Error('Invalid enforcer')
        }
        const authzorizer = new BasicAuthorizer(ctx, enforcer)

        if (!authzorizer.checkPermission()) {
          ctx.status = 403
        } else {
          await next()
        }
      } catch (e) {
        throw e
      }
    } else {
      await next()
    }
    
  }
}

export const authorization = app => {
  // use authz middleware
  app.use(authz(async () => {
    // load the casbin model and policy from files, database is also supported.
    const enforcer = await Enforcer.newEnforcer("server/middleware/authz/authz_model.conf", "server/middleware/authz/authz_policy.csv")
    return enforcer
  }))
}
