const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8082,
    // overlay: {
    //   warnings: false,
    //   errors: true
    // },
    // before: require('./mock/mock-server.js'),
    proxy: {
      '/api': {
        ws: false, // 这里把ws代理给关闭
        target: 'http://localhost:8081/', // 线上地址
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/'
          //pathRewrite: {'^/api': '/'} 重写之后url为 http://192.168.1.16:8085/xxxx
          //pathRewrite: {'^/api': '/api'} 重写之后url为 http://192.168.1.16:8085/api/xxxx
        }
      }
    },
    // disableHostCheck: true
  },
})
