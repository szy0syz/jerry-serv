import util from 'util'
import ERROR_MSG from './errorMsg'
import constants from './constants'

const HTTP_CODE = constants.HTTP_CODE

function CustomError ({ code, msg, err }) {
  Error.call(this, '')

  this.code = code
  this.msg = msg || ERROR_MSG[code] || 'unknown error'
  this.err = err

  this.getCodeMsg = function () {
    return {
      code: this.code,
      msg: this.msg,
      err: this.err
    }
  }
}

util.inherits(CustomError, Error)

function HttpError ({ code, msg, err }) {
  if (Object.values(HTTP_CODE).indexOf(code) < 0) {
    throw Error('not an invalid http code')
  }

  CustomError.call(this, { code, msg, err })
}
util.inherits(HttpError, CustomError)

export {
  HttpError,
  CustomError
}
