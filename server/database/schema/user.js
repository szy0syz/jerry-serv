const mongoose = require('mongoose')
const bcrypt = require('bcrypt')
const Schema = mongoose.Schema

const SALT_WORK_FACTOR = 10
const MAX_LOGIN_ATTEMPTS = 5
const LOCK_TIME = 2 * 60 * 60 * 1000

const UserSchema = new Schema({
  username: {
    unique: true,
    required: true,
    type: String
  },
  email: {
    unique: true,
    required: true,
    type: String
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    default: 'http://cdn.jerryshi.com/picgo/20180819213615.png'
  },
  role: {
    type: String,
    default: 'user'
  },
  lockUntil: Number,
  loginAttempts: {
    type: Number,
    required: true,
    default: 0
  },
  meta: {
    createdAt: {
      type: Date,
      default: Date.now()
    },
    updatedAt: {
      type: Date,
      default: Date.now()
    }
  }
})

UserSchema.virtual('isLocked').get(function () {
  return !!(this.lockUntil && this.lockUntil > Date.now())  // 取两次反转boolean
})

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) return next()

  // 使用第三方库构建盐
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    // 如果构建盐失败返回
    if (err) return next(err)
    // 尝试用盐加密
    bcrypt.hash(this.password, salt, (error, hash) => {
      // 加密失败抛出去
      if (error) return next(err)

      this.password = hash
      // 交出控制权
      next()
    })
  })
})

// class instance methods
UserSchema.methods = {
  // _password为网站提交来的明文password，第二个就是数据库中加盐后的hash密码
  comparePassword: (_password, password) => {
    return new Promise((resolve, reject) => {
      bcrypt.compare(_password, password, (err, isMatch) => {
        if (!err) resolve(isMatch)
        else reject(err)
      })
    })
  },

  incLoginAttempts: (user) => {
    return new Promise((resolve, reject) => {
      if (this.lockUntil && this.lockUntil < Date.now()) {
        this.update({
          $set: {  // 原来mongoose的$set+$unset就是个原子操作
            loginAttempts: 1
          },
          $unset: {
            lockUntil: 1
          }
        }, (err) => {
          if (!err) resolve(true)
          else reject(err)
        })
      } else {
        let updates = {
          $inc: {
            loginAttempts: 1
          }
        }

        if (this.loginAttempts + 1 >= MAX_LOGIN_ATTEMPTS && !this.isLockde) {
          updates.$set = {
            lockUntil: Date.now() + LOCK_TIME
          }
        }

        this.update(updates, err => {
          if (!err) resolve(true)
          else reject(err)
        })
      }
    })
  }
}

mongoose.model('User', UserSchema)
