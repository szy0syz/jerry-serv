import mongoose from 'mongoose'
const User = mongoose.model('User')

export async function login(username, password) {
  let match = false
  const user = await User.findOne({ username }).exec()

  if (user) {
    match = await user.comparePassword(password, user.password)
  }
  return {
    match,
    user
  }
}
