const { resolve } = require('path')
const r = path => resolve(__dirname, path)

require('babel-core/register')({
  'ignore': [/node_modules/],
  'presets': [
    'stage-3',
    ['latest-node', {
      'target': 'current'
    }]
  ],
  'plugins': [
    'transform-decorators-legacy',
    [
      'module-alias', [
        {
          src: r('./server'), 'expose': '~'
        },
        {
          src: r('./server/database'), 'expose': '~'
        }
      ]
    ]
  ]
})

require('babel-polyfill')
require('./server')
// require('./server/crawler/api')
