export const getFilename = path => {
  const reg = /\/(\w+).js$/
  const res = reg.exec(path)
  return res && res[1]
}
