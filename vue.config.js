const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

// 跨域配置
module.exports = {
  pluginOptions:{
    'style-resource-loader':{
      preProcessor:'scss',
      patternsL:[]
    }
  },
  devServer: {                //记住，别写错了devServer//设置本地默认端口  选填
    host: '0.0.0.0',
    port: 8080,
    proxy: {                 //设置代理，必须填
      '/api': {              //设置拦截器  拦截器格式   斜杠+拦截器名字，名字可以自己定
        target: 'http://localhost:9090',     //代理的目标地址
        changeOrigin: true,              //是否设置同源，输入是的
        pathRewrite: {                   //路径重写
          '^/api': ''                     //选择忽略拦截器里面的内容
        }
      }
    }
  },

  //打包配置文件
    assetsDir: 'static',
    parallel: false,
    publicPath: '/',

}

