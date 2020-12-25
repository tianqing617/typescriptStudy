const path = require('path')

// 获取根目录的绝对路径
function resolvePath(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  chainWebpack: config => {
    config
      .resolve
        // 设置拓展名
        .extensions
        .add('.ts')
        .end()
      .end()
      // ts loader
      .module
        .rule('ts')
        .test(/\.ts$/)
        .use('cache-loader')
          .loader('cache-loader')
          .tap(options => {
            return { cacheDirectory: resolvePath('node_modules/.cache/ts-loader') }
          })
        .end()
        .use('babel-loader')
          .loader('babel-loader')
          .end()
          .use('ts-loader')
          .loader('ts-loader')
        .end()
      .end()
  },
  devServer: {
    port: 8080,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://127.0.0.1',
        changeOrigin: true,
      }
    }
  }
}
