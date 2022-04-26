const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave:false,
  devServer:{
    proxy:{
      'merchant':{
        target:'http://localhost:8000',
        pathRewrite:{
          '^/merchant':''
        }
      }
    },
    proxy:{
      'car':{
        target:'http://localhost:8000',
        pathRewrite:{
          '^/car':''
        }
      }
    }
  }
})
