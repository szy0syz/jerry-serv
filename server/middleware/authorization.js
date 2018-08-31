const { Enforcer } = require('casbin')

// BasicAuthorizer class stores the casbin handler
class BasicAuthorizer {
  constructor(ctx, enforcer) {
    this.ctx = ctx
    this.enforcer = enforcer
  }

  // getUserName gets the user name from the request.
  // Currently, only HTTP basic authentication is supported
  getUserName() {
    // customize to get username from context
    const { user } = this.ctx
    const { username } = user
    return username
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
    try {
      const enforcer = await newEnforcer()
      if (!(enforcer instanceof Enforcer)) {
        throw new Error('Invalid enforcer')
      }
      const authzorizer = new BasicAuthorizer(ctx, enforcer)
      if (!authzorizer.checkPermission()) {
        ctx.status = 403
      }
      await next()
    } catch (e) {
      throw e
    }
  }
}

export const initCasbin = app => {
  // use authz middleware
  app.use(authz(async () => {
    // load the casbin model and policy from files, database is also supported.
    const enforcer = await Enforcer.newEnforcer("authz_model.conf", "authz_policy.csv")
    return enforcer
  }))
}
