const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    host: 'localhost',
    port: 8081, //开发环境运行时的端口
    https: false, //是否启用HTTPS协议
    open: true, //项目运行成功后是否直接打开浏览器
    hot: true, //是否开启热加载
    allowedHosts: 'all',
    proxy: {
      '/api': {
        target: 'http://172.16.41.176:8010', // 后端服务器地址
        secure: false,
        changeOrigin: true, // 允许代理更改源
        pathRewrite: {
          '^/api': '/', // 将所有以 /api 开头的请求路径替换为空
        },
      },
    },
  },
});
