module.exports = {
  webpack: (config, options, webpack) => {
    config.entry.main = './server/index.js'
    // add decorators support
    config.module.rules[1].options = Object.assign(config.module.rules[1].options, {plugins: ["transform-decorators-legacy", "transform-class-properties"]})
    return config
  }
}
