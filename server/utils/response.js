const format = (data, code = 0, msg = 'ok') => {
  return {
    msg,
    code,
    data
  }
}

export {
  format
}