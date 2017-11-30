const webpack = require('webpack')
const path = require('path')
const base = require('./webpack.base.config')
base.output.path = path.resolve(__dirname, './extension')
base.devtool = '#source-map'
base.plugins = (base.plugins || []).concat([
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"production"'
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    sourceMap: true,
    compress: {
      warnings: false
    }
  }),
  new webpack.LoaderOptionsPlugin({
    minimize: true
  })
])
module.exports = base