'use strict'
const path = require('path')
function resolve(dir) {
    return path.join(__dirname, dir)
}
const port = process.env.port || process.env.npm_config_port || 9529 // dev port

module.exports = {
  lintOnSave:true,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: true
    },
    before: require('./mock/mock-server.js')
  },


  chainWebpack(config) {
        // set svg-sprite-loader
  config.module
    .rule('svg')
    .exclude.add(resolve('src/icons'))
    .end()
  config.module
    .rule('icons')
    .test(/\.svg$/)
    .include.add(resolve('src/icons'))
    .end()
    .use('svg-sprite-loader')
    .loader('svg-sprite-loader')
    .options({
      symbolId: 'icon-[name]'
    })
    .end()
    }
}