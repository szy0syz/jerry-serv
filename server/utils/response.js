const format = (data, code = 0, msg = 'ok', success = false) => {
  return {
    msg,
    code,
    data,
    success
  }
}

export {
  format
}